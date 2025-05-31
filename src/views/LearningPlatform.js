import React, { useState, useEffect } from 'react';
import './learningPlatform.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';

// Firebase config (ensure these env vars exist)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if not already initialized
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const db = getFirestore();

const sectionKeys = [
  { key: 'Money', title: 'Money Management' },
  { key: 'wealth', title: 'Wealth Management' },
  { key: 'finance', title: 'Finance Fundamentals' },
  { key: 'investments', title: 'Investments' },
  { key: 'stock', title: 'Stock Market' },
  { key: 'tax', title: 'Tax Planning' },
  { key: 'mutualfunds', title: 'Mutual Funds' },
  { key: 'crypto', title: 'Crypto Basics' },
  // Certification links (use a special key and a url)
  { key: 'cert-finance', title: 'Finance Certification Exam', url: 'https://www.cfainstitute.org/en/programs/cfa/exam' },
  { key: 'cert-stock', title: 'Stock Market Certification', url: 'https://www.nism.ac.in/certification/' },
  { key: 'cert-mutual', title: 'Mutual Funds Certification', url: 'https://www.nism.ac.in/certification/' },
  { key: 'cert-crypto', title: 'Crypto Certification', url: 'https://www.blockchain-council.org/certifications/' }
];

// Static fallback content (add more as needed)
const staticContent = {
  Money: {
    videos: [
      { id: 'static-money1', title: 'Budgeting Basics', url: 'https://www.youtube.com/embed/-vVp185Sq24?si=dfCex6UG1kL3gIJS' },
      { id: 'static-money2', title: 'How to Save Effectively', url: 'https://www.youtube.com/embed/-FP7IVNN4bI?si=gusnEbez3gLv1l68' },
    ],
    articles: [
      { id: 'static-moneyA1', title: '50/30/20 Rule Explained', link: 'https://www.investopedia.com/50-30-20-rule-4769777' },
      { id: 'static-moneyA2', title: 'Building an Emergency Fund', link: 'https://www.nerdwallet.com/article/finance/emergency-fund' },
    ]
  },
  wealth: {
    videos: [
      { id: 'static-wealth1', title: 'What is Wealth Management?', url: 'https://www.youtube.com/embed/Pwk8xLEvyAg?si=GBT5QUTa0c-Mc5n4' }
    ],
    articles: [
      { id: 'static-wealthA1', title: 'Wealth Management Strategies', link: 'https://www.forbes.com/advisor/investing/wealth-management/' }
    ]
  },
  finance: {
    videos: [
      { id: 'static-finance1', title: 'Personal Finance 101', url: 'https://www.youtube.com/embed/NvkS7O7yNcQ?si=9IJz5ZO77-CCAu9n' }
    ],
    articles: [
      { id: 'static-financeA1', title: 'Finance Basics', link: 'https://www.investopedia.com/terms/p/personalfinance.asp' }
    ]
  },
  investments: {
    videos: [
      { id: 'static-invest1', title: 'Investing for Beginners', url: 'https://www.youtube.com/embed/9hBC5TVdYT8' }
    ],
    articles: [
      { id: 'static-investA1', title: 'Investment Basics', link: 'https://www.investopedia.com/investing-4427785' }
    ]
  },
  stock: {
    videos: [
      { id: 'static-stock1', title: 'How the Stock Market Works', url: 'https://www.youtube.com/embed/p7HKvqRI_Bo' }
    ],
    articles: [
      { id: 'static-stockA1', title: 'Stock Market Basics', link: 'https://www.investopedia.com/terms/s/stockmarket.asp' }
    ]
  },
  tax: {
    videos: [
      { id: 'static-tax1', title: 'Tax Planning for Beginners', url: 'https://www.youtube.com/embed/A_JQK_k4Kyc?si=3-0gTmRk_yiAkihv"' }
    ],
    articles: [
      { id: 'static-taxA1', title: 'Tax Planning Strategies', link: 'https://www.investopedia.com/terms/t/tax-planning.asp' }
    ]
  },
  mutualfunds: {
    videos: [
      { id: 'static-mf1', title: 'Mutual Funds Explained', url: 'https://www.youtube.com/embed/PbldLCsspgE?si=nlX5xduA3lEoOxR_' }
    ],
    articles: [
      { id: 'static-mfA1', title: 'What Are Mutual Funds?', link: 'https://www.nerdwallet.com/article/investing/what-is-a-mutual-fund' }
    ]
  },
  crypto: {
    videos: [
      { id: 'static-crypto1', title: 'Crypto Basics', url: 'https://www.youtube.com/embed/SSo_EIwHSd4' }
    ],
    articles: [
      { id: 'static-cryptoA1', title: 'Cryptocurrency 101', link: 'https://www.coinbase.com/learn/crypto-basics/what-is-cryptocurrency' }
    ]
  }
};

// LocalStorage helpers
const getProgress = () => {
  try {
    return JSON.parse(localStorage.getItem('learningProgress')) || {};
  } catch {
    return {};
  }
};
const saveProgressToLocalStorage = (progress) => {
  localStorage.setItem('learningProgress', JSON.stringify(progress));
};

const LearningPlatform = () => {
  const [sections, setSections] = useState([]);
  const [progress, setProgress] = useState(getProgress());
  const [activeSection, setActiveSection] = useState('Money');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      setLoading(true);
      const fetchedSections = [];

      for (const { key, title } of sectionKeys) {
        let videos = [];
        let articles = [];
        try {
          const videosSnap = await getDocs(collection(db, `learning/${key}/videos`));
          const articlesSnap = await getDocs(collection(db, `learning/${key}/articles`));
          videos = videosSnap.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            url: doc.data().url
          }));
          articles = articlesSnap.docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            link: doc.data().link
          }));
        } catch (e) {
          // fallback to static
          console.error(`Error fetching ${key}:`, e);
        }
        const staticVideos = staticContent[key]?.videos || [];
        const staticArticles = staticContent[key]?.articles || [];
        fetchedSections.push({
          key,
          title,
          videos: [...staticVideos, ...videos],
          articles: [...staticArticles, ...articles]
        });
      }

      setSections(fetchedSections);
      setLoading(false);
    };

    fetchSections();
  }, []);

  // Update localStorage whenever progress changes
  useEffect(() => {
    saveProgressToLocalStorage(progress);
  }, [progress]);

  const markComplete = (sectionKey, itemId) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        [sectionKey]: {
          ...prev[sectionKey],
          [itemId]: true
        }
      };
      return updated;
    });
  };

  const getSectionProgress = (section) => {
    const totalItems = section.videos.length + section.articles.length;
    const completed = [
      ...section.videos.map(v => progress[section.key]?.[v.id]),
      ...section.articles.map(a => progress[section.key]?.[a.id])
    ].filter(Boolean).length;

    return totalItems === 0 ? 0 : Math.round((completed / totalItems) * 100);
  };

  return (
    <div className="learning-platform-layout">
      <button
        className="sidebar-toggle-btn"
        onClick={() => setSidebarOpen(o => !o)}
        aria-label={sidebarOpen ? "Close Table of Contents" : "Open Table of Contents"}
      >
        {sidebarOpen ? '❮' : '☰'}
      </button>
      <aside className={`learning-toc ${sidebarOpen ? 'open' : 'closed'}`}>
        <h3>Table of Contents</h3>
        <ul>
          {sectionKeys.map(sec => (
            sec.url ? (
              <li key={sec.key}>
                <a
                  href={sec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="toc-cert-link"
                >
                  {sec.title} <span style={{fontSize: '1.1em'}}></span>
                </a>
              </li>
            ) : (
              <li
                key={sec.key}
                className={activeSection === sec.key ? 'active' : ''}
                onClick={() => {
                  setActiveSection(sec.key);
                  const sectionElement = document.getElementById(`section-${sec.key}`);
                  if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {sec.title}
              </li>
            )
          ))}
        </ul>
      </aside>

      <main className="learning-main">
        <h1 className="learning-platform-title">Learning Platform</h1>
        <p className="learning-platform-desc">
          Learn about money, wealth management, finance, investments, stock market, tax planning, mutual funds, and crypto through curated videos and articles. Track your progress as you learn!
        </p>

        {loading ? (
          <div className="learning-loading">Loading content...</div>
        ) : (
          sections.map(section => (
            <div className="learning-section" id={`section-${section.key}`} key={section.key}>
              <h2 className="learning-section-title">{section.title}</h2>
              <div className="learning-progress-bar">
                <div
                  className="learning-progress-bar-inner"
                  style={{ width: `${getSectionProgress(section)}%` }}
                ></div>
                <span className="learning-progress-label">
                  {getSectionProgress(section)}% completed
                </span>
              </div>

              <div className="learning-videos">
                <h3>Videos</h3>
                <div className="learning-video-list">
                  {section.videos.map(video => (
                    <div
                      className={`learning-video-card ${progress[section.key]?.[video.id] ? 'completed' : ''}`}
                      key={video.id}
                    >
                      <iframe
                        src={video.url}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div className="learning-video-info">
                        <span>{video.title}</span>
                        <button
                          className="learning-mark-btn"
                          disabled={progress[section.key]?.[video.id]}
                          onClick={() => markComplete(section.key, video.id)}
                        >
                          {progress[section.key]?.[video.id] ? 'Completed' : 'Mark as Completed'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="learning-articles">
                <h3>Articles</h3>
                <div className="learning-article-list">
                  {section.articles.map(article => (
                    <div
                      className={`learning-article-card ${progress[section.key]?.[article.id] ? 'completed' : ''}`}
                      key={article.id}
                    >
                      <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
                      <button
                        className="learning-mark-btn"
                        disabled={progress[section.key]?.[article.id]}
                        onClick={() => markComplete(section.key, article.id)}
                      >
                        {progress[section.key]?.[article.id] ? 'Completed' : 'Mark as Completed'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default LearningPlatform;

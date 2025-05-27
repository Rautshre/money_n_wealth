import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)

  const blogLinks = [
    'https://example.com/blog-saving-strategies', // for feature 1
    'https://example.com/blog-wealth-education',   // for feature 2
    'https://example.com/blog-investing-basics'    // for feature 3
  ]

  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div onClick={() => setActiveTab(0)} className="features2-tab-horizontal1">
            <div className="features2-divider-container1">
              {activeTab === 0 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">{props.feature1Description}</span>
            </div>
          </div>
          <div onClick={() => setActiveTab(1)} className="features2-tab-horizontal2">
            <div className="features2-divider-container2">
              {activeTab === 1 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">{props.feature2Description}</span>
            </div>
          </div>
          <div onClick={() => setActiveTab(2)} className="features2-tab-horizontal3">
            <div className="features2-divider-container3">
              {activeTab === 2 && <div className="features2-container5"></div>}
            </div>
            <div className="features2-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">{props.feature3Description}</span>
            </div>
          </div>
        </div>

        <div className="features2-image-container">
          {activeTab === 0 && (
            <a href={blogLinks[0]} target="_blank" rel="noopener noreferrer">
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features2-image1 thq-img-ratio-16-9"
              />
            </a>
          )}
          {activeTab === 1 && (
            <a href={blogLinks[1]} target="_blank" rel="noopener noreferrer">
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features2-image2 thq-img-ratio-16-9"
              />
            </a>
          )}
          {activeTab === 2 && (
            <a href={blogLinks[2]} target="_blank" rel="noopener noreferrer">
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features2-image3 thq-img-ratio-16-9"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature1Title: 'Master the Art of Saving',
  feature1Description:
    'Discover smart saving techniques from our blogs to make the most of your income and secure your financial future.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  feature1ImgAlt: 'Image showing piggy bank and coins',

  feature2Title: 'Learn About Wealth Building',
  feature2Description:
    'Explore videos and blogs that teach the principles of wealth creation through budgeting, planning, and investing.',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1487611459768-bd414656ea10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  feature2ImgAlt: 'Image showing financial graphs and notes',

  feature3Title: 'Investing Basics Explained',
  feature3Description:
    'Start your investment journey with confidence. Read guides and watch tutorials tailored for beginners.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  feature3ImgAlt: 'Image showing charts and investor tools',
}

Features2.propTypes = {
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,

  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,

  feature3Title: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
}

export default Features2

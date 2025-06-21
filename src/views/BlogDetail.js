import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './BlogDetail.css';

const db = getFirestore();

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data());
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div className="blog-detail-loading">Loading blog...</div>;

  return (
    <div className="blog-detail-bg">
      <div className="blog-detail-container">
        <Link to="/blog" className="blog-detail-back">&larr; Back to Blogs</Link>
        <h1 className="blog-detail-title">{blog.title}</h1>
        <div className="blog-detail-meta">
          <span>By <b>{blog.author}</b></span>
          <span className="blog-detail-dot">•</span>
          <span>
            {blog.createdAt?.toDate
              ? blog.createdAt.toDate().toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })
              : ''}
          </span>
        </div>
        <div className="blog-detail-divider" />
        <div className="blog-detail-content">
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
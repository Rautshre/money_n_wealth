import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './style.css';
import Home from './views/home';
import Login from './views/login';
import Blog from './views/blog';
import NotFound from './views/not-found';
import ChatbotWidget from './components/ChatbotWidget';
import Insurance from './views/Insurance';
import LearningPlatform from './views/LearningPlatform';
import FinancialPlans from './views/FinancialPlans';
import BlogDetail from './views/BlogDetail';

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/learning-platform" element={<LearningPlatform />} />
          <Route path="/financial-plans" element={<FinancialPlans />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
        <ChatbotWidget />
      </>
    </Router>
  );
};

// ✅ React 18 compatible rendering
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

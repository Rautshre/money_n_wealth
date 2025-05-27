import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import './login.css'

const firebaseConfig = {
  apiKey: 'AIzaSyD5iAR0TGjWhUWhtA5KIchyAN2xkDlIzzk',
  authDomain: 'moneynwealth-8613e.firebaseapp.com',
  projectId: 'moneynwealth-8613e',
  storageBucket: 'moneynwealth-8613e.appspot.com',
  messagingSenderId: '410260585437',
  appId: '1:410260585437:web:96b4b40448c61f1c655434',
  measurementId: 'G-CEKE258GXX',
}
initializeApp(firebaseConfig)

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const auth = getAuth()
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        if (userCredential.user && name) {
          await userCredential.user.updateProfile({ displayName: name })
        }
        window.location.href = '/'
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        window.location.href = '/'
      }
    } catch (err) {
      setError(err.message.replace('Firebase:', ''))
    }
    setLoading(false)
  }

  return (
    <div className="login-modern-bg">
      <div className="login-modern-container">
        <div className="login-modern-left">
          <h2 className="login-modern-title">{isSignUp ? 'Create Account' : 'Sign In'}</h2>
          <form className="login-modern-form" onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                className="login-modern-input"
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            )}
            <input
              className="login-modern-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              className="login-modern-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <div className="login-modern-links">
              {!isSignUp && <button type="button" className="login-modern-link" tabIndex={0}>Forgot Password?</button>}
            </div>
            {error && <div className="login-modern-error">{error}</div>}
            <button className="login-modern-btn" type="submit" disabled={loading}>
              {loading ? (isSignUp ? 'Signing up...' : 'Signing in...') : (isSignUp ? 'Sign Up' : 'Sign In')}
            </button>
          </form>
          <div className="login-modern-divider">or</div>
          <div className="login-modern-socials">
            <button className="login-modern-social-btn" type="button" disabled>
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
            </button>
            <button className="login-modern-social-btn" type="button" disabled>
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
            </button>
            <button className="login-modern-social-btn" type="button" disabled>
              <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="Twitter" />
            </button>
          </div>
          <div className="login-modern-toggle">
            {isSignUp ? (
              <span>Already have an account? <button type="button" onClick={() => setIsSignUp(false)}>Sign In</button></span>
            ) : (
              <span>Don&apos;t have an account? <button type="button" onClick={() => setIsSignUp(true)}>Sign Up</button></span>
            )}
          </div>
        </div>
        <div className="login-modern-right">
          <div className="login-modern-quote-box">
            <h3 className="login-modern-quote-title">What our Users Say</h3>
            <blockquote className="login-modern-quote">“Managing my money is now easier than ever. Just believe in yourself and start today!”</blockquote>
            <div className="login-modern-quote-author">Max Parjane<br /><span>UI Designer at Google</span></div>
            <div className="login-modern-quote-cta">
              <div className="login-modern-quote-cta-text">Get your finances right and secure your future today!</div>
              <div className="login-modern-quote-avatars">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" />
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="user3" />
                <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="user4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

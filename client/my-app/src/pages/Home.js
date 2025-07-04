import React from 'react'
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='first'>
        <img className='logo' src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo2x._CB611756372_.png" alt="cant load" />
        <h3 className='p'>Take your stories wherever you go</h3>
        <div>
          <button className='btn'><Link to="/login">sign in with your account</Link></button>
          <button className='btn'><Link to="/signup">creat an account</Link></button>
        </div>
        <img className='photo' src="https://m.media-amazon.com/images/G/01/kfw/landing/img_kindleWeb_IN2x._CB610886625_.png" alt="cant load" />
      </div>
      <div className='second'>
        <h1>Explore what Kindle can do</h1>
        <div className='seconddiv'>
          <div className='box'>
            <img className='boximg' src="https://m.media-amazon.com/images/G/01/kfw/landing/img_books2x._CB611756466_.png" alt="cant load" />
            <h3 className='boxh3'>Millions of titles at your fingertips</h3>
            <p>MBrowse books, magazines, and comics, and sample them before you buy. Shop now</p>
          </div>
          <div className='box'>
            <img className='boximg' src="https://m.media-amazon.com/images/G/01/kfw/landing/img_devices._CB611756541_.png" alt="cant load" />
            <h3 className='boxh3'>Read on all your devices</h3>
            <p>Sign in with your account to access your books and other content on any device.</p>
          </div>
          <div className='box'>
            <img className='boximg' src="https://m.media-amazon.com/images/G/01/kfw/landing/img_type2x._CB611757579_.png" alt="cant load" />
            <h3 className='boxh3'>Designed for every reader</h3>
            <p>Customize your Kindle experience to fit your reading needs and preferences.</p>
          </div>

        </div>
      </div>
      <div className='third'>
        <div className='third1'>
          <div className="lilbox">
            <h2>Read the way you want</h2>
            <p>Adjust text size, font, layout, margins, background color, and more so you can read comfortably.</p>
          </div>
          <div className="lilbox">
            <h2>Record notable moments</h2>
            <p>Make notes and highlight your favorite lines. Kindle makes it easy to find and revisit your annotations.</p>
          </div>
        </div>
        <div className='third2'>
          <div className="lilbox">
            <h2>Search within your book
            </h2>
            <p>Search for words, phrases, or names to see where they’re mentioned and jump to that page.</p>
          </div>
          <div className="lilbox">
            <h2>Look up words while you read</h2>
            <p>Quickly see dictionary definitions in your book. Press and hold a word, and then release for the definition.</p>
          </div>
        </div>
      </div>
      <div className='combine'>
        <div className='fourth'>
          <h1>Discover ways to read</h1>
          <p>Read on read.amazon.in or download Kindle on any device.</p>
          <p>Kindle Cloud Reader is now known as Kindle for Web.</p>
          <div>
            <button className='m'><img src="https://m.media-amazon.com/images/G/01/kfw/landing/img_appStore_EN2x._CB611826489_.png" alt="cant" /></button>
            <button className='m'><img src="https://m.media-amazon.com/images/G/01/kfw/landing/img_googlePlay_EN2x._CB611827643_.png" alt="" /></button>
            <button className='m'><img src="https://m.media-amazon.com/images/G/01/kfw/landing/img_pcMac_EN2x._CB611756660_.png" alt="" /></button>
          </div>
        </div>
        <div className='fifth'>
          <h1>Get started with Kindle</h1>
          <div>
            <button className='btn'><Link to="/login">sign in with your account</Link></button>
            <button className='btn'><Link to="/signup">creat an account</Link></button>
          </div>
        </div>
      </div>
      <div className='sixth'>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates.</p>
        <p>Terms of use | Legal notices | Privacy notice | Help</p>
      </div>
    </div>
  )
}

export default Home


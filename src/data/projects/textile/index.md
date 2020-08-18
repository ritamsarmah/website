---
title: Home
project: Textile
index: 0
---

<style>
  .hero {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
  }

  .product-img {
    grid-column: span 2;
    width: 60%;
    margin: 0 auto;
  }

  .product-info {
    grid-column: span 3;
  }

  .product-features {
    display: grid;
    margin-top: 80px;
    grid-template-columns: repeat(3, 1fr);
  }

  .product-feature {
    padding: 0 10px;
      text-align: center;
  }

  .product-feature > img {
    width: 64px;
  }

  @media screen and (max-width: 1023px) {
    .product-img {
      grid-column: span 12;
      width: 200px;
      margin: 0 auto;
    }

    .product-info {
      grid-column: span 12;
      text-align: center;
    }
    
    .product-feature {
      grid-column: span 12;
    }
  }
</style>

<div class="hero">
  <div class="product-img">
    <img src="../../../images/textile/textile.png">
  </div>
  <div class="product-info">
    <br>
    <h1>Textile</h1>
    <h2>Extract text from images, videos, PDFs</h2> 
    <p>
      Textile is a powerful utility for extracting text from images, videos, and PDFs on your computer.
    </p>
    <a href="https://itunes.apple.com/us/app/accelerate-for-safari/id1459809092?mt=12">
      <img height="48px" src="../../../images/macappstore_white.svg" alt="download">
    </a>
  </div>
</div>

<div class="product-features">
  <div class="product-feature">
    <img src="../../../images/textile/text.svg" alt="text">
    <h3>Advanced OCR</h3>
    <p>Textile uses sophisticated text recognition methods to extract and organize text from your files.</p>
  </div>
  <div class="product-feature">
    <img src="../../../images/textile/secure.svg" alt="local">
    <h3>Secure & Private</h3>
    <p>Text extraction runs locally on your computer, so your files never leave your device.</p>
  </div>
  <div class="product-feature">
    <img src="../../../images/textile/safari.svg" alt="safari">
    <h3>Safari Integration</h3>
    <p>Textile's built-in Safari extension can seamlessly copy text from web images with a couple clicks.</p>
  </div>
</div>

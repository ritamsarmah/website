---
title: Home
project: Accelerate
index: 0
---

<style>
  .hero {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
  }

  .product-img {
    grid-column: span 6;
    width: 70%;
  }

  .product-info {
    grid-column: span 6;
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

  @media screen and (max-width: 1024px) {
    .product-img {
      grid-column: span 12;
      width: 200px;
      margin: 0 auto 50px;
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
  <img class="product-img" src="../../../images/accelerate/accelerate.png">
  <div class="product-info">
    <h1>Accelerate</h1>
    <h2>Customizable controls for video playback in Safari</h2> 
    <p>
      Accelerate is a fully customizable Safari extension for controlling video playback & speed on your favorite websites.
    </p>
    <a href="https://itunes.apple.com/us/app/accelerate-for-safari/id1459809092?mt=12">
      <img height="48px" src="../../../images/macappstore_black.svg" alt="download">
    </a>
  </div>
</div>

<div class="product-features">
  <div class="product-feature">
    <img src="../../../images/accelerate.png">
    <h3>Playback Controls</h3>
    <p>Control video playback & speed using keyboard shortcuts or right-click menu options.</p>
  </div>
  <div class="product-feature">
    <img src="../../../images/accelerate.png">
    <h3>Ad Skipping</h3>
    <p>Save time by skipping past unskippable video ads with just a keystroke.</p>
  </div>
  <div class="product-feature">
    <img src="../../../images/accelerate.png">
    <h3>Works Everywhere</h3>
    <p>Supports any website using HTML5 video, including YouTube, Netflix, Hulu, Vimeo, and more.</p>
  </div>
</div>

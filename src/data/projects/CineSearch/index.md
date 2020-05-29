---
title: Home
project: CineSearch
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
    margin: 0 auto;
    width: 60%;
  }

  .product-info {
    grid-column: span 6;
  }

  @media screen and (max-width: 1024px) {
    .product-img {
      grid-column: span 12;
      width: 30%;
      margin: 0 auto 50px;
    }

    .product-info {
      grid-column: span 12;
      text-align: center;
    }

    .product-info > ul {
      list-style: none;
    }
  }
</style>

<div class="hero">
  <img class="product-img" src="../../../images/cinesearch/cinesearch.png">
  <div class="product-info">
    <h1>CineSearch</h1>
    <h2>The best way to discover movies</h2>
    <ul>
      <li>Discover new films based on your favorites</li>
      <li>Search for the latest releases or timeless classics</li>
      <li>View plot summaries, ratings, trailers, and more</li>
    </ul>
    <a href="https://apps.apple.com/us/app/cinesearch/id1300312387">
      <img height="48px" src="../../../images/appstore_white.svg" alt="download">
    </a>
  </div>
</div>

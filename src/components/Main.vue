<script setup lang="ts">
import { Search, Tiktok, PlusCircle } from '@iconoir/vue'
</script>

<template>
  <div class="momomusic__Home--main">
    <div class="header">
      <div class="search">
        <i class="search-btn"><Search /></i>
        <input type="search" class="search-input" placeholder="Type here to search" />
      </div>
    </div>

    <div class="container">
      <div class="box top">
        <h3>Top Artists</h3>
        <div class="contents">
          <div class="artists">
            <img src="../assets/images/artists/artist01.jpeg" alt="Taylor Swift" />
            <em>Taylor Swift</em>
            <span>78M Plays</span>
          </div>
          <div class="artists">
            <img src="../assets/images/artists/artist02.jpeg" alt="Dua Lipa" />
            <em>Dua Lipa</em>
            <span>67M Plays</span>
          </div>
          <div class="artists">
            <img src="../assets/images/artists/artist03.jpeg" alt="Rihanna" />
            <em>Rihanna</em>
            <span>66M Plays</span>
          </div>
          <div class="artists">
            <img src="../assets/images/artists/artist04.jpeg" alt="Ed Sheeran" />
            <em>Ed Sheeran</em>
            <span>62M Plays</span>
          </div>
          <div class="artists">
            <img src="../assets/images/artists/artist05.jpeg" alt="Sia" />
            <em>Sia</em>
            <span>58M Plays</span>
          </div>
          <div class="artists">
            <img src="../assets/images/artists/artist06.jpeg" alt="The Weeknd" />
            <em>The Weeknd</em>
            <span>45M Plays</span>
          </div>
        </div>
        <a href="#" class="more">See all</a>
      </div>
  
      <div class="box genres">
        <h3>Genres</h3>
        <div class="contents">
          <div class="category dance">
            <span>Dance Beat</span>
          </div>
          <div class="category pop">
            <span>Electro Pop</span>
          </div>
          <div class="category indie">
            <span>Alternative Indie</span>
          </div>
          <div class="category hippop">
            <span>Hip Pop</span>
          </div>
          <div class="category classical">
            <span>Classical Period</span>
          </div>
          <div class="category rap">
            <span>Rap Hip Pop</span>
          </div>
        </div>
        <a href="#" class="more">See all</a>
      </div>
  
      <div class="box charts">
        <h3>Top Charts</h3>
        <ol>
          <li>
            <a href="#">
              <div class="music">
                <img src="../assets/images/charts/billboard01.jpeg" alt="Taylor Swift">
                <div class="metadata">
                  <div class="info">
                    <em class="title">Cruel Summer</em>
                    <span class="artist">Taylor Swift</span>
                  </div>
                  <span class="total">3:52</span>
                </div>
              </div>
              <div class="icons">
                <button class="play"><Tiktok /></button>
                <button class="add"><PlusCircle /></button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="music">
                <img src="../assets/images/charts/billboard02.jpeg" alt="Jack Harlow">
                <div class="metadata">
                  <div class="info">
                    <em class="title">Paint The Town Red</em>
                    <span class="artist">Jack Harlow</span>
                  </div>
                  <span class="total">3:52</span>
                </div>
              </div>
              <div class="icons">
                <button class="play"><Tiktok /></button>
                <button class="add"><PlusCircle /></button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="music">
                <img src="../assets/images/charts/billboard03.jpeg" alt="Doja Cat">
                <div class="metadata">
                  <div class="info">
                    <em class="title">Paint The Town Red</em>
                    <span class="artist">Doja Cat</span>
                  </div>
                  <span class="total">3:52</span>
                </div>
              </div>
              <div class="icons">
                <button class="play"><Tiktok /></button>
                <button class="add"><PlusCircle /></button>
              </div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="music">
                <img src="../assets/images/charts/billboard04.jpeg" alt="SZA">
                <div class="metadata">
                  <div class="info">
                    <em class="title">Paint The Town Red</em>
                    <span class="artist">SZA</span>
                  </div>
                  <span class="total">3:52</span>
                </div>
              </div>
              <div class="icons">
                <button class="play"><Tiktok /></button>
                <button class="add"><PlusCircle /></button>
              </div>
            </a>
          </li>
        </ol>
        <a href="#" class="more">See all</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.momomusic__Home--main {
  grid-column: span 2 / span 2;
  padding: 1.25rem;
  color: var(--light-text);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.25rem;
    
    .search {
      flex-grow: 1;
      border-radius: 0.25rem;
      border: 1px solid var(--light-btn);
      background-color: var(--light-input);
      padding: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
      &-btn {
        width: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 100%;
        }
      }
      &-input {
        border: none;
        outline: none;
        background-color: transparent;
        color: var(--light-btn);
        padding-left: 0.25rem;
        width: 100%;
      }
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1.2rem;
  }
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  .box {
    position: relative;
    background-color: var(--white);
    border-radius: 0.25rem;
    padding: 0.8rem;

    .more {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.8rem 0.8rem 0 0;
      font-size: 0.65rem;
      color: var(--light-btn);
    }
  }

  .top {
    grid-column: 1 / 4;
    grid-row: 1;
    .contents {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 -0.8rem;

      .artists {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 0.8rem;

        > img {
          width: 5rem;
          border-radius: 0.65rem;
          margin-bottom: 0.5rem;
        }

        > em {
          font-size: 0.75rem;
          font-weight: 600;
          font-style: normal;
          padding-bottom: 0.15rem;
        }

        > span {
          font-size: 0.65rem;
          font-weight: 200;
          font-style: italic;
        }
      }
    }
  }

  .genres {
    grid-column: 1 / 2;
    grid-row: 2;
    .category {
      &:nth-child(1) {background-color: #d9e7f3;}
      &:nth-child(2) {background-color: #fffaf1;}
      &:nth-child(3) {background-color: #fef1eb;}
      &:nth-child(4) {background-color: #e5eeee;}
      &:nth-child(5) {background-color: #fff7fc;}
      &:nth-child(6) {background-color: #f1efff;}
    }
  }

  .charts {
    grid-column: 2 / 4;
    grid-row: 2;

    li {
      margin-bottom: 0.6rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .music {
      position: relative;
      display: flex;
      align-items: center;
      flex-grow: 1;

      > img {
        width: 3.5rem;
        border-radius: 0.65rem;
        margin-right: 0.6rem;
      }

      .metadata {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-grow: 1;
        
        .info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-right: 0.6rem;

          .title {
            font-size: 0.9rem;
            font-style: normal;
          }
          
          .artist {
            font-size: 0.85rem;
            font-style: italic;
            font-weight: 200;
          }
        }
  
        .total {
          font-size: 0.65rem;
          color: var(--light-week);
        }
      }
    }

    .icons {
      display: flex;
      margin: 0.65rem;
      margin-right: 0;
      gap: 0.65rem;

      button {
        width: 1rem;

        svg {
          width: 100%;
        }
      }
    }
  }
}
</style>

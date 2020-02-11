/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="notice">
          <div className="notice__inner">
            <div className="notice__subject">
              Keep your kitchen running smoothly
            </div>
            <div className="notice__recommendations">
              Plumbing
              Leak Detection
              24 Hour Plumbers
              <div className="notice__closeButton">x</div>
            </div>

          </div>
        </div>
        <div className="navBar">
          <div className="navBar__left">
            <a href="/" className="navBar__link">Write a Review</a>
            <a href="/" className="navBar__link">Events</a>
            <a href="/" className="navBar__link">Talk</a>
          </div>
          <div className="navBar__right">
            Login Signup
          </div>
        </div>
        <div className="main__search">
          <h1 className="logo">
            <a href="/" className="logoLink">Yelp</a>
          </h1>
          <form className="searchBar">
            <div className="searchBar__left">
              <label
                htmlFor="Find"
                className="searchBar__label"
              >
                Find
              </label>
              <input
                id="Find"
                type="text"
                className="searchBar__input"
                placeholder="burgers, barbers, plumbers, hvac..."
              />
              <div className="searchBar__autocomplete">
                <ul className="searchBar__list">
                  <li className="searchBar__suggestion">Restaurants</li>
                  <li className="searchBar__suggestion">Bars</li>
                  <li className="searchBar__suggestion">Waitlist</li>
                  <li className="searchBar__suggestion">Plumbers</li>
                  <li className="searchBar__suggestion">Heating & Air Conditioning</li>
                  <li className="searchBar__suggestion">Auto Repair</li>
                </ul>
              </div>
            </div>
            <div className="searchBar__right">
              <label
                htmlFor="Near"
                className="searchBar__label"
              >
                Near
              </label>
              <input
                id="Near"
                type="text"
                className="searchBar__input"
                placeholder="address, neighborhood, city, state, or zip"
              />
              <div className="searchBar__autocomplete">
                <ul className="searchBar__list">
                  <li className="searchBar__suggestion">Current Location</li>
                  <li className="searchBar__suggestion">Home</li>
                  <li className="searchBar__suggestion">Add a new location</li>
                  <li className="searchBar__suggestion">Edit a saved location</li>
                  <li className="searchBar__suggestion">Clear recent locations</li>
                </ul>
              </div>
            </div>
            <input type="submit" value="Submit" className="searchBar__button" />
          </form>
          <div className="quicklinks">
            <ul className="quicklinks__ul">
              <li className="quicklinks__li"><a href="#">Plumbers</a></li>
              <li className="quicklinks__li"><a href="#">Restaurants</a></li>
              <li className="quicklinks__li submenu__a">
                <a href="#">Home Services *</a>
                <ul className="submenu">
                  <li className="submenu__li"><a href="#">Air Conditioning &amp; Heating</a></li>
                  <li className="submenu__li"><a href="#">Contractors</a></li>
                  <li className="submenu__li"><a href="#">Electricians</a></li>
                  <li className="submenu__li"><a href="#">Home Cleaners</a></li>
                  <li className="submenu__li"><a href="#">Landscapers</a></li>
                  <li className="submenu__li"><a href="#">Locksmiths</a></li>
                  <li className="submenu__li"><a href="#">Movers</a></li>
                  <li className="submenu__li"><a href="#">Painters</a></li>
                  <li className="submenu__li"><a href="#">Plumbers</a></li>
                </ul>
              </li>
              <li className="quicklinks__li"><a href="">Delivery</a></li>
            </ul>
          </div>
        </div>
        <div className="credits">
          <div className="credits__store"><a href="/" className="credits__link">Store Name</a></div>
          <div className="credits__photo">
            Photo by
            <a href="/" className="credits__link">First Last</a>
          </div>
        </div>
      </div>
      <div className="nextReview">
        <h1 className="nextReview__h1">Your Next Review Awaits</h1>
        <div className="visitedPlaces">
          <div className="card">
            <div className="card__img"></div>
            <div className="card__details">
              <div className="card__closeButton">x</div>
              <div className="card__placeName">Store #1</div>
              <div className="card__address">1234 ABC St.</div>
              <div className="card__stars">
                <div className="card__star">&#9734;</div>
                <div className="card__star">&#9734;</div>
                <div className="card__star">&#9734;</div>
                <div className="card__star">&#9734;</div>
                <div className="card__star">&#9734;</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__img"></div>
            <div className="card__details">
              <div className="card__closeButton">x</div>
              <div className="card__placeName"></div>
              <div className="card__address"></div>
              <div className="card__stars"></div>
            </div>
          </div>

          <div className="card">
            <div className="card__img"></div>
            <div className="card__details">
              <div className="card__closeButton">x</div>
              <div className="card__placeName"></div>
              <div className="card__address"></div>
              <div className="card__stars"></div>
            </div>
          </div>

          <div className="card">
            <div className="card__img"></div>
            <div className="card__details">
              <div className="card__closeButton">x</div>
              <div className="card__placeName"></div>
              <div className="card__address"></div>
              <div className="card__stars"></div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" style={{ margin: '16px' }}>Show more suggestions</a>
    </div>
  );
}

export default App;

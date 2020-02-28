/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';

import yelpLogo from './assets/yelp_logo_large.png';
import iconActive from './assets/icon_activelife.png';
import iconAuto from './assets/icon_auto.png';
import iconBeauty from './assets/icon_beauty.png';
import iconHome from './assets/icon_homeservices.png';
import iconMore from './assets/icon_more.png';
import iconNightlife from './assets/icon_nightlife.png';
import iconRestaraunt from './assets/icon_restaraunts.png';
import iconShopping from './assets/icon_shopping.png';

import imageInc82 from './assets/listings/inc82.jpg';
import imageAmakara from './assets/listings/amakara.jpg';
import imageKoiPalace from './assets/listings/koipalace.jpg';
import imageLazyDog from './assets/listings/lazydog.jpg';
import imagePho99 from './assets/listings/pho99.jpg';
import imageSodam from './assets/listings/sodam.jpg';
import imageUrbanPlates from './assets/listings/urbanplates.jpg';
import imageMarketTavern from './assets/listings/markettavern.jpg';
import image88BaoBao from './assets/listings/88baobao.jpg';


function App() {
  return (
    <div className="App">
      <div className="search">
        <div className="search-header">
          <ul className="search-header-links">
            <li className="search-header-link"><a href="#" className="header-link">Write a Review</a></li>
            <li className="search-header-link"><a href="#" className="header-link">Events</a></li>
            <li className="search-header-link"><a href="#" className="header-link">Talk</a></li>
          </ul>
          <div className="search-header-account-controls">
            <a href="#">
              <div className="search-header-account-icon">
                <svg id="24x24_speech" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M18 3H6C4.34 3 3 4.34 3 6v7c0 1.66 1.34 3 3 3h2v5l5-5h5c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3z"></path>
                </svg>
              </div>
            </a>
            <a href="#">
              <div className="search-header-account-icon">
                <svg id="24x24_notification" height="24" viewBox="0 0 24 24" width="24"><path d="M20.984 17.177A1 1 0 0 1 20 18H4a1 1 0 0 1-.348-1.938c2.43-.9 3.74-4.605 3.74-7.634 0-1.75 1.07-3.253 2.608-3.97V4a2 2 0 0 1 4 0v.457c1.538.718 2.61 2.22 2.61 3.97 0 3.03 1.31 6.734 3.738 7.635a1 1 0 0 1 .636 1.115zM12 22a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3z"></path></svg>
              </div>
            </a>
            <a href="#" className="search-header-user-link">
              <div className="search-header-account-user">
                <div className="user-image"></div>
                <a href="#" className="user-button-expand-link">
                  <svg className="user-button-expan-icon" height="14" viewBox="0 0 14 14" width="14"><path d="M7 9L3.5 5h7L7 9z"></path></svg>
                </a>
              </div>
              <div className="search-header-user-submenu">
                <div className="user-submenu-image"></div>
                <div className="user-submenu-info">
                  <div className="user-submenu-name">Pika C.</div>
                  <div className="user-submenu-location">San Ramon, CA</div>
                  <div className="user-submenu-followers">
                    <svg height="18" viewBox="0 0 18 18" width="18"><g><path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path><path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" opacity=".502"></path></g></svg>
                    321
                  </div>
                  <div className="user-submenu-reviews">
                    <svg height="18" viewBox="0 0 18 18" width="18"><path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z"></path></svg>
                    78
                  </div>
                </div>
                <ul className="user-submenu-links">
                  <li className="user-submenu-link">
                    <svg className="user-submenu-link-icon" height="24" viewBox="0 0 24 24" width="24"><path d="M4.37 22c.278-4.762 3.587-8 7.63-8 4.043 0 7.352 3.238 7.63 8H4.37zM12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"></path></svg>
                    About Me
                  </li>
                  <li className="user-submenu-link">
                    <svg className="user-submenu-link-icon" height="24" viewBox="0 0 24 24" width="24"><g><path d="M10.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946C1.618 12.48 2.586 11 4.018 11h4.964c1.432 0 2.4 1.48 1.842 2.817zM6.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path><path d="M21.824 13.817l-2.482 5.946c-.69 1.65-2.995 1.65-3.684 0l-2.482-5.946c-.558-1.337.41-2.817 1.842-2.817h4.964c1.432 0 2.4 1.48 1.842 2.817zM17.5 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" opacity=".502"></path></g></svg>
                    Find Friends
                  </li>
                  <li className="user-submenu-link">
                    <svg className="user-submenu-link-icon" height="24" viewBox="0 0 24 24" width="24"><path d="M13.632 11.153c1.49.283 2.765 1.012 2.765 2.752 0 1.683-1.296 2.78-3.402 2.978l.008.89H11.75v-.883c-2.547-.17-3.453-1.584-3.476-2.886h2.113c.03.616.502 1.146 1.41 1.267v-2.495l-.66-.133c-1.44-.29-2.668-1.13-2.668-2.75 0-1.713 1.443-2.66 3.294-2.823v-.91h1.26v.913c1.948.204 3.154 1.35 3.176 2.815h-2.05c-.016-.53-.42-1.083-1.163-1.21v2.34l.645.135zm-.645 4.11c.727-.057 1.252-.495 1.252-1.146 0-.56-.37-.927-1.12-1.125-.045-.006-.09-.02-.135-.028v2.3zm-1.19-6.592c-.66.074-1.148.46-1.148 1.057 0 .494.335.85.98 1.04.052.02.104.036.164.05V8.67zm9.13 4.12l-3.062-3.95h2.06c-1.27-2.854-4.193-4.862-7.603-4.862-4.57 0-8.29 3.6-8.29 8.024 0 4.426 3.72 8.026 8.29 8.026 3.566 0 6.604-2.195 7.772-5.26h2.148C21 18.936 17.026 22 12.322 22c-5.696 0-10.33-4.486-10.33-10S6.626 2 12.322 2c4.554 0 8.418 2.872 9.788 6.84h1.877l-3.06 3.95z"></path></svg>
                    Cash Back	NEW
                  </li>
                  <li className="user-submenu-link">
                    <svg className="user-submenu-link-icon" height="24" viewBox="0 0 24 24" width="24"><path d="M21.872 10.48c.076.497.128 1.002.128 1.52s-.05 1.022-.127 1.518l-3.165.475c-.14.47-.323.92-.552 1.343l1.9 2.57c-.3.408-.62.8-.976 1.156l-.018.018a10.05 10.05 0 0 1-1.154.975l-2.57-1.9a7 7 0 0 1-1.344.553l-.475 3.165a9.94 9.94 0 0 1-1.506.127h-.034c-.51 0-1.01-.052-1.5-.127l-.475-3.165a7 7 0 0 1-1.343-.553l-2.57 1.9c-.408-.3-.798-.62-1.155-.975l-.018-.018a10.068 10.068 0 0 1-.978-1.155l1.9-2.57a6.97 6.97 0 0 1-.552-1.344l-3.164-.475C2.052 13.022 2 12.518 2 12s.052-1.023.128-1.52l3.164-.475a7 7 0 0 1 .553-1.342l-1.9-2.57a10.035 10.035 0 0 1 2.148-2.15l2.57 1.9a7.015 7.015 0 0 1 1.343-.55l.475-3.166C10.98 2.052 11.486 2 12 2s1.023.052 1.52.127l.474 3.165c.47.14.92.323 1.342.552l2.57-1.9a10.044 10.044 0 0 1 2.15 2.148l-1.9 2.57c.23.424.412.874.552 1.343l3.164.475zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path></svg>
                    Account Settings
                  </li>
                </ul>
                <a href="#" className="user-submenu-logout">Log Out</a>
              </div>
            </a>
          </div>
        </div>
        <form className="search-form">
          <div className="search-form-controls">
            <div className="search-button-cancel">Cancel</div>
            <img src={yelpLogo} className="search-logo" alt="yelp logo" />
            <div className="search-button-search">Search</div>
          </div>
          <div className="search-box search-box--find line-after">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="search-icon"><path d="M15.913 14.224a1.324 1.324 0 0 0-.3-.466h.01l-3.378-3.376a5.49 5.49 0 0 0 .802-2.857 5.523 5.523 0 1 0-5.522 5.52 5.49 5.49 0 0 0 2.856-.8l3.37 3.368.006.003a1.364 1.364 0 0 0 .93.384C15.41 16 16 15.41 16 14.684c0-.163-.032-.317-.086-.46zM7.525 10.94a3.422 3.422 0 0 1-3.418-3.416 3.422 3.422 0 0 1 3.418-3.417 3.422 3.422 0 0 1 3.416 3.417 3.42 3.42 0 0 1-3.413 3.416z"></path></svg>
            <label className="search-label search-label--phrase">Find</label>
            <input className="search-input search-input--phrase" type="text" placeholder="Search for burgers, delivery, barbers on Yelp" />
            <ul className="search-suggestions">
              <a href="#">
                <li className="list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="list-item-icon">
                    <path d="M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z"></path>
                  </svg>
                  Restaraunts
                </li>
              </a>
              <a href="#">
                <li className="list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="list-item-icon">
                    <path d="M19.215 3H4.785C3.095 3 2.29 5.08 3.54 6.22L11 13v6H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-6l7.46-6.78C21.71 5.08 20.905 3 19.214 3zM15 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
                  </svg>
                  Bars
                </li>
              </a>
              <a href="#">
                <li className="list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="list-item-icon">
                    <path d="M19 13h-1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5h15a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3zm1-5c0-.55-.45-1-1-1h-1v4h1c.55 0 1-.45 1-1V8zm2 10a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1z"></path>
                  </svg>
                  Coffee &amp; Tea
                </li>
              </a>
              <a href="#">
                <li className="list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="list-item-icon">
                    <path d="M19 10V4h-6v10H9.444a3.485 3.485 0 0 0-4.888 0H2v3h1.55A3.49 3.49 0 0 0 7 20a3.49 3.49 0 0 0 3.45-3h3.1c.24 1.69 1.69 3 3.45 3 1.76 0 3.21-1.31 3.45-3H22v-5l-3-2zM7 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm8-12h2v3h-2V6zm2 12c-.83 0-1.5-.67-1.5-1.5S16.17 15 17 15s1.5.67 1.5 1.5S17.83 18 17 18z"></path>
                    <path d="M6 7V6c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v1H6m2-4H7a3 3 0 0 0-3 3v1H2v7h11V7h-2V6a3 3 0 0 0-3-3" opacity=".502"></path>
                  </svg>
                  Order Takeout or Delivery
                </li>
              </a>
              <a href="#">
                <li className="list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="list-item-icon">
                    <path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 1 1 0 0 1 2 0h8a1 1 0 0 1 2 0 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm1-13H5v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8zm-6 5h4v4h-4v-4z"></path>
                  </svg>
                  Make a Reservation
                </li>
              </a>
              <a href="#">
                <li className="list-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="list-item-icon">
                    <path d="M20 7h-3.19l1.003-3.74a1 1 0 1 0-1.932-.518L14.74 7H4a1 1 0 0 0 0 2l1.518 7.588A2.998 2.998 0 0 0 8.458 19H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-2.46a3 3 0 0 0 2.942-2.412L20 9a1 1 0 0 0 0-2zm-5 8h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z"></path>
                  </svg>
                  Drugstores
                </li>
              </a>
            </ul>
          </div>
          <div className="search-box search-box--location">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="search-icon"><path d="M14 7A5 5 0 0 0 4 7c0 1.97 1.15 3.658 2.806 4.472h-.17L9 16l2.363-4.528h-.17C12.85 10.658 14 8.97 14 7zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path></svg>
            <label className="search-label search-label--location">Near</label>
            <input className="search-input search-input--location" type="text" placeholder="Current Location" />
            <ul className="location-suggestions">
              <a href="#">
                <li className="list-item list-item--blue">
                  <svg viewBox="0 0 24 24" className="list-item-icon"><path d="M3 12.73L20 4l-8.73 17-.696-7.574L3 12.73z"></path></svg>
                  Current Location
                </li>
              </a>
              <a href="#">
                <li className="list-item">
                  San Francisco, CA 94105
                </li>
              </a>
            </ul>
          </div>
          <ul className="quick-links">
            <li className="quick-link">
              <svg className="quick-link-icon" viewBox="0 0 24 24" width="24">
                <path d="M13 16.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-5.17c0-.2.12-.38.303-.46l6-2.57a.5.5 0 0 1 .697.458v.838l6.964-2.834a1 1 0 0 1 1.302.552l.765 1.893L13 12.84v3.66zm0-9.83a.5.5 0 0 1-.303.46l-6 2.57A.5.5 0 0 1 6 9.243V5.5a.5.5 0 0 1 .5-.5h6.456l3.978-1.607.374.927L13 6.06v.61zM17 19v2H2v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1zm5.03-5.5a1.5 1.5 0 0 1-3 0c0-.828 1.5-2.5 1.5-2.5s1.5 1.672 1.5 2.5z"></path>
              </svg>
              <a href="#">Plumbers</a>
            </li>
            <li className="quick-link">
              <svg className="quick-link-icon" viewBox="0 0 18 18" width="18">
                <path d="M13.61 17h-.007a1.39 1.39 0 0 1-1.376-1.587L13 10l-2-1c0-5.373 1.375-8 3.25-8 .497 0 .75.336.75.75v13.86A1.39 1.39 0 0 1 13.61 17zM6.557 9.912l.35 5.59a1.41 1.41 0 1 1-2.813 0l.35-5.59A1.994 1.994 0 0 1 3 8V1.5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0V8c0 .91-.61 1.67-1.443 1.912z"></path>
              </svg>
              <a href="#">Restaurants</a>
            </li>
            <li className="quick-link quick-link--homeservices">
              <svg className="quick-link-icon" height="18" viewBox="0 0 18 18" width="18">
                <path d="M16.7 16H13v-4.7a.3.3 0 0 0-.3-.3h-2.4a.3.3 0 0 0-.3.3V16H2.3a.3.3 0 0 1-.3-.3V9.25l6-2.182V3.735a.3.3 0 0 1 .434-.268l8.4 4.2a.3.3 0 0 1 .166.268V15.7a.3.3 0 0 1-.3.3zM8 11.3a.3.3 0 0 0-.3-.3H4.3a.3.3 0 0 0-.3.3v2.4a.3.3 0 0 0 .3.3h3.4a.3.3 0 0 0 .3-.3v-2.4zm4-9a.3.3 0 0 1 .3-.3h3.4a.3.3 0 0 1 .3.3v3.005L12 3.5V2.3zM1 7.17l6-2.354V6.37L1 8.72V7.17z"></path>
              </svg>
              <a href="#">
                Home Services
              </a>
              <svg className="quick-link-icon" height="14" viewBox="0 0 14 14" width="14"><path d="M7 9L3.5 5h7L7 9z"></path></svg>
              <ul className="quick-link-submenu">
                <li className="quick-link-submenu-item"><a href="#">Air Conditioning &amp; Heating</a></li>
                <li className="quick-link-submenu-item"><a href="#">Contractors</a></li>
                <li className="quick-link-submenu-item"><a href="#">Electricians</a></li>
                <li className="quick-link-submenu-item"><a href="#">Home Cleaners</a></li>
                <li className="quick-link-submenu-item"><a href="#">Landscapers</a></li>
                <li className="quick-link-submenu-item"><a href="#">Locksmiths</a></li>
                <li className="quick-link-submenu-item"><a href="#">Movers</a></li>
                <li className="quick-link-submenu-item"><a href="#">Painters</a></li>
                <li className="quick-link-submenu-item"><a href="#">Plumbers</a></li>
              </ul>
            </li>
            <li className="quick-link">
              <svg className="quick-link-icon" height="18" viewBox="0 0 18 18" width="18">
                <path d="M15.5 10c-1.93 0-3.5 1.57-3.5 3.5v.5H5.95a2.504 2.504 0 0 1-2.45 2 2.502 2.502 0 0 1-2.45-2H0v-2a5 5 0 0 1 5-5h3v2H7a1.5 1.5 0 0 0 0 3h2l2-4V5h1.94l-1-2H9V2h3.56l3.52 7.04c.653.085 1.28.308 1.838.665l-.537.842A3.502 3.502 0 0 0 15.5 10zM2.092 14c.207.58.757 1 1.408 1 .65 0 1.2-.42 1.408-1H2.092zM15.5 11c1.38 0 2.5 1.122 2.5 2.5S16.88 16 15.5 16 13 14.878 13 13.5s1.12-2.5 2.5-2.5zm0 4c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5z"></path>
              </svg>
              <a href="#">Delivery</a>
            </li>
          </ul>
        </form>
        <div className="search-footer">
          <div className="bg-store-name">Hanami Sushi</div>
          Photo by <span className="bg-photographer">Kevin P.</span>
        </div>
      </div>


      <ul className="categories">
        <a href="#">
          <li className="category-item">
            <img src={iconRestaraunt} className="category-icon" alt="plates and silverware" />
            Restaraunts
          </li>
        </a>
        <a href="#">
          <li className="category-item">
            <img src={iconShopping} className="category-icon" alt="shopping bags" />
            Shopping
          </li>
        </a>
        <a href="#">
          <li className="category-item">
            <img src={iconNightlife} className="category-icon" alt="martini glass" />
            Nightlife
          </li>
        </a>
        <a href="#">
          <li className="category-item">
            <img src={iconActive} className="category-icon" alt="soccer ball" />
            Active Life
          </li>
        </a>
        <a href="#">
          <li className="category-item">
            <img src={iconBeauty} className="category-icon" alt="hand mirror" />
            Beauty &amp; Spas
          </li>
        </a>
        <a href="#">
          <li className="category-item">
            <img src={iconAuto} className="category-icon" alt="car" />
            Automotive
          </li>
        </a>
        <a href="#">
          <li className="category-item">
            <img src={iconHome} className="category-icon" alt="wrench" />
            Home Services
          </li>
        </a>
        <a href="#">
          <li className="category-item">
            <img src={iconMore} className="category-icon" alt="ellipsis" />
            More Categories
          </li>
        </a>
      </ul>

      <h2 className="localHeader">Local Favorites</h2>
      <ul className="listings">
        <a href="#">
          <li className="listing">
            <img src={imageInc82} className="listing-photo" alt="pint glasses" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">INC 82</h1>
                <span className="distance">1.2 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--four"></div>
                <span className="reviews">431 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$$</span>
                <span className="tags">
                  <a href="#">Breweries</a>, <a href="#">Gastropubs</a>, <a href="#">Cocktail Bars</a>
                </span>
              </div>
              <div className="listing-address">7467 Village Pkwy, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
        <a href="#">
          <li className="listing">
            <img src={imageAmakara} className="listing-photo" alt="sushi" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">Amakara</h1>
                <span className="distance">1.2 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--four-half"></div>
                <span className="reviews">2371 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$$</span>
                <span className="tags">
                  <a href="#">Sushi Bars</a>, <a href="#">Japanese</a>
                </span>
              </div>
              <div className="listing-address">7568 Dublin Blvd, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
        <a href="#">
          <li className="listing">
            <img src={image88BaoBao} className="listing-photo" alt="chinese dumplings" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">88 Bao Bao</h1>
                <span className="distance">4.0 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--four"></div>
                <span className="reviews">399 reviews</span>
              </div>
              <div className="listing-info">
                <span className="tags">
                  <a href="#">Dim Sum</a>
                </span>
              </div>
              <div className="listing-address">3880 Fallon Rd, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
        <a href="#">
          <li className="listing">
            <img src={imageMarketTavern} className="listing-photo" alt="steak" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">Market Tavern Dublin</h1>
                <span className="distance">2.2 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--three-half"></div>
                <span className="reviews">293 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$$$</span>
                <span className="tags">
                  <a href="#">American (New)</a>
                </span>
              </div>
              <div className="listing-address">4775 Hacienda Dr, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
        <a href="#">
          <li className="listing">
            <img src={imageSodam} className="listing-photo" alt="korean kim bap" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">Sodam</h1>
                <span className="distance">1.3 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--four"></div>
                <span className="reviews">293 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$</span>
                <span className="tags">
                  <a href="#">Korean</a>, <a href="#">Tea Rooms</a>, <a href="#">Bakery</a>
                </span>
              </div>
              <div className="listing-address">7992 Amador Valley Blvd, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
        <a href="#">
          <li className="listing">
            <img src={imageKoiPalace} className="listing-photo" alt="Colorful Chinese Food" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">Koi Palace</h1>
                <span className="distance">2.8 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--three-half"></div>
                <span className="reviews">1553 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$$</span>
                <span className="tags">
                  <a href="#">Dim Sum</a>, <a href="#">Seafood</a>, <a href="#">Cantonese</a>
                </span>
              </div>
              <div className="listing-address">4228 Dublin Blvd, Dublin, CA 94568</div>
            </div>
          </li>
        </a>

        <a href="#">
          <li className="listing">
            <img src={imageLazyDog} className="listing-photo" alt="sandwich stacked high" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">Lazy Dog Restaraunt &amp; Bar</h1>
                <span className="distance">2.2 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--four"></div>
                <span className="reviews">2609 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$$</span>
                <span className="tags">
                  <a href="#">American (New)</a>, <a href="#">Comfort Food</a>, <a href="#">Burgers</a>
                </span>
              </div>
              <div className="listing-address">4805 Hacienda Dr, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
        <a href="#">
          <li className="listing">
            <img src={imagePho99} className="listing-photo" alt="Vietnamese spring rolls" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">Pho 99</h1>
                <span className="distance">0.8 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--four"></div>
                <span className="reviews">433 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$</span>
                <span className="tags">
                  <a href="#">Vietnamese</a>
                </span>
              </div>
              <div className="listing-address">7459 Amador Valley Blvd, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
        <a href="#">
          <li className="listing">
            <img src={imageUrbanPlates} className="listing-photo" alt="Mashed potatoes, brussel sprouts, beef" />
            <div className="listing-details">
              <div className="listing-header">
                <h1 className="name">Urban Plates</h1>
                <span className="distance">2.1 mi</span>
              </div>
              <div className="listing-rating">
                <div className="star-rating star-rating--four"></div>
                <span className="reviews">955 reviews</span>
              </div>
              <div className="listing-info">
                <span className="price bullet-after">$$</span>
                <span className="tags">
                  <a href="#">American (New)</a>, <a href="#">Salad</a>, <a href="#">Sandwiches</a>
                </span>
              </div>
              <div className="listing-address">5111 Martinelli Way, Dublin, CA 94568</div>
            </div>
          </li>
        </a>
      </ul>
    </div>

  );
}

export default App;

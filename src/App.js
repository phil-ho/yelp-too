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
        <form className="search-form">
          <div className="search-form-controls">
            <div className="search-button-cancel">Cancel</div>
            <img src={yelpLogo} className="search-logo" alt="yelp logo" />
            <div className="search-button-search">Search</div>
          </div>
          <div className="search-box search-box--find">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="search-icon"><path d="M15.913 14.224a1.324 1.324 0 0 0-.3-.466h.01l-3.378-3.376a5.49 5.49 0 0 0 .802-2.857 5.523 5.523 0 1 0-5.522 5.52 5.49 5.49 0 0 0 2.856-.8l3.37 3.368.006.003a1.364 1.364 0 0 0 .93.384C15.41 16 16 15.41 16 14.684c0-.163-.032-.317-.086-.46zM7.525 10.94a3.422 3.422 0 0 1-3.418-3.416 3.422 3.422 0 0 1 3.418-3.417 3.422 3.422 0 0 1 3.416 3.417 3.42 3.42 0 0 1-3.413 3.416z"></path></svg>
            <input className="search-input search-input---phrase" type="text" placeholder="Search for burgers, delivery, barbers on Yelp" />
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
        </form>
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
            <div className="details">
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
            <div className="details">
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
            <div className="details">
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
            <div className="details">
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
            <div className="details">
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
            <div className="details">
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
            <div className="details">
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
            <div className="details">
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
            <div className="details">
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

import React from 'react';

const PlacesCard = () => {
  return (
    <React.Fragment>
      <article className="cities__place-card place-card">
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;80</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                {/* <use xlink:href="#icon-bookmark" /> */}
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              {/* <span style="width: 80%" />*/}
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Wood and stone place</a>
          </h2>
          <p className="place-card__type">Private room</p>
        </div>
      </article>
    </React.Fragment>
  );
};

export default PlacesCard;

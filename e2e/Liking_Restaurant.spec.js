/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  pause();
  I.amOnPage('/#/favorites');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__title');

  const firstRestaurant = locate('.post-item__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restoran-item');

  const likedRestaurantName = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unlike one restaurants', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.post-item__title');

  const firstRestaurant = locate('.post-item__title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.restoran-item');

  const likedRestaurantName = await I.grabTextFrom('.post-item__title');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.post-item__title');

  const firstRestaurantLiked = locate('.post-item__title').first();
  I.click(firstRestaurantLiked);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

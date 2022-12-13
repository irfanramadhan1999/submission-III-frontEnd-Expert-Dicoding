import SourceRestaurant from '../../data/therestaurant-source';
import Loader from '../../utils/loader';
import createRestaurantItem from '../templates/items-template';

const RestaurantList = {
  async render() {
    return `
      <div class="hero">
      <div class="hero__inner">
          <h2 class="hero__title">Nikmati Makanan Favorit dari Restoran Kami</h2>
        </div>
      </div>

      <main id="main" tabindex="0">
        <section class="content">
          <h2 class="list-restoran__label">
            List Restaurant Kami
          </h2>
          <div class="list-restoran"></div>
        </section>
      </main>
    `;
  },

  async afterRender() {
    Loader.hideLoading();
    const restaurants = await SourceRestaurant.restaurantList();
    const restaurantsContainer = document.querySelector('.list-restoran');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default RestaurantList;

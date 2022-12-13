import CONFIG_RES from '../../globals/config-restaurant';

const createRestaurantItem = (restaurant) => `
  <article class="restoran-item">
    <a href="/#/detail/${restaurant.id}">
      <img class="restoran-item_thumbnail lazyload" data-src="${CONFIG_RES.URL_BASE_IMAGE + restaurant.pictureId}" alt="${restaurant.name || '-'}">
      <div class="post-item_content">
        <p class="post-item__date">Rating : ${restaurant.rating}</p>
        <p class="post-item__date">${restaurant.city}</p>
        <h3 class="post-item__title">${restaurant.name}</h3>
      </div>
    </a>
  </article>
`;

export default createRestaurantItem;

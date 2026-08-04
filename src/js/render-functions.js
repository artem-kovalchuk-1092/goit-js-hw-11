import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b> <span>${image.likes}</span></p>
        <p class="info-item"><b>Views</b> <span>${image.views}</span></p>
        <p class="info-item"><b>Comments</b> <span>${image.comments}</span></p>
        <p class="info-item"><b>Downloads</b> <span>${image.downloads}</span></p>
      </div>
    </li>
  `
    )
    .join('');

  galleryContainer.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loaderElement.classList.add('is-visible');
}

export function hideLoader() {
  loaderElement.classList.remove('is-visible');
}

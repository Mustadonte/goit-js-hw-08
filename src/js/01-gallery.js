import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

const refs = {
  galleryList: document.querySelector('.gallery'),
  galleryItem: document.querySelector('.gallery__item'),
};

function createGalleryMarkup(items) {
  const galleryMarkup = items
    .map(
      item => `<div><a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt='${item.description}' />
</a></div>`
    )
    .join('');

  refs.galleryList.innerHTML = galleryMarkup;
}
createGalleryMarkup(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

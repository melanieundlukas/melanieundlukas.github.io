// Lightbox functionality for wedding photo gallery
(function() {
    'use strict';

    // State
    let currentIndex = 0;
    const photos = [];

    // DOM Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCurrent = document.getElementById('lightbox-current');
    const lightboxTotal = document.getElementById('lightbox-total');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    // Initialize gallery
    function initGallery() {
        const galleryItems = document.querySelectorAll('.gallery-item');

        // Build photos array from gallery items
        galleryItems.forEach((item, index) => {
            const img = item.querySelector('.gallery-thumbnail');
            if (img) {
                photos.push({
                    src: img.src,
                    alt: img.alt || `Wedding photo ${index + 1}`
                });

                // Add click handler
                item.addEventListener('click', () => openLightbox(index));
            }
        });

        // Update total count
        lightboxTotal.textContent = photos.length;
    }

    // Open lightbox at specific index
    function openLightbox(index) {
        currentIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    // Close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Restore scroll
    }

    // Update displayed image
    function updateLightboxImage() {
        if (photos[currentIndex]) {
            lightboxImage.src = photos[currentIndex].src;
            lightboxImage.alt = photos[currentIndex].alt;
            lightboxCurrent.textContent = currentIndex + 1;
        }
    }

    // Navigate to previous photo
    function showPrevious() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateLightboxImage();
    }

    // Navigate to next photo
    function showNext() {
        currentIndex = (currentIndex + 1) % photos.length;
        updateLightboxImage();
    }

    // Event Listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevious();
                    break;
                case 'ArrowRight':
                    showNext();
                    break;
            }
        }
    });

    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGallery);
    } else {
        initGallery();
    }
})();

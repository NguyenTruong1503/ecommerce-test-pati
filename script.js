document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    
    const getScrollAmount = () => {
        const item = track.querySelector('.video-card');
        const gap = 24; 
        return item.offsetWidth + gap;
    };

    const updateProgress = () => {
        const scrollLeft = track.scrollLeft;
        const scrollWidth = track.scrollWidth;
        const clientWidth = track.clientWidth;
        
        const maxScroll = scrollWidth - clientWidth;
        
        const items = track.querySelectorAll('.video-card').length;
        const itemsInView = Math.round(clientWidth / (track.querySelector('.video-card').offsetWidth));
        const currentItemIndex = Math.round(scrollLeft / getScrollAmount());
        
        const progress = ((currentItemIndex + itemsInView) / items) * 100;
        progressBar.style.width = `${Math.min(progress, 100)}%`;
    };

    setTimeout(updateProgress, 100);

    nextBtn.addEventListener('click', () => {
        const amount = getScrollAmount();
        track.scrollBy({ left: amount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        const amount = getScrollAmount();
        track.scrollBy({ left: -amount, behavior: 'smooth' });
    });

    track.addEventListener('scroll', () => {
        updateProgress();
        const maxScroll = track.scrollWidth - track.clientWidth;
        prevBtn.disabled = track.scrollLeft <= 5; 
        nextBtn.disabled = track.scrollLeft >= maxScroll - 5;
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    });
    
    track.dispatchEvent(new Event('scroll'));
});

document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-product-image');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');
    const thumbnailContainer = document.getElementById('thumbnail-container');
    
    // Array of all product images
    const productImages = [
        'https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684',
        'https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684',
        'https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685',
        'https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685',
        'https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685',
        'https://trysculptique.com/cdn/shop/files/tiredness-min.png?v=1758713216',
        'https://trysculptique.com/cdn/shop/files/puffiness-min.png?v=1758713216'
    ];
    
    let currentIndex = 0;
    
    // Create thumbnails
    if (thumbnailContainer) {
        productImages.forEach((src, index) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.alt = `Thumbnail ${index + 1}`;
            thumb.className = 'w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-green-primary transition-all snap-start flex-shrink-0';
            thumb.addEventListener('click', () => {
                currentIndex = index;
                updateMainImage();
                updateThumbnails();
            });
            thumbnailContainer.appendChild(thumb);
        });
    }
    
    function updateMainImage() {
        if (mainImage) {
            mainImage.src = productImages[currentIndex];
        }
    }
    
    function updateThumbnails() {
        const thumbs = thumbnailContainer?.querySelectorAll('img');
        thumbs?.forEach((thumb, index) => {
            if (index === currentIndex) {
                thumb.classList.add('border-green-primary');
                thumb.classList.remove('border-transparent');
            } else {
                thumb.classList.remove('border-green-primary');
                thumb.classList.add('border-transparent');
            }
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + productImages.length) % productImages.length;
            updateMainImage();
            updateThumbnails();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % productImages.length;
            updateMainImage();
            updateThumbnails();
        });
    }
    
    // Initialize
    if (thumbnailContainer) {
        updateThumbnails();
    }
});
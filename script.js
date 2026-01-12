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
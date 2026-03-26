/**
 * Video Comparison Slider
 * 
 * A simple script to handle video comparison with a slider.
 */
class VideoComparison {
  constructor(container) {
    this.container = container;
    this.video1 = container.querySelector('.video-1');
    this.video2 = container.querySelector('.video-2');
    this.slider = container.querySelector('.comparison-slider');
    this.handle = container.querySelector('.slider-handle');
    
    this.isResizing = false;
    
    this.init();
  }
  
  init() {
    // Sync videos
    this.video1.addEventListener('play', () => this.video2.play());
    this.video1.addEventListener('pause', () => this.video2.pause());
    this.video1.addEventListener('seeking', () => {
      this.video2.currentTime = this.video1.currentTime;
    });
    
    // Slider events
    this.slider.addEventListener('input', (e) => this.updateSlider(e.target.value));
    
    // Initial position
    this.updateSlider(50);
  }
  
  updateSlider(value) {
    const percentage = value + '%';
    this.video2.style.clipPath = `inset(0 0 0 ${percentage})`;
    this.handle.style.left = percentage;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.video-comparison-container');
  containers.forEach(container => new VideoComparison(container));
});

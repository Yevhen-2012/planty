"use strict";

// Slider
document.addEventListener("DOMContentLoaded", () => {
    console.log("Slider script initialized");
  
    const slider = document.querySelector(".blog__slider");
  
    console.log("Slider:", slider);
  
    if (!slider) return;
  
    const slides = slider.querySelectorAll(".blog__slide");
    const currentEl = slider.querySelector(".slider-current");
    const totalEl = slider.querySelector(".slider-total");
    const leftArrow = slider.querySelector(".blog__slider-left-arrow");
    const rightArrow = slider.querySelector(".blog__slider-right-arrow");
  
    console.log("Slides found:", slides.length);
    console.log("Current element:", currentEl);
    console.log("Total element:", totalEl);
    console.log("Left arrow:", leftArrow);
    console.log("Right arrow:", rightArrow);
  
    if (!slides.length || !currentEl || !totalEl) {
      console.log("Missing required elements");
      return;
    }
  
    let currentIndex = 0;
  
    function formatNumber(number) {
      return String(number).padStart(2, "0");
    }
  
    function updateCounter() {
      console.log("Updating counter");
      console.log("Current index:", currentIndex);
  
      currentEl.textContent = formatNumber(currentIndex + 1);
      totalEl.textContent = formatNumber(slides.length);
  
      console.log("Current text:", currentEl.textContent);
      console.log("Total text:", totalEl.textContent);
    }
  
    updateCounter();
  
    rightArrow?.addEventListener("click", () => {
      console.log("Right arrow clicked");
  
      currentIndex++;
  
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
  
      updateCounter();
    });
  
    leftArrow?.addEventListener("click", () => {
      console.log("Left arrow clicked");
  
      currentIndex--;
  
      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }
  
      updateCounter();
    });
  });
  
  
  
  
  
  // Rating
  document.addEventListener("DOMContentLoaded", () => {
    const ratingItems = document.querySelectorAll(".review_rating");
  
    ratingItems.forEach((item) => {
      const rating = parseInt(item.textContent.trim(), 10);
  
      if (isNaN(rating)) return;
  
      const maxRating = 5;
      const validRating = Math.min(Math.max(rating, 0), maxRating);
  
      item.innerHTML = "";
  
      for (let i = 1; i <= maxRating; i++) {
        const star = document.createElement("span");
        star.classList.add("review_star");
  
        star.innerHTML = i <= validRating ? "★" : "☆";
  
        item.appendChild(star);
      }
    });
  });


  
// Hero intro animation
window.addEventListener('load', () => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power3.out"
      },
      delay: 0.3
    });
  
    tl.from('.hero__content', {
      y: 40,
      opacity: 0
    })
  
    .from('.hero__review-wraper', {
      y: 40,
      opacity: 0
    }, "-=0.45");
  });
  
  // Reveal animation
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray('.cc-reveal').forEach((item) => {
    console.log("Reveal item:", item);
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 40,
      autoAlpha: 0.01,
      duration: 0.9,
      ease: "power3.out"
    });
  
  });
  
  // hero video
  
  const videoLink = document.querySelector('.video-link');
  const closeButton = document.querySelector('.video-close-button');
  const videoWrapper = document.querySelector('.demo-video-wrapper');
  
  videoLink?.addEventListener('click', (e) => {
    e.preventDefault();
  
    gsap.killTweensOf(videoWrapper);
  
    gsap.set(videoWrapper, {
      display: 'flex',
      opacity: 0
    });
  
    gsap.to(videoWrapper, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  });
  
  closeButton?.addEventListener('click', () => {
    gsap.killTweensOf(videoWrapper);
  
    gsap.to(videoWrapper, {
      opacity: 0,
      duration: 0.35,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(videoWrapper, {
          display: 'none'
        });
      }
    });
  });
  

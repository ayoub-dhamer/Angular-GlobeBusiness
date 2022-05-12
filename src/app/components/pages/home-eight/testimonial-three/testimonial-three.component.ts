import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-testimonial-three',
  templateUrl: './testimonial-three.component.html',
  styleUrls: ['./testimonial-three.component.css'],
})
export class TestimonialThreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.appTwoReviewSwiper-Controller .swiper-button-next',
      prevEl: '.appTwoReviewSwiper-Controller .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
}

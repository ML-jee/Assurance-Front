import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-contract-presentation',
  templateUrl: './contract-presentation.component.html',
  styleUrls: ['./contract-presentation.component.scss']
})
export class ContractPresentationComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor() { 
    this.initSwiper();

  }

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
      },
      keyboard: {
        enabled: true
      },
      mousewheel: {
        thresholdDelta: 70
      },
      spaceBetween: 30,
      loop: false,
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });

    swiper.slideTo(1,3, false);
  }
}

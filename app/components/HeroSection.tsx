'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import {
  ChevronRight,
  Users,
  Globe,
  Heart,
  HandHelping,
  CalendarHeart,
} from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: 'Together, We Build a Better Tomorrow',
    subtitle:
      'Every donation brings a new smile. Transparent, secure, and impactful giving.',
    ctaText: 'Donate Now',
    ctaLink: '/donate',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
    align: 'center',
    icon: Heart,
  },
  {
    id: 2,
    title: 'Every Rupee Accounted',
    subtitle:
      '100% transparency. Track where your donation goes and the lives it changes.',
    ctaText: 'View Projects',
    ctaLink: '/projects',
    image:
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
    align: 'left',
    icon: CalendarHeart,
  },
  {
    id: 3,
    title: 'Be a Part of the Change',
    subtitle:
      'Join thousands of changemakers and help us create lasting impact.',
    ctaText: 'Become a Volunteer',
    ctaLink: '/volunteer',
    image:
      'https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop',
    align: 'right',
    icon: HandHelping,
  },
];

export default function HeroSection() {
  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {slides.map((slide) => {
            const alignClass =
              slide.align === 'left'
                ? 'items-center justify-start text-left'
                : slide.align === 'right'
                ? 'items-center justify-end text-right'
                : 'items-center justify-center text-center';

            return (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full flex">
                  {/* Background */}
                  <div className="absolute inset-0">
                    <div
                      className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-[6000ms]"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  {/* Content */}
                  <div className={`relative z-10 flex w-full px-6 md:px-16 ${alignClass}`}>
                    <div className="max-w-xl">
                      {/* Icon */}
                      <div className="mb-6 inline-flex p-4 rounded-full bg-white/20 backdrop-blur-md">
                        <slide.icon className="h-7 w-7 text-white" />
                      </div>

                      {/* Title */}
                      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p className="text-white/90 text-lg md:text-xl mb-8">
                        {slide.subtitle}
                      </p>

                      {/* CTA */}
                      <a
                        href={slide.ctaLink}
                        className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all"
                      >
                        {slide.ctaText}
                        <ChevronRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}
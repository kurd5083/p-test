import styles from './Portfolio.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import slide_image from '/src/assets/slide_image.jpg'

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioContentHead}>
          <h2 className={styles.portfolioContentTitle}><p>Test test</p></h2>
        </div>
        <div className={styles.portfolioSwiper}>
          <Swiper
            spaceBetween={30}
            slidesPerView="auto"
            wrapperClass={styles.swiperWrapper}
            breakpoints={{
              576: {
                spaceBetween: 72
              },
            }}
          >
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.portfolioSlide}>
                <img className={styles.portfolioSlideImg} src={slide_image} alt="" />
                <h4 className={styles.portfolioTitle}>Test test test</h4>
                <p className={styles.portfolioText}>test test test</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.portfolioSlide}>
                <img className={styles.portfolioSlideImg} src={slide_image} alt="" />
                <h4 className={styles.portfolioTitle}>Test test test</h4>
                <p className={styles.portfolioText}>test test test</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.portfolioSlide}>
                <img className={styles.portfolioSlideImg} src={slide_image} alt="" />
                <h4 className={styles.portfolioTitle}>Test test test</h4>
                <p className={styles.portfolioText}>test test test</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.portfolioSlide}>
                <img className={styles.portfolioSlideImg} src={slide_image} alt="" />
                <h4 className={styles.portfolioTitle}>Test test test</h4>
                <p className={styles.portfolioText}>test test test</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>
  )
}

export default Portfolio

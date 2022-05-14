import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Feedback = () => {
    return (
        <>
            <div className="feedback">
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-12 text-center">
                            <h2>ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>
                            <div className="img"><img src="/image/feedback.png" alt="" /></div>
                        </div>
                    </div>

                    <div className="row d-flex flex-column">
                        <div className="col-12">
                            <Swiper
                                slidesPerView={1}
                                loop={true}
                                speed={3000}
                                spaceBetween={40}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper mt-5"
                            >
                                <SwiperSlide>
                                    <div className="img">
                                        <img src="../image/feedback-man-01.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <p>
                                            ООО «MIX-ТECHNO HYDRAULICS» оказывало нам услуги по монтажу и наладке башенного крана массой
                                            135 тонн, для грузоподъёмных операций при строительстве нового жилого комплекса ООО
                                            ""ALpha group consult".
                                            ООО «Mix-тECHNO HYDRAULICS» имеет регистрационные, разрешительные и прочие документы для
                                            использования данной техники на любых сложных объектах. Отмечу, что все оказанные услуги были
                                            выполнены качественно и в сроки, прописанные в договоре.
                                            Высокий профессионализм сотрудников и добросовестное исполнения обязательств по договорам
                                            характеризует ООО «MIX-TECHNO HYDRAULICS» как надежного и долговечного партнера.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img">
                                        <img src="../image/feedback-man-02.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <p>
                                            ООО «MIX-ТECHNO HYDRAULICS» оказывало нам услуги по монтажу и наладке башенного крана массой
                                            135 тонн, для грузоподъёмных операций при строительстве нового жилого комплекса ООО
                                            ""ALpha group consult".
                                            ООО «Mix-тECHNO HYDRAULICS» имеет регистрационные, разрешительные и прочие документы для
                                            использования данной техники на любых сложных объектах. Отмечу, что все оказанные услуги были
                                            выполнены качественно и в сроки, прописанные в договоре.
                                            Высокий профессионализм сотрудников и добросовестное исполнения обязательств по договорам
                                            характеризует ООО «MIX-TECHNO HYDRAULICS» как надежного и долговечного партнера.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="img">
                                        <img src="../image/feedback-man-03.png" alt="" />
                                    </div>
                                    <div className="info">
                                        <p>
                                            ООО «MIX-ТECHNO HYDRAULICS» оказывало нам услуги по монтажу и наладке башенного крана массой
                                            135 тонн, для грузоподъёмных операций при строительстве нового жилого комплекса ООО
                                            ""ALpha group consult".
                                            ООО «Mix-тECHNO HYDRAULICS» имеет регистрационные, разрешительные и прочие документы для
                                            использования данной техники на любых сложных объектах. Отмечу, что все оказанные услуги были
                                            выполнены качественно и в сроки, прописанные в договоре.
                                            Высокий профессионализм сотрудников и добросовестное исполнения обязательств по договорам
                                            характеризует ООО «MIX-TECHNO HYDRAULICS» как надежного и долговечного партнера.
                                        </p>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback

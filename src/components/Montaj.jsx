import React from 'react'

const Montaj = () => {
    return (
        <>
            <div className="montaj">
                <div className="container">
                    <div className="row">
                        <div className="zed col-12">
                            <div data-aos="fade-down" className="montaj-zed-blur mb-5">
                                <h2>МОДЕРНИЗАЦИЯ ВСЕХ ВИДОВ ГРУЗОВОЙ ТЕХНИКИ</h2>
                                <h1>ВЫСШЕЕ КАЧЕСТВО СЕРВИСА</h1>
                                <p>Модернизация грузовой техники любой сложности</p>
                            </div>

                            <div className="d-flex justify-content-center align-items-center myBtns">
                                <a data-aos="fade-up-right" href="/services" className='myBtn'>Наши услуги</a>
                                <a data-aos="fade-up-left" href="/send-contact" className='myBtn'>Оставить Заявку</a>
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="blur"></div>
            </div>
        </>
    )
}

export default Montaj
 
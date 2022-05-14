import React, { useEffect, useState } from 'react'
import { SpinnerDotted } from 'spinners-react';

const Contact = () => {
    const [loader, setLoder] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoder(false);
        }, 2000);
    }, []);
    return (
        <>
            {loader ?
                <div className="loader">
                    <img src="/image/logo.svg" alt="" />
                    <SpinnerDotted size={99} thickness={100} speed={100} color="#ffa616" />
                </div> : ''
            }
            <div className="contact">
                <div className="header">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-12 text-center mb-5">
                                <h2>КОНТАКТЫ</h2>
                                <div className="img"><img src="/image/contact.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-main">
                    <div className="container">

                        <div className="row mt-5">
                            <div className="col-12 map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.7354827754243!2d69.24301835118635!3d41.27109497917322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a861acf7eab%3A0x2a483b5df56482d3!2zMTgg0YPQu9C40YbQsCDQmtGD0YjQsdC10LPQuCwg0KLQsNGI0LrQtdC90YIgMTAwMDIyLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2sus!4v1650360998815!5m2!1sru!2sus" width="600" height="450" loading="lazy"></iframe>
                            </div>
                        </div>

                        <div className="row contact-main-text">
                            <div className="phone">
                                <img src="/image/contact-phone.png" alt="" />
                                <p>
                                    +998901255696,
                                    +998909724199, <br />
                                    +998998173508
                                </p>
                            </div>
                            <div className="map">
                                <img src="/image/contact-map.png" alt="" />
                                <p>
                                    100022, Узбекистан, г. Ташкент, ул. <br /> Кушбеги, 18А
                                </p>
                            </div>
                            <div className="message">
                                <img src="/image/contact-message.png" alt="" />
                                <p>
                                    mix-technohyd@mail.ru
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

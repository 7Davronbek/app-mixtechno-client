import React, { useEffect, useState } from 'react'
import { SpinnerDotted } from 'spinners-react';

const About = () => {
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
            <div className="about">
                <div className="header">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-12 text-center">
                                <h2>О КОМПАНИИ</h2>
                                <div className="img"><img src="/image/about.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-main">
                    <div className="container">
                        <div className="row about-main-text">
                            <h1>НАДЕЖНОСТЬ, СТАБИЛЬНОСТЬ И ПЕРСПЕКТИВА</h1>
                            <p>
                                «Для нас основное значение имеют стабильность и надёжность в долгосрочной перспективе».
                                <br /><br />
                                С нашими заказчиками и партнёрами мы поддерживаем тесное сотрудничество, основанное на взаимном доверии и уважении.При этом мы не придаём значения краткосрочным успехам, так как для нас самую большую ценность представляетдолгосрочная перспектива.
                            </p>

                            <img src="/image/about-main.jpg" alt="" className='w-100 img' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About

import React, { useEffect, useState } from 'react'
import Services from '../components/Services'
import { SpinnerDotted } from 'spinners-react';

const Service3 = () => {
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
            <div className="service-03">
                <div className="service-03-header">

                </div>


                <div className="service-main-03 mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p>Продажа техники и комплектующих</p>
                                <h2>ПРОМЫШЛЕННОЕ ДИСТАНЦИОННОЕ <br /> УПРАВЛЕНИЕ</h2>

                                <div className="srv-03-btns">
                                    <div className="top">
                                        <button className='btn'>Промышленное дистанционное <br /> управление</button>
                                        <button className='btn'>Приводные системы</button>
                                    </div>
                                    <div className="bottom">
                                        <button className='btn'>Траверсы и грузозахватные <br /> приспособления</button>
                                        <button className='btn'>Запчасти</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Services />

            </div>
        </>
    )
}

export default Service3
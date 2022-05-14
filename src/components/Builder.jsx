import React from 'react'

const Builder = () => {
    return (
        <>
            <div className="builder">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div data-aos="fade-right" className="col-lg-6 left">
                            <div className="top-sphere">
                                <div></div>
                            </div>
                            <img src="./image/builder.png" className='w-100' alt="" />
                            <div className="bottom-sphere">
                                <div></div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-5 ml-auto right d-flex">
                            <p className='right-q'>‘‘</p>
                            <div className="right-r">
                                <p>
                                    «Для нас основное значение имеют стабильность и надёжность в долгосрочной перспективе».
                                </p>
                                <p>
                                    С нашими заказчиками и партнёрами мы поддерживаем тесное сотрудничество, основанное на взаимном доверии и уважении. При этом мы не придаём значения краткосрочным успехам, так как для нас самую большую ценность представляет долгосрочная перспектива.
                                </p>
                            </div>
                            <p className='right-ql'>‘‘</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Builder
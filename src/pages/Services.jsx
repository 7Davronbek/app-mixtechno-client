import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

import { Autoplay, EffectFade, Navigation } from "swiper";
import { SpinnerDotted } from 'spinners-react';

const Services = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

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
            <div className="services-page">
                <div className="service-page-header">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-12 text-center mb-5">
                                <h2>НАШИ УСЛУГИ</h2>
                                <div className="img"><img src="/image/service1.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-page-main">
                    <div className="container">


                        <div className="row mt-5">
                            <div className="col-12">



                            </div>
                            <div className="catalogs col-lg-3">


                                <Nav tabs className='justify-content-end myNavs nav-pills nav-justified'>
                                    <h3 className='w-100 text-center'>Каталог продукции</h3>

                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' })}
                                            onClick={() => { toggle('1'); }}
                                        >
                                            Системы управления краном
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                        >
                                            Шкафы и пульты управления
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                        >
                                            Кабины крановые
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' })}
                                            onClick={() => { toggle('4'); }}
                                        >
                                            Кресло-пульты
                                        </NavLink>
                                    </NavItem>

                                    <h3 className='w-100 text-center'>Услуги</h3>

                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' })}
                                            onClick={() => { toggle('5'); }}
                                        >
                                            Ремонт электрооборудования кранов
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '6' })}
                                            onClick={() => { toggle('6'); }}
                                        >
                                            Модернизация кранов
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className=''>
                                        <NavLink
                                            className={classnames({ active: activeTab === '7' })}
                                            onClick={() => { toggle('7'); }}
                                        >
                                            Перевод кранов на радиоуправление
                                        </NavLink>
                                    </NavItem>
                                </Nav>

                            </div>
                            <div className="catalog-product col-lg-9">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1" className=''>
                                        <Row className='myRow'>
                                            <h1>Системы управления краном</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="right">
                                                        <Swiper
                                                            spaceBetween={30}
                                                            effect={"fade"}
                                                            navigation={true}
                                                            loop={true}
                                                            modules={[Autoplay, EffectFade, Navigation]}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src="/image/sistema-01.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/sistema-02.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/sistema-03.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/sistema-04.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/sistema-05.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/sistema-06.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 6 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
                                                            ЗАПРОСИТЬ СТОИМОСТЬ
                                                        </a>

                                                        <p>Система реализована на базе современных частотно-регулируемых преобразователей переменного тока с микропроцессорным управлением (преобразователей частоты). Система управления краном обеспечивает разгон, торможение, реверс и изменение скорости вращения электродвигателей с короткозамкнутым ротором.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Преимущества блоков управления кранами</h1>
                                            <p className='mt-3'>Система управления краном повышает надежность, долговечность узлов и механизмов, а  также функциональные, энергетические и эргономические показатели за счет следующих достоинств:
                                                <br /><br />
                                                Обеспечение плавного разгона и торможения механизмов с заданным ускорением (снижение ударных нагрузок на механические узлы, обеспечение отсутствия контртоков);<br /><br />
                                                Ограничение пусковых токов при разгоне и торможении механизмов (пусковой ток = 1,5-2 Iн двигателя);<br /><br />
                                                Регулирование скорости механизмов (диапазон регулирования = 1:10 — 1:100);<br /><br />
                                                Ограничение максимальной скорости движения механизмов (актуально для кранов управляемых с пола);
                                                <br /><br />
                                                Ограничение предельных нагрузок механизмов (дополнительная защита механических узлов от перегрузок);<br /><br />
                                                Защита электродвигателей (максимально-токовая, время-токовая,защита от перегрева по математической модели двигателя либо по термодатчикам).
                                            </p>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
                                                <div className="section-02-1">
                                                    <img src="/image/sistema-09.jpg" alt="" />
                                                    <img src="/image/sistema-10.jpg" alt="" />
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Технические особенности</h1>
                                            <p className='mt-3'>Система управления краном предназначена для работы на грузоподъемных механизмах, получающих питание от сети трехфазного напряжения 380В 50 Гц, возможно исполнение системы на напряжение 690В 50Гц.<br /><br />
                                                Система построена на базе шкафов управления и автоматики, изготовленных в соответствии с сертификатом ТР ТС 004/2011<br /><br />
                                                Стандартное конструктивное исполнение системы в шкафах со степенью защиты IP54.<br /><br />
                                                Шкафы управления предназначены для работы в климатическом исполнении У3 по ГОСТ 15150–69 для районов с температурой окружающего воздуха от 0° до +40°.<br />
                                                Допускается работа при других условиях эксплуатации, в случае размещения ее в соответствующей оболочке, отвечающей требованиям окружающей среды. Возможно размещение в утепленном контейнере.
                                                <br /><br />
                                                Системы управления краном различаются по количеству управляемых механизмов и по мощности подключаемых электродвигателей. А также имеют отличия по принципу построения: — централизованного с применением программируемого контроллера; — независимого с индивидуальными схемами управления механизмами.
                                            </p>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2" className='   '>
                                        <Row className='myRow'>
                                            <h1>Шкафы и пульты управления</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
                                                            ЗАПРОСИТЬ СТОИМОСТЬ
                                                        </a>

                                                        <p>Производим под заказ, учитывая индивидуальные особенности проекта</p>
                                                    </div>
                                                    <div className="right">
                                                        <Swiper
                                                            spaceBetween={30}
                                                            effect={"fade"}
                                                            navigation={true}
                                                            loop={true}
                                                            modules={[Autoplay, EffectFade, Navigation]}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src="/image/shkaf.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/shkaf-01.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/shkaf-02.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/shkaf-03.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/shkaf-04.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/shkaf-05.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
                                                <div className="section-02-1">
                                                    <img src="/image/shkaf-06.jpg" alt="" />
                                                    <img src="/image/shkaf-01.jpg" alt="" />
                                                </div>
                                                <div className="section-02-2">
                                                    <img src="/image/shkaf-07.jpg" alt="" />
                                                    <img src="/image/shkaf-08.jpg" alt="" />
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Производство шкафов и пультов управления</h1>
                                            <p className='mt-3'>«БРИЗ» выпускает различные модификации продукции в соответствии с отраслевыми стандартами. Предоставляет возможность изготовления агрегатов по техническим заданиям заказчиков. Все товары сопровождаются пакетом документов и сертификатами. Купить шкафы и станции управления, узнать цены, сроки изготовления можно по телефону у специалистов или онлайн по форме обратной связи.</p>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3" className='   '>
                                        <Row className='myRow'>
                                            <h1>Кабины крановые</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <ul>
                                                            <h6><b>Кабина мостового крана</b>
                                                                <br /><br />
                                                                Кабины мостовых кранов производятся в открытом и закрытом вариантах. Внутренняя комплектация подбирается в зависимости
                                                                от условий работы.
                                                            </h6>
                                                            <h6><b>Кабина башенного крана</b>
                                                                <br /><br />
                                                                Так как башенные краны работают в любое время года, кабины выполняют закрытыми. Изготавливаются кабины башенных
                                                                кранов двух видов: встроенные и выносные.
                                                            </h6>
                                                            <h6><b>Кабина козлового крана</b>
                                                                <br /><br />
                                                                Кабина козлового крана устанавливается и закрепляется на мост, в таком месте балки, с которого можно следить
                                                                за всем маршрутом следования грузовой тележки.
                                                            </h6>
                                                        </ul>
                                                    </div>
                                                    <div className="right">
                                                        <Swiper
                                                            spaceBetween={30}
                                                            effect={"fade"}
                                                            navigation={true}
                                                            loop={true}
                                                            modules={[Autoplay, EffectFade, Navigation]}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src="/image/kabinet-01.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kabinet-02.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kabinet-03.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Изготовление крановых кабин</h1>
                                            <p className='mt-3'>Конструкция кабины каркасного типа, что обеспечивает ее устойчивость к динамическим нагрузкам и вибрациям. Утеплена кабина
                                                негорючим теплоизоляционным материалом. Настилы пола съемные, что обеспечивает легкость монтажа и подключение элементов
                                                электрооборудования, поверхность пола — диэлектрическое резиновое покрытие. <br /><br />

                                                Верхние форточки снабжены газовыми амортизаторами, гарантирующими плавность открывания/закрывания. Нижнее стекло в рамке
                                                съемное для возможности очистки и закрыто двумя защитными решетками; верхняя – съемная, нижняя – несъемная, которая защищает
                                                оператора от случайного выпадения из кабины. На съемной решетке, в зависимости от типа крана могут устанавливаться педали
                                                управления. <br /><br />

                                                Для обеспечения чистоты стекол, кабины оборудуются стеклоочистителями с омывателями, а для предотвращения запотевания – обогревателями,
                                                позволяющими производить обдув стекол теплым воздухом, или стеклами со встроенным электроподогревом. Для вентиляции кабины,
                                                при закрытых форточках, в потолке установлен регулируемый клапан, а внизу на задней стенке — решетка с регулируемыми
                                                жалюзями, обеспечивающие приток свежего воздуха в кабине. <br /><br />

                                                По согласованию с заказчиком кабина может комплектоваться как зеркалами, позволяющими без сильного поворота головы видеть
                                                происходящее позади оператора, так и более сложными устройствами, а именно видеокамерами и мониторами, располагаемыми
                                                в кабине. <br /><br />

                                                Перед окраской кабина подвергается пескоструйной обработке, позволяющей удалить ржавчину, окалину после сварки и другие загрязнения,
                                                обезжириванию, заделке технологических щелей герметиком и обработке сварных швов шпаклевкой. Такая обработка кабины позволяет
                                                улучшить качество лакокрасочного покрытия. При окрашивании кабин мы используем двухкомпонентную акрил-полиуретановую
                                                грунт-эмаль PROCOAT AP 259 SC. Грунт-эмаль PROCOAT AP 259 SC™ обладает превосходной устойчивостью к механическому, химическому
                                                воздействию, выцветанию, воздействию перепадов температур и атмосферных факторов. Стабильная адгезия и эластичность PROCOAT
                                                AP 259 SC, гарантируют высокие показатели ударопрочности и сколостойкости.

                                            </p>

                                            <h1 className='mt-5'>Сопутствующее оборудование</h1>
                                            <div className="section-02 col-12">
                                                <div className="section-02-1">
                                                    <img src="/image/kabinet-04.jpg" alt="" />
                                                    <img src="/image/sistema-09.jpg" alt="" />
                                                </div>
                                            </div>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4" className='   '>
                                        <Row className='myRow'>
                                            <h1>Кресло-пульты</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="right">
                                                        <Swiper
                                                            spaceBetween={30}
                                                            navigation={true}
                                                            loop={true}
                                                            modules={[Autoplay, Navigation]}
                                                            autoplay={{
                                                                delay: 3000,
                                                                disableOnInteraction: false,
                                                            }}
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-00.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-01.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-02.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-03.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-04.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-05.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-06.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-07.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src="/image/kreslo-08.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>

                                                    <div className="left">
                                                        <h6>Сроки изготовления: <span>от 4 недель</span></h6>
                                                        <h6>Гарантия: <span>1 год</span></h6>

                                                        <a href="/send-contact" className="btn myBtn">
                                                            ЗАПРОСИТЬ СТОИМОСТЬ
                                                        </a>

                                                        <p>Кресло-пульт ООО «БРИЗ» – это удобный, энергоёмкий механизм, используемый для комфортного управления мостовым, башенным, козловым краном и любой другой подъемно-транспортной техникой. В его состав входит сиденье оператора и колонки с установленными на них джойстиками или стандартными командоконтроллерами типа ККТ.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Модификации кресло-пультов</h1>
                                            <p className="mt-3">
                                                Все модификации товара оснащаются современными органами управления и индикации, дополнительно могут комплектоваться педалями, монтируемыми на полу кабины в удобном для оператора месте, например, для регулирования подачи звукового сигнала.
                                            </p>

                                            <h1 className='mt-5'>Кресло-пульты</h1>
                                            <p className='mt-3'>Джойстики позволяют управлять всей конструкцией и контролировать производственные процессы, а также обеспечивают ступенчатое переключение скоростей и/или их плавное регулирование. Пульты используются при температурных значениях окружающей среды от -40°C до +40°C. <br /><br />

                                                Мы предлагаем различные варианты продукции, оснащенной современными управленческими аппаратами и органами индикации, которые в зависимости от заданных параметров снабжаются педалями или другими опциями. <br /><br />

                                                Кресло-пульт является рабочим местом оператора крана. Поэтому аппарат должен быть не только функциональным, но и удобным. Наша команда позаботилась о том, чтобы каждый прибор оснащался механизмами регулирования высоты и угла наклона спинки. Некоторые модификации товара имеют регулируемые подголовники и подлокотники.

                                            </p>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="5" className='   '>
                                        <Row className='myRow'>
                                            <h1>Ремонт электрооборудования кранов</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6>✔ Ремонт кранов любой сложности</h6>
                                                        <h6>✔ Опыт работы более 8 лет</h6>
                                                        <h6>✔ Гарантия 1 год</h6>

                                                        <a href="/send-contact" className="btn myBtn">
                                                            Оставить заявку на расчет сметы
                                                        </a>

                                                        <p>
                                                            Стоимость и сроки ремонтных работ рассчитываются индивидуально после обследования крана.
                                                        </p>
                                                    </div>
                                                    <div className="right">
                                                        <Swiper
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src="/image/remont.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Разновидности и особенности ремонта</h1>
                                            <p className='mt-3'>Существует три основных вида ремонта электрооборудования: <br /><br />

                                                текущий (плановый) – подразумевает замену расходных материалов (щеток электромоторов, сухарей, контроллеров). Малый ремонт необходим для устранения незначительных дефектов, здесь проверяются кнопки, реле, электромагниты, уровень смазки, работа подшипников. Осуществляется диагностика системы управления, при необходимости подтягивают клеммные соединения, очищают контакты и т.п. <br /><br />
                                                средний – все элементы электрической части разбираются и подвергаются ревизии. В зависимости от результатов обследования и степени износа деталей осуществляется замена токосъемников, подшипников, промывается двигатель и пр. <br /><br />
                                                капитальный – предполагает замену вышедших из строя узлов электрической части.
                                            </p>

                                            <h1 className='mt-5'>Виды поломок</h1>
                                            <p className='mt-3'>Неисправность электрооборудования подразумевает под собой дефекты следующих элементов: <br /><br />

                                                основных узлов – электродвигатели грузоподъемных механизмов отличаются высокой надежностью, чаще всего неисправности возникают при нарушении правил эксплуатации. Оборудование выходит из строя в результате короткого замыкания, излишней увлажненности или попадания пыли; <br /><br />
                                                механизмов управления, совокупность которых представляет собой сложную конструкцию, состоящую из множества элементов. Устройство может прийти в негодность из-за подгорания контактов, повреждений электропроводки, пускателей, контроллеров. <br /><br />
                                                приборов безопасности – из строя могут выйти ограничители грузоподъемности и высоты подъема, анемометр, концевые выключатели.
                                            </p>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="6" className='   '>
                                        <Row className='myRow'>
                                            <h1>Модернизация кранов</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="right">
                                                        <Swiper
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src="/image/moder.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                        </Swiper>
                                                        <p className='mt-5'>Стоимость работ и сроки рассчитываются индивидуально и зависят от модели, количества приводов, мощности, объема услуг.</p>
                                                    </div>

                                                    <div className="left">
                                                        <h6> ✔ Модернизация кранов любой сложности </h6>
                                                        <h6> ✔ Опыт работы более 8 лет </h6>
                                                        <h6> ✔ Срок выполнения 1-2 недели </h6>
                                                        <h6> ✔ Гарантия 1 год </h6>

                                                        <a href="/send-contact" className="btn myBtn">
                                                            Оставить заявку на расчет сметы
                                                        </a>


                                                    </div>
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Виды выпускаемого оборудования:</h1>
                                            <div className="section-02 col-12">
                                                <div className="section-02-1">
                                                    <img src="/image/moder-01.jpg" alt="" />
                                                    <img src="/image/moder-02.jpg" alt="" />
                                                </div>
                                                <div className="section-02-2">
                                                    <img src="/image/moder-03.jpg" alt="" />
                                                    <img src="/image/moder-04.jpg" alt="" />
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Почему нужно модернизировать кран?</h1>
                                            <p className='mt-3'>В нашей стране большинство грузоподъемных механизмов оснащено релейно-контакторной схемой управления, которая обладает рядом недостатков: <br /><br />

                                                устройство представляет собой морально устаревшую модель; <br /><br />
                                                узлы крана испытывают большие ударные нагрузки, что неблагоприятно сказывается на сроке эксплуатации механизмов; <br /><br />
                                                высокие перегрузки снижают качество выполняемых работ и производительность; <br /><br />
                                                управление осуществляется крупными джойстиками; <br /><br />
                                                оборудование провоцирует повышенную утомляемость оператора.

                                            </p>

                                            <h1 className='mt-5'>Преимущества модернизации</h1>
                                            <p className='mt-3'>Использование микропроцессорных систем позволяет исключить описанные выше проблемы. Современное оборудование обеспечивает: <br /><br />

                                                оптимизацию работы электроприводов; <br /><br />
                                                точность выполняемых работ; <br /><br />
                                                экономию на электроэнергии; <br /><br />
                                                отсутствие динамических перегрузок;<br /><br />
                                                минимизацию ударных нагрузок;<br /><br />
                                                плавную работу механизмов, разгон и торможение осуществляется по заданным параметрам;<br /><br />
                                                диапазон регулировки скорости механизмов находится в пределах от 1:10 до 1:100.

                                            </p>

                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="7" className='   '>
                                        <Row className='myRow'>
                                            <h1>Перевод кранов на радиоуправление</h1>

                                            <div className="col-12">
                                                <div className="section-01">
                                                    <div className="left">
                                                        <h6> ✔ Срок выполнения от 2 дней </h6>
                                                        <h6> ✔ Перевод кранов на радиоуправление любой сложности </h6>
                                                        <h6> ✔ Опыт работы более 8 лет </h6>
                                                        <h6> ✔ Гарантия 1 год </h6>

                                                        <a href="/send-contact" className="btn myBtn">
                                                            Оставить заявку на расчет сметы
                                                        </a>

                                                        <p>Производим под заказ, учитывая индивидуальные особенности проекта</p>
                                                    </div>
                                                    <div className="right">
                                                        <Swiper
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src="/image/moder-02.jpg" className='w-100' />
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>

                                            <h1 className='mt-5'>Преимущества перевода кранов на радиоуправление</h1>
                                            <p className='mt-3'>Работа крана с радиоуправлением осуществляется с помощью дистанционного пульта, который обеспечивает ряд преимуществ: <br /><br />

                                                повышается контроль над перемещением груза; <br /><br />
                                                машинист находится удаленно, снижается риск возникновения несчастных случаев; <br /><br />
                                                пропадает необходимость оснащения кабины дополнительными опциями (вентиляцией, освещением и пр.).

                                            </p>

                                            <h1 className='mt-5'>Разновидности пультов управления</h1>
                                            <p className='mt-3'>Существует два основных вида пультов: <br /><br />

                                                кнопочные — устройства с одной или двумя скоростями, с помощью которых регулируется работа кран-балок; <br /><br />
                                                рычажные — преимущественно используются для контроля мостовых кранов, козловой техники с любым набором функций. Являются более сложными многоскоростными конструкциями. <br /><br />
                                                Система радиоуправления крана представляет собой совокупность следующих элементов: приемного устройства, пульта управления, шкафа, согласовывающего работу установленной техники и имеющегося управленческого блока.

                                            </p>

                                            <h1 className='mt-5'>Порядок работ</h1>
                                            <p className='mt-3'>При переводе кранов на радиоуправление мы придерживаемся следующего порядка работ:
                                                <br /><br />
                                                Обследование оборудования и подготовка проектной документации. <br /><br />
                                                Согласование с заказчиком спецификации оборудования. <br /><br />
                                                Согласование условий и сроков проведения работ. <br /><br />
                                                Поставка. <br /><br />
                                                Монтаж. <br /><br />
                                                По завершению монтажных работ заказчику предоставляется вся исполнительная документация.

                                            </p>

                                        </Row>
                                    </TabPane>

                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services


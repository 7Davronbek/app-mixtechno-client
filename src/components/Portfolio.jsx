import React, { useEffect, useState } from 'react'
import { SpinnerDotted } from 'spinners-react';
import Aos from "aos";
const Portfolio = () => {


    const [loader, setLoder] = useState(true);

    useEffect(() => {
        Aos.init({
            duration: 1700,
        });

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
                </div> : <>
                    <div className="portfolio">

                        <div className="header">
                            <div className="container">
                                <div className="row header-text">
                                    <div className="col-12">
                                        <h1 data-aos='fade-up'>OOO ‘MIX TECHNO HYDRAULICS’</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="section-01">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-01-text">
                            <div data-aos='fade-right' className="col-12 zed">
                                <h3>ООО <span>«MIX TECHNO HYDRAULICS»</span> приветствует Вас и в вашем лице
                                    коллектив!
                                </h3>
                                <ul>
                                    <li>
                                        Нашей компании только три года, и мы хотим проработать на благо Узбекистана, внедряя новые технологии силами
                                        местных квалифицированных инженеров. Эти три года были для нас сложными, но продуктивными, мы сделали
                                        силами своих специалистов несколько интересных проектов, поставок оборудования с последующей наладкой. В
                                        сферах насосных станций перекачки воды и стоков, гидравлических прессах и грузоподъемных механизмах.
                                    </li><br />
                                    <li>
                                        Оглядываясь назад, вспоминаем, как в сложных переговорах приходилось убеждать коллег в необходимости
                                        проведения модернизационных работ. Сегодня же, мы можем показать наши работы, а Вы услышать отзывы о
                                        сделанном.
                                    </li><br />
                                    <li>
                                        Результат: Предприятия экономят свои средства на уменьшении эксплуатационных расходов, на уменьшении
                                        потребления электроэнергии, на уменьшении постоянных расходов запасных частей и уменьшении аварийности.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-02">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-02-main">
                            <div className="col-12 zed">
                                <p data-aos='fade-down'>
                                    Важным элементом в достижении наших целей в сфере услуг автоматизации, предлагая
                                    инженерные решения, считаем работу в сотрудничестве с компанией Delta Electronics.
                                    С момента основания компании и по сей день, виден устойчивый рост производства и внедрения в
                                    рынок мировой автоматизации, компания устойчиво входит в мировой индекс устойчивости Доуджонса (DJSI world).
                                </p>
                                <div className="d-flex mt-5 bottom">
                                    <div data-aos='fade-right' className="col-lg-6 left">
                                        <p>Миссия компании - «создавать инновационные,
                                            энергоэффективные и экологически чистые решения для
                                            повышения качества жизни».
                                            Исследовательские центры компании работают в Тайване,
                                            Китае, Таиланде, Японии, США и в странах Европы.
                                            С 2010 года компания была удостоена 47 международных
                                            наград, в том числе IF, Reddot, CES Innovation, Computex Best
                                            Choice и Taiwan Excellence.
                                        </p>
                                    </div>
                                    <div data-aos='fade-left' className="col-lg-6 right">
                                        <img src="/image/section-02-main.png" alt="" className='w-100' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-03">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-03-text">
                            <div data-aos='zoom-in' className="col-12 zed">
                                <p>Специалисты компании ООО «WESMART» не останавливается на достигнутом, проходят курсы повышения
                                    квалификации и готовы предложить разные решения по промышленной автоматизации.</p>
                                <br />
                                <p>
                                    Наше предложение включает : <br />
                                    Приводы. <br />
                                    Контроллеры. <br />
                                    Системы управления движением. <br />
                                    Датчики. <br />
                                    Коммуникационные устройства и программное обеспечение для машиностроения. <br /><br />
                                </p>
                                <br /><br />
                                <p>также поставляем энергосберегающие решения, приводные системы, решения для
                                    визуализации, и наблюдения, системы управления предприятиями, роботизированные
                                    станции, оборудование для повышения качества электроэнергии и промышленную автоматику
                                    для сферы высоких технологий, электронной, нефтегазовой, химической, и металлургической
                                    отраслей.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-04">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-04-main d-flex align-items-center">
                            <div className="col-lg-6 left d-flex flex-column">
                                <div data-aos="fade-down"
                                    data-aos-duration="3000" className="top mt-3">
                                    <h3>1. Частотные преобразователи</h3>
                                    <img src="/image/section-04-main-01.png" alt="" className='w-100 mt-4' />
                                </div>
                                <div data-aos="fade-up"
                                    data-aos-duration="3000" className="bottom mt-5">
                                    <h3>2. Модули рекуперации энергии</h3>
                                    <img src="/image/section-04-main-02.png" alt="" className='w-100 mt-4' />
                                </div>
                            </div>
                            <div data-aos="fade-left"
                                data-aos-duration="3000" className="col-lg-6 right mt-5">
                                <h3>3. Программируемые логические контроллеры</h3>
                                <img src="/image/section-04-main-03.png" alt="" className='w-100 mt-4' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-05">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-05-text">
                            <div data-aos="flip-left"
                                data-aos-duration="3000" className="col-12 zed">
                                <h2>
                                    Компания ООО <span>«MIX TECHNO HYDRAULICS»</span> является партнером Delta Electronics в Узбекистане. Поставляет оборудование и инженерные решения в Республике Узбекистан, имеет возможность проводить шеф монтаж, наладку оборудования на Ваших площадках. Так
                                    же ведем сервисное обслуживание и даем гарантии на
                                    оборудование.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-06">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-06-main">
                            <h2 data-aos="zoom-out-down">Пример системы управления мостового электрического Працен-крана</h2>
                            <div className="main d-flex">
                                <div data-aos="fade-right" className="col-lg-6 left">
                                    <div className="left-01 d-flex align-items-center">
                                        <img src="/image/section-06-main-01.png" alt="" />
                                        <h3>Описание системы:</h3>
                                    </div>
                                    <div className="left-02">
                                        <p>
                                            Грузоподъемный механизм рассчитан на тяжёлый режим работы в температурной среде превышающей +40°С, и имеет большую производительность благодаря высоким скоростям передвижения. Тележка выполнена поворотной, что позволяет укладывать прокат как вдоль, так и поперёк цеха. При этом траверса с лапами крепится к двум жёстким направляющим, предотвращающим раскачивание траверсы при разгоне. Кроме того кран укомплектован грузоподъемными магнитами.
                                        </p>
                                    </div>
                                    <div className="left-03 d-flex justify-content-center mt-5">
                                        <img src="/image/section-06-main-03.jpg" alt="" className='w-80' />
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="col-lg-6 right">
                                    <div className="right-01 d-flex align-items-center">
                                        <img src="/image/section-06-main-02.png" alt="" />
                                        <h3>Цели внедрения системы:</h3>
                                    </div>
                                    <div className="right-02">
                                        <p>
                                            Повышение надежности работы оборудования;
                                            Исключение аварийных и опасных для жизни и здоровья персонала ситуаций, вызванных ошибками машиниста;
                                            Обеспечение надлежащего уровня безопасности производства работ;
                                            Оптимизация режимов работы пратцен-крана;
                                            Создание комфортных условий работы машиниста;
                                            Оперативное выявление аварийных режимов работы оборудования;
                                            Обеспечение быстрой диагностики неисправностей.
                                        </p>
                                    </div>
                                    <div className="right-03 d-flex justify-content-center mt-5">
                                        <img src="/image/section-06-main-04.png" alt="" className='w-80' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-07">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-07-text d-flex">
                            <div data-aos="zoom-out" className="col-lg-6 left">
                                <h3>Предлагаемое оборудование системы управления: </h3>
                                <p>Основное оборудование системы управления (СУ) размещается на пяти панелях в электро-помещении на мосту крана. СУ осуществляет общее управление краном, скоростью и направлением вращения валов асинхронных электродвигателей с короткозамкнутым ротором. Управление скоростью осуществляется путем одновременного изменения частоты и напряжения на зажимах электродвигателей механизмов, управление направлением вращения – изменением порядка чередования фаз указанного напряжения. Управление скоростью осуществляют инвертора. Инвертора питаются от активного сетевого модуля питания по шине.
                                    Торможение механизмов крана производится путём перевода двигателей из двигательного режима в генераторный. Вырабатываемая таким образом избыточная энергия возвращается в сеть активным сетевым модулем питания-рекуперации. В случае невозможности возврата энергии в сеть, она автоматически рассеивается с помощью тормозного модуля на резистор.
                                </p>
                            </div>
                            <div data-aos="zoom-out" className="col-lg-6 right">
                                <h3>Программируемый контроллер –выполняет следующие функции:</h3>
                                <p>обработка алгоритмов управления краном;
                                    формирование сигналов задания скорости для приводов;
                                    обеспечение коммуникаций с блоками управления, панелью оператора и станцией распределенного ввода-вывода по протоколу PROFIBUS DP;
                                    обработка сигналов от аппаратов управления (командоаппаратов, переключателей, кнопок), аппаратов безопасности и ограничения движения, аварийных сигналов и сигналов блокировок;
                                    управление коммутационной аппаратурой;
                                    диагностика состояний СУ;
                                    сохранение статистических данных.
                                    Все электрические аппараты СУ защищены плавкими вставками либо автоматическими выключателями. При срабатывании этих элементов защиты на операторской панели появится соответствующее сообщение.
                                    Защиту электродвигателей и контроль за их температурой осуществляют инвертора и модули. В случае возникновения аварии, на операторской панели появится соответствующее сообщение.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                        <div className="section-08">
                            <div className="blur"></div>
                            <div className="top-sphere">
                                <div></div>
                            </div>
                            <div className="container">
                                <div className="col-12 text-center text">
                                    <h2>Выполненные и разработанные проекты специалистами <br /> <span>MIX TECHNO HYDRAULICS</span> </h2>
                                </div>
                                <div className="row section-08-main d-flex">
                                    <div className="col-12">
                                        <div data-aos='fade-right' className="cart-08">
                                            <img src="/image/section-08-main-01.jpg" alt="" className='br-rad'/>
                                            <h5>
                                                Модернизация электрооборудования и  автоматизация  <br /> роликовой нагревательной печи. <br />
                                            </h5>
                                        </div>
                                        <div data-aos='fade-left' className="cart-08">
                                            <h5 className='ml-0'>
                                                Модернизация электро-оборудываемого мостового крана<br />
                                                Заказчик: АО Узметкамбинат
                                            </h5>
                                            <img src="/image/section-08-main-02.png" alt="" className='img-02' />
                                        </div>
                                        <div data-aos='fade-right' className="cart-08">
                                            <img src="/image/section-08-main-03.png" alt="" />
                                            <h5 className='text-mis'>
                                                Разработан и внедрен: <br />
                                                Автоматизация и диспетчеризация систем водоснабжения.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-sphere">
                                <div></div>
                            </div>
                        </div>

                        <div className="section-08">
                            <div className="blur"></div>
                            <div className="top-sphere-02">
                                <div></div>
                            </div>
                            <div className="container">
                                <div className="col-12 text-center text">
                                    <h2>
                                        Выполненные и разработанные проекты от <br /> <span>MIX TECHNO HYDRAULICS</span>
                                    </h2>
                                </div>
                                <div className="row section-08-main d-flex">
                                    <div className="col-12">
                                        <div data-aos='fade-right' className="cart-08">
                                            <img src="/image/section-09-main-01.jpg" alt="" className='br-rad'/>
                                            <h5 className='text-mis'>
                                                Поставка, монтаж и пусконаладка Однобалочного  опорного мостового крана г/п на 16 тн. <br />
                                                АО “Алмалыкский ГМК
                                            </h5>
                                        </div>
                                        <div data-aos='fade-left' className="cart-08">
                                            <h5 className='ml-0'>
                                                Модернизация электро-оборудования технологического крана грузоподьемностью 20тн Внедрение радио управления краном <br />
                                                Заказчик: АО Узметкамбинат
                                            </h5>
                                            <img src="/image/section-09-main-02.jpg" alt="" className='img-02 br-rad' />
                                        </div>
                                        <div data-aos='fade-right' className="cart-08">
                                            <img src="/image/section-09-main-03.png" alt="" />
                                            <h5 className='text-mis'>
                                                Модернизация и автоматизация пресса для металла и отходов <br />
                                                Ташкент  Вторчермет
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-sphere-02">
                                <div></div>
                            </div>
                        </div>


                        {/* <div className="section-09 mb-4">
                            <div className="blur"></div>
                            <div className="container">
                                <div className="col-12 text-center text">
                                    <h2>
                                        Выполненные и разработанные проекты от <br /> <span>MIX TECHNO HYDRAULICS</span>
                                    </h2>
                                </div>
                                <div className="row section-09-main d-flex">
                                    <div className="col-lg-4 cart">
                                        <img src="/image/section-09-main-01.png" alt="" className='w-100' />
                                        <h5>
                                            Поставка, монтаж и пусконаладка Однобалочного  опорного мостового крана г/п на 16 тн. <br />
                                            АО “Алмалыкский ГМК
                                        </h5>
                                    </div>
                                    <div className="col-lg-4 cart">
                                        <img src="/image/section-09-main-02.png" alt="" className='w-100' />
                                        <h5>
                                            Модернизация электро-оборудования технологического крана грузоподьемностью 20тн Внедрение радио управления краном <br />
                                            Заказчик: АО Узметкамбинат
                                        </h5>
                                    </div>
                                    <div className="col-lg-4 cart">
                                        <img src="/image/section-09-main-03.png" alt="" className='w-100 img3' />
                                        <h5>
                                            Модернизация и автоматизация пресса для металла и отходов <br />
                                            Ташкент  Вторчермет
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="section-10">
                    <div className="bg-images d-flex flex-column">
                        <div className="top d-flex">
                            <div data-aos="zoom-in" className="topLeft w-50">
                                <img src="/image/section-10-main-01.jpg" className='w-100' alt="" />
                                <h5>Ремонт и техническое обслуживание преобразователей частоты и ИБП</h5>
                            </div>
                            <div data-aos="zoom-in" className="topLeft w-50">
                                <img src="/image/section-10-main-02.jpg" className='w-100' alt="" />
                                <h5>Инженерные решения в области АСУТП и КИПиА</h5>
                            </div>
                        </div>
                        <div className="bottom d-flex">
                            <div data-aos="zoom-in" className="topLeft w-50">
                                <img src="/image/section-10-main-03.jpg" className='w-100' alt="" />
                                <h5>Поставка и пусконаладка промышленного оборудования</h5>
                            </div>
                            <div data-aos="zoom-in" className="topLeft w-50">
                                <img src="/image/section-10-main-04.jpg" className='w-100' alt="" />
                                <h5>Инженерные решения в области электро-энергетики</h5>
                            </div>
                        </div>

                        <h3 data-aos="zoom-out">Основные отрасли</h3>
                    </div>
                </div>
                <div className="section-11">
                    <div className="blur"></div>
                    <div className="container">
                        <div className="row section-11-main">
                            <div data-aos="fade-up"
                                data-aos-anchor-placement="bottom-center" className="col-12 zed">
                                <h2>Мы уверенны в своих силах, хотим быть полезными во благо Узбекистана и вашего предприятия.</h2>
                                <h1>OOO ‘MIX TECHNO HYDRAULICS’</h1>
                            </div>
                        </div>
                    </div>
                </div> */}
                    </div>
                </>
            }
        </>
    )
}

export default Portfolio

import React, { useEffect, useState } from 'react'
import Services from '../components/Services'
import { SpinnerDotted } from 'spinners-react';

const Service4 = () => {
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
            <div className="service-04">
                <div className="service-04-header">

                </div>


                <div className="service-04-main mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <img src="/image/service-04-main-01.png" alt="" className='w-100' />
                                <p className='mt-5'>
                                    • Проектирование автоматический систем управления установками и агрегатами различных технологических процессов как вновь вводимых, так и модернизируемых, и реконструируемых. <br /><br />
                                    • Ввод в работу комплектных электроприводов любой сложности (регулируемые электроприводы постоянного и переменного тока с микропроцессорными системами управления). <br /><br />
                                    • Ввод в работу объектов передачи и распределения электроэнергии (защиты любой сложности, в том числе и с микропроцессорными устройствами). <br /><br />
                                    • Монтаж электрооборудования и приборов КИП и А. <br /><br />
                                    • Наладка систем управления с программируемыми контроллерами, в том числе и корректировка программ под требования конкретной технологии. <br /><br />
                                    • Выполнение технического и рабочего проектирования, с разработкой программ для систем управления с программируемыми логическими контроллерами Siemens (PLC), программирование устройств управления приводами постоянного и переменного тока с микропроцессорными системами управления, разработка устройств визуализации WinCC и диагностики на основе SCADА систем. <br /><br />
                                    • Подбор, поставка и монтаж необходимого оборудования, производства ведущих фирм в области автоматизации, электропривода и электроснабжения. <br /><br />
                                    • Установка ремонт и наладка электрооборудование кранов. <br /><br />
                                    • Контрольное измерение вибрации опор дутьевых вентиляторов, дымососов, воздуходувок. <br /><br />
                                    • Балансировка роторов, эл.машин на месте установки мощности до 1500 кВт.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Services />

            </div>
        </>
    )
}

export default Service4
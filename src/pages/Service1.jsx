import React, { useEffect, useState } from 'react'
import Services from '../components/Services'
import { SpinnerDotted } from 'spinners-react';

const Service1 = () => {
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
      <div className="remont-kranov">
        <div className="service-header">
          {/* scss bg-img */}
        </div>


        <div className="service-main-01 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>ПОВЫШАЕМ ПРОИЗВОДИТЕЛЬНОСТЬ ТРУДА</h1>
                <p>
                  <br />
                  ООО «MIX-TECHNO HYDRAULICS» – ведущая компаний, в сферу деятельности входит профессиональный модернизация и ремонт кранов в по всему узбекистану. Также мы готовы осуществить регламентные, аварийные и комплексные ремонтные работы в любой точке страны.
                  <br /><br />
                  Крановая техника – важное оборудование для многих производственных циклов на стройках, в цехах, на складских и транспортных площадках. Повышенные механические нагрузки, нарушение правил эксплуатации, перепады температуры и другие негативные факторы приводят к износу элементов крана, повышая риск возникновения аварийных ситуаций.
                  <br /><br />
                  <span>Предотвратить потери от простоя и дорогостоящего внепланового ремонта крановой техники Вам помогут специалисты «MIX-TECHNO HYDRAULICS»</span>
                </p>

                <div className="service-text">
                  <h2>
                    Модернизация управления кранами с помощью преобразователей частоты
                  </h2>
                  <h2>
                    Плановый ремонт грузоподъемных кранов
                  </h2>
                  <h2>
                    Аварийный ремонт
                  </h2>
                  <h2>
                    Капитальный ремонт крановой техники
                  </h2>
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

export default Service1

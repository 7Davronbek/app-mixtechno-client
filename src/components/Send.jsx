import React, { useEffect, useState } from 'react'
import { SpinnerDotted } from 'spinners-react';

import axios from 'axios';
import { toast } from 'react-toastify';

const Send = () => {
    const [loader, setLoder] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')


    const sendForm = (e) => {
        e.preventDefault()
        setIsLoading(true)

        axios.post('https://mix-techno.kse-lights.uz/api/', { name, phone_number })
            .then((res) => {
                toast.success('Ваша заявка успешно отправлена ​​и мы свяжемся с вами в ближайшее время')
                setName('')
                setPhoneNumber('')
                setIsLoading(false)
            })
            .catch((err) => {
                toast.error('Ошибка! Проверьте подключение к интернету')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }


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
            <div className="send">
                <div className="header">

                </div>

                <div className="send-main">
                    <div className="container">
                        <div className="row position-relative">
                            <div className="col-12 text-center">
                                <h2>ОСТАЛИСЬ ВОПРОСЫ?</h2>
                                <div className="img"><img src="/image/send.png" alt="" /></div>
                            </div>
                            <p>Оставьте номер телефона и мы перезвоним вам в течение 15 минут.</p>
                        </div>

                        <div className="row form-send">
                            <form onSubmit={sendForm}>
                                <div className="input">
                                    <input
                                        className='form-control'
                                        type="text"
                                        name='name'
                                        placeholder='Ваше имя*'
                                        required
                                        autoComplete='off'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <input
                                        className='form-control'
                                        type="number"
                                        min={1}
                                        name='phone_number'
                                        placeholder='Ваше телефон*'
                                        required
                                        autoComplete='off'
                                        value={phone_number}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />

                                </div>

                                <button className='btn myBtn d-flex align-items-center' type='submit' disabled={isLoading}>{isLoading ? <span className="spinner-border spinner-border-sm mr-2"/> : ""} Оставить Заявку</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Send

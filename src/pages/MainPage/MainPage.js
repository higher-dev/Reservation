import React, { useState } from 'react';
import { Stepbox } from 'components/index';
import './MainPage.scss';

const MainPage = () => {
    const [store, setStore] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { store, dateTime, email });
    };

    return (
        <div className='main-page'>
            <div className="title">
                <h1>体験予約申し込み</h1>
                <span>RESERVE</span>
            </div>
            <div className='stepbox-area'>
                <Stepbox number={1} is_filled={false} content="希望日時入力" hasNext={true} />
                <Stepbox number={2} is_filled={false} content="基本情報入力" hasNext={true} />
                <Stepbox number={3} is_filled={false} content="ご確認" hasNext={false} />
            </div>
            <p className='explain-text'>※ 暗号化通信で送信されます。</p>
            
        </div>
    );
};

export default MainPage;

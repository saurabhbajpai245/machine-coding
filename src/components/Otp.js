import React, { useEffect, useRef, useState } from 'react';
require('./css/otp.css');

const OTP_CONFIG_LEN = 5;

const Otp = () => {
    const [otpArr, setOtpArr] = useState(new Array(OTP_CONFIG_LEN).fill('')); 
    const inputRef = useRef([]);
    useEffect(() => {
        inputRef.current[0].focus();
    }, [])
    const otpHandler = (value, indx) => {
        let newArr = [...otpArr];
        newArr[indx] = value.slice(-1);
        setOtpArr(newArr);
        (newArr.length - 1 > indx && value) && inputRef.current[indx+1].focus();
    }
    const handleFocus = (e, indx) => {
        if(e.key == "Backspace"){
            (!otpArr[indx] && indx > 0) && inputRef.current[indx-1].focus()
        }
    }
  return ( 
    <div className='container'>
        {
            otpArr.map((data,index) => {
                return  <input key={index} ref={(el) => inputRef.current[index] = el} className='inputBox' type='text' value={data} onKeyDown={(e) => handleFocus(e, index)} onChange={(e) => otpHandler(e.target.value, index)}></input> 
            })
        }
    </div>
  )
}

export default Otp 
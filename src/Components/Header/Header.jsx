import axios from 'axios';
import React, { useEffect, useState } from 'react'
import logo from "../../assets/Images/Ai-work.svg"

import "./header.scss"

const dataMonth = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];

const Header = () => {

  const [count, setCount] = useState(0);
  const [month, setMonth] = useState(dataMonth[0]);
  console.log(dataMonth[0]);
  useEffect(() => {
    async function getData(){
      // let data = axios.get(`baseUrl/admin/head-one/${count}`)
      if(count < 12){
        setMonth(dataMonth[count])
      }
    }
    getData()
  }, [count]);

  function counterIncrement(){
    if(count < 12){
      setCount(count + 1)
    }
  }
  function counterDecrement(){
    if(count >= 1){
      setCount(count - 1)
    }
  }

  return (
    <header className='px-5 d-flex align-items-center'>
       <div className='col-5'>
          <img className='' width={150} src={logo} alt="ai-work logo " />
       </div>
        <div className='d-flex align-items-center justify-content-start col-7 px-5 gap-2'>
            <div className='d-flex align-items-center col-4 justify-content-between'>
              <button onClick={() => counterDecrement()} className='btn bg-primary py-0'><i className="fa-solid fa-arrow-left text-white"></i></button>
              <strong className='text-white fs-4 mx-3'>{month}</strong>
              <button onClick={() => counterIncrement()} className='btn bg-primary py-0'><i className="fa-solid fa-arrow-right text-white"></i></button>
            </div>
        </div>
        {/* <div className='col-4 d-lg-none'></div> */}
    </header>
  )
}

export default Header
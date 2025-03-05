"use client"
import React, { useEffect, useState } from 'react'
import "./globals.css";
import axios from 'axios';

function page() {

  const [ value , setValue ] = useState();
  const [ balance , setBalance ] = useState();
  const [ multiplier , setMultiplier ] = useState("2.00");
  const [ role , setRole ] = useState("50.50");
  const [ win , setWin ] = useState("49.5000");

  const [val, setVal] = useState(50);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setVal(val);
  };

  const getBalance = async()=>{
    try{
      const bal = await axios.get("/get-balance");
      console.log(bal);
      setBalance(bal.data.balance);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getBalance();
  },[])

  const handleBet = async()=>{
    try{
      setValue("");
      const res = await axios.post("/roll-dice" , { betAmount : value} );
      console.log(res);
      setBalance(res.data.newBalance);
    }catch{
      console.log(error);
    }
  }
  return (
    <>
    <div className="bg-black w-full h-screen p-1 flex gap-4">
      <div className="h-full rounded w-92 text-white bg-zinc-700">
        <div className="p-3">
          <div className="flex items-center justify-between rounded-3xl bg-black h-12 px-2">
            <div className="bg-zinc-700 h-8 w-[9vw] rounded-3xl text-[1.2vw] flex items-center justify-center">Manual</div>
            <div className="h-8 rounded-3xl w-[9vw] text-[1.2vw] flex items-center justify-center">Auto</div>
            <div className="h-8 rounded-3xl w-[9vw] text-[1.2vw] flex items-center justify-center">h</div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between text-[1.2vw]">
              <p className='text-zinc-400'>Bet Amount</p>
              <p className='text-zinc-400'>R0.00</p>
            </div>
            <div className="p-0.5 pr-4 flex items-center justify-between bg-zinc-600 rounded">
              <div className="bg-black py-1 px-1 w-[20vw] flex items-center justify-between">
                <input className='border-none outline-none' type="number" placeholder='0.00' value={value} onChange={e => setValue(e.target.value)}/>
                <p className='pr-2'>R</p>
              </div>
              <p>1/2</p>
              <p>|</p>
              <p>2x</p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between text-[1.2vw]">
              <p className='text-zinc-400'>Profit on Win</p>
              <p className='text-zinc-400'>R0.00</p>
            </div>
            <div className="p-2 bg-black rounded flex items-center justify-between">
              <p>0.00</p>
              <p className='pr-2'>R</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-green-400 mt-2 font-bold h-12 rounded text-black">
            <button onClick={handleBet} className='hover:cursor-pointer h-full w-full'>Bet</button>
          </div>
        </div>
      </div>
      <div className="text-white relative">
        <div className="">
          <div className="">
            <div className="flex items-center justify-between w-[65vw]">
              <p>Current Balance : $ { balance } </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-8 flex items-center justify-center w-14 text-[1vw] text-black font-bold rounded-full bg-green-500">88.02</div>
                <div className="h-8 flex items-center justify-center w-14 text-[1vw] text-black font-bold rounded-full bg-green-500">58.35</div>
                <div className="h-8 flex items-center justify-center w-14 text-[1vw] text-black font-bold rounded-full bg-green-500">68.71</div>
              </div>
            </div>
          </div>
          <div className="absolute top-[40%] flex items-center justify-center w-[65vw]">
            <div className="flex flex-col items-center justify-center absolute top-[-65%] left-[10%]">
              <p>0</p>
              <div className="h-[0.5vw] w-[0.5vw] rounded-t bg-zinc-700 z-99"></div>
            </div>
            <div className="flex flex-col items-center justify-center absolute top-[-65%] left-[30%]">
              <p>25</p>
              <div className="h-[0.5vw] w-[0.5vw] rounded-t bg-zinc-700 z-99"></div>
            </div>
            <div className="flex flex-col items-center justify-center absolute top-[-65%] left-[50%]">
              <p>50</p>
              <div className="h-[0.5vw] w-[0.5vw] rounded-t bg-zinc-700 z-99"></div>
            </div>
            <div className="flex flex-col items-center justify-center absolute top-[-65%] left-[70%]">
              <p>75</p>
              <div className="h-[0.5vw] w-[0.5vw] rounded-t bg-zinc-700 z-99"></div>
            </div>
            <div className="flex flex-col items-center justify-center absolute top-[-65%] right-[9%]">
              <p>100</p>
              <div className="h-[0.5vw] w-[0.5vw] rounded-t bg-zinc-700 z-99"></div>
            </div> 
            <div className="w-12 h-15 flex items-center justify-center [filter:drop-shadow(10px_10px_10px_rgba(0,0,0,0.5))] text-[1.2vw] text-bold text-black absolute top-[-95%] right-[30%] z-99 bg-white [clip-path:polygon(50%_0%,_100%_20%,_100%_80%,_50%_100%,_0%_80%,_0%_20%)]">68.71</div>
            <div className="w-[55vw] h-[8vh] bg-zinc-700 rounded-[30vw] py-[1vw] px-[1vw] flex items-center justify-center">
              <div className="bg-zinc-900 w-full rounded-2xl flex items-center justify-center px-[0.8vw] py-[0.6vw]">
                <input type="range" className='w-full' id="rangeInput" min="0" max="100" value={val} onChange={handleInputChange} style={{
                        background: `linear-gradient(to right, red ${val}%, green ${val}%)`,
                 }}/>
              </div>
            </div>
          </div>
          <div className="w-[65vw] absolute bottom-4 h-20 rounded bg-zinc-700 flex items-center justify-between py-3 px-3">
            <div className="">
              <p className='text-zinc-400 text-[1.2vw]'>Multiplier</p>
              <div className="flex items-center justify-between mt-1 w-[20vw] border-2 border-zinc-600 bg-black py-1 px-2">
                <input type="number" className='text-[1vw] outline-none text-white no-arrows' placeholder='2.00' value={multiplier} onChange={e => setMultiplier(e.target.value)}/>
                <p>k</p>
              </div>
            </div>
            <div className="">
              <p className='text-zinc-400 text-[1.2vw]'>Roll Over</p>
              <div className="flex items-center justify-between w-[20vw] mt-1 border-2 border-zinc-600 bg-black py-1 px-2">
                <input type="number" className='text-[1vw] outline-none' value={role} onChange={e => setRole(e.target.value)}/>
                <p>k</p>
              </div>
            </div>
            <div className="">
              <p className='text-zinc-400 text-[1.2vw]'>Win Chance</p>
              <div className="flex items-center justify-between w-[20vw] mt-1 border-2 border-zinc-600 bg-black py-1 px-2">
                <input type="number" className='text-[1vw] outline-none' value={win} onChange={e => setWin(e.target.value)}/>
                <p>k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page

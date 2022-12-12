import {
    useContext,
    useEffect,
    useState,
    useRef,
    MouseEventHandler
} from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import {
    BigNumber,
    ethers,
    ContractTransaction,
} from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { v4 } from 'uuid';

import {bets} from "../pages/api/data/bets"


function Numbers() {
   

    const {
        updateUI,
        checkNetwork,
        handleSuccess,
        goerliNetwork,
        setGoerliNetwork,
        Moralis,
        chainId,
        wheelSpinning,
        abi,
        rouletteAddress,
        allPlayersWinnings,
        currentCasinoBalance,
        lastWinningNumber,
        _betType,
        set_betType,
        _numbers,
        set_numbers,    
        msgValue,
        onClickNumbers,
        _numbersForUI,
        pickedNumbers
    }: any = useContext(AppContext)

    function colorizeNumbers() {
        if (pickedNumbers == 151) {
            return "text-black"
        }
        if (pickedNumbers == 152) {
            return "text-red-600"
        }
        if (pickedNumbers == 1 || pickedNumbers == 134 || (pickedNumbers > 109 && pickedNumbers < 112) || (pickedNumbers > 94 && pickedNumbers< 98 )) {
            return "text-[#22c55e]"
        } else {
        if ((pickedNumbers < 12 || (pickedNumbers > 19 && pickedNumbers < 30)) && (pickedNumbers % 2 == 1)) {
            return "text-black"
        } else if ((pickedNumbers > 29 || (pickedNumbers > 11 && pickedNumbers < 20)) && (pickedNumbers % 2 == 0)) {
            return "text-black"
        } 
        
        else if ((pickedNumbers < 12 || (pickedNumbers > 19 && pickedNumbers < 31)) && (pickedNumbers % 2 == 0)) {
            return "text-[#dc2626]"
        } else if ((pickedNumbers > 30 || (pickedNumbers > 11 && pickedNumbers < 20)) && (pickedNumbers % 2 == 1)) {
            return "text-[#dc2626]"
        } 
       }
      
        return "text-[#00e8e8]"
 }
  



// useEffect(() => {
//     console.log(_numbers)
//     console.log(_betType)
//     console.log(msgValue)
// }, [_numbers])

// className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")} ml-2 mt-3 border p-1 rounded-md text-base font-semibold`} 

/* {bets.filter(function ({_betType, _numbers}) {
                    return (
                        <button
                            //onClick={() => {onClick(betType)}} 
                            key={v4()}
                            className={`bg-[#d9fdff] text-black ml-2 mt-3 border p-1 rounded-md text-base font-semibold`}  
                        >
                            {_numbers.map(function(item) {return item})}
                        </button>
                    )
                })} */

                // map(function(item) {return item})
                //if (_betType == 0 || _betType == 1 || _betType == 2 || _betType == 3 || _betType == 4 ||) {}


                // {bets.filter(function({id}) {return pickedNumbers == id })._numbers.map(function(item) {return <span>{item.toString()}</span>})}
    return (
        <>
             <div className="flex flex-col justify-center items-center mt-3 pb-10">
                <p className="text-2xl font-semibold ">Pick Number(s)</p> 
             <p className="text-2xl font-semibold mt-1 px-2">Current: <span className={` ${colorizeNumbers()} font-bold`}>{_numbersForUI < 5 ? (bets.find(({id}) => id == pickedNumbers)?._numbers.join("-")) : (bets.find(({id}) => id == pickedNumbers)?.description)}</span></p> 
                <div className="">
                {bets.filter(function({_betType}) {
                    return _betType == _numbersForUI
                }).map(function ({_betType, _numbers, description, id}) {
                     if (_betType == 0 ) {
                        return (
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   ml-4 w-10 mt-8 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 1 ) {
                        return (
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   ml-4 mt-5 w-16 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 2) {
                        return (
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   ml-6 mt-8 w-24 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 3) {
                        return (
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   ml-6 mt-4 w-28 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 4) {
                        return (
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   ml-8 mt-10 w-40 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 5 ) {
                        return (
                            
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   ml-10 mt-6 h-24 w-48 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                {description}
                            </button>
                        
                        )
                     } else if (_betType == 6 ) {
                        return (
                          
                        
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   items-center ml-10 mt-6 pb-10 w-48 h-20 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}>
                                {description}
                            </button>
                         
                       
                        )
                     }  else if (_betType == 7 ) {
                        return (
                          
                        
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   items-center ml-10 first:-ml-0 mt-6 pb-10 w-48 h-[6.5rem] border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                {description}
                            </button>
                         
                       
                        )
                     } else if (_betType == 8 ) {
                        return (
                          
                        
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   items-center ml-10 first:-ml-0  mt-6 pb-10 w-48 h-20 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                {description}
                            </button>
                         
                       
                        )
                     } else if (_betType == 9 ) {
                        return (
                          
                        
                            <button onClick={() => {onClickNumbers(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}   items-center ml-10 first:-ml-0 mt-6 pb-10 w-48 h-20 border border-[#c2c2c2] p-1 px-2 rounded-md text-base font-semibold hover:bg-[#ff0062] hover:text-[#ffffff]`}  >
                                {description}
                            </button>
                         
                       
                        )
                     }
                     
                                            
                })}
                </div> 
            </div> 
        </>
    )
}

export default Numbers

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
    const [_numbersForUI, set_numbersForUI] = useState(0)
    const [pickedNumbers, setPickedNumbers] = useState(0)

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
            
    }: any = useContext(AppContext)


    function onClick(id: number, _numbers: number[]): MouseEventHandler<HTMLButtonElement> {
        set_numbers(_numbers)
        setPickedNumbers(id)
    }

useEffect(() => {
    set_numbersForUI(_betType)
}, [_betType])

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
             <p className="text-2xl font-semibold mt-1 px-2">Current: <span className="text-[#00e8e8]">{_numbersForUI < 5 ? (bets.find(({id}) => id == pickedNumbers)?._numbers.join("-")) : (bets.find(({id}) => id == pickedNumbers)?.description)}</span></p> 
                <div className="">
                {bets.filter(function({_betType}) {
                    return _betType == _numbersForUI
                }).map(function ({_betType, _numbers, description, id}) {
                     if (_betType == 0 ) {
                        return (
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black ml-4 w-10 mt-8 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 1 ) {
                        return (
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black ml-4 mt-5 w-16 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 2) {
                        return (
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black ml-6 mt-8 w-24 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 3) {
                        return (
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black ml-6 mt-4 w-28 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 4) {
                        return (
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black ml-8 mt-10 w-40 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                
                          
                                {_numbers.join('-')}
                            </button>
                        )
                     } else if (_betType == 5 ) {
                        return (
                            
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black ml-10 mt-6 h-24 w-48 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                {description}
                            </button>
                        
                        )
                     } else if (_betType == 6 ) {
                        return (
                          
                        
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black items-center ml-10 mt-6 pb-10 w-48 h-20 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                {description}
                            </button>
                         
                       
                        )
                     }  else if (_betType == 7 ) {
                        return (
                          
                        
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black items-center ml-14 mt-6 pb-10 w-48 h-[6.5rem] border p-1 px-2 rounded-md text-base font-semibold`}  >
                                {description}
                            </button>
                         
                       
                        )
                     } else if (_betType == 8 ) {
                        return (
                          
                        
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black items-center ml-14 mt-6 pb-10 w-48 h-20 border p-1 px-2 rounded-md text-base font-semibold`}  >
                                {description}
                            </button>
                         
                       
                        )
                     } else if (_betType == 9 ) {
                        return (
                          
                        
                            <button onClick={() => {onClick(id, _numbers)}} 
                            key={v4()}
                            className={`${id == pickedNumbers ? ("bg-[#ff0062] text-[#ffffff]") : ("bg-[#d9fdff] text-black")}  text-black items-center ml-14 mt-6 pb-10 w-48 h-20 border p-1 px-2 rounded-md text-base font-semibold`}  >
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

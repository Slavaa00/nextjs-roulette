import { useContext, useEffect, useState, useRef, ChangeEvent } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

// import { Range } from 'react-range';
// import Slider, { Range } from 'rc-slider';
// import 'rc-slider/assets/index.css';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
     
      main: '#5740dc',
    },
    
  },
});

function BetAmountInput() {
    const handleChange = (event) => {
        set_msgValue(Number(event.target.value).toString());
      };

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
        msgValue,
        set_msgValue,
        minimalBet, 
        maximumBet,
        startGameValue
    }: any = useContext(AppContext)
    
    // useEffect(() => {
    //     setBetAmount(ethers.utils.formatEther(msgValue.toString()))
    //     // setBetAmount(ethers.utils.parseUnits(msgValue, "ether"))
    // }, [msgValue])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      
        if (e.target.value) {
            // set_msgValue(ethers.utils.parseUnits(e.target.value, "ether").toString() )
            // set_msgValue(ethers.utils.formatEther(e.target.value, "ether").toString() )
            set_msgValue(Number(e.target.value))
        } 
        else (set_msgValue(""))
        
    }
// useEffect(() => {console.log(msgValue)}, [msgValue])
    const input = useRef();
  return (
    <>
            <div className="flex flex-col items-center justify-center mt-3 mr-5  w-full">
                <label htmlFor="betAmount" className="font-semibold text-2xl ml-5">
                 Bet Amount
                </label>
                <div className="flex mt-2"><div><input
                    ref={input}
                    className="[appearance:none] text-lg border-black-400 text-black-900 ml-3 mt-1 w-[13.5rem] outline-pink-500  h-14 text-md  rounded border-2 pl-2 font-medium border-t-black border-l-black border-r-red-600 border-b-red-600"
                    id="betAmount"
                    type="number"
                    placeholder="Enter Bet Amount (ETH)"
                    value={msgValue}
                    onChange={onChange}
                    min="0.000000000000001"
                    max="0.01"
                /></div>
                <div className="w-40 "> <ThemeProvider theme={theme}><Slider
          className="my-4 ml-6 w-40" 
          value={msgValue} 
          onChange={handleChange}
          defaultValue={Number(maximumBet)}
          min={0.001}
          max={Number(maximumBet)}
          step={0.00001}
          classes={{ active: 'shadow-none' }}
          slotProps={{ thumb: { className: 'hover:shadow-none' } }}
        /></ThemeProvider></div></div>
            
            </div>
        </>
  )
}

export default BetAmountInput
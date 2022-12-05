import { useContext, useEffect, useState, useRef, ChangeEvent } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"


function BetAmountInput() {
    const [betAmount, setBetAmount] = useState()
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
    }: any = useContext(AppContext)
    
    // useEffect(() => {
    //     setBetAmount(ethers.utils.formatEther(msgValue.toString()))
    //     // setBetAmount(ethers.utils.parseUnits(msgValue, "ether"))
    // }, [msgValue])

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            // set_msgValue(ethers.utils.parseUnits(e.target.value, "ether").toString() )
            // set_msgValue(ethers.utils.formatEther(e.target.value, "ether").toString() )
            set_msgValue(e.target.value )
        } else (set_msgValue(""))
        
    }

    const input = useRef();
  return (
    <>
            <div className="flex flex-col items-center justify-center mt-3 mr-5">
                <label htmlFor="betAmount" className="font-semibold text-2xl ml-5">
                 Bet Amount
                </label>
                <input
                    ref={input}
                    className="[appearance:none] text-lg border-black-400 text-black-900 ml-3 mt-1 w-full outline-pink-500  h-14 text-md  rounded border-2 pl-2 font-medium border-t-black border-l-black border-r-red-600 border-b-red-600"
                    id="betAmount"
                    type="number"
                    placeholder="Enter Bet Amount (ETH)"
                    value={msgValue}
                    onChange={onChange}
                    min="0.000000000000001"
                    max="0.01"
                />
            </div>
        </>
  )
}

export default BetAmountInput
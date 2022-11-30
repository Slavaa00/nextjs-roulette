import { useContext, useEffect, useState, useRef, ChangeEvent } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"


function BetAmountInput() {

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

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            set_msgValue(ethers.utils.parseUnits(e.target.value, "ether").toString() )
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
                    className="text-lg border-black-400 text-black-900 ml-3 mt-1 w-full outline-pink-500  h-14 text-md  rounded border-2 pl-2 font-medium border-t-black border-l-black border-r-red-600 border-b-red-600"
                    id="betAmount"
                    type="text"
                    placeholder="Enter Bet Amount (ETH)"
                    // value={depositValue}
                    onChange={onChange}
                />
            </div>
        </>
  )
}

export default BetAmountInput
import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

import CreateBetSpendDepositButton from "./createBetSpendDepositButton"

function CreateBetButton() {
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
        _betType,
        _numbers
    }: any = useContext(AppContext)

   

    const {
        runContractFunction: createBet,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: rouletteAddress!, // specify the networkId
        functionName: "createBet",
        params: {
            _betType: _betType,
            _numbers: _numbers,
        },
        msgValue: msgValue
    })

   

    return (
        <>
            <div className="flex flex-col">
                <div className="mt-5 flex items-center justify-center">
                    <button
                        className="ml-auto h-16  w-40 rounded bg-black py-2 px-4 font-bold text-white hover:bg-gray-600"
                        onClick={async function () {
                            await createBet({
                                onSuccess: (tx: any) => handleSuccess(tx as ContractTransaction),
                            })
                        }}
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="spinner-border h-8 w-8 animate-spin rounded-full border-b-2"></div>
                        ) : (
                            <div>Make a new Bet</div>
                        )}
                    </button>
                            <CreateBetSpendDepositButton />
                   
                </div>

              
            </div>
        </>
    )
}

export default CreateBetButton

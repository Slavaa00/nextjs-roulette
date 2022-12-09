import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

import CreateBetSpendDepositButton from "./CreateBetSpendDepositButton"

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
        _numbers,
        confetti, 
        setConfetti,
        setBetsSum,
        betsSum
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
        msgValue: (msgValue ? ethers.utils.parseUnits(Number(msgValue).toFixed(15), "ether") : "0")
    })

 console.log(Number(localStorage.getItem("betsSum")).toFixed(20))
    return (
        <>
            <div className="flex flex-col mt-3">
                <div className=" flex items-center justify-center">
                    <button
                        className="ml-auto  px-2 h-[7rem] w-[21rem] text-2xl  rounded-lg bg-black  px-2 font-bold text-white hover:bg-gray-600"
                        onClick={async function () {
                           

                            await createBet({
                                onSuccess: async (tx: any) => {
                                    handleSuccess(tx as ContractTransaction);
                                    // setBetsSum((betsSum) => (Number(betsSum) + Number(msgValue)).toString());
                                    localStorage.setItem("betsSum", (Number(localStorage.getItem("betsSum")) + Number(msgValue)).toFixed(15));

                                    // setTimeout(async () => {
                                    //     await updateUI()
                                    // }, 120000)
                                },
                            });

                        }}
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="spinner-border m-auto text-center h-8 w-8 animate-spin rounded-full border-b-2"></div>
                        ) : (
                            <div>Make a new Bet<p className="mt-2">by spending wallet money</p></div>
                        )}
                    </button>
                            <CreateBetSpendDepositButton />
                   
                </div>

              
            </div>
        </>
    )
}

export default CreateBetButton

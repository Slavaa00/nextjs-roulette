import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/OnchainDataContext"
import { BigNumber, ethers, ContractTransaction } from "ethers"
import { useWeb3Contract, useMoralis } from "react-moralis"

function CreateBetSpendDepositButton() {


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
        runContractFunction: createBetSpendDeposit,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: rouletteAddress!, // specify the networkId
        functionName: "createBetSpendDeposit",
        params: {
            _betType: _betType,
            _numbers: _numbers,
            _amount: (msgValue ? ethers.utils.parseUnits(Number(msgValue).toFixed(15), "ether") : "0")
        },
       
    })
  
  return (
    <> 
    <button
    className="ml-[2rem] rounded-lg bg-red-600  px-1 h-[7rem] w-[21rem] text-2xl font-bold text-white hover:bg-red-800 disabled:opacity-50"
    onClick={ async function () {
        await createBetSpendDeposit({
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
    Make a Bet 
    <p className="mt-2">
    by spending a Deposit</p>
</button>
</>
  )
}

export default CreateBetSpendDepositButton
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
        _numbers
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
            _amount: msgValue,
        },
       
    })

  return (
    <> 
    <button
    className="ml-12 rounded bg-red-600 py-2 px-4 font-bold text-white hover:bg-red-700 disabled:opacity-50"
    onClick={async function () {
        await createBetSpendDeposit()
    }}
    disabled={isLoading || isFetching}
>
    Make a Bet
    <br />
    spending a Deposit
</button>
</>
  )
}

export default CreateBetSpendDepositButton
import { useState, useEffect } from "react"

import "../styles/globals.css"
import type { AppProps } from "next/app"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "@web3uikit/core"
import OnchainDataContext from "../contexts/OnchainDataContext"
import { MetaMaskProvider } from "metamask-react";

function MyApp({ Component, pageProps }: AppProps) {

const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, [])

  if (!showChild) {
    return null;
  }
  
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <OnchainDataContext>
                <MetaMaskProvider>
                    <Component {...pageProps} />
                    </MetaMaskProvider>
                </OnchainDataContext>
            </NotificationProvider>
        </MoralisProvider>
        )
    }
}

export default MyApp

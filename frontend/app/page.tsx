"use client"
import Landing from '@/components/landing';
import Script from 'next/script';

export default function Home() {
  return (<>
          <Landing/>
            <Script
                src="https://cloud.livekit.io/embed-popup.js"
                data-lk-agent="CA_rXQnHbSdMyBx"
                data-lk-color="#002CF2"
                async
          ></Script>
  </>);
}

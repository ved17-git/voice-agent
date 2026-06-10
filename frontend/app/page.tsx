"use client"
import Landing from '@/components/landing';


export default function Home() {
  return (<>
          <Landing/>
            <script
                src="https://cloud.livekit.io/embed-popup.js"
                data-lk-agent="CA_rXQnHbSdMyBx"
                data-lk-color="#002CF2"
                async
          ></script>
  </>);
}

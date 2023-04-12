import React from 'react';
import cleintImg from "../../assets/images/partner-4.png"

const CleintSection = () => {
  return (
      <>
         <section class="section client-section">
        <div class="client-logo container">
                <div class="cleint-row">
                    <div class="cleint-cover">
                        <div class="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div class="cleint-cover">
                        <div class="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div class="cleint-cover">
                        <div class="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div class="cleint-cover">
                        <div class="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                    <div class="cleint-cover">
                        <div class="client-pannel">
                            <img src={cleintImg} alt="" />
                        </div>
                    </div>
                </div>
        </div>
   </section>
       
      </>
  )
}

export default CleintSection
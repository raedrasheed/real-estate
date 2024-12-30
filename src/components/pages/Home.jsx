import React from 'react'
import "./Home.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../misc/Header'
import Gift from '../misc/Gift'
import Property from '../misc/Property'
import QnA from '../misc/QnA'
import vrmobile from "../../images/vrmobile.png";
import faq from "../../datas/faqs/faq";
import properties from "../../datas/properties";
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <React.Fragment>
            <Header />
            <h2>
              How to invest in real estate with TFORE?
            </h2>
            <div className="container">
              <div className="content">
                <h3>
                  <span className="dash">- </span>  01
                </h3>
                <p>Connect your wallet via sync, sync2 or VeChainThor.</p>
              </div>
              <div className="content">
                <h3>
                  <span className="dash">- </span>  02
                </h3>
                <p>Go to the marketplaces to buy an NFT TFORE.</p>
              </div>
              <div className="content">
                <h3>
                  <span className="dash">- </span>  03
                </h3>
                
                <p>You receive your rental return each month.</p>
                <div className="arc"></div>
              </div>
              <div className="content">
                <h3>
                  <span className="dash">- </span>  04
                </h3>
                <p>Sell your NFTs free of charge, whenever you want.</p>
              </div>
            </div>
            <div className="ad">
              <h3> The advantages, without the disadvantages</h3>
              <p> 
                Our unique solution allows everyone to build up their own assets, from as little as $10.<br/>
                Investing your savings is finally simple and really rewarding.
              </p>

              <div className="adcontainer">
              <div className="adcontent">
                <i className="fas fa-check fa-checker"/>
                <h3>
                  Profitability
                </h3>
                <p>We will try to base this on an average of 7%.</p>
              </div>
              <div className="adcontent">
                <i className="fas fa-check fa-checker"/>
                <h3>
                  Liquidity
                </h3>
                <p>You buy and sell your NFTs whenever you want.</p>
              </div>
              <div className="adcontent">
                <i className="fas fa-check fa-checker"/>
                <h3>
                  No hidden fee
                </h3>
                <p>No entry, exit or capital gains fees.</p>
              </div>
              <div className="adcontent">
                <i className="fas fa-check fa-checker"/>
                <h3>
                  No management
                </h3>
                <p>Don't worry, TFORE takes care of everything.</p>
              </div>
            </div>
            </div>
            <h3>How <span className="cl-blue">TFORE</span> works?</h3>
            <div className="how">
              <div className="how-left">
                <h3>
                  <span className="cl-blue">1.</span> A building is selected 
                </h3>
                <p>We divide it by 10$ to have a supply NFTs on it.</p>
                <br/>
                <h3>
                  <span className="cl-blue">2.</span> A building is selected 
                </h3>
                <p>You can now buy NFTs against the property in question.</p>
              </div>
              <div className="how-right">
                <h3>
                  <span className="cl-blue">3.</span> A building is selected 
                </h3>
                <p>Each month, you will receive the rents collected on your wallet. </p>
                <br/>
                <h3>
                  <span className="cl-blue">4.</span> A building is selected 
                </h3>
                <p>When you decide, you can put your NFT up for sale, otherwise take advantage of the passive income.</p>
              </div>
              <img src={vrmobile} className="vrmobile" alt="TFORE mobile" style={{width:"400px", height:"450px"}}/>
            </div>
            <div className="pr-header">
              <h3 id="properties">Among our properties already financed</h3>
              <h3 className="cl-blue"><a href='/MarketPlace'>View All</a></h3>
            </div>
            <div className="properties">
              {properties.map((property) => <Property property={property}/>)}
            </div>
            <h3>Your most frequently asked questions</h3>
            <p className="center">
              Based on your feedback, we try to answer your questions and expectations.
            </p>
            <div id='faq'>
            {faq.map((q, i) => {
              return <QnA n={i+1} q={q}/>
            })}
            </div>
            <Gift/>
        </React.Fragment>
    )
}

export default Home;

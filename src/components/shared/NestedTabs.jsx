import React, { useState } from 'react';
import '../shared/Tabs.scss'
import PurchaseAnalysis from "../existing_customer/PurchaseAnalysis";
import NutriAdvisor from "../existing_customer/NutriAdvisor";
import badge1Image from "./Badge1.jpg";
import badge2Image from "./Badge2.jpg";
import purchaseAnalysis from "./PurchaseAnalysis.jpg";

import {
  FacebookShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
  TwitterShareButton, WhatsappIcon, TwitterIcon, InstapaperIcon, FacebookIcon,
} from "react-share";

function NestedTabs() {
  const style12 = {
    backgroundImage: `url(${badge1Image})`,
    width: '100px',
    height: '100px',
  };

  const [activeTab, setActiveTab] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('September');
  const sharing_url = window.location.href;
  const sharing_title = "Hey, take a look, I'm so sustainable!!"
  const tabs = [
    {
      title: "Purchase analysis",
      content: <PurchaseAnalysis  />
    },
    {
      title: "Monthly advisor",
      content: <NutriAdvisor />
    }
  ];

  return (
    <>
    <div className="badges_block">
      <div className="badges_switcher"></div>
      <div className="badges_itself">
        <div className="badge-switcher">
          <div className="select">
            <select
              id="standard-select"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="" disabled>Select a month</option>
              <option value="September">September</option>
              <option value="August">August</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <div className="badge_picture_wrapper">
          {selectedMonth === 'September' && (
            <div className="badge_picture1" >
              <img src={badge1Image} style={{height:'450px', marginLeft:"40px"}}/>
            </div>
          )}
          {selectedMonth === 'August' && (
            <div className="badge_picture2">
              <img src={badge2Image} style={{height:'450px', marginLeft:"40px"}} />
              PLACE THE BADGE 2 HERE
            </div>
          )}
        </div>
        <div className="sharing-buttons">
          <FacebookShareButton url={sharing_url} quote={sharing_title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <InstapaperShareButton url={sharing_url} title={sharing_title}>
            <InstapaperIcon size={32} round />
          </InstapaperShareButton>

          <WhatsappShareButton url={sharing_url} title={sharing_title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <TwitterShareButton url={sharing_url} title={sharing_title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
      </div>
    </div>
    <div className="tabs_wrapper">
      <div className="tabs_controls">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.title}
          </div>
        ))}
      </div>

      <div className="tabs_content">
        {tabs[activeTab].content}
      </div>
    </div>
      </>
  );
}

export default NestedTabs;
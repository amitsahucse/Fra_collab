import React, { useState } from 'react';
import SetBudget from "../existing_customer/SetBudget";
import SetCalories from "../existing_customer/SetCalories";
import './Tabs.scss'

function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Set monthly budget",
      content: <SetBudget />
    },
    {
      title: "Set nutritional goal",
      content: <SetCalories />
    },
    {
      title: "Previous purchases",
      content: "Content for Tab 3"
    }
  ];

  return (
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
  );
}

export default TabsComponent;

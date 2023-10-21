import React, { useState } from 'react';

function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Set monthly budget",
      content: "Content for Tab 1"
    },
    {
      title: "Set nutritional goal",
      content: "Content for Tab 2"
    },
    {
      title: "Previous purchases",
      content: "Content for Tab 3"
    }
  ];

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabsComponent;

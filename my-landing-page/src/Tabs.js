import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tab-nav">
        {tabs.map((tab, index) => (
          <div
            className={index === activeTab ? "active tab" : "tab"}
            key={index}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;

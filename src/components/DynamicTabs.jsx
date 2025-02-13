import React, { useState } from "react";
import "./dynamicTabs.css";
import { RxCross2 } from "react-icons/rx";

function DynamicTabs() {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Tab 1", content: "Content for Tab 1" },
    { id: 2, title: "Tab 2", content: "Content for Tab 2" },
  ]);
  const [activeTab, setActiveTab] = useState(0);

  const handleAddTab = () => {
    const newTab = {
      id: tabs.length + 1,
      title: `Tab ${tabs.length + 1}`,
      content: `Content for Tab ${tabs.length + 1}`,
    };
    setTabs([...tabs, newTab]);
    setActiveTab(tabs.length);
  };

  const handleRemoveTab = (id) => {
    if (tabs.length === 1) {
      alert("Cannot remove the last tab!");
      return;
    }
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);
    setActiveTab(updatedTabs.length - 1);
  };

  const handleTabClick = (id) => {
    const index = tabs.findIndex((tab) => tab.id === id);
    setActiveTab(index);
  };

  return (
    <div className="dynamic-tabs">
      <button className="add-tab-btn" onClick={handleAddTab}>
        Add Tab
      </button>
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
            <button
              className="remove-tab-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveTab(tab.id);
              }}
            >
              <RxCross2 />
            </button>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`tab-content ${
              activeTab === index ? "active-content" : "inactive-content"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicTabs;

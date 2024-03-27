import React, { useState } from "react";
import "../DiscribePanel/DiscribePanel.scss";

export function DiscribePanel(props) {
  const [isContentShow, setIsContentShow] = useState(false);
  const [isIconUp, setIsIconUp] = useState(true);

  const toggleContent = () => {
    setIsContentShow(!isContentShow);
    setIsIconUp(!isIconUp);
  };

  return (
    <div className="discribe_panel">
      <p className='description__title'>
        <span>{props.title}</span>
        <i
          className={`fa-solid fa-chevron-${isIconUp ? 'up' : 'down'}`}
          onClick={toggleContent}>
        </i>
      </p>
      
      {isContentShow && <p className="description__content">{props.content}</p>}
    </div>
  );
}

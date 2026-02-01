import React from 'react';

const Characters = () => {
  return (
    <div className="characters-scene">
      {/* Path */}
      <div className="path"></div>
      
      {/* Boy Character */}
      <div className="character boy">
        <div className="boy-head">
          <div className="boy-hair" />
          <div className="boy-eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </div>
          <div className="boy-mouth"></div>
        </div>
        <div className="boy-body">
          <div className="boy-arm boy-arm-left" />
          <div className="boy-arm boy-arm-right" />
        </div>
        <div className="boy-legs">
          <div className="boy-leg" />
          <div className="boy-leg" />
        </div>
        <div className="boy-shadow" />
        {/* Rose */}
        <div className="rose-holder" />
      </div>

      {/* Girl Character */}
      <div className="character girl">
        <div className="girl-head">
          <div className="girl-hair" />
          <div className="girl-eyes">
            <span className="eye"></span>
            <span className="eye"></span>
          </div>
          <div className="girl-mouth"></div>
        </div>
        <div className="girl-body">
          <div className="girl-arm girl-arm-left" />
          <div className="girl-arm girl-arm-right" />
        </div>
        <div className="girl-legs">
          <div className="girl-leg" />
          <div className="girl-leg" />
        </div>
        <div className="girl-shadow" />
      </div>
    </div>
  );
};

export default Characters;

import React, { useState, useEffect } from 'react';

const Time: React.FC = () => {
  const [showTime, setShowTime] = useState<string>("");
    
    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const timeString = date.getHours() 
                + ':' + date.getMinutes() 
                + ":" + date.getSeconds();
            setShowTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000); 
        return () => clearInterval(intervalId); 
    }, []);
  return (
    <div className="font-bold">
        {showTime}
    </div>
  )
}

export { Time }
import React, { useState, useEffect } from 'react';

const Time: React.FC = () => {
  const [showTime, setShowTime] = useState<string>("");
    
  useEffect(() => {
    const updateTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; 

        const formatTime = (num: number) => num.toString().padStart(2, '0');

        const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;
        setShowTime(timeString);
    };

      updateTime();
      const intervalId = setInterval(updateTime, 1000); 
      return () => clearInterval(intervalId); 
    }, []);
  return (
    <div className="font-medium">
        {showTime}
    </div>
  )
}

export { Time }
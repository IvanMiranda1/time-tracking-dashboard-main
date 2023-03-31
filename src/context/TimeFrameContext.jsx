import { createContext, useState, useEffect } from "react";
import data from "../data.json";

export const TimeFrameContext = createContext();

export function TimeFrameContextProvider(props) {
  const [timeFrame, setTimeFrame] = useState("weekly");

  const [arrayData, setArrayData] = useState([]);

  // const [datos, setDatos] = useState([]);

  // function setTime(value) {
  //   const frame = value instanceof Object ? value.target.value : value;
  //   setTimeFrame(frame);
  // }

  function setTime(event){
    event instanceof Object
    ? setTimeFrame(event.target.value, () => {
      const newArray = data.map((item) => {
        return {
          title: item.title,
          frame: item.timeframes[timeFrame],
        };
      });
      setArrayData(newArray);
    })
    : setTimeFrame(e, () => {
      const newArray = data.map((item) => {
        return {
          title: item.title,
          frame: item.timeframes[timeFrame],
        };
      });
      setArrayData(newArray);
    })
  }

  // useEffect(() => {
    
  // }, [timeFrame]);

  return (
    <TimeFrameContext.Provider
      value={{ timeFrame, setTime, arrayData, setArrayData }}
    >
      {props.children}
    </TimeFrameContext.Provider>
  );
}

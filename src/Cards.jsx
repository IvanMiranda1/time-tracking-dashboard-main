import { TimeFrameContext } from "./context/TimeFrameContext";
import { useContext } from "react";
import Card from "./Card";

function Cards() {
  const { arrayData } = useContext(TimeFrameContext);

  return (
    <div>
      {arrayData.map((item, index) => {
        <Card key={index} data={item} />;
      })}
    </div>
  );
}

export default Cards;

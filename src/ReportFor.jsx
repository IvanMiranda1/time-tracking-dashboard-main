import image from "./images/image-jeremy.png";
import { useContext,useState } from "react";
import { TimeFrameContext } from "./context/TimeFrameContext";

function ReportFor() {
  const { setTime } = useContext(TimeFrameContext);

  return (
    <div>
      <div>
        <img src={image} alt="Foto de perfil" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div>
        <input
          type="radio"
          id="daily"
          name="time"
          value="daily"
          onClick={(e) => {
            setTime(e);
          }}
          autoFocus
        />
        <label htmlFor="daily">Daily</label>
      </div>
      <div>
        <input
          type="radio"
          id="weekly"
          name="time"
          value="weekly"
          onClick={(e) => {
            setTime(e);
          }}
        />
        <label htmlFor="weekly">Weekly</label>
      </div>
      <div>
        <input
          type="radio"
          id="monthly"
          name="time"
          value="monthly"
          onClick={(e) => {
            setTime(e);
          }}
        />
        <label htmlFor="monthly">Monthly</label>
      </div>
    </div>
  );
}

export default ReportFor;

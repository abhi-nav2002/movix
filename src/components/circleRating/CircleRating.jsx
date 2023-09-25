import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.scss";

const CircleRating = ({ rating }) => {
    
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating > 10.0 ? 10.0 : rating}
                maxValue={10}
                text={rating > 10.0 ? 10.0 : rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;



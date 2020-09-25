import React from "react";

import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function Heatmap(props) {
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }
  const today = new Date();
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -60)}
        endDate={today}
        values={props.datedata}
        horizontal={false}
        showWeekdayLabels={true}
        monthLabels={[
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ]}
        weekdayLabels={["일", "월", "화", "수", "목", "금", "토"]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${value.count}`;
        }}
      />
    </div>
  );
}

export default Heatmap;

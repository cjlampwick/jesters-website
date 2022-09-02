import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "../../styles/calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);
const events = [{ start: new Date(), end: new Date(), title: "Today" }];
const DnDCalendar = withDragAndDrop(Calendar);


class JSCalendar extends React.Component {
  state = {
    events
  };
  onEventResize = (data) => {
    const { start, end } = data;
    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };
  onEventDrop = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div className="js-calendar position">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "730px" }}
        />
      </div>
    );
  }
}
export default JSCalendar;
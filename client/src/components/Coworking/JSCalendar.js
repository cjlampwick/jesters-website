import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import JSModal from "../Coworking/JSModal";
import Spacing from "../Spacing";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "../../styles/calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const events = [{ start: new Date(), end: new Date(), title: "Today" }];
const DnDCalendar = withDragAndDrop(Calendar);

class JSCalendar extends React.Component {
  state = {
    events,
    showHidden: false,
  };
   
  onEventResize = (data) => {
    const { start, end } = data;
    alert("asdasd");
    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  handleSelectEvent = (data) => {
    alert("seleccionar evento");
  };

  selectSlot = (data) => {
    this.slotData = data;
    this.setState({ showHidden: true });
  };

  closeModal = (data) => {
    this.setState({ showHidden: false });
  };

  render() {
    return (
      <div>
        <Spacing />
        <div style={{ display: "none" }}>
          <Spacing />

          {this.state.showHidden && <JSModal onCloseModal={this.closeModal} slotData={this.slotData} />}
        </div>
        <div className="js-calendar position">
          <DnDCalendar
            defaultDate={moment().toDate()}
            defaultView="month"
            events={this.state.events}
            localizer={localizer}
            onSelectEvent={this.handleSelectEvent}
            onSelectSlot={this.selectSlot}
            selectable
            style={{ height: "730px" }}
          />
        </div>
      </div>
    );
  }
}
export default JSCalendar;

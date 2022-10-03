import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Redirect } from "react-router-dom";
import axios from "axios";

import JSModal from "../Coworking/JSModal";
import Spacing from "../Spacing";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "../../styles/calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const localizer = momentLocalizer(moment);
const events = [];
const DnDCalendar = withDragAndDrop(Calendar);

class JSCalendar extends React.Component {
  state = {
    events,
    showHidden: false,
  };

  // onEventResize = (data) => {
  //   const { start, end } = data;
  //   this.setState((state) => {
  //     state.events[0].start = start;
  //     state.events[0].end = end;
  //     return { events: state.events };
  //   });
  // };
  componentDidMount() {
    const idUser = cookies.get("id");
    let baseUrl = "/appointments/" + idUser;
    axios
      .get(baseUrl)
      .then((result) => {
        let events = this.state.events;

        result.data.forEach((element) => {

          let dateFrom = moment(element.dateFrom).add(3, "hour");
          let dateTo = moment(element.dateTo).add(3, "hour");
          let dateFromStr = dateFrom.format("DD/MM/YYYY");
          let dateToStr = dateTo.format("DD/MM/YYYY");

          let title = dateFromStr + " -> " + dateToStr;

          events.push({
            start: element.dateFrom,
            end: element.dateTo,
            title: title,
            id: element._id,
          });
          console.log(element);
        });
        this.setState({ events });
      })
      .catch((error) => {
        error = new Error();
      });
  }

  onEventDrop = (data) => {
    console.log(data);
  };

  handleSelectEvent = (data) => {
    alert("seleccionar evento");
  };

  selectSlot = (data) => {
    if (cookies && cookies.get("email")) {
      this.slotData = data;
      this.setState({ showHidden: true });
    } else {
      window.location.href = "/login";
    }
  };

  closeModal = (data) => {
    this.setState({ showHidden: false });
  };

  logOut = () => {
    cookies.remove("email", { path: "/" });
    cookies.remove("token", { path: "/" });
    window.location.href = "/login";
  };

  saveSuccess = (result) => {
    this.closeModal();

    let events = this.state.events;

    debugger;

    let dateFrom = moment(result.data.result.dateFrom).add(3, "hour");
    let dateTo = moment(result.data.result.dateTo).add(3, "hour");

    let dateFromStr = dateFrom.format("DD/MM/YYYY");
    let dateToStr = dateTo.format("DD/MM/YYYY");

    let title = dateFromStr + " -> " + dateToStr;

    //Eleccion desde que hora
    let halfFrom = result.data.result.halfFrom;

    if (halfFrom == 1) {
      dateFrom = dateFrom.set({ hour: 0, minute: 0 });
    } else {
      dateFrom = dateFrom.set({ hour: 12, minute: 0 });
    }

    //Eleccion hasta que hora
    debugger;
    let halfTo = result.data.result.halfTo;

    if (halfTo == 1) {
      dateTo = dateTo.set({ hour: 12, minute: 0 });
    } else {
      dateTo = dateTo.set({ hour: 23, minute: 59 });
    }

    events.push({
      start: dateFrom,
      end: dateTo,
      title: title,
      id: result.data.result._id,
    });

    this.setState({ events });

    console.info(JSON.stringify(result));
  };

  render() {
    return (
      <div>
        <Spacing />
        <div style={{ display: "none" }}>
          <Spacing />

          {this.state.showHidden && (
            <JSModal
              onCloseModal={this.closeModal}
              slotData={this.slotData}
              saveSuccess={this.saveSuccess}
            />
          )}
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

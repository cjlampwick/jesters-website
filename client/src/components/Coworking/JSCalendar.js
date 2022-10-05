import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Redirect } from "react-router-dom";
import axios from "axios";

import JSModal from "./JSModalReserve";
import JSModalEvents from "./JSModalEvents";
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
    showHiddenEvent: false,
  };

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

  selectSlot = (data) => {
    if (cookies && cookies.get("email")) {
      this.slotData = data;
      this.setState({ showHidden: true });
    } else {
      window.location.href = "/login";
    }
  };

  //Modal para reservar
  closeModal = (data) => {
    this.setState({ showHidden: false });
  };

  //Modal para eliminar evento
  closeModalEvent = (data) => {
    this.setState({ showHiddenEvent: false });
  };

  deleteEvent = (data) => {};
  logOut = () => {
    cookies.remove("email", { path: "/" });
    cookies.remove("token", { path: "/" });
    window.location.href = "/login";
  };

  saveSuccess = (result) => {
    this.closeModal();

    let events = this.state.events;

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
  // deleteSuccess = (result) => {
  //   this.closeModalEvent();

  //   // let events = this.state.events.filter((event) => event.id != this.eventData.id);
  //   // console.log(events);

  //   // this.setState({events: events}) 
  // };

  handleSelectEvent = (data) => {
    if (cookies && cookies.get("email")) {
      this.eventData = data;
      this.setState({ showHiddenEvent: true });
    }
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
          {this.state.showHiddenEvent && (
            <JSModalEvents
              onCloseModalEvent={this.closeModalEvent}
              eventData={this.eventData}
              deleteSuccess={this.deleteSuccess}
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

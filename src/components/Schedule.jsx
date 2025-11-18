import React from "react";

const Schedule = () => {
  return (
    <div className="about-card centered-flex">
      <div className="day">
        <span className="date">Saturday 20</span>
        <div className="event">
          <div className="time">
            <span>08:00am</span>
            <span>08:20am</span>
          </div>
          <div className="dot blue"></div>
          <div className="details">
            <span className="title">Registartion Starts</span>
            <span className="desc">Theme & Judging Criteria Shown!.</span>
          </div>
        </div>
        <div className="event">
          <div className="time">
            <span>09:00am</span>
            <span>06:00pm</span>
          </div>
          <div className="dot red"></div>
          <div className="details">
            <span className="title">Coding session</span>
            <span className="desc">Development Starts for everyone!</span>
          </div>
        </div>
        <div className="event">
          <div className="time">
            <span>06:00pm</span>
            <span>06:30pm</span>
          </div>
          <div className="dot indigo"></div>
          <div className="details">
            <span className="title">Project Submission</span>
            <span className="desc">The First Day Of Hackathon Ends!</span>
          </div>
        </div>
      </div>

      <div className="day">
        <span className="date">Sunday 21</span>
        <div className="event">
          <div className="time">
            <span>09:00am</span>
            <span>12:30am</span>
          </div>
          <div className="dot blue"></div>
          <div className="details">
            <span className="title">Round 1 Judging</span>
            <span className="desc">Projects are rated by the judges!</span>
          </div>
        </div>
        <div className="event">
          <div className="time">
            <span>12:15pm</span>
            <span>03:30pm</span>
          </div>
          <div className="dot red"></div>
          <div className="details">
            <span className="title">Final Development Round</span>
            <span className="desc">Polish the project before finals!</span>
          </div>
        </div>
        <div className="event">
          <div className="time">
            <span>12:15pm</span>
            <span>03:30pm</span>
          </div>
          <div className="dot yellow"></div>
          <div className="details">
            <span className="title">Event Conclusion</span>
            <span className="desc">Prize Distribuition & more.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

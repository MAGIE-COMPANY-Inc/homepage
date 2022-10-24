import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import { events } from './eventData';

const Calender = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Calender</h1>
      <h1 className="p__opensans">※ open箇所の@は出勤スタッフ名です</h1>
    </div>

    <div className="app__specialMenu-menu">
      <FullCalendar
        contentHeight="auto"
        themeSystem="slate"
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale="ja"
        events={events}
      />
    </div>
  </div>
);

export default Calender;

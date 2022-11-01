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
    <button type="button" className="custom__button">
      <a
        href="https://hackbar.jp/blog/hack-bar%e9%b3%a5%e5%8f%96%e9%96%8b%e5%82%ac%e6%b1%ba%e5%ae%9a%e3%81%9d%e3%81%ae%e6%ad%a3%e4%bd%93%e3%81%a8%e3%81%af/"
        style={{ color: 'black' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        ※Hack.BAR in 鳥取についてはこちら！
      </a>
    </button>
  </div>
);

export default Calender;

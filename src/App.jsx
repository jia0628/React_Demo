// 초기 App.jsx
import './App.css'
import {BrowserRouter, Link} from "react-router-dom";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
import UserPicker from "./component/Users/UserPicker.jsx";

// index.html 이 처음 요청으로 반환되는 페이지
//       html 은 더 이상 만들지 않습니다.  :  SPA
// index.html -> main.jsx(index.js) 실행
function App() {

  return (
      <BrowserRouter>
        <div className={App}>
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/bookings" className="btn btn-header">
                    <FaCalendarAlt/>
                    <span>예약 하기</span>
                  </Link>
                </li>
                <li>
                  <Link to="/bookables" className="btn btn-header">
                    <FaDoorOpen/>
                    <span>예약 자원</span>
                  </Link>
                </li>
                <li>
                  <Link to="/users" className="btn btn-header">
                    <FaUsers/>
                    <span>사용자</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <UserPicker/>
          </header>
        </div>

      </BrowserRouter>
  )
}

export default App

// 초기 App.jsx
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
import UserPicker from "./component/Users/UserPicker.jsx";
import BookingsPage from "./component/Bookings/BookingsPage.jsx";
import BookablePage from "./component/Bookables/BookablePage.jsx";
import UsersPage from "./component/Users/UsersPage.jsx";

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
          <Routes>
            <Route path="/bookings" element={<BookingsPage/>}/>
            <Route path="/bookables" element={<BookablePage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
          </Routes>
        </div>

      </BrowserRouter>
      /* 사용자가 선택한 메뉴 항목에 따라 화면에 보이는 UI 를 결정합니다. */

  )
}

export default App

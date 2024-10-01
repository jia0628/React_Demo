// 초기 App.jsx
import './App.css'
import Garage, {Car} from "./basic/List.jsx";
import {GarageKorean} from "./basic/Objects.jsx";  // ★ 잘 확인 !! default 로 내보내기하면 {}가 없음 (List.jsx 참고)

// index.html 이 처음 요청으로 반환되는 페이지
//       html 은 더 이상 만들지 않습니다.  :  SPA
// index.html -> main.jsx(index.js) 실행
function App() {

  return (
    <>
        {/* brand 라는 임의 프로퍼티 설정 */}
        <Car brand="소나타"/>
        <Garage/>
        <GarageKorean/>
    </>
  )
}

export default App

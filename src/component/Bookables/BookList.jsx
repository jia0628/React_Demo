import { bookables, days, sessions } from "../../static.json"
import {useReducer} from "react";
import {FaArrowRight} from "react-icons/fa";
import reducer from "./reducer.js";

function BookList() {
    
    const initState = {
        group: "Rooms",
        bookableIndex: 0,
        hasDetails: false
    }
    
    // state 는 상태값들을 모아놓은 오브젝트
    const [state, dispatch] = useReducer(reducer, initState)
    // dispatch 는 현재상태값 -> 새로운 상태값을 만든다. 이벤트 핸들러에서 실행된다.
    // 위의 2개는 useReducer 함수의 리턴값입니다.
    // useReducer 를 생성하는 인자는 dispatch 에서 전달한 액션(type, payload)을 전달합니다.
    // 두번째 인자 initState 는 상태값(오브젝트)의 초기 상태
    // 세번째 인자는 없지만, initState 초기값을 받아 처음한번 실행하는 초기화 함수

    const {group, bookableIndex, hasDetails} = state
    
    const bookableGroup = bookables.filter(b => (b.group === group))
    const groups = [...new Set(bookables.map(b => b.group))]  // 현재 상황 ["Rooms", "Kit"

    function nextBookableIndex() {
        dispatch({
            type: "NEXT_BOOKABLE",
            payload: bookableGroup.length
        })
    }

    function changeGroup(e) {
        dispatch({
            type: "SET_GROUP",
            payload: e.target.value
        })
    }

    function changeBookableIndex(selectIndex) {
        dispatch({
            type: "SET_BOOKABLE",
            payload: selectIndex
        })
    }

    function toggleDetails() {
        dispatch({
            type: "TOGGLE_HAS_DETAILS"
        })
    }

    const bookable = bookableGroup[bookableIndex]

    return(
        <>
            <div>
                <select value={group} onChange={changeGroup}>
                    {groups.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
                <ul className="items-list-nav">
                    {bookableGroup.map((b, i) => (
                        <li key={b.id} className={i === bookableIndex ? "selected" : null}>
                            <button className="btn" onClick={() => {changeBookableIndex(i)}}>
                                {b.title}
                            </button>
                        </li>
                    ))}
                </ul>
                <p>
                    <button className="btn" onClick={nextBookableIndex}>
                        <FaArrowRight/><span>Next</span>
                    </button>
                </p>
            </div>

            {/* 새로운 UI 추가 : 상세 내용 */}
            <div className="book-details">
                <div className="item">
                    <div className="item-header">
                        <h2>{bookable.title}</h2>
                        <span className="controls">
                            <label>
                                <input type="checkbox" checked={hasDetails} onChange={() => toggleDetails(has => !has)}/>
                            </label>
                        </span>
                    </div>
                    <p>{bookable.notes}</p>
                    {hasDetails && (
                        <div className="item-details">
                            <h3>사용가능한 요일과 세션</h3>
                            <div className="bookable-availability">
                                <ul>
                                    {bookable.days.sort().map(d => <li key={d}>{days[d]}</li>)}
                                </ul>
                                <ul>
                                    {bookable.sessions.sort().map(s => <li key={s}>{sessions[s]}</li>)}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>


    )
}

export default BookList;
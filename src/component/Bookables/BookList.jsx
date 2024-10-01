import { bookables } from "../../static.json"
import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";

function BookList() {
    // const group = "Rooms"
    // let bookableIndex = 0
    const [group, setGroup] = useState("Rooms")
    const bookableGroup = bookables.filter(b => (b.group === group))

    // ★ bookableIndex 는 상태값 관리를 해야할 변수
    // ★ setBookableIndex 는 useState 가 리턴해주는 메소드. (== 값 변경 메소드)
    const [bookableIndex, setBookableIndex] = useState(0)  // ★ 이부분이 핵심, useState 는 2개의 리턴값을 가짐(bookableIndex, setBookableIndex)
    const groups = ["Rooms", "Kit"]
    // function changeBookable(selectIndex) {
    //     bookableIndex = selectIndex
    // }

    function nextBookableIndex() {
        // 상태값 변경 메소드의 인자 i는 bookableIndex 값
        setBookableIndex((i) => (i+1) % bookableGroup.length)
    }

    return(
        <>
            <select value={group} onChange={(e) => setGroup(e.target.value)}>
                {groups.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            <ul className="items-list-nav">
                {bookableGroup.map((b, i) => (
                    <li key={b.id} className={i === bookableIndex? "selected":null}>
                        <button className="btn" onClick={() => {setBookableIndex(i)}}>
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
        </>
    )
}

export default BookList;
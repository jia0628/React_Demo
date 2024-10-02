import { users } from "../../static.json"
//      -> 서버에서 가져온 것이 아닌 자바스크립트 json 데이터입니다.
import {useState} from "react";

export default function UserList() {
    // const name = "Mark"
    // const UsersGroup = users.filter(b => (b.name === name))
    const [usersIndex, setUsersIndex] = useState(2)
    const user = users[usersIndex]

    return(
        <>
            <ul className="items-list-nav">
                {users.map((u, i) => (
                    <li key={u.id} className={i === usersIndex ? "selected" : null}>
                        <button className="btn" onClick={() => setUsersIndex(i)}>
                            {u.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="item user">
                <div className="item-header">
                    <h2>{user.name}</h2>
                </div>
                <div className="user-details">
                    <h3>{user.title}</h3>
                    <p>{user.notes}</p>
                </div>
            </div>
        </>
    )
}
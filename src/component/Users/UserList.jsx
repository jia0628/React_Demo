
//      -> 서버에서 가져온 것이 아닌 자바스크립트 json 데이터입니다.
import {useEffect, useState} from "react";
import PageSpinner from "./PageSpinner.jsx";

export default function UserList() {
    const [users, setUsers] = useState(null)
    // fetch 중 오류 또는 로딩 중에 대한 상태값
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [usersIndex, setUsersIndex] = useState(0)
    const user = users?.[usersIndex]    // 자바의 Optional 역할 연산자 ?.
    // users 가 null 이 아닐 때만 실행합니다.
    
    // api 서비스 제공하는 서버로부터 데이터 가져오기
    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:3002/users")
            .then(response => {return response.json()})
            .then(data => {
                console.log("data : ", data)
                setUsers(data)
                setLoading(false)})
            .catch(error => setError(error.message))
    }, []);
    // [] 의존값. 없으면 컴포넌트 실행될 때 처음 1번만 useEffect 동작
    // [data] 의존값이 있으면 data 값이 변경될 때마다 useEffect 실행
    // 상태값 변수 => error
    if(error) {
        return <div>오류: {error}</div>
    }
    if(loading) {   // 스피너 컴포넌트 사용할 수 있습니다.
        return <PageSpinner/>
    }

    return(
        <>
            {users && (<ul className=" users items-list-nav">
                {users.map((u, i) => (
                    <li key={u.id} className={i === usersIndex ? "selected" : null}>
                        <button className="btn" onClick={() => setUsersIndex(i)}>
                            {u.name}
                        </button>
                    </li>
                ))}
            </ul>)}
            {users && (<div className="item user">
                <div className="item-header">
                    <h2>{user.name}</h2>
                </div>
                <div className="user-details">
                    <h3>{user.title}</h3>
                    <p>{user.notes}</p>
                </div>
            </div>)}
        </>
    )
}
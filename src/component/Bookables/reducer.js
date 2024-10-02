// state 는 상태값 오브젝트, action 오브젝트(type, payload)는 무엇을 어떻게 할것인가를 전달
//          state 인자는 현재상태값, 리턴은 새로운 상태값
export default function reducer(state, action){
    switch (action.type){
        case "SET_GROUP":
            return{
                ...state,               /* 원래의 기존 state 값을 오브젝트 복사 */
                group:action.payload,   /* 그룹을 payload 로 값으로 변경 */
                bookableIndex: 0
            }

        case "SET_BOOKABLE":
            return{
                ...state,
                bookableIndex: action.payload    /* 선택 인덱스를 payload 값으로 변경 */
            }

        case "TOGGLE_HAS_DETAILS":  /* 체크 박스 */
            return{
                ...state,
                hasDetails: !state.hasDetails    /* hasDetails 는 not 연산 */
            }

        case "NEXT_BOOKABLE":       /* Next 버튼 */
        {
            // const count = state.bookables.filter(
            // b=> b.group === state.group).length;
            return{
                ...state,
                bookableIndex: (state.bookableIndex +1) % action.payload
            };
        }

        default:    //꼭 필요함.
            return state;

    }
}
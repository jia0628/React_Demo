import BookablesList from "./BookablesList.jsx";

function BookablePage() {
    return(
        <main className="bookables-page">
            {/*<h4>예약 가능 현황</h4>*/}
            <BookablesList/>
        </main>
    )
}
export default BookablePage;
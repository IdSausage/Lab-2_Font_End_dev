import NavBar from "./NavBar";
import Profile from "./Profile";
import "./Home.css"

function Home(){
    return(
        <div className = "layout">
            <Profile />
            <NavBar />
        </div>
    )
}
export default Home
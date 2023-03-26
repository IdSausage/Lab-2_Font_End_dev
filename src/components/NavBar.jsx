import "./NavBar.css"

function NavBar()
{
    return(
        <div>
            <h1 className="task">Tasks</h1>
            <nav>
                <li>Incoming</li>
                <li>Today</li>
                <li>Calendar</li>
            </nav>
        </div>
    )
}
export default NavBar
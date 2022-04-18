import React from "react";

const Header = () => {
    return (
        <header className = "headerContent">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" width="60px"></img>
            </div>
            <div>
                <ul className="headerList">
                    <li className="headerItem">Home</li>
                    <li className="headerItem">Pictures</li>
                    <li className="headerItem">Reviews</li>
                    <li className="headerItem">Contacts</li>
                </ul>
            </div>
        </header>
    )
}

export default Header
import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div
                className=" grid min-h-[50px] mx-2 pl-16 border p-2 mx-auto bg-gray-200">
                <div className="flex items-center ">
                    <NavLink to = "/"
                             className="header-menu bg-transparent hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-2 px-4 border border-pink-600 hover:border-transparent rounded mr-2 ">
                        Все котики
                    </NavLink>
                    <NavLink to ="/favoritecats"
                             className="header-menu bg-transparent hover:bg-pink-600 text-pink-600 font-semibold hover:text-white py-2 px-4 border border-pink-600 hover:border-transparent rounded mr-2 ">
                        Любимые котики
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Header;
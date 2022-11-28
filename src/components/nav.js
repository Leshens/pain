import React from 'react';
import navData from "../data/navBar.json";
export default function Nav() {
    return (
        <ul>
            {
                navData.map((navBar, index) => {
                    return <li key={index}><a href={navBar.href}>{navBar.name}</a></li>
                })
            }
        </ul>
    );

}
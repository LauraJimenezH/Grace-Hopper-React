import React, { Component } from 'react';
import imgHopper from './images/grace-hopper.jpg';
import './css/resume.css';

const Resume = (props) => {
    return (
        <aside className = "summary">
        <table className = "summary-table">
            <thead>
                <tr>
                    <th colspan="2">Grace Murray Hopper</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2">
                        <img src={imgHopper} alt="Grace Hopper"></img>
                        <p>Rear Admiral Grace M. Hopper, 1984</p>
                    </td>
                </tr>
                <tr>
                    <th>Nickname</th>
                    <td>"Amazing Grace"</td>
                </tr>
                <tr>
                    <th>Born</th>
                    <td>December 9, 1906 <br></br>New York City, New York, U.S.</td>
                </tr>
                <tr>
                    <th>Died</th>
                    <td>January 1, 1992 (aged 85) <br></br>Arlington, Virginia, U.S.</td>
                </tr>
                <tr>
                    <th>Allegiance</th>
                    <td><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" alt="EEUU"></img> United States of America</td>
                </tr>
                <tr>
                    <th>Service/branch</th>
                    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Flag_of_the_United_States_Navy.svg/23px-Flag_of_the_United_States_Navy.svg.png" alt="United States Navy"></img>United States Navy</td>
                </tr>
            </tbody>
        </table>
    </aside>
    );
}
export default Resume;
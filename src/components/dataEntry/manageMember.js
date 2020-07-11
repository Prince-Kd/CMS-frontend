import React from 'react';
import {Link} from 'react-router-dom';
import "../../styles/Ss.css"

export default function Manage() {
    return(
        <div>
            <div>
                <center>
                    <form method="POST" action="/api/search_member">
                        <div style={{display: "flex", marginTop: 10, justifyContent: "center"}}>
                            <input type="search" name="id" id="name" placeholder="Enter ID"/>&emsp;
                            <input type="submit" value="Search" class="btn2"/>
                        </div>
                    </form>
                </center> 
            </div>
        </div>
    )
}
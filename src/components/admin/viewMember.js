import React from 'react';

const ViewMember = () => {
    return (
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
    )
}

export default ViewMember;
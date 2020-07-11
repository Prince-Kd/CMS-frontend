import React from 'react';
import '../../styles/Ss.css';

export default function AddMember() {
    return(
        <div>
            <p></p>
            <div class="mregister">
            <center><h2>Membership Form</h2><hr/></center>
                <form method="POST" id="mregister">
                    <div style={{display: "flex", textAlign: "center"}}> 
                        <center></center>ID:<input type="text" name="ID" id="number" placeholder="ID"/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Surname: <input type="text" name="Surname" id="name" placeholder="Surname"/>&emsp;
                        Other Names: <input type="text" name="Othername" id="long" placeholder="Other names"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Date of Birth: <input type="date" name="DOB" id="number"/> &emsp;
                        Gender: &emsp;
                        Male<input type="radio" name="Gender" value="Male"  id="rbutton"/>&emsp;
                        Female<input type="radio" name="Gender" value="Female"  id="rbutton"/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Postal Address: <input type="text" name="Postal_address" id="pa" placeholder="Postal Address"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        House Number: <input type="text" name="HouseNumber" id="number" placeholder="House number"/>&emsp;&emsp;
                        Residence: <input type="text" name="Residence" id="long" placeholder="Residence"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        HomeTown: <input type="text" name="Hometown" id="name" placeholder="Hometown"/>&emsp;&emsp;
                        Telephone Number(s):<input type="text" name="Telephone1" id="number" placeholder="Telephone number(1)"/>&emsp;
                        <input type="text" name="Telephone2" id="number" placeholder="Telephone number(2)"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Profession: <input type="text" name="Profession" id="name" placeholder="Profession"/>&emsp;&emsp;
                        Previous GEC Congregation: <input type="text" name="Previous_Congregation" placeholder="Previous GES" id="name"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Former Church If Different from GEC: <input type="text" name="Former_Church" placeholder="Previous Church" id="long"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Are you Baptized?: Yes<input type="radio" name="Baptized" value="Yes" id="rbutton" />&emsp;
                        No<input type="radio" name="Baptized" value="No" id="rbutton"/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        Are you a Communicant?: Yes<input type="radio" name="Communicant" value="Yes" id="rbutton"/>&emsp;
                        No<input type="radio" name="Communicant" value="No" id="rbutton"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Date of Baptism: <input type="date" name="Baptism_Date" id="number"/>&emsp;
                        Place: <input type="text" name="Baptism_Place" id="name"/>&emsp;
                        Pastor: <input type="text" name="Baptism_Pastor" id="name"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Confirmation Date: <input type="date" name="Confirmation_Date" id="number"/>&emsp;
                        Place: <input type="text" name="Confirmation_Place" id="name"/>&emsp;
                        Pastor: <input type="text" name="Confirmation_Pastor" id="name"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Marital Status: &emsp;Married<input type="radio" name="Marital_Status" value="Married"  id="rbutton"/>&emsp;
                        Single<input type="radio" name="Marital_Status" value="Single" id="rbutton"/>&emsp;
                        Widowed<input type="radio" name="Marital_Status" value="Windowed" id="rbutton"/>&emsp;<br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Type of Marriage: <input type="text" name="Marriage_Type" id="long"/><br/><br/>                     
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Name of Spouse: <input type="text" name="Spouse_Name" id="name"/>&emsp;
                        Name of Spouse's Church: <input type="text" name="Spouse_Church" id="name"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Name of Father: <input type="text" name="Father" id="name"/>&emsp;
                        Name of Mother: <input type="text" name="Mother" id="name"/><br/><br/><br/>
                    </div><br/>
                    <center><h3>Children Under 18</h3><br/><hr/><br/></center>
                    <h4>First Child</h4>
                    <div style={{display: "flex"}}>
                        Name: <input type="text" name="children" id="name"/>&emsp;
                        Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                        Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                        &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                    </div><br/>
                    <h4>Second Child</h4>
                    <div style={{display: "flex"}}>
                        Name: <input type="text" name="children" id="name"/>&emsp;
                        Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                        Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                        &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                    </div><br/>
                    <h4>Third Child</h4>
                    <div style={{display: "flex"}}>
                        Name: <input type="text" name="children" id="name"/>&emsp;
                        Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                        Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                        &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                    </div><br/>
                    <h4>Fourth Child</h4>
                    <div style={{display: "flex"}}>
                        Name: <input type="text" name="children" id="name"/>&emsp;
                        Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                        Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>&emsp;
                        Female<input type="radio" name="children" value="Female"  id="rbutton"/><br/><br/>
                    </div><br/>
                    <h4>Fifth Child</h4>
                    <div style={{display: "flex"}}>
                        Name: <input type="text" name="children" id="name"/>&emsp;
                        Date Of Birth: <input type="date" name="children" id="number"/>&emsp;
                        Gender:&emsp;Male<input type="radio" name="children" value="Male" id="rbutton"/>
                        &emsp;Female<input type="radio" name="children" value="Female" id="rbutton"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Ministry Gift or Interest: <input type="text" name="Gift" id="long"/><br/><br/>
                    </div><br/>
                    <div style={{display: "flex"}}>
                        Next of Kin: <input type="type" name="Next_of_Kin.name" id="long"/>&emsp;&emsp;
                        Relation: <input type="type" name="Next_of_Kin.relation" id="name"/><br/><br/>
                    </div><br/>
                    <center><input class="btn" value="Submit"/></center>
                </form>
            </div>
        </div>
    )  
}
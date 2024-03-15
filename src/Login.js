import React from 'react';
import './Login.css'

function Login() {


    function inp1() {
        const a = document.getElementById("Login-inp1").value;
        if (a.length <= 3) {
            document.getElementById("Login-inp1").style.border = "4px solid red";
            document.getElementById("Login-inpu11").innerHTML = "ENTER VALID NAME";
            document.getElementById("Login-inpu11").style.color = "red"
        }
        else {
            document.getElementById("Login-inp1").style.border = "3px solid green";
            document.getElementById("Login-inpu11").innerHTML = "OK VALID NAME";
            document.getElementById("Login-inpu11").style.color = "white"
        }

    }

    function inp2() {
        const b = document.getElementById("Login-inp2").value;
        const a = document.getElementById("Login-inp1").value;
        if (b.length >= 8) {
            document.getElementById("Login-inp2").style.border = "3px solid green";
            document.getElementById("Login-inpu22").innerHTML = "OK VALID PASSWORD";
            document.getElementById("Login-inpu22").style.color = "white"
        }
        if(a.length >= 3)
        {
            document.getElementById("Login-inp1").style.border = "";
            document.getElementById("Login-inpu11").innerHTML = "";

        }
    }

    function sub(){
        const b = document.getElementById("Login-inp2").value;
        const a = document.getElementById("Login-inp1").value;
        if(a==null || a=="" || a<=3 )
        {
            document.getElementById("Login-inp1").style.border = "4px solid red";
            document.getElementById("Login-inpu11").innerHTML = "ENTER VALID NAME";
            document.getElementById("Login-inpu11").style.color="red";

        }
        if(b==null || b=="" || b<=7){
            document.getElementById("Login-inp2").style.border = "3px solid red";
            document.getElementById("Login-inpu22").innerHTML = "MINIMUM 8 CHARCTERS";
            document.getElementById("Login-inpu22").style.color="red";

        }
        if(a!=="" && b!==""){
            document.write("welcome")
        }



    }




    return (
        <div className='container-fluid p-5' id='login-container'>
            <div className='row p-5 fw-bold'>
                <div className='col-lg-12 bg-primary text-light text-center w-50 m-auto p-5'>
                    <h4 className='fw-bolder'>LOGIN</h4>
                    <input type='text' placeholder='USERNAME' className='mt-4 ps-4 pt-2 pb-2 pe-4 fw-bold' onBlur={inp1} id='Login-inp1' /><br />
                    <h6 id='Login-inpu11' className='mt-1'></h6>
                    <input type='password' placeholder='PASSWORD' className='mt-4 ps-4 pt-2 pb-2 pe-4 fw-bold' id='Login-inp2'  onKeyDown={inp2}/><br />
                    <h6 id='Login-inpu22' className='mt-1'></h6>
                    <button className='mt-4  mb-4  ps-4 pt-2 pb-2 pe-4 fw-bold' id='Login-submit' onClick={sub}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Login
function loginbutton(regusr,regpwd)
{
    let username=document.getElementById("usr").value;
    let password=document.getElementById("pwd").value;
    // let loginbtn=document.getElementById("lg");
    let regusr=document.getElementById("regusr").value;
    let regpwd=document.getElementById("rgpw").value;
    if((username==regusr)&&(password==regpwd))
    {
        alert("Login Successfully");
    }
    else{
        alert("Login Failed");
    }
}


// function check()
// {
//     let regusername=document.getElementById("regusr");
//     let regpassword=document.getElementById("rgpw");
// }
function register()
{
    let regusername=document.getElementById("regusr").value;
    let regpass =document.getElementById("rgpw").value;
    let regconfirm=document.getElementById("rgpwd").value;
    if(regpass==regconfirm){
    alert("Registered");
    }
    else{
        alert("Sorry! Password Entered is Not Same");
    }
}
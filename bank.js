//create account - Register a new account

function register(){
    // 1. fetch the values from the html
    acno=reg_acno.value;//12345
    uname=reg_name.value;//Anu
    pswd=reg_pswd.value;//12345
    balance=2000;

    //1. create acnoDetails object

    acnoDetails={
        
        acno,
        uname,
        pswd,
        balance
    }

    //3. Check if acno is already present in the localstorage
    if(acno in localStorage){
        alert('acno already present');
    }
    else{
        localStorage.setItem(acno,JSON.stringify(acnoDetails));//key:value - 123 : {ac 123,name ..,}
        alert('Register successfully');
        window.location.href="index.html";//button type="button"
    }
}









//login

function login(){
    //1. fetch the details
    acno=login_acno.value;//12345
    pswd=login_pswd.value;//12345

    //2. check if the account number is present in localStorage
    if(acno in localStorage){
        acnoDetails=JSON.parse(localStorage.getItem(acno));//12345
        // console.log(acnoDetails ["pswd"]);

        //compare
        if(pswd==acnoDetails.pswd){
            alert('Login successful');
            window.location.href='home.html';

        }
        else{
            alert('Incorrect password');
        }
    
    }
    else{
        alert('Invalid Account number');    
    }

    
}



























// //create account - Register a new account

// function register(){
//     // 1. fetch the values from the html page
//     acno=reg_acno.value;
//     uname=reg_name.value;
//     pswd=reg_pswd.value;
//     balance=2000;

//     //1. create acnoDetails object

//     acnoDetails={
        
//         acno,
//         uname,
//         pswd,
//         balance
//     }

//     //3. Check if acno is already present in the localstorage
//     if(acno in localStorage){
//         alert('acno already present');
//     }
//     else{
//         localStorage.setItem(acno,JSON.stringify(acnoDetails));//key:value - 123 : {ac 123,name ..,}
//         alert('Register successfully');
//         window.location.href="index.html";//button type="button"
//     }
// }



// //login

// function login(){
//     //1. fetch the details
//     acno=login_acno.value;
//     pswd=login_pswd.value;

//     //2. check if the account number is present in localStorage
//     if(acno in localStorage){
//         acnoDetails=JSON.parse(localStorage.getItem(acno));
//         console.log(acnoDetails ["pswd"]);

//         //compare
//         if(pswd==acnoDetails.pswd){
//             alert('Login successful');
//             window.location.href='home.html';

//         }
//         else{
//             alert('Incorrect password');
//         }
    
//     }
//     else{
//         alert('Invalid Account number');    
//     }

    
// }
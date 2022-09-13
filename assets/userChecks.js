let AuthUsers = new AuthUser();
if(AuthUsers.checkActiveUser()){
    document.getElementById("fullname").innerHTML= AuthUsers.getUserData('fullName');
    document.getElementById("stack").innerHTML= AuthUsers.getUserData('stack');
    
}else{
    setTimeout(()=>{
        window.location.href='../index.html';
    }, 200);
}

function logout(){
    if(confirm("Are you sure you want to log out?")){
        if(AuthUsers.logout()===true){
            setTimeout(()=>{
                window.location.href='../index.html';
            }, 100);
            alert('Successfully Logout');
        }
    }
}
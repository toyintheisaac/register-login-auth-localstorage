let AuthUsers = new AuthUser();
if(AuthUsers.checkActiveUser()){

    function setInnerHtmlData(elementID, data){
       return document.getElementById(elementID).innerHTML= AuthUsers.getUserData(data);
    }
    function setValueData(elementID, data){
        return document.getElementById(elementID).value= AuthUsers.getUserData(data);
    }
}else{
    setTimeout(()=>{
        window.location.href='../index.html';
    }, 10);
}

function logout(){
    if(confirm("Are you sure you want to log out?")){
        if(AuthUsers.logout()===true){
            setTimeout(()=>{
                window.location.href='../index.html';
            }, 10);
            alert('Successfully Logout');
        }
    }
}

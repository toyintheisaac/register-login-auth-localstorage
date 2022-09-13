class AuthUser{
    constructor(id){
        this.id = id;
    }

    checkActiveUser(){
        let activeUser = localStorage.getItem('activeUserId') || '';
        if(activeUser==undefined || activeUser==''){
            localStorage.removeItem('activeUserId');
            alert("Error on user");
            return false;
        }else{
            this.id==activeUser
            return true;
        }
    }

    getUserData(data){
        let activeUser = localStorage.getItem('activeUserId') || "";
    }

}
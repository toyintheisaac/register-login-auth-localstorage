class AuthUser{
    constructor(id){
        this.id =id;
    }

    checkActiveUser(){
        let activeUser = localStorage.getItem('activeUserId');
        if(this.id==activeUser){ 
            return true;
        }else{
            localStorage.removeItem('activeUserId');
            alert("Error on user");
            return false;
        }
    }
    getUserData(data){
        
    }

}
class AuthUser{
    constructor(){
        this.id = '';
    }

    checkActiveUser(){
        let activeUser = localStorage.getItem('activeUserId') || '';
        if(activeUser==undefined || activeUser==''){
            localStorage.removeItem('activeUserId'); 
            return false;
        }else{
            this.id=activeUser
            return true;
        }
    }
    
    getUserData(data){
        let activeUser = JSON.parse(localStorage.getItem('allUsers')) || [];
        let teet = ''
        for(let i=0;i<activeUser.length;i++){
            if(activeUser[i]['id']==this.id){ 
                teet = activeUser[i][data];
                 break;
            }
        } 
        return teet;
    }
    logout(){
        localStorage.removeItem('activeUserId');
        return true; 
    }

}
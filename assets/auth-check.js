class AuthUser{
    constructor(){
        this.id = '';
    }

    checkActiveUser(){
        let activeUser = getUser('activeUserId'); 
        if(parseInt(activeUser)){
            this.id=activeUser
            return true;
        }else{
            localStorage.removeItem('activeUserId'); 
            return false;
        }
    }
    
    getUserData(data){
        let activeUser = getUser('allUsers');;
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
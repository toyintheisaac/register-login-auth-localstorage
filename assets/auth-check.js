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
        let activeUser = getUser('allUsers');
        let users = activeUser.find(user=>user.id ==this.id);
        return users[data];
    }
    logout(){
        if(localStorage.removeItem('activeUserId')) return true;
        return false;         
    }
    updateField(data, value){
        let allUsers = getUser('allUsers'); 
        let usersIndex = allUsers.findIndex(user=>user.id ==this.id);

         allUsers[usersIndex][data] = value;

            let newUsers = JSON.stringify(allUsers);
            localStorage.setItem('allUsers', newUsers);
            return true;
    }  



}
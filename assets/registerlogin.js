class RegisterLogin extends AuthUser{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    getMessage(){
        return this.message || '';
    }
    registerUser(fullName, stack){
        this.fullName   = fullName;
        this.stack      = stack;
        if(this.setRegister()===true){
            this.message = "Registration Successful";
            return true;
        }
        this.message = "Error Registering User";
        return false;
    }
    setRegister(){
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
        let totalUsers = this.getLastUserId();
        let newUser = {
            username: this.username,
            password: this.password,
            fullName: this.fullName,
            stack:    this.stack,
            id: totalUsers+1,
            idHash: totalUsers*10
        }
        allUsers.push(newUser);

        let newUsers = JSON.stringify(allUsers);
        localStorage.setItem('allUsers',newUsers);
            setActiveUser(totalUsers+1);
        displayMsg('feedback', `<span class='text-success'>User Registered Successfully</span>`);
        return true;
    }
    getLastUserId(){
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
            if(allUsers.length>0){
                return allUsers[allUsers.length-1]['id'];
            }else{
                return 0;
            }
    }
    setActiveUser(id){ 
        if(localStorage.setItem('activeUserId', id)){
            return true;
        }else{
            this.message = "Unable to set Active User";
            return false;
        }
    }
    /* 
    checkActiveUser(id, idHash){
        let activeUser = localStorage.getItem('activeUser');
    } */

}
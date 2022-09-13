class RegisterLogin{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    registerUser(fullName, stack){
        this.fullName   = fullName;
        this.stack      = stack; 
        return this.setRegister();
    }
    setRegister(){
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
        let totalUsers = this.getLastUserId();
        let newUser = {
            username: this.username,
            password: this.password,
            fullName: this.fullName,
            stack:    this.stack,
            id: totalUsers+1
        }
        allUsers.push(newUser);

        let newUsers = JSON.stringify(allUsers);
        localStorage.setItem('allUsers',newUsers); 
        displayMsg('feedback', `User ${totalUsers} Registered`);
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
    checkUsernameExist(){
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
            if(allUsers.length>0){
                alert("5");
            }else{ 
                return 0;
            }
    }

}
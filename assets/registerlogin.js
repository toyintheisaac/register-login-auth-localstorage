class RegisterLogin {
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
        return false;
    }
    setRegister(){
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];
        let totalUsers = this.getLastUserId();

        if(this.checkUsernameExist()==true){
            this.message = "Username Already Exist";
                displayMsg('feedback', `<span class='text-danger'>Username Already Exist</span>`);
            return false;
        }else{
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
            localStorage.setItem('allUsers', newUsers);
                this.setActiveUser(totalUsers+1); 
                if(this.userLogin()){
                    displayMsg('feedback', "<div class='alert alert-success py-1'>Registration Successful</div>");
                };
            return true;
        }
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
        let newUserCHeck = allUsers.map((element) => {
            if(element['username']==this.username ){ 
                   return element['id'];
                 //  break;
            }
        });
        let newArr = parseInt(newUserCHeck.join(' ').trim()); 
         if(newArr){
            return true;
         }else{ 
            return false
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
    userLoginCheck(){
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []; 
        let newUserCHeck = allUsers.map((element) => {
            if(element['username']==this.username && element['password']==this.password ){ 
                   return element['id'];
            }
        });
        let newArr = parseInt(newUserCHeck.join(' ').trim()); 
         if(newArr){
            this.setActiveUser(newArr);
            return true;
         }
         return false 
    }
    findUser(){
        let allUsers = JSON.parse(localStorage.getItem('allUsers')) || []; 
        let check = allUsers.some( (user=> user.username == this.username )
            && (pass => pass.password == this.password)
        );
        alert(check)
    }
    userLogin(){
        let authCheck = new AuthUser();
           if(authCheck.checkActiveUser()){
                setTimeout(()=>{
                    window.location.href='users/dashboard.html';
                }, 2000);
                return true;
            }else{
                this.message = "Wrong User";
                window.location.href= 'index.html';
                return false;
                
            }
    }
    
}
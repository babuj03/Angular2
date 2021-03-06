import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HTTPTestService} from './service/http-test.service'
import {User} from './user'

@Component({
  selector: 'add-user',
  templateUrl: '/adduser.html',
  providers: [HTTPTestService,HTTP_PROVIDERS]
})

export class AddUserComponent {
 userModel = new User();     
    constructor(private _httpService:HTTPTestService){        
    }
    
   getServerTime(){ 
      alert(JSON.stringify(this.userModel));	
			
    }
	
   addUser()  {
	userModel.setUsers(this.userModel.getMockUserList().concat(this.userModel));
   }   
}
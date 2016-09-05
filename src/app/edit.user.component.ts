import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HTTPTestService} from './service/http-test.service'
import {User} from './user'


@Component({
  selector: 'edit-user',
  templateUrl: '/edituser.html',
  providers: [HTTPTestService,HTTP_PROVIDERS]
})

export class EditUserComponent {
	  
    users = new Array<User>(); 
	    
    constructor(private _httpService:HTTPTestService){        
	this.users =   new User().getUsers();
     }
    
	
    getServerTime(){ 
    
		 
    }
}
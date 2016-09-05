import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HTTPTestService} from './service/http-test.service'
import {User} from './user'


@Component({
  selector: 'view-user',
  templateUrl: '/viewuser.html',
  providers: [HTTPTestService,HTTP_PROVIDERS]
})

export class ViewUserComponent {

    users = new Array<User>(); 
	    
    constructor(private _httpService:HTTPTestService){        
	this.users =   new User().getUsers();
	
    }
    
	
}
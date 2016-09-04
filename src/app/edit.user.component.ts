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
 public users = [
    { name: 'Ganesh', age: 21, address: 'world', phone:'99999999' },
    { name: 'Krish', age: 21, address: 'world', phone:'99999999' },
    { name: 'Sarvana', age: 21, address: 'world', phone:'99999999' }
  ];
      
     
    constructor(private _httpService:HTTPTestService){        
    }
    
	
    getServerTime(){ 
    
		 
    }
}
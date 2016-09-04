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
 public users = [
    { name: 'ganesh', age: 21, address: 'world', phone:'99999999' },
    { name: 'karthick', age: 22, address: 'world', phone:'99999999' },
    { name: 'krisg', age: 23, address: 'world', phone:'99999999' },
    { name: 'krisg1', age: 24, address: 'world', phone:'99999999' },
    { name: 'krisg2', age: 25, address: 'world', phone:'99999999' },
    { name: 'krisg3', age: 26, address: 'world', phone:'99999999' },
    { name: 'krisg4', age: 27, address: 'world', phone:'99999999' },
    { name: 'krisg5', age: 28, address: 'world', phone:'99999999' },
    { name: 'krisg6', age: 29, address: 'world', phone:'99999999' },
    { name: 'krisg7', age: 31, address: 'world', phone:'99999999' },
    { name: 'krisg8', age: 21, address: 'world', phone:'99999999' },
    { name: 'krisg8', age: 21, address: 'world', phone:'99999999' },
    { name: 'krisg9', age: 21, address: 'world', phone:'99999999' }
  ];
      
     
    constructor(private _httpService:HTTPTestService){        
    }
    
	
    getServerTime(){ 
    
		 
    }
}
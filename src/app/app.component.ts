import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {HTTPTestService} from './service/http-test.service'
import {User} from './user'
import {ViewUserComponent} from './view.user.component'
import {AddUserComponent} from './add.user.component'
import {EditUserComponent} from './edit.user.component'
import {MyFilterPipe} from './mypipe'
import {AgeFilter} from'./agePipe'

//MyFilterPipe

@Component({
  selector: 'my-app',
  templateUrl: 'test.html',
  providers: [HTTPTestService,HTTP_PROVIDERS],
  directives: [ViewUserComponent,AddUserComponent,EditUserComponent],
  pipes: [ MyFilterPipe,AgeFilter ]
})

export class AppComponent {
//userModel = new User();

     view = '';
      fname = '';	  
	   values = '';
	  postdata : string;
	  getdata ='testing';
    constructor(private _httpService:HTTPTestService){        
    }
    
 onKey(event: KeyboardEvent) {
    alert("input:"+(<HTMLInputElement>event.target).value);
  }
	
	saveUser()
	{  
		 this.view ='save';
	}
	
	viewUser()
	{  
		 this.view ='view';
	}
	
	editUser()
	{
	         this.view ='edit';
	}
    getServerTime(){ 
    
		 
    }
}
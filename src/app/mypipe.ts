import {Injectable, Pipe,PipeTransform} from '@angular/core';
import {User} from './user';
@Pipe({
    name: 'myfilter'
})

@Injectable()
export class MyFilterPipe implements PipeTransform {

	  txtFilter :string;
	  
	  transform(value:Array<User>, args:string){
	    if(typeof args == 'undefined' || args.length ==0 ){
	     return value;
	   }else if (value){	   
	    return value.filter(item => item.name.indexOf(args) !== -1);   
	   
	   }
	   }
	  
}
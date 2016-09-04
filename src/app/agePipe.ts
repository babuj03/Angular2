import {Injectable, Pipe, PipeTransform} from "@angular/core"
import {User} from './user';

@Pipe({
name :'ageFilter'
})

@Injectable()
export class AgeFilter implements PipeTransform {
	transform(value :Array<User>, args : number ){
				
		if( typeof args =='undefined' ){
			return value;
		} else if( value ){
		  return value.filter(item=> item.age >= args );
		}
   }

}

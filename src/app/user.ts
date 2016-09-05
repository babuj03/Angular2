export class User
{
   name:string ;
   age:number;
   address:string ;
   phone:string ;

   static userList1= new  Array();
	  
   constructor( name?: string, age?: number,  address?: string,  phone?: string){  
      this.name = name;
	  this.age = age;
	  this.address = address;
	  this.phone = phone;
	 
	}  
	
	getObject(){
	   return this;
	}
	
	
	public   getMockUserList()	{				
				if( User.userList1.length <=0){
					 User.userList1 = [
									 new User( 'Ganesh', 21, 'Lake View Appartment', '9790568700' ),
									 new User( 'Krish', 25, 'Lake View Appartment', '9790568700' ),
									 new User( 'Sharvan', 20, 'Lake View Appartment', '9790568700' ),
									 new User( 'Hari', 29, 'Lake View Appartment', '9790568700' )
						   ];
				}
	   return User.userList1;
	}
	
	public  getUsers(){
	if( User.userList1.length <=0){
          User.userList1 = new User().getMockUserList();
	 }
	 return  User.userList1;
	}
	
	public  setUsers(userList:Array<User>){
	   User.userList1=userList;
	}
}
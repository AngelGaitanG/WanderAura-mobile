export interface IUser {
    
	name: string;
	email: string;
	password: string;
    
}

export interface UserResponse {
id: string;
  name: string;
  email: string;
  perfilPhoto: string | null;
}
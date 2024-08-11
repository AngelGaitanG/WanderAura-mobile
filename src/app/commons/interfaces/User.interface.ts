export interface IUser {
    
	name: string;
	email: string;
	password: string;
    
}

export interface RegisterUserResponse {
id: string;
  name: string;
  email: string;
  perfilPhoto: string | null;
}

export interface LoginUserResponse {
        success: boolean; 
        access_token: string;
}
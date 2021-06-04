export interface SigninRequest {
  username: string;
  userpsw: string;
}

export interface SigninResponse {
  token?: string;
  errorCode?: number;
  errorMessage?: string;
}

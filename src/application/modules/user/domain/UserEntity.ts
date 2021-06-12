export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public username: string,
    public isEmailVerified: boolean,
    public password: string,
    public gitlabUserId: string,
    public countryId: string,
  ) {}
}

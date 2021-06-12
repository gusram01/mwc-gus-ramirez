export class GithubUser {
  constructor(
    public id: string,
    public username: string,
    public url: string,
    public repositories: string,
    public repositoriesURL: string,
  ) {}
}

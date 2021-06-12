export class GitlabUser {
  constructor(
    public id: string,
    public username: string,
    public url: string,
    public repositories: any[],
    public repositoriesURL: any[],
  ) {}
}

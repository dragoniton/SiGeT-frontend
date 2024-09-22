export class Tarefa {
  constructor(
    public id: number | null,
    public title: string,
    public description: string,
    public owner: string,
    public priority: string,
    public deadline: string,

  ){}
}

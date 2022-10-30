export class ConflicDatatError extends Error {
  public status: number

  constructor(message:string){
    super(message)
    this.status = 409;
  }
}
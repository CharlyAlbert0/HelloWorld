
export class GlobalAttributesModel{
  IdGlobalAttribute?:number
  Name?:string
  Value?:string
  Description?:string


  constructor(IdGlobalAttribute?: number, Name?: string,  Value?:string,  Description?:string) {
    this.IdGlobalAttribute=IdGlobalAttribute;
    this.Name=Name;
    this.Value=Value;
    this.Description=Description
  }
}

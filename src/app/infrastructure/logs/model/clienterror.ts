export class ClientErrorModel{
    error: string ="";
    section: string ="";

    constructor( error: string, section: string){
        this.error = error;
        this.section = section;
    }
}

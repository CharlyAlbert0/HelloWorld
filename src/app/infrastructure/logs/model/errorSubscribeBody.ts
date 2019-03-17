
export class errorSubscribeBodyModel{
  error:string;
  error_description:string

  static fromJSON(json: any): errorSubscribeBodyModel {
        let object = Object.create(errorSubscribeBodyModel.prototype);
        Object.assign(object, json);
        return object;
    }

}

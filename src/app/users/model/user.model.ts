import { RoleModel } from '../../roles/model/role.model';
import { ProfileModel } from '../../profile/model/profile.model';
// import { UserTokenModel } from '../model/usertoken.model';
export class UserModel {
  userId: number;
  user: string;
  password: string;
  firstName: string;
  secondName: string;
  firstLastName: string;
  seconLastName: string;
  adress: string;
  city: string;
  country: string;
  postalCode: string;
  email: string;
  role? : RoleModel;
  profile?: Array<ProfileModel>;
  // userToken?:UserTokenModel;
  profileDescription: string;

  constructor(userId?: number, user?: string,password?: string, firstName?: string, secondName?: string, firstLastName?: string, seconLastName?: string, adress?: string, city?: string, country?: string, postalCode?: string, email?: string, role? : RoleModel, profile?: Array<ProfileModel>, profileDescription?:string) {
    this.userId=userId;
    this.user= user;
    this.password= password;
    this.firstName= firstName;
    this.secondName= secondName;
    this.firstLastName= firstLastName;
    this.seconLastName= seconLastName;
    this.adress= adress;
    this.city= city;
    this.country= country;
    this.postalCode= postalCode;
    this.email= email;
    this.role = role;
    this.profile = profile;
      // this.userToken = userToken;
    this.profileDescription = profileDescription;
  }
}

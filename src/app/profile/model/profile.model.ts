export class ProfileModel {
  profileId: number;
  profileName: string;
  checked: boolean;

  constructor(profileId: number, profileName: string, checked: boolean) {
    this.profileId = profileId;
    this.profileName = profileName;
    this.checked = checked;
  }
}

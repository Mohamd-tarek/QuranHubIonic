import { UserBasicInfo } from "./userBasicInfo.model";

export class User extends UserBasicInfo {
  constructor(
    id: string,
    profilePicture: any,
    email: string,
    userName: string,
    public numberOfFollower: number,
    public numberOfFollowed: number) {

    super(id, profilePicture, email, userName);
  }
    
}

import { User } from "./user.model";

export class Profile extends User {
  constructor(
    id: string,
    profilePicture: any,
    email: string,
    userName: string,
    numberOfFollower: number,
    numberOfFollowed: number,
    public coverPicture: any) {

    super(
       id,
       profilePicture,
       email,
       userName,
       numberOfFollower,
       numberOfFollowed);
  } 
}

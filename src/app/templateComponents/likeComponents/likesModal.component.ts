import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UserBasicInfo } from "../../models/user/userBasicInfo.model";
import { React } from "../../models/post/react.model";

@Component({
  selector: "likesModal",
  templateUrl: "likesModal.component.html"
})

export class LikesModalComponent  implements OnInit{
 
  @Input()
  postId!: any;

  @Input()
  repository!: any;

  @Input()
  totalLikes!: number;

  @Output()
  hideLikesEvent = new EventEmitter();

  loading: boolean = false;

  users: UserBasicInfo[] = [];

  postReacts: React[] = [];

  ngOnInit(): void {
    this.loadMoreLikes();
  }

  hideLikes() {
    this.hideLikesEvent.emit();
  }

  loadMoreLikes() {
    this.loading = true;
    this.repository.loadMoreReacts(this.postId, this.users.length, 50).subscribe((postReacts: React[]) => {
      this.postReacts = postReacts;
      console.log(postReacts);
      postReacts.forEach(postReact => this.users.push(postReact.quranHubUser));
      this.loading = false;
    })
  }

}

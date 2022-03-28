import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-likes',
  templateUrl: './profile-likes.component.html',
  styleUrls: ['./profile-likes.component.scss']
})
export class ProfileLikesComponent implements OnInit {

 
  array:any[] = [
    {
    "reply": 11,
    "retweet": 19,
    "likes": 76,
    "replystatus" : false,
    "retweetstatus" : false,
    "likesstatus" : true,
    "retweetvalue" : "Retweet"

  },

    {"reply": 1,
    "retweet": 15,
    "likes": 97,
    "replystatus" : false,
    "retweetstatus" : false,
    "likesstatus" : true,
    "retweetvalue" : "Retweet"
  }
  ];
arrayReply:boolean = false;
arrayRetweet:boolean=false;
arrayLikes:boolean=false;
like:number = 21;
retweet :string ="Retweet";
constructor() { }

ngOnInit(): void {
}

increaseReplyCount(i : number){
this.array[i].replystatus = !this.array[i].replystatus;
}
increaseRetweetCount(i : number){
this.array[i].retweet =  this.array[i].retweet + 1;
if(this.array[i].retweetstatus === false)
{
this.array[i].retweetvalue = "undo Retweet";
}
else{
this.array[i].retweetvalue ="Retweet";
}
this.array[i].retweetstatus = !this.array[i].retweetstatus;
}
increaseLikesCount(i :number){
if(this.array[i].likesstatus === true){
this.array[i].likes = this.array[i].likes - 1;
}  
else{
this.array[i].likes = this.array[i].likes + 1;
}
this.array[i].likesstatus = !this.array[i].likesstatus;


}
}

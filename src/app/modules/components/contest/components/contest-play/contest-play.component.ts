import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";

import { ILotteryContest } from "src/app/core/models/LotteryContest.interface";

@Component({
  selector: "loto-contest-play",
  templateUrl: "./contest-play.component.html",
  styleUrls: ["./contest-play.component.scss"]
})
export class ContestPlayComponent implements OnInit {
  contest!: ILotteryContest;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.pipe(map(({ contest }) => contest)).subscribe({
      next: (response: ILotteryContest) => {
        this.contest = response;
        console.log(this.contest)
      }
    });
  }
}

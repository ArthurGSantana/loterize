import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";

@Component({
  selector: "loto-contest",
  templateUrl: "./contest.component.html",
  styleUrls: ["./contest.component.scss"]
})
export class ContestComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe({
      next: (params) => {
        console.log(params['contestType']);
      }
    });
  }
}

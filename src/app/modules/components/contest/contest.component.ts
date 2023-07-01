import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { take } from "rxjs";

@Component({
  selector: "loto-contest",
  templateUrl: "./contest.component.html",
  styleUrls: ["./contest.component.scss"]
})
export class ContestComponent implements OnInit {
  controlSidebar: "open" | "closed" = "open";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe({
      next: (params) => {
        console.log(params["contestType"]);
      }
    });
  }

  handleSidebar(): void {
    this.controlSidebar = this.controlSidebar === "open" ? "closed" : "open";
  }

  backToHomePage(): void {
    this.router.navigate([".."]);
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  @ViewChild("authForm", { static: false }) authForm: NgForm;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    // console.log(this.authForm.value);
    this.authService.login(
      this.authForm.value.email,
      this.authForm.value.password
    );
    this.router.navigate([""]);
  }
}

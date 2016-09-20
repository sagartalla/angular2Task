import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  submitForm(event) {
    event.preventDefault();
    this._router.navigate(['success']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.less']
})
export class RequestAccessComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  signup(){
    this._router.navigate(['signup']);
  }

}

import { Component, VERSION, OnInit } from '@angular/core';
import { ServiceAppService } from './service-app.service';
import { Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  FormControlName,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public responseValue: any;
  public arrayList = [7, 9, 5, 6, 4, 5];
  public responseApi: any = [];

  loginForm: FormGroup;

  constructor(
    private service: ServiceAppService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.service.getData().subscribe((res) => {
      console.log('response..' + res);
      this.responseValue = res;
    });

    this.loadFun();
    // this.service.getJson().subscribe((data) => {
    //   console.log(data);
    // });

    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
    });

    var result3 = [];
    var results2 = this.arrayList.sort((a, b) => b - a);
    var result = new Set(results2);
    console.log(...result);
  }

  loadFun() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {
        let resp = JSON.stringify(response);
        this.responseApi = JSON.parse(resp);
        console.log('loading data', this.responseApi);
      });
  }

  fun() {
    console.log();
  }
}

import { Component, OnInit } from '@angular/core';
import {LoaderService} from "./loader.service";

@Component({
  selector: 'maxbac-loader',
  template: `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  isLoading: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {

  }

}

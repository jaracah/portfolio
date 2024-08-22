import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  cols: number = 3;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        '(max-width: 599px)', 
        '(min-width: 600px) and (max-width: 959px)', 
        '(min-width: 960px) and (max-width: 1279px)',
        '(min-width: 1280px)'
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints['(max-width: 599px)']) {
          this.cols = 1;
        } else if (state.breakpoints['(min-width: 600px) and (max-width: 959px)']) {
          this.cols = 1;
        } else if (state.breakpoints['(min-width: 960px) and (max-width: 1279px)']){
          this.cols = 2;
        } else if (state.breakpoints['(min-width: 1280px)']){
          this.cols = 2;
        }
      });

      console.log(this.cols);
  }
}

import { Component, HostListener, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridListModule,
    MatListModule,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  
  cols: number = 4;
  mainCols: number = 3;
  flexDir: string = "column";

  playSound() {
    const audio = new Audio('/hover.mp3');
    audio.volume = 0.2;
    audio.play();
  }

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
          this.mainCols = 1;
          this.flexDir = "row"
        } else if (state.breakpoints['(min-width: 600px) and (max-width: 959px)']) {
          this.cols = 1;
          this.mainCols = 1;
          this.flexDir = "row"
        } else if (state.breakpoints['(min-width: 960px) and (max-width: 1279px)']){
          this.cols = 4;
          this.mainCols = 3;
          this.flexDir = "column"
        } else if (state.breakpoints['(min-width: 1280px)']){
          this.cols = 4;
          this.mainCols = 3;
          this.flexDir = "column"
        }
      });
  }
}

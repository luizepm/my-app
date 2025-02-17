import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-helper',
  templateUrl: './responsive-helper.component.html',
  styleUrls: ['./responsive-helper.component.css']
})
export class ResponsiveHelperComponent implements OnInit {
  public env: any;

  constructor() {}

  ngOnInit(): void {}
}

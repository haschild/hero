import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-directive',
  templateUrl: './hero-directive.component.html',
  styleUrls: ['./hero-directive.component.css']
})
export class HeroDirectiveComponent implements OnInit {
  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}

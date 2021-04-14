import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public black:boolean = false;

  constructor(
    @Inject(DOCUMENT) private document:Document
  ) { }

  @HostListener("window:scroll", [])

  onWindowScroll() {
    var topPos = window.scrollY;
    if (topPos > 0)
       this.black = true;
    else
       this.black = false;
  }

  ngOnInit(): void {}
}

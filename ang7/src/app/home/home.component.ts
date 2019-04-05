import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
      {
          label: 'Icecreams',
          link: './icecreams',
          index: 0
      }, {
          label: 'Icecreams Cakes',
          link: './icecreamcakes',
          index: 1
      }, {
        label: 'Signature Cones',
        link: './signaturecones',
        index: 2
    }
  ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }
}

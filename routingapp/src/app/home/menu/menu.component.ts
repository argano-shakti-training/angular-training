import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
  }
  // constructor(private route: ActivatedRouteSnapshot) { }

  // ngOnInit(): void {
  //   console.log(this.route.paramMap.get('menuid'));
  // }


}

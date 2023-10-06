import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = ['Item 1', 'Item 2', 'Item 3'];
  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
  }

  explore() {
    this.router.navigate(['/explore'])
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public navLinks = [
    {
      id: 1,
      url: '/home',
      title: 'Home'
    },
    {
      id: 2,
      url: '/features',
      title: 'Features'
    },
    {
      id: 3,
      url: '/blog',
      title: 'Blog'
    },
    {
      id: 4,
      url: '/contact',
      title: 'Contact'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

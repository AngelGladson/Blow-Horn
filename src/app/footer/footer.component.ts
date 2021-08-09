import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public footerLinks = [
    {
      id: 1,
      url: '/about',
      title: 'About'
    },
    {
      id: 2,
      url: '/blog',
      title: 'Blog'
    },
    {
      id: 3,
      url: '/team',
      title: 'Team'
    },
    {
      id: 4,
      url: '/pricing',
      title: 'Pricing'
    },
    {
      id: 3,
      url: '/contact',
      title: 'Contact'
    },
    {
      id: 4,
      url: '/terms',
      title: 'Terms'
    }
  ]
  public connectionLinks = [
    {
      id: 1,
      url: '/about',
      title: 'Facebook'
    },
    {
      id: 2,
      url: '/blog',
      title: 'Instagram'
    },
    {
      id: 3,
      url: '/team',
      title: 'Twitter'
    },
    {
      id: 4,
      url: '/pricing',
      title: 'Github'
    },
    {
      id: 3,
      url: '/contact',
      title: 'Contact'
    },
    {
      id: 4,
      url: '/terms',
      title: 'Terms'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

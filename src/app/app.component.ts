import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blow-horn';
  public companies = [
    {
    companyName: 'Hotstar',
    image: '/assets/images/icons8-disney-plus-80.png'
  },
  {
    companyName: 'Google',
    image: '/assets/images/google.png'
  },
  {
    companyName: 'Hubspot',
    image: '/assets/images/icons8-hubspot-80.png'
  },
  {
    companyName: 'youtube',
    image: '/assets/images/icons8-youtube-logo-80.png'
  },
  {
    companyName: 'Slack',
    image: '/assets/images/icons8-slack-new-80.png'
  },
  {
    companyName: 'Shopify',
    image: '/assets/images/icons8-shopify-80.png'
  }
]
}

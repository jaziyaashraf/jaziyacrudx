import { Component } from '@angular/core';
// import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store';
}

// constructor (
//   private metaService: Meta
// ) { }

// public setCanScale(canScale: boolean): void {
//   // this.metaService.removeTag('name=viewport');
//   if (canScale) {
//     this.metaService.updateTag({
//       name: 'viewport',
//       content: 'width=device-width, initial-scale=1.0, user-scalable=yes'
//     }, 'name=viewport');
//   } else {
//     this.metaService.updateTag({
//       name: 'viewport',
//       content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
//     }, 'name=viewport');
//   }
// }

// }


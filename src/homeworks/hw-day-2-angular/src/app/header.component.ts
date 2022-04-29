import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="hero-body">
      <p class="title"> {{ title }} </p>
      <p class="subtitle"> {{ subTitle }}</p>
    </div>
  `
})
export class HeaderComponent {
  @Input() title = '';
  @Input() subTitle = '';
}

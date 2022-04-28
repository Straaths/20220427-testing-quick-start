import { Component } from '@angular/core';

@Component({
  selector: 'app-like-or-dislike',
  template: `
    <div class="box w-50 mt-3 mx-auto mb-6">
      <h4 class="title is-4 has-text-centered">Witaj, na ten moment masz {{count | i18nPlural:likesMapping }} </h4>
      <fieldset style="text-align: center">
        <button class="button" title="I like" (click)="handleCounterAdd(1)"> 👍 </button>
        <button class="button" title="I dislike" (click)="handleCounterAdd(-1)"> 👎 </button>
      </fieldset>
    </div>
  `,
  styles: [
    `.w-50 {
      width: 50%;
    }`
  ]
})
export class LikeOrDislikeComponent {

  count = 0;
  likesMapping: {[k: string]: string} = {
    '=0': 'zero lajków',
    '=1': '# lajka',
    '=2': '# lajki',
    '=3': '# lajki',
    '=4': '# lajki',
    other: '# lajków'
  };

  handleCounterAdd(value: number): void {
    // Reguła: nie można mieć lajków mniej niż zero...
    if((this.count + value) < 0) {
      return;
    }
    this.count += value;
  }

}

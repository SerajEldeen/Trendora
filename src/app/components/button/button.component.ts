import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" bg-pink-500 w-full  shadow-md
      text-white px-4 py-2 rounded-lg transition
      hover:bg-pink-600"
      (click)="btnClicked.emit()"
    >
      <span class="text-md">{{ label() }}</span>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input<string>();

  btnClicked = output();
}

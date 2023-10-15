import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {

  remove = false;

  toggleRemove(): void {
    this.remove = !this.remove;
  }


}

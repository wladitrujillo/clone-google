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

  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'group7.apk');
    link.setAttribute('download', `group7.apk`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}

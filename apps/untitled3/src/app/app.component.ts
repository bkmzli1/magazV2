import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled3';
  scriptElement: HTMLScriptElement;
  constructor() {
    this.scriptElement = document.createElement("script");
    this.scriptElement.src = "assets/js/script.js";
    document.body.appendChild(this.scriptElement)
  }
}

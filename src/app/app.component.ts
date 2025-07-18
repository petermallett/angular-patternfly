import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MastheadComponent } from "./masthead/masthead.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MastheadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

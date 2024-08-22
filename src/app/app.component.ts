import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexloginComponent } from './pages/flexlogin/flexlogin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FlexloginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'basic';
}

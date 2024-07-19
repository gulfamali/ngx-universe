import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLoader } from 'base';
import { Select } from 'base';
import { options } from './mock';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, AppLoader, Select],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';

  options = options;

  selectValue = new FormControl('');
}

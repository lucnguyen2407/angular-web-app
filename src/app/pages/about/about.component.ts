import { Component } from '@angular/core';
import { CounterComponent } from "../../components/counter/counter.component";

@Component({
  selector: 'app-about',
  imports: [CounterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  counterValue = 10;
}

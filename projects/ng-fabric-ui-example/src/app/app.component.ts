import { Component } from '@angular/core';
import { SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-fabric-ui-example';
  disabled = true;
  required = true;
  labelContent = 'I\'m a Label';
  spinnerSize = SpinnerSize;
}

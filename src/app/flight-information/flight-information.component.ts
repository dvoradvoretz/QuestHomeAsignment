import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FlightInformation} from '../flight-information';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FlightInformationComponent {
  @Input() flightInformation: FlightInformation;
}

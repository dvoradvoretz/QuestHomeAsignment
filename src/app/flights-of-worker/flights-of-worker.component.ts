import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {FlightInformation} from '../flight-information';

@Component({
  selector: 'app-flights-of-worker',
  templateUrl: './flights-of-worker.component.html',
  styleUrls: ['./flights-of-worker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FlightsOfWorkerComponent {
  @Input() dataSource: FlightInformation[] = [];
  @Output() chooseFlightEvent = new EventEmitter<string>();
  displayedColumns: string[] = ['Flight number', 'Origin', 'Origin Date', 'Destination', 'Destination Date'];
  selection = new SelectionModel<FlightInformation>(false, []);

  getMoreDetails(flight) {
    this.selection.toggle(flight);
    this.chooseFlightEvent.emit(flight);
  }
}

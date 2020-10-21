import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatSelectionListChange} from '@angular/material/list';
import {Workers} from '../workers';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WorkersListComponent {
  @Input() workers: Workers[];
  @Output() chooseWorkerEvent = new EventEmitter<string>();
  workerId;

  onSelectionChange(event: MatSelectionListChange) {
    this.workerId = event.option.selectionList.selectedOptions.selected.map(w => w.value.id);
    this.chooseWorkerEvent.emit(this.workerId);
  }

}

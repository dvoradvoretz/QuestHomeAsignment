import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatSelectionListChange} from '@angular/material/list';
import {Worker} from '../worker';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WorkersListComponent {
  @Input() workers: Worker[];
  @Output() chooseWorkerEvent = new EventEmitter<number>();
  workerId: number;

  onSelectionChange(event: MatSelectionListChange) {
    this.workerId = Number(event.option.selectionList.selectedOptions.selected.map(w => w.value.id));
    this.chooseWorkerEvent.emit(this.workerId);
  }

}

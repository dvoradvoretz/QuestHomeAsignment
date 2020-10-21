import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Workers} from '../workers';
import {MatSelectionList} from '@angular/material/list';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WorkersListComponent {
  @ViewChild('workersList') workersSelectionList: MatSelectionList;
  @Input() workers: Workers[];
  @Output() chooseWorkerEvent = new EventEmitter<string>();
  workerId;

  onSelectionChange() {
    this.workerId = this.workersSelectionList.selectedOptions.selected.map(w => w.value.id);
    this.chooseWorkerEvent.emit(this.workerId);
  }

}

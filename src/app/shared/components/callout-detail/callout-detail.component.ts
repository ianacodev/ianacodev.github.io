import { Component, Input } from '@angular/core';
// models
import { CalloutDetail } from '../../models';

@Component({
  selector: 'app-callout-detail',
  templateUrl: './callout-detail.component.html',
  styleUrls: ['./callout-detail.component.scss'],
})
export class CalloutDetailComponent {
  @Input() detail: CalloutDetail | undefined;
  @Input() index: number | undefined;
}

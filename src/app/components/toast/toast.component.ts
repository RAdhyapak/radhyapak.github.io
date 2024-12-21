import { Component, inject } from '@angular/core';

import { ToastService } from '../../services/toast.service';
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-toast',
	imports: [NgbToastModule, NgTemplateOutlet],
	template: `
		@for (toast of toastService.toasts; track toast) {
			<ngb-toast
        header="Rohan Adhyapak"
				[class]="toast.classname"
				[autohide]="true"
				[delay]="toast.delay || 20000"
				(hidden)="toastService.remove(toast)"
			>
				<ng-template [ngTemplateOutlet]="toast.template"></ng-template>
			</ngb-toast>
		}
	`,
	styleUrls: ['./toast.component.css']
})
export class ToastComponent {
	toastService = inject(ToastService);
}
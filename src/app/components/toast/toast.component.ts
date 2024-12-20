import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toast',
  imports: [NgbModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  show = false;
  autohide = true;
  constructor(public toastService: ToastService) { }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }
}

import { Injectable, TemplateRef } from '@angular/core';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    if (this.toasts.length == 0) {
      this.toasts.push({ textOrTpl, ...options });
    }
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}

import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  toasts: Array<any> = [];
  constructor(private ToastService: ToastService) { }

  ngOnInit() {

    this.ToastService.toastChanged.subscribe((data: any) => {
      this.toasts.push(data);
    });
  }


  // showToast() {
  //   this.toasts.push({
  //     type: 'info',
  //     message: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
  //     timeout: 5000
  //   });
  // }

}

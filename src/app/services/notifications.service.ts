import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class NotificationsService {
    
    constructor(private toastr: ToastrService) {}
    
	showInfoNotification(from, align, message){
            this.toastr.info(
                '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+message+'</span>',
                  "",
                  {
                    timeOut: 4000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                  }
                );
    }

	showSuccessNotification(from, align, message){
    this.toastr.success(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+message+'</span>',
                  "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        }
      );
    }
    showWarningNotification(from, align, message){
      this.toastr.warning(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+message+'</span>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-warning alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        }
      );
    }
    showErrorNotification(from, align, message){
      this.toastr.error(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+message+'</span>',
        "",
        {
          timeOut: 4000,
          enableHtml: true,
          closeButton: true,
          toastClass: "alert alert-danger alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        }
      );
    }
      showShowNotification(from, align, message){
      this.toastr.show(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">'+message+'</span>',
        "",
        {
          timeOut: 4000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-primary alert-with-icon",
          positionClass: "toast-" + from + "-" + align
        }
      );
    }
}
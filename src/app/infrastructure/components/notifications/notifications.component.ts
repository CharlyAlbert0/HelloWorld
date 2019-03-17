import { Component, OnInit } from '@angular/core';
import { EnumCategoryD,EnumTypeD } from '../../enums/enumdialog';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'notifications-cmp',
    templateUrl: 'notifications.component.html'
})
export class NotificationsComponent implements OnInit{

    //message: "Welcome to <b>SySin</b> a beautiful Inventory System for web  <b>Enjoy!</b>."
    ShowMessageNotify(Category:EnumCategoryD,Type:EnumTypeD, message:string){
        debugger
          if(Category == EnumCategoryD.notification)
          {
              if(Type == EnumTypeD.success){
                  $.notify({
                      icon: "add_alert",
                      message: message
          
                  },{
                      type: 'success',
                      timer: 4000,
                      placement: {
                          from: 'top',
                          align: 'right'
                      }
                  });
              }
  
              if(Type == EnumTypeD.error){
                  $.notify({
                      icon: "add_alert",
                      message: message
          
                  },{
                      type: 'danger',
                      timer: 4000,
                      placement: {
                          from: 'top',
                          align: 'right'
                      }
                  });
              }
  
              if(Type == EnumTypeD.info){
                $.notify({
                    icon: "add_alert",
                    message: message
        
                },{
                    type: 'warning',
                    timer: 4000,
                    placement: {
                        from: 'top',
                        align: 'right'
                    }
                });
            }
  
          }
          else{
              alert(message)
          }
          
      }
      
    showNotification(from, align){
        var type = ['','info','success','warning','danger','rose','primary'];

        var color = Math.floor((Math.random() * 6) + 1);

    	$.notify({
        	icon: "notifications",
        	message: "Welcome to <b>Material Dashboard</b> - a beautiful dashboard for every web developer."

        },{
            type: type[color],
            timer: 3000,
            placement: {
                from: from,
                align: align
            }
        });
	}
    ngOnInit(){
        // We put modals out of wrapper to working properly
        // $('.modal').appendTo("body");
    }
}

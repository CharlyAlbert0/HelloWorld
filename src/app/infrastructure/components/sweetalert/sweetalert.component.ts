import { Component, OnInit } from '@angular/core';

// import swal from 'sweetalert2'
import { EnumCategoryD, EnumTypeD, EnumSizeD, EnumIconD } from '../../enums/enumdialog';
import { EnumLogType } from '../../enums/enumlog';
import { Observable } from 'rxjs/Observable';
declare var $:any;
declare var swal:any;
@Component({
    moduleId: module.id,
    selector: 'sweetalert-cmp',
    templateUrl: 'sweetalert.component.html'
})

export class SweetAlertComponent implements OnInit{


  showSwalDialog(categoryDialog:EnumCategoryD,title:string,message:string,iconType:EnumIconD = EnumIconD.none) {
    var promise = new Promise((resolve, reject) => {

      if(categoryDialog == EnumCategoryD.message){
      
        if(iconType == EnumIconD.Check){
          swal({
            title: title,
            text: message,
            type: 'success',
            confirmButtonClass: "btn btn-info",
            background: '#4caf50',
            buttonsStyling: false
            })
        }
        if(iconType == EnumIconD.warning){
          swal({
            title: title,
            text: message,
            type: 'warning',
            confirmButtonClass: "btn btn-info",
            background: '#4caf50',
            buttonsStyling: false
            })
        }
        if(iconType == EnumIconD.cross){
          swal({
            title: title,
            text: message,
            type: 'error',
            confirmButtonClass: "btn btn-info",
            background: '#4caf50',
            buttonsStyling: false
            })
        }
        if(iconType == EnumIconD.none){
          swal({
            title: message,
            buttonsStyling: false,
            background: '#4caf50',
            confirmButtonClass: "btn btn-danger"
        }); 
        }
      }
  
      if(categoryDialog == EnumCategoryD.question || iconType == EnumIconD.question){
        if(iconType = EnumIconD.question){
  
          swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonClass: "btn btn-info",
            cancelButtonClass: "btn btn-danger",
            background: '#4caf50',
            buttonsStyling: false
        }).then(function() {
          resolve(true);            
        }, function(dismiss) {
          // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
          if (dismiss === 'cancel') {
            resolve(false); ;
          }
        })
          
        }      
      }  
       // reject(); se comenta por que no tiene que haber errores aqui
       
    });
    return promise;
  }

  //TODO
  

  //EXAMPLES!
    showSwal(type){
        if(type == 'basic'){
        	swal({
                title: "Here's a message!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success"
            });

    	}else if(type == 'title-and-text'){
        	swal({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-info"
            });

    	}else if(type == 'success-message'){
        	swal({
                type: "success",
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                background: '#4caf50',
                confirmButtonClass: "btn btn-info"

            });

    	}else if(type == 'warning-message-and-confirmation'){
            swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    confirmButtonText: 'Yes, delete it!',
                    buttonsStyling: false
                }).then(function() {
                  swal({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    type: 'success',
                    confirmButtonClass: "btn btn-success",
                    buttonsStyling: false
                    })
                });
    	}else if(type == 'warning-message-and-cancel'){
            swal({
                    title: 'Are you sure?',
                    text: 'You will not be able to recover this imaginary file!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, keep it',
                    confirmButtonClass: "btn btn-info",
                    cancelButtonClass: "btn btn-danger",
                    background: '#4caf50',
                    buttonsStyling: false
                }).then(function() {
                  swal({
                    title: 'Deleted!',
                    text: 'Your imaginary file has been deleted.',
                    type: 'success',
                    confirmButtonClass: "btn btn-success",
                    background: '#4caf50',
                    buttonsStyling: false
                    })
                }, function(dismiss) {
                  // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
                  if (dismiss === 'cancel') {
                    swal({
                      title: 'Cancelled',
                      text: 'Your imaginary file is safe :)',
                      type: 'error',
                      confirmButtonClass: "btn btn-info",
                      background: '#4caf50',
                      buttonsStyling: false
                    })
                  }
                })

    	}else if(type == 'custom-html'){
        	swal({
                title: 'HTML example',
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                html:
                        'You can use <b>bold text</b>, ' +
                        '<a href="http://github.com">links</a> ' +
                        'and other HTML tags'
                });

    	}else if(type == 'auto-close'){
        	swal({ title: "Auto close alert!",
            	   text: "I will close in 2 seconds.",
            	   timer: 2000,
            	   showConfirmButton: false
                });
    	} else if(type == 'input-field'){
            swal({
                    title: 'Input something',
                    html: '<div class="form-group">' +
                              '<input id="input-field" type="text" class="form-control" />' +
                          '</div>',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function(result) {
                    swal({
                        type: 'success',
                        html: 'You entered: <strong>' +
                                $('#input-field').val() +
                              '</strong>',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false

                    })
                }).catch(swal.noop)
        }
    }



    
   
    public ngOnInit(){}
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})






export class LoginComponent implements OnInit{
    test : Date = new Date();
    UserName:string;
    IsValidUserName:boolean = false;
    IsInValidUser:boolean = false;
    public result:InputSimpleModel = new InputSimpleModel();

    constructor(private route: ActivatedRoute,
            private router: Router,){

    }

    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };
    ngOnInit(){
        this.checkFullPageBackgroundImage();

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $.notify({
                icon: "add_alert",
                message: "Welcome to <b>SySin</b> a beautiful Inventory System for web  <b>Enjoy!</b>."

            },{
                type: 'success',
                timer: 4000,
                placement: {
                    from: 'top',
                    align: 'right'
                }
            });
        }, 900)




    }

    ValidUser(){
      debugger
      if(this.result.User.length > 3)
      {
        this.IsValidUserName = true;
        this.IsInValidUser = false;
      }

      else
      {
        this.IsInValidUser = true;
        this.IsValidUserName = false;
      }

    }

    Login(){
      localStorage.setItem('currentUser','X');
        this.router.navigate(['/dashboard']);
    }


}

export class InputSimpleModel{
    Result:boolean = true;
    User:string = "";
    Nombre:string = "";
    Password:string = "";

}

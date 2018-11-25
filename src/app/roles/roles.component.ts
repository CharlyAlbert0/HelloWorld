import { Component, OnInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';

// wizard
declare var $:any;
interface FileReaderEventTarget extends EventTarget {
    result:string
}
interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}
//

declare var $:any;
declare interface Table_With_Checkboxes {
    id?: number;
    ischecked?: boolean;
    product_name: string;
    type: string;
    quantity: number;
    price: any;
    amount: string;
}
export interface TableData2 {
  headerRow: string[];
  dataRows: Table_With_Checkboxes[];
}

@Component({
    moduleId: module.id,
    selector: 'roles-cmp',
    templateUrl: 'roles.component.html'
})

export class RolesComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData2;
    public tableData3: TableData;

    // wizard
    readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e:FileReaderEvent) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    //

    ngOnChanges(){
        var input = $(this);
        var target:EventTarget;
        if (input.files && input.files[0]) {
            var reader:any = new FileReader();

            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    ngAfterViewInit(){
        $('.wizard-card').each(function(){

            var $wizard = $(this);
            var index = $wizard.bootstrapWizard('currentIndex');
            // this.refreshAnimation($wizard, index);

            var total_steps = $wizard.find('li').length;
            var move_distance = $wizard.width() / total_steps;
            var step_width = move_distance;
            move_distance *= index;

            var $current = index + 1;

            if($current == 1){
                move_distance -= 8;
            } else if($current == total_steps){
                move_distance += 8;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform':'translate3d(' + move_distance + 'px, 0, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

            });

            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
        });
    }
    ngOnInit(){

      //wizard
      // Code for the Validator
      var $validator = $('.wizard-card form').validate({
        rules: {
          firstname: {
            required: true,
            minlength: 3
          },
          lastname: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            minlength: 3,
          }
          },

          errorPlacement: function(error, element) {
              $(element).parent('div').addClass('has-error');
           }
    });

      // Wizard Initialization
      $('.wizard-card').bootstrapWizard({
          'tabClass': 'nav nav-pills',
          'nextSelector': '.btn-next',
          'previousSelector': '.btn-previous',

          onNext: function(tab, navigation, index) {
            var $valid = $('.wizard-card form').valid();
            if(!$valid) {
              $validator.focusInvalid();
              return false;
            }
          },

          onInit : function(tab, navigation, index){

            //check number of tabs and fill the entire row
            var $total = navigation.find('li').length;
            var  $width = 100/$total;
            var $wizard = navigation.closest('.wizard-card');

            var $display_width = $(document).width();

            if($display_width < 600 && $total > 3){
                $width = 50;
            }

             navigation.find('li').css('width',$width + '%');
             var $first_li = navigation.find('li:first-child a').html();
             var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
             $('.wizard-card .wizard-navigation').append($moving_div);

          //    this.refreshAnimation($wizard, index);
          var total_steps = $wizard.find('li').length;
          var move_distance = $wizard.width() / total_steps;
          var step_width = move_distance;
          move_distance *= index;

          var $current = index + 1;

          if($current == 1){
              move_distance -= 8;
          } else if($current == total_steps){
              move_distance += 8;
          }

          $wizard.find('.moving-tab').css('width', step_width);
          $('.moving-tab').css({
              'transform':'translate3d(' + move_distance + 'px, 0, 0)',
              'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

          });

             $('.moving-tab').css('transition','transform 0s');
         },

          onTabClick : function(tab, navigation, index){

              var $valid = $('.wizard-card form').valid();

              if(!$valid){
                  return false;
              } else{
                  return true;
              }
          },

          onTabShow: function(tab, navigation, index) {
              var $total = navigation.find('li').length;
              var $current = index+1;

              var $wizard = navigation.closest('.wizard-card');

              // If it's the last tab then hide the last button and show the finish instead
              if($current >= $total) {
                  $($wizard).find('.btn-next').hide();
                  $($wizard).find('.btn-finish').show();
              } else {
                  $($wizard).find('.btn-next').show();
                  $($wizard).find('.btn-finish').hide();
              }

              var button_text = navigation.find('li:nth-child(' + $current + ') a').html();

              setTimeout(function(){
                  $('.moving-tab').text(button_text);
              }, 150);

              var checkbox = $('.footer-checkbox');

              if( index !== 0 ){
                  $(checkbox).css({
                      'opacity':'0',
                      'visibility':'hidden',
                      'position':'absolute'
                  });
              } else {
                  $(checkbox).css({
                      'opacity':'1',
                      'visibility':'visible'
                  });
              }

              // this.refreshAnimation($wizard, index);
              var total_steps = $wizard.find('li').length;
              var move_distance = $wizard.width() / total_steps;
              var step_width = move_distance;
              move_distance *= index;

              var $current = index + 1;

              if($current == 1){
                  move_distance -= 8;
              } else if($current == total_steps){
                  move_distance += 8;
              }

              $wizard.find('.moving-tab').css('width', step_width);
              $('.moving-tab').css({
                  'transform':'translate3d(' + move_distance + 'px, 0, 0)',
                  'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

              });
          }
      });


      // Prepare the preview for profile picture
      $("#wizard-picture").change(function(){

          this.readURL(this);
      });

      $('[data-toggle="wizard-radio"]').click(function(){
          console.log('click');

          var wizard = $(this).closest('.wizard-card');
          wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
          $(this).addClass('active');
          $(wizard).find('[type="radio"]').removeAttr('checked');
          $(this).find('[type="radio"]').attr('checked','true');
      });

      $('[data-toggle="wizard-checkbox"]').click(function(){
          if( $(this).hasClass('active')){
              $(this).removeClass('active');
              $(this).find('[type="checkbox"]').removeAttr('checked');
          } else {
              $(this).addClass('active');
              $(this).find('[type="checkbox"]').attr('checked','true');
          }
      });

      $('.set-full-height').css('height', 'auto');







        // Init Tooltips
        // $('[rel="tooltip"]').tooltip();
        this.tableData1 = {
            headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
            dataRows: [
                ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
                ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
                ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
                ['4','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
                ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
            ]
         };
         this.tableData2 = {
             headerRow: [ '#', '', 'Product Name', 'Type', 'Qty', 'Price', 'Amount'],
             dataRows: [
                 {id: 1, ischecked: true, product_name: 'Moleskine Agenda', type: 'Office', quantity: 25, price: 49, amount: '1,225'},
                 {id: 2, ischecked: true, product_name: 'Stabilo Pen', type: 'Office', quantity: 30, price: 10.99, amount: '109'},
                 {id: 3, ischecked: true, product_name: 'A4 Paper Pack', type: 'Office', quantity: 50, price: 49, amount: '1,225'},
                 {id: 4, ischecked: false, product_name: 'Apple iPad', type: 'Meeting', quantity: 10, price: 499.00, amount: '4,990'},
                 {id: 5, ischecked: false, product_name: 'Apple iPhone', type: 'Communication', quantity: 10, price: 599.00, amount: '5,999'}
             ]
          };
          this.tableData3 = {
              headerRow: [ '', 'PRODUCT', 'COLOR', 'SIZE', 'PRICE', 'QTY', 'AMOUNT'],
              dataRows: [
                  ['product1', '#jacket', 'Spring Jacket','by Dolce&Gabbana', 'Red', 'M', '549', '1','549'],
                  ['product2', '#pants',  'Short Pants', 'by Pucci', 'Purple', 'M', '499', '2', '998'],
                  ['product3', '#nothing', 'Pencil Skirt', 'by Valentino', 'White', 'XL', '799', '1', '799']
              ]
           };
    }
    getTotal(){
        var total = 0;
        for( var i = 0; i < this.tableData3.dataRows.length; i++ ){
            var integer = parseInt(this.tableData3.dataRows[i][8])
            total += integer;
        }
        return total;
    };
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    num1: number;
    num2: number;
    result : number;

    calculate(oper){
       if(this.num1 && this.num2){
           if(oper==1){
               this.result = this.num1 + this.num2;
           }else if(oper==2){
               this.result = this.num1 - this.num2;
           }else if(oper==3){
               this.result = this.num1 * this.num2;
           }else if(oper==4){
               this.result = this.num1 / this.num2;
           }
       }
    }

    clear(){
       if(this.num1 || this.num2 || this.result){
             this.num1 = null;
             this.num2 = null;
             this.result = null;
       }
    }

}

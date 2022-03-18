import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Fibonacci";
  numbers = [0, 1];
  isPrimeNumber = [0];
  foundDividers: number = 0;
  ngOnInit(): void{
    for (let i = 0; i<50; i++) {
      this.numbers[i+2] = this.numbers[i] + this.numbers[i+1];
    }
    for (let j = 0; j < this.numbers.length; j++){
      this.foundDividers=0;
      for (let k = 1; k < 50 && this.foundDividers < 2 && this.numbers[j]>k; k++){
        if(this.numbers[j+1]>2 && this.numbers[j+1]%2==0){
          this.foundDividers=2;
        }
        else if(this.numbers[j+1]%k==0){
          this.foundDividers++;
        }
      }
      if(this.foundDividers>=2){
        this.isPrimeNumber[j+1]=0;
      }
      else{
        this.isPrimeNumber[j+1]=1;
      }
    }   
  }
}
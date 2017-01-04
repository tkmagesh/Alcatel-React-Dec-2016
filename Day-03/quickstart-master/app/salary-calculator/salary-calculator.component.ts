import { Component } from '@angular/core';
import { SalaryCalculator } from './SalaryCalculator.model';

@Component({
    template : `
        <section className="content" id="content-1">
                <div className="field">
                    <label htmlFor="">Basic :</label>
                    <input type="number" name="" ref="txtBasic" [(ngModel)]="calculator.basic" />
                </div>
                <div className="field">
                    <label htmlFor="">HRA :</label>
                    <input type="number" name="" ref="txtHra" [(ngModel)]="calculator.hra" />
                </div>
                <div className="field">
                    <label htmlFor="">DA :</label>
                    <input type="number" name="" ref="txtDa" [(ngModel)]="calculator.da" />
                </div>
                <div className="field">
                    <label htmlFor="">Tax :</label>
                    <input type="range" name="" ref="rangeTax" min="0" max="30" [(ngModel)]="calculator.tax" />
                    <span id="spanTax">{{calculator.tax}}</span>
                </div>
                <div className="field">
                    <input type="button" value="Calculate" id="btnCalculate" (click)="calculator.calculate()"/>
                </div>
                <div className="field">
                    <div id="divResult">{{calculator.salary}}</div>
                </div>
			</section>
        `,
    selector : 'salary-calculator'
})
export class SalaryCalculatorComponent{
    constructor(private calculator : SalaryCalculator){
        
    }
}
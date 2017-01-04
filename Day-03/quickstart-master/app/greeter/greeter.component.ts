import {Component} from '@angular/core';

@Component({
    template : `<h3> {{heading}} </h3>
                <hr/>
                <label> Name : </label>
                <input type="text" [(ngModel)]="username">
                <input type="button" value="Greet" (click)="greetUser()" />
                <message [msg]="greetMsg"></message>`,
    selector : 'greeter'
})
export class GreeterComponent{
    
    heading : string = 'Greet';
    greetMsg : string = '';
    
    username : string = '';
    
    greetUser(){
        this.greetMsg = `Hi ${this.username}, Have a nice day!!`;
        this.username = '';
    }
}
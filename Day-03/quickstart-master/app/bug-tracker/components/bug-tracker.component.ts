import { Component } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
    template : `
        <h2>Bug Tracker</h2>
        <hr/>
        <bug-stats [data]="bugs"></bug-stats>
        <section class="list">
            <label for="">Bug :</label>
            <input type="text" #txtBugName>
            <input type="button" value="Add Bug" (click)="addNewBug(txtBugName.value)">
            <input type="button" value="Remove Closed" (click)="removeClosed()">
            <ol>
                <bug-item *ngFor="let bug of bugs" [data]="bug" (bugClick)="toggle($event)"></bug-item>
            </ol>
        </section>
    `,
    selector : 'bug-tracker'
})
export class BugTrackerComponent{
    bugs : Array<IBug> = new Array<IBug>()

    addNewBug(bugName:string){
        var newBug = { name : bugName, isClosed : false};
        this.bugs = this.bugs.concat([newBug]);
    }

    toggle (bug : IBug){
        this.bugs = this.bugs.map(b => {
            if (b === bug){
                return {
                    name : b.name,
                    isClosed : !b.isClosed
                }
            } else {
                return b;
            }
        })
    }

    removeClosed(){
        this.bugs = this.bugs.filter(function(bug){ 
            return  !bug.isClosed
        });
    }
}
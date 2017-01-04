import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
    template : `
       <li>
            <span class="bugname" (click)="spanClick()" 
                [ngClass]="{closed : data.isClosed}"
            >{{data.name | trimText }}</span>
        </li>
    `,
    selector : 'bug-item'
})
export class BugItemComponent{

    @Input()
    data : IBug;

    @Output()
    bugClick : EventEmitter<IBug> = new EventEmitter<IBug>();

    spanClick(){
        this.bugClick.emit(this.data);
    }
}
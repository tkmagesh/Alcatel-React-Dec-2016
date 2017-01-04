import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
    template : `
         <section class="stats">
            <span class="closed">{{getClosedCount()}}</span>
            <span> / </span>
            <span>{{data.length}}</span>
        </section>
    `,
    selector : 'bug-stats'
})
export class BugStatsComponent{
    @Input()
    data : Array<IBug> = new Array<IBug>();

    getClosedCount(){
        return this.data.reduce( (result, bug) => bug.isClosed ? ++ result : result, 0);
    }
}
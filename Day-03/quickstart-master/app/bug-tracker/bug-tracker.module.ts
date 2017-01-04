import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BugTrackerComponent} from './components/bug-tracker.component';
import { BugStatsComponent } from './components/bug-stats.component';
import { BugItemComponent } from './components/bug-item.component';

@NgModule({
    imports : [FormsModule, CommonModule],
    declarations : [BugTrackerComponent, BugStatsComponent, BugItemComponent],
    providers : [],
    exports : [BugTrackerComponent]
})
export class BugTrackerModule{

}
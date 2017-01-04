import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BugTrackerComponent} from './components/bug-tracker.component';
import { BugStatsComponent } from './components/bug-stats.component';
import { BugItemComponent } from './components/bug-item.component';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { ClosedCountPipe } from './pipes/closedCount.pipe';

@NgModule({
    imports : [FormsModule, CommonModule],
    declarations : [BugTrackerComponent, BugStatsComponent, BugItemComponent, TrimTextPipe, ClosedCountPipe],
    providers : [],
    exports : [BugTrackerComponent]
})
export class BugTrackerModule{

}
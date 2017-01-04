import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BugTrackerComponent} from './components/bug-tracker.component';

@NgModule({
    imports : [FormsModule, CommonModule],
    declarations : [BugTrackerComponent],
    providers : [],
    exports : [BugTrackerComponent]
})
export class BugTrackerModule{

}
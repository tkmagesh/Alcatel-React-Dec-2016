import { Component, Input } from '@angular/core';

@Component({
    template : `<div>{{msg}}</div>`,
    selector : 'message'
})
export class MessageComponent{
    
    @Input()
    msg : string = 'Sample message';

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'closedCount',
    pure : true
})
export class ClosedCountPipe implements PipeTransform{
    transform(data : any) : any{
        console.info('ClosedCountPipe Triggered');
        return data.reduce( (result : number, bug : any) => bug.isClosed ? ++ result : result, 0);
    }
}
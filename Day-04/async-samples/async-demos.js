var pgm = (function(){
    function addSync(x,y){
        console.log(`   [Service] add requested for ${x} and ${y}`);
        var result = x + y;
        console.log(`   [Service] returning the result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[Consumer] triggering addSync for ${x} and ${y}`);
        var result = addSync(x,y);
        console.log(`[Consumer] result = ${result}`);
    }

    function addAsync(x,y, onResult){
        console.log(`   [Service] add requested for ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`   [Service] returning the result`);
            //return result;
            if (typeof onResult === 'function')
                onResult(result);
        }, 3000);
        
    }

    function addAsyncClient(x,y){
        console.log(`[Consumer] triggering addAsync for ${x} and ${y}`);
        addAsync(x,y, function(result){
            console.log(`[Consumer] result = ${result}`);
        });
        
    }

    var addAsyncEvents = (function(){
        var _subscribers = [];
        function subscribe(subscriptionFn){
            _subscribers.push(subscriptionFn);
        }
        function add(x,y){
            console.log(`   [Service] add requested for ${x} and ${y}`);
            setTimeout(function(){
                var result = x + y;
                console.log(`   [Service] returning the result`);
                _subscribers.forEach(subscriber => subscriber(result));
            }, 3000);
        }
        return {
            add : add,
            subscribe : subscribe
        }
    })();

    function addAsyncPromise(x,y){
        console.log(`   [Service] add requested for ${x} and ${y}`);
        var promise = new Promise(function(resolveFn, rejectFn){
             setTimeout(function(){
                var result = x + y;
                console.log(`   [Service] returning the result`);
                resolveFn(result);
            }, 3000);
        });
         
           

        return promise;
    }

    return {
        addSyncClient : addSyncClient,
        addAsyncClient : addAsyncClient,
        addAsyncEvents : addAsyncEvents,
        addAsyncPromise : addAsyncPromise

    }
})();
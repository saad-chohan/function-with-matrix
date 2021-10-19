var arr_a = [];
var arr_b  = [];
var sub = [];
function append(){
    for(var ai = 0; ai < 3; ai++){
        sub = [];
        for(aj = 0; aj < 3; aj++){
            var value = ById('a_'+ai+'_'+aj).value;
           //sub array
            sub.push(value);
            // main array
           arr_a[ai] = sub
           //console.log('ai '+ai+ ' aj '+aj);     
        } 
    }
    for(var bi = 0; bi < 3; bi++){
        sub = [];
        for(bj = 0; bj < 3; bj++){
            var value = ById('b_'+bi+'_'+bj).value;
           //sub array
            sub.push(value);
            // main array
           arr_b[bi] = sub    
        } 
    }
    console.log('arr_a');
    console.log(arr_a);
    console.log('arr_b');
    console.log(arr_b);
}

function ById(id){
    return document.getElementById(id);
}
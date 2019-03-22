$(document).ready(function() {
    var data = [{id:'1',nombre:'Pepe ', app:'Roles', edad:26, email:'example@example.com',sexo:'masculino',estadoCivil:'Soltero'},
                            {id:'2',nombre:'Bety', app:'Celos', edad:29, email:'example@example.com',sexo:'femenino',estadoCivil:'casado'},
                            {id:'3',nombre:'Ursula', app:'Leva', edad:26, email:'example@example.com',sexo:'femenino',estadoCivil:'Soltero'}];
    var table = $('#example').DataTable( {
        destroy:true,
        data:data,
        columns:[
            //{title:'', data:''}
            {data:'id'},
            {data:'nombre'},
            {data:'app'},
            {data:'edad'},
            {data:'email'},
            {data:'sexo'},
            {data:'estadoCivil'}
        ],
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        
        fixedColumns:   {
            leftColumns: 1
        },
        paging:         false,
    } );
} );

function edit(element){
    
        let infos = element.children[0].innerHTML.split(",");
        //console.log(document.getElementById('task-priorityU').value);

        document.getElementById("task-id").value = infos[0];
        document.getElementById('titleU').value = infos[1];

        let type = infos[2] ;

       (type=='feature')?document.getElementById('task-type-featureU').checked=true :document.getElementById('task-type-bugU').checked=true;

        // document.getElementById('task-type-featureU').value =infos[2];

        // document.getElementById('task-priorityU').children[0].innerHTML=infos[3];

        let Priority=infos[3];

        if (Priority=='Low'){
            document.getElementById('low').selected=true ;
        }
        
        if(Priority=='High'){
                document.getElementById('hight').selected=true ;
        }
        if(Priority=='Medium'){
            document.getElementById('medium').selected=true ;
        }

        if(Priority=='Critical'){
            document.getElementById('critical').selected=true ;
        }
        
    let Status=document.getElementById('task-statusU').value =infos[4];


    if (Status=='To Do'){
        document.getElementById('todo').selected=true ;
    }
    
    if(Status=='In Progress'){
            document.getElementById('inprogress').selected=true ;
    }
    if(Status=='Done'){
        document.getElementById('done').selected=true ;
    }


        document.getElementById('task-dateU').value = infos[5];
        document.getElementById('task-descriptionU').value = infos[6];

   
}

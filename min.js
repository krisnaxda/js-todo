 var doList = [
        'Coding',
        'Charging Switch',
        'Take The Trashcan'
        ];

    mobil = {type:'honda', color: 'red', };
    console.log(mobil.type);
    
    function showTodo(){
        const todo = document.getElementById("todo");
    
        todo.innerHTML = "";
    
        for(let i = 0; i < doList.length; i++){
        
            var btnDelete = "<a href='#' id='remove' onclick='removeList("+ i + ")'>Delete</a>";
            var btnCheck = "<input type='checkbox' name='check' id='check'>";

            const list = "<tr><td onclick='checked(this)'>" + doList[i] + " </td><td id='delete'>" + btnDelete + "</td></tr>";
    
            todo.innerHTML += list;
        
            console.log(todo.innerHTML);
            
        }

    }
    function checked(element) {
        element.classList.toggle('checked');
    }

//    function checked(id){
//        let lists = document.querySelector("tr");
//        console.log(id);
//
//        lists.addEventListener('click', function(e){
//            const tr = e.target.closest('tr');
//            if(tr){
//                e.target.classList.toggle('checked');
//            }
//        });
//    }
    

    function addList(id){
    const addDo = document.querySelector("input[name=toDo]");

    if (addDo.value === ''){
        alert('Kamu harus mengisi terlebih dulu');
    }else{

        var lastData = doList[doList.length - 1];
        console.log(lastData);

        if(addDo.value == lastData){
            alert('Input tidak boleh sama dengan sebelumnya');
            console.log(doList);
            
            console.log('gagal');
        }else{
            doList.push(addDo.value);
            showTodo();
            console.log(doList);
            console.log('sukses');
            console.log(addDo);
            document.getElementById('inputDo').value = "";
        }
    }
    }

    function removeList(id){
        
        doList.splice(id, 1);
        console.log(doList);
        showTodo();

    }
    
    showTodo();

    function nightMode(){
    document.body.style.backgroundColor = "#111111";
    document.querySelector("div[class=main]").style.backgroundColor = '#111111';
    }
var doList = [
    'Complete the project report',
    'Attend team meeting at 10 AM',
    'Review code for the new feature',
    'Buy groceries: milk, bread, eggs',
    'Schedule a dentist appointment',
    'Read 50 pages of the new book',
    'Work out for at least 30 minutes',
    'Plan weekend trip itinerary'
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

    function nightMode(){    
        const element = document.body;
        const main = document.getElementById('containerMain');
        const slider = document.getElementById('toggle');
        element.classList.toggle("darkMode");
        main.classList.toggle("mainDark");
        console.log(slider);
        console.log(main);
        slider.classList.toggle("toggleDark");
    }

    const toggleNight = document.querySelector('.toggle-state');

    //add event listener
    toggleNight.addEventListener("change", nightMode, false);
    
    showTodo();


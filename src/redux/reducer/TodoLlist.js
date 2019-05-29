const TodoList=(state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            let arr=[...state];
            arr.push(action.text);
            return arr;
      
        default: 
            return state;
    }
}

export default TodoList;
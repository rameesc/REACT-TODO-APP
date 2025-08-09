import type { TodoList } from "../types/type";


export function storeDataLocalStorage(todoData:TodoList[]){
     localStorage.setItem("todo",JSON.stringify(todoData))
}

export function getTodoDataLocalStorage():TodoList[]|[]{

          const local:string=localStorage.getItem('todo')||'[]'
         const data = JSON.parse(local)

         return data

}

export function getFullDate(date:Date){

    if(!date) return ""
    const datee=new Date(date)

      const fullDate=datee?.toLocaleDateString("en-IN")
      const fulltime=datee?.toLocaleTimeString("en-IN")
     

     return  `${fullDate} - ${fulltime}`
}
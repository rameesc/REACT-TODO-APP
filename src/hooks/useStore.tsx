

import {create} from "zustand"
import type { TodoList } from "../types/type"


type Storage ={
    todoList:TodoList[];
    insert:(data:TodoList)=>void;
    manyInsert:(data:TodoList[])=>void
}
export const useStorage=create<Storage>((set)=>({
    todoList:[],
    
    insert:(data)=>set((state)=>({
        todoList:[...state.todoList,{title:data.title,id:data.id,date:data?.date}],
        
    })),
    manyInsert:(data)=>set(()=>({
        todoList:data
    }))

}))


import { useStorage } from "../hooks/useStore"
import type { TodoList } from "../types/type"
import { List } from "./List"



export const TodoTlist = () => {
    const {todoList}=useStorage()

    if(todoList.length==0){
        return null
    }
  return (
    <div className="mt-5 bg-black rounded-[5px] p-5 h-[300px]  overflow-y-auto  flex flex-col gap-2">
        {todoList && todoList.map((item:TodoList)=>(
            <List
              key={item.id}
              id={item.id}
              title={item.title}
              date={item.date}
            />

        ))}
    </div>
  )
}

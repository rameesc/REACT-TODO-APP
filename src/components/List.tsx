import { getTodoDataLocalStorage, storeDataLocalStorage } from "../help"
import { useStorage } from "../hooks/useStore"
import type { TodoList } from "../types/type"


export const List = ({id,title}:TodoList) => {

const {manyInsert}=useStorage()

    const removeTodoSingleList=()=>{
        
        const data=getTodoDataLocalStorage()
        const deleteValue=data.filter((itme)=>itme.id!==id)

          manyInsert(deleteValue)
        storeDataLocalStorage(deleteValue)
    }
  return (
    <div className="bg-white relative p-2 rounded-[5px]">
        <p  className="font-[500] max-w-[200px] break-words p-2">{title}</p>
        <button 
         onClick={removeTodoSingleList}
         className=" absolute top-0 right-[10px] text-red-500 font-bold cursor-pointer text-[20px]">x</button>
    </div>
  )
}

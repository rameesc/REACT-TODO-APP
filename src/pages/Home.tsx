import type React from "react"
import { TodoTlist } from "../components/TodoTlist"
import { useEffect, useState } from "react"

import { getTodoDataLocalStorage, storeDataLocalStorage } from "../help"
import { useStorage } from "../hooks/useStore"


export const Home = () => {
   const {insert,todoList,manyInsert}= useStorage()

  
    const [title,setTitle]=useState<string>('')

   
    useEffect(()=>{
       
       const data=getTodoDataLocalStorage()
        manyInsert(data)
    },[])

    useEffect(()=>{
        if(todoList.length!==0){
           storeDataLocalStorage(todoList)
        }else{
             const data=getTodoDataLocalStorage()
             storeDataLocalStorage(data)

        }
       
      
    },[todoList])

    const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
           e.preventDefault()

           if(title.length==0){
            return alert("Type anything...")
           }

         
        insert({
            title:title,
            id:Date.now()
        })

        setTitle('')

    
          
    }

    const inputHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
      
        const value=e.target.value;
        setTitle(value)
   
    }
  return (
    <div className="flex justify-center pt-[50px]">
        <div>
            <h1 className="text-white text-center text-[35px] font-bold">Todo App</h1>
            <form onSubmit={submitHandler} className="flex mt-5 gap-2" action="">
                <input 
                 onChange={(e)=>inputHandler(e)}
                 className=" border-1 border-white p-1 text-gray-300 tracking-wide rounded-3xl px-2"
                 type="text"
                  name="title"
                  value={title}
                  />
                <button type="submit" className=" cursor-pointer font-[500] hover:scale-[1.1] bg-green-800 p-2 rounded-[5px] text-white px-5 ">Post</button>
            </form>
            <TodoTlist/>
        </div>
    </div>
  )
}

import React from 'react'
import {SlBubble} from 'react-icons/sl'

const ButtonContact = () => {
  return (
    <div className="inline-block">
    <a href="mailto:info@evewolfs.net">
    
      <div className=" flex cursor-pointer align-middle bg-white rounded-3xl px-4 shadow">
      <SlBubble size={12} className="mt-2.5" />  <div className="text-xs font-bold p-2 ">CONTACT</div> 
      </div>
    </a>
  </div>
  )
}

export default ButtonContact
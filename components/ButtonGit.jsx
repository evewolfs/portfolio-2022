import React from 'react'
import {FiGithub} from 'react-icons/fi'

const ButtonGit = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div className="inline-block  m-6">
    <a  onClick={() => openInNewTab('https://github.com/evewolfs/')} >
    
      <div className=" flex cursor-pointer align-middle bg-white rounded-3xl px-4 shadow">
      <FiGithub size={12} className="mt-2.5" />  <div className="text-xs font-bold p-2 ">GITHUB</div> 
      </div>
    </a>
  </div>
  )
}

export default ButtonGit
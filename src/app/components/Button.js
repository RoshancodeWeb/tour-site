import Image from 'next/image'
import React from 'react'
const Button = ({ title,type,icon,name }) => {
  return (
    <div>

      <button  className={title==="LogIn"?`${name} hidden md:block`:`${name}`}  type={type}>
     {icon && <Image className="inline-block pr-2 " src={icon} width={30} height={20} />}
     <label className="lg:text-xl bold-16 whitespace-nowrap cursor-pointer">{title}</label>
     </button>
    </div>
  )
}

export default Button

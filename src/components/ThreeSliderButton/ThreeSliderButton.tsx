import React from "react"
import { useState } from "react"

interface ThreeSliderButtonProps {
    option1:string
    option2:string 
    option3:string 

}

const ThreeSliderButton = (props:ThreeSliderButtonProps) => {

    const { option1,option2,option3 } = props
    const [ buttonTitle, setButtonTitle ] = useState('')
    const [ buttonPosition, setButtonPosition ] = useState('')

    function handleButtonChange(position:string,title:string) {
        setButtonPosition(position)
        setButtonTitle(title)
    }

    return (
        <div className=' bg-black rounded-xl w-48 h-6 flex relative border border-white '>
            <div 
                className={`flex justify-center items-center bg-white rounded-full h-full w-1/3 absolute z-20 top-0 bottom-0 right-2/3 duration-300 text-xs ${buttonPosition} cursor-default border border-black font-bold`}
            >
                {`${buttonTitle}`}
            </div>
            <button 
                className='text-white rounded-full h-full w-1/3 relative z-10 text-xs font-semibold' 
                onClick={() => handleButtonChange('',`${option1}`)}
            >
                {option1}
            </button>
            <button 
                className='w-1/3 text-xs text-white relative z-10 font-semibold' 
                onClick={() => handleButtonChange('translate-x-[100%]',`${option2}`)}
            >
                {option2}
            </button>
            <button 
                className='w-1/3 text-xs text-white relative font-semibold' 
                onClick={() => handleButtonChange('translate-x-[200%]',`${option3}`)}
            >
                {option3}
            </button>
        </div>
    )
}

export default ThreeSliderButton
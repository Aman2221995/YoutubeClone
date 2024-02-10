import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ['All','Gaming','Song','Live','Cricket','Football','News','Cooking','Valentines']

  return (
    <div className='flex'>
      {
        list.map((item,index)=>{
          return(
            <>
              <div key={index}>
                <Button name={item} />
              </div>
            </>
          )
        })
      }
      <Button name="All" />
      
    </div>
  )
}

export default ButtonList
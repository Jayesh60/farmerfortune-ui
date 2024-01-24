import React from 'react'
import Card from '../common/Card'
import tomato from "../../assets/common/tomato.webp"

const Explore = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className="text-5xl md:text-[75px] md:leading-snug font-bold py-10">
        EXPLORE
      </div>

      <div className='flex flex-wrap gap-5'>
        <Card img={tomato} title={"Tomato"} desc={''} owner={"Ram Patil"} quantity={"100kg"} price={'0.55Eth'}/>
        <Card img={tomato} title={"Tomato"} desc={''} owner={"Ram Patil"} quantity={"100kg"} price={'0.55Eth'}/>
        <Card img={tomato} title={"Tomato"} desc={''} owner={"Ram Patil"} quantity={"100kg"} price={'0.55Eth'}/>
        
      </div>
    </section>
  )
}

export default Explore
import Image from 'next/image'
import React from 'react';
import {aboutMeData} from './data/data'


const AboutMe=() => {
  return (
    <main className = "flex flex-col items-center sm:mb-32 mb-16">
      <section className = "flex flex-row sm:w-10/12 mt-10 mb-6 items-center flex-col w-full">
        <div className= "sm:w-1/3 w-full flex justify-center mt-10">
          < Image width = {640} 
          height= {960} aria-label = {"1"}
          alt= {"1"}
          src = {'/images/1.jpeg'} priority = {false}
          
          className = 'profileImage'

          />


          </div>
        <div className = "sm:ml-20 sm:mt-0 sm:w-2/3 w-full mt-6 ml-0 p-10">
          <h2 className = ''>{aboutMeData.title}</h2>
          <p className = 'text-base'>{aboutMeData.body}</p>
        </div>
      </section>
      <section className = 'w-full my-8 bg-blue-light p-10 h-full'>
          
          <p> {aboutMeData.body}</p>
      </section>
      <section className = "flex sm:flex-row sm:w-10/12 p-10 items-center mt-10 mb-4 p-10 w-full flex-col">
        <div className = 'flex flex-col w-full mb-10 sm:mb-0 sm:w-7/12'>
          <p>{aboutMeData.body}</p>
          
          </div>

        <div className = 'sm:w-5/12 sm:ml-10 w-full ml-0 p-10'>
          < Image width = {640} 
          height= {960} aria-label = {"6"}
          alt= {"6"}
          src = {'/images/6.jpg'} priority = {false}
          className='h-250 object-cover w-500'

          />
          </div>
      </section>
      
    </main>
  )
}

export default AboutMe;

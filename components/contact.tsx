"use client"

import React, {useState} from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { METHODS } from 'http'

export const Contact = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [submissionData, setSubmissionData] = useState("Send Message")

    let name:any, value:any
    const getUserData = (event:any) => {
        name = event.target.name
        value = event.target.value
        setUserData({
            ...userData,
            [name]: value
        })
    }
    
    const postData = async(event:any) => {
        event.preventDefault()
         
        const{name,email,message } = userData

        if(name && email && message){
            const res = await fetch("https://contactformportfolio-228da-default-rtdb.asia-southeast1.firebasedatabase.app/FormData.json",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"},
            body:JSON.stringify({
                name,
                email,
                message,})})

            if(res){
                setUserData({
                    name: "",
                    email: "",
                    message: "",
                })
                setSubmissionData(
                    "Message Sent!"
                )
                setTimeout(()=>{
                    setSubmissionData("Send Message")
                },3000)
            }
        }
        else{
            setSubmissionData("Write some Message")
            setTimeout(()=>{
                setSubmissionData("Send Message")
            },2000)
        }
    }

  return (
    <section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      id="contact"
    >
        <SectionHeading>Contact Me</SectionHeading>
        <motion.div
         initial={{
            opacity: 0,
            scale:0.5
          }}
          whileInView={{
            opacity: 1,
            scale:1
          }}
          transition={{
            duration: 1,
          }}>

            <form className='mt-20 flex flex-col' method='POST'
            >
                <input className='h-14 px-4 rounded-lg transition-all'
                name='name'
                type='text'
                maxLength={500}
                placeholder='Your Name'
                value={userData.name}
                onChange={getUserData}
                autoComplete='off'
                required
                />
                <input className='h-14 px-4 my-6 rounded-lg transition-all'
                name='email'
                type='email'
                maxLength={500}
                placeholder='Your Email'
                value={userData.email}
                onChange={getUserData}
                autoComplete='off'
                required
                />
                <textarea className='h-52 rounded-lg p-4 transition-all'
                name= "message"
                placeholder='Your Message'
                value={userData.message}
                onChange={getUserData}
                required
                maxLength={5000}
                />
                <button type="submit" className="py-3 px-5 mt-6 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                onClick={postData} 
                >{submissionData}</button>
            </form>
        </motion.div>


    </section>
  )
}

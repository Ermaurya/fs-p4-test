import React from "react"
import "./login.css"


export const Regsiter = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          

          <form>
            <span>Email address *</span>
            <input type='text' required />
            <span>Username *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <span>Conform Password *</span>
            <input type='password' required />
            <button className='button'>Register</button>
          </form>
        </div>
      </section>
    </>
  )
}

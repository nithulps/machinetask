import React from 'react';
import './LoginPage.css'
import { Button, Label, Select, TextInput } from 'flowbite-react';
import img from '../assets/celeb.png'
export const LoginPage = () => {
  return (
    <div className='lgin-sec ' id='login'>
      <div className='lgin-sec1'>
        <li className='frm-txt1'>Unlock Exclusive Benefits</li>

        <form className="frm flex max-w-md flex-col gap-4">
          <div className='frm'>
            <div className="mb-2 block">
              <Label htmlFor="countries" value="PHONE NUMBER" />
            </div>
            <div className=" flex">
              <Select id="countries" required>
                <option>+91 India</option>
                <option>+22 Canada</option>
                <option>+88 Japan</option>
                <option>+44 China</option>
              </Select>
              <div>
                <TextInput id="pnonenumber" required />
              </div>
            </div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="NAME" />
            </div>
            <TextInput id="email1" type="email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="EMAIL [OPTINAL]" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <Button id='bbtn' type="submit">CONTINEW</Button>
        </form>
        <li className='frm-txt2'>Get ready to recive a secret code (OTP) on your phone</li>
      </div>
      <div>
        <img className='login-img' src={img} alt="" />
      </div>
    </div>

  )
}

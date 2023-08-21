import "./App.css";
import logo from "../src/pics/logo.svg";

import arrow1 from "../src/pics/arrow1.svg";
import arrow2 from "../src/pics/arrow2.svg";
import Back1 from "../src/pics/Back1.svg";
import Back2 from "../src/pics/Back2.svg";
import Back3 from "../src/pics/Back3.svg";
import Back4 from "../src/pics/Back4.svg";

import green1 from "../src/pics/green1.svg";
import green2 from "../src/pics/green2.svg";

import pink1 from "../src/pics/pink1.svg";
import pink2 from "../src/pics/pink2.svg";
import yellow1 from "../src/pics/yellow1.svg";
import yellow2 from "../src/pics/yellow2.svg";
import blue1 from "../src/pics/blue1.svg";
import blue2 from "../src/pics/blue2.svg";

import { useState } from "react";

function App() {
  return (
    <div>
      {Template()}
      <div
        style={{
          background: "#FF0F7A",
        }}
        className='items-center flex flex-col w-full justify-center py-10 '>
        <div
          style={{
            background: "#FF0F7A",
            color: "#FCFE00",
            fontFamily: "Anton",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
          }}>
          Thinking of starting anew in the EU?
        </div>
        <div
          className='px-44 text-justify mt-4 justify-between flex flex-row items-center'
          style={{
            fontFamily: "PT Sans Narrow",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
          }}>
          <div className='w-1/2 text-white pr-4'>
            <strong
              style={{
                color: "#FCFE00",
                fontStyle: "normal",
                fontWeight: "400",
              }}>
              Silk Route is here to help.
            </strong>
            We’re confident in saying we’re one of the best residency programs
            in Europe, and here’s why. We create companies to each individual in
            our care–businesses that establish residency in the European Union
            and ensure long term success. But the genius of our business model
            is that we make this process a luxury experience for you{" "}
            <strong
              style={{
                color: "#FCFE00",
                fontStyle: "normal",
                fontWeight: "400",
              }}>
              (full details available on our services page).
            </strong>
          </div>
          <div className='pr-8'>
            <img src={arrow1} />
          </div>
        </div>
        <div
          className='px-44 text-justify mt-4 justify-between flex flex-row items-center '
          style={{
            fontFamily: "PT Sans Narrow",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
          }}>
          <div className='pr-8'>
            <img src={arrow2} />
          </div>
          <div className='w-1/2 text-white pl-4'>
            Our team of experts know the immigration process inside and out.
            Their objective is to take the fear out of the unknown because let’s
            be honest; uprooting your life to start over in a new country is
            daunting to say the least. Trusting Silk Route eliminates the
            anxiety, confusion, and uncertainty of immigration so all that’s
            left for you to think about is the excitement of new beginnings.
          </div>
        </div>
        <div
          style={{
            background: "#FF0F7A",
            color: "#FCFE00",
            fontFamily: "Anton",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
          }}
          className='mt-10'>
          Are you ready to unlock the possibilities of a new life in the EU?
        </div>
        <div
          style={{
            background: "#FF0F7A",
            color: "#39FF14",
            fontFamily: "Anton",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "120%",
            textDecoration: "underline",
          }}
          className='mt-10 hover:opacity-50 cursor-pointer mb-10'>
          Click here to begin your journey
        </div>
      </div>

      <div
        style={{
          background: "#39FF14",
          color: "#5501EE",
        }}
        className='items-center flex flex-col w-full justify-center py-10 pb-14'>
        <div
          className='items-center '
          style={{
            fontFamily: "Anton",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "60px",
            textTransform: "capitalize",
          }}>
          Company Bio
        </div>
        <div
          className='px-44 text-justify mt-4'
          style={{
            fontFamily: "AnPT Sans Narrow",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            // textTransform: "capitalize",
          }}>
          Silk Route is an immigration consultancy firm that specializes in
          helping individuals gain permanent residency in the European Union via
          business development. We pride ourselves on being one of the best
          residency programs in Europe, and that begins with knowing our clients
          through and through. Taking into account their educational background,
          work experience, and areas of expertise, we design and plant companies
          in Latvia that establish EU residency, all while ensuring control of
          the company stays in the client’s hands. We find great satisfaction in
          providing our customers with the highest quality of support and care
          from the earliest stages of the process to when they finally settle
          into their new homes. Our team of experienced immigration lawyers and
          board of advisors are experts in their respective fields, and because
          they understand the migration process inside and out, they know how to
          take the fear out of the unknown. With headquarters located in the
          Netherlands, and branch offices in Riga and Delhi, Silk Route aims to
          advise, assist, and accompany our clients throughout the entire
          migration process.
        </div>
      </div>
      <div
        style={{
          background: "#0D0D0D",
          color: "white",
        }}
        className='items-center flex flex-col w-full justify-center py-10 '>
        <div
          className='items-center '
          style={{
            fontFamily: "PT Sans Narrow",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
          }}>
          <div className='flex flex-row space-x-8 items-center'>
            <img src={logo} className='mr-20' />
            <a>Home</a>
            <a>About Us</a>
            <a>Services</a>
            <a>Blogs</a>
            <a>FAQ</a>
            <a>Contact</a>
            <a>Terms and Conditions</a>
            <a>Privacy Policy</a>
          </div>
        </div>
        <a className='mt-4' style={{ fontSize: "14px" }}>
          Silk Route. All rights reserved © 2023
        </a>
      </div>
    </div>
  );
}

function Template() {
  const [state, setState] = useState(1);
  function Decrement(current) {
    if (current === 4) {
      setState(3);
    }
    if (current === 3) {
      setState(2);
    }
    if (current === 2) {
      setState(1);
    }
  }
  function Increment(current) {
    if (current === 1) {
      setState(2);
    }
    if (current === 2) {
      setState(3);
    }
    if (current === 3) {
      setState(4);
    }
  }
  return (
    <div className=''>
      <div
        style={{
          color: "white",
          position: "absolute",
        }}
        className=' flex flex-col justify-center py-4 w-full px-24'>
        <div
          className='items-center justify-between flex flex-row '
          style={{
            fontFamily: "PT Sans Narrow",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
          }}>
          <img src={logo} className='mr-20' />
          <div className='flex flex-row space-x-8 items-center'>
            <a
              style={{
                color: "#FCFE00",
              }}>
              Home
            </a>
            <a className='cursor-pointer'>About Us</a>
            <a className='cursor-pointer'>Services</a>
            <a className='cursor-pointer'>Blogs</a>
            <a className='cursor-pointer'>FAQ</a>
            <a className='cursor-pointer'>Contact</a>
          </div>
        </div>
        {/* {Comp1()} */}
      </div>

      <div
        className='flex flex-row justify-between absolute px-36 w-full'
        style={{ marginTop: "620px" }}>
        <img
          src={
            state === 1
              ? green1
              : state === 2
              ? pink1
              : state === 3
              ? yellow1
              : state === 4
              ? blue1
              : null
          }
          onClick={() => Decrement(state)}
          className='cursor-pointer'
        />
        <div className='text-white'>{Box(state)}</div>
        <img
          src={
            state === 1
              ? green2
              : state === 2
              ? pink2
              : state === 3
              ? yellow2
              : state === 4
              ? blue2
              : null
          }
          onClick={() => Increment(state)}
          className='cursor-pointer'
        />
      </div>
      <img
        src={
          state === 1
            ? Back1
            : state === 2
            ? Back2
            : state === 3
            ? Back3
            : state === 4
            ? Back4
            : null
        }
        classname='relative  object-fill	 w-screen'
      />
    </div>
  );
}

export default App;

function Box(state) {
  let color;
  if (state === 1) {
    color = "#39FF14";
  }
  if (state === 2) {
    color = "#FF0F7A";
  }
  if (state === 3) {
    color = "#FCFE00";
  }
  if (state === 4) {
    color = "#5501EE";
  }
  return (
    <div className='flex flex-row space-x-6'>
      <div
        className='h-5 w-20 border-2'
        style={{
          borderColor: color,
          backgroundColor: state === 1 ? color : "transparent",
        }}></div>

      <div
        className='h-5 w-20 border-2'
        style={{
          borderColor: color,
          backgroundColor: state === 2 ? color : "transparent",
        }}></div>
      <div
        className='h-5 w-20 border-2'
        style={{
          borderColor: color,
          backgroundColor: state === 3 ? color : "transparent",
        }}></div>
      <div
        className='h-5 w-20 border-2'
        style={{
          borderColor: color,
          backgroundColor: state === 4 ? color : "transparent",
        }}></div>
    </div>
  );
}

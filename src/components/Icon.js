import React from 'react'

const Icon = (props) => {

  let mkp = "";

  switch(props.type) {
    case "caret-down": 
      mkp = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.6962 7.03125H4.30248C3.84077 7.03125 3.58295 7.51875 3.86889 7.85156L11.5658 16.7766C11.7861 17.032 12.2103 17.032 12.433 16.7766L20.1298 7.85156C20.4158 7.51875 20.158 7.03125 19.6962 7.03125Z" fill="white"/>
      </svg>
  }

  return mkp
}

export default Icon
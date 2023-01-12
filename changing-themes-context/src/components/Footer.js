import React, { useContext } from 'react'
import {ThemeContext} from '../themeContext'

export default function Footer() {
    //3. consumer
    const {color} = useContext(ThemeContext)

  return (
    <div className={`${color}-theme`}>
        <h3>Change Theme Website</h3>
    </div>
  )
}
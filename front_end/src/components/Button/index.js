import React from 'react';
import './styles.css';
import { FiSend } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
const Button = (props) => {
    return (
        <button type={`${props.type}`} id={`${props.id}`} className={`text-white button ${props.className} `}>{props.name} <FiSend className={`${props.displayIconSend}`} /> <FaEye className={`${props.displayIconView}`} /><IoMdAdd className={`${props.displayIconQuestion}`} /> </button>
    )
}

export default Button;
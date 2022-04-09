import styles from 'styled-components'

import {FiSearch} from 'react-icons/fi'
import {FaStar, FaCheck} from 'react-icons/fa'


export const Box = styles.div`
    background-color: #fff;
    box-shadow: 0.1em 0.1em 0.3em #ccc;
    padding:20px;
    min-width:400px;
    border-radius:12px;
    background-image: linear-gradient(#fff, #fff, #ebebeb);

`

export const ContainerInput = styles.div`
    display:flex;
    margin-bottom:10px;    

`

export const Avatar = styles.img`    
    background-color:#ccc;
    width:35px;
    height:35px;
    border-radius:35px;    
`

export const Input = styles.input`
    border:0;
    flex:1;
    outline:none;
    padding:10px;
    font-size: 16px;
    color: #333;

`

export const IconSearch = styles(FiSearch)`    
    font-size:20px;
    padding:10px;    
    padding-right:0;
    color: #999;
    cursor:pointer;
`

export const Ul = styles.ul`
    list-style-type: none;
    border-top:1px dashed #eee;
    margin: 0;
    padding: 0; 
    padding-top:10px; 
    max-height: 265px;
    overflow-x: auto;  
`

export const Li = styles.li`
    display:flex;
    min-height:30px;   
    margin-bottom:5px;
    border-bottom:1px solid #eee;
    transition: opacity 0.2s;
    cursor:pointer;

    &:hover {
        opacity: 0.5;
    } 
`

export const ContainerDescription = styles.div`
    flex:1;
    color: #666;
    
`

export const Button = styles.button`
   background-color:transparent;
   border:0;
   cursor:pointer;
`

export const Favorito = styles(FaStar)`
    color: #cea30e;
    font-size:20px;
`

export const DesFavorito = styles(FaCheck)`
    color: #0ece56;
    font-size:15px;
`

export const A = styles.a`
    color: #0e75ce;
    font-size:11px;
    margin-bottom:5px;
`
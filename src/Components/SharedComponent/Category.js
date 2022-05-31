import React from 'react';
import {Link } from 'react-router-dom';

const Category = ({path}) => {
  const navs=[
    {id:"1",navName:"All"},
    {id:"2",navName:"Personal"},
    {id:"3",navName:"Eco-Museum"},
    {id:"4",navName:"History"},
    {id:"5",navName:"Nature"},
    {id:"6",navName:"Archelogy"},
    {id:"7",navName:"Science"},
    {id:"8",navName:"Art & craft"},
    {id:"9",navName:"Aviation"},
    {id:"10",navName:"Agriculture"},
    {id:"11",navName:"Biography"},
    {id:"12",navName:"Botanical & Zoology"}
  ]
  return (
    <>
    
    <ul className='flex w-full  xl:px-12 flex-wrap bg-gradient-to-r from-amber-500 
                     to-slate-600'>
      {navs.map(list=>{
        return <li className='px-4 py-4 text-white ' key={list.id} ><Link to={`/${path}/${list.navName}`}>{list.navName}</Link></li>
      })}
    </ul>
    
    </>
  )
}

export default Category;
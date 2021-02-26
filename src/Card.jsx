import React, { useState } from 'react';

import './cardstyle.css';
import Todolist from './Mylistcomponent';

const Card=()=>{
          const [item,changeitem]=useState("");
          const [itemarray,appenditem]=useState([]);
        
          const fun=(e)=>{
             changeitem(e.target.value);
          }
          const fun2=()=>{
                  
                   appenditem((oldvalue)=>{
                           
                           
                           return ([...oldvalue,item]);
                   });
                   changeitem("");
                   
          }
          const deleteitems=(id)=>{
            console.log("itemdeleted");
            appenditem((oldarray)=>{
              return oldarray.filter((arrayitem,index)=>{
                return id!=index;
                });
                    
            })
            
          }
          return (
             <>
               <div className="main_container">
                 <div className="to_do_list">
                    <div className="heading">
                      
                      <div className="additem">
                        <h1>todo list</h1>
                        <div className="addingbutton">
                        <input onChange={fun} type="text" placeholder="type an item" value={item}></input>
                        <button className="mybutton" onClick={fun2}>+</button>
                        </div>
                      </div>
                      
                    </div>
                    
                    <ul>
                      {itemarray.map((item,index)=>{
                        return <Todolist 
                        key={index}
                        id={index}
                        value={item}
                        onselect={deleteitems}
                        />;
                      })}
                      
                    </ul>


                 </div>
                 
                 
               </div>
             
             </>
             
          );


};


export default Card;

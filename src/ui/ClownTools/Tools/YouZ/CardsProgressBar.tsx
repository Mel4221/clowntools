import { useState } from "react";
interface CardsPogressBarProps
{
    message:string|any;
    porcent:string|any;
}
export function CardsPogressBar(card:CardsPogressBarProps)
{
    
    return (
        <div className="p-2">
        <small className="text-white d-block mb-1">
        {card.message}
        </small>
        <div className="progress bg-dark bg-opacity-25" style={{ height: '8px' }}>
            <div 
                className="progress-bar bg-white" 
                role="progressbar" 
                style={{ width: `${card.porcent}` }} 
                aria-valuenow={50} 
                aria-valuemin={0} 
                aria-valuemax={100}
            ></div>
        </div>
    </div>
    )
} 
import { useState } from 'react';
import { data } from "./data";
import './App.css'
import { BsTrash } from "react-icons/bs";

function App() {

    const [gift, setGift] = useState(data);

    const removeGift = (id) => {
        let newGift = gift.filter(gift => gift.id !== id);
        setGift(newGift);
    }




    return (<div>
<div className='container'>
    <h1>{gift.length} Great Romantic Date Ideas</h1>
</div>

{gift.map((gift => {
    const {id, item, description, image} = gift;
    return(
        <div key={id}>
            <div className='container'>
                <h2>{id} - {item}</h2>
            </div>

            <div className='container'>
                <p>{description}</p>
            </div>

            <div className='container'>
                <img src={image} alt="gift idea"/>
            </div>

            <div className='container'>
                <button className='trashIcon' onClick={() => removeGift(id)}> <BsTrash /></button>
            </div>


        </div>
    )
}))}
<div className='container'>
<button className='delAll' onClick={() => setGift([])}>Delete all</button>
</div>
    
    </div>)
}

export default App;
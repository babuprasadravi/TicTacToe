import { useState } from "react"

export default function Players({initialName,symbol,isActive}){
    const [playeFrName , setPlayerName] = useState(initialName)
    const [isEdit, setIsEdit] = useState(false);
    
    const handleEditClick = () => {
        setIsEdit((edit) => !edit );
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btncaption = "Edit";
    if(isEdit){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        btncaption = "Save"
    }

    return(
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick} >{btncaption}</button>
        </span>
      </li>
    )
}
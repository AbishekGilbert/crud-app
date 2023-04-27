import { Character } from './Character';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
export function CharacterList({character_list,setcharacters}) {
  const navigate=useNavigate();
  
  return (
    <section className="character-list">
      <div className="character-list-container">
        {character_list.map((el, index) => (
          <Character
            key={index}
            name={el.character_name}
            pic={el.poster}
            description={el.description}
            cast={el.Cast} 
            id={index}
            editbutton={
              <Button 
            
            className="editbtn"
            color="success"
            startIcon={< EditIcon/>}
            onClick={()=>{navigate(`/character/edit/${index}`)}}
            />
            }
            
            deleteButton={
             
            <Button 
            
            className="dltbtn"
            color="error"
            startIcon={<DeleteIcon />
           }
              onClick={()=>{
               
              const copyCharacterList=[...character_list];
              
              copyCharacterList.splice(index,1)
              setcharacters(copyCharacterList)
            }}></Button> }/>
            
        ))
      
        }
          
      </div>

    </section>
  );
}
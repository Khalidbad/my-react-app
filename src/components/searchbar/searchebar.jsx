import { Autocomplete, TextField } from '@mui/material';
import SearchIcon from '../../assets/icons/search';
import './searchebar.css';

export const SearchBar = () => {
    return (
      <>
      <div className="searchform">
      <form className="my-form d-flex" role="search">
      <Autocomplete
                   className="input-form form-control me-2  "

      style={{backgroundColor:'#444444', }}
      options={['Casablanca', 'Agadir', 'Ouled Berhil']}
  
       renderInput={(params) => <TextField {...params} label="Enter Your city"/>}
      />
          
        

      </form>

      </div>
       
      </>
    );
  };
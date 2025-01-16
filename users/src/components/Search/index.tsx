import { TextField, CardContent } from '@mui/material'

const Search = ({ title, onChange }: any) => {

  return (
    <CardContent sx={{width: '820px', alignContent:'center', alignmentBaseline:'central'}}>
      <TextField
        id="standard-search"
        label={`Search ${title}`}
        type="search"
        variant="standard"
        onChange={(e) => onChange(e.target.value)}
      />
    </CardContent>
  );
}

export default Search;

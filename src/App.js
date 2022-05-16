
import './App.css';
import Carlist from './components/Carlist';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  return (

    <div>
      
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="6">
            
          </Typography>
        </Toolbar>

      </AppBar>

      <Carlist />

    </div>


  );
}

export default App;

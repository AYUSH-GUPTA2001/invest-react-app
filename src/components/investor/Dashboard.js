import { useState } from "react";
import './Dashboard.css'
import image2 from '../../assets/women.png'
import image3 from '../../assets/tele.png'
import image4 from '../../assets/search.png'
import CustomizedTables from "./Table";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Dashboard(){






    const [selectedOption, setSelectedOption] = useState('Portfolio');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="investorDashboard">
       <div className="top-right">
        <div className="user-info" onClick={toggleDropdown}>
          <i className="material-icons">person</i>
          <span>Your Profile</span>
        </div>
        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <li>Logout</li>
              {/* Add other options as needed */}
            </ul>
          </div>
        )}
      </div>
      <div className="sidebar">
      <h1 id="logo">INCVEST</h1>
        <ul>
          <li className="sidebar-item" onClick={() => handleOptionClick('Portfolio')}> <i className="material-icons">pie_chart</i> <span>Portfolio</span></li>
          {/* <li className="sidebar-item" onClick={() => handleOptionClick('Transactions')}><i className="material-icons">swap_horiz</i><span>Transactions</span></li> */}
          <li className="sidebar-item" onClick={() => handleOptionClick('New Investment')}><i className="material-icons">description</i><span>New Investment</span></li>
          <li className="sidebar-item" onClick={() => handleOptionClick('Settings')}><i className="material-icons">settings</i><span>Settings</span></li>
        </ul>
      </div>
      <div className="content">
        {selectedOption === 'Portfolio' && <PortfolioContent />}
        {selectedOption === 'Transactions' && <TransactionsContent />}
        {selectedOption === 'New Investment' && <InvestmentContent />}
        {selectedOption === 'Settings' && <SettingsContent />}
      </div>
    </div>
  );
}

function PortfolioContent() {
  return (
    <div className="portfolio">
      
      {/* Add your portfolio content here */}
      
      <div className="rectangle-div">
        <div className="container1">
        <h1 id='holdings'>Holdings</h1>
       
          <p style={{marginBlockStart: '45px',
    marginInlineStart: '42px',
    marginBlockEnd:'40px'}}><span class="bordered-text">Invested Amount : Rs.3000</span>
  
  <span class="bordered-text">Current Value : Rs.6000</span>
   
  <span class="bordered-text">Total Returns : +100%</span></p>
        
        
        </div>
        <CustomizedTables/>
   </div>
    </div>
  );
}

function TransactionsContent() {
  return (
    <div>
      <h1>Transactions Content</h1>
      {/* Add your transactions content here */}
    </div>
  );
}

function InvestmentContent() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };   
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [recommendationsOpen, setRecommendationsOpen] = useState(false);
const handleRecommendationsOpen = () => setRecommendationsOpen(true);
const handleRecommendationsClose = () => setRecommendationsOpen(false);


//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

// const handleModalOpen=(value)=>{
//   handleOpen()
//   handleOptionClick(value)
// }
const handleModalSubmit=()=>{

}

  return (
    <div className="InvestmentContent">
<div className="rectangle-div-investment">
<div class="Investmentcontainer">
  <img src={image2} alt='' class="investmentbox"/>
  <img src={image3} alt='' class="investmentbox"/>
  <img src={image4} alt=''class="investmentbox"/>
</div>
<div class="button-container">
  <button class="my-button" onClick={handleOpen}>Make New Investment</button>
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Fill Mandatory Fields For Getting Recommendations
          </Typography>
         
                <TextField
                
                  margin="dense"
                  autoComplete="given-name"
                  name="investmentAmount"
                  required
                  fullWidth
                  // value={investmentAmount}
                  // error={investmentAmountError}
                  // onChange={e => setInvestmentAmount(e.target.value)}
                  id="Investment Amount"
                  label="Investment Amount"
                  autoFocus
                />
              
              <Grid sx={{mt:1}}>
              <FormControl required fullWidth>
        <InputLabel id="demo-simple-select-label">Risk Capacity</InputLabel>
        <Select
          
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Risk Capacity"
          // value={riskCapacity}
          // error={riskCapacityError}
          // onChange={e => setRiskCapacity(e.target.value)}
        >
          <MenuItem value={'Low Risk'}>Low Risk(Gold,Fixed Income assets,Bonds etc)</MenuItem>
          <MenuItem value={'High Risk'}>High Risk(Equity,Future,Options etc)</MenuItem>
          <MenuItem value={'Medium Risk'}>Medium Risk(Mixed of Low and High Risk)</MenuItem>
          <MenuItem >All of the Above</MenuItem>
        </Select>
      </FormControl>
      </Grid>
              <Button onClick={handleModalSubmit}>Submit</Button>
        </Box>

        {/* {selectedOption==='2'&& <TextField
                
                margin="dense"
                autoComplete="given-name"
                name="investmentAmount"
                required
                fullWidth
                // value={investmentAmount}
                // error={investmentAmountError}
                // onChange={e => setInvestmentAmount(e.target.value)}
                id="Investment Amount"
                label="Investment Amount"
                autoFocus
              />} */}
      </Modal>
  <button class="my-button" onClick={handleRecommendationsOpen} >Recommendations</button>
  <Modal
        open={recommendationsOpen}
        onClose={handleRecommendationsClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><Box sx={style} ><TextField
                
      margin="dense"
      autoComplete="given-name"
      name="investmentAmount"
      required
      fullWidth
      // value={investmentAmount}
      // error={investmentAmountError}
      // onChange={e => setInvestmentAmount(e.target.value)}
      id="Investment Amount"
      label="Investment Amount"
      autoFocus/></Box></Modal>
  <button class="my-button">Payment Proof</button>
</div>
</div>

    </div>
  );
}

function SettingsContent() {
  return (
    <div>
      <h1>Settings Content</h1>
      {/* Add your settings content here */}
    </div>
  );
}

export default Dashboard
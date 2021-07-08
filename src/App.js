import MainContainer from "./MainContainer";
import {useState} from 'react'
import SelectionContainer from "./SelectionContainer";
function App() {
let [lettersConfig,setLettersConfig] = useState([])
 
let [selectedScreen,setSelectedScreen] = useState('SelectionContainer')
 return <div  >
 <div style={{margin:'20px auto', width:'70%'}} >
   <div style={{display:'inline-block'}}>
     <img src="./assets/question.png" alt="question" width='90px'></img>
     </div>
  {selectedScreen==='MainContainer' && <div style={{float:'right',display:'inline-block',cursor:"pointer"}} onClick={()=>setSelectedScreen("SelectionContainer")}>
     <img src="./assets/burguer.png" alt="burguer icon" width="60px"></img>
     </div>}
      {selectedScreen==='SelectionContainer' && <div style={{float:'right',display:'inline-block',cursor:"pointer"}} onClick={()=>setSelectedScreen("MainContainer")}>
     <img src="./assets/check.png" alt="burguer icon" width="80px"></img>
     </div>}
 
     <div style={{clear:'both'}}>
       </div>
       </div>
      { selectedScreen==='MainContainer'&& <MainContainer       lettersConfig={lettersConfig}
       >
     </MainContainer>}
 
    <SelectionContainer style={{display:selectedScreen==='MainContainer'?'none':'inline'}} getTransformToMainContainerLetterArrayProps={setLettersConfig}
       >
     </SelectionContainer>
  
  
  
 </div>
 
}
 
export default App;
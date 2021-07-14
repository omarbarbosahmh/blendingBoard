import MainContainer from "./MainContainer";
import {useState,useRef} from 'react'
import SelectionContainer from "./SelectionContainer";
function App() {
 //document.body.style.zoom = "80%";
let [lettersConfig,setLettersConfig] = useState([])
 
let [selectedScreen,setSelectedScreen] = useState('openerScreen')
const childRef = useRef();
let choosePreset= (presset) =>{
 
childRef.current.choosePresetExternal(presset)
}
 return <div  >
 
   {selectedScreen==='openerScreen'&&<div style={{height:"100vh",  display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',}}>
     <div ><div style={{border: 'solid 1px black',cursor:'pointer',padding:'10px'}} onClick={()=>setSelectedScreen("SelectionContainer")}>Setup Area</div><div style={{border: 'solid 1px black',cursor:'pointer',padding:'10px'}}  onClick={()=>setSelectedScreen("MainContainer")}>Main Screen</div></div>
     </div>}
 <div style={{margin:'20px auto', width:'70%'}} >
   <div style={{display:'inline-block'}}>
     <img src="/assets/question.png" alt="question" width='50px'></img>
     </div>
  {selectedScreen==='MainContainer' && <div style={{float:'right',display:'inline-block',cursor:"pointer"}}  onClick={()=>setSelectedScreen("SelectionContainer")}>
     <img src="/assets/burguer.png" alt="burguer icon" width="50px"></img>
     </div>}
      {selectedScreen==='SelectionContainer' && <div style={{float:'right',display:'inline-block',cursor:"pointer"}} onClick={()=>setSelectedScreen("MainContainer")}>
     <img src="/assets/check.png" alt="burguer icon" width="50px"></img>
     </div>}
 
     <div style={{clear:'both'}}>
       </div>
       </div>
      { selectedScreen==='MainContainer'&& <MainContainer     emitChoosePreset={choosePreset}   lettersConfig={lettersConfig}
       >
     </MainContainer>}
 
    <SelectionContainer  ref={childRef} style={{display:selectedScreen==='MainContainer'?'none':'inline'}} getTransformToMainContainerLetterArrayProps={setLettersConfig}
       >
     </SelectionContainer>
  
  
  
 </div>
 
}
 
export default App;
 


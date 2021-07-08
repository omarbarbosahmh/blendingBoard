import Container from "./Container";
import {useState} from 'react'
export default function MainContainer({lettersConfig,style}) {
 let [lettersArray,setLettersArray] = useState([...lettersConfig])
 let [selectedLetters,setSelectedLetters] = useState([])
 let [wordDisplayed,setWordDisplayed] = useState([])
 let [wordHistory,setWordHistory]= useState([])
 let onLetterClick= (letter,index)=>{
 
  
 
  
   console.log(letter,index)
   let cloneWordDisplayed= [...wordDisplayed]
 
 
   let cloneLettersArray = [...lettersArray]
 
if(lettersArray[index].selectedLetters.some(selectedLetter=>selectedLetter===letter)){
 
      cloneLettersArray[index].selectedLetters = []
      cloneWordDisplayed[index]=''
   }else{
cloneLettersArray[index].selectedLetters = [letter]
 cloneWordDisplayed[index]=letter
   }
   setSelectedLetters(cloneLettersArray)
setWordHistory([...wordHistory,cloneWordDisplayed.join('')])
   setWordDisplayed(cloneWordDisplayed)
  
 
 }
 return <div style={style? style:{}}>
   <div style={{textAlign:'center',fontWeight:'600',fontSize:"80px"}}>
    
     {wordDisplayed.length === 0 || wordDisplayed.join() ===''  ? 'Start Typing...':wordDisplayed.join('')}
   </div>
   <div style={{margin:"20px"}}>
 
<div style={{ width:'90%', float:"left",textAlign:'center'}}>
<div style={{display: 'inline-block'}}>
    {lettersArray.map((letters,index)=>{return <Container
       key = {index}
       style = {letters.style?letters.style:{}}
       letters = {letters.letters}
       selectedLetters = {letters.selectedLetters}
       color = {letters.color}
       onLetterClick={(letter)=>onLetterClick(letter,index)}
       blockedLetters={letters.blockedLetters}
       >
     </Container>})
    
     }
      <div style={{clear:'both'}}></div>
     </div>
   
</div>
<div style={{   float:"left",display: 'inline-block'}}>
  {[...wordHistory].reverse().map(word=>{return <p style={{fontWeight:'600', fontSize:'30px'}}>{word}</p>})}
</div>
<div style={{clear:'both'}}></div>
   </div>
  
    
   
 </div>
}

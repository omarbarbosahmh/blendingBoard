import LetterButton from "./LetterButton";
import {useState} from 'react'
import Container from "./Container";
 
export default function SelectionBlock({getAllSelectedLetters,initialConfig,getSelectedLettersByColor,getSelectedAllOrNoneLettersByColor,desSelectLetterByColor}) {
 
 let [lettersArray,setLettersArray] = useState(
initialConfig)
 let [selectedLetters,setSelectedLetters] = useState([])
 
 let emitAllLetters=(allLettersArray)=>{
   //console.log(lettersArray)
let allLetters = [...allLettersArray].map(({selectedLetters})=>{
//console.log(selectedLetters)
return selectedLetters
})
allLetters= allLetters.flat(1)
//console.log(allLetters)
   getAllSelectedLetters(allLetters)
}
 
let emitSelectedLettersByColor=(color,selectedLetters)=>{
   getSelectedLettersByColor(color,selectedLetters)
}
 
 let onLetterClick= (letter,index,color,selected)=>{
   //console.log(letter,index)
   let cloneLettersArray = [...lettersArray]
     if(lettersArray[index].selectedLetters.some(selectedLetter=>selectedLetter===letter)){
           cloneLettersArray[index].selectedLetters = cloneLettersArray[index].selectedLetters.filter(selectedLetter=>selectedLetter!==letter)      
         }else{
     cloneLettersArray[index].selectedLetters = [...cloneLettersArray[index].selectedLetters,letter]
         }
        
         setSelectedLetters(cloneLettersArray)
         emitAllLetters(cloneLettersArray)
         if(!selected){
           emitSelectedLettersByColor(color,cloneLettersArray[index].selectedLetters)
         }else{
desSelectLetterByColor(color,letter)
         }
       
        
 
 }
 let selectAll= ()=>{
      let cloneLettersArray = [...lettersArray]
      cloneLettersArray.map(letterArrayObj=>{
     letterArrayObj.selectedLetters = [...letterArrayObj.letters]
  
   
 
return letterArrayObj
      })
        setSelectedLetters(cloneLettersArray)
        emitAllLetters(cloneLettersArray)
          getSelectedAllOrNoneLettersByColor('all')
 }
 
   let selectNone= ()=>{
      let cloneLettersArray = [...lettersArray]
      cloneLettersArray.map(letterArrayObj=>{
letterArrayObj.selectedLetters = []
 
return letterArrayObj
      })
        setSelectedLetters(cloneLettersArray)
        emitAllLetters(cloneLettersArray)
        getSelectedAllOrNoneLettersByColor('none')
 }
 return <div>
 
   <div style={{margin:"20px"}}>
<div style={{  width:'100%', float:"left",display: 'inline-block'}}>
 <div style={{width:'130px'}}>
  <LetterButton letter="All" onClick={selectAll} style={{float:'left'}} ></LetterButton>
   <LetterButton letter="None" onClick={selectNone} style={{float:'left'}}></LetterButton>
   </div>
</div>
<div style={{ width:'100%', float:"left",textAlign:'center'}}>
 
<div style={{display: 'inline-block'}}>
    {lettersArray.map((letters,index)=>{return <Container
       key = {index}
       style = {letters.style?letters.style:{}}
       letters = {letters.letters}
       selectedLetters = {letters.selectedLetters}
       color = {letters.color}
       onLetterClick={(letter)=>onLetterClick(letter,index,letters.color,letters.selectedLetters.some(selectedLetter=>selectedLetter===letter))}
       blockedLetters={letters.blockedLetters}
       >
     </Container>})
    
     }
      <div style={{clear:'both'}}></div>
     </div>
   
</div>
 
<div style={{clear:'both'}}></div>
   </div>
  
    
   
 </div>
}
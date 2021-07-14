import LetterButton from "./LetterButton";
import {useState, useEffect} from 'react'
import Container from "./Container";
 
export default function SelectionBlock({getAllSelectedLetters,initialConfig,getSelectedLettersByColor,getSelectedAllOrNoneLettersByColor,desSelectLetterByColor,uniqueId}) {
 
 let [lettersArray,setLettersArray] = useState(
initialConfig)
 let [selectedLetters,setSelectedLetters] = useState([])
 let [calculateH,setCalculateH] = useState(false)
 
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
 
let emitSelectedLettersByColor=(color,selectedLetters,allLetters)=>{
   getSelectedLettersByColor(color,selectedLetters,allLetters)
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
 
 let selectByIndex= (index)=>{
 
        let cloneLettersArray = [...lettersArray]
     
   if( cloneLettersArray.[index].selectedLetters.length === [... cloneLettersArray.[index].letters].length){
cloneLettersArray.[index].selectedLetters =[]
   }else{
     cloneLettersArray.[index].selectedLetters = [... cloneLettersArray.[index].letters]
   }
 
    console.log(index)
    console.log(cloneLettersArray.[index])
   
 
        setSelectedLetters(cloneLettersArray)
        emitAllLetters(cloneLettersArray)
        //alert(JSON.stringify( cloneLettersArray[index].selectedLetters))
       emitSelectedLettersByColor(cloneLettersArray[index].color,cloneLettersArray[index].selectedLetters,cloneLettersArray[index].letters)
          //getSelectedAllOrNoneLettersByColor('all')
 }
 useEffect(() => {
 setLettersArray(initialConfig);
}, [initialConfig]);
useEffect(() => {
  function debounce(func, wait, immediate) {
 var timeout;
 
 return function executedFunction() {
   var context = this;
   var args = arguments;
    
   var later = function() {
     timeout = null;
     if (!immediate) func.apply(context, args);
   };
 
   var callNow = immediate && !timeout;
    clearTimeout(timeout);
 
   timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
 };
};
 
var returnedFunction = debounce(function() {
   setCalculateH(!calculateH)
}, 500);
 
window.addEventListener('resize', returnedFunction)})
 return <div key={uniqueId}>
   <div id={'container-'+uniqueId} style={{margin:"20px",position: 'relative'}}>
 
 
 <div style={{marginTop:(document.getElementById('container-'+uniqueId)?.clientHeight/2)-20 + 'px', width:'9%',float:"left"}}>
   <LetterButton letter="None" onClick={selectNone} style={{float:'right'}}></LetterButton>
  <LetterButton letter="All" onClick={selectAll} style={{float:'right'}} ></LetterButton>
   <div style={{clear:"both"}}></div >
   </div>
 
<div style={{ width:'90%', float:"left",textAlign:'center'}}>
 
<div style={{display: 'inline-block'}}>
     {lettersArray.map((letters,index)=>{return <div style={{float:'left', marginRight:'20px', textAlign:"left"}}><span onClick={()=>selectByIndex(index)} style={{cursor:"pointer"}}>{letters.categoryName} </span>
       <br /><div style={{border:"solid 2px green", borderRadius:"10%", padding:"20px"}}>
     
  
       <div style={{display:"flex",flexDirection:"column"}}>   
    
   { letters.subCategories.length ===0 && <Container
       key = {index}
       style = {letters.style?letters.style:{}}
       letters = {letters.letters}
       selectedLetters = {letters.selectedLetters}
       color = {letters.color}
       onLetterClick={(letter)=>onLetterClick(letter,index,letters.color,letters.selectedLetters.some(selectedLetter=>selectedLetter===letter))}
       blockedLetters={letters.blockedLetters}
       >
     </Container>}
    
       {letters.subCategories.map((subCategoryletters,index2)=>{return <div style={{float:'left', marginRight:'20px'}}>
   
      {subCategoryletters.subCategoryName}
      <br />
       <br />
     
      <Container
       key = {index2}
       style = {letters.style?letters.style:{}}
       letters = {subCategoryletters.letters}
       selectedLetters = {letters.selectedLetters}
       color = {letters.color}
       onLetterClick={(letter)=>onLetterClick(letter,index,letters.color,letters.selectedLetters.some(selectedLetter=>selectedLetter===letter))}
       blockedLetters={letters.blockedLetters}
       >
     </Container>
    
   
    
     </div>})}
      </div>
     </div></div>})
     }
 
 
    
    
      <div style={{clear:'both'}}></div>
     </div>
   
</div>
 
<div style={{clear:'both'}}></div>
   </div>
  
    
   
 </div>
 
}


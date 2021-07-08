import {useState, useEffect} from 'react'
import SelectionBlock from "./SelectionBlock";
export default function SelectionContainer({getTransformToMainContainerLetterArrayProps,style}) {
 
 
 
   let initialConfigs= [[
   {letters:['','b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],color:'0,0,255',selectedLetters:['','b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['','a','e','i','o','u','y'],color:'79, 255, 67',selectedLetters:['','a','e','i','o','u','y'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['','b','d','g','k','m','n','p','s','t','x'],color:'255,0,0',selectedLetters:['','b','d','g','k','m','n','p','s','t','x'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['','e'],color:'255,0,255',selectedLetters:['','e'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
 ],[
   {letters:['ch','sh','th','ph','wh'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['ar','er','ir','oi','ur'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['f','l','s','z','ff','ll','ss','zz','c','r','v'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['a','es'],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
 ],[
   {letters:['sc','sk','sl','sm','sn','sp','st','sw','br','cr','dr','fr','gr','pr','fr','gr','pr','tr','bl','cl','fl','gl','pl'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['ai','ea','ee','ie','oa','oi','oo','ou','ow'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['ct','ft','ld','lp','lt','mp','nd','nt','pt','sk','sp','st'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:[],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
 ],[
   {letters:['shr','thr','scr','spl','spr','squ','str'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['au','aw','ei','eu','ew','ue','ui'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:['ch','ph','sh','th','ck','ng'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
   {letters:[],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
 ],[
    {letters:['gn','kn','wr','qu'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
    {letters:['aigh','augh','igh','eigh','ough','oe','ay','ey','oy'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
    {letters:['mb','nk','dge','tch'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
    {letters:[],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
  ]]
 
 let initialLettersByColor ={}
 let allLettersByColorAndRow = []
let allLetters = [...initialConfigs].map((initialConfigObj,index)=>{
 let obj= {}
 initialConfigObj.map(innerObj=>{
  obj[innerObj.color]= {letters:innerObj.letters}
 
})
allLettersByColorAndRow.push(obj)
initialConfigObj = initialConfigObj.map(({selectedLetters})=>selectedLetters).flat()
 
 
return initialConfigObj
})
//allLetters= allLetters.flat()
let allLettersConfigFlat= initialConfigs.flat(1)
allLettersConfigFlat.map(letterConfig=>{
 let arraySelectedLetters =   [...initialLettersByColor[letterConfig.color] && initialLettersByColor[letterConfig.color].selectedLetters?initialLettersByColor[letterConfig.color].selectedLetters:[] ,...letterConfig.selectedLetters]
 let setSelectedLetters= new Set(arraySelectedLetters)
  arraySelectedLetters=Array.from(setSelectedLetters)
  let arrayLetters =   [...initialLettersByColor[letterConfig.color] && initialLettersByColor[letterConfig.color].letters?initialLettersByColor[letterConfig.color].letters:[] ,...letterConfig.letters]
 let setLetters= new Set(arrayLetters)
  arrayLetters=Array.from(setLetters)
  initialLettersByColor[letterConfig.color] = {selectedLetters:arraySelectedLetters}
 
})
 
 
 let [allSelectedLetters,setAllSelectedLetters]=useState([...allLetters])
 let [allSelectedLettersByColor,setSelectedLettersByColor]=useState(initialLettersByColor)
 
 let getAllSelectedLetters=(selectedLetters,index)=>{
   console.log(selectedLetters,index)
    let cloneAllSelectedLetters = [...allSelectedLetters]
    cloneAllSelectedLetters[index] = selectedLetters
    
 
setAllSelectedLetters(cloneAllSelectedLetters)
 
 }
 
 let getSelectedLettersByColor = (color,selectedLetters)=>{
   console.log(color,selectedLetters)
  let cloneAllSelectedLettersByColor ={...allSelectedLettersByColor}
 let arrayLetters=[...cloneAllSelectedLettersByColor[color].selectedLetters,...selectedLetters]
  let setLetters= new Set(arrayLetters)
  arrayLetters=Array.from(setLetters)
  cloneAllSelectedLettersByColor[color] = {selectedLetters:arrayLetters}
  setSelectedLettersByColor(cloneAllSelectedLettersByColor)
  transformToMainContainerLetterArrayProps(cloneAllSelectedLettersByColor)
}
 
let desSelectLetterByColor=(color,letter)=>{
 //alert(color + letter)
let cloneAllSelectedLettersByColor ={...allSelectedLettersByColor}
let arrayLetters=  [...cloneAllSelectedLettersByColor[color].selectedLetters]
 
const index = arrayLetters.indexOf(letter);
if (index > -1) {
 arrayLetters.splice(index, 1);
}
   let setLetters= new Set(arrayLetters)
  arrayLetters=Array.from(setLetters)
  cloneAllSelectedLettersByColor[color] = {selectedLetters:arrayLetters}
setSelectedLettersByColor(cloneAllSelectedLettersByColor)
transformToMainContainerLetterArrayProps(cloneAllSelectedLettersByColor)
}
let getSelectedAllOrNoneLettersByColor = (allOrNone,index)=>{
  let cloneAllSelectedLettersByColor ={...allSelectedLettersByColor}
 
let arrayLetters =[]
      for(var k in allSelectedLettersByColor) {
        if(allOrNone==='none'){
         // alert(k)
arrayLetters= [...cloneAllSelectedLettersByColor[k].selectedLetters].filter(letter=>{
  return !allLettersByColorAndRow[index][k].letters.some(letter2=>letter2===letter)
})
        }else{
        //  alert('index'+index+'color'+k)
        //   alert(JSON.stringify(allLettersByColorAndRow[index]))
arrayLetters=  [...cloneAllSelectedLettersByColor[k].selectedLetters, ...allLettersByColorAndRow[index][k].letters]
        }
   let setLetters= new Set(arrayLetters)
  arrayLetters=Array.from(setLetters)
  cloneAllSelectedLettersByColor[k] = {selectedLetters:arrayLetters}
      }
     
  setSelectedLettersByColor(cloneAllSelectedLettersByColor)
  transformToMainContainerLetterArrayProps(cloneAllSelectedLettersByColor)
}
 
let transformToMainContainerLetterArrayProps = (allSelectedLettersByColor)=>{
   let transformed=[]
   for(var k in allSelectedLettersByColor) {
 
       let lettersConfig = {letters:allSelectedLettersByColor[k].selectedLetters,color:k,selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px'}}
       transformed.push(lettersConfig)
}
//console.log(transformed)
getTransformToMainContainerLetterArrayProps(transformed)
 
}
 
useEffect(() => {
   transformToMainContainerLetterArrayProps(initialLettersByColor);
 }, []);
 return <div style={style? style:{}}>
        <div style={{textAlign:'center',fontWeight:'600',fontSize:"80px"}}>
    
     {allSelectedLetters.flat(1).length} Selected
   </div>
 {initialConfigs.map((initialConfig,index)=><SelectionBlock initialConfig={initialConfig} desSelectLetterByColor={desSelectLetterByColor} getSelectedLettersByColor={getSelectedLettersByColor} getSelectedAllOrNoneLettersByColor={(allOrNone)=>getSelectedAllOrNoneLettersByColor(allOrNone,index)} getAllSelectedLetters={(lettersArray)=>getAllSelectedLetters(lettersArray,index)}></SelectionBlock>)}
   
  
  
 </div>
 
}

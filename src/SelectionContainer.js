import {useState, useEffect,useImperativeHandle,forwardRef} from 'react'
import SelectionBlock from "./SelectionBlock";
export default forwardRef((props,ref)=> {
let {getTransformToMainContainerLetterArrayProps,style}= props
useImperativeHandle(ref, () => ({
 
   choosePresetExternal(preset) {
     console.log(preset)
     choosePreset(preset);
   }
 
 }));
let [presets ,setPresets]=useState(!JSON.parse(localStorage.getItem('presets'))?[]:JSON.parse(localStorage.getItem('presets')))
let [selectedPreset ,setSelectedPreset]=useState(localStorage.getItem('selectedPreset')?localStorage.getItem('selectedPreset'):'Default');
 let [presetName ,setPresetName]=useState()
   let [reset ,setReset]=useState(false)
   let [uniqueId, setUniqueId] = useState(Date.now())
    let defaultConfigs= [[
     {categoryName:"Consonants",subCategories:[],letters:['','b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],color:'0,0,255',selectedLetters:['','b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Short Vowels",subCategories:[],letters:['e','i','o','u','y'],color:'79, 255, 67',selectedLetters:['e','i','o','u','y'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Consonants",subCategories:[],letters:['','b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],color:'255,0,0',selectedLetters:['','b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Endings",subCategories:[{subCategoryName:"subCategoryName",letters:['e','ed','es','ing','s']}],letters:['e','ed','es','ing','s'],color:'255,0,255',selectedLetters:['e'],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
   ],[
     {categoryName:"Blends", subCategories:[],letters:['bl','br','cl','cr','dr','fl','fr','gl','gr','pl','pr','sc','scr','shr','sk','sl','sm','sn','sp','spl','squ','st','str','sw','thr','tr'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Long Vowels", subCategories:[],letters:['a','ai','aigh','ay','e','ea','eau','ee','ei','eigh','ew','ey','i','ie','igh','o','oa','oe','oo','ough','ow','u','ue','ui','y'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Double Consonants", subCategories:[],letters:['bb','dd','ff','gg','ll','mm','nn','pp','rr','ss','tt','zz'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"categoryName", subCategories:[],letters:[],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
   ],[
     {categoryName:"Consonant Diagraphs", subCategories:[],letters:['ch','gh','gn','kn','ph','qu','sh','th','wh','wr'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"r-Controlled Vowels", subCategories:[],letters:['air','ar','are','ear','eer','er','ir','oar','oor','or','ore','our','ur'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Blends", subCategories:[],letters:['mp','nd','ng','nk','nt','nx','sp','st'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"categoryName", subCategories:[],letters:[],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
   ],[
     {categoryName:"Consonant Triagraphs", subCategories:[],letters:['scr','shr','spl','spr','squ','str','thr'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Vowel Teams", subCategories:[],letters:['ai','aigh','au','augh','aw','ay','ea','eau','ee','ei','eigh','eu','ew','ey','ie','igh','oa','oe','oo','ough','ow','ue','ui'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"Consonant Diagraphs", subCategories:[],letters:['ch','ck','gh','gn','mb','ph','sh','th','ve'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
     {categoryName:"categoryName", subCategories:[],letters:[],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
   ],[
      {categoryName:"categoryName", subCategories:[],letters:['gn','kn','wr','qu'],color:'0,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
      {categoryName:"Diphthongs", subCategories:[],letters:['oi','ou','ow','oy'],color:'79, 255, 67',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(4,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
      {categoryName:"Consonant Tiagraphs", subCategories:[],letters:['dge','tch'],color:'255,0,0',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}},
      {categoryName:"categoryName", subCategories:[],letters:[],color:'255,0,255',selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px', width:'300px'}}
    ]]
    
   let [initialConfigs,setInitialConfigs] =useState(defaultConfigs)
   //subCategories:[{subCategoryName:"subcategoryName", letters:[]}]
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
 
 let getSelectedLettersByColor = (color,selectedLetters,allLetters)=>{
   console.log(color,selectedLetters)
  let cloneAllSelectedLettersByColor ={...allSelectedLettersByColor}
 let arrayLetters=[...cloneAllSelectedLettersByColor[color].selectedLetters,...selectedLetters]
 
 
 if(selectedLetters.length===0 && allLetters){
   arrayLetters= arrayLetters.filter(letter=>{
     return !allLetters.some(letter2=>letter2===letter)
   })
   console.log(arrayLetters)
  
 }
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
// alert(JSON.stringify(allSelectedLettersByColor))
   let transformed=[]
   for(var k in allSelectedLettersByColor) {
 
       let lettersConfig = {letters:allSelectedLettersByColor[k].selectedLetters,color:k,selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px'}}
       transformed.push(lettersConfig)
}
//console.log(transformed)
getTransformToMainContainerLetterArrayProps(transformed)
 
}
 
let savePreset = ()=>{
 try {
  
 
     let transformed=[]
   for(var k in allSelectedLettersByColor) {
 
       let lettersConfig = {letters:allSelectedLettersByColor[k].selectedLetters,color:k,selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px'}}
       transformed.push(lettersConfig)
}
let presets=localStorage.getItem('presets');
presets =!JSON.parse(presets)?[]:JSON.parse(presets)
presets= Array.from(new Set([...presets,presetName]))
localStorage.setItem('presets',JSON.stringify(presets) )
localStorage.setItem('selectedPreset', presetName)
setSelectedPreset(presetName)
setPresets(presets)
localStorage.setItem(presetName, JSON.stringify({preset:allSelectedLettersByColor,transformed}))
 } catch (error) {
   alert(error)
 }
}
 
let deletePreset = ()=>{
  localStorage.removeItem(selectedPreset)
 localStorage.setItem('selectedPreset', '')
 setSelectedPreset(null)
 let newPreset= [...presets]
 newPreset.splice(newPreset.indexOf(selectedPreset),1)
 localStorage.setItem('presets',JSON.stringify(newPreset) )
 setPresets(newPreset)
 choosePreset('Default')
}
 
let choosePreset = (presetName)=>{
 let initialConfigs = []
 setUniqueId(Date.now())
 localStorage.setItem('selectedPreset', presetName)
 setSelectedPreset(presetName);
 
 if(presetName==='Default'){
   setInitialConfigs(defaultConfigs)
   initialConfigs=[...defaultConfigs]
   setAllSelectedLetters(defaultConfigs)
 }else{
     let presetSaved= (JSON.parse(localStorage.getItem(presetName))).preset
console.log(presetSaved)
 let defaultConfigsClone =[...defaultConfigs]
for (var i = 0; i < defaultConfigsClone.length; i++) {
  let defaultConfigArray=     [...defaultConfigsClone[i]]
 defaultConfigArray= defaultConfigArray.map(defaultConfigObj=>{
  let copyDefaultConfigObj = {...defaultConfigObj}
  //alert(JSON.stringify(presetSaved[copyDefaultConfigObj.color]) + JSON.stringify(copyDefaultConfigObj.selectedLetters)   + JSON.stringify(presetSaved[copyDefaultConfigObj.color].selectedLetters.filter(presetSavedLetter=>copyDefaultConfigObj.selectedLetters.includes(presetSavedLetter))))
  copyDefaultConfigObj.selectedLetters= [...presetSaved[copyDefaultConfigObj.color].selectedLetters.filter(presetSavedLetter=>copyDefaultConfigObj.letters.includes(presetSavedLetter))]
  return copyDefaultConfigObj
  })
  defaultConfigsClone[i] =defaultConfigArray
}
 console.log(defaultConfigsClone)
 initialConfigs=[...defaultConfigsClone]
setInitialConfigs([...defaultConfigsClone])
 
 }
 
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
 
 
 setAllSelectedLetters([...allLetters])
 setSelectedLettersByColor(initialLettersByColor)
  transformToMainContainerLetterArrayProps(initialLettersByColor);
 setUniqueId(Date.now())
}
 
 
 
 
useEffect(() => {
     let transformed=[]
   for(var k in initialLettersByColor) {
 
       let lettersConfig = {letters:initialLettersByColor[k].selectedLetters,color:k,selectedLetters:[],blockedLetters:[],style:{display:'grid', gridTemplateColumns:'repeat(5,auto)',gridGap:'5px',float:'left', marginRight:'20px'}}
       transformed.push(lettersConfig)
}
 
localStorage.setItem('Default', JSON.stringify({preset:allSelectedLettersByColor,transformed}))
let presetX = localStorage.getItem('selectedPreset')
if (!presetX || presetX === 'null')
{
  presetX = 'Default'
}else{
  presetX = localStorage.getItem('selectedPreset')
}
  choosePreset(presetX)
 
 }, []);
 return <div style={style? style:{}}>
         <div>
           <select name="preset" value={selectedPreset} onChange={(e)=>choosePreset(e.target.value)}>
             <option value={'Default'}>Default</option>
             {presets.map(preset=><option value={preset}>{preset}</option>)}
            </select>
            <input type="text" value={presetName} onChange={(e)=>setPresetName(e.target.value)} />
           <button onClick={savePreset}>Save as preset</button>
           <button onClick={deletePreset}>Delete preset</button>
 
          
         </div>
        <div style={{textAlign:'center',fontWeight:'600',fontSize:"80px"}}>
    
     {allSelectedLetters.flat(1).length} Selected
   </div>
  <div style={{ height:"78vh", overflowY:"auto"}}>
 {!reset && initialConfigs.map((initialConfig,index)=><SelectionBlock uniqueId={index} initialConfig={initialConfig} desSelectLetterByColor={desSelectLetterByColor} getSelectedLettersByColor={getSelectedLettersByColor} getSelectedAllOrNoneLettersByColor={(allOrNone)=>getSelectedAllOrNoneLettersByColor(allOrNone,index)} getAllSelectedLetters={(lettersArray)=>getAllSelectedLetters(lettersArray,index)}></SelectionBlock>)}
 </div>
  
  
  
 </div>
 
})
 
 
 


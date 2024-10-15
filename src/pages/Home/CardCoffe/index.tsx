import { CardCartButton, CardCointainer, CardDescription, CardPrice, CardTag, CardTags, CardTitle, Cardfunction, Cardinfo, ContainerPrice, TextAmount } from "./styles"

import { Coffe } from "../../../contexts/CoffeContext"
import { Plus, Minus ,ShoppingCartSimple } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import { CoffeContext } from "../../../contexts/CoffeContext"


interface CardCoffeProps{
  coffe: Coffe
}

export function CardCoffe ({coffe}: CardCoffeProps){
  const [amount, setamount] = useState(coffe.amount)
  const [enablebutton, setEnablebutton] = useState(false)
  const {addCoffe} = useContext(CoffeContext)
  
  function addamount(){
    setamount(amount + 1)
  }  
  
  function removeamount(){
    if(amount > 0){
      setamount(amount - 1)
    }
  }
  function handleAddCoffe(){
    addCoffe(coffe,amount)
  }
  
  
  useEffect(()=>{
    if(amount > 0){
      setEnablebutton(true)
    }
    else{
      setEnablebutton(false)
    }
  },[amount])


  return(
    <CardCointainer>
      <img src={coffe.img} alt="" />
      <Cardinfo>
        <CardTags>
          {coffe.tags.map((tag,indice)=>{
            return(
              <CardTag key={indice}>{tag}</CardTag>
            )
          })} 
        </CardTags>
        
        <CardTitle>{coffe.title}</CardTitle>
        <CardDescription>{coffe.descricao}</CardDescription>
        <CardPrice>
          <ContainerPrice>
            <span>$</span>
            <p>9,90</p>
          </ContainerPrice>
          <Cardfunction >
            <div>
              <button type="button" onClick={removeamount}>
                <Minus size={14} weight="light"/>
              </button>
              <TextAmount>{amount}</TextAmount>
              <button type="button" onClick={addamount}>
                <Plus size={14} weight="light"/>
              </button>
            </div>
            <CardCartButton disabled={!enablebutton} onClick={handleAddCoffe}>
              <ShoppingCartSimple size={22} weight="fill"/>
            </CardCartButton>
          </Cardfunction >
        </CardPrice>
      </Cardinfo>
    </CardCointainer>
      
  )
}
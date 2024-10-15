import { Plus, Minus, Trash} from "phosphor-react"
import { ContainerCoffe, ContainerCoffeInfo } from "./styles"
import {Coffe, CoffeContext} from '../../../contexts/CoffeContext'
import { useContext } from "react"


export function CoffeItem({coffe}: any){
  const {addQuantity, removeQuantity, removeCoffe} = useContext(CoffeContext)
  function handleRemoveQuantity (){
    removeQuantity(coffe)
  }
  function handleAddQuantity (){
    addQuantity(coffe)
  }
  function handleRemoveCoffe (){
    removeCoffe(coffe)
  }
  
  return(
    <ContainerCoffe>
      <div>
        <img src={coffe.img} alt="" />
        <ContainerCoffeInfo>
          <p>{coffe.title}</p>
          <div>
            <div>
              <button type="button" onClick={handleRemoveQuantity}>
                <Minus size={14} weight="light"/>
              </button>
              <p>{coffe.amount}</p>
              <button type="button" onClick={handleAddQuantity}>
                <Plus size={14} weight="light"/>
              </button>
            </div>
            <button onClick={handleRemoveCoffe}>
              <Trash size={16}/>
              <p>REMOVER</p>
            </button>
          </div>
        </ContainerCoffeInfo>
      </div>
      <p>R$9,90</p>
    </ContainerCoffe>
  )
} 
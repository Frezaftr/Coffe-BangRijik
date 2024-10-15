import { ContainerPage, ListCoffe , Title} from './styles'
import { Intro } from './Intro'
import { CardCoffe } from './CardCoffe'

import { CoffeContext } from "../../contexts/CoffeContext"
import { useContext } from "react"
export function Home(){
  const {coffeList} = useContext(CoffeContext)
  return (
    <div>
      <Intro/>
      <Title>List Coffe </Title>
      <ContainerPage>
        <ListCoffe>  
          {coffeList.map((coffe,indice)=>{
            return(
              <CardCoffe 
                key={indice}
                coffe={coffe}
              />
            )
          })}
        </ListCoffe>
      </ContainerPage>
    </div>
  )
}

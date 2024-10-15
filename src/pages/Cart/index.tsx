import { CoffeItem } from "./CoffeItem";
import { ContainerData, ContainerMain, ContainerPedido, ContainerResume, DivInfos,  TextSmall, TextBig, TextMedium, CheckButton } from "./styles";
import { CoffeContext } from "../../contexts/CoffeContext";

import { useContext } from "react";
import { FormAdress } from "./FormAddress";
import { Pay } from "./Pay";
import { NavLink } from "react-router-dom";



export function Cart() {

  const {coffeList, dataUser} = useContext(CoffeContext)
  const values = Object.values(dataUser)
  let allValuesAreNotEmpty = values.every((value) => value !== '');
  

  let priceCoffes = coffeList.reduce((total, coffeUser) => {
    return total + (coffeUser.price * coffeUser.amount)
  }
  , 0)

  const priceDelivery = 3.5;
  let priceTotal = priceCoffes + priceDelivery;


  return (
    <ContainerMain>
      <ContainerData>
        <h3>Lengkapi Datamu</h3>
        <FormAdress />
        <Pay />
      </ContainerData>
      <ContainerPedido>
        <h3>Kopi pilihan</h3>
        <ContainerResume>
          {coffeList.map(coffeUser => {
            // console.log(coffeUser)
            if(coffeUser.amount > 0){
              return(
                <CoffeItem 
                  key={coffeUser.title} 
                  coffe={coffeUser}
                />
              )
            }
          })}
          
          <DivInfos>
            <div>
              <TextSmall>Total Items</TextSmall>
              <TextMedium>
                $ {(priceCoffes.toFixed(2)).toString().replace('.',',')}
              </TextMedium>
            </div>
            <div>
              <TextSmall>Pengiriman</TextSmall>
              <TextMedium>
                $ {(priceDelivery.toFixed(2)).toString().replace('.',',')}
              </TextMedium>
            </div>
            <div>
              <TextBig>Total</TextBig>
              <TextBig>
                $ {(priceTotal.toFixed(2)).toString().replace('.',',')}
              </TextBig>
            </div>
          </DivInfos>
          {allValuesAreNotEmpty ?
            <NavLink to="/Coffee_delivery/order" title="order">
              <CheckButton>
              Konfirmasi
              </CheckButton>
            </NavLink>
          :
            <CheckButton form="endereco" type="submit">
              KONFIRMASI PESANAN 
            </CheckButton>
          }
          
          
          
        </ContainerResume>
      </ContainerPedido>
    </ContainerMain>
  )
}
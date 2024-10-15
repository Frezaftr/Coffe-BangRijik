import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";
import Illustration from "../../assets/Illustration.png";

import {CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { BorderGradiente, Container, ContainerOrder, ContainerOrderInfo, ContainerOrderInfoItems, ContainerTitle, DollarIcons, PinIcons, TimerIcons } from "./styles";
export function Order() {
  const {dataUser} = useContext(CoffeContext)
  
  return (
    <Container>
      <ContainerTitle>
        <h1>Woohoo! Pesanan dikonfirmasi</h1>
        <p>Sekarang tunggu saja dan kopinya akan segera sampai ke tangan Anda.</p>
      </ContainerTitle>
      <ContainerOrder>
        <BorderGradiente>
          <ContainerOrderInfo>
            <ContainerOrderInfoItems>
              <PinIcons>
                <MapPin size={16} weight="fill" />
              </PinIcons>
              <div>
                <p>Entrega em <span>{dataUser.rua}, {dataUser.numero}</span></p>
                <p>{dataUser.bairro} - {dataUser.cidade}, {dataUser.uf}</p>
              </div>
            </ContainerOrderInfoItems>
            <ContainerOrderInfoItems>
              <TimerIcons>
                <Timer size={16} weight="fill" />
              </TimerIcons>
              <div>
                <p>Perkiraan pengiriman</p>
                <p><span>20min - 30 min</span></p>
              </div>
            </ContainerOrderInfoItems>
            <ContainerOrderInfoItems>
              <DollarIcons>
                <CurrencyDollar size={16} weight="fill" />
              </DollarIcons>
              <div>
                <p>Pembayaran saat pengiriman</p>
                <p><span>{dataUser.payment}</span></p>
              </div>
            </ContainerOrderInfoItems>
          </ContainerOrderInfo>
        </BorderGradiente>
        <img src={Illustration} alt="" />
      </ContainerOrder> 
    </Container>  
      
    
  );
}
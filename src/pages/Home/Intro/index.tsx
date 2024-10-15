import { IntroContainer, Title, SubTitle, GridContainer, IntroTitle } from './styles'
import introcoffe from '../../../assets/introcoffe.png'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

export function Intro(){
  return (
    <IntroContainer>
      <div>
        <IntroTitle>
          <Title>
            Toko Kopi Bang Rijik
          </Title>
          <SubTitle>
            Bang Rijik mengirim Kopi Anda di mana pun Anda berada, kapan saja
          </SubTitle>
        </IntroTitle>
        <GridContainer>
          <div>
            <span>
              <ShoppingCart size={16} weight="fill" />
            </span>
            <p>Pembelian sederhana dan aman</p>
          </div>
          <div>
            <span>
              <Package size={16} weight="fill" />
            </span>
            <p>Kemasan membuat kopi tetap utuh</p>
          </div>
          <div>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <p>Pengiriman cepat dan terlacak</p>
          </div>
          <div>
            <span>
              <Coffee size={16} weight="fill" />
            </span>
            <p>kopi tiba segar untuk Anda</p>
          </div>
        </GridContainer>
      </div>
      <img src={introcoffe} alt="" />
    </IntroContainer>
  )
}
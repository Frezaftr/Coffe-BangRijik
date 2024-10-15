import { ContainerPay, ContainerButton } from './styles';
import { CurrencyDollar, CreditCard, Money, Bank} from 'phosphor-react'
import { CoffeContext } from "../../../contexts/CoffeContext";
import { useContext, useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: (event: any) => void;
}

const Button = ({ children, active, onClick }: ButtonProps) => {
  return (
    <button
      className={`button ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export function Pay() {
  const [selectedButton , setSelectedButton ] = useState('')
  const {savePayment} = useContext(CoffeContext)
  function handleSavePayment(event: React.MouseEvent<HTMLButtonElement>){
    const formatted = event.currentTarget.textContent?.trim().toLowerCase()|| '';
    savePayment(formatted)
    if(formatted === 'kartu kredit'){
      setSelectedButton('credit')
    }else if(formatted === 'kartu debit'){
      setSelectedButton('debit')
    }else if (formatted === 'uang') {
      setSelectedButton('money')
    }
    console.log('selected button :',selectedButton); //debug
  }
  return(
    <ContainerPay> 
      <div>
        <span>
          <CurrencyDollar size={22} />
        </span>
        <div>
          <h4>Pembayaran</h4>
          <p>Pembayaran dilakukan pada saat pengiriman. Pilih cara Anda ingin membayar</p>
        </div>
      </div>
      <ContainerButton>
        <Button  onClick={handleSavePayment} active={selectedButton === 'credit'}>
          <span> <CreditCard size={16}/> </span>
          <p>KARTU KREDIT</p>
        </Button>
        <Button  onClick={handleSavePayment} active={selectedButton === 'debit'}>
          <span><Bank size={16}/></span>
          <p>KARTU DEBIT</p>
        </Button>
        <Button  onClick={handleSavePayment} active={selectedButton === 'money'}>
          <span><Money size={16}/></span>
          <p>UANG</p>
        </Button>
      </ContainerButton>
    </ContainerPay>
  )
}
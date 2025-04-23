import { ReactNode, createContext, useEffect, useState } from 'react'
import Image from '../assets/coffes/Image.png'
import Type_Americano from '../assets/coffes/Type_Americano.png'
import Type_Árabe from '../assets/coffes/Type_Árabe.png'
import Type_Cafe_com_Leite from '../assets/coffes/Type_Cafe_com_Leite.png'
import Type_Cafe_Gelado from '../assets/coffes/Type_Cafe_Gelado.png'
import Type_Capuccino from '../assets/coffes/Type_Capuccino.png'
import Type_Chocolate_Quente from '../assets/coffes/Type_Chocolate_Quente.png'
import Type_Cubano from '../assets/coffes/Type_Cubano.png'
import Type_Expresso_Cremoso from '../assets/coffes/Type_Expresso_Cremoso.png'
import Type_Havaiano from '../assets/coffes/Type_Havaiano.png'
import Type_Irlandês from '../assets/coffes/Type_Irlandês.png'
import Type_Latte from '../assets/coffes/Type_Latte.png'
import Type_Macchiato from '../assets/coffes/Type_Macchiato.png'
import Type_Mochaccino from '../assets/coffes/Type_Mochaccino.png'


export interface Coffe{
  title: string
  descricao:string
  price:number
  tags: Array<string>
  img:string
  amount: number
}

interface DataUser{
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  payment ?: string
}

//Interface do contexto
interface CoffeContextData{
  coffeList: Coffe[]
  addCoffe: (coffe: Coffe, quantidade: number) => void
  removeCoffe: (coffe: Coffe) => void
  addQuantity: (coffe: Coffe) => void
  removeQuantity: (coffe: Coffe) => void
  saveDataUser: (data: DataUser) => void
  dataUser: DataUser
  savePayment: (payment: string) => void
}

// Criando o contexto
export const CoffeContext = createContext({} as CoffeContextData)

// Meras formalidades
interface CoffeContextProviderProps{
  children: ReactNode
}

// função provider
export function CoffeContextProvider({children}: CoffeContextProviderProps){
  const [dataUser, setDataUser] = useState<DataUser>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    payment: ''
  } as DataUser)
  const [coffeList, setcoffeList] = useState<Coffe[]>([
  {
    "title":"Expresso Rijik ",
    "descricao":"Kafe tradisional ini memiliki rasa yang enak dan segar",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":Image,
    "amount": 0
  },
  {
    "title":"Rijik Americano",
    "descricao":"Ekspresifnya, kurang dari yang tradisional",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":Type_Americano,
    "amount": 0
  },
  {
    "title":"Rijik Cremoso",
    "descricao":"Espresso tradisional dengan busa krim",
    "price": 9.90,
    "tags":["Tradicional"],
    "img":Type_Expresso_Cremoso,
    "amount": 0
  },
  {
    "title":"Rijik Gelado",
    "descricao":"Minuman disiapkan dengan espresso dan es batu",
    "price": 9.90,
    "tags":["Tradicional", "gelado"],
    "img":Type_Cafe_Gelado,
    "amount": 0
  },
  {
    "title":"Rijik Leite",
    "descricao":"Setengah setengah espresso tradisional dengan susu kukus",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Cafe_com_Leite,
    "amount": 0
  },
  {
    "title":"Rijik Latte",
    "descricao":"Segelas espresso dengan dua kali lipat susu dan busa krim",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Latte,
    "amount": 0
  },
  {
    "title":"Rijik Capuccino",
    "descricao":"Minuman kayu manis terbuat dari kopi, susu, dan busa dengan takaran yang sama",
    "price": 9.90,
    "tags":["Tradicional","Com leite"],
    "img":Type_Capuccino,
    "amount": 0
  },
  {
    "title":"Rijik Macchiato",
    "descricao":"Espresso dicampur dengan susu panas dan buih",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Macchiato,
    "amount": 0
  },
  {
    "title":"Rijik Mocaccino",
    "descricao":"Espresso dengan sirup coklat, sedikit susu dan busa",
    "price": 9.90,
    "tags":["Tradicional", "Com leite"],
    "img":Type_Mochaccino,
    "amount": 0
  },
  {
    "title":"Rijik Chocolate Quente",
    "descricao":"Minuman yang terbuat dari coklat yang dilarutkan dalam susu panas dan kopi",
    "price": 9.90,
    "tags":["Especial", "Com leite"],
    "img":Type_Chocolate_Quente,
    "amount": 0
  },
  {
    "title":"Rijik Cubano",
    "descricao":"Minuman es espresso dengan rum, krim, dan mint",
    "price": 9.90,
    "tags":["Especial","Alcoólico", "Gelado"],
    "img":Type_Cubano,
    "amount": 0
  },
  {
    "title":"Rijik Havaiano",
    "descricao":"Minuman manis diolah dengan kopi dan santan",
    "price": 9.90,
    "tags":["Especial"],
    "img":Type_Havaiano,
    "amount": 0
  }
  ,
  {
    "title":"Rijik Irlandês",
    "descricao":"Minuman yang terbuat dari kopi, wiski Irlandia, gula, dan krim kocok",
    "price": 9.90,
    "tags":["Especial","Alcoólico"],
    "img":Type_Irlandês,
    "amount": 0
  }
  ,
  {
    "title":"Rijik Árabe",
    "descricao":"Minuman diolah dengan biji kopi Arab dan rempah-rempah",
    "price": 9.90,
    "tags":["Especial"],
    "img":Type_Árabe,
    "amount": 0
  }

  ])

  function saveDataUser(dataNew: DataUser){
    dataNew.payment = dataUser.payment
    setDataUser(dataNew)
  }

  function savePayment(payment: string){
    setDataUser({...dataUser, payment})
  }

  useEffect(() => {
    const coffeStorage = localStorage.getItem('@coffe-delivery:coffe-List-1.0.0')
    if(coffeStorage){
      setcoffeList(JSON.parse(coffeStorage))
    }
  }, [])

  function saveCoffe(coffe:Coffe[]){
    localStorage.setItem('@coffe-delivery:coffe-List-1.0.0', JSON.stringify(coffe))
  }

  function addCoffe(coffe: Coffe, quantidade: number){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        coffeUser.amount = quantidade
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  function removeCoffe(coffe: Coffe){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        coffeUser.amount = 0
        return coffeUser
      }
      else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  function addQuantity(coffe: Coffe){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        coffeUser.amount += 1
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  function removeQuantity(coffe: Coffe){
    const newCoffeList = coffeList.filter(coffeUser => {
      if(coffeUser.title === coffe.title){
        if(coffeUser.amount > 0){
          coffeUser.amount -= 1
        }
        return coffeUser
      }else{
        return coffeUser
      }
    })
    setcoffeList(newCoffeList)
    saveCoffe(newCoffeList)
  }

  return(
    <CoffeContext.Provider value={{
      coffeList,
      addCoffe,
      addQuantity,
      removeQuantity,
      removeCoffe,
      saveDataUser,
      dataUser,
      savePayment
    }}>
      {children}
    </CoffeContext.Provider>
  )
}
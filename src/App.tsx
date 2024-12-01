import { useEffect, useReducer } from 'react'
import ProductCardList from "./components/ProductCardList"
import './App.css'
import { PageConfig, getLists } from './utils/api'
import SearchBox from './components/SearchBox'


const pageConfig:PageConfig = JSON.parse(document.getElementById('page-config')?.textContent || '')

export interface ListAction {
  type: 'replace-lists' | 'add-list' | 'remove-list'
  data?: []
}

export const listReducer = (state:any, action:ListAction) => {
  console.log("listReducer state ", state)
  console.log("listReducer action ", action)
  switch (action.type) {
    case 'replace-lists':
      return [...(action.data || [])]
      case 'add-list':
      return [...(action.data || []), ...state]
    case 'remove-list':
      return []//TODO:
    default:
      return state;
  }
};
export interface List {
  name: String;
  products: any[];
}

interface Product {
  name : String 
  displayPrice : String
  displayLocation : String
  image1x:  String
  image2x : String
  srcSet: String
  url: String
}



function App() {
  const placeholderProduct:Product = {name : "-----", 
    displayPrice : "",
    displayLocation : "",
    image1x:  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' style='fill:%235F67EE;' /%3E%3C/svg%3E",
    image2x : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' style='fill:%235F67EE;' /%3E%3C/svg%3E",
    srcSet: "",
    url: ""}

  const placeholderList:List = {name:"---",products:[placeholderProduct,placeholderProduct,placeholderProduct,placeholderProduct,placeholderProduct,placeholderProduct,placeholderProduct,placeholderProduct,placeholderProduct,placeholderProduct]}
  const placeholderLists = [placeholderList, placeholderList, placeholderList]
  const [lists, listsDispatch] = useReducer(listReducer, (pageConfig?.lists && pageConfig?.lists.length > 0) ? placeholderLists : []);

  useEffect(() => {
    let mounted = true;
    if(pageConfig.lists) { // possibly undefined
    getLists(pageConfig)
      .then(newLists => {
        if(mounted) {
          console.log("pageconfig",pageConfig)
          console.log("useeffect listsDispatch", newLists);
          listsDispatch({type:'replace-lists',data:newLists.lists})
        }
      })
    }
  }, [])

  return (
    
    <>
         <SearchBox listsDispatch={listsDispatch}/>
        {lists.map((list:List, index: number) => (
          <ProductCardList index={index} name={list.name} products={list.products} />
        ))}
    </>
  )
}

export default App

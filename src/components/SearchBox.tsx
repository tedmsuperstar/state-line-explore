
import ReactDOM from 'react-dom';
import { getLists } from "../utils/api"


function SearchBox(props:any): JSX.Element {

   

    function handleSearchSubmit(event:any) :void {
        event.preventDefault()
        console.log("c",event.target.children.terms.value);
        const terms = event.target.children.terms.value ?? null;

        if(terms){
        getLists({location_abbreviation:"",lists:"",search:terms})
        .then(newLists => {
            props.listsDispatch({type:'add-list',data:newLists.lists})
            document.querySelector(".article-list")?.remove();
          })
        }
        
    }
    
    return ReactDOM.createPortal(
        <>
            <form onSubmit={handleSearchSubmit}><input type="text" id="terms" placeholder="Search categories and keywords"/><button id="submit-search" aria-label="Name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 19a8.46 8.46 0 0 0 5.262-1.824l4.865 4.864 1.414-1.414-4.865-4.865A8.5 8.5 0 1 0 10.5 19m0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"></path></svg></button></form>
        </>,
        document.getElementById('portalHeaderSearchBox')!

    )
    

}   

export default SearchBox;


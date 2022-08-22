import {useEffect, useMemo, useState} from "react"
import axios from "axios"
import Popup from "reactjs-popup"

function Productlist(){
const [products,setpoducts]=useState([])
const [selectcategory,setselectcategory]=useState()

useEffect(()=> {
    axios({
        method:"GET",
        url: "https://api.npoint.io/74526212daacbe4a8032"
    }).then((res)=> {
        console.log(res);
        console.log(res.data.item)
        setpoducts(res.data.item)
    }).catch((err)=> {
        console.log(err)
    })

},[])


    function getfiltered(){
        if(!selectcategory || selectcategory==="all"){
            return products
        }else{
            return products.filter((item)=>item.category===selectcategory)
        }
    }

    var filteredlist=useMemo(getfiltered,[selectcategory,products])

    function handlecategory(event){
        setselectcategory(event.target.value)
    }
    return(
        <div className="container">
            <select className="category" name="category" onChange={handlecategory} >
                <option value="all">all</option>
                <option value="Electronics">Electronics</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Furniture">Furniture</option>
                <option value="Kitechen">Kitchen</option>
            </select>

            {/* {products.map((product)=>{ */}
            {filteredlist.map((element,i)=>{
                return(
                    <div{...element} key={i}>
                        <Popup trigger={<img id="img" src={element.item_image}></img>} position="right center">
                            <div className="descr">
                                <h3>Reviews of product</h3>
                                <h4>{element.item_reviews}</h4>
                            </div>
                        </Popup>
                        <div>{element.category}</div>
                        <div>{element.item_name}</div>
                        <div>{element.item_price}</div>

                    </div>
                )
            })
        }
            
        </div>
    )
}

export default Productlist
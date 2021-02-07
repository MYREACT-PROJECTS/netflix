import React,{useEffect,useState} from 'react'
import './PlanScreen.css'
import {db,auth} from "./firebase";
import { selectUser } from './UserSlice';
import {useSelector} from 'react-redux';
import {loadStripe} from '@stripe/stripe-js'



export default function PlanScreen() {
    const [products,setProducts]= useState([])
    const user =  useSelector(selectUser)
    const[subscription,setSubscription]=useState();

    useEffect(() => {
     db.collection("customers").doc(user.uid).collection('subscriptions').get()
     .then(querySnapshot => {
         querySnapshot.forEach(async subscription =>{
             setSubscription({
                 role:subscription.data().role,
                 current_period_end:subscription.data().current_period_end.seconds,
                 current_period_start:subscription.data().current_period_start.seconds,
             })       

         })
     })
        }, [user.uid])
        console.log(subscription)
    useEffect(() => {
        db.collection('products')
        .where('active',"==",true).get().then(querySnapshot => {
            const products={};
            querySnapshot.forEach(async (productDoc)=>{
                products[productDoc.id]=productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach((price)=>{
                    products[productDoc.id].prices={
                        priceId: price.id,
                        priceData:price.data(),
                    };
                });
            });
            setProducts(products)
        })

        
    }, [])
    console.log(products)
    
const loadCheckout = async( priceId)=>{
    console.log(priceId)
const docRef= await db
.collection('customers')
.doc(user.uid)
.collection('checkout_sessions')
.add
({
    price:priceId,
    success_url:window.location.origin,
    cancel_url:window.location.origin,
})

docRef.onSnapshot(async(snap)=>{
    const {error,sessionId}= snap.data();
    if (error){
        alert(`An error occured: ${error.message}` );
            }

            if (sessionId){
                const stripe = await loadStripe("pk_test_51IIACABN9iw50N15Ba0Ka7tlmF66Syrr9S1eMiAHalRdPLYB1FdnOENB7yTFw5Dy2zpq0PK3B2vo8yIQY05Gjqmq00yopx8Trc")
                stripe.redirectToCheckout({sessionId});

            }
})
    


}

    return (
        <div className="planScreen">
            <br/>
            {subscription && (<p> Renewal Date:{" "}{new Date(subscription?.current_period_end*1000).toLocaleDateString()} </p>)}
            {Object.entries(products).map(([productId,productData])=>{
                //to do ad some logic to ensure if user's subscribtuuion is active
                const  isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);
                return(
                    <div key={productId} className= {`planScreen__plan ${isCurrentPackage && "planScreen__plan__disabled"}`} >
                        <div className="planScreen__info">
                            <h5>{productData.name}</h5>
                            <div>
                            <h6>{productData.description}</h6>

                            </div>

                        </div>
                        <button onClick={()=> !isCurrentPackage && loadCheckout(productData.prices.priceId)}>{isCurrentPackage ? "Current Package" : "Subscribe"}</button>


                    </div>
                )
            })}
            
        </div>
    )
}

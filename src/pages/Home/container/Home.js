import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeUi from '../UI/HomeUi';
import fetchCategory from '../../../redux/actions/fetchCategory';

import authenticateUserAction from '../../../redux/actions/authenticateUserAction';

export default function Home() {
    const dispatch=useDispatch();
    useEffect(()=>{
         dispatch(fetchCategory("jewelery"));
         dispatch(fetchCategory("men's clothing"));
         dispatch(fetchCategory("women's clothing"));
         dispatch(fetchCategory("electronics"));
         dispatch(authenticateUserAction.getStatus());
        
    },[])

    const jewelary= useSelector((state)=>state.categoryReducer.jewelary);
    const menCloths= useSelector((state)=>state.categoryReducer.menClothes);
    const womenCloths= useSelector((state)=>state.categoryReducer.womenClothes);
    const electronics= useSelector((state)=>state.categoryReducer.electronics);
    // const registerdUsers = useSelector((state) => state.authenticateUserReducer.registerdUsers);
    // const checkStatus = () =>{
    //     const loginUser = registerdUsers.filter((user)=>user.loginStatus===true)
     
    //     if(loginUser){

    //     }
    // }
   
    return (
        <HomeUi jewelary={jewelary} menCloths={menCloths} womenCloths={womenCloths} electronics={electronics}/>
    )

}

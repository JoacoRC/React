import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import {Products} from "../Products"
import {auth, fs} from "../../Firebase/Firebase";
import {getDoc, doc} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { CarouselImages } from "./CarouselImages";
import { Footer } from "../Footer";
//import { Card } from "../Card";
//import { Cart } from "../Cart";



export const Home = () => {
  // Getting the current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          getDoc(doc(fs, 'users', user.uid))
            .then((snapshot) => {
              if (snapshot.exists()) {
                setUser(snapshot.data().email);
              } else {
                setUser(null);
              }
            })
            .catch((error) => {
              console.error('Error getting user document:', error);
            });
        } else {
          setUser(null);
        }
      });

      // Cleanup function
      return () => unsubscribe();
    }, []);

    return user;
  }

  const user = GetCurrentUser();

  return (
    <>

      <Navbar user={user} />
      
      <CarouselImages />
      {<div className="containerCard">
      <Products />
      
      {/* <Card/><Card/>
      <Card/><Card/> */}
      </div>}
      <Footer/>
    </>
  );
};

export default Home;
import React from "react";
import { IonContent, IonFooter, IonToolbar, IonTitle } from "@ionic/react";

const Footer = () => {
  return (
    // <div>
    //   <p>Made with ❤ using Ionic React</p>
    //   <p>© {newDate().getFullYear()} Coding.Community | All Rights Reserved</p>
    // </div>

    <>
      <IonContent />

      {/*-- Footer without a border --*/}
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer - No Border</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default Footer;

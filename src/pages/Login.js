import React from "react";
import {
  IonContent,
  IonItem,
  IonLoading,
  IonPage,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";
import { toast } from "../utils/toast";
import useFormValidation from "../hooks/useFormValidation";
import validateLogin from "../Auth/validateLogin";
import firebase from "../firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = (props) => {
  const {
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [busy, setBusy] = React.useState(false);

  async function authenticateUser() {
    setBusy(true);
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      toast("You have logged in successfully!");
      props.history.push("/");
    } catch (err) {
      console.log("Authentication Error", err);
      toast(err.message);
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <NavHeader title="Log In" />
      <IonLoading message={"Please wait..."} isOpen={busy} />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            name="email"
            value={values.email}
            type="text"
            onIonChange={handleChange}
            required
            style={{ marginTop: "10px" }}
          ></IonInput>
        </IonItem>
        <IonItem lines="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            name="password"
            value={values.password}
            type="password"
            onIonChange={handleChange}
            required
          ></IonInput>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              expand="block"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Log In
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="ion-text-center ion-padding vertical">
            <IonRouterLink routerLink={`/forgot`}>
              Forgot Password?
            </IonRouterLink>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol class="ion-text-center ion-padding vertical">
            <IonRouterLink routerLink={`/forgot`}>Sign Up</IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;

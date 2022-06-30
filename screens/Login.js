import { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import {COLORS, Resturants, Offers, SIZES, assets, FONTS} from "../constants";
import {OfferCard, RestaurantCard, HomeHeader, FocusedStatusBar , SearchBar} from "../components";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import firebase from 'firebase'
import * as Google from "expo-google-app-auth";
import { useSelector, useDispatch } from "react-redux";
import { updateInfo , logout } from "../redux/reducers/userSlice";

import { auth } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();  

  // const isUserEqual = (googleUser, firebaseUser) => {
  //   if (firebaseUser) {
  //     const providerData = firebaseUser.providerData;
  //     for (let i = 0; i < providerData.length; i++) {
  //       if (
  //         providerData[i].providerId ===
  //           firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
  //         providerData[i].uid === googleUser.getBasicProfile().getId()
  //       ) {
  //         // We don't need to reauth the Firebase connection.
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  // const onSignIn = (googleUser) => {
  //   console.log("Google Auth Response", googleUser);
  //   const userInfo = {
  //     firstName: googleUser.user.givenName,
  //     lastName: googleUser.user.familyName,
  //     email: googleUser.user.email,
  //     photo: googleUser.user.photoUrl,
  //   };
  //   console.log("user initialized--------------------------");
  //   dispatch(updateInfo(userInfo));
  //   // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  //   const unsubscribe = firebase.auth().onAuthStateChanged(
  //      (firebaseUser) => {
  //       unsubscribe();
  //       // Check if we are already signed-in Firebase with the correct user.
  //       // if (!isUserEqual(googleUser, firebaseUser)) {
  //         // Build Firebase credential with the Google ID token.
  //         const credential = firebase.auth.GoogleAuthProvider.credential(
  //           googleUser.idToken,
  //           googleUser.accessToken
  //         );
  //         // Sign in with credential from the Google user.
  //         console.log("user will signed in ");
  //         firebase
  //           .auth()
  //           .signInAndRetrieveDataWithCredential(credential)
  //           // .GoogleAuthProvider.credential(credential)
  //           .then( (result) => {
  //             console.log("user signed in ");
  //              //init user
  //             // const userInfo = {
  //             //   firstName: result.additionalUserInfo.profile.given_name,
  //             //   lastName: result.additionalUserInfo.profile.family_name,
  //             //   email: result.user.email,
  //             //   photo: result.additionalUserInfo.profile.picture,
  //             // };
               
  //              //then

  //             // if (result.additionalUserInfo.isNewUser) {
  //             //   firebase
  //             //     .database()
  //             //     .ref("/users/" + result.user.uid)
  //             //     .set({
  //             //       gmail: result.user.email,
  //             //       profile_picture: result.additionalUserInfo.profile.picture,
  //             //       first_name: result.additionalUserInfo.profile.given_name,
  //             //       last_name: result.additionalUserInfo.profile.family_name,
  //             //       created_at: Date.now(),
  //             //     })
  //             //     .then( (snapshot) => {
  //             //       // console.log('Snapshot', snapshot);
  //             //     });
  //             // } else {
  //             //   firebase
  //             //     .database()
  //             //     .ref("/users/" + result.user.uid)
  //             //     .update({
  //             //       last_logged_in: Date.now(),
  //             //     });
  //             // }
  //           })
  //           .catch( (error) => {
  //             // Handle Errors here.
  //             const errorCode = error.code;
  //             const errorMessage = error.message;
  //             // The email of the user's account used.
  //             const email = error.email;
  //             // The firebase.auth.AuthCredential type that was used.
  //             const credential = error.credential;
  //             // ...
  //           });
  //       // } else {
  //       //   console.log("User already signed-in Firebase.");
  //       // }
  //     }
  //   );
  // };

  // const signInWithGoogleAsync = async () => {
  //   try {
  //     const result = await Google.logInAsync({
  //       // androidClientId: YOUR_CLIENT_ID_HERE,
  //       behavior:"web",
  //       iosClientId:
  //         "620209233873-42ute3mhueaj3h6gq61c7lsu1csjm5ve.apps.googleusercontent.com",
  //       scopes: ["profile", "email"],
  //     });

  //     if (result.type === "success") {
  //       onSignIn(result);
  //       return result.accessToken;
  //     } else {
  //       return { cancelled: true };
  //     }
  //   } catch (e) {
  //     return { error: true };
  //   }
  // };

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //       //Put user in the database
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
    
  //   });
  // }, [])

  const logoutAlert = () =>
    Alert.alert("Logout", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      { text: "Yes", onPress: () => {
        auth.signOut();
        dispatch(logout());
      }},
    ]);

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "620209233873-fsiasoho62iu54r28fll6odj7e0d8a2p.apps.googleusercontent.com",
        behavior: "web",
        iosClientId:
          "620209233873-42ute3mhueaj3h6gq61c7lsu1csjm5ve.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        //if the login was successful
        //create a firebase google credential
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );
        //useing credential and sign up/log in using google details (Changing the AuthState)
        firebase.auth().signInWithCredential(credential);
        const userInfo = {
          firstName: result.user.givenName,
          lastName: result.user.familyName,
          email: result.user.email,
          photo: result.user.photoUrl,
        };

        dispatch(updateInfo(userInfo));
        return;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={assets.logo}
            resizeMode="contain"
            style={{
              width: 100,
              height: 90,
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontWeight: "100",
              fontStyle: "italic",
            }}
          >
            Any Food
          </Text>
        </View>
        <View style={{ height: "50%", width: "100%", alignItems: "center" }}>
          {user.firstName === "" ? (
            <></>
          ) : (
            <View>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: SIZES.medium,
                  color: COLORS.white,
                  margin: SIZES.small,
                }}
              >
                Logged in as {user.firstName} {user.lastName}
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.small,
                  color: COLORS.white,
                  textAlign: "center",
                }}
              >
                Not you?
              </Text>
            </View>
          )}

          {user.firstName !== "" ? (
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.extraLarge,
                minWidth: 250,
                width: "80%",
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                margin: SIZES.small,
              }}
              onPress={() => {
                logoutAlert();
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "800",
                }}
              >
                Sign out
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.extraLarge,
                minWidth: 250,
                width: "80%",
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                margin: SIZES.small,
              }}
              onPress={() => {
                signInWithGoogleAsync();
              }}
            >
              <View
                style={{
                  width: "15%",
                  alignItems: "flex-start",
                }}
              >
                <Image
                  source={assets.google}
                  resizeMode="contain"
                  style={{ width: 22, height: 22 }}
                />
              </View>
              <Text
                style={{
                  fontSize: SIZES.large,
                  fontWeight: "800",
                }}
              >
                Continue with google
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login
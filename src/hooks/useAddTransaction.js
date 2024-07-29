
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");  // we have stored a reference to a collection in our firebase datastore in a variable
  const { userID } = useGetUserInfo();
  const addTransaction = async ({
    description, // these 3 are parameters whose values are directly going to be assigned in below types (userId, description, etc) :
    transactionAmount,
    transactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userID,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(), // serverTimestamp() is a function in firebase which allows us to get the exact time when a transaction is being added
    }); // whatever data we put here will determine what kind of document we are putting in our firebase collection (table)
  };
  return { addTransaction };
};

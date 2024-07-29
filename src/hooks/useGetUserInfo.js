
// Whenever you call this function, it is going to return back an object containing all of the user info stored 
// inside of the local storage in browser in the form of an object, not a stringified object


export const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth } =
      JSON.parse(localStorage.getItem("auth")) || {};  //JSON.parse() transforms a stringified object back into an object
    // We are putting the "auth" key over here because this is what we had called when we had set this item


    // I have returned them separately over here so that I can have it quick and easy
    // whenever I call this hook, I can get the specific thing (name or profilePhoto or userId or isAuth) I want
    return { name, profilePhoto, userID, isAuth };
  };
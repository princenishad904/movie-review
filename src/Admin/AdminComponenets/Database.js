import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { DB } from "../../Firebase/Firebase";
const useFetch = (url) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = [];
      let collectionRef = await getDocs(collection(DB, url));
      collectionRef.forEach((items) => {
        data.push(items.data());
      });
      setAllData(data);
    };
    getData();
  }, []);

  return [allData];
};

export default useFetch;

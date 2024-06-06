import axios from "axios";
import { useEffect, useState } from "react"
import { catsAPI } from "../helpers/API";
import toast from "react-hot-toast";

  export const useGetCategory = () => {

     const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);



    const fetchCategory = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(catsAPI);
        setCategories(data.categories)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(error);
      }
    }


    useEffect(() => { fetchCategory() }, [])

    return {
      loading, categories
    }
  }
import { useCallback, useEffect, useState } from "react"

const useFilter = (array, filters) => {
  const [filterArray, setFilterArray] = useState([])

  // filter array
  const filtrationArray = useCallback(() => {
    const copyArray = [...array]

    // check array has some elements
    if (!copyArray.length) return

    // filtering
    const newFilterArray = copyArray.filter(item => {
      return Object.keys(filters).some(key => {
        const value = filters[key]

        // check values
        if (!value) return
        if (value instanceof Date)
          // controlla per data

        return item[key].toLowerCase().includes(value.toLowerCase())
      })
    })

    setFilterArray([...newFilterArray]);
  }, []);

  // call filtration array when filter changes
  useEffect(() => {
    if (!array.length) return

    // check if array exists but there aren't any filters
    if(!Object.keys(filters).length && array.length) return setFilterArray([...array])

    filtrationArray()
  }, [array, filters, filtrationArray])

  return filterArray
}

export default useFilter

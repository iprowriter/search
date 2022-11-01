import {useState, useEffect} from 'react';

function getSavedQuery(key, initialValue){
  const savedQuery = JSON.parse(localStorage.getItem(key))
  if(savedQuery) {
    return savedQuery
  } else {
    return initialValue
  }
}

export default function useStoredQuery(key, initialValue) {
  let [value, setValue] = useState(() => {
    return getSavedQuery(key, initialValue);
  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue]
}
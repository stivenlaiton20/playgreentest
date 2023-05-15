  export const saveInLocalStorage = (key: string, value: string | boolean | number) => {
    localStorage.setItem(key, value as string);
  };
  
  export const getInLocalStorage = (key: string) => {
    const result = localStorage.getItem(key);
    return !!result && JSON.parse(result);
  };
  
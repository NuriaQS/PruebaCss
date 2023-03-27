class DataStorage {
    
    static set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    static get(key) {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    }
    static remove(key) {
      localStorage.removeItem(key);
    }
    static clear() {
      localStorage.clear();
    }
    static getNum(){
      localStorage.length;
    }
  }
  
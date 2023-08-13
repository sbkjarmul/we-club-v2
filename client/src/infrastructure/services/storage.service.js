class LocalStorageService {
  read(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorageService();

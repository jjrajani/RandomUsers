class RandomUsersDataSource {
  fetchData = cb => {
    fetch("https://randomuser.me/api/?results=50")
      .then(res => res.json())
      .then(data => {
        if (cb) {
          cb(data);
        }
        return data;
      });
  };
}

export default RandomUsersDataSource;

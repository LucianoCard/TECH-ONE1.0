fetch("https://localhost:3000/Productos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {})
  .catch(function (error) {
    alert(error);
  });

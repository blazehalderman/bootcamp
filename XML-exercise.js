function getPosts(success, error) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        success(this.responseText);
      } else {
        error(this.status);
      }
    }
  };

  req.open('GET', 'http://jsonplaceholder.typicode.com/users');
  req.send();
}



document.getElementById('btn-get-posts').addEventListener('click', function() {
  function onSuccess(responseText) {
    console.log(responseText);
    var users = JSON.parse(responseText);
    console.log(users);

    for (var i = 0, i < users.length; i++) {



    }

    var user = function(id, name, username, email, address, phone, website, company) {
      this.id;
      this.name;
      this.username;
      this.email;
      this.address;
      this.phone;
      this.website;
      this.company;
    }

    }
  }

  function onError(status) {
    console.log(status);
  }

  getPosts(onSuccess, onError);
});

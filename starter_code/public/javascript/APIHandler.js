class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.getJSON(`${this.BASE_URL}` + `/characters`).done(function(response) {
      const characters = []
      $.each(response, function(index) {
        characters.push(response[index]);
      })
    });
  }

getOneRegister() {
  this.getFullList();
  const id = $("#character-id").val();
  return $.get(`${this.BASE_URL}` + `/characters/` + id)
  .done(function(response) {
    $.each(response, function(index) {
      if (characters[index].id == id) {
        console.log(characters[index]);
      }
    })
  })
}



  createOneRegister() {}

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}

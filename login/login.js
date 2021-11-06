function logar() {
    var email = document.getElementsByName("email").values;

    var senha = document.getElementsByName("senha").values;
    if (this.email.value== "admin@admin.com" && this.senha.value == "admin") {
        localStorage.setItem("acesso", true);


      window.location.href = "https://rodrigo-abreuu.github.io/Resilia-Flix/pagina_busca_filme/";
    }else{
      alert("Dados incorretos, tente novamente");
    }
  }
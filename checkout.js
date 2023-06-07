function abrirCheckout() {
      var checkoutForm = document.getElementById("checkoutForm");
      checkoutForm.style.display = "block";
    }

    function fecharCheckout() {
      var checkoutForm = document.getElementById("checkoutForm");
      checkoutForm.style.display = "none";
      limparFormulario();
      fecharMensagem();
    }

    function limparFormulario() {
      document.getElementById("nome").value = "";
      document.getElementById("cpf").value = "";
      document.getElementById("cidade").value = "";
      document.getElementById("cep").value = "";
      document.getElementById("endereco").value = "";
      document.getElementById("email").value = "";
    }

    function fecharMensagem() {
      var confirmationMessage = document.getElementById("confirmationMessage");
      confirmationMessage.style.display = "none";
      confirmationMessage.innerHTML = "";
    }

    function processarCheckout() {
      var nome = document.getElementById("nome").value;
      var cpf = document.getElementById("cpf").value;
      var cidade = document.getElementById("cidade").value;
      var cep = document.getElementById("cep").value;
      var endereco = document.getElementById("endereco").value;
      var email = document.getElementById("email").value;

      if (nome === "" || cpf === "" || cidade === "" || cep === "" || endereco === "" || email === "") {
        alert("Todos os campos devem ser preenchidos!");
        return;
      }

      var nomeVeiculo = "Nome do Veículo"; // Preencha com o nome do veículo
      var precoVeiculo = 0.00; // Preencha com o preço do veículo
      var numParcelas = 0; // Preencha com o número de parcelas desejado
      var taxaJuros = 0.00; // Preencha com a taxa de juros desejada

      var valorParcela = (precoVeiculo * taxaJuros) / numParcelas;

      var confirmacaoCompra = confirm("Confirme os detalhes do seu pedido:\n\n" +
    "Detalhes do Comprador:\n\n" +
    "Nome completo: " + nome + "\n" +
    "CPF: " + cpf + "\n" +
    "Cidade: " + cidade + "\n" +
    "CEP: " + cep + "\n" +
    "Endereço: " + endereco + "\n" +
    "E-mail: " + email + "\n\n" +
    "Detalhes do Pedido:\n\n" +
    "Veículo: " + nomeVeiculo + "\n" +
    "Preço: R$" + precoVeiculo.toFixed(2) + "\n" +
    "Parcelas: " + numParcelas + "x\n" +
    "Valor da Parcela: R$" + valorParcela.toFixed(2) + "\n\n" +
    "Deseja confirmar a sua compra?");

      if (confirmacaoCompra) {
        var confirmationMessage = document.getElementById("confirmationMessage");
        confirmationMessage.innerHTML = "Obrigado pela sua compra, " + nome + "!";
        confirmationMessage.style.display = "block";
      } else {
        alert("Compra cancelada. Caso deseje, refaça o processo de checkout.");
      }
    }
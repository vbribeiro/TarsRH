const enviar = document.querySelector('#send');

enviar.addEventListener('click', () => {
    const nome = document.querySelector('#nome');
    const valorNome = nome.value;
    console.log(valorNome);

    const dtanascimento = document.querySelector('#dtanascimento');
    const valorDta = dtanascimento.value;
    console.log(valorDta);

    const cpf = document.querySelector('#cpf');
    const valorCpf = cpf.value;
    console.log(valorCpf);

    const email = document.querySelector('#email');
    const valorEmail = email.value;
    console.log(valorEmail);

    const peso = document.querySelector('#peso');
    const valorPeso = peso.value;
    console.log(valorPeso);

    const altura = document.querySelector('#altura');
    const valorAltura = altura.value;
    console.log(valorAltura);

    const cep = document.querySelector('#cep');
    const valorCep = cep.value;
    console.log(valorCep);

    const endereco = document.querySelector('#endereco');
    const valorEndereco = endereco.value;
    console.log(valorEndereco);

    const complemento = document.querySelector('#complemento');
    const valorComplemento = complemento.value;
    console.log(valorComplemento);

    const dependentes = document.querySelector('#dependentes');
    const valorDependentes = dependentes.value;
    console.log(valorDependentes);

    const toggle = document.querySelector('#toggle:checked');
    const valorToggle = toggle.value;
    console.log(valorToggle);

    const medita = document.querySelector('#medita');
    const valorMedita = medita.value;
    console.log(valorMedita);
});

$('[name="check"]').change(function() {
    $('[name="op1"]').toggle(200);
  });
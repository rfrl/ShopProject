Feature: Como um vendedor
         Eu desejo adicionar itens na minha loja
         Para que eu posso compartilhe-los e vende-los

Scenario: Adicionar um produto novo sem imagem
Given estou no menu “Produtos”	
When eu seleciono a opção “Adicionar/Atualizar Produto”
And eu tento adicionar o produto “Bolsa Gatinho” com preço “R$30,00”
And o produto “Bolsa Gatinho” não se encontra na lista de produtos do sistema
Then eu vejo o novo produto na lista de produtos do sistema sem a imagem relativa a ele

Scenario: Atualizar informações de um produto
Given estou no menu “Produtos”
And estou logado como “Admin”		
When eu seleciono a opção “Adicionar/Atualizar Produto”
And eu tento adicionar o produto “Bolsa Gatinho” com a imagem “Bolsa_Gatinho2.png” e preço “R$50,00”
And o produto “Bolsa Gatinho” já se encontra na lista de produtos do sistema
And o arquivo “Bolsa_Gatinho2.png” se encontra no diretório do sistema referente às imagens dos produtos
Then eu vejo uma mensagem de confirmação de que o produto “Bolsa Gatinho” foi atualizado com sucesso
And eu vejo o produto “Bolsa Gatinho” na lista de produtos do sistema com as informações atualizadas
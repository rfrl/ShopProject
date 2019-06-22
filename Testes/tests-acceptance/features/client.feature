Feature: Como um vendedor
         Eu desejo adicionar itens na minha loja
         Para que eu posso compartilhe-los e vende-los

Scenario: Adicionar um produto novo sem imagem
<<<<<<< HEAD
Given estou no menu “Vender”	
When eu seleciono a opção “Adicionar/Atualizar Produto”
And eu tento adicionar o produto “Bolsa Gatinho” com preço “R$30,00”
And o produto “Bolsa Gatinho” não se encontra na lista de produtos do sistema
Then eu vejo o novo produto na lista de produtos do sistema sem a imagem relativa a ele

Scenario: Atualizar informações de um produto
Given estou no menu “Vender”
When eu seleciono a opção “Adicionar/Atualizar Produto”
And eu tento adicionar o produto “Bolsa Gatinho” com a imagem “Bolsa_Gatinho2.png” e preço “R$50,00”
And o produto “Bolsa Gatinho” já se encontra na lista de produtos do sistema
And o arquivo “Bolsa_Gatinho2.png” se encontra no diretório do sistema referente às imagens dos produtos
Then eu vejo uma mensagem de confirmação de que o produto “Bolsa Gatinho” foi atualizado com sucesso
And eu vejo o produto “Bolsa Gatinho” na lista de produtos do sistema com as informações atualizadas

Scenario: Comprar um produto
Given estou no menu “Comprar”	
=======
Given estou no menu de produtos
When eu nao vejo nenhum produto cadastrado
When eu tento adicionar o produto "Bolsa Gatinho" com preço "30" e quantidade "2"
Then eu vejo o produto "Bolsa Gatinho" na lista de produtos

Scenario: Adicionar um produto novo com imagem
Given estou no menu de produtos
Given eu nao vejo o produto "Meia de patinho" cadastrado
When eu tento adicionar o produto "Meia de patinho" com preço "35" quantidade "3" e imagem "https://http2.mlstatic.com/D_NQ_NP_639670-MLB29135134804_012019-Q.jpg"
Then eu vejo o produto "Bolsa Gatinho" com a imagem "https://http2.mlstatic.com/D_NQ_NP_639670-MLB29135134804_012019-Q.jpg" na lista de produtos

Scenario: Adicionar um item ao carrinho
Given estou no menu de pedidos
Given eu vejo o produto "Bolsa Gatinho" na lista de produtos a venda
When eu tento adicionar o produto "Bolsa Gatinho" ao meu carrinho
Then eu clico no menu finalizar
Then eu vejo o produto "Bolsa Gatinho" no meu carrinho

Scenario: Finalizar compra
Given estou no menu de finalizar
Then eu vejo o produto "Bolsa Gatinho" no meu carrinho
When eu cadastro o nome "Rodrigo" com telefone "123" email "rfrl" e quantidade "1" na minha lista de dados
When eu clico na opção finalizar compra
Then eu nao vejo nenhum produto no meu carrinho

>>>>>>> ef43df5f5dab6839a4f23998d79ee68e902ff6d1

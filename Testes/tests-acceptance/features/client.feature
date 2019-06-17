Feature: Como um vendedor
         Eu desejo adicionar itens na minha loja
         Para que eu posso compartilhe-los e vende-los

Scenario: Adicionar um produto novo sem imagem
Given estou no menu de produtos
When eu nao vejo nenhum produto cadastrado
When eu tento adicionar o produto "Bolsa Gatinho" com preço "30" e quantidade "2"
Then eu vejo o produto "Bolsa Gatinho" na lista de produtos

Scenario: Adicionar um produto novo com imagem
Given estou no menu de produtos
When eu nao vejo o produto "Meia de patinho" cadastrado
When eu tento adicionar o produto "Meia de patinho" com preço "35" quantidade "3" e imagem "https://http2.mlstatic.com/D_NQ_NP_639670-MLB29135134804_012019-Q.jpg"
Then eu vejo o produto "Bolsa Gatinho" com a imagem "https://http2.mlstatic.com/D_NQ_NP_639670-MLB29135134804_012019-Q.jpg" na lista de produtos

Scenario: Adicionar um item ao carrinho
Given estou no menu de pedidos
Given eu vejo o produto "Bolsa Gatinho" na lista de produtos a venda
When eu tento adicionar o produto "Bolsa Gatinho" ao meu carrinho
Then eu clico no menu finalizar
Then eu vejo o produto "Bolsa Gatinho" no meu carrinho


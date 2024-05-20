# Feira Ofertas

## Descrição

Feira Ofertas é um marketplace desenvolvido para facilitar a vida dos comerciantes de Feira de Santana, BA, permitindo que eles anunciem produtos em oferta de maneira prática e eficiente. Este projeto visa unificar as ofertas da região em um só lugar, tornando-as mais atrativas para os usuários e aumentando a liquidez dos produtos.

## Funcionalidades

- **Administração de Produtos:** O administrador pode postar produtos em oferta, determinar a duração da promoção, fornecer informações detalhadas como descrição, título, preço original, preço promocional, parcelamento (se aplicável), imagem nítida do produto e um link de redirecionamento (WhatsApp ou página do produto no e-commerce da loja).
- **Produtos Expirados:** Produtos cuja oferta expirou serão exibidos em tons de cinza com uma faixa "EXPIRADO" e serão futuramente excluídos, caso o anunciante não deseje mais ofertá-los.
- **QR Code:** Cada página de produto possui um QR code para facilitar a visualização e compartilhamento por usuários mobile.
- **Busca Dinâmica:** Campo de busca que permite aos usuários encontrar produtos rapidamente.
- **Filtro por Categorias:** Barra de categorias que filtra a exibição dos produtos conforme a categoria selecionada.
- **Responsividade:** Layout responsivo para garantir uma boa experiência de uso em dispositivos móveis.

## Tecnologias Utilizadas

- **Frontend:** React, NextJS 14, DaisyUI, TailwindCSS, clsx
- **Backend:** PrismaORM, json-server (mock database)
- **Plataforma de Hospedagem:** Vercel
- **Containerização:** Docker
- **Banco de Dados:** PostgreSQL
- **Linguagem:** Typescript
- **Outros:** Requisições a API externas, Assincronicidade

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/allanfernds/firaofertas.git
    cd feiraofertas
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor mockado (json-server):
    ```bash
    npx json-server db.json -p 3001
    ```

4. Inicie o projeto:
    ```bash
    npm run dev
    ```

## Imagens do Projeto

- **Página Inicial:**
  ![Página Inicial](https://github.com/allanfernds/firaofertas/blob/53824469870e70295957a49ed13815052ba38f0b/screenshots/image.png)

- **Página de Produto:**
  ![Página de Produto](https://github.com/allanfernds/firaofertas/blob/53824469870e70295957a49ed13815052ba38f0b/screenshots/image2.png)

- **Produto Expirado:**
  ![Produto Expirado](https://github.com/allanfernds/firaofertas/blob/53824469870e70295957a49ed13815052ba38f0b/screenshots/image3.png)

- **Página Inicial (Mobile):**
  ![Página Inicial Mobile](https://github.com/allanfernds/firaofertas/blob/c78864712e84db23ba27aa1a31dfd08e80c544db/screenshots/image%20mobile2.png)

- **Menu de Categorias (Mobile):**
  ![Menu de Categorias Mobile](https://github.com/allanfernds/firaofertas/blob/c78864712e84db23ba27aa1a31dfd08e80c544db/screenshots/image%20mobile3.png)

- **Página de Produto (Mobile):**
  ![Página de Produto Mobile](https://github.com/allanfernds/firaofertas/blob/c78864712e84db23ba27aa1a31dfd08e80c544db/screenshots/image%20mobile.png)

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça o commit das suas alterações:
    ```bash
    git commit -m 'Minha nova feature'
    ```
4. Envie para o branch original:
    ```bash
    git push origin minha-feature
    ```
5. Crie uma Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

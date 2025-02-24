# Meu Portifólio

Este é um portifólio pessoal que apresenta meus projetos e habilidades profissionais.

## Funcionalidades
- Exibição detalhada dos projetos com tecnologias utilizadas.
- Seção "Sobre mim" com perfil e experiência.
- Formulário de contato para facilitar conexões.

## Pré-requisitos
- Node.js para execução de scripts.
- Conta no GitHub para deploy via GitHub Pages.

## Instalação & Configuração
1. Clone o repositório:
   ```
   git clone https://github.com/Juevan/Portifólio.git
   ```
2. Acesse o diretório do projeto:
   ```
   cd Portifólio
   ```
3. Instale as dependências (se houver):
   ```
   npm install
   ```

## Build & Deploy com GitHub Pages
Caso seu projeto utilize uma pasta de build (ex.: `build` ou `dist`):

1. Instale o pacote gh-pages:
   ```
   npm install --save-dev gh-pages
   ```
2. Adicione o script de deploy ao seu `package.json`:
   ```json
   "scripts": {
     // ...existing code...
     "deploy": "gh-pages -d build"
   }
   ```
3. Execute o build do projeto:
   ```
   npm run build
   ```
4. Realize o deploy:
   ```
   npm run deploy
   ```
5. Após o deploy, acesse:
   ```
   https://Juevan.github.io/Portifólio
   ```

## Ajustes Adicionais
- Configure a propriedade "homepage" no `package.json`:
  ```json
  {
    // ...existing code...
    "homepage": "https://Juevan.github.io/Portifólio"
  }
  ```
- Atualize esta documentação conforme as melhorias e novas funcionalidades do projeto.

## Considerações Finais
Mantenha este readme atualizado para refletir as mudanças do projeto e facilitar o deploy contínuo.

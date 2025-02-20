# SimularCred

## 📌 Sobre o Projeto
O **SimularCred** foi criado com o intuito de apresentar para **crianças, pessoas sem escolaridade ou analfabetas** uma pequena simulação de como funciona um processo de **financiamento bancário**. A aplicação visa mostrar quais perguntas são feitas, quais dados superficiais podem ser necessários e, ao final, retorna links de financiamentos fictícios para que os usuários possam entender o processo de maneira simplificada.

## 🚀 Tecnologias Utilizadas
Este projeto foi desenvolvido com as seguintes tecnologias:
- **Node.js** (Back-end principal)
- **Express.js** (Framework para a API)
- **MongoDB Atlas** (Banco de dados na nuvem, ID: `67b3d4cd0306d3379e6ebdde`)
- **React Native com Expo Snack** (Interface do usuário no front-end)
- **Replit** (Ambiente de desenvolvimento utilizado)
- **Expo Go** (Aplicativo para visualização da versão mobile do projeto)

## 🔧 Funcionalidades
- Simulação de financiamento bancário simplificado.
- Interface intuitiva e acessível para públicos com pouca familiaridade digital.
- Perguntas básicas sobre crédito e financiamento.
- Links fictícios para compreensão do funcionamento de financiamentos.
- **Os dados são armazenados no banco de maneira superficial apenas para demonstração, sem retenção de informações de usuários.**
- **Versão mobile disponível no aplicativo Expo Go para visualização das telas e funcionalidades.**

## 📂 Estrutura do Projeto
```
SimularCred/
│── .config/
│── .expo/
│── .git/
│── app/
│── assets/
│   ├── fonts/
│   │   ├── SpaceMono-Regular.ttf
│   ├── images/
│   │   ├── adaptive-icon.png
│   │   ├── casa.png
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   ├── partial-react-logo.png
│   │   ├── react-logo.png
│   │   ├── react-logo@2x.png
│   │   ├── react-logo@3x.png
│   │   ├── splash-icon.png
│── backend/
│   ├── config/
│   │   ├── database.js
│   ├── controllers/
│   │   ├── simulationController.js
│   │   ├── userController.js
│   ├── models/
│   │   ├── Simulation.js
│   │   ├── simulationModel.js
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── simulationRoutes.js
│   │   ├── userRoutes.js
│   ├── .env
│   ├── server.js
│   ├── testConnection.js
│── components/
│── constants/
│── frontend/
│   ├── App.js
│   ├── app.json
│   ├── config.js
│   ├── eas.json
│── hooks/
│── scripts/
│   ├── reset-project.js
│── .gitignore
│── index.js
│── tsconfig.json
│── package-lock.json
│── package.json
│── .replit
│── replit.nix
```

## 📦 Como Executar o Projeto
### 🔹 Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (Para visualizar no celular)

### 🔹 Passos para execução
1. Clone o repositório:
   ```sh
   git clone https://github.com/Eduardanayane/Simulador-PC3
   ```
2. Acesse o diretório do backend e instale as dependências:
   ```sh
   cd backend
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env` com as credenciais do MongoDB Atlas.
4. Inicie o servidor:
   ```sh
   npm start
   ```
5. Acesse o diretório do frontend e inicie o Expo:
   ```sh
   cd frontend
   expo start
   ```
6. Escaneie o QR Code com o aplicativo **Expo Go** para visualizar a versão mobile.

## 📌 Contribuição
Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Adicionando nova funcionalidade'`
4. Faça um push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## 📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
📌 *Projeto desenvolvido com foco educacional, utilizando [Replit](https://replit.com/@eduardaalmeida9/Simulador-PC3) para desenvolvimento, Expo Snack para frontend, Expo Go para versão mobile e MongoDB Atlas como banco de dados.*


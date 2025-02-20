# 📌 SimularCred

## 🏦 Sobre o Projeto
O **SimularCred** foi criado com o intuito de **ensinar educação financeira** para **crianças, pessoas sem escolaridade ou analfabetas**. A aplicação demonstra, de forma simplificada, como funciona um processo de **financiamento bancário**, incluindo as perguntas que são feitas, os dados necessários e como interpretar as informações financeiras. Ao final, são apresentados links fictícios para que os usuários possam entender melhor o funcionamento dos financiamentos.

## 🚀 Tecnologias Utilizadas

- **🖥️ Back-end:** Node.js, Express.js
- **📦 Banco de Dados:** MongoDB Atlas (`ID: 67b3d4cd0306d3379e6ebdde`)
- **📱 Front-end:** React Native com Expo Snack
- **📡 Hospedagem e Execução:** Replit
- **📲 Mobile:** Expo Go (para visualização da versão mobile)

## ✨ Funcionalidades

- Simulação de financiamento bancário simplificado.
- Interface intuitiva e acessível para públicos com pouca familiaridade digital.
- Perguntas básicas sobre crédito e financiamento.
- Links fictícios para compreensão do funcionamento de financiamentos.
- Os dados são armazenados no banco de maneira superficial apenas para demonstração, sem retenção de informações de usuários.
- Versão mobile disponível no aplicativo Expo Go para visualização das telas e funcionalidades.

## 📂 Estrutura do Projeto
```
SimularCred/
├── .config/
├── .expo/
├── .git/
├── app/
├── assets/
│   ├── fonts/
│   │   ├── SpaceMono-Regular.ttf
│   ├── images/
│   │   ├── adaptive-icon.png
│   │   ├── casa.png
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   ├── partial-react-logo.png
│   │   ├── react-logo.png
│   │   ├── splash-icon.png
├── backend/
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
├── frontend/
│   ├── App.js
│   ├── app.json
│   ├── config.js
│   ├── eas.json
├── scripts/
│   ├── reset-project.js
├── .gitignore
├── index.js
├── tsconfig.json
├── package-lock.json
├── package.json
├── .replit
├── replit.nix
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) (Para visualizar no celular)

### Passos para execução

1️⃣ Clone o repositório:
   ```sh
   git clone https://github.com/Eduardanayane/Simulador-PC3
   ```

2️⃣ Acesse o diretório do backend e instale as dependências:
   ```sh
   cd backend
   npm install
   ```

3️⃣ Configure as variáveis de ambiente no arquivo `.env` com as credenciais do MongoDB Atlas.

4️⃣ Inicie o servidor:
   ```sh
   npm start
   ```

5️⃣ Acesse o diretório do frontend e inicie o Expo:
   ```sh
   cd frontend
   expo start
   ```

6️⃣ Escaneie o QR Code com o aplicativo **Expo Go** para visualizar a versão mobile.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:
1. Faça um fork do projeto.
2. Crie uma branch para sua feature: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Adicionando nova funcionalidade'`
4. Faça um push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
📌 *Projeto desenvolvido com foco educacional, utilizando [Replit](https://replit.com/@eduardaalmeida9/Simulador-PC3) para desenvolvimento, Expo Snack para frontend, Expo Go para versão mobile e MongoDB Atlas como banco de dados.*

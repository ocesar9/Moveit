# Moveit 🏃‍♂️

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/c3saroliveira/moveit/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/bc5a2372-c3b0-4fbb-9f71-79a20b079fe4/deploy-status)](https://moveit-onilio99.netlify.app/)

## 📋 Sobre o Projeto

**Moveit** é uma aplicação web inovadora que incentiva a prática de exercícios laborais no ambiente de trabalho através da **gamificação**. O sistema utiliza técnicas de **Pomodoro** combinadas com desafios físicos para promover pausas ativas durante o trabalho, melhorando a produtividade e o bem-estar dos usuários.

🔗 **Demo:** [https://moveit-onilio99.netlify.app/](https://moveit-onilio99.netlify.app/)

## ✨ Funcionalidades

- ⏰ **Timer Pomodoro** - Ciclos de foco de 25 minutos
- 🎯 **Sistema de Desafios** - Exercícios para corpo e olhos
- 🏆 **Sistema de Level** - Ganhe XP e suba de nível
- 📊 **Acompanhamento de Progresso** - Visualize suas conquistas
- 🔔 **Notificações** - Alertas para pausas e desafios
- 💾 **Persistência de Dados** - Seus dados ficam salvos no navegador

## 🖼️ Layout da Aplicação

### Tela Inicial
A interface principal apresenta o timer, nível atual do usuário e estatísticas de desafios completados.

![Tela Inicial](https://github.com/c3saroliveira/moveit/blob/master/images/Tela-inicial.PNG)

### Tela de Desafio
Quando o timer se esgota, um novo desafio é apresentado com exercícios específicos para relaxamento.

![Tela de Desafio](https://github.com/c3saroliveira/moveit/blob/master/images/Tela-challenge.PNG)

### Tela de Level Up
Modal celebrativo exibido quando o usuário alcança um novo nível após completar desafios.

![Tela de Level Up](https://github.com/c3saroliveira/moveit/blob/master/images/Tela-levelup.PNG)

## 🚀 Tecnologias Utilizadas

### Frontend
- **[React.js](https://reactjs.org/)** - Biblioteca JavaScript para interfaces de usuário
- **[Next.js](https://nextjs.org/)** - Framework React para aplicações full-stack
- **[TypeScript](https://www.typescriptlang.org/)** - Superset do JavaScript com tipagem estática
- **CSS3** - Estilização com CSS puro e variáveis CSS
- **Context API** - Gerenciamento de estado global

### Recursos Utilizados
- **Local Storage** - Persistência de dados no navegador
- **Notification API** - Sistema de notificações nativas
- **Audio API** - Efeitos sonoros para feedback

## 🌐 Deploy e Hospedagem

- **Frontend:** [Vercel](https://vercel.com/) - Plataforma de deploy para aplicações Next.js
- **Demo Live:** [Netlify](https://netlify.com/) - Hospedagem da versão de demonstração

## 📦 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/c3saroliveira/moveit

# Acesse a pasta do projeto
cd moveit

# Instale as dependências
npm install
# ou
yarn install

# Execute a aplicação em modo de desenvolvimento
npm run dev
# ou
yarn dev

# Acesse http://localhost:3000 no seu navegador
```

### Build para Produção
```bash
# Gera a build otimizada
npm run build
# ou
yarn build

# Inicia o servidor de produção
npm start
# ou
yarn start
```

## 🎯 Conceitos Aplicados

- **Componentização** - Divisão da aplicação em componentes reutilizáveis
- **Context API** - Compartilhamento de estado entre componentes
- **React Hooks** - useState, useEffect, useContext, useCallback
- **TypeScript** - Tipagem estática para maior robustez do código
- **CSS Modules** - Escopo local de estilos
- **Responsividade** - Layout adaptável para diferentes dispositivos

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](https://github.com/c3saroliveira/moveit/blob/master/LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Júlio Guimarães**
- GitHub: [@ocesar9](https://github.com/ocesar9)
- LinkedIn: [Seu perfil LinkedIn](https://linkedin.com/in/seu-perfil)

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!

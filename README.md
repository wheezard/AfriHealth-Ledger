# AfriHealth Ledger

AfriHealth Ledger is a modern web application built to manage and secure healthcare records using blockchain technology. This project leverages the Hedera blockchain network for secure, transparent, and decentralized management of medical records and patient consents.

## Features

- **Blockchain Integration**: Secure medical record management using Hedera blockchain
- **Patient Consent Management**: Digital consent system for medical record access
- **Modern UI/UX**: Built with React and Shadcn UI components
- **Responsive Design**: Mobile-first approach for seamless experience across devices
- **Wallet Integration**: Support for Hedera wallet connections
- **Record Management**: Comprehensive system for managing medical records
- **Real-time Updates**: Live updates for consent status and record access
- **Dark/Light Mode**: Built-in theme support

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: Shadcn UI with Radix UI primitives
- **Styling**: TailwindCSS with animations
- **State Management**: React Query
- **Form Handling**: React Hook Form with Zod validation
- **Blockchain Integration**: Hedera SDK and HashPack Wallet Connect
- **Routing**: React Router DOM
- **Charts**: Recharts for data visualization
- **Date Handling**: date-fns
- **Animations**: Framer Motion

## Prerequisites

- Node.js (LTS version recommended)
- pnpm package manager
- A Hedera testnet/mainnet account
- MetaMask or HashPack wallet

##  Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/wheezard/AfriHealth-Ledger.git
   cd AfriHealth-Ledger
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add necessary environment variables.

4. **Start the development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:5173`

##  Build

To create a production build:

```bash
pnpm build
```

For a development build:

```bash
pnpm build:dev
```

## Linting

To run the linter:

```bash
pnpm lint
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and services
├── pages/         # Application pages/routes
└── App.tsx        # Main application component
```

## Key Components

- **DashboardLayout**: Main layout structure for the application
- **WalletContext**: Manages blockchain wallet connection state
- **ThemeContext**: Handles application theming
- **Components/ui**: Collection of reusable UI components built with Shadcn
- **Services**: API and blockchain interaction services

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Hedera](https://hedera.com/) for blockchain infrastructure
- [React](https://reactjs.org/) and its wonderful ecosystem

---

Built by [wheezard](https://github.com/wheezard)

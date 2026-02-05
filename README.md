# Memory Game

A modern, interactive memory card matching game built with React, TypeScript, and Tailwind CSS. Test your memory skills by matching pairs of cards in the fewest moves possible.

## Project Overview

Memory Game is a classic card matching game where players flip cards to reveal icons and match pairs. The game features smooth animations, responsive design, and an intuitive user interface. Built with modern web technologies for optimal performance and user experience.

## Features

- **Card Matching Gameplay**: Flip cards to reveal icons and match pairs
- **Move Counter**: Track your progress with a move counter
- **Win Detection**: Automatic win detection when all pairs are matched
- **3D Card Flip Animations**: Smooth, visually appealing card flip transitions
- **Board Locking**: Prevents rapid clicking during card reveal animations
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Modern UI**: Beautiful gradient design with Tailwind CSS

## Bonus Features

- **Confetti Celebration**: Animated confetti effect when you win
- **Play Again**: Quick restart functionality to play multiple rounds
- **Optimized Performance**: React.memo for tile components and efficient state management
- **TypeScript**: Full type safety throughout the application
- **Feature-Based Architecture**: Clean, scalable code organization

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mind-game
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Folder Structure

```
mind-game/
├── src/
│   ├── features/
│   │   └── memory-game/          # Main game feature module
│   │       ├── components/       # React components
│   │       │   ├── GameBoard.tsx      # Main game board container
│   │       │   ├── GameScreen.tsx     # Game screen wrapper
│   │       │   ├── Tile.tsx          # Individual card tile component
│   │       │   ├── WelcomeScreen.tsx  # Welcome/start screen
│   │       │   └── Won.tsx            # Win screen with confetti
│   │       ├── constants/        # Game configuration constants
│   │       │   ├── actionTypes.ts     # Action type definitions
│   │       │   └── gameConfig.ts      # Game configuration (tiles, pairs, etc.)
│   │       ├── context/          # React context providers
│   │       │   ├── GameProvider.tsx   # Game state provider
│   │       │   └── types.ts          # Context type definitions
│   │       ├── hooks/            # Custom React hooks
│   │       │   ├── useGame.ts        # Game context hook
│   │       │   └── useGameLogic.ts   # Game logic and matching logic
│   │       ├── store/            # State management (Redux-like pattern)
│   │       │   ├── actions.ts        # Action creators
│   │       │   ├── initialState.ts   # Initial game state
│   │       │   ├── reducer.ts        # State reducer function
│   │       │   └── types.ts          # State and action types
│   │       ├── types/            # TypeScript interfaces
│   │       │   └── interface.ts      # Component prop interfaces
│   │       └── utils/            # Utility functions
│   │           ├── generateDeck.ts    # Deck generation logic
│   │           └── shuffle.ts        # Array shuffling utility
│   ├── app/                      # App-level components
│   ├── styles/                   # Global styles
│   └── main.tsx                  # Application entry point
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

### Architecture Notes

- **Feature-Based Structure**: The game follows a feature-based architecture, with all game-related code organized under `features/memory-game/`
- **State Management**: Uses a custom reducer pattern with React Context for state management
- **Component Organization**: Components are separated by responsibility (UI, logic, state)
- **Type Safety**: Full TypeScript coverage with interfaces and types defined in dedicated files

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **react-confetti** - Confetti animation library

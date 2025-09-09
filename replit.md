# Overview

This is a full-stack web application built with React frontend and Express.js backend. The application uses a modern tech stack with TypeScript, Tailwind CSS, and shadcn/ui components for the frontend, while the backend uses Express with Drizzle ORM for database operations. The project is structured as a monorepo with shared schemas and types between client and server.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation resolvers

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

## Data Storage
- **Primary Database**: PostgreSQL (configured via Neon Database serverless)
- **ORM**: Drizzle ORM with type-safe queries and migrations
- **Schema Location**: Shared schema definitions in `/shared/schema.ts`
- **Migrations**: Generated in `/migrations` directory
- **Session Storage**: PostgreSQL-based session storage

## Development Architecture
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Hot Reloading**: Vite HMR for frontend, tsx watch mode for backend
- **Path Aliases**: TypeScript path mapping for clean imports
- **Error Handling**: Runtime error overlay in development via Replit plugin

## Authentication and Authorization
- **Storage Interface**: Abstracted storage layer with in-memory fallback (MemStorage)
- **User Management**: Basic user creation and retrieval methods
- **Session Management**: Express sessions with PostgreSQL backing store
- **Security**: Prepared for credential-based authentication system

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon Database serverless driver for PostgreSQL
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **drizzle-kit**: Database migration and introspection tools
- **express**: Web application framework for Node.js
- **react**: Frontend UI library
- **@tanstack/react-query**: Server state management and caching

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **clsx**: Utility for constructing className strings conditionally

## Development Tools
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: JavaScript bundler for production builds
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Form and Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation library resolvers for react-hook-form
- **zod**: TypeScript-first schema validation (via drizzle-zod integration)

## Date and Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique string ID generator
- **wouter**: Minimalist routing for React
- **lucide-react**: Icon library with React components
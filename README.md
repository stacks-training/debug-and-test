# Counter Contract

## Overview
This project implements a simple counter smart contract using Clarinet. It allows users to record and retrieve their individual counts.

## Scope
This project will show you how to develop unit test for a smart contract.

## Getting Started

### Prerequisites
- [Clarinet](https://docs.clarinet.xyz/) - Make sure you have Clarinet installed.
- [Yarn](https://yarnpkg.com/) - For managing dependencies.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Run unit test
   ```bash
   yarn test
   ```

## Some useful Commands

Create a new clarity project, run:
```
 clarinet new counter
```

To create a new contract, run:
```
clarinet contract new count-token   
```

To add requirement to Clainet.toml autommatically, run:
 ```
 clarinet requirements add SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard    
```

To check your code:
```
clarinet check
```
To run adn try your contract locally:
```
 clarinet console
```

To generate your devnet deployment plan:
```
 clarinet deployment generate --devnet          
```
 
To start devenet using Docker locally:
```
 clarinet devnet start
```
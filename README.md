# PayBeam Modal Library

## Overview

The **PayBeam Modal Library** is a lightweight and customizable modal component designed for seamless payment interactions on the Stellar blockchain. It allows users to generate invoices, share payment links, and process transactions efficiently.

## Features

- 🏦 **Invoice Generation** – Easily create payment requests.
- 🔗 **Shareable Payment Links** – Send invoices via simple URLs.
- 💳 **Stellar Blockchain Payments** – Direct integration with Stellar for seamless transactions.
- 🎨 **Customizable UI** – Built with flexibility in mind to match various design needs.
- ⚡ **Lightweight & Fast** – Optimized for quick rendering and minimal resource usage.

## Installation

To install the library, use npm:

```sh
npm install paybeam-modal-library
```

Or with Yarn:

```sh
yarn add paybeam-modal-library
```

## Usage

Import and integrate the modal component into your project:

```tsx
import PayBeamModal from 'paybeam-modal-library';
import React from 'react' // Import Ant Design styles
 import styles from './styles.module.css'
 import 'antd/dist/reset.css'; 

import PaymentModal from './PaymentModal'
export default PaymentModal
const PaymentPage = () => {
  return (
    <PayBeamModal
      invoiceId="12345"
      amount={50}
      currency="XLM"
      onSuccess={(tx) => console.log('Payment successful:', tx)}
      onError={(error) => console.error('Payment failed:', error)}
    />
  );
};

export default PaymentPage;
```

## Props

| Prop        | Type       | Description                               |
| ----------- | ---------- | ----------------------------------------- |
| `invoiceId` | `string`   | Unique identifier for the invoice.        |
| `amount`    | `number`   | Amount to be paid.                        |
| `currency`  | `string`   | Currency type (e.g., `XLM`, `USD`).       |
| `onSuccess` | `function` | Callback triggered on successful payment. |
| `onError`   | `function` | Callback triggered if the payment fails.  |

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Push the branch and submit a pull request.

## License

This project is licensed under the MIT License.

---

🚀 **Start using PayBeam Modal Library today and simplify payments on Stellar!**


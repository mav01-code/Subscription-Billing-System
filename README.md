# Subscription Billing System

A simple subscription billing system integrated with **Stripe** for payment processing.

## Features
- Subscription plans: **Basic, Pro, Premium**
- Stripe Checkout integration
- Secure payments using test mode
- Responsive UI

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Payments**: Stripe API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mav01-code/Subscription-Billing-System.git
   cd Subscription-Billing-System
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your **Stripe Secret Key**:
   ```sh
   STRIPE_SECRET_KEY=your_secret_key_here
   ```

4. Start the server:
   ```sh
   node server.js
   ```

5. Open `index.html` in your browser.

## Usage

- Select a subscription plan.
- Click **Proceed to Payment**.
- Use Stripe **test cards** (e.g., `4242 4242 4242 4242`).
- Complete payment and get redirected to `success.html`.

## Test Card Details

Use the following card details for testing payments:

- **Card Number**: `4242 4242 4242 4242`
- **Expiry**: Any future date
- **CVC**: Any 3 digits

## Author

Developed by **Akshaya Varshini**.
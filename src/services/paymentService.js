class PaymentService {
  constructor() {
    this.paymentMethods = [
      { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
      { id: 'upi', name: 'UPI', icon: '📱' },
      { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
      { id: 'wallet', name: 'Wallet', icon: '👛' }
    ];
  }

  // Simulate payment processing
  async processPayment(paymentData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.1; // 90% success rate
        
        if (isSuccess) {
          resolve({
            success: true,
            transactionId: 'TXN_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            amount: paymentData.amount,
            method: paymentData.method,
            timestamp: new Date().toISOString(),
            status: 'completed'
          });
        } else {
          reject({
            success: false,
            error: 'Payment failed. Please try again.',
            code: 'PAYMENT_FAILED'
          });
        }
      }, 2000);
    });
  }

  // Validate card details
  validateCard(cardData) {
    const errors = {};

    if (!this.luhnCheck(cardData.number)) {
      errors.number = 'Invalid card number';
    }

    if (!this.validateExpiry(cardData.expiry)) {
      errors.expiry = 'Invalid expiry date';
    }

    if (!/^\d{3,4}$/.test(cardData.cvv)) {
      errors.cvv = 'Invalid CVV';
    }

    if (!cardData.name.trim()) {
      errors.name = 'Cardholder name is required';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }

  // Luhn algorithm for card validation
  luhnCheck(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) return false;

    let sum = 0;
    let shouldDouble = false;
    
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned.charAt(i));
      
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    
    return sum % 10 === 0;
  }

  // Validate expiry date
  validateExpiry(expiry) {
    const [month, year] = expiry.split('/');
    if (!month || !year || month.length !== 2 || year.length !== 2) return false;

    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    
    if (monthNum < 1 || monthNum > 12) return false;

    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;

    if (yearNum < currentYear) return false;
    if (yearNum === currentYear && monthNum < currentMonth) return false;

    return true;
  }

  // Get supported payment methods
  getPaymentMethods() {
    return this.paymentMethods;
  }

  // Generate UPI QR code data
  generateUPIQRCode(amount, description) {
    const upiId = 'eventhub@paytm';
    return `upi://pay?pa=${upiId}&pn=EventHub&am=${amount}&tn=${encodeURIComponent(description)}`;
  }

  // Simulate UPI payment
  async simulateUPIPayment(amount) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          transactionId: 'UPI_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          amount: amount,
          method: 'upi',
          timestamp: new Date().toISOString()
        });
      }, 3000);
    });
  }
}

export const paymentService = new PaymentService();
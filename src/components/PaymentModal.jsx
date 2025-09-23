import React, { useState } from 'react';
import { paymentService } from '../services/paymentService';
import { QRCodeSVG } from 'qrcode.react';

const PaymentModal = ({ amount, eventTitle, onSuccess, onClose, ticketDetails }) => {
  const [step, setStep] = useState('method'); // method, card, upi, processing, success
  const [selectedMethod, setSelectedMethod] = useState('');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const paymentMethods = paymentService.getPaymentMethods();

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
    if (methodId === 'upi') {
      setStep('upi');
    } else if (methodId === 'card') {
      setStep('card');
    } else {
      processPayment(methodId);
    }
  };

  const handleCardInput = (field, value) => {
    let formattedValue = value;
    
    if (field === 'number') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);
    } else if (field === 'expiry') {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/, '$1/').slice(0, 5);
    } else if (field === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }
    
    setCardData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateAndProcess = () => {
    const validation = paymentService.validateCard(cardData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    processPayment('card');
  };

  const processPayment = async (method) => {
    setProcessing(true);
    setStep('processing');

    try {
      let result;
      if (method === 'upi') {
        result = await paymentService.simulateUPIPayment(amount);
      } else {
        result = await paymentService.processPayment({
          amount: amount,
          method: method,
          cardData: method === 'card' ? cardData : undefined
        });
      }
      
      setPaymentResult(result);
      setStep('success');
      
      setTimeout(() => {
        onSuccess(result);
      }, 2000);

    } catch (error) {
      setPaymentResult(error);
      setStep('error');
    } finally {
      setProcessing(false);
    }
  };

  const renderMethodSelection = () => (
    <div className="payment-methods">
      <h3>Select Payment Method</h3>
      <div className="methods-grid">
        {paymentMethods.map(method => (
          <div 
            key={method.id}
            className="method-card"
            onClick={() => handleMethodSelect(method.id)}
          >
            <span className="method-icon">{method.icon}</span>
            <span className="method-name">{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCardForm = () => (
    <div className="card-form">
      <h3>💳 Card Payment</h3>
      <div className="form-group">
        <label>Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardData.number}
          onChange={(e) => handleCardInput('number', e.target.value)}
          className={errors.number ? 'error' : ''}
        />
        {errors.number && <span className="error-text">{errors.number}</span>}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={cardData.expiry}
            onChange={(e) => handleCardInput('expiry', e.target.value)}
            className={errors.expiry ? 'error' : ''}
          />
          {errors.expiry && <span className="error-text">{errors.expiry}</span>}
        </div>
        
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            placeholder="123"
            value={cardData.cvv}
            onChange={(e) => handleCardInput('cvv', e.target.value)}
            className={errors.cvv ? 'error' : ''}
          />
          {errors.cvv && <span className="error-text">{errors.cvv}</span>}
        </div>
      </div>
      
      <div className="form-group">
        <label>Cardholder Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={cardData.name}
          onChange={(e) => handleCardInput('name', e.target.value)}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>
      
      <button className="btn btn-primary" onClick={validateAndProcess}>
        Pay ₹{amount}
      </button>
    </div>
  );

  const renderUPI = () => (
    <div className="upi-payment">
      <h3>📱 UPI Payment</h3>
      <div className="qr-code">
        <QRCodeSVG value={paymentService.generateUPIQRCode(amount, eventTitle)} size={200} />
        <p>Scan this QR code with any UPI app</p>
      </div>
      <div className="upi-id">
        <p>Or send payment to: <strong>eventhub@paytm</strong></p>
      </div>
      <button className="btn btn-primary" onClick={() => processPayment('upi')}>
        Simulate UPI Payment
      </button>
    </div>
  );

  const renderProcessing = () => (
    <div className="payment-processing">
      <div className="spinner"></div>
      <h3>Processing Payment...</h3>
      <p>Please don't close this window</p>
    </div>
  );

  const renderSuccess = () => (
    <div className="payment-success">
      <div className="success-icon">✅</div>
      <h3>Payment Successful!</h3>
      <div className="payment-details">
        <p><strong>Amount:</strong> ₹{amount}</p>
        <p><strong>Transaction ID:</strong> {paymentResult.transactionId}</p>
        <p><strong>Method:</strong> {paymentResult.method}</p>
      </div>
      <p>Your tickets have been confirmed!</p>
    </div>
  );

  const renderError = () => (
    <div className="payment-error">
      <div className="error-icon">❌</div>
      <h3>Payment Failed</h3>
      <p>{paymentResult.error}</p>
      <button className="btn btn-primary" onClick={() => setStep('method')}>
        Try Again
      </button>
    </div>
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content payment-modal">
        <div className="modal-header">
          <h2>Payment - {eventTitle}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="payment-amount">
          <h3>Total Amount: ₹{amount}</h3>
        </div>

        <div className="payment-content">
          {step === 'method' && renderMethodSelection()}
          {step === 'card' && renderCardForm()}
          {step === 'upi' && renderUPI()}
          {step === 'processing' && renderProcessing()}
          {step === 'success' && renderSuccess()}
          {step === 'error' && renderError()}
        </div>

        {(step === 'card' || step === 'upi') && (
          <div className="payment-security">
            <p>🔒 Your payment is secure and encrypted</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
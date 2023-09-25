import React, { useState } from 'react';

function Privacy() {
  
  const privacyText = `
 

Privacy Policy

Last Updated: [Date of Last Update]

1. Introduction

Welcome to TNRTC train ticket booking. We value your privacy and are committed to protecting your personal information. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our services.

2. Information We Collect

We may collect various types of personal information from you, including but not limited to:

Contact Information: Your name, email address, phone number, and postal address.
Payment Information: Payment card details, billing address, and payment history.
Booking Information: Details of train bookings, travel preferences, and itineraries.
User Account Information: Username, password, and account preferences.
Communication Data: Information you provide when contacting our customer support or communicating with us through various channels.

3. How We Use Your Information

We may use your personal information for the following purposes:

To process and fulfill train ticket bookings.
To provide customer support and respond to inquiries.
To send booking confirmations and updates.
To improve our services and website functionality.
To analyze user behavior and preferences.
To send promotional offers and updates (with your consent).
To comply with legal obligations.

4. How We Share Your Information

We may share your personal information with third parties in the following circumstances:

Service Providers: We may share information with third-party service providers who assist us in providing our services.
Legal Requirements: We may disclose information when required by law or to protect our rights, privacy, safety, or property.
Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
5. Data Security

We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include data encryption, access controls, and regular security assessments.

6. Your Rights

You have certain rights regarding your personal information, including the right to access, correct, delete, or restrict its processing. You can also opt out of receiving promotional communications.

7. Cookies and Tracking Technologies

We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. You can manage cookie preferences through your browser settings.
 
8. Changes to this Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any significant changes.

9. Contact Us

If you have any questions, concerns, or requests related to this Privacy Policy or your personal information, please contact us at TNRTCsupport@gmail.com.

By using our services, you consent to the terms of this Privacy Policy.
  `;

  const [showPrivacy, setShowPrivacy] = useState(false);

  const togglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };

  return (
    <div className='www'>
      <h2>Privacy policy</h2>
      <button onClick={togglePrivacy}>
        {showPrivacy ? 'Hide Privacy' : 'Show Privacy'}
      </button>

      {showPrivacy && (
        <div className="terms-container">
          <p>{privacyText}</p>
        </div>
      )}
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Privacy;

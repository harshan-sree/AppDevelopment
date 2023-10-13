import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Terms() {
  
  const termsText = `
    Welcome to TNRTC!
    Please read these terms and conditions carefully before using our services...
    1. Booking Process:
    - Users must be at least 18 years old to make a booking.
    - Users must provide accurate and complete passenger information during the booking process.
    - The booking process may require users to create an account.

 2. Ticket Availability:
    - Ticket availability is subject to change and not guaranteed until payment is completed.
    - We do not guarantee the availability of specific trains or routes.

 3. Ticket Pricing:
    - Ticket prices are subject to change without notice.
    - Users are responsible for all applicable taxes, fees, and charges.
    - Promotions and discounts may have specific terms and conditions.

 4. Payment Terms:
    - We accept payments via gpay, paytm, netbanking, phonepay.
    - Payment processing is secured using industry-standard encryption.
    - Refund and cancellation policies are outlined in section 8.
    5. Booking Confirmation:
    - Booking confirmation will be sent to the email address provided during the booking process.
    - Users should review booking details for accuracy and report any discrepancies.

 6. Travel Information:
    - Train schedules and routes are provided for informational purposes.
    - Users are responsible for verifying the accuracy of travel details.

 7. Passenger Information:
    - Users are responsible for providing accurate and complete passenger information.
    - Unaccompanied minors may have age restrictions.

 8. Changes and Cancellations:
    - Users can request changes or cancellations through their account or by contacting customer support.
    - Changes and cancellations may be subject to fees or penalties.
    - Refund policies:
      - refund will be reflected within 2-3 working days.

 9. Travel Insurance:
    - Travel insurance options may be available during the booking process.
    - Terms and conditions for travel insurance are provided separately.

 10. Baggage Allowance:
     - Baggage policies, weight limits, and fees for excess baggage are determined by the train operator.
 11. Ticket Use:
     - Tickets are non-transferable and should only be used by the named passenger.
     - Resale of tickets may be subject to legal action.

 12. Travel Documents:
     - Passengers are responsible for ensuring they have the necessary identification and travel documents.
     - International travel may require visas and passports.

 13. Customer Support:
     - Customer support is available via email- " TNRTCsupport@gmail.com ".
     - Response times and hours of operation may vary.

 14. Privacy and Data Handling:
     - We collect and handle user data in accordance with our Privacy Policy.

 15. Intellectual Property:
     - All content on the website is protected by copyright and trademark laws.

 16. Liability and Disclaimers:
     - We are not responsible for delays, disruptions, or accidents during train travel.
     - Our liability is limited to the cost of the ticket.

 17. Changes to Terms and Conditions:
     - We reserve the right to modify these terms and conditions. Users will be notified of changes.

 18. Termination of Services:
     - We may terminate user access for violations of these terms and conditions.
     20. User Responsibilities:
     - Users must comply with all applicable laws and regulations.

 By using our website, you agree to these terms and conditions.

 Last updated: 22 Sep 2023
 
  `;

  const [showTerms, setShowTerms] = useState(false);

  const toggleTerms = () => {
    setShowTerms(!showTerms);
  };
  const handle =()=>{
    window.history.back();
   }

  return (
    <div className='eee'>
      <h2>Terms and Conditions</h2>
      <button onClick={toggleTerms} className="text-dark">
        {showTerms ? 'Hide Terms' : 'Show Terms'}
      </button>

      {showTerms && (
        <div className="terms-container">
          <p>{termsText}</p>
        </div>
      )}
      <div className='handle'>
      <button className='bac' onClick={handle}>Back</button>
    </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
     
    </div>
  );
}

export default Terms;

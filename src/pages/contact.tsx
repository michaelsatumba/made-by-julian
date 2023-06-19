import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <div>
	<Link href="/">Back to Home</Link>
      <h2>Contact Information</h2>
      <p>
        You can reach out to us through the following contact details:
      </p>
      <ul>
        <li>
          <strong>Email:</strong> example@example.com
        </li>
        <li>
          <strong>Phone:</strong> +1 123-456-7890
        </li>
        <li>
          <strong>Address:</strong> 123 Street, City, Country
        </li>
      </ul>
      <p>
        Feel free to contact me for any inquiries, collaborations, or questions you may have. We'll get back to you as soon as possible.
      </p>
    </div>
  );
}

export default Contact;

import React, { useState } from 'react';

function EmailComposer() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    
    alert(`Email sent to ${to} with subject: ${subject}`);
  };

  return (
    <div>
      <h2>Email Composer</h2>
      <form>
        <div>
          <label>To:</label>
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={handleSendClick}>
          Send
        </button>
      </form>
    </div>
  );
}

export default EmailComposer;

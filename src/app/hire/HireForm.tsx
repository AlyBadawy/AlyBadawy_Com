'use client';

import { FormEvent, useState } from 'react';

export default function HireForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const data = {
      name,
      email,
      message,
    };

    const response = await fetch('/api/hire-me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Message sent successfully');
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
      setError(false);
    }
    if (!response.ok) {
      setSuccess(false);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <form className='w-full max-w-lg' onSubmit={handleSubmit}>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            placeholder='Jane Doe'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='w-full md:w-1/2 px-3'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            placeholder='jane.doe@example.com'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-wrap -mx-3 mb-6'>
        <div className='w-full px-3'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            rows={8}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p className='text-xs italic'>
            Make it as long and as crazy as you&apos;d like
          </p>
        </div>
      </div>
      <div className='flex flex-wrap mb-6'>
        {error && (
          <div className='w-full mb-6 md:mb-0'>
            <p className='text-red-500 text-xs italic'>
              😔 Something went wrong! Please try again
            </p>
          </div>
        )}
        <button type='submit' className='my-4' disabled={loading || success}>
          <p className='py-2 px-4 inline rounded-md border-2 border-cyan-700'>
            {loading && (
              <>
                <span className='text-gradient'>Sending...</span> 🚀
              </>
            )}
            {!loading && error && (
              <>
                <span className='text-red-500'>Try again!</span> 🤷
              </>
            )}
            {!loading && !error && !success && (
              <>
                <span className='text-gradient'>send!</span>
              </>
            )}
            {!loading && !error && success && (
              <>
                <span className='text-gradient'>Sent!</span> 👌
              </>
            )}
          </p>
        </button>
      </div>
    </form>
  );
}

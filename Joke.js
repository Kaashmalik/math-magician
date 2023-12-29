import React, { useState, useEffect } from 'react';

const Joke = () => {
  const API_KEY = process.env.REACT_APP_JOKE_API_KEY;
  const limit = 1;
  const api_uri = `https://api.api-ninjas.com/v1/jokes?limit=${limit}`;
  
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const fetchJoke = async () => {
        try {
            const req = await fetch(api_uri, {
                headers: {
                    'X-Api-Key': API_KEY
                }
            });

            if (!req.ok) {
                console.log("Error While Fetching Joke");
                return;
            }

            const res = await req.json();
            setJoke(res[0]?.joke);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    fetchJoke();
}, [API_KEY, api_uri]);

  return (
    <>
      <div className='container mt-5 text-center'>
        <div className='card shadow p-4 bg-light'>
          <h2 className='text-primary mb-4'>Joke of the Day</h2>
          <p className='lead'>{joke}</p>
          <div className='mt-4'>
            <button
              className='btn btn-primary'
              onClick={() => window.location.reload()}
            >
              Get Another Joke
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joke;

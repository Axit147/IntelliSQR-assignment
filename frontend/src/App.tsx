import { useEffect } from 'react';
import './App.css';
import Button from './components/ui/Button';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

function App() {
  const queryClient = useQueryClient();
  const { data }: any = useQuery({ queryKey: ['user'] });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-medium'>
        Welcome{' '}
        <span className='text-4xl text-[#2B3A67] font-bold'>{data?.email}</span>
        !!
      </h1>
      {data?.email ? (
        <Button
          className='bg-red-600'
          onClick={() => {
            queryClient.setQueryData(['user'], null);
          }}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/signup')}>Signup</Button>
        </>
      )}
    </div>
  );
}

export default App;

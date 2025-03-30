import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from './ui/Button';
import { useSignup } from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { formSchema, UserFormData } from '../types/userFormData';

const Signup = () => {
  const { mutateAsync: signup, isPending } = useSignup();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: UserFormData) {
    console.log(values);
    toast
      .promise(signup(values), {
        loading: 'Creating your account...',
        success: () => <b>Signed up!</b>,
        error: (err) => {
          return `${err}`;
        },
      })
      .then(() => {
        navigate('/');
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-12 w-80'>
      <h1 className='text-3xl font-bold'>Welcome!</h1>
      <div className='flex flex-col justify-center gap-6'>
        <div className='flex flex-col text-left'>
          <input
            type='text'
            className='border rounded-lg border-[#D6D6D6] px-3.5 py-3'
            placeholder='Email'
            {...register('email')}
          />
          {errors.email?.message && (
            <span className='text-red-500 text-sm'>{errors.email.message}</span>
          )}
        </div>
        <div className='flex flex-col text-left'>
          <input
            type='password'
            className='border rounded-lg border-[#D6D6D6] px-3.5 py-3'
            placeholder='Password'
            {...register('password')}
          />
          {errors.password?.message && (
            <span className='text-red-500 text-sm'>
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <Button isLoading={isPending}>Signup</Button>
      <span>
        Already have an account? <Link to={'/login'}>Log In</Link>
      </span>
    </form>
  );
};

export default Signup;

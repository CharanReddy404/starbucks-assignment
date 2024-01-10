import { useState } from 'react';

const Header = () => {
  const [nav, setNav] = useState('REWARDS');

  return (
    <div className='fixed px-8 gap-6 h-16 left-0 right-0 max-w-full z-50 transition-transform duration-300 ease-in-out top-0 bg-white flex items-center shadow-lg'>
      <div className='h-12 mb-2'>
        <img
          src='https://www.starbucks.in/assets/icon/logo.png'
          alt='logo.png'
        />
      </div>
      <div className='h-10 w-full flex flex-rows justify-between'>
        <div className='flex mt-3 flex-rows h-full gap-4 text-base font-semibold'>
          <span
            className={
              nav === 'MENU'
                ? 'border-b-8 border-solid border-green-700'
                : '' + 'cursor-pointer'
            }
            onClick={() => {
              setNav('MENU');
            }}
          >
            MENU
          </span>
          <span
            className={
              nav === 'REWARDS'
                ? 'border-b-8 border-solid border-green-700'
                : '' + 'cursor-pointer'
            }
            onClick={() => {
              setNav('REWARDS');
            }}
          >
            REWARDS
          </span>
          <span
            className={
              nav === 'GIFT CARDS'
                ? 'border-b-8 border-solid border-green-700'
                : '' + 'cursor-pointer'
            }
            onClick={() => {
              setNav('GIFT CARDS');
            }}
          >
            GIFT CARDS
          </span>
        </div>
        <div className='flex flex-rows gap-4'>
          <button className='flex gap-2 p-2 px-3 font-bold'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              style={{ fill: 'rgba(0, 0, 0, 1);transform: ;msFilter:;' }}
            >
              <circle cx='12' cy='12' r='4'></circle>
              <path d='M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z'></path>
            </svg>{' '}
            Find a store
          </button>
          <button className='p-2 px-3 rounded-3xl font-semibold border border-solid border-black'>
            Sign in
          </button>
          <button className='p-2 px-3 rounded-3xl text-white font-semibold bg-black border border-solid border-black '>
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

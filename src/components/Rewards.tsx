import { useState } from 'react';
import BgImage from '../assets/bg-reward.jpg';
import { data, dataEndless } from '../const';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';

function Rewards() {
  const [star, setStar] = useState('20');

  return (
    <div className='mt-16'>
      <div className='w-full text-white bg-[#1e3932]'>
        <h1 className='p-4 pl-32 font-semibold'>STARBUCKS REWARDS</h1>
      </div>

      {/* FREE COFFEE */}
      <div className='relative'>
        <div
          className='bg-cover bg-center h-[40rem]'
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className='absolute left-10 inset-0 flex items-center '>
            <div className=' text-white'>
              <h1 className='text-3xl font-bold mb-4'>FREE COFFEE</h1>
              <h1 className='text-3xl font-bold mb-4'>IS A TAP AWAY</h1>
              <p>Join now to start earning Rewards</p>
              <button className='bg-[#008248] mt-4 text-white font-bold py-2 px-4 rounded-3xl'>
                Join now
              </button>
              <p className='pt-4'>
                or{' '}
                <a className='underline' href='#'>
                  join in the app
                </a>{' '}
                for best experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting Started is easy */}
      <div className='py-16 p-6 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>Getting Started is easy</h1>
        <p className='p-4 font-semibold text-gray-400'>
          Earn Stars and get rewarded in a few easy steps.
        </p>
        <div className='flex justify-between mt-8 m-4'>
          {data.map((item) => {
            return (
              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold px-3 text-2xl border border-[#008248] rounded-3xl'>
                  {item.no}
                </h1>
                <h1 className='font-bold pt-4'>{item.title}</h1>
                <p className='text-center pt-4 px-8'>{item.p}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Get your favorites for free */}
      <div className='pt-16 flex flex-col justify-center items-center bg-[#f1f8f6]'>
        <h1 className='text-3xl font-bold'>Get your favorites for free</h1>

        <div className='flex mt-3 pt-6 text-2xl flex-rows h-full gap-10 font-semibold'>
          {['20', '50', '150', '200', '400'].map((item) => (
            <span
              className={`pb-2 cursor-pointer ${
                star === item
                  ? 'border-b-[6px] border-solid border-green-700'
                  : ''
              }`}
              onClick={() => {
                setStar(item);
              }}
            >
              {item}⭐
            </span>
          ))}
        </div>
        <div className='flex p-5 w-full bg-[#d4e9e2] gap-8 h-80 justify-center'>
          <div className='w-[30%] p-14'>
            <img
              src='https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg'
              alt='coffee'
            />
          </div>
          <div className='w-[30%] flex flex-col justify-center'>
            <h1 className='text-2xl font-semibold pb-8'>
              Customize your drink {star}⭐
            </h1>
            <p>
              Make your drink just right with an extra espresso shot, dairy
              substitute or a dash of your favorite syrup.
            </p>
          </div>
        </div>
      </div>

      {/* Endless Extras */}
      <div className='p-16 flex flex-col justify-center items-center bg-[#f1f8f6]'>
        <h1 className='text-2xl font-bold'>Endless Extras</h1>
        <p className='mx-80 pt-4 text-center'>
          Joining Starbucks• Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </p>
        <div className='flex text-center pt-8'>
          {dataEndless.map((item) => (
            <div
              key={item.title}
              className='p-8 flex flex-col justify-center items-center'
            >
              <img className='h-28 rounded-[50%]' src={item.url} alt='' />
              <h1 className='p-4 font-semibold'>{item.title}</h1>
              <p>{item.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cash or card, you earn Stars */}
      <div className='p-16 flex flex-col justify-center items-center bg-[#f3f1e7]'>
        <h1 className='text-2xl font-bold'>Cash or card, you earn Stars</h1>
        <p className='mx-80 pt-4 text-center'>
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>

        {/* 1 */}
        <div className='flex items-start gap-20 p-10'>
          <div className='w-64'>
            <h1 className='font-semibold pb-2'>1★ per dollar</h1>
            <p>Pay as you go</p>
          </div>
          <div className='flex w-[30%]'>
            <img className='h-32' src={img1} alt='img1' />
            <div>
              <h1 className='font-semibold pb-2'>Scan and pay separately</h1>
              <p>Use cash or credit/debit card at the register.</p>
            </div>
          </div>
          <div className='flex w-[40%]'>
            <img className='h-32' src={img2} alt='img2' />
            <div>
              <h1 className='font-semibold pb-2'>Save payment in the app</h1>
              <p>
                Check-out faster by saving a credit/debit card or PayPal to your
                account. You'll be able to order ahead or scan and pay at the
                register in one step.
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className='flex items-start gap-20 p-10'>
          <div className='w-64'>
            <h1 className='font-semibold pb-2'>2★ per dollar</h1>
            <p>Add funds in the app</p>
          </div>
          <div className='flex w-[30%]'>
            <img className='h-28' src={img3} alt='img3' />
            <div>
              <h1 className='font-semibold pb-2'>Preload</h1>
              <p>
                To save time and earn Stars twice as fast, add money to your
                digital Starbucks Card using any payment option. Scan and pay in
                one step or order ahead in the app.
              </p>
            </div>
          </div>
          <div className='flex w-[40%]'>
            <img className='h-30' src={img4} alt='img4' />
            <div>
              <h1 className='font-semibold pb-2'>Register your gift card</h1>
              <p>
                Then use it to pay through the app. You can even consolidate
                balances from multiple cards in one place.
              </p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className='flex items-start gap-20 p-10'>
          <div className='w-64'>
            <h1 className='font-semibold pb-2'>Up to 3★ per dollar</h1>
            <p>With Starbucks: Rewards Visa: Card</p>
          </div>
          <div className='flex w-[30%]'>
            <img className='h-28' src={img5} alt='img5' />
            <div>
              <h1 className='font-semibold pb-2'>Earn Stars even faster</h1>
              <p>
                Earn Stars on all purchases you make with our credit card @ in
                and outside of Starbucks. Earn 1 Star per $1 when you digitally
                preload your Starbucks Card with your Starbucks. Rewards Visas
                Card, and earn 2 Stars per $1 when you pay with that preloaded
                Starbucks Card.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;

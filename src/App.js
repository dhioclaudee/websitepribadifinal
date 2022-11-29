import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';

import photo1 from './assets/photo1.jpg';
import photo2 from './assets/photo2.jpg';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';
import photo5 from './assets/photo5.jpg';
import photo6 from './assets/photo6.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl font-bold">Dhio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Claudio Loing
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Computer Science Student
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Bismillah Cum Laude, Amen
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.instagram.com/dhioclaudee_/">
                <AiFillInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100007610867417">
                <AiFillFacebook />
              </a>
            </div>
            <div className=" mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img alt="#" src={photo5} />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Love Language</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Act Of Service
            </p>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Zodiac</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Virgo
            </p>
          </div>
          <h3 className="text-3xl py-1 dark:text-white ">Gallery</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                alt="#"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={photo2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                alt="#"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={photo3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                alt="#"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={photo4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                alt="#"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={photo1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                alt="#"
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={photo6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;


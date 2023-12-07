import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const logo = `<SS />`
  return (
    <>
    <header>
    <div class = "flex pt-16 pb-16 pl-80 pr-80 justify-between items-center self-stretch">
      <div class ="flex p-0 32px justify-between items-center flex-1">
          <div class ="text-gray-900 bg-gray-100 text-center font-inter font-bold text-3xl leading-9 tracking-tight">      
            <h2>{logo}</h2>
          </div>

          <div class ="flex justify-center items-center gap-6">
            <ul class ="list-none m-0 p-0 flex justify-center items-center gap-6">
              <li class ="inline"><a href = "#about">About</a></li>
              <li class ="inline"><a href = "#work">Work</a></li>
              <li class ="inline"><a href = "#testimonials">Testimonials</a></li>
              <li class ="inline"><a href = "#contact">Contact</a></li>
            </ul>

            <img src="Icon.png" alt="Gray star"/>
            <button class ="rounded-lg bg-gray-900 text-gray-50 font-inter text-base-16 font-medium leading-6 normal p-3" type="button">Download CV</button>
          </div>
      </div>
    </div>
    </header>

    <body>
      <div class="flex p-24 20 items-start self-stretch">
        <div class ="flex p-0 32px items-start gap-12 flex-1 flex-wrap">
              <div class ="flex max-w-768 flex-col justify-center items-start gap-12 self-stretch">
                <div class ="text-gray-900 font-inter text-5xl font-bold leading-12 tracking-tight">
                  <h>Hi, I’m Sagar 👋</h>
                </div>
                <div class = "text-gray-600 font-inter text-base font-normal leading-6 w-46">
                  <p>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
              </div>
              <div class ="">
                <div class="">
                  <p>Ahmedabad, India</p>
                  <p>Available for new projects</p>
                </div>
                <div class="">
                <img src="Icon_cat.png" alt="cat"/>
                <img src="Icon_twitter.png" alt="twitter"/>
                <img src="Icon_5holes.png" alt="Gray star"/>

                </div>
              </div>
        
        </div>
              <div class ="small_container_2">
                <img src="Pic.png" alt="Coder man"/>
              </div>
      </div>
    </body>
    </>
  )
}

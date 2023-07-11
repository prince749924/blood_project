import React from 'react';
import './Home.css';

function HomeInfo() {
  return (
    <>
      {/* Section: Design Block */}
      {/* <section className="mb-5">
         
        <div
          className="relative overflow-hidden bg-cover img-fluid "
          style={{
            backgroundPosition: '30%',
            backgroundImage:
              'url("https://e0.pxfuel.com/wallpapers/598/193/desktop-wallpaper-blood-bank-blood-donation.jpg")',
            height: '500px',
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                 
                <a href="/profile">
              <button
                type="button"
                class="text-white fs-5 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Donate
              </button>
            </a>

            <a href="/donars">
              <button
                type="button"
                class="text-white fs-5 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Donars
              </button>
            </a>
              </div>
            </div>
          </div>
        </div>
    
      </section> */}
      {/* Section: Design Block */}


      {/* // About Section Starts */}
    <section id="aboutus">
         
        <div className='container bg-danger mt-1 mb-5'>
            <div className='row'>
            <div className='col-md-4  rounded bg-danger'>
            
            <h1 className='text-center text-light flex'>About Us</h1><br/>
            <span class="fs-5 fw-bold text-light flex"><i class="bi bi-chat-dots-fill text-light"/>  jivan1@gmail.com </span><br/>
            <span class="fs-5 fw-bold text-light flex"><i class="bi bi-telephone-fill text-light" />  +977 9869121812 </span><br/>
            <span class="fs-5 fw-bold text-light flex"><i class="bi bi-geo-alt-fill text-light" />  Nepal, Bhaktapur, lokanthali-1</span> <br/> 
            
            </div>

            {/* About us second Sections */}
            <div className='col-md-7 ms-5 rounded bg-danger'>
                <h1 className='text-center text-light flex'>Who We Are?</h1>
                <p className='text-light fw-bold flex'>Blood Buddies is for public donation center with blood donation members in the changing health care system.</p>
                <p className='text-light fw-bold flex'>. Specialist blood donors and clinical supervision.</p>
                <p className='text-light fw-bold flex'>. Increasing communication with our members.</p>
                <p className='text-light fw-bold flex'>. High quality assessment, diagnosis and treatment.</p>
                <p className='text-light fw-bold flex'>. Examine critically to ensure alignment.</p>
                <p className='text-light fw-bold flex'>. The extra care of a multi-disciplinary team.</p>
            </div>

                
            </div>
        </div>
         
    </section>

    {/* // About Section Ends */}
    </>
  );
}

export default HomeInfo;

import React from "react";
import Seo from "../../components/Seo";
import Navbars from "../../components/Navbars";
import Swal from "sweetalert2";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xknkqdnj");

  if (state.succeeded) {
    return Swal.fire({
      title: "Thank You!",
      text: "Your message will be deliver soon!",
      icon: "success",
      confirmButtonColor: "#1E40AF",
    });
  }

  // const HandleSubmit = () => {
  //   Swal.fire({
  //     title: "Thank You!",
  //     text: "Your message will be deliver soon!",
  //     icon: "success",
  //     confirmButtonColor: "#1E40AF",
  //   });
  // };

  const RenderContact = () => {
    return (
      <React.Fragment>
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Lets Talk!</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">I'm Available For Cooperation With You!</p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <form onSubmit={handleSubmit} className="mx-auto flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="name" className="leading-7 text-sm text-gray-400">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label for="email" className="leading-7 text-sm text-gray-400">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />

                      {/* error */}
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label for="subject" className="leading-7 text-sm text-gray-400">
                        Subject
                      </label>
                      <input
                        type="subject"
                        id="subject"
                        name="subject"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label for="message" className="leading-7 text-sm text-gray-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      />

                      {/* error */}
                      <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button type="submit" disabled={state.submitting} className="flex mx-auto text-white bg-blue-800 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                      Submit!
                    </button>
                  </div>
                </form>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                  <a className="text-blue-400" href="mailto:naufalakbar378@gmail.com">
                    naufalakbar378@gmail.com
                  </a>
                  <p className="leading-normal my-5">Malang, East Java, Indonesia</p>
                  <span className="inline-flex">
                    <a className="text-gray-400" href="https://github.com/nuflakbrr" target="_blank">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href="https://www.instagram.com/kbrnugroho/" target="_blank">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href="https://www.linkedin.com/public-profile/in/nuflakbrr" target="_blank">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href="mailto:naufalakbar378@gmail.com" target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };
  return (
    <>
      <Seo title={"Lets Talk | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderContact />
    </>
  );
}

export default Contact;

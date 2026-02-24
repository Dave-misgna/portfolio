"use client";
import Link from "next/link";

import { useState } from "react";

export default function Contact(){
    const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    
    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

        if (res.ok) {
      alert("Message sent successfully, I will get back to you soon!");
      e.currentTarget.reset();
    } else {
      alert("Something went wrong");
    }

        setSubmitting(false);
  };
    return(
        <section id="contact" className="min-h-screen bg-neutral-900">
            <div className="grid sm:grid-cols-2 gap-20 items-start p-8">
                <div>
                    <h1 className="text-3xl font-bold text-white">Contact me</h1>
                    <p className="py-4 text-gray-400">
                        Feel free to reach out to me for any inquiries, potential collaborations, project opportunities, 
                        or simply to start a conversation. I am always open to connecting with fellow developers, designers, 
                        tech enthusiasts, potential clients, and anyone interested in my work or ideas. 
                        Whether you have a specific project in mind, need assistance with development, 
                        want to discuss innovative solutions, or just want to exchange knowledge and experiences, 
                        I would be more than happy to hear from you. Building meaningful connections and contributing to impactful
                        projects is something I truly value, so don’t hesitate to get in touch I look forward to connecting with you.
                    </p>
                    <div className="flex items-center justify-center gap-6 py-18">
                        
                        <Link href="https://www.linkedin.com/in/dawit-misgna-aa3ab825a/" target="_blank"
                            className="p-3 rounded-lg border border-neutral-700 bg-neutral-800 
                            hover:border-blue-500 hover:bg-neutral-700 
                            transition-all duration-300 hover:scale-110"
                        >
                            <svg
                            className="w-6 h-6 text-gray-300 hover:text-blue-500 transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            >
                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C22.42 7.6 24 10.02 24 14.1V24h-5v-8.6c0-2.05-.04-4.7-2.86-4.7-2.87 0-3.3 2.24-3.3 4.55V24h-5V8z" />
                            </svg>
                        </Link>

                       
                        <Link
                        href="https://github.com/Dave-misgna"
                        target="_blank"
                        className="p-3 rounded-lg border border-neutral-700 bg-neutral-800 
                        hover:border-white hover:bg-neutral-700 
                        transition-all duration-300 hover:scale-110"
                    >
                        <svg
                        className="w-6 h-6 text-gray-300 hover:text-white transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.8 2.8 1.28 3.48.98.1-.77.42-1.28.76-1.57-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.4 11.4 0 013 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.76.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.61-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </Link>

                    
                    <Link
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        className="p-3 rounded-lg border border-neutral-700 bg-neutral-800 
                        hover:border-sky-400 hover:bg-neutral-700 
                        transition-all duration-300 hover:scale-110"
                    >
                        <svg
                        className="w-6 h-6 text-gray-300 hover:text-sky-400 transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M18.244 2H21l-6.56 7.5L22.5 22h-6.86l-5.38-7.04L3.9 22H1l7.06-8.06L1.5 2h6.98l4.88 6.4L18.244 2z" />
                        </svg>
                    </Link>

                    </div>

                </div>
                        
                <div className="flex flex-col items-start">
                
                    <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                            First name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                            Last name
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                required
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                            </div>
                        </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                            Email
                            </label>
                            <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                            />
                            </div>
                        </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                            Message
                            </label>
                            <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                                required
                            />
                            </div>
                        </div>
                        </div>

                        <div className="py-15">
                            <button
                                type="submit"
                                disabled={submitting}
                                aria-busy={submitting}
                                className="flex items-center justify-center gap-2 w-full rounded-md bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold
                                text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2
                                focus-visible:outline-blue-500 disabled:opacity-60 disabled:cursor-not-allowed">
                                {submitting ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                        </svg>
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    "Let's talk"
                                )}
                            </button>
                        </div>
                    </form>
                </div>

    </div>
        </section>
    );
}
"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [isSending, setIsSending] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (error.email) {
      return;
    } else {
      setError((prev) => ({ ...prev, required: false }));
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    if (!serviceID || !templateID || !options.publicKey) {
      toast.info(
        "Contact form submission requires deployment EmailJS configuration. Please reach out directly via email or phone."
      );
      return;
    }

    setIsSending(true);
    try {
      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error(err?.text || "Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase tracking-wider">
        Connect with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-4 lg:p-6 bg-[#0e142e]/60">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-gray-200">
              Your Name
            </label>
            <input
              id="contact-name"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-sm font-medium text-gray-200">
              Your Email
            </label>
            <input
              id="contact-email"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white"
              type="email"
              maxLength="100"
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError((prev) => ({
                  ...prev,
                  email: input.email ? !isValidEmail(input.email) : false,
                }));
              }}
              placeholder="e.g. john@example.com"
            />
            {error.email && (
              <p className="text-xs text-red-400">
                Please provide a valid email address.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="text-sm font-medium text-gray-200">
              Your Message
            </label>
            <textarea
              id="contact-message"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
              placeholder="How can I help with your frontend engineering needs?"
            />
          </div>

          <div className="flex flex-col items-center gap-2 mt-2">
            {error.required && (
              <p className="text-xs text-red-400">
                All fields are required.
              </p>
            )}
            <button
              type="button"
              aria-label="Send Message"
              disabled={isSending}
              className="flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 md:px-12 py-3 text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white cursor-pointer disabled:opacity-50"
              onClick={handleSendMail}
            >
              <span>{isSending ? "Sending..." : "Send Message"}</span>
              <TbMailForward size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

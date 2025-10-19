import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Loader2, AlertTriangle } from "lucide-react";

// No-account email relay via FormSubmit
const RECIPIENT = "belgony.nsimba@nextgenscholarsacademy.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    bait: "", // honeypot
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");
  const hideTimerRef = useRef(null);

  useEffect(() => {
    // cleanup timer on unmount
    return () => hideTimerRef.current && clearTimeout(hideTimerRef.current);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          33309 1st Way South A205
          <br />
          Federal Way, WA 98003
        </>
      ),
    },
    { icon: Phone, title: "Phone", content: "(206) 823-4047" },
    {
      icon: Mail,
      title: "Email",
      content: "belgony.nsimba@nextgenscholarsacademy.com",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMsg("Please fill out all fields.");
      return;
    }
    if (!validEmail(formData.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (formData.bait) return; // bot

    try {
      setStatus("submitting");

      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(
        RECIPIENT
      )}`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `NextGen Contact — ${formData.name}`,
          _template: "table",
          _captcha: "false",
          _replyto: formData.email,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.errors?.[0]?.message || `Request failed (${res.status})`
        );
      }

      setFormData({ name: "", email: "", message: "", bait: "" });
      setStatus("success");

      // auto-hide the "Sent." badge after 5s
      hideTimerRef.current && clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8 border-l-4 border-blue-600 pl-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start">
                  <info.icon
                    className="mr-3 mt-1 flex-shrink-0"
                    style={{ color: "#1e40af" }}
                    size={20}
                  />
                  <div className="text-gray-700">
                    <strong>{info.title}:</strong>
                    <br />
                    {info.content}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600">
              Have questions about our programs? We&apos;d love to hear from
              you. Reach out to us directly or fill out the contact form.
            </p>
          </div>

          {/* RIGHT: form */}
          <div>
            {/* Success message — beautiful and professional */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error message — beautiful and professional */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Unable to Send Message
                    </h3>
                    <p className="text-sm text-red-700 mt-1">
                      {errorMsg || "Please try again or contact us directly."}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* honeypot */}
              <input
                type="text"
                name="bait"
                value={formData.bait}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="text-white px-6 py-2 rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
                style={{ backgroundColor: "#1e40af" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1e3a8a";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#1e40af";
                }}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Loader2, AlertTriangle } from "lucide-react";

// No-account email relay via FormSubmit
const RECIPIENT = "belgonynsimba@gmail.com";

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
    { icon: Mail, title: "Email", content: "belgonynsimba@gmail.com" },
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
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
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
            {/* Success badge — short, disappears after 5s */}
            {status === "success" && (
              <div className="mb-4 inline-flex items-center rounded-md bg-green-600 text-white text-sm px-3 py-1.5">
                Sent.
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="mb-4 flex items-center gap-2 rounded-md bg-red-50 px-3 py-2 text-red-700">
                <AlertTriangle size={18} />
                <span>{errorMsg}</span>
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
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
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

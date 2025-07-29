export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>

        {/* Contact Form */}
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;

            try {
              const res = await fetch(
                "http://localhost:3000/api/v1/form/contact",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ name, email, message }),
                }
              );

              const data = await res.json();
              if (data.success) {
                alert("Message sent successfully!");
                form.reset();
              } else {
                alert("Something went wrong: " + data.message);
              }
            } catch (err) {
              alert("Server error: " + err.message);
            }
          }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

import { useEffect } from "react";

export default function MindbodyAppointments() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://brandedweb.mindbodyonline.com/embed/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="book" className="scroll-mt-20 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Book Your Session
        </h2>
        <div
          className="mindbody-widget"
          data-widget-type="Appointments"
          data-widget-id="0c5415329b7"
        />
      </div>
    </section>
  );
}
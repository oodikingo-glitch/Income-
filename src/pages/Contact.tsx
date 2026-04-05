export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-blue">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      
      <p>If you have any questions, suggestions, or feedback, feel free to reach out.</p>
      <p>We are always open to hearing from our readers and improving our content.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">📧 Email</h2>
      <p><a href="mailto:odananegero@gmail.com" className="text-blue-600 hover:underline font-medium">odananegero@gmail.com</a></p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What You Can Contact Us For</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Questions about articles</li>
        <li>Suggestions for new topics</li>
        <li>Reporting issues or errors</li>
        <li>General feedback</li>
      </ul>

      <p>We aim to respond as soon as possible.</p>

      <hr className="my-8" />

      <p className="font-medium text-gray-700">Thank you for being part of IncomePilot.</p>
    </div>
  );
}

// src/app/layout.js
import "./index.css";

export const metadata = {
  title: "Background Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {/* Background Image */}
        <div className="fixed inset-0 z-0">
         <img
            src="/GKT/assets/Back1.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-80"
            />

        </div>

        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

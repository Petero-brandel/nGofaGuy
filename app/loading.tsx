import Image from "next/image";

export default function Loading() {
  return (
    <>
      <style>{`
        @keyframes scaleUpDown {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-scaleUpDown {
          animation: scaleUpDown 3s ease-in-out infinite;
        }
      `}</style>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20">
        <div className="animate-scaleUpDown">
          <Image
            src="/android-chrome-512x512.png" // Replace with your logo path
            alt="GofaGuy Logo"
            width={80}
            height={80}
            priority
            className="select-none"
          />
        </div>
      </div>
    </>
  );
}

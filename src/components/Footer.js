"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// SVGs for icons
function PowerIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      stroke="black"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="16" cy="16" r="13" stroke="black" fill="none" />
      <line x1="16" y1="8" x2="16" y2="17" />
    </svg>
  );
}

function BatteryIcon({ percent = 87, className = "" }) {
  // percent: 0-100
  const width = 28;
  const height = 14;
  const fillWidth = Math.max(2, Math.round((percent / 100) * (width - 4)));
  return (
    <svg
      className={className}
      width="34"
      height="16"
      viewBox="0 0 34 17"
      fill="none"
      stroke="black"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <rect x="1" y="2" width={width} height={height} rx="3" fill="none" />
      <rect
        x="3"
        y="4"
        width={fillWidth}
        height={height - 4}
        rx="2"
        fill={percent > 20 ? "#000" : "#f87171"}
        stroke="none"
      />
      <rect
        x={width + 1}
        y={6}
        width="3"
        height="4"
        rx="1"
        fill="black"
        stroke="none"
      />
      <rect
        x="1"
        y="2"
        width={width}
        height={height}
        rx="3"
        fill="none"
        stroke="black"
      />
    </svg>
  );
}

function VolumeIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="black"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3,8 8,8 13,3 13,19 8,14 3,14" fill="none" />
      <path d="M16 8c1.5 1.5 1.5 4.5 0 6" />
      <path d="M18 5c3 3 3 9 0 12" />
    </svg>
  );
}

function WifiIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="black"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 10c5-5 11-5 16 0" />
      <path d="M6 13c3-3 7-3 10 0" />
      <circle cx="11.5" cy="16" r="1.2" fill="black" />
    </svg>
  );
}

export default function Footer() {
  // For blackout effect
  const [blackout, setBlackout] = useState(false);
  const [fade, setFade] = useState(false);

  // For time/date
  const [now, setNow] = useState(new Date());

  // Fake battery percent (static or could randomize)
  const batteryPercent = 87;

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Blackout logic
  const handlePowerClick = () => {
    setBlackout(true);
    setTimeout(() => setFade(true), 10); // trigger fade-in
    setTimeout(() => setFade(false), 1500); // start fade-out after 1.5s
    setTimeout(() => setBlackout(false), 2500); // remove overlay after fade-out
  };

  // Format time and date
  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateStr = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      {/* Blackout overlay */}
      {blackout && (
        <div
          className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "black",
            transition: "opacity 0.5s",
            opacity: fade ? 1 : 0,
          }}
        />
      )}
      <footer
        className="relative w-full text-black mt-auto px-2"
        style={{ minHeight: 48 }}
      >
        <div
          className="relative flex items-center w-full"
          style={{ minHeight: 48 }}
        >
          {/* Power button (far left) */}
          <div className="flex items-center z-10" style={{ minWidth: 48 }}>
            <button
              aria-label="Power"
              onClick={handlePowerClick}
              className="flex items-center justify-center mr-2 hover:bg-black/10 rounded-full transition"
              style={{ width: 34, height: 34 }}
            >
              <PowerIcon />
            </button>
          </div>

          {/* Social icons (center, absolutely centered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0">
            <a
              href="mailto:contact@alisonhardy.com"
              target="_blank"
              rel="noopener"
              className="text-black no-underline cursor-pointer py-1 px-2 hover:underline"
            >
              <Image
                src="/resources/email.png"
                width={30}
                height={30}
                alt="Email"
                className="p-1  hover:bg-black/10 rounded-sm"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/alison-hardy"
              target="_blank"
              rel="noopener"
              className="text-black no-underline cursor-pointer py-1 px-2 hover:underline"
            >
              <Image
                src="/resources/linkedin.png"
                width={30}
                height={30}
                alt="LinkedIn"
                className="p-1 hover:bg-black/10 rounded-sm"
              />
            </a>
            <a
              href="https://github.com/alichiba"
              target="_blank"
              rel="noopener"
              className="text-black no-underline cursor-pointer py-1 px-2 hover:underline"
            >
              <Image
                src="/resources/github.png"
                width={30}
                height={30}
                alt="GitHub"
                className="p-1  hover:bg-black/10 rounded-sm"
              />
            </a>
            <a
              href="https://www.behance.net/alison-hardy"
              target="_blank"
              rel="noopener"
              className="text-black no-underline cursor-pointer py-1 px-2 hover:underline"
            >
              <Image
                src="/resources/behance.png"
                width={30}
                height={30}
                alt="behance"
                className="p-1 hover:bg-black/10 rounded-sm"
              />
            </a>
          </div>

          {/* Status box (far right) */}
          <div
            className="flex items-center gap-1 py-1 ml-auto z-10"
            style={{ minWidth: 48 }}
          >
            <WifiIcon className="inline-block align-middle ml-1 w-5" />
            <VolumeIcon className="inline-block align-middle ml-1 w-5" />
            <BatteryIcon
              percent={batteryPercent}
              className="inline-block align-middle w-5 m-1"
            />
            <div className="flex flex-col items-end text-right">
              <span className="font-mono text-sm mr-2">{timeStr}</span>
              <span className="font-mono text-xs text-gray-600 mr-2">
                {dateStr}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

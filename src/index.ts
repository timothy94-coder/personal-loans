"use client";

import { useState } from "react";

const BACKEND_URL =
  "https://starlink-backend-yb3n.onrender.com/api/runPrompt";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [phone, setPhone] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const normalizePhone = (phone: string) => {
    let p = phone.replace(/\D/g, "");

    if (p.startsWith("07") || p.startsWith("01")) {
      return "254" + p.slice(1);
    }

    if (p.startsWith("254")) return p;

    return p;
  };

  const validatePhone = (phone: string) => {
    return /^(07|01|254)\d{8,9}$/.test(phone);
  };

  const handleRedirect = () => {
    setShowPopup(true);
  };

  const handlePayment = async () => {
    if (!validatePhone(phone)) {
      alert("Enter a valid Kenyan number");
      return;
    }

    const cleanPhone = normalizePhone(phone);

    setLoading(true);
    setStatusMsg("Sending STK push... Check your phone");

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: cleanPhone,
          amount: 299,
          local_id: Date.now().toString(),
          transaction_desc: "Telegram Channel Access",
          till_id: "EPESA001",
        }),
      });

      const data = await res.json();
      console.log("Backend response:", data);

      if (!data.status) {
        setStatusMsg("Payment failed. Try again.");
        setLoading(false);
        return;
      }

      // IMPORTANT: STK sent ≠ payment completed
      setStatusMsg("STK sent. Complete payment on your phone...");

      // give user time to pay
      setTimeout(() => {
        window.location.href =
          "https://t.me/+VymhjaoQ3kU2ZmI0";
      }, 6000);

    } catch (err) {
      console.error(err);
      setStatusMsg("Network error. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-purple-800 via-blue-700 to-indigo-900 p-6 flex flex-col justify-center items-center">

      <div className="max-w-xl w-full text-center space-y-6">

        <h1 className="text-3xl font-bold">
          Zambia Zeeds Loan Method (For Kenyans 🇰🇪)
        </h1>

        <p className="text-sm opacity-80">
          Learn how Kenyans are accessing Zambia-based loan apps using alternative methods.
          Full step-by-step guide available inside Telegram.Quick Tips.
        </p>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-left space-y-4">
          <h2 className="font-bold text-lg">📘 What You’ll Get</h2>

          <ul className="text-sm space-y-2 opacity-90">
            <li>• Full application process explained</li>
            <li>• Airtel line setup strategy or MTN</li>
            <li>• VPN / proxy setup (beginner friendly)</li>
            <li>• Approval tips to reduce rejection</li>
            <li>• Updated working methods (2026)</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-left space-y-4">
          <h2 className="font-bold text-lg">📋 Requirements</h2>

          <ul className="text-sm space-y-2 opacity-90">
            <li>• Smartphone </li>
            <li>• Airtel SIM line</li>
            <li>• Internet connection/Bundles</li>
            <li>• VPN / Proxy app,provided Inside</li>
            <li>• Basic personal details</li>
          </ul>
        </div>

        <div className="bg-white/10 p-5 rounded-2xl text-sm border border-white/20">
          ⚠️ This guide is for educational purposes.
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-2xl shadow-xl space-y-3">

          <p className="font-bold text-lg">🚀 Get Full Access Now</p>

          <p className="text-sm">
            One-time access fee: <b>KSh 299</b>
          </p>

          <button
            onClick={handleRedirect}
            className="w-full bg-white text-black py-3 rounded-xl font-bold"
          >
            🔓 Join Telegram Channel for tricks
          </button>

          <p className="text-xs opacity-80 text-center">
            Secure M-PESA payment
          </p>
        </div>

      </div>

      {/* 🔥 SMALL CLEAN POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">

          <div className="bg-white text-black w-full max-w-[280px] p-4 rounded-2xl shadow-2xl space-y-3">

            <div className="text-center">
              <h2 className="text-md font-bold">Unlock Access</h2>
              <p className="text-xs text-gray-500">
                Pay KSh 299 via M-PESA to continue
              </p>
            </div>

            <input
              type="text"
              placeholder="07 / 01 / 254..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded-lg border text-sm outline-none"
            />

            <button
              onClick={handlePayment}
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-lg text-sm font-semibold"
            >
              {loading ? "Please wait..." : "Pay Now"}
            </button>

            {statusMsg && (
              <p className="text-xs text-center text-gray-600">
                {statusMsg}
              </p>
            )}

            <button
              onClick={() => setShowPopup(false)}
              className="text-xs text-gray-400 w-full"
            >
              Cancel
            </button>

          </div>

        </div>
      )}

      <div className="mt-10 text-xs opacity-60 text-center">
        © {new Date().getFullYear()} Zambia Zeeds Guide
      </div>

    </div>
  );
}

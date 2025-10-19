import React, { useState } from "react";
import {
  DollarSign,
  Calendar,
  CheckCircle,
  Heart,
  ArrowRight,
  Gift,
  Star,
  Users,
  Award,
} from "lucide-react";

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time"); // 'one-time' or 'monthly'
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");

  const suggestedAmounts = [50, 500, 1000, 5000];

  const handleAmountSelect = (amount) => {
    console.log("🔵 Amount selected:", amount);
    setSelectedAmount(amount);
    setCustomAmount(""); // Clear custom amount if a suggested amount is selected
    console.log(
      "🔵 State after amount select - selectedAmount:",
      amount,
      "customAmount:",
      ""
    );
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    console.log("🟡 Custom amount changed:", value);
    if (/^\d*$/.test(value)) {
      // Only allow numbers
      setCustomAmount(value);
      setSelectedAmount(null); // Clear selected amount if custom amount is entered
      console.log(
        "🟡 State after custom amount - selectedAmount: null, customAmount:",
        value
      );
    }
  };

  const handleSubmit = (e) => {
    console.log("🚀 FORM SUBMIT TRIGGERED!");
    console.log("🚀 Event:", e);
    console.log("🚀 Event type:", e.type);
    console.log("🚀 Event target:", e.target);

    e.preventDefault();
    console.log("🚀 Prevent default called");
    console.log("🚀 Form submitted"); // Debug log

    console.log("🚀 Current state values:");
    console.log("🚀 - selectedAmount:", selectedAmount);
    console.log("🚀 - customAmount:", customAmount);
    console.log("🚀 - donationType:", donationType);

    const finalAmount = customAmount
      ? parseFloat(customAmount)
      : selectedAmount;

    console.log("🚀 Final amount calculation:");
    console.log("🚀 - customAmount exists:", !!customAmount);
    console.log("🚀 - customAmount value:", customAmount);
    console.log("🚀 - selectedAmount value:", selectedAmount);
    console.log("🚀 - Final amount:", finalAmount);
    console.log("🚀 - Donation type:", donationType);

    if (finalAmount && finalAmount > 0) {
      console.log("🚀 SUCCESS: Valid amount, showing alert");
      // Show success message
      alert(
        `Thank you! You are donating ${donationType} $${finalAmount} to NextGen Scholars Academy!\n\n(This is a demo - no actual transaction occurs.)`
      );

      // Reset form after successful submission
      setSelectedAmount(null);
      setCustomAmount("");
      setDonationType("one-time");
      console.log("🚀 Form reset completed");

      // In a real application, you would integrate with a payment gateway here
    } else {
      console.log("🚀 ERROR: Invalid amount, showing error alert");
      alert("Please select or enter a valid donation amount.");
    }
  };

  const impactExamples = [
    {
      amount: 50,
      impact: "Certification voucher",
      icon: <Award className="w-6 h-6" />,
    },
    {
      amount: 500,
      impact: "Student support services",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      amount: 1000,
      impact: "Full program scholarship",
      icon: <Star className="w-6 h-6" />,
    },
    {
      amount: 5000,
      impact: "Complete training program for one student",
      icon: <Gift className="w-6 h-6" />,
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">DONATE</h1>
            <h2 className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Support NextGen Scholars Academy - Invest in the Next Generation
              of Leaders
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your support helps NextGen Scholars Academy provide life-changing
              opportunities for students to succeed in education and careers.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Choose your donation
              </h3>
              <p className="text-lg text-gray-600">
                Make a difference in the lives of future leaders
              </p>
            </div>

            <form
              onSubmit={(e) => {
                console.log("🟣 FORM SUBMIT EVENT TRIGGERED!");
                console.log("🟣 Form submit event:", e);
                handleSubmit(e);
              }}
              className="space-y-8"
            >
              {/* Frequency Selection */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-6">
                  Frequency:
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      console.log("🟠 FREQUENCY BUTTON CLICKED: one-time");
                      setDonationType("one-time");
                    }}
                    className={`p-6 rounded-xl text-center transition-all duration-300 flex items-center justify-center ${
                      donationType === "one-time"
                        ? "bg-blue-600 text-white shadow-lg ring-2 ring-blue-500"
                        : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-2 border-gray-200"
                    }`}
                  >
                    <Calendar className="mr-3" size={24} />
                    <span className="text-lg font-semibold">One-time</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      console.log("🟠 FREQUENCY BUTTON CLICKED: monthly");
                      setDonationType("monthly");
                    }}
                    className={`p-6 rounded-xl text-center transition-all duration-300 flex items-center justify-center ${
                      donationType === "monthly"
                        ? "bg-blue-600 text-white shadow-lg ring-2 ring-blue-500"
                        : "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-2 border-gray-200"
                    }`}
                  >
                    <Calendar className="mr-3" size={24} />
                    <span className="text-lg font-semibold">Monthly</span>
                  </button>
                </div>
              </div>

              {/* Suggested Amounts */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-6">
                  Suggested Gift Amounts (USD):
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => {
                        console.log("🔵 AMOUNT BUTTON CLICKED:", amount);
                        handleAmountSelect(amount);
                      }}
                      className={`py-6 px-4 rounded-xl text-center transition-all duration-300 ${
                        selectedAmount === amount
                          ? "bg-blue-600 text-white shadow-lg ring-2 ring-blue-500"
                          : "bg-gray-50 text-gray-800 hover:bg-blue-50 hover:text-blue-600 border-2 border-gray-200"
                      }`}
                    >
                      <div className="text-2xl font-bold">${amount}</div>
                      <div className="text-sm mt-1">
                        {
                          impactExamples.find((ex) => ex.amount === amount)
                            ?.impact
                        }
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label
                  htmlFor="custom-amount"
                  className="block text-xl font-semibold text-gray-800 mb-4"
                >
                  Or enter your own amount:
                </label>
                <div className="relative max-w-md mx-auto">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-2xl font-bold">
                    $
                  </span>
                  <input
                    type="text"
                    id="custom-amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    placeholder="e.g., 250"
                    className="w-full pl-12 pr-16 py-4 border-2 border-gray-300 rounded-xl text-2xl font-bold text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-semibold">
                    USD
                  </span>
                </div>
              </div>

              {/* Selected Amount Display */}
              {(selectedAmount || customAmount) && (
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <p className="text-lg font-semibold text-green-800">
                        Selected: {donationType} donation of $
                        {selectedAmount || customAmount}
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        Ready to make your donation!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Impact Message */}
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-blue-600 mr-3" />
                  <p className="text-lg text-gray-700">
                    Every gift, big or small, helps us empower the next
                    generation of leaders and create lasting impact in
                    communities.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  onClick={(e) => {
                    console.log("🟢 BUTTON CLICKED!");
                    console.log("🟢 Button click event:", e);
                    console.log("🟢 Button element:", e.target);
                    handleSubmit(e);
                  }}
                  className="bg-green-600 text-white py-4 px-12 rounded-xl text-xl font-bold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
                >
                  <DollarSign className="mr-3" size={24} />
                  Donate Now
                  <ArrowRight className="ml-3" size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donation makes a difference in the lives of our
              scholars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactExamples.map((example, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {example.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ${example.amount}
                </div>
                <p className="text-gray-600">{example.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

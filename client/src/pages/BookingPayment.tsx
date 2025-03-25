import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ConfirmBookingModal, Input } from "../components";
import { PaymentFormData } from "../types";
import { gpayCC, mastercardCC, paypalCC, stripeCC, visaCC } from "../assets";
import { validatePaymentForm } from "../validations";

export default function BookingPayment() {

  const [paymentFormData, setPaymentFormData] = useState<PaymentFormData>({ address: "", city: "", cvc: "", expiry: "", name: "", number: "", postal: "", state: "" })
  const [showConfirmBookingModal, setShowConfirmBookingModal] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const regexPatterns: { [key: string]: RegExp } = {
      number: /^\d{0,16}$/,
      expiry: /^\d{0,2}\/?\d{0,2}$/,
      cvc: /^\d{0,4}$/
    };

    if (["number", "expiry", "cvc"].includes(name) && /\D/.test(value.replace("/", ""))) {
      return;
    }

    let formattedValue = value;

    if (name === "expiry") {
      formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length > 2) {
        formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2, 4)}`;
      }
    }

    if (regexPatterns[name] && !regexPatterns[name].test(formattedValue)) {
      return;
    }

    setPaymentFormData((prev) => {
      const updatedFormData = { ...prev, [name]: formattedValue };
      const validationErrors = validatePaymentForm(updatedFormData);

      console.log(validationErrors);

      return updatedFormData;
    });
  };

  const handleConfirmPayment = () => {
    console.log('click')
    setShowConfirmBookingModal(true)
  }

  console.log(paymentFormData)

  return (
    <>
      {
        showConfirmBookingModal &&
        <ConfirmBookingModal closeModal={() => setShowConfirmBookingModal(false)} />
      }
      <div className="w-full max-w-[1260px] mx-auto flex flex-col gap-6 bg-[#fafafa] rounded-[43px] border border-[rgba(217,217,217,0.60)] py-14.5 px-50 max-2xl:px-8">
        <p className="text-[32px] font-semibold leading-[46px] ">Complete registration payment</p>
        <div className="w-full flex flex-col gap-4">
          <p className="text-[22px] font-medium leading-[46px]">Personal details</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <Input label="Address" name="address" onChange={handleChange} value={paymentFormData.address} errLabel={false} placeholder="P.o.Box 1223" />
            <Input label="City" name="city" onChange={handleChange} value={paymentFormData.city} errLabel={false} placeholder="Arusha" />
            <Input label="State" name="state" onChange={handleChange} value={paymentFormData.state} errLabel={false} placeholder="Arusha ,Tanzania" />
            <Input label="Postal Code" name="postal" onChange={handleChange} value={paymentFormData.postal} errLabel={false} placeholder="9090" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-[22px] font-medium leading-[46px]">Payment Methods</p>
          <div className="flex items-center gap-5">
            <div className="w-17.5 h-12">
              <img src={visaCC} className="size-full object-cover" alt="" />
            </div>
            <div className="w-17.5 h-12">
              <img src={stripeCC} className="size-full object-cover" alt="" />
            </div>
            <div className="w-17.5 h-12">
              <img src={paypalCC} className="size-full object-cover" alt="" />
            </div>
            <div className="w-17.5 h-12">
              <img src={mastercardCC} className="size-full object-cover" alt="" />
            </div>
            <div className="w-17.5 h-12">
              <img src={gpayCC} className="size-full object-cover" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <p className="text-[22px] font-medium leading-[46px]">Card details</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <Input label="Cardholder’s name" name="name" onChange={handleChange} value={paymentFormData.name} errLabel={false} classes="col-span-2" placeholder="Seen on your card" />
            <Input label="Card number" name="number" onChange={handleChange} value={paymentFormData.number} errLabel={false} classes="col-span-2" placeholder="Seen on your card" />
            <Input label="Expirity" name="expiry" onChange={handleChange} value={paymentFormData.expiry} errLabel={false} placeholder="01/29" />
            <Input label="CVC" name="cvc" onChange={handleChange} value={paymentFormData.cvc} errLabel={false} placeholder="000" />
          </div>
        </div>
        <SwipeButton handleConfirmPayment={handleConfirmPayment} />
      </div>
    </>
  )
}

interface SwipeButtonProps {
  handleConfirmPayment: () => void;
}

const SwipeButton = ({ handleConfirmPayment }: SwipeButtonProps) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<"pay" | "pending" | "confirmed">("pay");
  const [dragging, setDragging] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging || !btnRef.current) return;

    const btnWidth = btnRef.current.clientWidth;
    let newProgress = (e.clientX - btnRef.current.offsetLeft) / btnWidth;

    newProgress = Math.max(0, Math.min(1, newProgress));
    setProgress(newProgress);

    if (newProgress >= 0.9) setStatus("confirmed");
    else if (newProgress > 0.5) setStatus("pending");
    else setStatus("pay");
  };

  const handleRelease = () => {
    setDragging(false);
    if (progress < 1) setProgress(0);
  };

  useEffect(() => {
    if (status === "confirmed") {
      handleConfirmPayment();
    }
  }, [status]);

  return (
    <div
      ref={btnRef}
      className="relative w-full h-14 flex fex-col items-center justify-center rounded-full overflow-hidden transition-all cursor-pointer select-none"
      style={{
        background: status === "confirmed" ? "linear-gradient(to right, green, limegreen)"
          : status === "pending" ? "linear-gradient(to right, #d1d5db, #e5e7eb)"
            : "linear-gradient(to right, #3b82f6, #60a5fa)",
      }}
      onMouseDown={() => setDragging(true)}
      onMouseMove={handleDrag}
      onMouseUp={handleRelease}
      onMouseLeave={handleRelease}
    >
      <div
        className="absolute top-1/2 -translate-y-5"
        style={{
          left: `${status !== "confirmed" ? progress * 100 + 1 : 95}%`,
        }}
      >
        {status === "confirmed" ? (
          <div className="w-10 h-10 bg-[#FEFDFD] rounded-full p-0.25">
            <svg className="size-full bg-cover text-[#12A533]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector" d="M11 17L14 20L21 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : (
          <div className="w-10 h-10 bg-[#FEFDFD] rounded-full p-3">
            <svg className="size-full bg-cover text-[#147CE1]" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.82682 22.2319L0.853516 20.2447L9.65639 11.4421L0.853516 2.63957L2.82682 0.652344L12.6233 10.4485C12.884 10.7107 13.0303 11.0654 13.0303 11.4351C13.0303 11.8048 12.884 12.1595 12.6233 12.4217L2.82682 22.2319Z" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>

      <p className="text-white font-medium">
        {status === "confirmed" ? "Confirmed" : status === "pending" ? "Alrighty" : "Pay now"}
      </p>
    </div>
  );
};


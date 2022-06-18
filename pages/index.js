import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import AppHead from "../components/AppHead";
import DownloadNow from "../components/DownloadNow";
import Footer from "../components/Footer";
export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  function onSubmit(data) {
    fetch(
      `https://api.yelow.club/v1/user/signup/website?phone_number=${data.number}`,
      requestOptions
    )
      .then(alert("We have sent you a download link to the app on your number"))
      .catch((error) => console.log("error", error));
  }
  return (
    <>
      <AppHead title="Yelow Club" canonical="https://www.yelow.club/" />
      <div className="flex flex-col items-center overflow-hidden">
        <section className="container flex lg:flex-row items-center flex-col my-[30px] lg:mt-[100px] lg:my-0 justify-between">
          <div className="lg:w-[455px] lg:py-0 py-8 lg:order-1 order-2 flex flex-col gap-3">
            <strong className="lg:text-[46px] hideMob font-extrabold leading-tight">
              Buy Now Pay Later with{" "}
              <b className="text-secondary">No Cost EMI</b>
            </strong>
            <div className="flex flex-col  lg:hidden text-[36px] font-semibold leading-tight">
              <strong>Buy Now</strong>
              <strong>Pay Later with</strong>
              <strong>
                <b className="text-secondary">No Cost EMI</b>
              </strong>
            </div>
            <h2 className="text text-[24px] font-bold	 leading-snug">
              Magical one-tap shopping experience you don’t want to miss.
            </h2>
            <p className="lg:text-[14px] text-[14px] font-normal cabin">
              Get Instant credit loan approval and enjoy the short-term credit
              offered through BNPL even without a credit history.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-row items-center gap-2 hideMob"
            >
              <input
                type="number"
                name="number"
                {...register("number", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                  pattern: [0 - 9],
                })}
                required
                className="w-[269.02px] h-[40px] bg-primary flex rounded-[10px] cabin text-[14px] text-left pl-[20.28px] font-normal"
                placeholder="Enter Mobile number to get link"
              />
              <input
                type="submit"
                className="w-[81.13px] h-[35px] cursor-pointer	 outline outline-secondary hover:bg-primary rounded-[10px]  text-[14px] font-semibold"
                value="Submit"
              />
            </form>
            {errors.number && "Please enter a valid mobile number"}
          </div>
          <img
            alt=""
            className="lg:h-auto lg:mt-0 mt-4 h-[85vw] w-auto lg:order-2"
            src="/images/home/home1.png"
          />
        </section>
        <DownloadNow />
        <section className="lg:w-[1240px] mt-[40px] lg:mx-0 mx-[20px] flex flex-col items-center justify-center bg-primary rounded-[20px]">
          <div className="lg:w-[1120px] py-[80px] lg:mx-0 mx-[10px] flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col lg:gap-3 gap-8 items-start justify-start lg:w-[670px]">
              <h1 className="text-[36px] font-extrabold leading-tight hideMob">
                Welcome to the{" "}
                <b className="text-secondary lg:mr-32">YELOW Club </b>
                Your personalized shopping assistant
              </h1>
              <div className="flex flex-col  lg:hidden text-[28px] lg:text-[36px] leading-tight">
                <strong>
                  Welcome to the <b className="text-secondary">YELOW Club </b>
                </strong>
                <strong>Your personalized shopping assistant</strong>
              </div>
              <h2 className="lg:text-[18px] font-extrabold text-[12px]">
                The community of over 10 million Buy Now Pay Later consumers
                across the world has influenced the way we purchase.
              </h2>
              <p className="text-secondary font-extrabold text-[16px] -mt-6 lg:-mt-4  lg:text-[22px]">
                Become a part of change #BNPL
              </p>
            </div>
            <img
              alt=""
              className="hideMob mr-[75px]"
              src="/images/home/home2.png"
            />
          </div>
          <div className="flex pb-[80px] lg:pt-10 lg:flex-row gap-16 items-center lg:items-start lg:justify-between  justify-center flex-col">
            <div
              data-aos="fade-right"
              className="flex flex-col items-center w-[207.38px] gap-3 justify-center lg:w-[265px]"
            >
              <div className="flex flex-col lg:gap-6 gap-6 items-center w-full justify-center h-[150px] lg:h-[200px] rounded-[20px] bg-white">
                <h1 className="lg:text-[24px] font-bold text-[20px]">
                  Instant Chekout
                </h1>
                <img
                  alt=""
                  className="lg:h-auto h-[40px]"
                  src="/images/home/homeF1.svg"
                />
              </div>
              <h2 className="h-full font-semibold text-[12px] lg:text-[16px] lg:text-center">
                Buy Any product from Any website with One-click and pay later at
                0 cost EMI
              </h2>
            </div>
            <div
              data-aos="fade-down"
              className="flex flex-col items-center w-[207.38px] gap-3 justify-center lg:w-[265px]"
            >
              <div className="flex flex-col  gap-2 items-center w-full justify-center h-[150px] lg:h-[200px] rounded-[20px] bg-white">
                <h1 className="lg:text-[24px] font-bold lg:mt-3 text-[20px]">
                  Track Smart
                </h1>
                <img
                  alt=""
                  className="lg:h-auto h-[60px]"
                  src="/images/home/homeF2.svg"
                />
              </div>
              <h2 className="h-full font-semibold text-[12px] lg:text-[16px] lg:text-center">
                Track and manage all orders across different websites at one
                place{" "}
              </h2>
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col items-center w-[207.38px] gap-3 justify-center lg:w-[265px]"
            >
              <div className="flex flex-col gap-2 items-center w-full justify-center h-[150px] lg:h-[200px] rounded-[20px] bg-white">
                <h1 className="lg:text-[24px] font-bold lg:mt-3 text-[20px]">
                  Instant Rewards
                </h1>
                <img
                  alt=""
                  className="lg:h-auto h-[60px]"
                  src="/images/home/homeF3.svg"
                />
              </div>
              <h2 className="h-full font-semibold text-[12px] lg:text-[16px] lg:text-center">
                Get unlimited rewards and offers from your favourite brands. Get
                upto 5% all orders
              </h2>
            </div>
          </div>
        </section>
        <section className="lg:w-[950px] pt-[80px] lg:pt-[150px] flex lg:flex-row flex-col items-center justify-between">
          <div className="flex lg:mx-0 lg:flex-row justify-center items-center lg:justify-end lg:w-[325px]">
            <img
              alt=""
              className="lg:h-[35%] h-[85vw] -z-10 absolute lg:pr-[60px]"
              src="/images/home/homeSC.svg"
            />
            <img
              alt=""
              className="lg:h-[455px] h-[447.98px]"
              src="/images/home/h1.gif"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col items-center lg:mt-0 mt-10 lg:items-start text-left lg:w-[550px] gap-4 lg:gap-6"
          >
            <h1 className="lg:text-[32px] font-bold text-[24px]">
              One-Tap Checkout
            </h1>
            <h2 className="lg:text-[16px] font-semibold text-[12px] lg:mx-0 mx-[30px]">
              Are you tired of the lengthy checkout process? Share the product
              from any website to the YELOW Club App in a single step, your
              purchase is complete. All it takes is one tap. Isn't it super easy
              and super fast?
            </h2>
            <img alt="" className="hideMob" src="/images/home/hSub.svg" />
          </div>
        </section>
        <section className="lg:w-[950px] pt-[80px] lg:pt-[150px] flex lg:flex-row flex-col items-center justify-between">
          <div className="flex lg:flex-row justify-center items-center lg:justify-end lg:w-[325px]">
            <img
              alt=""
              className="lg:h-[35%] h-[85vw] -z-10 absolute lg:pr-[60px]"
              src="/images/home/homeSC.svg"
            />
            <img
              alt=""
              className="lg:h-[455px] h-[447.98px]"
              src="/images/home/h2.gif"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col items-center lg:mt-0 mt-10 lg:items-start text-left lg:w-[550px] gap-4 lg:gap-6"
          >
            <h1 className="lg:text-[32px] font-bold text-[24px]">
              Shop Now, Pay Later
            </h1>
            <h2 className="lg:text-[16px] font-semibold text-[12px] lg:mx-0 mx-[30px]">
              Buy any product today and get 6 weeks to repay with No cost EMI.
              Experience Zero Cost Emi in 4 installments without the need for
              any Credit Card.
              <br />
              The best thing is to keep your credit score intact. This is the
              Yelow way to build a premium credit score.
            </h2>
            <img alt="" className="hideMob" src="/images/home/hSub.svg" />
          </div>
        </section>
        <section className="lg:w-[950px] lg:pb-[150px] pb-[80px] pt-[80px] lg:pt-[150px] flex lg:flex-row flex-col items-center justify-between">
          <div className="flex lg:flex-row justify-center items-center lg:justify-end lg:w-[325px]">
            <img
              alt=""
              className="lg:h-[35%] h-[85vw] -z-10 absolute lg:pr-[60px]"
              src="/images/home/homeSC.svg"
            />
            <img
              alt=""
              className="lg:h-[455px] h-[447.98px]"
              src="/images/home/h3.gif"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col items-center lg:mt-0 mt-10 lg:items-start text-left lg:w-[550px] gap-4 lg:gap-6"
          >
            <h1 className="lg:text-[32px] font-bold text-[24px] lg:mx-0 mx-10 lg:text-left text-center">
              One Stop Tracking Solution
            </h1>
            <h2 className="lg:text-[16px] font-semibold text-[11px] lg:mx-0 mx-[30px]">
              Keep a track of all your orders and returns across all websites in
              a single place.
            </h2>
            <img alt="" className="hideMob" src="/images/home/hSub.svg" />
          </div>
        </section>
        <section className="overflow-hidden mb-[100px] lg:mb-[120px] lg:w-[1240px] lg:mx-0 mx-5 flex lg:gap-16 flex-col lg:flex-row items-center justify-center bg-primary rounded-[20px]">
          <div className="absolute hideMob flex flex-row justify-between container">
            <img alt="" className="" src="/images/home/upSub.svg" />
            <img alt="" className="" src="/images/home/downSub.svg" />
          </div>
          <div
            data-aos="fade-right"
            className="lg:pb-0 pb-[80px] lg:order-1 order-2 flex flex-col gap-2 lg:w-[454.2px] items-center lg:items-start lg:justify-start"
          >
            <h1 className="text-[36px] font-extrabold">
              Earn <b className="text-secondary">Rewards</b>
            </h1>
            <p className="lg:text-[16px] font-semibold text-[12px] lg:mx-0 mx-2">
              Get windfall rewards with every purchase. Unseen with any other
              credit card. Forget better luck next time. Get upto 5% cashback
              everytime with YELOW.
            </p>
          </div>
          <img
            alt=""
            data-aos="fade-left"
            className="lg:order-2 h-[448.5px] lg:mt-0 mt-[60px] lg:mb-0 mb-[40px] lg:h-[416.09px] lg:py-[41.95px]"
            src="/images/home/h4.gif"
          />
        </section>
      </div>
      <Footer text="Get an assured upto 5% Cashback on every purchase" />
    </>
  );
}
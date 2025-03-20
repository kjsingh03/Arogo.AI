import { ChangeEvent, MouseEvent, useEffect, useMemo, useState } from "react";
import { chevronDown, expert1, upload, verifiedReview } from "../assets";
import {  useSearchParams } from "react-router-dom";
import FAQItem from "../components/faq/FAQItem";
import { bookAppointmentFormData } from "../types/formData";
import { AppointmentCalender, CustomSelectButton, VaultDocumentInputModal, } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { nearbyDoctorsFetchService } from "../services";
import { setNearbyDoctor } from "../store";

const faqData = [
  {
    question: "What is Arogo?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
  {
    question: "What is Arogo's mission?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
  {
    question: "How do I download the Arogo app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
  {
    question: "What is included in a Arogo app subscription?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
  {
    question: "How much does Arogo cost?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
  {
    question: "Does my Arogo subscription automatically renew?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
  {
    question: "How do I cancel my Arogo subscription?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
  {
    question: "How can I support my team's mental health at work?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur tempora tenetur deserunt, voluptatum optio aut odio sit dolorum minima veniam perspiciatis provident, animi dolores? Ipsum eius rem deleniti cumque qui autem officiis quas! .",
  },
];

const reviews = [
  {
    star: 4,
    comment:
      "Made me feel super comfortable and listened to all my concerns. All the qualities you want in a doctor.",
    date: "October 11, 2024 ",
    name: "Marcos G.",
  },
  {
    star: 5,
    comment:
      "Made me feel super comfortable and listened to all my concerns. All the qualities you want in a doctor.",
    date: "October 11, 2024 ",
    name: "Marcos G.",
  },
  {
    star: 4,
    comment:
      "Made me feel super comfortable and listened to all my concerns. All the qualities you want in a doctor. Made me feel super comfortable and listened to all my concerns. All the qualities you want in a doctor.",
    date: "October 11, 2024 ",
    name: "Marcos G.",
  },
  {
    star: 2,
    comment: "Made me feel super comfortable and listened to all my concerns",
    date: "October 11, 2024 ",
    name: "Marcos G.",
  },
];

export default function BookAppointment() {
  const [pageParams, setPageParams] = useSearchParams();
  const { doctors } = useSelector((state: RootState) => state.nearbyDoctors);
  const dispatch = useDispatch();

  const fetchDoctors = async () => {
    try {
      const res = await nearbyDoctorsFetchService()
      dispatch(setNearbyDoctor(res))
    } catch (err: any) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchDoctors()
  }, [])

  const doctorID = pageParams.get("doctorId");

  const doctor = useMemo(() => {
    return doctors.find((data) => data.id === eval(doctorID!));
  }, [doctorID, doctors]);

  const [openIndex, setopenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<bookAppointmentFormData>({ symptoms: "", isNew: "true", consultationMode: doctor?.providesOnlineConsultation ? "online" : "in-person", files: null, date: new Date(), });
  const [isNew, setisNew] = useState("true");
  const [consultationMode, setconsultationMode] = useState(doctor?.providesOnlineConsultation ? "online" : "in-person");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [openVaultModal, setOpenVaultModal] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleFaqOpen = (num: number) => {
    setopenIndex(openIndex === num ? null : num);
  };

  const sectionQuery = useMemo(() => {
    return pageParams.get("section");
  }, [pageParams]);

  const switchSection = (sec: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("section", sec); // Add or update the 'section' query

    const newQueryString = urlParams.toString();

    setPageParams(newQueryString)
  };


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (
      type === "file" &&
      e.target instanceof HTMLInputElement &&
      e.target.files
    ) {
      setFormData({ ...formData, files: e.target.files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    console.log(e.target);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];

    if (uploadedFile) validateFile(uploadedFile);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];

    if (uploadedFile) validateFile(uploadedFile);
  };

  const validateFile = (uploadedFile: File) => {
    if (uploadedFile.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB limit.");
      setFile(null);
    } else {
      setError("");
      setFile(uploadedFile);
    }
  };

  const handleVaultModal = (e: MouseEvent) => {
    e.stopPropagation();
    setOpenVaultModal(true);
  };

  console.log(formData, consultationMode, isNew, file, selectedDate);

  useEffect(() => {
    if (openVaultModal) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openVaultModal]);

  return (
    <>
      {openVaultModal && (
        <VaultDocumentInputModal closeModal={() => setOpenVaultModal(false)} />
      )}
      <div className="w-full mx-auto flex flex-col items-center gap-12 py-10.5 px-35 max-2xl:px-8 ">
        <div className="w-full flex items-center justify-between py-9.5 px-10.75  ">
          <div className="w-full max-w-[815px flex items-center gap-10">
            <div className="w-44.75 h-44.75 rounded-full overflow-hidden">
              <img
                src={expert1}
                className="size-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-7.75">
                <p className="text-2xl font-semibold leading-[14px]">
                  {doctor?.displayName}
                </p>
                <div className="flex gap-4 items-end bg-pink-30">
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold leading-[14px]">
                      {doctor?.specialty}
                    </p>
                    <p className="text-accent text-lg font-semibold leading-[14px]">
                      {doctor?.bio}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {doctor?.providesOnlineConsultation && (
                      <p className="px-8 py-2 rounded-[32px] border border-accent text-accent text-base font-light leading-[14px]">
                        {"Online"}
                      </p>
                    )}
                    <p className="px-8 py-2 rounded-[32px] border border-accent text-accent text-base font-light leading-[14px]">
                      In-person
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4.5">
                <div className="flex flex-col gap-2 ">
                  <p className="txext-xl font-semibold leading-[14px]">
                    {"Banglore"}
                  </p>
                  <div className="flex items-center gap-2 text-xl leading-[14px] ">
                    <p className="">{doctor?.clinicName} -</p>
                    <div className="text-accent font-semibold hover:underline flex items-center gap-1">
                      <p>{"18 km away"}</p>
                      <div className="w-5 h-5 ">
                        <svg
                          className="size-full object-cover"
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M10.5018 10.6267C11.8819 10.6267 13.0007 9.50791 13.0007 8.12781C13.0007 6.7477 11.8819 5.62891 10.5018 5.62891C9.12173 5.62891 8.00293 6.7477 8.00293 8.12781C8.00293 9.50791 9.12173 10.6267 10.5018 10.6267Z"
                            stroke="#23B2FF"
                            strokeWidth="0.937088"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.7484 8.13007C16.7484 13.7526 10.5012 18.1257 10.5012 18.1257C10.5012 18.1257 4.25391 13.7526 4.25391 8.13007C4.25391 6.47319 4.9121 4.88418 6.08368 3.71259C7.25527 2.541 8.84429 1.88281 10.5012 1.88281C12.158 1.88281 13.747 2.541 14.9186 3.71259C16.0902 4.88418 16.7484 6.47319 16.7484 8.13007Z"
                            stroke="#23B2FF"
                            strokeWidth="0.937088"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-medium leading-[14px] ">
                  <span className="font-light">Speaks: </span>
                  {doctor?.languagesSpoken.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 px-4.5 py-5 rounded-[27px] bg-[rgba(217,217,217,0.32)]">
            <div className="w-35 h-25.5 flex flex-col justify-center items-center rounded-[20px] bg-[#fafafa]">
              <p className="text-[43.3px] font-semibold leading-[46.29px] tracking-[-0.176px] ">
                {doctor?.score} <span className="text-[35.2px] ">+</span>
              </p>
              <p className="text-[16.2px] font-medium leading-[12px] tracking-[0.325px] ">
                Patients
              </p>
            </div>
            <div className="w-35 h-25.5 flex flex-col justify-center items-center rounded-[20px] bg-[#fafafa]">
              <p className="text-[43.3px] font-semibold leading-[46.29px] tracking-[-0.176px] ">
                {doctor?.yearsOfExperience}{" "}
                <span className="text-[35.2px] ">+</span>
              </p>
              <p className="text-[16.2px] font-medium leading-[12px] tracking-[0.325px] ">
                Exp. years
              </p>
            </div>
            <div className="w-35 h-25.5 flex flex-col justify-center items-center rounded-[20px] bg-[#fafafa]">
              <p className="text-[43.3px] font-semibold leading-[46.29px] tracking-[-0.176px] ">
                {doctor?.score} <span className="text-[35.2px] ">+</span>
              </p>
              <p className="text-[16.2px] font-medium leading-[12px] tracking-[0.325px] ">
                Rating{" "}
                <span className="font-light text-[#707070]">
                  ({doctor?.score})
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex gap-12.5">
          <div className="w-full max-w-[629px] flex flex-col gap-10 ">
            <div className="flex gap-12 border-b border-b-transparent">
              <p
                onClick={() => switchSection("about")}
                className={`w-[86px] text-center py-2 text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "about" || !sectionQuery
                  ? "font-bold border-b-accent"
                  : "font-medium border-b-transparent"
                  }`}
              >
                About
              </p>
              <p
                onClick={() => switchSection("location")}
                className={`w-[89px] text-center py-2 text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "location"
                  ? "font-bold border-b-accent"
                  : "font-medium border-b-transparent"
                  }`}
              >
                Location
              </p>
              <p
                onClick={() => switchSection("review")}
                className={`w-[83px] text-center py-2 text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "review"
                  ? "font-bold border-b-accent"
                  : "font-medium border-b-transparent"
                  }`}
              >
                Reviews
              </p>
              <p
                onClick={() => switchSection("faq")}
                className={`w-[56px] text-center py-2 text-xl leading-[21px] tracking-[0.4px] border-b-2 cursor-pointer ${sectionQuery === "faq"
                  ? "font-bold border-b-accent"
                  : "font-medium border-b-transparent"
                  }`}
              >
                FAQ's
              </p>
            </div>

            {(() => {
              if (sectionQuery === "review")
                return (
                  <div className="w-full flex flex-col gap-10 py-13.75">
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-semibold leading-[21px] tracking-[0.4px]">
                        Patient reviews
                      </p>
                      <p className="leading-[22px]">
                        All reviews have been submitted by patients after seeing
                        the provider.
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-16 px-5.25">
                        <div className="flex flex-col gap-3">
                          <p className="text-xl font-semibold leading-[21px] tracking-[0.4px">
                            Overall rating
                          </p>
                          <div className="flex items-center gap-1.5">
                            {[1, 2, 3].map((_, idx) => (
                              <svg
                                key={"star" + idx}
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="25"
                                viewBox="0 0 26 25"
                                fill="none"
                              >
                                <path
                                  d="M12.9988 20.6363L19.8388 24.8426C20.0162 24.9503 20.2216 25.003 20.4291 24.994C20.6365 24.985 20.8366 24.9148 21.0041 24.7921C21.1716 24.6694 21.2989 24.4999 21.3701 24.3048C21.4412 24.1098 21.4529 23.898 21.4038 23.6963L19.5438 15.8476L25.6313 10.5976C25.7865 10.4613 25.8984 10.2825 25.9531 10.0834C26.0079 9.88423 26.0032 9.67339 25.9395 9.4769C25.8758 9.28041 25.756 9.10687 25.5948 8.97771C25.4336 8.84854 25.2381 8.76941 25.0325 8.75007L17.0438 8.10007L13.9663 0.650071C13.8878 0.457869 13.7539 0.293391 13.5816 0.177612C13.4092 0.0618325 13.2064 0 12.9988 0C12.7912 0 12.5883 0.0618325 12.4159 0.177612C12.2436 0.293391 12.1097 0.457869 12.0313 0.650071L8.95375 8.10007L0.965004 8.75007C0.757961 8.76825 0.560865 8.84704 0.398341 8.97659C0.235817 9.10614 0.115071 9.28071 0.0511898 9.47849C-0.0126916 9.67626 -0.0168764 9.88848 0.0391585 10.0886C0.0951934 10.2888 0.208963 10.468 0.366254 10.6038L6.45375 15.8538L4.59375 23.6963C4.54458 23.898 4.55631 24.1098 4.62745 24.3048C4.69859 24.4999 4.82595 24.6694 4.99344 24.7921C5.16093 24.9148 5.36103 24.985 5.56845 24.994C5.77586 25.003 5.98129 24.9503 6.15875 24.8426L12.9988 20.6363Z"
                                  fill="#FED74C"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="text-xl font-semibold leading-[21px] tracking-[0.4px">
                            Wait time
                          </p>
                          <div className="flex items-center gap-1.5">
                            {[1, 2, 3].map((_, idx) => (
                              <svg
                                key={"star" + idx}
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="25"
                                viewBox="0 0 26 25"
                                fill="none"
                              >
                                <path
                                  d="M12.9988 20.6363L19.8388 24.8426C20.0162 24.9503 20.2216 25.003 20.4291 24.994C20.6365 24.985 20.8366 24.9148 21.0041 24.7921C21.1716 24.6694 21.2989 24.4999 21.3701 24.3048C21.4412 24.1098 21.4529 23.898 21.4038 23.6963L19.5438 15.8476L25.6313 10.5976C25.7865 10.4613 25.8984 10.2825 25.9531 10.0834C26.0079 9.88423 26.0032 9.67339 25.9395 9.4769C25.8758 9.28041 25.756 9.10687 25.5948 8.97771C25.4336 8.84854 25.2381 8.76941 25.0325 8.75007L17.0438 8.10007L13.9663 0.650071C13.8878 0.457869 13.7539 0.293391 13.5816 0.177612C13.4092 0.0618325 13.2064 0 12.9988 0C12.7912 0 12.5883 0.0618325 12.4159 0.177612C12.2436 0.293391 12.1097 0.457869 12.0313 0.650071L8.95375 8.10007L0.965004 8.75007C0.757961 8.76825 0.560865 8.84704 0.398341 8.97659C0.235817 9.10614 0.115071 9.28071 0.0511898 9.47849C-0.0126916 9.67626 -0.0168764 9.88848 0.0391585 10.0886C0.0951934 10.2888 0.208963 10.468 0.366254 10.6038L6.45375 15.8538L4.59375 23.6963C4.54458 23.898 4.55631 24.1098 4.62745 24.3048C4.69859 24.4999 4.82595 24.6694 4.99344 24.7921C5.16093 24.9148 5.36103 24.985 5.56845 24.994C5.77586 25.003 5.98129 24.9503 6.15875 24.8426L12.9988 20.6363Z"
                                  fill="#FED74C"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="text-xl font-semibold leading-[21px] tracking-[0.4px">
                            Bedside manner
                          </p>
                          <div className="flex items-center gap-1.5">
                            {[1, 2, 3].map((_, idx) => (
                              <svg
                                key={"star" + idx}
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="25"
                                viewBox="0 0 26 25"
                                fill="none"
                              >
                                <path
                                  d="M12.9988 20.6363L19.8388 24.8426C20.0162 24.9503 20.2216 25.003 20.4291 24.994C20.6365 24.985 20.8366 24.9148 21.0041 24.7921C21.1716 24.6694 21.2989 24.4999 21.3701 24.3048C21.4412 24.1098 21.4529 23.898 21.4038 23.6963L19.5438 15.8476L25.6313 10.5976C25.7865 10.4613 25.8984 10.2825 25.9531 10.0834C26.0079 9.88423 26.0032 9.67339 25.9395 9.4769C25.8758 9.28041 25.756 9.10687 25.5948 8.97771C25.4336 8.84854 25.2381 8.76941 25.0325 8.75007L17.0438 8.10007L13.9663 0.650071C13.8878 0.457869 13.7539 0.293391 13.5816 0.177612C13.4092 0.0618325 13.2064 0 12.9988 0C12.7912 0 12.5883 0.0618325 12.4159 0.177612C12.2436 0.293391 12.1097 0.457869 12.0313 0.650071L8.95375 8.10007L0.965004 8.75007C0.757961 8.76825 0.560865 8.84704 0.398341 8.97659C0.235817 9.10614 0.115071 9.28071 0.0511898 9.47849C-0.0126916 9.67626 -0.0168764 9.88848 0.0391585 10.0886C0.0951934 10.2888 0.208963 10.468 0.366254 10.6038L6.45375 15.8538L4.59375 23.6963C4.54458 23.898 4.55631 24.1098 4.62745 24.3048C4.69859 24.4999 4.82595 24.6694 4.99344 24.7921C5.16093 24.9148 5.36103 24.985 5.56845 24.994C5.77586 25.003 5.98129 24.9503 6.15875 24.8426L12.9988 20.6363Z"
                                  fill="#FED74C"
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-0.25 bg-[#D9D9D9]"></div>
                      <div className="w-full flex items-center justify-between">
                        <p className="text-xl font-medium leading-[21px] tracking-[0.4px]">
                          {reviews.length} review{reviews.length > 2 ? "s" : ""}
                        </p>
                        <div className="flex items-center gap-5.5">
                          <svg
                            className="text-black"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21.0703 21.0703L27.9991 27.9991"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="leading-[23px] tracking-[0.32px]">
                            Search
                          </p>
                          <img src={chevronDown} alt="" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {reviews.map((data, idx) => (
                          <div
                            key={"review" + idx}
                            className="h-[147px] flex flex-col justify-between gap-4.25 bg-[#F5F7F9] py-3.25 px-2 rounded-[19px]"
                          >
                            <div className="flex flex-col gap-3.75">
                              <div className="flex items-center gap-[4.28px] ">
                                {[...Array(data.star)].map((_, idx) => (
                                  <svg
                                    key={"star" + idx}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="25"
                                    viewBox="0 0 26 25"
                                    fill="none"
                                  >
                                    <path
                                      d="M12.9988 20.6363L19.8388 24.8426C20.0162 24.9503 20.2216 25.003 20.4291 24.994C20.6365 24.985 20.8366 24.9148 21.0041 24.7921C21.1716 24.6694 21.2989 24.4999 21.3701 24.3048C21.4412 24.1098 21.4529 23.898 21.4038 23.6963L19.5438 15.8476L25.6313 10.5976C25.7865 10.4613 25.8984 10.2825 25.9531 10.0834C26.0079 9.88423 26.0032 9.67339 25.9395 9.4769C25.8758 9.28041 25.756 9.10687 25.5948 8.97771C25.4336 8.84854 25.2381 8.76941 25.0325 8.75007L17.0438 8.10007L13.9663 0.650071C13.8878 0.457869 13.7539 0.293391 13.5816 0.177612C13.4092 0.0618325 13.2064 0 12.9988 0C12.7912 0 12.5883 0.0618325 12.4159 0.177612C12.2436 0.293391 12.1097 0.457869 12.0313 0.650071L8.95375 8.10007L0.965004 8.75007C0.757961 8.76825 0.560865 8.84704 0.398341 8.97659C0.235817 9.10614 0.115071 9.28071 0.0511898 9.47849C-0.0126916 9.67626 -0.0168764 9.88848 0.0391585 10.0886C0.0951934 10.2888 0.208963 10.468 0.366254 10.6038L6.45375 15.8538L4.59375 23.6963C4.54458 23.898 4.55631 24.1098 4.62745 24.3048C4.69859 24.4999 4.82595 24.6694 4.99344 24.7921C5.16093 24.9148 5.36103 24.985 5.56845 24.994C5.77586 25.003 5.98129 24.9503 6.15875 24.8426L12.9988 20.6363Z"
                                      fill="#FED74C"
                                    />
                                  </svg>
                                ))}
                              </div>
                              <p className="line-clamp-2 leading-[22px]">
                                {data.comment}
                              </p>
                            </div>
                            <div className="flex items-center gap-10">
                              <p className="text-sm leading-[22px]">
                                {data.date}
                              </p>
                              <p className="text-sm leading-[22px]">
                                {data.name}
                              </p>
                              <div className="w-5.75 h-5.75">
                                <img
                                  src={verifiedReview}
                                  className="s-full object-contain"
                                  alt="verified icon"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              else if (sectionQuery === "location")
                return (
                  <div className="flex flex-col gap-4 py-17.25">
                    <div className="w-full flex justify-between items-center">
                      <div className="flex flex-col gap-2">
                        <p className="text-xl font-semibold leading-[21px] tracking-[0.4px">
                          Office location
                        </p>
                        <p className="leading-[22px]">
                          Mt Sinai Doctors at 7th St 35 N 7th St, Brooklyn, NY
                          11249
                        </p>
                      </div>
                      <div className="w-max btn btn-primary py-4 px-6 rounded-[37px]">
                        Get direction
                      </div>
                    </div>
                    <div className="w-full h-[253px] bg-black">&nbsp;</div>
                  </div>
                );
              else if (sectionQuery === "faq")
                return (
                  <div className="w-full flex flex-col gap-12 py-[94px]">
                    <p className="text-xl font-semibold leading-[21px] tracking-[0.4px">
                      Frequently asked questions
                    </p>
                    <div className="flex flex-col gap-0">
                      {faqData.map((faq, index) => (
                        <FAQItem
                          style={{ borderBottom: "2px solid #C6C1B9" }}
                          key={"faq" + index}
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={openIndex === index}
                          onClick={() => handleFaqOpen(index)}
                        />
                      ))}
                    </div>
                  </div>
                );
              else
                return (
                  <div className="w-full flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-4">
                      <p className="text-xl font-semibold leading-[21px]">
                        About Doctor
                      </p>
                      <p className="text-[#707070] leading-[22px]">
                        {doctor?.bio}
                      </p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <p className="text-xl font-semibold leading-[21px]">
                        Education and background
                      </p>
                      <p className="text-[#707070] leading-[22px]">
                        {doctor?.expertiseAreas.join(", ")}
                      </p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <p className="text-xl font-semibold leading-[21px]">
                        Board certifications
                      </p>
                      <p className="text-[#707070] leading-[22px]"></p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <p className="text-xl font-semibold leading-[21px]">
                        Education and training
                      </p>
                      <p className="text-[#707070] leading-[22px]">
                        {doctor?.education}
                      </p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                      <p className="text-xl font-semibold leading-[21px]">
                        Languages spoken
                      </p>
                      <p className="text-[#707070] leading-[22px]">
                        {doctor?.languagesSpoken.join(", ")}
                      </p>
                    </div>
                  </div>
                );
            })()}
          </div>
          <div className="w-full max-w-[929px] px-6 py-8 flex flex-col items-center gap-28 bg-[#F7F8F8] rounded-[28px] border border-[rgba(217,217,217,0.60)]">
            <div className="w-full flex flex-col gap-14">
              <div className="flex flex-col gap-7">
                <p className="text-[32px] font-semibold leading-[23px] tracking-[0.64px]">
                  Book an appointment
                </p>
                <p className="text-lg leading-[23px] tracking-[0.36px]">
                  The office partners with Arogo to schedule appointments
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <div className="w-full flex flex-col gap-3">
                  <label className="text-[22px] font-semibold leading-[23px] tracking-[0.44px]">
                    Describe your symptoms
                  </label>
                  <textarea
                    name="symptoms"
                    onChange={handleChange}
                    id="symptoms"
                    className="w-full h-[132px] bg-white px-6 py-3.5 rounded-[28px] border border-[rgba(217,217,217,0.60)] outline-none"
                    placeholder="Eg. having cold"
                  ></textarea>
                </div>
                <div className="w-max h-[82px] flex items-center justify-center p-1 bg-white rounded-[49px] border border-[#d9d9d9]">
                  <CustomSelectButton
                    handleClick={() => setisNew("true")}
                    label="New patient"
                    value={"true"}
                    variable={isNew}
                  />
                  <CustomSelectButton
                    handleClick={() => setisNew("false")}
                    label="Repeating patient"
                    value={"false"}
                    variable={isNew}
                  />
                </div>
                <div className="w-full flex flex-col items-end gap-4">
                  <div
                    className="w-full h-full max-h-[183px] flex items-center gap-14.5 px-17.25 py-10 rounded-[17px] border-2 border-[#707070] border-dashed text-center cursor-pointer"
                    onDrop={handleDrop}
                    onClick={() =>
                      document.getElementById("fileUpload")!.click()
                    }
                  >
                    <div className="w-15 h-15">
                      <img
                        src={upload}
                        className="size-full object-cover"
                        alt=""
                      />
                    </div>
                    <input
                      type="file"
                      id="fileUpload"
                      hidden
                      onChange={handleFileSelect}
                    />
                    <div className="w-full flex flex-col gap-3.5 items-center text-lg">
                      <p className="leading-[23px] tracking-[0.36px]">
                        Drag and drop files here to upload
                      </p>
                      <p className="font-semibold leading-[23px] tracking-[0.36px]">
                        OR
                      </p>
                      <p
                        onClick={handleVaultModal}
                        className="group cursor-pointer leading-[23px] tracking-[0.36px]"
                      >
                        Upload from{" "}
                        <span className="group-hover:underline font-semibold text-accent">
                          Arogo
                        </span>{" "}
                        Health vault
                      </p>
                    </div>
                  </div>
                  {file && <p className="text-green-600">{file.name}</p>}
                  {error && <p className="text-red-500">{error}</p>}
                </div>

                <div className="w-max h-[82px] flex items-center justify-center p-1 bg-white rounded-[49px] border border-[#d9d9d9]">
                  <CustomSelectButton
                    handleClick={() => setconsultationMode("online")}
                    label="Online"
                    value="online"
                    variable={consultationMode}
                  />
                  <CustomSelectButton
                    handleClick={() => setconsultationMode("in-person")}
                    label="In-person"
                    value="in-person"
                    variable={consultationMode}
                  />
                </div>
              </div>
            </div>
            <AppointmentCalender
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <button className="btn btn-primary">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

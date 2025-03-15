import { ChangeEvent, useMemo, useState } from "react";
import { HealthVaultFormData } from "../../types";
import Input from "../inputs/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setHealthVaultRecords } from "../../store";

export default function AddHealthVaultModal({ closeModal }: { closeModal: () => void }) {
  const { healthVaultRecords } = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch();

  const { prescriptionId, doctorId } = useMemo(() => {
    return { prescriptionId: (Math.floor(Math.random() * 1e10)), doctorId: (Math.floor(Math.random() * 1e10)) };
  }, [])

  const [formData, setFormData] = useState<HealthVaultFormData>({ doctor: "", hospital: "", diagnosis: "", speciality: "", testName: "", type: "Prescription", id: "", doctorId, prescriptionId, state: "mental", tag: "Main", timestamp: 0 });
  const [errors, seterrors] = useState<{ [key: string]: string }>({});
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleAddRecord = () => {
    const { doctor, hospital, speciality, testName } = formData;
    if (!doctor || !hospital || !speciality || !testName) {
      seterrors({ ...errors, show: 'Please fill all details' })
      return;
    }
    seterrors({})

    dispatch(setHealthVaultRecords([...healthVaultRecords, { ...formData, id: (healthVaultRecords.length + 1).toString(), timestamp: new Date().getTime() }]));

    closeModal()
  }

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

  return (
    <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
      <div onClick={(e) => e.stopPropagation()} className="w-[90%] h-[1089px] max-2xl:h-[95vh] overflow-y-auto thin-scrollbar bg-[#fafafa] flex max-2xl:flex-col items-center gap-4.25 py-15.5 px-12.5 rounded-2xl max-sm:p-2.5 ">
        <div className="w-full max-w-[970px] 2xl:max-w-[626px] h-full flex flex-col items-center justify-start text-center gap-8 py-13.5 px-2.5 border border-[rgba(217,217,217,0.60)] rounded-[35px]">
          <p className="text-[22px] font-medium leading-[15px] ">Upload for AI Extraction</p>
          <div
            className="w-full h-full max-h-[183px] flex items-center gap-14.5 px-17.25 py-10 rounded-[17px] border-2 border-[#707070] border-dashed text-center cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="w-15 h-15">
              <svg className="w-full h-full" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Upload" clipPath="url(#clip0_1616_22561)">
                  <path id="Vector" d="M41.25 30H52.5C52.9973 30 53.4742 30.1975 53.8258 30.5492C54.1775 30.9008 54.375 31.3777 54.375 31.875V46.875C54.375 47.3723 54.1775 47.8492 53.8258 48.2008C53.4742 48.5525 52.9973 48.75 52.5 48.75H7.5C7.00272 48.75 6.52581 48.5525 6.17417 48.2008C5.82254 47.8492 5.625 47.3723 5.625 46.875V31.875C5.625 31.3777 5.82254 30.9008 6.17417 30.5492C6.52581 30.1975 7.00272 30 7.5 30H18.75" stroke="#23B2FF" strokeWidth="2.8125" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Vector_2" d="M30 30V5.625" stroke="#23B2FF" strokeWidth="2.8125" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Vector_3" d="M18.75 16.875L30 5.625L41.25 16.875" stroke="#23B2FF" strokeWidth="2.8125" strokeLinecap="round" strokeLinejoin="round" />
                  <path id="Vector_4" d="M44.0625 41.7188C45.3569 41.7188 46.4062 40.6694 46.4062 39.375C46.4062 38.0806 45.3569 37.0312 44.0625 37.0312C42.7681 37.0312 41.7188 38.0806 41.7188 39.375C41.7188 40.6694 42.7681 41.7188 44.0625 41.7188Z" fill="#23B2FF" />
                </g>
                <defs>
                  <clipPath id="clip0_1616_22561">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </div>
            <input type="file" id="fileUpload" hidden onChange={handleFileSelect} />
            <label htmlFor="fileUpload" className="w-full flex flex-col gap-3.5 items-center text-lg">
              <p className="leading-[23px] tracking-[0.36px]">Drag and drop files here to upload</p>
              <p className="font-semibold leading-[23px] tracking-[0.36px]">OR</p>
              <p className="leading-[23px] tracking-[0.36px]">Browse computer</p>
            </label>

            {file && <p className="text-green-600">{file.name}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <p className="w-full text-end text-base leading-[23px] ">Max File Size: 5MB</p>
        </div>
        <div className="w-full max-w-[970px] 2xl:h-full flex flex-col justify-between gap-10.5 items-center pt-18.5 px-11.5 pb-5.5 bg-[#fff] rounded-[32px] border border-[rgba(217,217,217,0.60)]  ">
          <div className="w-full h-full flex flex-col gap-26.5">
            <p className="text-[32px] font-semibold leading-[15.8px] ">Add New Health Record</p>
            <div className="flex flex-col gap-11.25">
              <div className="w-max flex gap-2 items-center px-2.5 py-1.5 bg-[rgba(217,217,217,0.60)] rounded-[50px] whitespace-nowrap overflow-x-auto">
                {["Prescription", "Lab reports"].map((option, idx) => (
                  <button key={"optionFilter" + idx} onClick={() => setFormData({ ...formData, type: option })} className={`px-9 py-2 rounded-3xl ${formData.type === option ? "font-medium text-accent bg-stone-50" : "text-gray-700"}`}>
                    {option}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-x-11 gap-y-6.25 place-items-center">
                <Input name="prescriptionId" label="Prescription ID" type="number" value={prescriptionId} disabled={true} onChange={handleChange} errLabel={false} markAsRequired={true} />
                <Input name="doctor" label="Doctor's Name" value={formData.doctor} onChange={handleChange} errLabel={false} markAsRequired={true} pencilEnabled={true} />
                <Input name="speciality" label="Speciality" value={formData.speciality} onChange={handleChange} errLabel={false} markAsRequired={true} pencilEnabled={true} />
                <Input name="doctorId" label="Doctor's Registration Number" value={doctorId} disabled={true} onChange={handleChange} errLabel={false} pencilEnabled={true} />
                <Input name="hospital" label="Hospital Address" classes="col-span-2" value={formData.hospital} onChange={handleChange} errLabel={false} pencilEnabled={true} />
                <Input name="diagnosis" label="Diagnosis" value={formData.diagnosis || ""} onChange={handleChange} errLabel={false} />
                <Input name="testName" label="Test" value={formData.testName} onChange={handleChange} errLabel={false} />
                {/* <Input name="doctor" label="" value={formData.doctor} onChange={handleChange} errLabel={false} /> */}
                {
                  Object.keys(errors).length > 0 &&
                  <p className={`w-full text-sm leading-[25.89px] text-start text-[#ff3131] min-h-6.5 `}>{Object.values(errors)[0]}</p>
                }
              </div>
            </div>
          </div>
          <div className="w-full flex gap-13 items-center justify-end ">
            <button onClick={closeModal} className="w-[260px] btn btn-light border-[#FF5D5D] text-[#FF5D5D] hover:bg-[#FF5D5D] hover:text-white">Discard</button>
            <button onClick={handleAddRecord} className="w-[260px] btn btn-primary hover:bg-[#f7f8f8]">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

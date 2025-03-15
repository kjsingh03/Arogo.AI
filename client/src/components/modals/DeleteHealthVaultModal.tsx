export default function DeleteHealthVaultModal({ closeModal, handleDeleteRecord }: { closeModal: () => void, handleDeleteRecord: () => void }) {
    return (
      <div onClick={closeModal} className="w-screen h-screen bg-[rgba(107,107,107,0.50)] fixed top-0 left-0 z-[1000] flex justify-center items-center ">
        <div onClick={(e) => e.stopPropagation()} className="w-[729px] max-sm:w-full h-[330px] overflow-y-auto thin-scrollbar bg-[#fafafa] flex flex-col items-center gap-25 py-8.5 px-10 rounded-2xl max-sm:p-2.5 ">
          <div className="flex flex-col items-center text-center">
            <p className="text-[32px] font-semibold leading-[47px] tracking-[0.64px] ">Cancel appointment</p>
            <p className="text-xl leading-[47px] tracking-[0.4px] ">Are you sure you want to delete this address?</p>
          </div>
          <div className="w-full flex gap-2.5 items-center">
            <button onClick={closeModal} className="btn btn-light">Cancel</button>
            <button onClick={handleDeleteRecord} className="btn btn-dark bg-[#FF5D5D] hover:bg-[#f7f8f8]">Delete</button>
          </div>
        </div>
      </div>
    )
  }
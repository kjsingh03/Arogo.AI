import { blackPlus } from "../../assets";
import { FAQItemProps } from "../../types/props";

export default function FAQItem({ question, answer,isOpen,onClick }: FAQItemProps) {
    // const [ isOpen,setIsOpen] = useState<boolean>(false)

    return (
        <div className="w-full">
            <div
                className="flex items-center gap-5 justify-between py-6 px-4 w-full bg-[#fafafa] cursor-pointer transition-all duration-300"
                // onClick={()=>setIsOpen(!isOpen)}
                onClick={onClick}
                tabIndex={0}
            >
                <h3 className="text-2xl">{question}</h3>
                <img
                    src={blackPlus}
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    alt={isOpen ? "Collapse" : "Expand"}
                />
            </div>

            <div className={`overflow-hidden transition-all duration-600 ease-in-out`} style={{ maxHeight: isOpen ? "200px" : "0px" }}            >
                <p className="px-6 pb-4 bg-[#fafafa] text-xl leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}

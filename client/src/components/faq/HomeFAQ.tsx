import { useState } from "react";
import FAQItem from "./FAQItem";

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

export default function HomeFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="transition-all duration-600 ease-in-out flex flex-col gap-13 text-2xl leading-loose max-w-4xl mx-auto px-4 py-32 xl:py-64.5">
            <h2 className="text-6xl font-bold tracking-[-1.845px] leading-[69px] text-center">
                Frequently asked questions
            </h2>

            <div className="flex flex-col gap-1">
                {faqData?.map((faq, index) => (
                    <FAQItem
                        key={'faq'+index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};
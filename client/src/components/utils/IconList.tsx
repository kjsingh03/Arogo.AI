import { Link } from 'react-router-dom';
import { icon1, icon2, icon3, icon4, icon5, icon6, iconBg } from '../../assets';

const iconsList = [{ img: icon1, desc: "Consult Online", link: "consult-online" }, { img: icon2, desc: "Medicine alert", link: "medicine-alert" }, { img: icon3, desc: "Health vault", link: "health-vault" }, { img: icon4, desc: "Book test", comingSoon: true, link: "book-test" }, { img: icon5, desc: "Arogo card", comingSoon: true, link: "arogo-card" }, { img: icon6, desc: "Mental health", link: "mental-health" }];

export default function IconList() {
    return (
        <div className="max-w-[1486px] mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 place-items-center justify-center max-2xl:gap-3 gap-10 ">
            {
                iconsList?.map((icon, idx) => (
                    <Link to={"/service/" + icon.link} key={'icon' + idx} className="w-full z-0 group ">
                        <div className="w-[90%] xsl:w-full xl:max-w-[171.4px] h-[33.4px] rounded-tl-[33.5px] rounded-tr-[20.1px] bg-white group-hover:shadow-[10px_20px_35px_0px_#afadad50]"></div>
                        <div className="w-full xl:max-w-[214.26px] h-[174.08px] flex flex-col justify-between max-xl:items-center bg-white group-hover:shadow-[10px_20px_35px_0px_#afadad50] rounded-b-[33.5px] rounded-tr-[21.8px] p-4 ">

                            <div className="w-[73px] h-[73px] relative z-10">
                                <img src={icon.img} className="size-full object-contain z-20" alt="icon" />
                                <img src={iconBg} className="w-[38.5px] h-[38.5px] object-contain absolute -top-1 max-xl:-top-1 -left-1 max-xl:-left-1 -z-10" alt={'icon-bg' + idx} />
                            </div>

                            <div className="max-h-[71px]">
                                {
                                    icon.comingSoon &&
                                    <p className='text-accent text-xl leading-[25.1px] font-semibold'>Coming soon</p>
                                }
                                <p className={`${icon.comingSoon ? 'opacity-33' : ''} text-xl leading-[25.4px] tracking-default font-medium`}>
                                    {icon.desc}
                                </p>
                            </div>
                        </div>
                    </Link>

                ))
            }
        </div>
    )
}

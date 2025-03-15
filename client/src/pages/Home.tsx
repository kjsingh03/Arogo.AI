import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/physical");
    }, 1000);
  },[])

  return (
    <div className='flex flex-col gap-9 min-h-[60vh] '>
      Home
    </div>
  )
}

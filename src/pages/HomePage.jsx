import robot_img from "../assets/robot_image.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex items-center justify-center hero h-[85vh] w-full bg-gradient-to-r from-orange-100 to-[#e5bc8b]">
      <div className="hero-content text-center min-w-[200px]">
        <div className="max-w-md flex-1">
          <img
            className="block w-[200px] h-auto mx-auto"
            src={robot_img}
            alt="LegalBizAI"
          />
          <h1 className="text-2xl lg:text-5xl font-bold" style={{ color: 'rgb(217 131 87)', '--tw-text-opacity': 1 }}>
            Xin chào! Mình là
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
            LegalBizAI Chat
          </h1>
          <p className="py-6 font-semibold lg:text-lg text-sm">
            Giúp bạn giải đáp thắc mắc về luật doanh nghiệp, tra cứu thông tin pháp lý một cách nhanh chóng!
          </p>
          <Link to="/chat">
            <button className="btn btn-info bg-gradient-to-r from-orange-400 to-orange-600 text-white">Bắt đầu ngay</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

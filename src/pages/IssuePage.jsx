import { useRef } from 'react';
import axios from 'axios';

function IssuePage() {
  const form = useRef();

  async function sendMail(e) {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = new URLSearchParams();
    data.append('entry.229387575', formData.get('from_email')); // Thay đổi entry.229387575 thành tên trường thực tế của bạn
    data.append('entry.324011336', formData.get('message')); // Thay đổi entry.324011336 thành tên trường thực tế của bạn

    try {
      const response = await axios.post(
        'https://docs.google.com/forms/d/e/1FAIpQLSdeqSi0ks7dfKtpFAaS5HHlecwxXRPkbWNN0oUsN9POWA4ZMg/formResponse', // Thay YOUR_FORM_ID bằng ID form của bạn
        data
      );
      console.log('SUCCESS!', response.status, response.data);
      document.getElementById('my-modal').checked = true;
    } catch (error) {
      console.log('FAILED...', error);
    }
  }

  return (
    <div className="flex justify-center h-[85vh] bg-gradient-to-br from-orange-50 to-orange-100">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Gửi thành công 🥳</h3>
          <p className="py-4">
            Cảm ơn bạn đã gửi góp ý / báo lỗi 🤗. Chúng tôi sẽ xem xét những ý kiến của người dùng để ngày càng hoàn thiện sản phẩm hơn nhé!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-success">
              Đóng
            </label>
          </div>
        </div>
      </div>

      <div className="md:w-[50%]">
        <h1 className="text-3xl text-center font-bold p-5 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
          Báo lỗi hoặc góp ý
        </h1>
        <p className="text-justify font-semibold text-sm pr-2 pl-2">
          Sự đóng góp ý kiến từ các bạn sẽ là sự hỗ trợ đắc lực giúp chúng tôi ngày càng tốt hoàn thiện sản phẩm hơn.
        </p>

        <form ref={form} onSubmit={sendMail} className="flex flex-col items-center">
          <textarea
            name="message"
            placeholder="Nhập phản hồi của bạn tại đây!"
            className="mt-5 mb-3 h-[30%] textarea textarea-bordered textarea-md w-full"
            required
          ></textarea>
          <input
            type="email"
            name="from_email"
            placeholder="Email của bạn"
            className="input w-full mb-3"
            required
          />
          <button type="submit" className="w-full btn btn-primary btn-md bg-gradient-to-tl from-transparent via-blue-600 to-indigo-500">
            Gửi ý kiến
          </button>
        </form>
      </div>
    </div>
  );
}

export default IssuePage;

const Product = ({ img, content, price, review, point }) => {
  return (
    <div className="h-[472px] rounded-sm flex flex-col hover:shadow-xl p-4">
      <div className="flex items-center w-full justify-center">
        <img className="pt-4" src={img} alt="Product" />
      </div>
      <p className="text-[16px] mt-3 pt-3 pb-2 line-clamp-3 flex-1">{content}</p>
      <p className="text-[24px] font-bold pb-1">{price}</p>
      <p className="text-[14px] text-[rgb(120,120,133)] pb-1 line-clamp-2 flex-1">{review}</p>
      <div className="grid grid-cols-3 items-center px-7">

        <div className="flex space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path d="M6.00004 8.31066L9.41996 10.3359L8.51241 6.51887L11.5339 3.95062L7.55505 3.61398L6.00004 0.0195312L4.44503 3.61398L0.466187 3.95062L3.48214 6.51887L2.58012 10.3359L6.00004 8.31066Z" fill="#FB8200" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path d="M6.00004 8.31066L9.41996 10.3359L8.51241 6.51887L11.5339 3.95062L7.55505 3.61398L6.00004 0.0195312L4.44503 3.61398L0.466187 3.95062L3.48214 6.51887L2.58012 10.3359L6.00004 8.31066Z" fill="#FB8200" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path d="M6.00004 8.31066L9.41996 10.3359L8.51241 6.51887L11.5339 3.95062L7.55505 3.61398L6.00004 0.0195312L4.44503 3.61398L0.466187 3.95062L3.48214 6.51887L2.58012 10.3359L6.00004 8.31066Z" fill="#FB8200" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
            <path d="M6.00004 8.31066L9.41996 10.3359L8.51241 6.51887L11.5339 3.95062L7.55505 3.61398L6.00004 0.0195312L4.44503 3.61398L0.466187 3.95062L3.48214 6.51887L2.58012 10.3359L6.00004 8.31066Z" fill="#FB8200" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6.00004 8.27171V2.85436L6.94633 5.20188L9.37016 5.41741L7.53292 7.10086L8.08077 9.59401L6.00004 8.27171ZM11.5339 4.68344L7.55505 4.32811L6.00004 0.466064L4.44503 4.32811L0.466187 4.68344L3.48214 7.43872L2.58012 11.5338L6.00004 9.36101L9.41996 11.5338L8.51241 7.43872L11.5339 4.68344Z" fill="#FB8200" />
          </svg>
        </div>
        <p className="text-[14px] font-[400]">{point}</p>
        <div className="flex h-[32px] w-[88px] space-x-2 text-[14px] border border-solid border-[#9DC2FF] justify-center items-center">
          <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7.07 11.585L7 11.655L6.923 11.585C3.598 8.56795 1.4 6.57295 1.4 4.54995C1.4 3.14995 2.45 2.09995 3.85 2.09995C4.928 2.09995 5.978 2.79995 6.349 3.75195H7.651C8.022 2.79995 9.072 2.09995 10.15 2.09995C11.55 2.09995 12.6 3.14995 12.6 4.54995C12.6 6.57295 10.402 8.56795 7.07 11.585ZM10.15 0.699951C8.932 0.699951 7.763 1.26695 7 2.15595C6.237 1.26695 5.068 0.699951 3.85 0.699951C1.694 0.699951 0 2.38695 0 4.54995C0 7.18895 2.38 9.35195 5.985 12.621L7 13.545L8.015 12.621C11.62 9.35195 14 7.18895 14 4.54995C14 2.38695 12.306 0.699951 10.15 0.699951Z" fill="#2979FF" />
          </svg>
          <p className="">watch</p>
        </div>
      </div>
    </div>
  )
}
export default Product

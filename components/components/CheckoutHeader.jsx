"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CheckoutHeader() {
  const pathname = usePathname()
  let addressPage = pathname.startsWith('/address')
  let paymentPage = pathname.startsWith('/payment')
  let thankyouPage = pathname.startsWith('/thank-you')
  return (
    <div className="checkout-header">
      <div className="container">
        <div className="checkout-header-wrapper">
          <div className="colA">
            <Link href="/" className="ico">
                <Image src="/assets/icon/ub_grad.svg" width="58" height="54" alt="Logo"></Image>
            </Link>
          </div>
          <div className="colB">
            <ul>
              <li>
                <Link href="/cart" className={thankyouPage? "active" : "active"}>
                  <div className="ico">
                    <svg
                      width={10}
                      height={9}
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33333 8.66671L0 5.33337L1.16667 4.16671L3.33333 6.33337L8.83333 0.833374L10 2.00004L3.33333 8.66671Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  Bag
                </Link>
              </li>
              <li>
                <Link href="/address" className={addressPage || paymentPage || thankyouPage ? "active" : ""}>
                  <div className="ico">
                    <svg
                      width={10}
                      height={9}
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33333 8.66671L0 5.33337L1.16667 4.16671L3.33333 6.33337L8.83333 0.833374L10 2.00004L3.33333 8.66671Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  Address
                </Link>
              </li>
              <li>
                <Link href="/payment" className={paymentPage || thankyouPage ? "active" : ""}>
                  <div className="ico">
                    <svg
                      width={10}
                      height={9}
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33333 8.66671L0 5.33337L1.16667 4.16671L3.33333 6.33337L8.83333 0.833374L10 2.00004L3.33333 8.66671Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  Payment
                </Link>
              </li>
            </ul>
          </div>
          <div className="colC">
            <div className="secure-kaedj inline-flex">
              <svg
                width={23}
                height={27}
                viewBox="0 0 23 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.502 25.0834C11.502 25.0834 21.502 21.7501 21.502 13.4167"
                  stroke="#666"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.502 13.4167V3.41667C21.502 3.41667 18.1686 1.75 11.502 1.75"
                  stroke="#666"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.502 25.0834C11.502 25.0834 1.50195 21.7501 1.50195 13.4167"
                  stroke="#666"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.50195 13.4167V3.41667C1.50195 3.41667 4.83529 1.75 11.502 1.75"
                  stroke="#666"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.1686 6.75C11.502 11.75 9.83529 18.4167 9.83529 18.4167C9.83529 18.4167 8.16862 16.4273 6.50195 15.0833"
                  stroke="#666"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              100% Secure
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import "@/styles/other/other.css"
import Link from 'next/link'

const ThankYouPage = () => {
    return (
        <>
            <main>
                <section className='thanks-banner'>
                    <div className="content text-center">
                        <h1>Thank You!</h1>

                        <h6>We sincerely appreciate your engagement with FlexTron. Your request has been successfully received. Our team is now processing your information and will reach out to you soon with the next steps.</h6>

                        <div className="bottom-btn" data-animate="zoom-in">
                            <Link href="/">
                                BACK TO HOME
                            </Link>
                        </div>
                    </div>

                </section>
            </main >
        </>
    )
}

export default ThankYouPage     
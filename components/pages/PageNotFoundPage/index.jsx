import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "@/styles/other/other.css"


const PageNotFoundPage = () => {
    return (
        <>
            <main>
                <section className='error-banner'>
                    <div className="content text-center">
                        <div className="logo">
                            <Image src="/assets/images/error.gif" width={800} height={600} alt='error image'></Image>
                        </div>

                        <h6>Sorry, the page you are looking for could not be found.</h6>

                        <div className="bottom-btn" data-animate="zoom-in">
                            <Link href="/">
                                BACK TO HOME
                            </Link>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

export default PageNotFoundPage
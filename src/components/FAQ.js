import React from 'react';

const FAQ = () => {
    return (
        <div style={{ backgroundColor: "#5A5B5C" }}>
            <div style={{ width: '50%', margin: '0 auto' }} className=" text-center" class="accordion" id="accordionExample">
                <div className="accordion-item bg-[#5A5B5C] border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                        <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-[#5A5B5C]
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                            aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            YOU WILL BE ABLE TO MINT AN INTERNET MADE NFT ON WWW.INTERNETMADENFT.COM WEBSITE. WHEN YOU CLICK THE MINT BUTTON YOU WILL BE REDIRECTED TO OUR MINTING SUBPAGE. IF YOU HAVE OUR WHITELIST ROLE, YOU WILL NEED TO WHITELIST YOUR ETHEREUM ERC20 WALLET (SUCH AS METAMASK) ADDRESS, ONLY THEN YOU ARE ABLE TO PARTICIPATE IN THE PRESALE. PUBLIC SALE WILL BE OPEN TO EVERYONE.

                                WE ARE CONSTANTLY LISTENING TO OUR COMMUNITY AND ADJUSTING OUR ROADMAP TO BEST SERVE ALL OF OUR IM NFT HOLDERS. OUR VISION CONTINUES TO EVOLVE BASED ON THE INPUT OF OUR ECOSYSTEM, AND IN THE FUTURE WE’LL HAVE STAKING AND DAO INFRASTRUCTURE AVAILABLE FOR OUR NFT HOLDERS
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-[#5A5B5C] border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-[#5A5B5C]
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default,
                            until the collapse plugin adds the appropriate classes that we use to style each
                            element. These classes control the overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                            our default variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-[#5A5B5C]e border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-[#5A5B5C]
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body py-4 px-5">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default,
                            until the collapse plugin adds the appropriate classes that we use to style each
                            element. These classes control the overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                            our default variables. It's also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
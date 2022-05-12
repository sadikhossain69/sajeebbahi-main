import React from 'react';
import mannequin from '../Images/Mannequin.png'

const Started = () => {
    return (
        <div className="pb-16" style={{ backgroundColor: "#5A5B5C" }}>
            <div className="w-1/2 mx-auto text-justify">
                <h1 className="text-7xl text-center">HOW IT STARTED</h1>
                <div className="mt-16">
                    <p className="mb-5">IT WAS IN JUNE 2021 WHEN WE MET IN REAL LIFE FOR
                        THE FIRST TIME. WHAT WAS FIRST MEANT TO BE A QUICK
                        CHAT TURNED INTO US TALKING FOR HOURS ABOUT WEB3.
                        WE WANTED TO MAKE SOMETHING BIGGER THAN JUST THE
                        TWO OF US. AFTER ALL, WE WERE ENTERING A NEW ERA,
                        FULL OF OPPORTUNITIES AND POSSIBILITIES. SO THE
                        TIMING WAS PERFECT.</p>
                    <p className="mb-5">WE BOTH HAD A STREETWEAR BRAND IN THE PAST. SOME
                        PEOPLE LOVED IT, SOME DIDN’T, BUT TO US IT WAS EVERYTHING
                        WE EVER WANTED IT TO BE – A REFLECTION OF OUR</p>
                    <div className="flex">
                        <div className="w-3/6">
                            <p className="mb-5">IN THAT MEETING, WE BOTH REALIZED THAT WE HAD
                                A SHARED VISION TO BRING OUR FASHION KNOWLEDGE
                                TO THE NEW FRONTIER. WE WANTED TO DO SOMETHING
                                THAT HAD NEVER BEEN DONE BEFORE IN OUR OWN WAY.</p>
                            <p className="mb-5">FAST FORWARD FOUR MONTHS LATER, AND WE WERE READY.
                                WE FOUND OUR INVESTORS WHO LOVED THE IDEA, OUR PLAN,
                                AND WHO BELIEVED IN US. THANK YOU TO ANDREJ AND MIRAN
                                FOR MAKING ALL OF THIS POSSIBLE.</p>
                            <p className="mb-5">WITH OUR VISION AND OUR INVESTORS, IT WAS TIME TO
                                FORM OUR A-TEAM. WE ASSEMBLED THE SUPERSTARS FROM OUR
                                NETWORK AND PAST PROJECTS, INCLUDING FIVE TALENTED
                                DESIGNERS: OUR LEAD DESIGNER NIK PRESTON, OUR 3D MODEL
                                DESIGNER KRISTIAN IVANSEK, AND OUR THREE FASHION
                                DESIGNERS: LARA PONEBSEK, HUGO SUKLJE, AND LARA PIKOVNIK.</p>
                            <p>FAST FORWARD TO FOUR MONTHS LATER: WE WERE READY TO BEGIN.</p>
                        </div>
                        <div className="w-5/6" style={{ backgroundImage: `url(${mannequin})`, backgroundSize: 'cover', backgroundSize: "100% 100%", backgroundPosition: "top center" }}>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-64 text-center">© INTERNET MADE 2022 ALL RIGHTS RESERVED</p>
        </div>
    );
};

export default Started;
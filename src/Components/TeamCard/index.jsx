import React from 'react'

function TeamCard() {
    return (
        <div className='px-[190px] bg-[#908DDC] py-[130px] mt-16'>
            <div className=''>
                <p className='font-medium text-[30px] text-white font-serif'>Our Finished Projects</p>
                <p className='text-[18px] mt-5 font-sans text-white'>Pallamco laboris nisi ut aliquip ex ea commodo <br /> consequat.</p>
            </div>
            <div class="team-card">
                <div class="container">
                    <div class="row">
                        <div class="owl-carousel  team-carousel grid grid-cols-4 gap-[30px]">
                            <div class="col-sm-3 col-xs-12">
                                <div class="single-team-box team-box-bg-1">
                                    <div class="team-box-inner">
                                        <h3>tom hanks</h3>
                                        <p class="team-meta">Founder &  CEO</p>
                                        <a href="team.html" class="learn-btn">
                                            learn more
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="single-team-box team-box-bg-2">
                                    <div class="team-box-inner">
                                        <h3>alex browne</h3>
                                        <p class="team-meta">
                                            Director, Management & Research
                                        </p>
                                        <a href="team.html" class="learn-btn">
                                            learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="single-team-box team-box-bg-3">
                                    <div class="team-box-inner">
                                        <h3>darren j. stevens</h3>
                                        <p class="team-meta">
                                            Director, Finance Solution
                                        </p>
                                        <a href="team.html" class="learn-btn">
                                            learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-12">
                                <div class="single-team-box team-box-bg-4">
                                    <div class="team-box-inner">
                                        <h3>kevin thomson</h3>
                                        <p class="team-meta">
                                            Head, Legal Advising
                                        </p>
                                        <a href="team.html" class="learn-btn">
                                            learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
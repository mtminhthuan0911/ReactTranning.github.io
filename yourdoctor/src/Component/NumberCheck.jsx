import React, { PureComponent } from 'react'
import CountUp from 'react-countup';

export default class NumberCheck extends PureComponent {
    render() {
        return (
            <section className="NumberCheck">
            <div className="item frist">
                 <p className="Number"><CountUp   end={500} duration={10} useEasing={true}></CountUp>+</p>
                 <p className="content">Patients Every Day</p>
            </div>
            <div className="item center">
                 <p className="Number"><CountUp  end={20} duration={10} useEasing={true}></CountUp>+</p>
                 <p className="content">Year Experience</p>
            </div>
            <div className="item last">
                 <p className="Number"><CountUp  end={350} duration={10} useEasing={true}></CountUp>+</p>
                 <p className="content">Diagnois Verity</p>
            </div>
        </section>
        )
    }
}

'use client';

import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <CountUp
            decimal=","
            decimals="2"
            duration="0.8"
            prefix="$"
            end={amount}
        />
    );
};

export default AnimatedCounter;

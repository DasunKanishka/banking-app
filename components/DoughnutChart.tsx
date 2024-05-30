'use client';

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1200, 2800, 4000, 6400],
                backgroundColor: ['#175CD3', '#1570EF', '#2E90FA', '#D1E9FF'],
            },
        ],
        labels: ['Bank 01', 'Bank 02', 'Bank 03', 'Bank 04'],
    };

    return (
        <Doughnut
            data={data}
            options={{ cutout: '60%', plugins: { legend: { display: false } } }}
        />
    );
};

export default DoughnutChart;

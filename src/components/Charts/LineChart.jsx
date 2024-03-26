import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const LineChart = ({ earningsData }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const options = {
                chart: {
                    type: 'column',
                    backgroundColor: '#fff',
                },
                title: {
                    text: 'Earnings Overview',
                    
                },
                xAxis: {
                    categories: earningsData.months,
                },
                yAxis: {
                    title: {
                        text: 'Earnings (₹)',
                    },
                },
                tooltip: {
                    shared: true,
                    crosshairs: true,
                },
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'top',
                    top: 0,
                },
                series: [
                    {
                        name: 'Instructors',
                        data: earningsData.instructors,
                        color: '#5F76E8',
                        smoothLine: true
                    },
                    {
                        name: 'Admins',
                        data: earningsData.admins,
                        color: '#FFA500',
                        smoothLine: true
                    },
                ],
            };

            Highcharts.chart(chartRef.current, options);
        }
    }, [earningsData]);

    return <div ref={chartRef}></div>;
};

export default LineChart;
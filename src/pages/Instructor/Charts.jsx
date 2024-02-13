import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend } from "chart.js";
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend);

export const LineChart = () => {
    const lables = getLastYearMonths();
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: "Yearly Views"
            }
        }
    }

    const data = {
        labels: lables,
        datasets: [
            {
                label: 'Views',
                data: [12, 19, 3, 5, 2, 3, 92, 18, 19, 92, 82, 48],
                fill: false,
                backgroundColor: '#fff',
                borderColor: '#27debf',
                borderWidth: 1,
            },
        ],
    };

    return (
        <Line options={options} data={data} />
    )
}

export const DoughnutChart = () => {
    const labels = ['Subscribed', 'Not Subscribed'];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: "Subscription Analysis"
            }
        }
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: ['Users: '],
                data: [20, 23],
                fill: false,
                borderColor: ['#27debf', 'red'],
                backgroundColor: ['rgba(0, 235, 196,0.5)', 'rgba(255, 0, 0, 0.5)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Doughnut options={options} data={data} />
    )
}


function getLastYearMonths() {
    const labels = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const currentMonth = new Date().getMonth();
    let remain = 11 - currentMonth;

    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        labels.unshift(element);

        if (i === 0) break;
    }

    for (let index = 11; index > remain; index--) {
        if (index === currentMonth) break;
        const element = months[index];
        labels.unshift(element);
    }
    return labels;
}
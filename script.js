/* Chart.js based charts for Axie Terrarium info */
document.addEventListener('DOMContentLoaded', () => {
    // Lunium chart: sold (B) vs revenue (k)
    const luniumCtx = document.getElementById('luniumChart').getContext('2d');
    new Chart(luniumCtx, {
        type: 'bar',
        data: {
            labels: ['Lunium Sold', 'Lunium Revenue'],
            datasets: [{
                label: 'Amount',
                data: [3.32, 95.753], // 3.32 B, $95,753 → 95.753 k
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => {
                            if (value >= 1000) return (value/1000) + 'k';
                            return value;
                        }
                    }
                }
            }
        }
    });

    // Evolved parts multiplier chart
    const evolvedCtx = document.getElementById('evolvedChart').getContext('2d');
    new Chart(evolvedCtx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                label: 'Multiplier',
                data: [1.0, 1.1, 1.2, 1.3, 1.45, 1.68],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `×${ctx.parsed.y}`
                    }
                }
            },
            scales: { y: { beginAtZero: false } }
        }
    });

    // Land item rarity boost chart
    const landItemCtx = document.getElementById('landItemChart').getContext('2d');
    new Chart(landItemCtx, {
        type: 'bar',
        data: {
            labels: ['Common', 'Rare', 'Epic', 'Mystic'],
            datasets: [{
                label: 'Flame Boost %',
                data: [0.05, 0.10, 0.75, 1.5],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.parsed.y}%`
                    }
                }
            },
            scales: { y: { beginAtZero: true } }
        }
    });

    // Fortune slips cost chart
    const fortuneCtx = document.getElementById('fortuneChart').getContext('2d');
    new Chart(fortuneCtx, {
        type: 'bar',
        data: {
            labels: ['Savannah', 'Forest', 'Arctic', 'Mystic', 'Genesis', 'Luna\'s Landing'],
            datasets: [{
                label: 'Slips Needed',
                data: [3, 8, 22, 48, 960, 2880],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.parsed.y} slips`
                    }
                }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Land utility chart
    const landUtilCtx = document.getElementById('landUtilChart').getContext('2d');
    const totalPlots = 16886;
    const activatedPct = 52.78;
    const activatedPlots = Math.round(totalPlots * activatedPct / 100);
    const lockedPlots = totalPlots - activatedPlots;
    new Chart(landUtilCtx, {
        type: 'bar',
        data: {
            labels: ['Total Plots', 'Activated & Locked', 'Locked (Inactive)', 'Max Items per Plot'],
            datasets: [{
                label: 'Count',
                data: [totalPlots, activatedPlots, lockedPlots, 8],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const v = ctx.parsed.y;
                            if (ctx.dataIndex === 0) return `${v.toLocaleString()} plots`;
                            if (ctx.dataIndex === 1) return `${v.toLocaleString()} plots (${activatedPct}%)`;
                            if (ctx.dataIndex === 2) return `${v.toLocaleString()} plots (${(100 - activatedPct).toFixed(2)}%)`;
                            if (ctx.dataIndex === 3) return `${v} items per plot`;
                            return v;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { callback: v => v >= 1000 ? (v/1000)+'k' : v }
                }
            }
        }
    });
});
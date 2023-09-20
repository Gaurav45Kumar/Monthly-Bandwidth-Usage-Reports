const months = [];
const usageData = [];

const ctx = document.getElementById('usageChart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: [{
            label: 'Monthly Bandwidth Usage (GB)',
            data: usageData,
            backgroundColor: 'rgba(0, 123, 255, 0.6)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function addData() {
    const monthSelect = document.getElementById('month');
    const usageInput = document.getElementById('usage');
    const selectedMonth = monthSelect.value;
    const bandwidthUsage = parseInt(usageInput.value);

    months.push(selectedMonth);
    usageData.push(bandwidthUsage);

    chart.update();
}

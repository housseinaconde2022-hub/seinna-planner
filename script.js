// Calendrier simple
const monthNames = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
let currentDate = new Date(2026, 10, 1); // Novembre 2026

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const start = firstDay === 0 ? 6 : firstDay - 1; // Lundi = 0

    const container = document.getElementById('calendarDays');
    container.innerHTML = '';

    for (let i = 0; i < start; i++) {
        container.innerHTML += `<span></span>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const isToday = d === 13; // 13 novembre comme dans ton image
        container.innerHTML += `<span class="${isToday ? 'today' : ''}">${d}</span>`;
    }
}

document.getElementById('prevMonth').onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
};
document.getElementById('nextMonth').onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
};

// Timeline exemple
const timelineData = [
    { hour: "8h", event: "Cours / Travail ♥" },
    { hour: "12h", event: "Pause ♥" },
    { hour: "17h", event: "Sport / Danse ♥" },
    { hour: "20h", event: "Soirée chill ♥" }
];

const timeline = document.getElementById('timeline');
timelineData.forEach(item => {
    timeline.innerHTML += `
        <div class="time-slot">
            <span class="hour">${item.hour}</span>
            <div class="event">${item.event}</div>
        </div>
    `;
});

// Init
renderCalendar();
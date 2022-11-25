

const sidebarButton = document.querySelector('.sidebar__button');
const sidebarButtonClose = document.querySelector('.sidebar__button--close');
const sidebar = document.querySelector('.sidebar');

sidebarButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  sidebar.classList.add('is-open');
});

sidebarButtonClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  sidebar.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    sidebar.classList.remove('is-open');
  }
});

// Гистограмма


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [{
      data: [54, 115, 107, 36, 253, 47, 36, 187, 62, 145, 36, 36, 36],
      fill: true,
      display: false,
      label: '',
      backgroundColor: [
        '#454eec',
        '#98f8a0'
      ],
      borderRadius: 10,

    }]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          
        }
      },
      y: {
        ticks:{
          display:false,
        },
        grid: {
          display: false,
          drawTicks:false,
          drawBorder:false,

        }
      }
    }
  }
});


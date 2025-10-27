// Data
const developments = [
  {
    name: "GRAN RESERVA",
    year: 2020,
    bedrooms: "3Q E 4Q",
    audience: "FAMÍLIA",
    status: "PRONTO PARA MORAR",
    items: ["PLAYGROUND", "BRINQUEDOTECA", "ACADEMIA", "SALÃO DE FESTAS", "ESPAÇO GOURMET", "CHURRASQUEIRA", "PISCINA", "BICICLETÁRIO", "SAUNA"],
    count: 9
  },
  {
    name: "RZ 25",
    year: 2023,
    bedrooms: "2Q E 3Q",
    audience: "FAMÍLIA",
    status: "EM CONSTRUÇÃO - MAI/27",
    items: ["QUADRA GRANDE", "PLAYGROUND", "BRINQUEDOTECA", "SALA DE JOGOS", "FITNESS", "MASSAGEM", "SALÃO DE FESTAS", "LOUNGE (ESPAÇO GOURMET)", "ESPAÇO GOURMET EXTERNO", "PISCINA", "CONFERENCE ROOM", "COWORKING", "DELIVERY/GUARDA-COMPRAS", "BICICLETÁRIO C/OFICINA"],
    count: 14
  },
  {
    name: "ARGO CAMBURI",
    year: 2023,
    bedrooms: "2Q",
    audience: "SOLTEIRO OU RECÉM CASADOS",
    status: "PRONTO PARA MORAR",
    items: ["QUADRA ESPORTIVA E STREETBALL", "PLAYGROUND", "BRINQUEDOTECA", "FITNESS", "SPA", "SALÃO DE FESTAS ADULTO E INFANTIL", "3 CHURRASQUEIRAS", "ESPAÇO BRASA E ESPAÇO GOURMET", "PISCINA ADULTO E INFANTIL", "HOME OFFICE", "BICICLETÁRIO", "JOGOS TEEN", "GRAB AND GO", "ESPAÇO ZEN", "HORTA/POMAR", "SAUNA"],
    count: 16
  },
  {
    name: "VIZZO",
    year: 2023,
    bedrooms: "2Q E 3Q",
    audience: "FAMÍLIA",
    status: "EM CONSTRUÇÃO - ENTREGA EM OUT/26",
    items: ["QUADRA", "PLAYGROUND", "PUB", "ACADEMIA 2 ANDARES COM ESPAÇO FUNCIONAL", "SPA", "SALÃO DE FESTAS", "CHURRASQUEIRA", "CHURRASQUEIRA GRILL", "PISCINA", "CONFERENCE ROOM", "GUARDA-COMPRAS", "BICICLETÁRIO", "PET CARE"],
    count: 13
  },
  {
    name: "LÚMEA",
    year: 2024,
    bedrooms: "2Q E 3Q",
    audience: "FAMÍLIA",
    status: "EM CONSTRUÇÃO - ENTREGA EM OUT/28",
    items: ["QUADRA RECREATIVA", "PLAYGROUND", "OFICINA KIDS", "PUB", "ACADEMIA", "SALÃO DE FESTAS", "FAMILY CLUB", "CHURRASQUEIRA", "PISCINA", "COWORKING", "DELIVERY/GUARDA-COMPRAS", "BICICLETÁRIO", "ESPAÇO TEEN", "PET PLAY", "MINIMERCADO", "PET CARE", "SAUNA", "ESPAÇO BEAUTY"],
    count: 18
  },
  {
    name: "MUNDI",
    year: 2025,
    bedrooms: "2Q E 3Q",
    audience: "FAMÍLIA",
    status: "LANÇAMENTO - ENTREGA EM JULHO/28",
    items: ["QUADRA DE STREETBALL", "PARQUINHO", "BRINQUEDOTECA", "PUB", "ACADEMIA", "SALÃO DE FESTAS", "CHURRASQUEIRA", "CHURRASQUEIRA COBERTA", "PISCINA", "DELIVERY/GUARDA-COMPRAS", "BICICLETÁRIO", "ESPAÇO TEEN"],
    count: 12
  },
  {
    name: "NÔMA",
    year: 2025,
    bedrooms: "ST E 1Q",
    audience: "INVESTIDORES",
    status: "LANÇAMENTO - ENTREGA EM DEZ/28",
    items: ["PLAYGROUND", "FITNESS OUTDOOR E ACADEMIA INDOOR", "ESPAÇO GOURMET", "PISCINA", "COWORKING", "DELIVERY/GUARDA-COMPRAS", "BICICLETÁRIO", "PET PLACE", "MINIMERCADO", "LAVANDERIA COMPARTILHADA", "ESPAÇO ZEN"],
    count: 11
  },
  {
    name: "QUARTZO",
    year: 2025,
    bedrooms: "3Q",
    audience: "FAMÍLIA",
    status: "EM CONSTRUÇÃO - ENTREGA EM MAR/29",
    items: ["QUADRA INDOOR", "PLAYGROUND", "ESPAÇO KIDS", "PUB", "ACADEMIA", "SALÃO DE FESTAS", "CHURRASQUEIRA", "ESPAÇO QUARTZO", "PISCINA", "SALA DE REUNIÕES", "COWORKING", "DELIVERY/GUARDA-COMPRAS", "BICICLETÁRIO/OFICINA", "PLAYZONE", "PET PLAY"],
    count: 15
  },
  {
    name: "ILHA CAMBURI",
    year: 2025,
    bedrooms: "1Q E 2Q",
    audience: "INVESTIDORES SHORT STAY E SOLTEIROS/RECÉM CASADOS",
    status: "LANÇAMENTO - ENTREGA EM OUT/29",
    items: ["BRINQUEDOTECA", "SALÃO DE JOGOS", "ACADEMIA", "REPOUSO", "SALÃO DE FESTAS", "GRILL GOURMET", "ESPAÇO GOURMET", "PISCINA", "SALA DE REUNIÕES", "COWORKING", "DELIVERY/GUARDA-COMPRAS", "BICICLETÁRIO/OFICINA", "MINIMERCADO", "SAUNA"],
    count: 14
  }
];

const amenityCategories = {
  "Bem-estar": ["ACADEMIA", "FITNESS", "SPA", "MASSAGEM", "SAUNA", "REPOUSO", "FITNESS OUTDOOR E ACADEMIA INDOOR", "ACADEMIA 2 ANDARES COM ESPAÇO FUNCIONAL"],
  "Infantil": ["PLAYGROUND", "BRINQUEDOTECA", "KIDS", "INFANTIL", "PARQUINHO", "OFICINA KIDS", "ESPAÇO KIDS"],
  "Social/Eventos": ["SALÃO DE FESTAS", "CHURRASQUEIRA", "GOURMET", "BRASA", "GRILL", "FAMILY CLUB", "ESPAÇO QUARTZO", "SALÃO DE FESTAS ADULTO E INFANTIL", "3 CHURRASQUEIRAS", "CHURRASQUEIRA GRILL", "CHURRASQUEIRA COBERTA", "GRILL GOURMET", "ESPAÇO GOURMET", "ESPAÇO GOURMET EXTERNO", "LOUNGE (ESPAÇO GOURMET)", "ESPAÇO BRASA E ESPAÇO GOURMET"],
  "Aquático": ["PISCINA", "PISCINA ADULTO E INFANTIL"],
  "Trabalho": ["COWORKING", "CONFERENCE ROOM", "REUNIÕES", "HOME OFFICE", "SALA DE REUNIÕES"],
  "Serviços": ["DELIVERY/GUARDA-COMPRAS", "MINIMERCADO", "GRAB AND GO", "LAVANDERIA COMPARTILHADA", "GUARDA-COMPRAS"],
  "Mobilidade": ["BICICLETÁRIO", "OFICINA", "BICICLETÁRIO C/OFICINA", "BICICLETÁRIO/OFICINA"],
  "Entretenimento": ["PUB", "JOGOS", "TEEN", "PLAYZONE", "LOUNGE", "SALA DE JOGOS", "JOGOS TEEN", "ESPAÇO TEEN"],
  "Esportes": ["QUADRA", "STREETBALL", "QUADRA GRANDE", "QUADRA ESPORTIVA E STREETBALL", "QUADRA RECREATIVA", "QUADRA DE STREETBALL", "QUADRA INDOOR"],
  "Pet": ["PET CARE", "PET PLAY", "PET PLACE"],
  "Bem-estar Extra": ["ZEN", "HORTA", "POMAR", "BEAUTY", "ESPAÇO ZEN", "HORTA/POMAR", "ESPAÇO BEAUTY"]
};

const bedroomMapping = {
  "ST/1Q": ["ST E 1Q"],
  "1-2Q": ["1Q E 2Q"],
  "2Q": ["2Q"],
  "2-3Q": ["2Q E 3Q"],
  "3Q": ["3Q"],
  "3-4Q": ["3Q E 4Q"]
};

// Helper Functions
function getAmenityCategory(amenity) {
  for (const [category, items] of Object.entries(amenityCategories)) {
    if (items.some(item => amenity.toUpperCase().includes(item.toUpperCase()) || item.toUpperCase().includes(amenity.toUpperCase()))) {
      return category;
    }
  }
  return "Outros";
}

function normalizeBedroomType(bedrooms) {
  for (const [key, values] of Object.entries(bedroomMapping)) {
    if (values.includes(bedrooms)) return key;
  }
  return bedrooms;
}

function normalizeAudience(audience) {
  if (audience.includes("FAMÍLIA")) return "FAMÍLIA";
  if (audience.includes("INVESTIDORES")) return "INVESTIDORES";
  if (audience.includes("SOLTEIRO")) return "SOLTEIRO";
  return audience;
}

function filterDevelopments(bedroomFilter, audienceFilter, categoryFilter) {
  return developments.filter(dev => {
    let matches = true;
    
    if (bedroomFilter !== 'all') {
      const normalized = normalizeBedroomType(dev.bedrooms);
      matches = matches && normalized === bedroomFilter;
    }
    
    if (audienceFilter !== 'all') {
      const normalized = normalizeAudience(dev.audience);
      matches = matches && normalized === audienceFilter;
    }
    
    if (categoryFilter !== 'all') {
      const hasCategory = dev.items.some(item => getAmenityCategory(item) === categoryFilter);
      matches = matches && hasCategory;
    }
    
    return matches;
  });
}

// Chart Colors
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

let charts = {};

// Initialize Charts
function initializeCharts() {
  createYearChart();
  createTopAmenitiesChart();
  createCategoryDistributionChart();
  createBedroomAmenitiesChart();
  createAudiencePreferencesChart();
}

function createYearChart() {
  const ctx = document.getElementById('yearChart');
  const yearData = {};
  
  developments.forEach(dev => {
    yearData[dev.year] = (yearData[dev.year] || 0) + 1;
  });
  
  const years = Object.keys(yearData).sort();
  const counts = years.map(year => yearData[year]);
  
  if (charts.yearChart) charts.yearChart.destroy();
  
  charts.yearChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [{
        label: 'Empreendimentos',
        data: counts,
        backgroundColor: chartColors[0],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

function createTopAmenitiesChart() {
  const ctx = document.getElementById('topAmenitiesChart');
  const amenityCounts = {};
  
  developments.forEach(dev => {
    dev.items.forEach(item => {
      const key = item.toUpperCase();
      if (key.includes('PLAYGROUND') || key.includes('PARQUINHO')) {
        amenityCounts['PLAYGROUND'] = (amenityCounts['PLAYGROUND'] || 0) + 1;
      } else if (key.includes('SALÃO DE FESTAS')) {
        amenityCounts['SALÃO DE FESTAS'] = (amenityCounts['SALÃO DE FESTAS'] || 0) + 1;
      } else if (key.includes('BICICLETÁRIO')) {
        amenityCounts['BICICLETÁRIO'] = (amenityCounts['BICICLETÁRIO'] || 0) + 1;
      } else if (key.includes('DELIVERY') || key.includes('GUARDA-COMPRAS')) {
        amenityCounts['DELIVERY/GUARDA-COMPRAS'] = (amenityCounts['DELIVERY/GUARDA-COMPRAS'] || 0) + 1;
      } else if (key.includes('ACADEMIA') || key.includes('FITNESS')) {
        amenityCounts['ACADEMIA/FITNESS'] = (amenityCounts['ACADEMIA/FITNESS'] || 0) + 1;
      } else if (key.includes('PISCINA')) {
        amenityCounts['PISCINA'] = (amenityCounts['PISCINA'] || 0) + 1;
      } else if (key.includes('BRINQUEDOTECA')) {
        amenityCounts['BRINQUEDOTECA'] = (amenityCounts['BRINQUEDOTECA'] || 0) + 1;
      } else if (key.includes('COWORKING')) {
        amenityCounts['COWORKING'] = (amenityCounts['COWORKING'] || 0) + 1;
      } else if (key.includes('CHURRASQUEIRA') || key.includes('GRILL')) {
        amenityCounts['CHURRASQUEIRA/GRILL'] = (amenityCounts['CHURRASQUEIRA/GRILL'] || 0) + 1;
      } else if (key.includes('QUADRA')) {
        amenityCounts['QUADRA'] = (amenityCounts['QUADRA'] || 0) + 1;
      }
    });
  });
  
  const sorted = Object.entries(amenityCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const labels = sorted.map(item => item[0]);
  const data = sorted.map(item => item[1]);
  
  if (charts.topAmenitiesChart) charts.topAmenitiesChart.destroy();
  
  charts.topAmenitiesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Frequência',
        data: data,
        backgroundColor: chartColors[1],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

function createCategoryDistributionChart(filteredDevs = developments) {
  const ctx = document.getElementById('categoryDistributionChart');
  const categoryCounts = {};
  
  filteredDevs.forEach(dev => {
    dev.items.forEach(item => {
      const category = getAmenityCategory(item);
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
  });
  
  const sorted = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
  const labels = sorted.map(item => item[0]);
  const data = sorted.map(item => item[1]);
  
  if (charts.categoryDistributionChart) charts.categoryDistributionChart.destroy();
  
  charts.categoryDistributionChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: chartColors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  });
}

function createBedroomAmenitiesChart(filteredDevs = developments) {
  const ctx = document.getElementById('bedroomAmenitiesChart');
  const bedroomData = {};
  
  filteredDevs.forEach(dev => {
    const normalized = normalizeBedroomType(dev.bedrooms);
    if (!bedroomData[normalized]) {
      bedroomData[normalized] = { count: 0, total: 0 };
    }
    bedroomData[normalized].count++;
    bedroomData[normalized].total += dev.count;
  });
  
  const labels = Object.keys(bedroomData).sort();
  const avgData = labels.map(key => (bedroomData[key].total / bedroomData[key].count).toFixed(1));
  
  if (charts.bedroomAmenitiesChart) charts.bedroomAmenitiesChart.destroy();
  
  charts.bedroomAmenitiesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Média de Itens de Lazer',
        data: avgData,
        backgroundColor: chartColors[2],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function createAudiencePreferencesChart(filteredDevs = developments) {
  const ctx = document.getElementById('audiencePreferencesChart');
  const audienceData = {};
  
  filteredDevs.forEach(dev => {
    const normalized = normalizeAudience(dev.audience);
    if (!audienceData[normalized]) {
      audienceData[normalized] = { count: 0, total: 0 };
    }
    audienceData[normalized].count++;
    audienceData[normalized].total += dev.count;
  });
  
  const labels = Object.keys(audienceData);
  const avgData = labels.map(key => (audienceData[key].total / audienceData[key].count).toFixed(1));
  const countData = labels.map(key => audienceData[key].count);
  
  if (charts.audiencePreferencesChart) charts.audiencePreferencesChart.destroy();
  
  charts.audiencePreferencesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Média de Itens',
          data: avgData,
          backgroundColor: chartColors[4],
          borderRadius: 6,
          yAxisID: 'y'
        },
        {
          label: 'Quantidade de Empreendimentos',
          data: countData,
          backgroundColor: chartColors[5],
          borderRadius: 6,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true }
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          beginAtZero: true,
          title: { display: true, text: 'Média de Itens' }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          beginAtZero: true,
          grid: { drawOnChartArea: false },
          title: { display: true, text: 'Qtd. Empreendimentos' }
        }
      }
    }
  });
}

// Update filtered stats
function updateFilteredStats(filteredDevs) {
  const totalItems = filteredDevs.reduce((sum, dev) => sum + dev.count, 0);
  const avgItems = filteredDevs.length > 0 ? (totalItems / filteredDevs.length).toFixed(1) : 0;
  
  document.getElementById('matchingDevelopments').textContent = filteredDevs.length;
  document.getElementById('matchingItems').textContent = totalItems;
  document.getElementById('matchingAvg').textContent = avgItems;
}

// Apply filters
function applyFilters() {
  const bedroomFilter = document.getElementById('bedroomFilter').value;
  const audienceFilter = document.getElementById('audienceFilter').value;
  const categoryFilter = document.getElementById('categoryFilter').value;
  
  const filtered = filterDevelopments(bedroomFilter, audienceFilter, categoryFilter);
  
  createCategoryDistributionChart(filtered);
  createBedroomAmenitiesChart(filtered);
  createAudiencePreferencesChart(filtered);
  updateFilteredStats(filtered);
  updateTable(filtered);
}

// Initialize table
function initializeTable(filteredDevs = developments) {
  updateTable(filteredDevs);
}

function updateTable(filteredDevs) {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  
  filteredDevs.forEach(dev => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${dev.name}</strong></td>
      <td>${dev.year}</td>
      <td>${dev.bedrooms}</td>
      <td>${dev.audience}</td>
      <td><span style="font-size: 11px;">${dev.status}</span></td>
      <td><strong>${dev.count}</strong></td>
      <td><button class="table-action-btn" onclick="showAmenities('${dev.name}')">Ver Itens</button></td>
    `;
    tbody.appendChild(row);
  });
}

// Show amenities modal
function showAmenities(devName) {
  const dev = developments.find(d => d.name === devName);
  const modal = document.getElementById('amenitiesModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  modalTitle.textContent = `Itens de Lazer - ${dev.name}`;
  
  const categorizedItems = {};
  dev.items.forEach(item => {
    const category = getAmenityCategory(item);
    if (!categorizedItems[category]) categorizedItems[category] = [];
    categorizedItems[category].push(item);
  });
  
  let html = '';
  Object.entries(categorizedItems).forEach(([category, items]) => {
    html += `<h4 style="margin-top: 20px; color: var(--color-primary);">${category}</h4>`;
    html += '<div class="modal-amenities-grid">';
    items.forEach(item => {
      html += `<div class="amenity-tag">${item}</div>`;
    });
    html += '</div>';
  });
  
  modalBody.innerHTML = html;
  modal.classList.add('active');
}

// Initialize comparison dropdowns
function initializeComparison() {
  const selects = ['compare1', 'compare2', 'compare3'];
  
  selects.forEach(selectId => {
    const select = document.getElementById(selectId);
    select.innerHTML = '<option value="">Selecione...</option>';
    developments.forEach(dev => {
      const option = document.createElement('option');
      option.value = dev.name;
      option.textContent = dev.name;
      select.appendChild(option);
    });
  });
  
  selects.forEach(selectId => {
    document.getElementById(selectId).addEventListener('change', updateComparison);
  });
}

function updateComparison() {
  const dev1Name = document.getElementById('compare1').value;
  const dev2Name = document.getElementById('compare2').value;
  const dev3Name = document.getElementById('compare3').value;
  
  const selectedDevs = [dev1Name, dev2Name, dev3Name]
    .filter(name => name)
    .map(name => developments.find(d => d.name === name));
  
  const resultsDiv = document.getElementById('comparisonResults');
  
  if (selectedDevs.length === 0) {
    resultsDiv.innerHTML = '<p style="color: var(--color-text-secondary);">Selecione empreendimentos para comparar</p>';
    return;
  }
  
  let html = '<div class="comparison-grid">';
  
  selectedDevs.forEach(dev => {
    html += `
      <div class="comparison-card">
        <h4>${dev.name}</h4>
        <div class="detail"><strong>Ano:</strong> ${dev.year}</div>
        <div class="detail"><strong>Quartos:</strong> ${dev.bedrooms}</div>
        <div class="detail"><strong>Público:</strong> ${dev.audience}</div>
        <div class="detail"><strong>Status:</strong> ${dev.status}</div>
        <div class="detail"><strong>Itens de Lazer:</strong> ${dev.count}</div>
        <div class="amenity-list">
          ${dev.items.map(item => `<span class="amenity-item">${item}</span>`).join('')}
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  resultsDiv.innerHTML = html;
}

// Initialize development tabs
function initializeDevelopmentTabs() {
  const tabsHeader = document.getElementById('developmentTabs');
  const tabsContent = document.getElementById('developmentContent');
  
  tabsHeader.innerHTML = '';
  tabsContent.innerHTML = '';
  
  developments.forEach((dev, index) => {
    const tabButton = document.createElement('button');
    tabButton.className = 'tab-button' + (index === 0 ? ' active' : '');
    tabButton.textContent = dev.name;
    tabButton.setAttribute('data-tab', `dev-${index}`);
    tabsHeader.appendChild(tabButton);
    
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content' + (index === 0 ? ' active' : '');
    tabContent.id = `dev-${index}`;
    
    const categorizedItems = {};
    dev.items.forEach(item => {
      const category = getAmenityCategory(item);
      if (!categorizedItems[category]) categorizedItems[category] = [];
      categorizedItems[category].push(item);
    });
    
    let contentHtml = `
      <div class="development-detail">
        <div class="development-header">
          <div class="detail-item">
            <span class="detail-label">Ano</span>
            <span class="detail-value">${dev.year}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Quartos</span>
            <span class="detail-value">${dev.bedrooms}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Público Alvo</span>
            <span class="detail-value">${dev.audience}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Status</span>
            <span class="detail-value">${dev.status}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">Total de Itens</span>
            <span class="detail-value">${dev.count}</span>
          </div>
        </div>
    `;
    
    Object.entries(categorizedItems).forEach(([category, items]) => {
      contentHtml += `<h4 style="margin-top: 20px; margin-bottom: 12px; color: var(--color-primary);">${category}</h4>`;
      contentHtml += '<div class="amenities-list">';
      items.forEach(item => {
        contentHtml += `<div class="amenity-tag">${item}</div>`;
      });
      contentHtml += '</div>';
    });
    
    contentHtml += '</div>';
    tabContent.innerHTML = contentHtml;
    tabsContent.appendChild(tabContent);
  });
  
  tabsHeader.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      tabsHeader.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      tabsContent.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

// Export table to CSV
function exportToCSV() {
  const bedroomFilter = document.getElementById('bedroomFilter').value;
  const audienceFilter = document.getElementById('audienceFilter').value;
  const categoryFilter = document.getElementById('categoryFilter').value;
  
  const filtered = filterDevelopments(bedroomFilter, audienceFilter, categoryFilter);
  
  let csv = 'Empreendimento,Ano,Quartos,Público Alvo,Status,Qtd. Itens,Itens de Lazer\n';
  
  filtered.forEach(dev => {
    const items = dev.items.join('; ');
    csv += `"${dev.name}",${dev.year},"${dev.bedrooms}","${dev.audience}","${dev.status}",${dev.count},"${items}"\n`;
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'analise_lazer_empreendimentos.csv');
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeCharts();
  initializeTable();
  initializeComparison();
  initializeDevelopmentTabs();
  updateFilteredStats(developments);
  
  // Event listeners for filters
  document.getElementById('bedroomFilter').addEventListener('change', applyFilters);
  document.getElementById('audienceFilter').addEventListener('change', applyFilters);
  document.getElementById('categoryFilter').addEventListener('change', applyFilters);
  
  document.getElementById('resetFilters').addEventListener('click', () => {
    document.getElementById('bedroomFilter').value = 'all';
    document.getElementById('audienceFilter').value = 'all';
    document.getElementById('categoryFilter').value = 'all';
    applyFilters();
  });
  
  document.getElementById('exportTable').addEventListener('click', exportToCSV);
  
  // Modal close
  const modal = document.getElementById('amenitiesModal');
  const closeBtn = document.querySelector('.modal-close');
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// Make showAmenities globally accessible
window.showAmenities = showAmenities;
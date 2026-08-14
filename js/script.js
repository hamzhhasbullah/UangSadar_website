document.addEventListener('DOMContentLoaded', () => {
  // Mengisi elemen tahun di footer secara otomatis
  const tahunEl = document.getElementById('tahun');
  if (tahunEl) {
    tahunEl.textContent = new Date().getFullYear();
  }
});
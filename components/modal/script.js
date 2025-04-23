function openModal() {
    document.getElementById('modal').style.display = 'flex';
  }
  
  function closeModal(e) {
    if (e.target.id === 'modal') {
      document.getElementById('modal').style.display = 'none';
    }
  }
  
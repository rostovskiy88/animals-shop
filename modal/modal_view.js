export default class ModalView {
  cardsContainer = document.querySelector('.cards');

  displayProductDetails(productDetails) {
    const modalHTML = this.renderModal(productDetails);
    this.cardsContainer.insertAdjacentHTML('beforeend', modalHTML);
  }

  renderModal = (info) => {
    if (info.category === 'собака') {
      return `<div id="a${info.id}" class="modal" style="display: block;">
            <div class="modal-backdrop">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${info.breed}</h5>
                            <span class="close" onclick="document.getElementById('a${info.id}').style.display='none';">&times;</span>
                        </div>
                        <div class="modal-body">
                            <p class="birth-date">Дата рождения: ${info.birthDate}</p>
                            <p class="birth-date">Тип: ${info.type}</p>
                            <p>${info.description}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>`;
    } else if (info.category === 'кот') {
      return `<div id="a${info.id}" class="modal" style="display: block;">
            <div class="modal-backdrop">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${info.breed}</h5>
                            <span class="close" onclick="document.getElementById('a${info.id}').style.display='none';">&times;</span>
                        </div>
                        <div class="modal-body">
                            <p class="birth-date">Дата рождения: ${info.birthDate}</p>
                            <p class="birth-date">Игривость: ${info.madness} <i class="fas fa-star text-warning"></i></p>
                            <p>${info.description}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>`;
    } else {
        return `<div id="a${info.id}" class="modal" style="display: block;">
            <div class="modal-backdrop">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${info.breed}</h5>
                            <span class="close" onclick="document.getElementById('a${info.id}').style.display='none';">&times;</span>
                        </div>
                        <div class="modal-body">
                            <p class="birth-date">Дата рождения: ${info.birthDate}</p>
                            <p>${info.description}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>`;
    }
  };
}

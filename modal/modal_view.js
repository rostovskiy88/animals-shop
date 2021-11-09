export default class ModalView {
    cardsContainer = document.querySelector('.cards');
    
    displayProductDetails(productDetails) {
        const modalHTML = this.renderModal(productDetails);
        this.cardsContainer.insertAdjacentHTML('beforeend', modalHTML);
    }

    renderModal = (info) => {
        return `
        <div id="a${info.id}" class="modal" style="display: block;">
        <div class="modal-backdrop">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close" onclick="document.getElementById('a${info.id}').style.display='none';">&times;</span>
                        <h5 class="modal-title">${info.breed}</h5>
                    </div>
                    <div class="modal-body">
                        <p class="birth-date">Дата рождения: ${info.birthDate}</p>
                        <p>${info.description}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark">
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div> 
            </div>
        </div>
    </div>`
    }
}
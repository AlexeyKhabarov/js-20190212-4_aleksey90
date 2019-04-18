(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
     *
     * Пример одного элемента, описывающего строку таблицы
     *
     *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
     *
     * @constructor
     */
    class ClearedTable {

        constructor(data) {
            this.el = document.createElement('table');
            this.data = data;

            const tHead = this.el.createTHead();
            const tBody = this.el.createTBody();

            const rowHead = tHead.insertRow();

            for (let key in this.data[0]) {
                let th = rowHead.insertCell();
                th.innerText = key[0].toUpperCase() + key.slice(1);
            }
            let th = rowHead.insertCell();
            th.innerText = '';

            for (let i = 0; i < this.data.length; i++) {
                const rowBody = tBody.insertRow();
                for (let key in this.data[i]) {
                    let td = rowBody.insertCell();
                    td.innerText = this.data[i][key];
                }
                let td = rowBody.insertCell();
                let link = document.createElement('a');
                link.setAttribute('href', 'link');
                rowBody.setAttribute('data-id', data[i].id);
                link.innerText = ' X ';
                link.style.cssText = `color:blue; text-decoration: underline`;
                td.appendChild(link);

            }

            this.el.addEventListener('click', e => {
                if ( e.target.getAttribute('href') === 'link' ){
                  this.onRemoved(+e.target.closest('tr').getAttribute('data-id'));
                  e.target.closest('tr').remove();
                  e.preventDefault();
                }
              });
        }

        /**
         * Метод который выщывается после удалении строки
         * @param {number} id - идентификатор удаляемого пользователя
         */
        onRemoved(id) {
            console.log(`delete user ${id}`);
        }
    }

    window.ClearedTable = ClearedTable;
})();

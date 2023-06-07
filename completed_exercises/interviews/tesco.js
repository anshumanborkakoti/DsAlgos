import { sampleData } from "./data.js";
export const debounce = (fn) => {
    let timer = null;
    return function () {
        const args = Array.from(arguments);
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(fn, args), 300);
    }
}

export default class AUTOCOMPLETE {

    constructor({ containerSelector, classNames }) {
        this.containerSelector = containerSelector;
        this.classNames = classNames;
    }

    removeList(element) {
        const childNodes = element.childNodes;
        //console.log("childnodes",childNodes)
        for (let node of childNodes) {
            //console.log("nodename",node.nodeName)
            if (node.nodeName === 'OL') {
                element.removeChild(node);
            }
        }
    }

    autoComplete(e) {
        const value = e.target.value;
        const currentEl = e.target;
        //console.log(sampleData
        this.removeList(currentEl.parentNode);
        ///currentEl.parentNode.removeChild(currentEl.parentNode.lastChild);
        const filteredData = sampleData.filter(d => {
            const regex = new RegExp(value, "ig");
            return d.search(regex) !== -1
        });
        //console.log(filteredData)
        const list = document.createElement('ol');
        filteredData.forEach(data => {
            const listitem = document.createElement('li');
            listitem.textContent = data;
            list.appendChild(listitem);
            //console.log(list)
        });
        currentEl.parentNode.appendChild(list);
    }

    create() {
        const self = this;
        //console.log(this.containerSelector)
        const container = document.querySelector(this.containerSelector);
        //console.log(container)
        const input = document.createElement('input');
        input.setAttribute("class", this.classNames)
        input.addEventListener("input", debounce(this.autoComplete.bind(self)));
        container.appendChild(input);


    }
}
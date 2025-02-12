import { makeAutoObservable } from "mobx"

export default class PurchaseStore {
    constructor() {
        this._purchases = [
            {id: 1, purchaser: 'ГЭТ', item: 'Монтаж оборудования', number: '123574827', price: 250000000, law: '44-ФЗ', link: 'https://zakupki.gov.ru', method: 'Открытый конкурс', expire_date: '25.02.2025 12:00', platform: 'РАД', apllication_securing: 250.25, contract_securing: 365.45, contact: 'Петя Пупкин'},
            {id: 2, purchaser: 'ГЭТ', item: 'Монтаж оборудования', number: '123574827', price: 250000000, law: '44-ФЗ', link: 'https://zakupki.gov.ru', method: 'Открытый конкурс', expire_date: '25.02.2025 12:00', platform: 'РАД', apllication_securing: 250.25, contract_securing: 365.45, contact: 'Петя Пупкин'},
            {id: 3, purchaser: 'ГЭТ', item: 'Монтаж оборудования', number: '123574827', price: 250000000, law: '44-ФЗ', link: 'https://zakupki.gov.ru', method: 'Открытый конкурс', expire_date: '25.02.2025 12:00', platform: 'РАД', apllication_securing: 250.25, contract_securing: 365.45, contact: 'Петя Пупкин'},
            {id: 4, purchaser: 'ГЭТ', item: 'Монтаж оборудования', number: '123574827', price: 250000000, law: '44-ФЗ', link: 'https://zakupki.gov.ru', method: 'Открытый конкурс', expire_date: '25.02.2025 12:00', platform: 'РАД', apllication_securing: 250.25, contract_securing: 365.45, contact: 'Петя Пупкин'},
            {id: 5, purchaser: 'ГЭТ', item: 'Монтаж оборудования', number: '123574827', price: 250000000, law: '44-ФЗ', link: 'https://zakupki.gov.ru', method: 'Открытый конкурс', expire_date: '25.02.2025 12:00', platform: 'РАД', apllication_securing: 250.25, contract_securing: 365.45, contact: 'Петя Пупкин'},
        ]
        makeAutoObservable(this);
    }

    setPurchases(bool) {
        this._purchases = bool;
    }

    get purchases() {
        return this._purchases;
    }
}
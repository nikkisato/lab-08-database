import Component from '../Component.js';
import Header from '../common/Header.js';
import CitiesList from './citiesList.js';
import { getCities } from '../services/domain-api.js';

class CityListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'List of City' });
        dom.prepend(header.renderDOM());

        const list = new CitiesList({ cities: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        getCities().then(city => {
            list.update({ cities: city });
        });
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                <main></main>
            </div>
        `;
    }
}

export default CityListApp;
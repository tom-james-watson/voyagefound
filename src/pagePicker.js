import _  from 'lodash';

class PagePicker {
  loadAncestorData = () => {
    return fetch('/ancestors.json')
      .then( (response) => response.json() )
      .then( (json) => {
        console.log('loaded json');
        this.ancestorData = json
      });
  }

  randomPage = () => {
    return _.sample(this.filtered);
  }

  updateFilters = (excluded, included) => {
    console.log('Exclude:', excluded);
    console.log('Include:', included);
    this.filtered = [];
    _.each(this.ancestorData, (ancestors, page) => {
      let ancestors_plus_page = [page].concat(ancestors || []);
      if (included.length && !_.intersection(included, ancestors_plus_page).length) return;
      if (excluded.length && _.intersection(excluded, ancestors_plus_page).length) return;
      this.filtered.push(ancestors_plus_page);
    });
    console.log('filtered=', this.filtered);
  }
}

export default PagePicker

import './two-column.scss';

function twoColumn() {
    return {
       template: require('./two-column.html'),
       restrict: 'E'
    };

}
export {
    twoColumn
};
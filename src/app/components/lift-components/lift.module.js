require('angular');

import { AllLifts } from './all-lifts/AllLifts';
import { AddLiftModal } from './add-lift-modal/AddLiftModal';
import { Lift } from './lift/Lift';

export default angular
    .module('liftModule', []) 
        .directive('allLifts', () => (
            {
                restrict: 'E',
                templateUrl: 'components/lift-components/all-lifts/all-lifts.html',
                controller: AllLifts,
                controllerAs: 'allLiftsCtrl',
                scope: {},
                bindToController: true
            }
        ))
        .directive('addLift', () => (
            {
                restrict: 'E',
                templateUrl: 'components/lift-components/add-lift/add-lift.html'
            }
        ))
        .directive('addLiftModal', () => (
            {
                restrict: 'E',
                templateUrl: 'components/lift-components/add-lift-modal/add-lift-modal.html',
                controller: AddLiftModal,
                controllerAs: 'addLiftCtrl',
                scope: {},
                bindToController: true
            }
        ))
        .directive('lift', () => (
            {
                restrict: 'E',
                templateUrl: 'components/lift-components/lift/lift.html',
                controller: Lift,
                controllerAs: 'liftCtrl',
                scope: {},
                bindToController: {
                    liftModel: '='
                }
            }
        ))
    .name;
import { service } from '@ember-decorators/service';
import Route from '@ember/routing/route';

export default class FileDetail extends Route.extend() {
    @service currentUser;
    @service analytics;
    @service router;
    actions = {
        didTransition(this: FileDetail) {
            const page = this.get('router').currentUrl;
            const title = this.get('routeName');
            const publicPrivate = 'public';
            const resourceType = 'files';
            this.get('analytics').trackPage(page, title, publicPrivate, resourceType);
        },
    };

    async model(this: FileDetail, params) {
        try {
            const file = await this.store.findRecord('file', params.file_guid);
            const fileUser = await file.get('user');
            const user = await fileUser.reload();

            return {
                file,
                user,
            };
        } catch (error) {
            this.transitionTo('not-found', params.file_guid);
            throw error;
        }
    }

    resetController(controller, isExiting, transition) {
        if (isExiting && transition.targetName !== 'error') {
            controller.set('revision', null);
        }
    }
}

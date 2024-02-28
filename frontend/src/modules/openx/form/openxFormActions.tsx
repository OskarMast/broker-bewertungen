import OpenxService from 'src/modules/openx/openxService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'OPENX_FORM';

const openxFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: openxFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await OpenxService.find(id);
      }

      dispatch({
        type: openxFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: openxFormActions.INIT_ERROR,
      });

      getHistory().push('/admin/open-x');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: openxFormActions.CREATE_STARTED,
      });

      await OpenxService.create(values);

      dispatch({
        type: openxFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.openx.create.success'),
      );

      getHistory().push('/admin/open-x');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: openxFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: openxFormActions.UPDATE_STARTED,
      });

      await OpenxService.update(id, values);

      dispatch({
        type: openxFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.openx.update.success'),
      );

      getHistory().push('/admin/open-x');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: openxFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default openxFormActions;

import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import ExpertAdvisorTestService from '../../services/expertAdvisorTestService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.expertAdvisorTestEdit,
    );

    const payload = await new ExpertAdvisorTestService(
      req,
    ).update(req.params.id, req.body.data);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};

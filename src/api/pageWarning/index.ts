export default (app) => {
  app.post(
    `/tenant/:tenantId/page-warning`,
    require('./pageWarningCreate').default,
  );
  app.put(
    `/tenant/:tenantId/page-warning/:id`,
    require('./pageWarningUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/page-warning/import`,
    require('./pageWarningImport').default,
  );
  app.delete(
    `/tenant/:tenantId/page-warning`,
    require('./pageWarningDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/page-warning/autocomplete`,
    require('./pageWarningAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/page-warning`,
    require('./pageWarningList').default,
  );
  app.get(
    `/tenant/:tenantId/page-warning/:id`,
    require('./pageWarningFind').default,
  );
};
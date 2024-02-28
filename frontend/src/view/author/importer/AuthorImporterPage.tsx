import { Card } from '@mui/material';
import { i18n } from 'src/i18n';
import actions from 'src/modules/author/importer/authorImporterActions';
import fields from 'src/modules/author/importer/authorImporterFields';
import selectors from 'src/modules/author/importer/authorImporterSelectors';
import MDBox from 'src/mui/components/MDBox';
import MDTypography from 'src/mui/components/MDTypography';
import importerHoc from 'src/view/shared/importer/Importer';

function AuthorImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.author.importer.hint'),
  );

  return (
    <>
      <Card>
        <MDBox px={3} pt={3}>
          <MDBox
            pb={3}
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <MDTypography variant="h3">
              {i18n('entities.author.importer.title')}
            </MDTypography>
          </MDBox>
        </MDBox>
        <Importer />
      </Card>
    </>
  );
}

export default AuthorImportPage;

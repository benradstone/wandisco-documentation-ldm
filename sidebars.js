module.exports = {
  someSidebar: {
    Documentation: [
      'about',
      {
        "Installation": [
          'prereqs',
          'installation',
          'configuration'
          ],
      },
      {
        "Using LiveData Migrator (UI)": [
          'operation-ui',
          'how-ui-works',
          'configure-storage-ui',
          'configure-exclusions-ui',
          'migrate-data-ui',
          'manage-migrations-ui',
          'manage-bandwidth-ui'
          ],
      },
      {
        "Using LiveData Migrator (CLI)": [
          'operation-cli',
          'configure-storage-cli',
          'configure-exclusions-cli',
          'migrate-data-cli',
          'manage-migrations-cli',
          'connect-to-metastores',
          'define-metadata-rules',
          'migrate-metadata',
          'license-bandwidth'
          ],
      },
      {
        "Common Use Cases": [
          'uc-on-prem-hadoop-hdi'
          ],
      },
      'command-reference',
      {
        "Alternatives to the UI or CLI": [
          'jar',
          'api-reference'
          ],
      },
    ],
  },
};

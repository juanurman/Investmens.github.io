const LicenceService = require('../services/licenceService');

module.exports = {
  infoView: async (req, res) => {
    const licences = await LicenceService.getAllItemsLicences();
    res.render('Pages/acciones/info', {
      acciones: licences.data
    });
  },
};
(function($) {

  window.addEventListener('DOMContentLoaded', function() {

    var ukUniversitySelect = $('select#custom_25');
    var professionalSectorSelect = $('select#custom_27');
    var instituteField = $('div#editrow-custom_6');
    var instituteFieldHelp = $('div#helprow-custom_6');
    var ukUniversityField = $('div#editrow-custom_25');
    var ukUniversityFieldHelp = $('div#helprow-custom_25');
    var professionalSectorField = $('div#editrow-custom_27');
    var professionalSectorFieldHelp = $('div#helprow-custom_27');
    var professionalSectorOtherField = $('div#editrow-custom_28');

    // status radio selector
    $('input[name="custom_2"]').on('change', function() {
      statusShowHideFields();
    });

    // uk university drop-down
    ukUniversitySelect.on('change', function() {
      ukUniversityShowHideFields();
    });
    // professional sector drop-down
    professionalSectorSelect.on('change', function() {
      professionalSectorShowHideFields();
    });

    function statusShowHideFields() {
      var checkedInputID = $('input[name="custom_2"]:checked').attr('id');
      switch (checkedInputID) {
        case 'CIVICRM_QFID_Student_custom_2':
        case 'CIVICRM_QFID_Academic_custom_2':
          // show uk university drop-down
          ukUniversityField.show();
          ukUniversityFieldHelp.show();
          hideProfessionalSectorField();
          break;

        case 'CIVICRM_QFID_Professional_custom_2':
        case 'CIVICRM_QFID_Retired_Professional_custom_2':
          // show the professional sector drop-down
          professionalSectorField.show();
          professionalSectorFieldHelp.show();
          hideUkUniversityField();
          break;

        case 'CIVICRM_QFID_Retired_Academic_custom_2':
          // show nothing
        case 'CIVICRM_QFID_Other_custom_2':
          // show nothing
        default:
          // show nothing
          hideUkUniversityField();
          hideProfessionalSectorField();
      }
    }

    function ukUniversityShowHideFields() {
      var selectedVal = ukUniversitySelect.find(':selected').val();

      switch (selectedVal) {
        case 'Other':
          // show the institute field
          instituteField.show();
          instituteFieldHelp.show();
          break;

        default:
          // hide the institute field
          instituteField.hide();
          instituteFieldHelp.hide();
      }
    }

    function professionalSectorShowHideFields() {
      var selectedVal = professionalSectorSelect.find(':selected').val();
      switch (selectedVal) {
        case 'Other Professional Sector':
          professionalSectorOtherField.show();
          break;

        default:
          professionalSectorOtherField.hide();
      }
    }

    function hideUkUniversityField() {
      ukUniversitySelect.select2().val('').trigger('change');
      ukUniversityField.hide();
      ukUniversityFieldHelp.hide();
      instituteField.val('').hide();
      instituteFieldHelp.hide();
    }

    function hideProfessionalSectorField() {
      professionalSectorSelect.select2().val('').trigger('change');
      professionalSectorField.hide();
      professionalSectorFieldHelp.hide();
      professionalSectorOtherField.val('').hide();
    }

    statusShowHideFields();
    ukUniversityShowHideFields();
    professionalSectorShowHideFields();
  });

})(CRM.$);

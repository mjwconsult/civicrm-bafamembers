(function($) {

  window.addEventListener('DOMContentLoaded', function() {

    // status radio selector
    $('input[name="custom_2"]').on('change', function() {
      statusShowHideFields();
    });

    // uk university drop-down
    $('select#custom_25').on('change', function() {
      ukUniversityShowHideFields();
    });
    // professional sector drop-down
    $('select#custom_27').on('change', function() {
      professionalSectorShowHideFields();
    });

    function statusShowHideFields() {
      var checkedInputID = $('input[name="custom_2"]:checked').attr('id');
      var instituteField = $('div#editrow-custom_6');
      var instituteFieldHelp = $('div#helprow-custom_6');
      var ukUniversityField = $('div#editrow-custom_25');
      var professionalSectorField = $('div#editrow-custom_27');
      switch (checkedInputID) {
        case 'CIVICRM_QFID_Student_custom_2':
        case 'CIVICRM_QFID_Academic_custom_2':
          // show uk university drop-down
          ukUniversityField.show();
          professionalSectorField.hide();
          break;

        case 'CIVICRM_QFID_Professional_custom_2':
        case 'CIVICRM_QFID_Retired_Professional_custom_2':
          // show the professional sector drop-down
          professionalSectorField.show();
          break;

        case 'CIVICRM_QFID_Retired_Academic_custom_2':
          // show nothing
          ukUniversityField.hide();
          instituteField.hide();
          instituteFieldHelp.hide();
          professionalSectorField.hide();
          break;

        case 'CIVICRM_QFID_Other_custom_2':
          // show nothing
        default:
          // show nothing
          ukUniversityField.hide();
          instituteField.hide();
          instituteFieldHelp.hide();
          professionalSectorField.hide();
      }
    }

    function ukUniversityShowHideFields() {
      var ukUniversityField = $('div#editrow-custom_25');
      var instituteField = $('div#editrow-custom_6');
      var instituteFieldHelp = $('div#helprow-custom_6');
      var selectedVal = $('select#custom_25').find(':selected').val();

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
      var sectorOtherField = $('div#editrow-custom_28');
      var selectedVal = $('select#custom_27').find(':selected').val();
      switch (selectedVal) {
        case 'Other Professional Sector':
          sectorOtherField.show();
          break;

        default:
          sectorOtherField.hide();
      }
    }

    statusShowHideFields();
    ukUniversityShowHideFields();
    professionalSectorShowHideFields();
  });

})(CRM.$);

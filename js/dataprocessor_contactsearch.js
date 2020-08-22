(function($) {

  window.addEventListener('DOMContentLoaded', function() {

    // Put the group from the search groupID field into the title of the page
    $('#gid_value').on('change', function () {
      $('.crm-container div.crm-title h1')
        .text($('div#s2id_gid_value li.select2-search-choice > div')
          .text()
          .trim());
    });
  });

})(CRM.$);

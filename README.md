# bafamembers

Customisations for the BAFA members CiviCRM site.

The extension is licensed under [AGPL-3.0](LICENSE.txt).

## Requirements

* PHP v7.2+
* CiviCRM 5.24+

## Functionality

* For non-admin users we filter the search actions to export and email/mailing (using `civicrm_searchTasks` hook).
* Set title on dataprocessor contact search to group ID (using `civicrm_buildForm` hook and dataprocessor_contactsearch.js).
* Show/Hide various fields on Membership join form (Contribution Page 1) (using `civicrm_buildForm` hook and contributionpage1.js).

<?php

require_once 'bafamembers.civix.php';
// phpcs:disable
use CRM_Bafamembers_ExtensionUtil as E;
// phpcs:enable

/**
 * Implements hook_civicrm_config().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_config/
 */
function bafamembers_civicrm_config(&$config) {
  _bafamembers_civix_civicrm_config($config);
}

/**
 * Implements hook_civicrm_xmlMenu().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_xmlMenu
 */
function bafamembers_civicrm_xmlMenu(&$files) {
  _bafamembers_civix_civicrm_xmlMenu($files);
}

/**
 * Implements hook_civicrm_install().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_install
 */
function bafamembers_civicrm_install() {
  _bafamembers_civix_civicrm_install();
}

/**
 * Implements hook_civicrm_postInstall().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_postInstall
 */
function bafamembers_civicrm_postInstall() {
  _bafamembers_civix_civicrm_postInstall();
}

/**
 * Implements hook_civicrm_uninstall().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_uninstall
 */
function bafamembers_civicrm_uninstall() {
  _bafamembers_civix_civicrm_uninstall();
}

/**
 * Implements hook_civicrm_enable().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_enable
 */
function bafamembers_civicrm_enable() {
  _bafamembers_civix_civicrm_enable();
}

/**
 * Implements hook_civicrm_disable().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_disable
 */
function bafamembers_civicrm_disable() {
  _bafamembers_civix_civicrm_disable();
}

/**
 * Implements hook_civicrm_upgrade().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_upgrade
 */
function bafamembers_civicrm_upgrade($op, CRM_Queue_Queue $queue = NULL) {
  return _bafamembers_civix_civicrm_upgrade($op, $queue);
}

/**
 * Implements hook_civicrm_managed().
 *
 * Generate a list of entities to create/deactivate/delete when this module
 * is installed, disabled, uninstalled.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_managed
 */
function bafamembers_civicrm_managed(&$entities) {
  _bafamembers_civix_civicrm_managed($entities);
}

/**
 * Implements hook_civicrm_caseTypes().
 *
 * Generate a list of case-types.
 *
 * Note: This hook only runs in CiviCRM 4.4+.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_caseTypes
 */
function bafamembers_civicrm_caseTypes(&$caseTypes) {
  _bafamembers_civix_civicrm_caseTypes($caseTypes);
}

/**
 * Implements hook_civicrm_angularModules().
 *
 * Generate a list of Angular modules.
 *
 * Note: This hook only runs in CiviCRM 4.5+. It may
 * use features only available in v4.6+.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_angularModules
 */
function bafamembers_civicrm_angularModules(&$angularModules) {
  _bafamembers_civix_civicrm_angularModules($angularModules);
}

/**
 * Implements hook_civicrm_alterSettingsFolders().
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_alterSettingsFolders
 */
function bafamembers_civicrm_alterSettingsFolders(&$metaDataFolders = NULL) {
  _bafamembers_civix_civicrm_alterSettingsFolders($metaDataFolders);
}

/**
 * Implements hook_civicrm_entityTypes().
 *
 * Declare entity types provided by this module.
 *
 * @link https://docs.civicrm.org/dev/en/latest/hooks/hook_civicrm_entityTypes
 */
function bafamembers_civicrm_entityTypes(&$entityTypes) {
  _bafamembers_civix_civicrm_entityTypes($entityTypes);
}

/**
 * Implements hook_civicrm_themes().
 */
function bafamembers_civicrm_themes(&$themes) {
  _bafamembers_civix_civicrm_themes($themes);
}

/**
 * @param string $objectType
 * @param array $tasks
 */
function bafamembers_civicrm_searchTasks($objectType, &$tasks) {
  // If we are not logged in as admin, restrict the list of actions for searches
  if (!CRM_Core_Permission::check('administer CiviCRM')) {
    $permittedTasks = [
      CRM_Contact_Task::TASK_EMAIL => 1,
      CRM_Contact_Task::CREATE_MAILING => 1,
      // CRM_Contact_Task::TASK_EXPORT => 1, Provided via "Download as CSV" link on dataprocessor search
      // CRM_Contact_TASK::LABEL_CONTACTS => 1,
    ];
    $tasks = array_intersect_key($tasks, $permittedTasks);
  }
}

/**
 * Intercept form functions
 * @param string $formName
 * @param CRM_Core_Form $form
 */
function bafamembers_civicrm_buildForm($formName, &$form) {
  switch ($formName) {
    case 'CRM_Contact_Form_DataProcessorContactSearch':
      \Civi::resources()->addScriptFile(E::LONG_NAME, 'js/dataprocessor_contactsearch.js');
  }
}

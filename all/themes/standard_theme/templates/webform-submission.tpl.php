<?php

/**
 * @file
 * Customize the display of a webform submission.
 *
 * Available variables:
 * - $node: The node object for this webform.
 * - $submission: The Webform submission array.
 * - $email: If sending this submission in an e-mail, the e-mail configuration
 *   options.
 * - $format: The format of the submission being printed, either "html" or
 *   "text".
 * - $renderable: The renderable submission array, used to print out individual
 *   parts of the submission, just like a $form array.
 */
?>
<?php
/**
 * Fill a new 'OhneDich' node with the data of the submitted webform and save it to the database.
 */
// create a new node
$md_node = new stdClass();
$md_node->type = 'mit_dir';
$md_node->language = LANGUAGE_NONE;
$md_node->uid = 1;
$md_node->status = (int)$node->field_publish_posts_immediately[LANGUAGE_NONE][0]['value'];
$md_node->comment = 0;
$md_node->promote = 0;
node_object_prepare($md_node);

// fill the node properties and save it to the database
$md_node->title = $submission->data[8]['value'][0] . " & " . $submission->data[10]['value'][0];
$md_node->field_picture[$md_node->language][0]['fid']         = $submission->data[3]['value'][0]; // fid
$md_node->field_person_links_name[$md_node->language][0]['value']= $submission->data[8]['value'][0]; // Name links
$md_node->field_person_links[$md_node->language][0]['value']  = $submission->data[4]['value'][0]; // Nationalität links
$md_node->field_person_rechts_name[$md_node->language][0]['value']= $submission->data[10]['value'][0]; // Name rechts
$md_node->field_person_rechts[$md_node->language][0]['value'] = $submission->data[5]['value'][0]; // Nationalität rechts
$md_node->field_quote[$md_node->language][0]['value']         = substr($submission->data[16]['value'][0], 0, 70); // Quote
$md_node = node_submit($md_node);
node_save($md_node);
?>

<?php print drupal_render_children($renderable); ?>

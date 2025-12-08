Feature: WebDriverUniversity.com - Contact Us Page

  Scenario: Valid Contact Us Form Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I switch the new browser tab
    And I type a first name
    And I type a last name
    And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

  Scenario: Invalid Contact Us Form Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I switch the new browser tab
    # And I type a first name
    # And I type a last name
    #And I enter an email address
    And I type a comment
    And I click on the submit button
    Then I should be presented with a unsuccessful contact us message

  Scenario: Specific Contact Us Form Submission
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I switch the new browser tab
    And I type a specific first name 'Sarah'
    And I type a specific last name 'Woods'
    And I enter a specific email address "sarah_woods@gmail.com"
    And I type a specific text 'Hello world' and number 2 within the comment input field
    And I click on the submit button
    Then I should be presented with a successful contact us submission message


  Scenario: Specific Contact Us Form Submission Using Faker.js
    Given I navigate to the webdriveruniversity homepage
    When I click on the contact us button
    And I switch the new browser tab
    And I type a random first name
    And I type a random last name
    And I enter a random email address
    And I type a specific text 'Hello world' and number 2 within the comment input field
    And I click on the submit button
    Then I should be presented with a successful contact us submission message

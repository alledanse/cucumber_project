# Feature: Webdriver university - Login Page

#     Scenario Outline: Validate valid & invalid login page
#         Given I navigate to the webdriveruniversity homepage
#         When I click one the login portal button
#         And I switch to the new browser tab
#         And I type the a username <username>
#         And I type the a password <password>
#         And I click on the login button
#         And I should be presented with an alert box which contains text '<expectedAlertText>'

#         Examples:
#             | username  | password     | expectedAlertText    |
#             | webdriver | webdriver123 | validation succeeded |
#             | webdriver | Password123  | validaiton failed    |
Feature: End to end Direct Debit delivery validation

    application Regression

    Scenario: Validate bank account details
    Given user landing on direct debit page
    When user enter valid bank account
    And enter routing number
    Then information is encryted and secured





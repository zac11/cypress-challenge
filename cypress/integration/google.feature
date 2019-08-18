Feature: The Google

  I want to open a social network page
  
  @focus
  Scenario: Opening a social network page
    Given I open Google page
    Then I see "Google" in the title


  @focus
  Scenario: Opening Facebook page
    Given I open Facebook home page
    Then I see "Facebook" in the title
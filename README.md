# Instructions for use

### Navigate to [https://forestry.io](https://forestry.io)

You will need to log in as the mld-pre-sales user. 
This user's details can be found in 1Password (if you don't have access chat with your nearest friendly pre-sales).

### Open up the Demo Site

* Click the Pages link in the side bar.
* Click 'Create New' on the editor pane.
* Click 'Folder'

### Name the Folder after the company you are Demoing to in lower case and hyphenated i.e. kentucky-fried-chicken

### Click on the Newly Created Folder

## Pages
You can now create branded pages for demoing to your client.

There are currently 3 pages available
1. landing-page
1. email
1. unsubscribe

### Landing Page 
This page is for use with Salesforce flows and represents an example home page for a client. 
This has a link to the Salesforce Communities function via the 'My Account' link in the nav bar.

### Unsubscribe
This page provides a page that a user can be directed to after clicking an unsubscribe link. This will have an embedded widget configured. 
In order to render a widget you will need to specify the following consentric properties on the url.
* token
* templateId
* widgetId

This might look like [https://demowebsite.com/demo/unsubscribe?token=1234567890&templateId=12345&widgetId=abcde](#)


### Email
This page will generate an html email that can be copied and pasted into outlook as an example for the client. 
The email will have consentric links automatically configured to access the unsubscribe page. If this page has not been created, these links will not work.

## Creating a Page
Click on the Create New Dropdown and select page.
You will be given the option to create one of the pages above. Select the desired page type.


## Managing a Page's Content
**When filling out Page's content, please pay attention to the notes below. Otherwise your page will not render correctly.**

Clicking on your newly created page will take you through to a form that can be filled out to manage the content of that page.

There are a few that __MUST__ be filled in correctly in order to ensure the demo runs as expected however most of these fields are self explanatory, just expecting text for various sections of the page.

These are:
* Layout
* Folder


### Layout
The Layout field tells the demo how to draw your page. There are currently three valid entries for this:
* ```landing-page```
* ```email```
* ```unsubscribe```

These must be entered as above to make sure the site renders correctly.

### Folder
The Folder field is used to tell the Demo where to look for content.
This must be entered with a '/' in front of it and should be what you called your folder above.
Be warned this field is Case Sensitive and again the site will not render correctly if not specified correctly.

## Saving your changes
N.B.  If this is the first time you have saved the document you will have to specify a name for the file. Please use the (case sensitive) name of the page type here 
i.e.
* email
* unsubscribe
* landing-page

This is to ensure the relative links within the site work correctly.


## Publishing
In order for your changes to be visible you will need to publish your changes. You do this by setting the draft state to 'off' and then clicking save.


## Viewing your changes
Once your changes have been completed navigate to 
https://mylifedigital.github.io/sales-demo-cms/__FOLDER__/__PAGE_TYPE__.html

i.e.
[https://aaroneus.github.io/jekyll-lightning-energy/demo/unsubscribe.html](https://aaroneus.github.io/jekyll-lightning-energy/demo/unsubscribe.html)






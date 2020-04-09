# Global Life
### My story
As a traveler, I want to travel and feel safe.
When I had an experience calling 911, I had to wait for 10 minutes to be redirected to emergency phone number and then I needed to explain again my problem.
What if I know I need emergency NOW and I don’t have time to explain my problem twice?
I decided to build an application that displays local direct numbers of rescue services in the location of the device and allows to call these services.

### What I want to see in the application:

* List of countries.
* About page.
* Geolocation.
* Profile:
* Name,
* Photo,
* Email,
* Address,
* Contact person details.

### Components Tree:

* App,
    * Header.
    * Routes:
        * Main:
            * Country Container:
                * Country name.
                * Location Dropdown.
            * Phones Container:
                * Rescue services numbers.
                * Button “Call”.
                * List on numbers.
        * About.
        * Profile:
            * Upload Photo component.
            * Details(Name, address, location…) form.
            * Edit / Delete buttons.
    * Footer.

### Technologies:
MongoDB,  
JavaScript,  
Node,  
React (React Native),  
Location: Google / Waze API,  
Photo Upload: AWS S3,  
Emails: AWS SES,  
Phone call: HTML “tel:” property
* Stretch Goal: Twillio “Click-to-call”

#### Next Features
* Translation to different languages.
* SignUp with mobile phone.
* Password Reset.
* Receiving emails with news about the application.
* SOS as a separate button that sends your location.



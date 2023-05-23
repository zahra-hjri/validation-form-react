# Form-validation

<a href="https://join.slack.com/t/ngc-goz8665/shared_invite/zt-r01kumfq-dQUT3c95BxEP_fnk4yJFfQ">
<img alt="Join us on Slack" src="https://raw.githubusercontent.com/netlify/netlify-cms/master/website/static/img/slack.png" width="165"/>
</a>

![Contributors](https://img.shields.io/github/contributors/larymak/Form-validation?style=plastic)
![Forks](https://img.shields.io/github/forks/larymak/Form-validation)
![Stars](https://img.shields.io/github/stars/larymak/Form-validation)
![Licence](https://img.shields.io/github/license/larymak/Form-validation)
![Issues](https://img.shields.io/github/issues/larymak/Form-validation)

### Description

Welcome to form validation project.In this program, we validate the form and manage the assumed errors.This program is one of the important components in applications and is used to register users
This is a form-validation App made in react framework.

## The steps of this project

1. Creating inputs to enter information on behalf of the user
2. Creating a button to submit the form
3. Creating a button to generate hard password
4. Creating a Form component to separate codes
5. Creating a middleware folder to place the validation.js file and manage errors

## Duties of functions

1. onChangeHandle : After every change in the inputs, this function saves these changes using state and returns them to us
2. onSubmitHandle :
   This function prevents the submission of the form and checks the correctness of the entries
3. handleGeneratePassword : This function creates a hard password for us according to the defined pattern
4. Validate : This function checks the inputs of the form according to the patterns defined for it, and if it does not match with the pattern, it shows the error specified for that input & When submitting the form, we pass this specified error input as input to the desired state

## Use map in Form component

Using map to manage error messages and prevent duplicate code in the Form component.

## How to use this project?

1. First, clone the project
2. Open the project in your editor
3. Enter the npm install command
4. And finally enter the npm run dev command

Now you can see the output.

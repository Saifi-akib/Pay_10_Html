function nnavigateToEmailVerify(){
    window.location.href = 'html/EmailVerify.html';
};
function navigateTomobileEmailVerify(){
    window.location.href = 'mobileEmailverify.html';
}
function navigateTomobileverify()
{
    window.location.href ="html/mobileverify.html";
}
function navigateToRequestCallback()
{
    window.location.href ="RequestCallback.html"
}
function navigateToNextScreen() {
    window.location.href = "NameVerify.html";
};
function navigateToEstablishpage()
{
    window.location.href = "EstablishMentIndex.html";
}
function navigateToEstablishMentIndex(){
    window.location.href = "gstNumber.html";
}
function navigateToBusinessDetails() {
    window.location.href = "BusinessDetails.html";
};
function navigateTobusinessdetailVerify(){
    window.location.href ="businessdetailVerify.html";
}
function navigateToDescriptionDetails(){
    window.location.href = "DescriptionDetails.html";
}
function navigateToBankDetail(){
    window.location.href = "BankDetail.html";
}
function navigateToPlateFormDetail(){
    window.location.href = "PlateFormDetail.html";
}
function navigateToUploadImage(){
    window.location.href = 'UploadImage.html';
}
function navigateTocompleteuploadDoc(){
    window.location.href = 'completeuploadDoc.html';
}
function navigateToPrivacyPolicy(){
    window.location.href ='PrivacyPolicy.html';
}
function navigateToHomeIndex(){
    window.location.href = '../index.html';
}
function navigateToBackscreen(){
    window.location.href="/"
}
function navigateToReviewPolicy(){
    window.location.href ="MissingPolicy.html";
}
function navigateToCallbackReview(){
    window.location.href = "ReviewPolicy.html"
}

function navigateToKycComplete(){
    window.location.href ='KycComplete.html';
}
function navigateToKycUnderReview(){
    window.location.href ='KycUnderReview.html';
}

function navigateTobusinesscompleteVerify(){
    window.location.href ='businesscompleteVerify.html';
}
function goBack() {
    window.history.back();
}
function navigateToverify()
{
    window.location.href = 'html/mobileverify.html';
}

// upload file function
function handleContinue() {
    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        displayUploadedFile(file);
    }
}

function displayUploadedFile(file) {
    const uploadedFilesContainer = document.getElementById('uploaded-files');
    const fileItem = document.createElement('div');
    fileItem.classList.add('uploaded-file-item');
    fileItem.textContent = file.name;
    uploadedFilesContainer.appendChild(fileItem);
}

function toggleOTPField() {
    const otpContainer = document.querySelector('.otp-container');
    const verifyButton = document.querySelector('.hide-otp');
    
    otpContainer.classList.toggle('hidden');
    verifyButton.classList.toggle('hidden');
    
    if (!otpContainer.classList.contains('hidden')) {
        scrollToForm();
    }
}


// Get references to the checkbox and the "Next" button

  




  
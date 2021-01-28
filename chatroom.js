let menuToggle = document.querySelector('.navigation-toggle');
let rightTab = document.querySelector('.right-header-tab');
let darkBackground = document.querySelector('.dark-background');

let headerLogo = document.querySelector('.header-logo');
let leftTab = document.querySelector('.left-header-tab');

headerLogo.addEventListener('click', () => {
  if (leftTab.classList.contains('active')) {
    leftTab.classList.remove('active');
    darkBackground.classList.remove('active');
    headerLogo.classList.remove('active');
    rightTab.classList.remove('active');
  }
  else {
    leftTab.classList.add('active');
    darkBackground.classList.add('active');
    headerLogo.classList.add('active');
  }
});

darkBackground.addEventListener('click', () => {
  leftTab.classList.remove('active');
  darkBackground.classList.remove('active');
  headerLogo.classList.remove('active');

  rightTab.classList.remove('active');
});

menuToggle.addEventListener('click', () => {
  rightTab.classList.add('active');
  darkBackground.classList.add('active');
});

// REQUEST APPLICATION
let acceptButton = document.querySelectorAll('.accept-button');
let rejectButton = document.querySelectorAll('.reject-button');
let pendingMembers = document.querySelectorAll('.members-pending-group');
let requestApplication = document.querySelector('.request-application');
let applicationClose = document.querySelector('.application-close')

for (let i = 0; i < acceptButton.length; i++) {
    acceptButton[i].addEventListener('click', () => {
        requestApplication.style.display = "unset";
    });
}

for (let i = 0; i < rejectButton.length; i++) {
    rejectButton[i].addEventListener('click', () => {
        pendingMembers[i].style.display = "none"
    });
}

applicationClose.addEventListener('click', () => {
    requestApplication.style.display = "none";
});


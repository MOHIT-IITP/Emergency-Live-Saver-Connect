// Define water intake in liters
const waterIntakeMen = 3700;
const waterIntakeWomen = 2700;

// Calculate intervals (assuming 8 intervals between 6 AM and 9 PM)
const intervalCount = 8;
const intervalTime = (15 * 60 * 60) / intervalCount; // in seconds

let remindersActive = false;
let timeouts = [];

// Function to send notification
function sendNotification(amount) {
  if (remindersActive && Notification.permission === "granted") {
    new Notification(`Hydration Reminder`, {
      body: `Time to drink ${amount} ml of water!`,
      icon: 'water-glass-icon.png' // optional icon URL
    });
  }
}

// Function to start reminders
function startReminders(gender) {
  const totalIntake = gender === 'men' ? waterIntakeMen : waterIntakeWomen;
  const amountPerInterval = totalIntake / intervalCount;

  for (let i = 0; i < intervalCount; i++) {
    timeouts.push(setTimeout(() => sendNotification(amountPerInterval), i * intervalTime * 1000));
  }
}

// Toggle reminders on/off
document.getElementById('toggleReminder').addEventListener('click', function() {
  const genderSelect = document.getElementById('gender');
  const gender = genderSelect.value;

  remindersActive = !remindersActive;
  
  if (remindersActive) {
    startReminders(gender);
    this.innerText = 'Stop Reminder';
    // Request permission when starting reminders
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission();
    }
  } else {
    timeouts.forEach(timeout => clearTimeout(timeout));
    timeouts = [];
    document.getElementById('reminder').innerText = '';
    this.innerText = 'Start Reminder';
  }
});

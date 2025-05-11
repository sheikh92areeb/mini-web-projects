// Meeting Timer
let seconds = 0;
const timer = setInterval(() => {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.getElementById('meeting-timer').textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}, 1000);

// Sidebar Tabs
document.getElementById('chat-tab').addEventListener('click', () => {
    document.getElementById('chat-content').classList.remove('hidden');
    document.getElementById('participants-content').classList.add('hidden');
    document.getElementById('resources-content').classList.add('hidden');
    document.getElementById('chat-tab').classList.add('border-blue-500', 'text-blue-400');
    document.getElementById('participants-tab').classList.remove('border-blue-500', 'text-blue-400');
    document.getElementById('resources-tab').classList.remove('border-blue-500', 'text-blue-400');
});

document.getElementById('participants-tab').addEventListener('click', () => {
    document.getElementById('chat-content').classList.add('hidden');
    document.getElementById('participants-content').classList.remove('hidden');
    document.getElementById('resources-content').classList.add('hidden');
    document.getElementById('chat-tab').classList.remove('border-blue-500', 'text-blue-400');
    document.getElementById('participants-tab').classList.add('border-blue-500', 'text-blue-400');
    document.getElementById('resources-tab').classList.remove('border-blue-500', 'text-blue-400');
});

document.getElementById('resources-tab').addEventListener('click', () => {
    document.getElementById('chat-content').classList.add('hidden');
    document.getElementById('participants-content').classList.add('hidden');
    document.getElementById('resources-content').classList.remove('hidden');
    document.getElementById('chat-tab').classList.remove('border-blue-500', 'text-blue-400');
    document.getElementById('participants-tab').classList.remove('border-blue-500', 'text-blue-400');
    document.getElementById('resources-tab').classList.add('border-blue-500', 'text-blue-400');
});

// Mobile Sidebar Toggle
document.getElementById('sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

// Screen Share Modal
document.getElementById('screen-share-btn').addEventListener('click', () => {
    document.getElementById('screen-share-modal').classList.remove('hidden');
});

document.getElementById('close-screen-share-modal').addEventListener('click', () => {
    document.getElementById('screen-share-modal').classList.add('hidden');
});

document.getElementById('cancel-screen-share').addEventListener('click', () => {
    document.getElementById('screen-share-modal').classList.add('hidden');
});

document.getElementById('start-screen-share').addEventListener('click', () => {
    document.getElementById('screen-share-modal').classList.add('hidden');
    alert('Screen sharing started!');
});

// Audio/Video Toggle
let audioOn = true;
document.getElementById('audio-btn').addEventListener('click', () => {
    audioOn = !audioOn;
    const icon = document.getElementById('audio-btn').querySelector('i');
    if (audioOn) {
        icon.classList.remove('fa-microphone-slash');
        icon.classList.add('fa-microphone');
    } else {
        icon.classList.remove('fa-microphone');
        icon.classList.add('fa-microphone-slash');
    }
});

let videoOn = true;
document.getElementById('video-btn').addEventListener('click', () => {
    videoOn = !videoOn;
    const icon = document.getElementById('video-btn').querySelector('i');
    if (videoOn) {
        icon.classList.remove('fa-video-slash');
        icon.classList.add('fa-video');
    } else {
        icon.classList.remove('fa-video');
        icon.classList.add('fa-video-slash');
    }
});

// Raise Hand
let handRaised = false;
document.getElementById('raise-hand-btn').addEventListener('click', () => {
    handRaised = !handRaised;
    const icon = document.getElementById('raise-hand-btn').querySelector('i');
    if (handRaised) {
        icon.classList.add('text-yellow-400');
        alert('Your hand is raised! The teacher will be notified.');
    } else {
        icon.classList.remove('text-yellow-400');
    }
});

// End Call
document.getElementById('end-call-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to leave the class?')) {
        clearInterval(timer);
        alert('You have left the class. Redirecting to home page...');
        // In a real app, you would redirect to another page
    }
});

// Record Button
let recording = false;
document.getElementById('record-btn').addEventListener('click', () => {
    recording = !recording;
    const btn = document.getElementById('record-btn');
    if (recording) {
        btn.innerHTML = '<i class="fas fa-circle"></i><span>Recording</span>';
        btn.classList.remove('bg-red-600', 'hover:bg-red-700');
        btn.classList.add('bg-red-700', 'hover:bg-red-800');
    } else {
        btn.innerHTML = '<i class="fas fa-circle"></i><span>Record</span>';
        btn.classList.remove('bg-red-700', 'hover:bg-red-800');
        btn.classList.add('bg-red-600', 'hover:bg-red-700');
    }
});

// Simulate video streams (in a real app, this would be WebRTC)
// This is just a placeholder to show the UI works
setTimeout(() => {
    document.getElementById('presenter-video').src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
    document.getElementById('participant-1').src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
    document.getElementById('participant-2').src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
    document.getElementById('participant-3').src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
    document.getElementById('participant-4').src = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
}, 1000);
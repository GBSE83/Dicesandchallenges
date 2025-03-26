// Language translations for landing page
const landingTranslations = {
    es: {
        welcomeMessage: "Bienvenido al Juego de Dados y Pruebas",
        landingInstructions: "Elige una de las siguientes opciones para comenzar:",
        hostTitle: "Opción 1: Anfitrión",
        hostDescription: "Crea una nueva partida y comparte el código con tus amigos para que puedan unirse como invitados.",
        hostNameLabel: "Tu nombre:",
        createGameBtn: "Crear partida",
        guestTitle: "Opción 2: Invitado",
        guestDescription: "Únete a una partida existente con el código proporcionado por el anfitrión.",
        guestNameLabel: "Tu nombre:",
        accessCodeLabel: "Código de acceso:",
        joinGameBtn: "Unirse a partida",
        hostCodeTitle: "Tu código de acceso",
        hostCodeInstructions: "Comparte este código con los invitados para que puedan unirse a tu partida:",
        copyCodeBtn: "Copiar",
        connectedUsersTitle: "Usuarios conectados:",
        startAsHostBtn: "Comenzar partida",
        hostStartNote: "Puedes comenzar la partida sin invitados o esperar a que se conecten.",
        errorTitle: "Error",
        errorOkBtn: "Aceptar",
        footerText: "Juego de Dados y Pruebas 2025",
        emptyNameError: "Por favor, introduce tu nombre",
        emptyCodeError: "Por favor, introduce el código de acceso",
        invalidCodeError: "El código de acceso no es válido",
        connectionErrorPrefix: "Error de conexión: ",
        codeCopiedMessage: "Código copiado al portapapeles",
        hostNamePlaceholder: "Introduce tu nombre",
        guestNamePlaceholder: "Introduce tu nombre",
        accessCodePlaceholder: "Código de acceso",
        duplicateNameError: "Este nombre ya está en uso. Por favor, elige otro nombre.",
        waitingForHostTitle: "Esperando al anfitrión",
        waitingForHostMessage: "Por favor, espera a que el anfitrión comience la partida...",
        cancelButton: "Cancelar"
    },
    en: {
        welcomeMessage: "Welcome to Dice and Challenges Game",
        landingInstructions: "Choose one of the following options to start:",
        hostTitle: "Option 1: Host",
        hostDescription: "Create a new game and share the code with your friends so they can join as guests.",
        hostNameLabel: "Your name:",
        createGameBtn: "Create game",
        guestTitle: "Option 2: Guest",
        guestDescription: "Join an existing game with the code provided by the host.",
        guestNameLabel: "Your name:",
        accessCodeLabel: "Access code:",
        joinGameBtn: "Join game",
        hostCodeTitle: "Your access code",
        hostCodeInstructions: "Share this code with guests so they can join your game:",
        copyCodeBtn: "Copy",
        connectedUsersTitle: "Connected users:",
        startAsHostBtn: "Start game",
        hostStartNote: "You can start the game without guests or wait for them to connect.",
        errorTitle: "Error",
        errorOkBtn: "OK",
        footerText: "Dice and Challenges Game 2025",
        emptyNameError: "Please enter your name",
        emptyCodeError: "Please enter the access code",
        invalidCodeError: "The access code is not valid",
        connectionErrorPrefix: "Connection error: ",
        codeCopiedMessage: "Code copied to clipboard",
        hostNamePlaceholder: "Enter your name",
        guestNamePlaceholder: "Enter your name",
        accessCodePlaceholder: "Access code",
        duplicateNameError: "This name is already in use. Please choose a different name.",
        waitingForHostTitle: "Waiting for host",
        waitingForHostMessage: "Please wait for the host to start the game...",
        cancelButton: "Cancel"
    }
};

// Game state for landing page
let landingState = {
    currentLanguage: 'es',
    isDarkMode: false,
    peer: null,
    peerId: null,
    hostConnection: null,
    guestConnections: [],
    hostName: '',
    guestName: '',
    accessCode: ''
};

// DOM elements
const hostNameInput = document.getElementById('host-name');
const createGameBtn = document.getElementById('create-game-btn');
const guestNameInput = document.getElementById('guest-name');
const accessCodeInput = document.getElementById('access-code');
const joinGameBtn = document.getElementById('join-game-btn');
const hostCodeModal = document.getElementById('host-code-modal');
const closeHostCodeModalBtn = document.getElementById('close-host-code-modal');
const generatedCodeSpan = document.getElementById('generated-code');
const copyCodeBtn = document.getElementById('copy-code-btn');
const connectedUsersList = document.getElementById('connected-users-list');
const startAsHostBtn = document.getElementById('start-as-host-btn');
const errorModal = document.getElementById('error-modal');
const closeErrorModalBtn = document.getElementById('close-error-modal');
const errorMessageP = document.getElementById('error-message');
const errorOkBtn = document.getElementById('error-ok-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const languageToggleBtn = document.getElementById('language-toggle');
const hostNote = document.getElementById('host-note');

// Event listeners
createGameBtn.addEventListener('click', createGame);
joinGameBtn.addEventListener('click', joinGame);
closeHostCodeModalBtn.addEventListener('click', closeHostCodeModal);
copyCodeBtn.addEventListener('click', copyAccessCode);
startAsHostBtn.addEventListener('click', startGameAsHost);
closeErrorModalBtn.addEventListener('click', closeErrorModal);
errorOkBtn.addEventListener('click', closeErrorModal);
themeToggleBtn.addEventListener('click', toggleTheme);
languageToggleBtn.addEventListener('click', toggleLanguage);

// Initialize 
function init() {
    updateLanguage();
    
    // Check if browser supports PeerJS
    if (!window.Peer) {
        showError('Este navegador no es compatible con la funcionalidad de conexión en tiempo real.');
        disableConnectButtons();
    }
}

// Generate a random access code
function generateAccessCode() {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed similar looking characters
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Create a new game as host
function createGame() {
    const hostName = hostNameInput.value.trim();
    if (!hostName) {
        showError(landingTranslations[landingState.currentLanguage].emptyNameError);
        return;
    }
    
    landingState.hostName = hostName;
    const accessCode = generateAccessCode();
    landingState.accessCode = accessCode;
    
    // Initialize PeerJS
    try {
        landingState.peer = new Peer(`dice-game-${accessCode}`);
        
        landingState.peer.on('open', (id) => {
            landingState.peerId = id;
            generatedCodeSpan.textContent = accessCode;
            openHostCodeModal();
            
            // Add event listener for connections from guests
            landingState.peer.on('connection', (conn) => {
                setupGuestConnection(conn);
            });
        });
        
        landingState.peer.on('error', (err) => {
            console.error('PeerJS error:', err);
            showError(landingTranslations[landingState.currentLanguage].connectionErrorPrefix + err);
        });
    } catch (err) {
        console.error('Failed to initialize PeerJS:', err);
        showError(landingTranslations[landingState.currentLanguage].connectionErrorPrefix + err);
    }
}

// Join an existing game as guest
function joinGame() {
    const guestName = guestNameInput.value.trim();
    const accessCode = accessCodeInput.value.trim().toUpperCase();
    
    if (!guestName) {
        showError(landingTranslations[landingState.currentLanguage].emptyNameError);
        return;
    }
    
    if (!accessCode) {
        showError(landingTranslations[landingState.currentLanguage].emptyCodeError);
        return;
    }
    
    landingState.guestName = guestName;
    landingState.accessCode = accessCode;
    
    // Initialize PeerJS for guest
    try {
        landingState.peer = new Peer();
        
        landingState.peer.on('open', (id) => {
            landingState.peerId = id;
            
            // Connect to host
            const conn = landingState.peer.connect(`dice-game-${accessCode}`);
            
            conn.on('open', () => {
                // Send guest info to host
                conn.send({
                    type: 'guest-info',
                    name: guestName,
                    peerId: id
                });
                
                landingState.hostConnection = conn;
                
                // Listen for data from host
                conn.on('data', (data) => {
                    handleHostData(data);
                });
                
                // Handle connection closing
                conn.on('close', () => {
                    showError('La conexión con el anfitrión se ha cerrado.');
                    landingState.hostConnection = null;
                });
                
                // Show waiting screen
                showWaitingScreen();
            });
            
            conn.on('error', (err) => {
                console.error('Connection error:', err);
                showError(landingTranslations[landingState.currentLanguage].connectionErrorPrefix + err);
            });
        });
        
        landingState.peer.on('error', (err) => {
            console.error('PeerJS error:', err);
            if (err.type === 'peer-unavailable') {
                showError(landingTranslations[landingState.currentLanguage].invalidCodeError);
            } else {
                showError(landingTranslations[landingState.currentLanguage].connectionErrorPrefix + err);
            }
        });
    } catch (err) {
        console.error('Failed to initialize PeerJS:', err);
        showError(landingTranslations[landingState.currentLanguage].connectionErrorPrefix + err);
    }
}

// Setup connection with guest
function setupGuestConnection(conn) {
    conn.on('open', () => {
        // Add connection to list
        landingState.guestConnections.push(conn);
        
        // Listen for data from this guest
        conn.on('data', (data) => {
            handleGuestData(conn, data);
        });
        
        // Handle connection closing
        conn.on('close', () => {
            landingState.guestConnections = landingState.guestConnections.filter(c => c !== conn);
            updateConnectedUsersList();
        });
    });
}

// Handle data received from host
function handleHostData(data) {
    console.log('Received data from host:', data);
    
    if (data.type === 'name-rejected') {
        alert(data.message);
        // Clear the guest name input and focus it
        guestNameInput.value = '';
        guestNameInput.focus();
        return;
    }
    
    if (data.type === 'guest-approved') {
        hideWaitingScreen();
        const params = new URLSearchParams();
        params.append('role', 'guest');
        params.append('name', landingState.guestName);
        params.append('accessCode', landingState.accessCode);
        params.append('peerId', landingState.peerId);
        params.append('language', landingState.currentLanguage);
        params.append('darkMode', landingState.isDarkMode);
        window.location.href = `game.html?${params.toString()}`;
        return;
    }
    
    if (data.type === 'host-kicked') {
        alert(data.message);
        exitGame();
        return;
    }
    
    if (data.type === 'game-start') {
        hideWaitingScreen();
        const params = new URLSearchParams();
        params.append('role', 'guest');
        params.append('name', landingState.guestName);
        params.append('accessCode', landingState.accessCode);
        params.append('peerId', landingState.peerId);
        params.append('language', landingState.currentLanguage);
        params.append('darkMode', landingState.isDarkMode);
        window.location.href = `game.html?${params.toString()}`;
    }
}

// Handle data received from guests
function handleGuestData(conn, data) {
    console.log('Received data from guest:', data);
    
    if (data.type === 'guest-info') {
        // Check if the name already exists in the connected guests
        const isDuplicateName = landingState.guestConnections.some(existingConn => 
            existingConn.guestName === data.name && existingConn !== conn
        ) || data.name === landingState.hostName;
        
        if (isDuplicateName) {
            // Send name rejection message
            conn.send({
                type: 'name-rejected',
                message: landingTranslations[landingState.currentLanguage].duplicateNameError
            });
            return;
        }
        
        conn.guestName = data.name;
        conn.guestId = data.peerId;
        updateConnectedUsersList();
    }
}

// Update the list of connected users
function updateConnectedUsersList() {
    connectedUsersList.innerHTML = '';
    
    // Add host
    const hostLi = document.createElement('li');
    hostLi.textContent = `${landingState.hostName} (${landingTranslations[landingState.currentLanguage].hostTitle.replace('Opción 1: ', '')})`;
    hostLi.style.fontWeight = 'bold';
    connectedUsersList.appendChild(hostLi);
    
    // Add all connected guests
    landingState.guestConnections.forEach(conn => {
        if (conn.guestName) {
            const guestLi = document.createElement('li');
            guestLi.textContent = `${conn.guestName}`;
            connectedUsersList.appendChild(guestLi);
        }
    });
    
    // Update start button status
    startAsHostBtn.disabled = false; 
    startAsHostBtn.title = '';
}

// Start the game as host
function startGameAsHost() {
    // Notify all guests that the game is starting
    landingState.guestConnections.forEach(conn => {
        conn.send({
            type: 'game-start'
        });
    });
    
    // Redirect to game page with host parameters
    const params = new URLSearchParams();
    params.append('role', 'host');
    params.append('name', landingState.hostName);
    params.append('accessCode', landingState.accessCode);
    params.append('peerId', landingState.peerId);
    params.append('language', landingState.currentLanguage);
    params.append('darkMode', landingState.isDarkMode);
    window.location.href = `game.html?${params.toString()}`;
}

// Open the host code modal
function openHostCodeModal() {
    hostCodeModal.style.display = 'flex';
    updateConnectedUsersList();
}

// Close the host code modal
function closeHostCodeModal() {
    hostCodeModal.style.display = 'none';
}

// Copy the access code to clipboard
function copyAccessCode() {
    navigator.clipboard.writeText(landingState.accessCode)
        .then(() => {
            alert(landingTranslations[landingState.currentLanguage].codeCopiedMessage);
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

// Show error message
function showError(message) {
    errorMessageP.textContent = message;
    errorModal.style.display = 'flex';
}

// Close error modal
function closeErrorModal() {
    errorModal.style.display = 'none';
}

// Disable connect buttons
function disableConnectButtons() {
    createGameBtn.disabled = true;
    joinGameBtn.disabled = true;
}

// Toggle theme (dark/light mode)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    landingState.isDarkMode = document.body.classList.contains('dark-mode');
}

// Toggle language
function toggleLanguage() {
    landingState.currentLanguage = landingState.currentLanguage === 'es' ? 'en' : 'es';
    languageToggleBtn.textContent = landingState.currentLanguage.toUpperCase();
    updateLanguage();
}

// Update all text based on selected language
function updateLanguage() {
    const lang = landingState.currentLanguage;
    const translations = landingTranslations[lang];
    
    document.getElementById('landing-title').textContent = lang === 'es' ? 'Juego de Dados y Pruebas' : 'Dice and Challenges Game';
    document.getElementById('welcome-message').textContent = translations.welcomeMessage;
    document.getElementById('landing-instructions').textContent = translations.landingInstructions;
    document.getElementById('host-title').textContent = translations.hostTitle;
    document.getElementById('host-description').textContent = translations.hostDescription;
    document.getElementById('host-name-label').textContent = translations.hostNameLabel;
    document.getElementById('create-game-btn').textContent = translations.createGameBtn;
    document.getElementById('guest-title').textContent = translations.guestTitle;
    document.getElementById('guest-description').textContent = translations.guestDescription;
    document.getElementById('guest-name-label').textContent = translations.guestNameLabel;
    document.getElementById('access-code-label').textContent = translations.accessCodeLabel;
    document.getElementById('join-game-btn').textContent = translations.joinGameBtn;
    document.getElementById('host-code-title').textContent = translations.hostCodeTitle;
    document.getElementById('host-code-instructions').textContent = translations.hostCodeInstructions;
    document.getElementById('copy-code-btn').textContent = translations.copyCodeBtn;
    document.getElementById('connected-users-title').textContent = translations.connectedUsersTitle;
    document.getElementById('start-as-host-btn').textContent = translations.startAsHostBtn;
    document.getElementById('host-note').textContent = translations.hostStartNote;
    document.getElementById('error-title').textContent = translations.errorTitle;
    document.getElementById('error-ok-btn').textContent = translations.errorOkBtn;
    document.getElementById('landing-footer-text').textContent = translations.footerText;
    
    // Placeholders
    hostNameInput.placeholder = translations.hostNamePlaceholder;
    guestNameInput.placeholder = translations.guestNamePlaceholder;
    accessCodeInput.placeholder = translations.accessCodePlaceholder;
    
    updateConnectedUsersList();
}

// Show waiting screen for guest
function showWaitingScreen() {
    // Create and show waiting modal
    const waitingModal = document.createElement('div');
    waitingModal.id = 'waiting-modal';
    waitingModal.className = 'modal';
    waitingModal.style.display = 'flex';
    
    waitingModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${landingTranslations[landingState.currentLanguage].waitingForHostTitle}</h2>
            </div>
            <div class="modal-body">
                <p>${landingTranslations[landingState.currentLanguage].waitingForHostMessage}</p>
                <div class="loader"></div>
                <button id="cancel-waiting-btn" class="btn">${landingTranslations[landingState.currentLanguage].cancelButton}</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(waitingModal);
    
    // Add event listener to cancel button
    document.getElementById('cancel-waiting-btn').addEventListener('click', () => {
        if (landingState.hostConnection) {
            landingState.hostConnection.close();
            landingState.hostConnection = null;
        }
        document.body.removeChild(waitingModal);
    });
}

// Hide waiting screen
function hideWaitingScreen() {
    const waitingModal = document.getElementById('waiting-modal');
    if (waitingModal) {
        waitingModal.parentNode.removeChild(waitingModal);
    }
}

// Initialize the landing page
function exitGame() {
    window.close();
}

init();
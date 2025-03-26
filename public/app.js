// Language translations
const translations = {
    es: {
        gameTitle: "Juego de Dados y Pruebas",
        playersTitle: "Jugadores",
        challengesTitle: "Pruebas",
        gameStatusTitle: "Estado del Juego",
        addPlayer: "Añadir Jugador",
        addChallenge: "Añadir Prueba",
        startGame: "Comenzar Juego",
        rollDice: "Lanzar Dados",
        resultsTitle: "Resultados",
        currentChallengeLabel: "Prueba Actual:",
        playerNamePlaceholder: "Nombre del jugador",
        challengeNamePlaceholder: "Nombre de la prueba",
        challengeDescriptionPlaceholder: "Descripción de la prueba",
        footerText: "Juego de Dados y Pruebas 2025 ",
        deleteBtn: "Eliminar",
        winner: "¡Ganador!",
        nextLevel: "Avanza al siguiente nivel",
        gameOver: "¡Juego Terminado! ",
        noPlayers: "Agregue al menos un jugador para comenzar",
        noChallenges: "Agregue al menos una prueba para comenzar",
        saveGame: "Guardar partida",
        saveGameTitle: "Guardar Partida",
        saveFilenamePlaceholder: "nombre-partida",
        saveButton: "Guardar",
        cancelButton: "Cancelar",
        saveGamePrompt: "Introduce un nombre para el archivo de guardado:",
        resetGameData: "Vaciar Datos",
        resetGameConfirmation: "¿Estás seguro de que quieres reiniciar el juego? Se mantendrán los jugadores y las pruebas, pero se reiniciarán las tiradas.",
        loadGame: "Cargar Partida",
        resetData: "Resetear Datos",
        loadChallengeList: "Cargar Lista",
        loser: "Perdedor",
        initialStatus: "Situación Inicial",
        continueGame: "Continuar Juego",
        addMoreChallenges: "Para continuar el juego, agregue más pruebas a la lista.",
        continuePlaying: "Seguir jugando",
        selectChallenges: "Seleccionar Pruebas",
        cancelSelection: "Cancelar selección",
        deleteSelected: "Eliminar seleccionados",
        deactivateSelected: "Desactivar seleccionados",
        showDeactivated: "Mostrar desactivadas",
        hideDeactivated: "Ocultar desactivadas",
        noDeactivatedChallenges: "No hay pruebas desactivadas",
        challengeTooltip: "Doble clic para editar / Arrastrar para reordenar",
        playerTooltip: "Doble clic para desactivar jugador",
        replaceChallengesConfirmation: "¿Desea reemplazar la lista de pruebas actual con la lista del archivo?",
        appendChallengesConfirmation: "¿Desea añadir las pruebas del archivo a la lista actual?",
        challengesReplaced: "Lista de pruebas reemplazada.",
        challengesAdded: "Se han añadido",
        challengesFromFile: "pruebas desde el archivo.",
        selectAll: "Seleccionar todas",
        deselectAll: "Deseleccionar todas",
        deactivatedChallengeTooltip: "Doble clic para reactivate challenge",
        downloadChallengeList: "Descargar Lista",
        downloadListTitle: "Descargar Lista de Pruebas",
        downloadListPrompt: "Selecciona qué tipo de lista quieres descargar:",
        downloadAllChallenges: "Todas las pruebas",
        downloadActiveChallenges: "Pruebas activas ",
        cancelDownload: "Cancelar",
        downloadSimpleList: "Lista sencilla",
        descriptionInstructionsTitle: "Descripción del Juego e Instrucciones Iniciales",
        descriptionTitle: "Descripción",
        gameTitleLabel: "Título del Juego",
        instructionsTitle: "Instrucciones Iniciales",
        descriptionPlaceholder: "Escribe la descripción del juego aquí",
        instructionsPlaceholder: "Escribe las instrucciones del juego aquí",
        gameTitlePlaceholder: "Escribe el título del juego aquí",
        showSection: "Mostrar",
        hideSection: "Ocultar",
        restartGame: "Reiniciar Juego",
        undoLastRoll: "Anular última tirada",
        noUndoAvailable: "No hay tirada anterior para anular",
        repeatRoll: "Tirada repetida: continuar juego",
        undoConfirmation: "¿Estás seguro de que quieres anular la última tirada?",
        nextChallenge: "prueba siguiente",
        loadListTitle: "Cargar Lista de Pruebas",
        loadListPrompt: "Seleccione la fuente de la lista de pruebas:",
        loadFromFile: "Cargar desde archivo",
        loadSimpleList: "Cargar lista simple",
        pasteText: "Pegar texto",
        loadWithPastedText: "Cargar con texto pegado",
        cancelLoad: "Cancelar",
        includeDeactivatedChallenges: "¿Quieres incluir las pruebas desactivadas en la lista sencilla?",
        diceValueError: "El valor máximo de los dados no puede ser tan bajo para ese número de jugadores activos.",
        rollNoChallengeWarning: "¿Seguro que quieres realizar una tirada sin prueba? Los resultados no contarán para el juego.",
        rollNoChallengeCheckboxLabel: "Tirar sin avanzar a prueba siguiente",
        editBtn: "Editar",
        deleteConfirmation: "¿Estás seguro de que quieres eliminar a este jugador?",
        resetConfirmation: "¿Estás seguro de que quieres reiniciar el juego?",
        invalidSaveFile: "Archivo de partida no válido.",
        saveLoadError: "Error al leer el archivo de partida.",
        gameLoadedSuccessfully: "¡Partida cargada con éxito!",
        fileLoadError: "Error al leer el archivo.",
        noChallengesInFile: "No se encontraron pruebas en el archivo.",
        deleteChallengesConfirmation: "¿Estás seguro de que quieres eliminar las pruebas seleccionadas?",
        challengesDeactivatedAlert: "Se han desactivado",
        challengesText: "pruebas",
        noChallengesDeactivatedAlert: "No se ha seleccionado ninguna prueba para desactivar.",
        noActivePlayersAlert: "No hay jugadores activos para tirar los dados.",
        saveFilenameAlert: "Por favor, introduce un nombre de archivo.",
        challengeListLoadError: "Error al cargar la lista de Challenges:",
        simpleListLoadError: "Error al cargar la lista simple:",
        autoCloseModalCheckboxLabel: "Cerrar automáticamente",
        autoCloseTimerLabel: "Tiempo de cierre automático (segundos):",
        pasteClipboard: "Pegar desde portapapeles",
        allowDuplicateRollsCheckboxLabel: "Permitir mismos resultados",
        exitGame: "Salir del juego",
        exitGameConfirmation: "¿Estás seguro de que quieres salir del juego?",
        exitGameTitle: "Salir del Juego",
        endGameStay: "Terminar partida y mantenerme en la sala",
        endGameExit: "Terminar partida y volver a la sala inicial",
        cancelAction: "Cancelar acción",
        hostEndedGame: "El anfitrión ha terminado la partida."
    },
    en: {
        gameTitle: "Dice and Challenges Game",
        playersTitle: "Players",
        challengesTitle: "Challenges",
        gameStatusTitle: "Game Status",
        addPlayer: "Add Player",
        addChallenge: "Add Challenge",
        startGame: "Start Game",
        rollDice: "Roll Dice",
        resultsTitle: "Results",
        currentChallengeLabel: "Current Challenge:",
        playerNamePlaceholder: "Player name",
        challengeNamePlaceholder: "Challenge name",
        challengeDescriptionPlaceholder: "Challenge description",
        footerText: "Dice and Challenges Game 2025 ",
        deleteBtn: "Delete",
        winner: "Winner!",
        nextLevel: "Advances to next level",
        gameOver: "Game Over! ",
        noPlayers: "Add at least one player to start",
        noChallenges: "Add at least one challenge to start",
        saveGame: "Save game",
        saveGameTitle: "Save Game",
        saveFilenamePlaceholder: "game-name",
        saveButton: "Save",
        cancelButton: "Cancel",
        saveGamePrompt: "Enter a name for the save file:",
        resetGameData: "Reset Data",
        resetGameConfirmation: "Are you sure you want to restart the game? Players and challenges will be kept, but dice rolls will be reset.",
        loadGame: "Load Game",
        resetData: "Reset Data",
        loadChallengeList: "Load List",
        loser: "Loser",
        initialStatus: "Initial Status",
        continueGame: "Continue Game",
        addMoreChallenges: "To continue the game, please add more challenges to the list.",
        continuePlaying: "Continue playing",
        selectChallenges: "Select Challenges",
        cancelSelection: "Cancel selection",
        deleteSelected: "Delete selected",
        deactivateSelected: "Deactivate selected",
        showDeactivated: "Show deactivated",
        hideDeactivated: "Hide deactivated",
        noDeactivatedChallenges: "No deactivated challenges",
        challengeTooltip: "Double click to edit / Drag to reorder",
        playerTooltip: "Double click to deactivate player",
        replaceChallengesConfirmation: "Do you want to replace the current challenges list with the list from the file?",
        appendChallengesConfirmation: "Do you want to append the challenges from the file to the current list?",
        challengesReplaced: "Challenges list replaced.",
        challengesAdded: "Added",
        challengesFromFile: "challenges from file.",
        selectAll: "Select All",
        deselectAll: "Deselect All",
        deactivatedChallengeTooltip: "Double click to reactivate challenge",
        downloadChallengeList: "Download List",
        downloadListTitle: "Download Challenge List",
        downloadListPrompt: "Select which type of list you want to download:",
        downloadAllChallenges: "All challenges",
        downloadActiveChallenges: "Active challenges ",
        cancelDownload: "Cancel",
        downloadSimpleList: "Simple list",
        descriptionInstructionsTitle: "Game Description and Initial Instructions",
        descriptionTitle: "Description",
        gameTitleLabel: "Game Title",
        instructionsTitle: "Initial Instructions",
        descriptionPlaceholder: "Write the game description here",
        instructionsPlaceholder: "Write the game instructions here",
        gameTitlePlaceholder: "Write game title here",
        showSection: "Show",
        hideSection: "Hide",
        restartGame: "Restart Game",
        undoLastRoll: "Undo last roll",
        noUndoAvailable: "No previous roll to undo",
        repeatRoll: "Repeated roll: continue game",
        undoConfirmation: "Are you sure you want to undo the last roll?",
        nextChallenge: "next challenge",
        loadListTitle: "Load Challenge List",
        loadListPrompt: "Select the source of the challenge list:",
        loadFromFile: "Load from file",
        loadSimpleList: "Load simple list",
        pasteText: "Paste text",
        loadWithPastedText: "Load with pasted text",
        cancelLoad: "Cancel",
        includeDeactivatedChallenges: "Include deactivated challenges in the simple list?",
        diceValueError: "The maximum dice value cannot be that low for that number of active players.",
        rollNoChallengeWarning: "Are you sure you want to perform a roll without challenge? The results will not count towards the game.",
        rollNoChallengeCheckboxLabel: "Roll without moving on next challenge",
        editBtn: "Edit",
        deleteConfirmation: "Are you sure you want to delete this player?",
        resetConfirmation: "Are you sure you want to restart the game?",
        invalidSaveFile: "Invalid game file.",
        saveLoadError: "Error loading game file.",
        gameLoadedSuccessfully: "Game loaded successfully!",
        fileLoadError: "Error reading file.",
        noChallengesInFile: "No challenges found in the file.",
        deleteChallengesConfirmation: "Are you sure you want to delete the selected challenges?",
        challengesDeactivatedAlert: "Challenges deactivated",
        challengesText: "challenges",
        noChallengesDeactivatedAlert: "No challenges were selected for deactivation.",
        noActivePlayersAlert: "No active players to roll the dice.",
        saveFilenameAlert: "Please enter a filename.",
        challengeListLoadError: "Error loading challenge list:",
        simpleListLoadError: "Error loading simple list:",
        autoCloseModalCheckboxLabel: "Auto close",
        autoCloseTimerLabel: "Auto close timer (seconds):",
        pasteClipboard: "Paste from clipboard",
        allowDuplicateRollsCheckboxLabel: "Allow the same results",
        exitGame: "Exit game",
        exitGameConfirmation: "Are you sure you want to exit the game?",
        exitGameTitle: "Exit Game",
        endGameStay: "End game and stay in room",
        endGameExit: "End game and return to landing page",
        cancelAction: "Cancel action",
        hostEndedGame: "The host has ended the game."
    }
};

// Game state
const gameState = {
    players: [],
    challenges: [],
    currentChallenge: 0,
    gameStarted: false,
    currentLanguage: 'es',
    isDarkMode: false,
    diceRolledInGame: false,
    roundsLogData: [],
    gameEnded: false,
    deactivatedChallenges: [], 
    previousPlayerState: null,
    playerStateHistory: [],
    diceMaxValue: 10, 
    allowDuplicateRolls: false // Added state for allow duplicate rolls
};

// DOM elements
const playerNameInput = document.getElementById('player-name');
const addPlayerBtn = document.getElementById('add-player');
const playerList = document.getElementById('player-list');
const challengeNameInput = document.getElementById('challenge-name');
const addChallengeBtn = document.getElementById('add-challenge');
const challengeList = document.getElementById('challenge-list');
const challengeDescriptionInput = document.getElementById('challenge-description');
const startGameBtn = document.getElementById('start-game');
const rollDiceBtn = document.getElementById('roll-dice');
const diceContainer = document.getElementById('dice-container');
const roundResults = document.getElementById('round-results');
const currentChallengeDisplay = document.getElementById('current-challenge');
const themeToggleBtn = document.getElementById('theme-toggle');
const languageToggleBtn = document.getElementById('language-toggle');
const gameSection = document.getElementById('game-section');
const modal = document.getElementById('results-modal');
const modalDiceContainer = document.getElementById('modal-dice-container');
const closeButton = document.querySelector('.close-button');
const saveGameBtn = document.getElementById('save-game-btn');
const loadGameBtn = document.getElementById('load-game-btn');
const saveGameModal = document.getElementById('save-game-modal');
const currentChallengeDiv = document.getElementById('current-challenge-display');
const closeSaveModalButton = document.getElementById('close-save-modal');
const confirmSaveButton = document.getElementById('confirm-save');
const cancelSaveButton = document.getElementById('cancel-save');
const saveFilenameInput = document.getElementById('save-filename');
const loadChallengeListBtn = document.getElementById('load-challenge-list');
const roundsLog = document.getElementById('rounds-log');
const playerLevelsList = document.getElementById('player-levels-list');
const resetGameBtn = document.getElementById('reset-game-btn');
const continueGameBtn = document.getElementById('continue-game');
const selectChallengesBtn = document.getElementById('select-challenges-btn');
const challengeActionsDiv = document.getElementById('challenge-actions');
const deleteSelectedChallengesBtn = document.getElementById('delete-selected-challenges-btn');
const deactivateSelectedChallengesBtn = document.getElementById('deactivate-selected-challenges-btn');
const challengesSection = document.getElementById('challenges-section');
const deactivatedChallengeList = document.getElementById('deactivated-challenge-list'); 
const toggleDeactivatedChallengesBtn = document.getElementById('toggle-deactivated-challenges-btn'); 
const selectAllChallengesBtn = document.getElementById('select-all-challenges-btn'); 
const downloadChallengeListBtn = document.getElementById('download-challenge-list-btn'); 
const downloadChallengeListModal = document.getElementById('download-challenge-list-modal'); 
const closeDownloadListModalButton = document.getElementById('close-download-list-modal');
const cancelDownloadListBtn = document.getElementById('cancel-download-list-btn');
const downloadAllChallengesBtn = document.getElementById('download-all-challenges-btn');
const downloadActiveChallengesBtn = document.getElementById('download-active-challenges-btn');
const downloadSimpleListBtn = document.getElementById('download-simple-list-btn'); 
const sectionHeaders = document.querySelectorAll('.section-header');
const toggleButtons = document.querySelectorAll('.toggle-btn');
const descriptionInstructionsTitle = document.getElementById('description-instructions-title');
const descriptionTitle = document.getElementById('description-title');
const gameTitleLabel = document.getElementById('game-title-label');
const gameTitleInput = document.getElementById('game-title-input');
const instructionsTitle = document.getElementById('instructions-title');
const gameDescription = document.getElementById('game-description');
const gameInstructions = document.getElementById('game-instructions');
const undoLastRollBtn = document.getElementById('undo-last-roll'); 
const loadChallengeListModal = document.getElementById('load-challenge-list-modal');
const closeLoadListModalButton = document.getElementById('close-load-list-modal');
const cancelLoadListBtnModal = document.getElementById('cancel-load-list-btn');
const loadFromFileBtn = document.getElementById('load-from-file-btn');
const loadFromTextBtn = document.getElementById('load-from-text-btn');
const pasteTextAreaDiv = document.getElementById('paste-text-area');
const pastedTextInput = document.getElementById('pasted-text');
const confirmPasteBtn = document.getElementById('confirm-paste-btn');
const loadFromSimpleListBtn = document.getElementById('load-from-simple-list-btn');
const diceMaxValueInput = document.getElementById('dice-max-value');
const diceRangeError = document.getElementById('dice-range-error');
const rollNoChallengeCheckbox = document.getElementById('roll-no-challenge-checkbox');
const autoCloseModalCheckbox = document.getElementById('auto-close-modal-checkbox');
const autoCloseTimerContainer = document.getElementById('auto-close-timer-container');
const autoCloseTimerInput = document.getElementById('auto-close-timer');
const clearPasteTextBtn = document.getElementById('clear-paste-text-btn');
const pasteClipboardTextBtn = document.getElementById('paste-clipboard-text-btn');
const allowDuplicateRollsCheckbox = document.getElementById('allow-duplicate-rolls-checkbox'); 
const showLastDiceResultBtn = document.getElementById('show-last-dice-result'); 
const exitGameBtn = document.getElementById('exit-game-btn');

// Event listeners
addPlayerBtn.addEventListener('click', addPlayer);
addChallengeBtn.addEventListener('click', addChallenge);
startGameBtn.addEventListener('click', startGame);
rollDiceBtn.addEventListener('click', rollDice);
themeToggleBtn.addEventListener('click', toggleTheme);
languageToggleBtn.addEventListener('click', toggleLanguage);
closeButton.addEventListener('click', closeDiceModal);
saveGameBtn.addEventListener('click', openSaveGameModal);
closeSaveModalButton.addEventListener('click', closeSaveGameModal);
cancelSaveButton.addEventListener('click', closeSaveGameModal);
confirmSaveButton.addEventListener('click', saveGameData);
loadGameBtn.addEventListener('click', loadGameData);
loadChallengeListBtn.addEventListener('click', openLoadChallengeListModal);
resetGameBtn.addEventListener('click', resetGameData);
continueGameBtn.addEventListener('click', continueGame);
selectChallengesBtn.addEventListener('click', toggleSelectChallenges);
deleteSelectedChallengesBtn.addEventListener('click', deleteSelectedChallenges);
deactivateSelectedChallengesBtn.addEventListener('click', deactivateSelectedChallenges);
toggleDeactivatedChallengesBtn.addEventListener('click', toggleDeactivatedChallengesList); 
selectAllChallengesBtn.addEventListener('click', toggleSelectAllChallenges); 
downloadChallengeListBtn.addEventListener('click', openDownloadChallengeListModal); 
closeDownloadListModalButton.addEventListener('click', closeDownloadChallengeListModal);
cancelDownloadListBtn.addEventListener('click', closeDownloadChallengeListModal);
downloadAllChallengesBtn.addEventListener('click', () => downloadChallengeList('all'));
downloadActiveChallengesBtn.addEventListener('click', () => downloadChallengeList('active'));
downloadSimpleListBtn.addEventListener('click', () => downloadChallengeList('simple')); 
undoLastRollBtn.addEventListener('click', undoLastRoll);
closeLoadListModalButton.addEventListener('click', closeLoadChallengeListModal);
cancelLoadListBtnModal.addEventListener('click', closeLoadChallengeListModal);
loadFromFileBtn.addEventListener('click', loadChallengeListFromFile);
loadFromTextBtn.addEventListener('click', openPasteTextArea);
confirmPasteBtn.addEventListener('click', loadChallengeListFromText);
loadFromSimpleListBtn.addEventListener('click', loadSimpleList);
diceMaxValueInput.addEventListener('change', updateDiceMaxValue);
autoCloseModalCheckbox.addEventListener('change', toggleAutoCloseTimer);
clearPasteTextBtn.addEventListener('click', clearPastedText);
pasteClipboardTextBtn.addEventListener('click', pasteFromClipboard);
rollNoChallengeCheckbox.addEventListener('change', updateRollDiceButtonState);
showLastDiceResultBtn.addEventListener('click', showLastDiceResult);
exitGameBtn.addEventListener('click', () => {
    if (confirm(translations[gameState.currentLanguage].exitGameConfirmation)) {
        // logic to exit the game
    }
});

// Event listeners for section toggling
sectionHeaders.forEach(header => {
    header.addEventListener('click', function(event) {
        if (event.target.classList.contains('toggle-btn')) {
            return;
        }
        
        const targetId = this.getAttribute('data-target');
        const contentSection = document.getElementById(targetId);
        const toggleBtn = this.querySelector('.toggle-btn');
        
        contentSection.classList.toggle('collapsed');
        toggleBtn.textContent = contentSection.classList.contains('collapsed') ? '+' : '-';
    });
});

toggleButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        
        const header = this.closest('.section-header');
        const targetId = header.getAttribute('data-target');
        const contentSection = document.getElementById(targetId);
        
        contentSection.classList.toggle('collapsed');
        this.textContent = contentSection.classList.contains('collapsed') ? '+' : '-';
    });
});

// Event listeners for Enter key in input fields
playerNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addPlayer();
    }
});

challengeNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addChallenge();
    }
});

challengeDescriptionInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addChallenge();
    }
});

// Initialize the game
function init() {
    updateLanguage();
    updatePlayerLevelsDisplay();
    updateCurrentChallengeDisplay();
    continueGameBtn.disabled = true;
    selectChallengesBtn.disabled = gameState.challenges.length === 0;
    updateDeactivatedChallengeList(); 
    undoLastRollBtn.disabled = true; 
    showLastDiceResultBtn.disabled = true; 
    setupChallengeTooltip();
    setupCurrentChallengePopup(); 
    setupDicePopup(); 
    diceMaxValueInput.value = gameState.diceMaxValue; 
    allowDuplicateRollsCheckbox.checked = gameState.allowDuplicateRolls; 
}

// Add a player
function addPlayer() {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        gameState.players.push({
            name: playerName,
            level: 0,
            eliminated: false,
            active: true
        });
        updatePlayerList();
        playerNameInput.value = '';
    }
}

// Add a challenge
function addChallenge() {
    const challengeName = challengeNameInput.value.trim();
    const challengeDescription = challengeDescriptionInput.value.trim();
    if (challengeName) {
        gameState.challenges.push({ name: challengeName, active: true, description: challengeDescription });
        updateChallengeList();
        challengeNameInput.value = '';
        challengeDescriptionInput.value = '';
        selectChallengesBtn.disabled = gameState.challenges.length === 0;
    }
}

// Update the player list in the UI
function updatePlayerList() {
    playerList.innerHTML = '';
    gameState.players.forEach((player, index) => {
        const li = document.createElement('li');
        const playerNameClass = player.active ? '' : 'inactive-player';
        const playerStatus = player.active ? '' : ' (desactivado)';
        li.innerHTML = `
            <span class="player-name-item ${playerNameClass}" data-index="${index}" title="${translations[gameState.currentLanguage].playerTooltip}">${player.name}${playerStatus}</span>
            <div class="player-actions">
                <button class="edit-player-btn btn" data-index="${index}">${translations[gameState.currentLanguage].editBtn}</button>
                <button class="delete-player-btn" data-index="${index}">${translations[gameState.currentLanguage].deleteBtn}</button>
            </div>
        `;
        playerList.appendChild(li);
    });

    document.querySelectorAll('.player-name-item').forEach(playerName => {
        playerName.addEventListener('dblclick', (e) => {
            const index = e.target.getAttribute('data-index');
            gameState.players[index].active = !gameState.players[index].active;
            updatePlayerList();
            updatePlayerLevelsDisplay();
            updateRollDiceButtonState(); 
        });
    });

    document.querySelectorAll('.delete-player-btn').forEach(deleteBtn => {
        deleteBtn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'), 10);
            deletePlayer(index);
        });
    });

    document.querySelectorAll('.edit-player-btn').forEach(editBtn => {
        editBtn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'), 10);
            editPlayer(index);
        });
    });

    updateRollDiceButtonState(); 
}

// Edit player name
function editPlayer(index) {
    const playerNameSpan = playerList.querySelector(`.player-name-item[data-index="${index}"]`);
    const currentPlayerName = gameState.players[index].name;

    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = currentPlayerName;
    inputElement.classList.add('edit-challenge-input'); 
    inputElement.style.width = '70%'; 
    inputElement.style.boxSizing = 'border-box'; 

    playerNameSpan.replaceWith(inputElement);
    inputElement.focus();

    inputElement.addEventListener('blur', () => {
        updatePlayerName(index, inputElement.value);
    });
    inputElement.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            inputElement.blur();
        } else if (event.key === 'Escape') {
            updatePlayerName(index, currentPlayerName, true); 
        }
    });
}

// Update player name
function updatePlayerName(index, newName, revert = false) {
    const originalName = gameState.players[index].name;
    if (!revert) {
        gameState.players[index].name = newName.trim();
    }
    updatePlayerList();
    updatePlayerLevelsDisplay();
}

// Delete a player
function deletePlayer(index) {
    if (confirm(translations[gameState.currentLanguage].deleteConfirmation)) {
        gameState.players.splice(index, 1);
        updatePlayerList();
        updatePlayerLevelsDisplay();
    }
}

// Update the challenge list in the UI
function updateChallengeList() {
    challengeList.innerHTML = '';
    gameState.challenges
        .filter(challenge => challenge.active)
        .forEach((challenge, index) => {
        const li = document.createElement('li');
        li.classList.add('challenge-list-item');
        li.innerHTML = `
            <span class="challenge-name-item" data-index="${index}" data-challenge-name="${challenge.name}" title="${translations[gameState.currentLanguage].challengeTooltip}">${index + 1}. ${challenge.name}</span>
            <button class="challenge-description-btn" data-index="${index}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                    <circle cx="12" cy="12" r="10" fill="var(--secondary-color)" fill-opacity="0.2"/>
                    <path fill="var(--secondary-color)" d="M12 16a1 1 0 01-1-1V9a1 1 0 012 0v6a1 1 0 01-1 1z"/>
                    <circle cx="12" cy="6" r="1.5" fill="var(--secondary-color)"/>
                </svg>
            </button>
            <input type="checkbox" class="challenge-checkbox" data-index="${index}">
            <div class="challenge-description-text" id="challenge-description-${index}">
                ${challenge.description}
            </div>
        `;
        challengeList.appendChild(li);
    });

    document.querySelectorAll('.challenge-name-item').forEach(challengeNameSpan => {
        challengeNameSpan.addEventListener('dblclick', (e) => {
            const index = e.target.getAttribute('data-index');
            const currentChallengeName = gameState.challenges[index].name;

            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.value = currentChallengeName;
            inputElement.classList.add('edit-challenge-input');

            challengeNameSpan.replaceWith(inputElement);
            inputElement.focus();

            inputElement.addEventListener('blur', () => {
                updateChallengeName(index, inputElement.value);
            });
            inputElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    inputElement.blur(); 
                } else if (event.key === 'Escape') {
                    updateChallengeName(index, currentChallengeName, true);
                }
            });
        });
    });

    document.querySelectorAll('.challenge-description-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            const listItem = e.target.closest('.challenge-list-item');
            const descriptionTextElement = listItem.querySelector('.challenge-description-text');
            const currentDescription = gameState.challenges[index].description;

            const textareaElement = document.createElement('textarea');
            textareaElement.value = currentDescription;
            textareaElement.classList.add('edit-challenge-input'); 
            textareaElement.rows = 3; 

            descriptionTextElement.innerHTML = ''; 
            descriptionTextElement.appendChild(textareaElement);
            descriptionTextElement.style.display = 'block'; 

            textareaElement.focus();

            textareaElement.addEventListener('blur', () => {
                updateChallengeDescription(index, textareaElement.value);
            });
            textareaElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault(); 
                    textareaElement.blur();
                } else if (event.key === 'Escape') {
                    updateChallengeDescription(index, currentDescription, true); 
                }
            });
        });
    });
}

function updateChallengeName(index, newName, revert = false) {
    const originalName = gameState.challenges[index].name;
    if (!revert) {
        gameState.challenges[index].name = newName.trim();
    }

    updateChallengeList(); 
    updateCurrentChallengeDisplay(); 
}

function updateChallengeDescription(index, newDescription, revert = false) {
    const originalDescription = gameState.challenges[index].description;
    if (!revert) {
        gameState.challenges[index].description = newDescription.trim();
    }
    updateChallengeList();
}

// Initialize SortableJS for challenge list
Sortable.create(challengeList, {
    handle: 'li',
    draggable: 'li',
    animation: 150,
    onUpdate: function (evt/**Event*/) {
        const newChallenges = [];
        const items = evt.target.children;
        for (let i = 0; i < items.length; i++) {
            const challengeNameSpan = items[i].querySelector('.challenge-name-item');
            const challengeName = challengeNameSpan ? challengeNameSpan.dataset.challengeName : '';
            const originalChallengeObject = gameState.challenges.find(c => c.name === challengeName.trim());
            if (originalChallengeObject) {
                newChallenges.push(originalChallengeObject);
            } else {
                newChallenges.push({ name: challengeName.trim(), active: true });
            }
        }
        gameState.challenges = newChallenges;
        updateCurrentChallengeDisplay();
        updateChallengeList();
    },
});

// Start the game
function startGame() {
    if (gameState.gameStarted) {
        if (!confirm(translations[gameState.currentLanguage].resetConfirmation)) {
            return;
        }
        gameState.players.forEach(player => {
            player.active = true;
        });
    } else {
        if (gameState.players.length === 0) {
            alert(translations[gameState.currentLanguage].noPlayers);
            return;
        }

        if (gameState.challenges.length === 0) {
            alert(translations[gameState.currentLanguage].noChallenges);
            return;
        }
    }

    gameState.gameStarted = true;
    gameState.gameEnded = false;
    gameState.currentChallenge = 0;
    gameState.diceRolledInGame = false;
    gameState.roundsLogData = [];

    gameState.players.forEach(player => {
        player.level = 0;
        player.eliminated = false;
        player.active = true;
    });

    gameState.playerStateHistory = [];
    undoLastRollBtn.disabled = true;

    updateCurrentChallengeDisplay();
    updateStartButtonText();
    rollDiceBtn.disabled = false;
    continueGameBtn.disabled = true;
    diceContainer.innerHTML = '';
    roundResults.innerHTML = '';
    modalDiceContainer.innerHTML = '';
    roundsLog.innerHTML = '';
    playerLevelsList.innerHTML = '';
    updatePlayerLevelsDisplay();
    updatePlayerList(); 
    selectChallengesBtn.disabled = gameState.challenges.length === 0;
}

// Roll dice for each player
function rollDice() {
    if (!rollNoChallengeCheckbox.checked) {
        if (!gameState.gameStarted) return;
    }
 
    if (rollNoChallengeCheckbox.checked) {
        if (!confirm(translations[gameState.currentLanguage].rollNoChallengeWarning)) {
            return; 
        }
        performNoChallengeRoll();
    } else {
        performGameRoll();
    }
}

function performNoChallengeRoll() {
    modalDiceContainer.innerHTML = '';
    openDiceModal();

    const activePlayers = gameState.players.filter(player => !player.eliminated && player.active);

    if (activePlayers.length === 0) {
        alert(translations[gameState.currentLanguage].noActivePlayersAlert || 'No hay jugadores activos para tirar los dados.');
        closeDiceModal();
        return;
    }

    const results = [];
    let maxNameLength = 0;
    const usedValues = new Set(); // Initialize usedValues Set here

    activePlayers.forEach(player => {
        if (player.name.length > maxNameLength) {
            maxNameLength = player.name.length;
        }
        let value;
        if (allowDuplicateRollsCheckbox.checked) {
            value = Math.floor(Math.random() * (gameState.diceMaxValue + 1));
        } else {
            do {
                value = Math.floor(Math.random() * (gameState.diceMaxValue + 1));
            } while (usedValues.has(value));
            usedValues.add(value);
        }
        results.push({ player, value });

        const dice = document.createElement('div');
        dice.className = 'dice dice-rolling';
        dice.innerHTML = `
            <div class="player-name">${player.name}</div>
            <div class="dice-value">?</div>
        `;
        modalDiceContainer.appendChild(dice);
    });

    const diceWidth = Math.max(80, maxNameLength * 10); 
    modalDiceContainer.style.setProperty('--dice-min-width', `${diceWidth}px`);


    rollDiceBtn.disabled = true;

    setTimeout(() => {
        const diceElements = modalDiceContainer.querySelectorAll('.dice');
        diceElements.forEach((dice, index) => {
            dice.classList.remove('dice-rolling');
            dice.querySelector('.dice-value').textContent = results[index].value;
        });

        const minValue = Math.min(...results.map(r => r.value));
        const lowestRollers = results.filter(r => r.value === minValue);

        const maxValue = Math.max(...results.map(r => r.value));
        const highestRollers = results.filter(r => r.value === maxValue);

        diceElements.forEach((dice, i) => {
            if (lowestRollers.some(loser => loser.player === results[i].player)) {
                dice.classList.add('lowest-roll');
                dice.addEventListener('click', () => showDicePopup(results[i].player)); // Add click event listener to loser's dice
            }
            if (highestRollers.some(winner => winner.player === results[i].player) && !dice.classList.contains('lowest-roll')) {
                dice.classList.add('highest-roll');
            }
        });


        rollDiceBtn.disabled = false;
        if (autoCloseModalCheckbox.checked) {
            const timerValue = parseInt(autoCloseTimerInput.value, 10);
            const delay = isNaN(timerValue) || timerValue < 1 ? 5000 : timerValue * 1000;
            setTimeout(closeDiceModal, delay);
        }
    }, 1000);
}

function performGameRoll() {
    gameState.playerStateHistory.push(JSON.parse(JSON.stringify(gameState.players)));

    gameState.diceRolledInGame = true;
    undoLastRollBtn.disabled = false;

    modalDiceContainer.innerHTML = '';

    const activePlayers = gameState.players.filter(player => !player.eliminated && player.active);

    if (activePlayers.length === 1) {
        const player = activePlayers[0];
        player.level++;
        updatePlayerLevelsDisplay();
        if (player.level >= gameState.challenges.length) {
            endGame(player, true);
            currentChallengeDisplay.textContent = `${player.name}: ${translations[gameState.currentLanguage].gameOver} ${translations[gameState.currentLanguage].loser}: ${player.name}`;
        } else {
            gameState.currentChallenge = player.level - 1;
            gameState.currentChallenge = Math.min(gameState.currentChallenge, gameState.challenges.length - 1);
            gameState.currentChallenge = Math.max(0, gameState.currentChallenge);

            const loserNames = activePlayers.map(r => r.player.name).join(', ');
            currentChallengeDisplay.textContent = `${loserNames}: ${gameState.challenges[gameState.currentChallenge].name}`;
        }
        return;
    }

    openDiceModal();

    if (activePlayers.length === 1) {
        endGame(activePlayers[0]);
        return;
    }

    if (activePlayers.length === 0) {
        alert(translations[gameState.currentLanguage].noActivePlayersAlert || 'No hay jugadores activos para tirar los dados.');
        closeDiceModal();
        return;
    }

    const results = [];
    const usedValues = new Set();
    let maxNameLength = 0;

    activePlayers.forEach(player => {
        if (player.name.length > maxNameLength) {
            maxNameLength = player.name.length;
        }
        let value;
        if (allowDuplicateRollsCheckbox.checked) {
            value = Math.floor(Math.random() * (gameState.diceMaxValue + 1));
        } else {
            do {
                value = Math.floor(Math.random() * (gameState.diceMaxValue + 1));
            } while (usedValues.has(value));
            usedValues.add(value);
        }
        results.push({ player, value });

        const dice = document.createElement('div');
        dice.className = 'dice dice-rolling';
        dice.innerHTML = `
            <div class="player-name">${player.name}</div>
            <div class="dice-value">?</div>
        `;
        modalDiceContainer.appendChild(dice);
    });

    const diceWidth = Math.max(80, maxNameLength * 10); 
    modalDiceContainer.style.setProperty('--dice-min-width', `${diceWidth}px`);


    rollDiceBtn.disabled = true;

    setTimeout(() => {
        const diceElements = modalDiceContainer.querySelectorAll('.dice');
        diceElements.forEach((dice, index) => {
            dice.classList.remove('dice-rolling');
            dice.querySelector('.dice-value').textContent = results[index].value;
        });

        const minValue = Math.min(...results.map(r => r.value));
        const lowestRollers = results.filter(r => r.value === minValue);

        const maxValue = Math.max(...results.map(r => r.value));
        const highestRollers = results.filter(r => r.value === maxValue);

        if (lowestRollers.length >= 1) {
            lowestRollers.forEach(result => {
                diceElements.forEach((dice, i) => {
                    if (results[i].player === result.player) {
                        dice.classList.add('winner');
                        dice.addEventListener('click', () => showDicePopup(result.player)); // Add click event listener to loser's dice
                    }
                });
                diceElements.forEach((dice, i) => {
                    if (lowestRollers.some(loser => loser.player === results[i].player)) {
                        dice.classList.add('lowest-roll');
                    }
                });
                diceElements.forEach((dice, i) => {
                    if (highestRollers.some(winner => winner.player === results[i].player) && !dice.classList.contains('lowest-roll')) {
                        dice.classList.add('highest-roll');
                    }
                });

                result.player.level++;

                if (result.player.level >= gameState.challenges.length) {
                    endGame(result.player, true);
                    return;
                }
            });

            showRoundResults(results, lowestRollers);

            if (gameState.gameStarted) {
                const loserLevel = Math.max(...lowestRollers.map(r => r.player.level));
                gameState.currentChallenge = loserLevel - 1;

                gameState.currentChallenge = Math.min(gameState.currentChallenge, gameState.challenges.length - 1);
                gameState.currentChallenge = Math.max(0, gameState.currentChallenge);

                const challengeTexts = lowestRollers.map(loser => {
                    const challengeIndex = Math.min(loser.player.level - 1, gameState.challenges.length - 1);
                    const activeChallenges = gameState.challenges.filter(c => c.active);
                    const challenge = activeChallenges[challengeIndex];
                    return `<span class="player-challenge" data-description="${challenge.description}">${loser.player.name}</span>: ${challenge.name}`;
                });
                
                currentChallengeDisplay.innerHTML = challengeTexts.join('<br>');
                rollDiceBtn.disabled = false;
                updatePlayerLevelsDisplay();
            }
        }
        if (autoCloseModalCheckbox.checked) {
            const timerValue = parseInt(autoCloseTimerInput.value, 10);
            const delay = isNaN(timerValue) || timerValue < 1 ? 5000 : timerValue * 1000;
            setTimeout(closeDiceModal, delay);
        }
    }, 1000);
}

// Show round results
function showRoundResults(results, losers) {
    roundResults.innerHTML = '';

    const roundEntry = document.createElement('div');
    roundEntry.classList.add('round-entry');
    let roundResultsHTML = '';

    results.forEach(result => {
        const isLoser = losers.includes(result);
        const playerName = result.player.name;
        const diceValue = result.value;
        const playerResultLine = `<p><span class="${isLoser ? 'loser' : ''}">${playerName}</span>: ${diceValue}</p>`;
        roundResultsHTML += playerResultLine;
    });
    roundEntry.innerHTML = roundResultsHTML;
    roundsLog.prepend(roundEntry);

    gameState.roundsLogData.push({
        results: results.map(r => ({
            playerName: r.player.name,
            value: r.value,
            isLoser: losers.includes(r)
        })),
        html: roundResultsHTML,
        diceResult: modalDiceContainer.innerHTML // Store the dice result HTML
    });
}

// End the game
function endGame(player, isLoser = false) {
    gameState.gameStarted = false;
    gameState.gameEnded = true;

    const activeChallenges = gameState.challenges.filter(c => c.active);
    if (activeChallenges.length > 0) {
        const losers = gameState.players.filter(p => (p.level >= activeChallenges.length || !p.active) && p.active);
        const challengeTexts = losers.map(loser => {
            const challengeIndex = Math.min(loser.level - 1, activeChallenges.length - 1);
            const challenge = activeChallenges[challengeIndex];
            return `<span class="player-challenge" data-description="${challenge.description}">${loser.name}</span>: ${challenge.name} <span class="loser-text">(${translations[gameState.currentLanguage].loser})</span>`;
        });

        currentChallengeDisplay.innerHTML = challengeTexts.join('<br>');
    } else {
        currentChallengeDisplay.textContent = "-";
    }

    updateStartButtonText();
    rollDiceBtn.disabled = true;
    continueGameBtn.disabled = false;
    selectChallengesBtn.disabled = gameState.challenges.length === 0;
    undoLastRollBtn.disabled = gameState.playerStateHistory.length === 0;
}

// Function to continue game
function continueGame() {
    if (gameState.challenges.length === 0 || 
        gameState.players.some(p => p.level >= gameState.challenges.length && p.active && !p.eliminated)) {
        alert(translations[gameState.currentLanguage].addMoreChallenges);
        return;
    }
    
    gameState.gameEnded = false;
    continueGameBtn.disabled = true;
    const activePlayers = gameState.players.filter(player => !player.eliminated && player.active);
    
    if (activePlayers.length > 0) {
        gameState.gameStarted = true;
        rollDiceBtn.disabled = false;
        
        const maxLevel = Math.max(...activePlayers.map(player => player.level));
        gameState.currentChallenge = Math.min(maxLevel, gameState.challenges.length - 1);
        
        currentChallengeDisplay.textContent = translations[gameState.currentLanguage].continuePlaying;
        updateStartButtonText();
        updatePlayerLevelsDisplay(); 
    }
}

// Toggle theme (dark/light mode)
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    gameState.isDarkMode = document.body.classList.contains('dark-mode');
}

// Toggle language
function toggleLanguage() {
    gameState.currentLanguage = gameState.currentLanguage === 'es' ? 'en' : 'es';
    languageToggleBtn.textContent = gameState.currentLanguage.toUpperCase();
    updateLanguage();
}

// Update all text based on selected language
function updateLanguage() {
    const lang = gameState.currentLanguage;

    document.getElementById('game-title').textContent = translations[lang].gameTitle;
    document.getElementById('players-title').textContent = translations[lang].playersTitle;
    document.getElementById('challenges-title').textContent = translations[lang].challengesTitle;
    document.getElementById('game-status-title').textContent = translations[lang].gameStatusTitle;
    document.getElementById('add-player').textContent = translations[lang].addPlayer;
    document.getElementById('add-challenge').textContent = translations[lang].addChallenge;
    updateStartButtonText();
    document.getElementById('roll-dice').textContent = translations[lang].rollDice;
    document.getElementById('results-title').textContent = translations[lang].resultsTitle;
    document.getElementById('current-challenge-label').textContent = translations[lang].currentChallengeLabel;
    document.getElementById('player-name').placeholder = translations[lang].playerNamePlaceholder;
    document.getElementById('challenge-name').placeholder = translations[lang].challengeNamePlaceholder;
    document.getElementById('challenge-description').placeholder = translations[lang].challengeDescriptionPlaceholder;
    document.getElementById('footer-text').textContent = translations[lang].footerText;
    document.getElementById('save-game-btn').textContent = translations[lang].saveGame;
    document.getElementById('load-game-btn').textContent = translations[lang].loadGame;
    document.getElementById('reset-game-btn').textContent = translations[lang].resetData;
    document.getElementById('load-challenge-list').textContent = translations[lang].loadChallengeList;
    document.getElementById('continue-game').textContent = translations[lang].continueGame;
    document.getElementById('select-challenges-btn').textContent = translations[lang].selectChallenges;
    document.getElementById('delete-selected-challenges-btn').textContent = translations[lang].deleteSelected;
    document.getElementById('deactivate-selected-challenges-btn').textContent = translations[lang].deactivateSelected;
    document.getElementById('toggle-deactivated-challenges-btn').textContent = translations[lang].showDeactivated;
    document.getElementById('select-all-challenges-btn').textContent = translations[lang].selectAll;

    const downloadListModalHeader = downloadChallengeListModal.querySelector('.modal-header h2');
    if (downloadListModalHeader) {
        downloadListModalHeader.textContent = translations[lang].downloadListTitle;
    }
    const downloadListModalPrompt = downloadChallengeListModal.querySelector('.modal-body p');
    if (downloadListModalPrompt) {
        downloadListModalPrompt.textContent = translations[lang].downloadListPrompt;
    }
    downloadAllChallengesBtn.textContent = translations[lang].downloadAllChallenges;
    downloadActiveChallengesBtn.textContent = translations[lang].downloadActiveChallenges;
    cancelDownloadListBtn.textContent = translations[lang].cancelDownload;
    downloadSimpleListBtn.textContent = translations[lang].downloadSimpleList;

    const diceRangeLabel = document.getElementById('dice-range-label');
    if (diceRangeLabel) {
        diceRangeLabel.textContent = lang === 'es' ? 'Valor máximo de dados:' : 'Maximum dice value:';
    }

    document.querySelector('label[for="roll-no-challenge-checkbox"]').textContent = translations[lang].rollNoChallengeCheckboxLabel;
    document.querySelector('label[for="auto-close-modal-checkbox"]').textContent = translations[lang].autoCloseModalCheckboxLabel;
    document.querySelector('#auto-close-timer-container label').textContent = translations[lang].autoCloseTimerLabel;
    document.querySelector('label[for="allow-duplicate-rolls-checkbox"]').textContent = translations[lang].allowDuplicateRollsCheckboxLabel;

    // Load Challenge List Modal Translations
    const loadListModalHeader = loadChallengeListModal.querySelector('.modal-header h2');
    if (loadListModalHeader) {
        loadListModalHeader.textContent = translations[lang].loadListTitle;
    }
    const loadListModalPrompt = loadChallengeListModal.querySelector('.modal-body p');
    if (loadListModalPrompt) {
        loadListModalPrompt.textContent = translations[lang].loadListPrompt;
    }
    document.getElementById('load-from-file-btn').textContent = translations[lang].loadFromFile;
    document.getElementById('load-from-simple-list-btn').textContent = translations[lang].loadSimpleList;
    document.getElementById('load-from-text-btn').textContent = translations[lang].pasteText;
    document.getElementById('cancel-load-list-btn').textContent = translations[lang].cancelLoad;
    pasteTextAreaDiv.querySelector('p').textContent = translations[lang].pasteText + ' ' + translations[lang].challengesTitle.toLowerCase() + ' ' + translations[lang].loadListPrompt.slice(0, translations[lang].loadListPrompt.length -1).toLowerCase() + ':';
    document.getElementById('clear-paste-text-btn').textContent = translations[lang].resetData + ' ' + translations[lang].instructionsTitle.toLowerCase();
    document.getElementById('paste-clipboard-text-btn').textContent = translations[lang].pasteClipboard;
    document.getElementById('confirm-paste-btn').textContent = translations[lang].loadWithPastedText;

    // Translate Description and Instructions section
    descriptionInstructionsTitle.textContent = translations[lang].descriptionInstructionsTitle;
    descriptionTitle.textContent = translations[lang].descriptionTitle;
    gameTitleLabel.textContent = translations[lang].gameTitleLabel;
    gameTitleInput.placeholder = translations[lang].gameTitlePlaceholder;
    gameDescription.placeholder = translations[lang].descriptionPlaceholder;
    instructionsTitle.textContent = translations[lang].instructionsTitle;
    gameInstructions.placeholder = translations[lang].instructionsPlaceholder;

    toggleButtons.forEach(button => {
        const header = button.closest('.section-header');
        const targetId = header.getAttribute('data-target');
        const contentSection = document.getElementById(targetId);
        button.textContent = contentSection.classList.contains('collapsed') ? '+' : '-';
    });
    
    updatePlayerList();
    updateChallengeList();
    updateCurrentChallengeDisplay();
    undoLastRollBtn.textContent = translations[lang].undoLastRoll;
    document.getElementById('download-challenge-list-btn').textContent = translations[lang].downloadChallengeList;
    document.getElementById('clear-paste-text-btn').textContent = translations[lang].resetData;
    document.getElementById('paste-clipboard-text-btn').textContent = translations[lang].pasteClipboard;
    document.getElementById('show-last-dice-result').setAttribute('aria-label', lang === 'es' ? 'Mostrar última tirada' : 'Show last roll');
    exitGameBtn.textContent = translations[lang].exitGame;
}

// Update player levels display
function updatePlayerLevelsDisplay() {
    playerLevelsList.innerHTML = ''; 
    if (!gameState.gameStarted) {
        return; 
    }
    gameState.players.forEach(player => {
        const li = document.createElement('li');
        const challengeNumber = player.level + 1;
        const statusClass = player.active ? '' : 'inactive-player';
        const statusText = player.active ? '' : ' (desactivado)';
        li.innerHTML = `<span class="${statusClass}">${player.name}${statusText}: ${translations[gameState.currentLanguage].nextChallenge} ${challengeNumber} / ${gameState.challenges.length}</span>`;
        playerLevelsList.appendChild(li);
    });
}

// Update current challenge display
function updateCurrentChallengeDisplay() {
    if (!gameState.gameStarted || !gameState.diceRolledInGame) {
        currentChallengeDisplay.textContent = translations[gameState.currentLanguage].initialStatus;
        currentChallengeDisplay.dataset.description = gameInstructions.value;
    } else if (gameState.challenges.length > 0) {
        const activeChallenges = gameState.challenges.filter(c => c.active);
        if (activeChallenges.length > 0) {
             const challengeIndex = Math.min(gameState.currentChallenge, activeChallenges.length - 1);
             currentChallengeDisplay.textContent = activeChallenges[challengeIndex].name;
        } else {
            currentChallengeDisplay.textContent = "-";
        }
    } else {
        currentChallengeDisplay.textContent = "-";
    }
}

// Update the Start/Restart button text based on game state
function updateStartButtonText() {
    startGameBtn.textContent = gameState.gameStarted ? 
        gameState.currentLanguage === 'es' ? 'Reiniciar Juego' : translations[gameState.currentLanguage].restartGame 
        : translations[gameState.currentLanguage].startGame;
}

// Open dice results modal
function openDiceModal() {
    modal.style.display = "flex";
    if (autoCloseModalCheckbox.checked) {
        autoCloseTimerContainer.style.display = 'flex';
    } else {
        autoCloseTimerContainer.style.display = 'none';
    }
}

// Close dice results modal
function closeDiceModal() {
    modal.style.display = "none";
    const dicePopup = modal.querySelector('.dice-description-popup');
    if (dicePopup) {
        dicePopup.classList.remove('show');
    }
    showLastDiceResultBtn.disabled = gameState.roundsLogData.length === 0;
}

// Open save game modal
function openSaveGameModal() {
    saveGameModal.style.display = "flex";
}

// Close save game modal
function closeSaveGameModal() {
    saveGameModal.style.display = "none";
}

// Save game data to a file
function saveGameData() {
    const filename = saveFilenameInput.value.trim();
    if (!filename) {
        alert(translations[gameState.currentLanguage].saveFilenameAlert || 'Por favor, introduce un nombre de archivo.');
        return;
    }

    const gameData = {
        gameState: gameState,
        gameTitle: gameTitleInput.value,
        gameDescriptionText: gameDescription.value,
        gameInstructionsText: gameInstructions.value,
        diceMaxValue: gameState.diceMaxValue, 
        allowDuplicateRolls: allowDuplicateRollsCheckbox.checked 
    };
    const gameDataString = JSON.stringify(gameData);
    const blob = new Blob([gameDataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    closeSaveGameModal();
}

// Load game data from a file
function loadGameData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = event => {
            try {
                const loadedData = JSON.parse(event.target.result);
                if (loadedData && loadedData.gameState && loadedData.gameState.players && loadedData.gameState.challenges) {
                    Object.assign(gameState, loadedData.gameState);
                    gameTitleInput.value = loadedData.gameTitle || '';
                    gameDescription.value = loadedData.gameDescriptionText || '';
                    gameInstructions.value = loadedData.gameInstructionsText || '';
                    if (loadedData.diceMaxValue !== undefined) {
                        gameState.diceMaxValue = loadedData.diceMaxValue;
                        diceMaxValueInput.value = gameState.diceMaxValue;
                    }
                    if (loadedData.allowDuplicateRolls !== undefined) {
                        allowDuplicateRollsCheckbox.checked = loadedData.allowDuplicateRolls;
                    }
                    updateUIFromState();
                    updateLanguage();
                    alert(translations[gameState.currentLanguage].gameLoadedSuccessfully || 'Partida cargada con éxito!');
                } else {
                    alert(translations[gameState.currentLanguage].invalidSaveFile || 'Archivo de partida no válido.');
                }
            } catch (error) {
                console.error('Error al cargar la partida:', error);
                alert(translations[gameState.currentLanguage].saveLoadError || 'Error al leer el archivo de partida.');
            }
        };
        reader.onerror = () => {
            alert(translations[gameState.currentLanguage].saveLoadError || 'Error al leer el archivo de partida.');
        };
        reader.readAsText(file);
    };

    input.click();
}

// Load challenges from a text file
function loadChallengeListFromFile() {
    closeLoadChallengeListModal(); 
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt, .docx';

    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = event => {
            loadChallengesFromTextContent(event.target.result);
        };
        reader.onerror = () => {
            alert(translations[gameState.currentLanguage].fileLoadError || 'Error al leer el archivo.');
        };
        reader.readAsText(file);
    };

    input.click();
}

function loadChallengeListFromText() {
    const pastedTextContent = pastedTextInput.value;
    loadChallengesFromTextContent(pastedTextContent);
    closeLoadChallengeListModal();
}

function loadChallengesFromTextContent(fileContent) {
    try {
        const lines = fileContent.split(/\r\n|\r|\n/);
        let challengesFromFile = [];
        let gameTitleFromFile = "";
        let gameDescriptionFromFile = "";
        let gameInstructionsFromFile = "";
        let readingInstructions = false;
        let readingProofToShare = false;
        let currentChallengeName = "";
        let currentChallengeDescription = "";

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();

            if (i === 0 && line !== "") {
                gameTitleFromFile = line;
            } else if (i === 1 && line !== "") {
                gameDescriptionFromFile = line;
            } else if (line === "Initial instructions") {
                readingInstructions = true;
                readingProofToShare = false;
            } else if (readingInstructions && line !== "Instruction") {
                gameInstructionsFromFile = line;
                readingInstructions = false;
            } else if (line === "Instruction") {
                readingProofToShare = false;
                currentChallengeName = lines[i + 1].trim();
                i++; 
            } else if (line === "Proof to share") {
                readingProofToShare = true;
                currentChallengeDescription = lines[i + 1].trim();
                i++; 
                if (currentChallengeName) {
                    challengesFromFile.push({ name: currentChallengeName, active: true, description: currentChallengeDescription });
                    currentChallengeName = "";
                    currentChallengeDescription = "";
                }
            } else if (line.startsWith("Loss nº")) {
            }
        }

        const challengeObjectsFromFile = challengesFromFile;

        if (gameState.challenges.length === 0) {
            gameState.challenges = challengeObjectsFromFile;
            updateChallengeList();
            alert(translations[gameState.currentLanguage].challengesReplaced);
        } else if (confirm(translations[gameState.currentLanguage].replaceChallengesConfirmation)) {
            gameState.challenges = challengeObjectsFromFile;
            updateChallengeList();
            alert(translations[gameState.currentLanguage].challengesReplaced);
        } else if (confirm(translations[gameState.currentLanguage].appendChallengesConfirmation)) {
            gameState.challenges = gameState.challenges.concat(challengeObjectsFromFile);
            updateChallengeList();
            alert(`${translations[gameState.currentLanguage].challengesAdded} ${challengesFromFile.length} ${translations[gameState.currentLanguage].challengesFromFile}`);
        } else {
        }

        if (gameTitleFromFile) {
            gameTitleInput.value = gameTitleFromFile;
        } else {
            gameTitleInput.value = "";
        }
        if (gameDescriptionFromFile) {
            gameDescription.value = gameDescriptionFromFile;
        } else {
            gameDescription.value = "";
        }
        if (gameInstructionsFromFile) {
            gameInstructions.value = gameInstructionsFromFile;
        } else {
            gameInstructions.value = "";
        }
        selectChallengesBtn.disabled = gameState.challenges.length === 0;
        updateCurrentChallengeDisplay();
        updatePlayerLevelsDisplay();

    } catch (error) {
        console.error(translations[gameState.currentLanguage].challengeListLoadError || 'Error al cargar la lista de Challenges:', error);
        alert(translations[gameState.currentLanguage].fileLoadError || 'Error al leer el archivo.');
    }
}

// Update UI based on game state
function updateUIFromState() {
    updatePlayerList();
    updateChallengeList();
    updateCurrentChallengeDisplay();
    updateStartButtonText();
    rollDiceBtn.disabled = !gameState.gameStarted;
    updatePlayerLevelsDisplay();
    selectChallengesBtn.disabled = gameState.challenges.length === 0;

    if (gameState.roundsLogData && gameState.roundsLogData.length > 0) {
        roundsLog.innerHTML = '';
        gameState.roundsLogData.forEach(roundData => {
            const roundEntry = document.createElement('div');
            roundEntry.classList.add('round-entry');
            roundEntry.innerHTML = roundData.html;
            roundsLog.prepend(roundEntry);
        });
    }
    updateDeactivatedChallengeList(); 
    showLastDiceResultBtn.disabled = gameState.roundsLogData.length === 0;
}

// Reset all game data
function resetGameData() {
    if (confirm(translations[gameState.currentLanguage].resetConfirmation)) {
        gameState.players = [];
        gameState.challenges = [];
        gameState.currentChallenge = 0;
        gameState.gameStarted = false;
        gameState.roundsLogData = [];
        gameState.deactivatedChallenges = []; 
        gameState.diceMaxValue = 10; 
        diceMaxValueInput.value = 10; 

        gameTitleInput.value = '';
        gameDescription.value = '';
        gameInstructions.value = '';

        updatePlayerList();
        updateChallengeList();
        updateDeactivatedChallengeList();
        updateCurrentChallengeDisplay();
        updateStartButtonText();
        rollDiceBtn.disabled = true;
        diceContainer.innerHTML = '';
        roundResults.innerHTML = '';
        modalDiceContainer.innerHTML = '';
        roundsLog.innerHTML = '';
        playerLevelsList.innerHTML = '';
        selectChallengesBtn.disabled = gameState.challenges.length === 0;

        rollNoChallengeCheckbox.checked = false; 
        allowDuplicateRollsCheckbox.checked = false; 
    }
}

// Toggle select challenges
function toggleSelectChallenges() {
    challengesSection.classList.toggle('selecting-challenges');
    challengeActionsDiv.style.display = challengesSection.classList.contains('selecting-challenges') ? 'block' : 'none';
    const selectChallengesBtn = document.getElementById('select-challenges-btn');
    selectChallengesBtn.textContent = challengesSection.classList.contains('selecting-challenges') ? translations[gameState.currentLanguage].cancelSelection : translations[gameState.currentLanguage].selectChallenges;

    const selectAllChallengesBtn = document.getElementById('select-all-challenges-btn'); 
    selectAllChallengesBtn.textContent = challengesSection.classList.contains('selecting-challenges') ? translations[gameState.currentLanguage].selectAll : '';
}

// Delete selected challenges
function deleteSelectedChallenges() {
    if (confirm(translations[gameState.currentLanguage].deleteChallengesConfirmation || '¿Estás seguro de que quieres eliminar las pruebas seleccionadas?')) {
        const checkboxes = document.querySelectorAll('.challenge-checkbox:checked');
        let indicesToDelete = [];
        checkboxes.forEach(checkbox => {
            indicesToDelete.push(parseInt(checkbox.dataset.index));
        });

        indicesToDelete.sort((a, b) => b - a);

        indicesToDelete.forEach(index => {
            gameState.challenges.splice(index, 1);
        });

        toggleSelectChallenges(); 
        updateChallengeList();
        updateCurrentChallengeDisplay();
        updatePlayerLevelsDisplay(); 
        selectChallengesBtn.disabled = gameState.challenges.length === 0;
    }
}

// Deactivate selected challenges
function deactivateSelectedChallenges() {
    const checkboxes = document.querySelectorAll('.challenge-checkbox:checked');
    let deactivatedCount = 0;
    checkboxes.forEach(checkbox => {
        const index = parseInt(checkbox.dataset.index);
        if (gameState.challenges[index].active) {
            gameState.challenges[index].active = false;
            gameState.deactivatedChallenges.push(gameState.challenges[index]); 
            deactivatedCount++;
        }
    });

    gameState.challenges = gameState.challenges.filter(challenge => challenge.active);

    toggleSelectChallenges(); 
    updateChallengeList();
    updateDeactivatedChallengeList(); 
    updateCurrentChallengeDisplay();
    updatePlayerLevelsDisplay();
    selectChallengesBtn.disabled = gameState.challenges.length === 0;

    if (deactivatedCount > 0) {
        alert(`${translations[gameState.currentLanguage].challengesDeactivatedAlert || 'Se han desactivado'} ${deactivatedCount} ${translations[gameState.currentLanguage].challengesText || 'pruebas'}.`);
    } else {
        alert(translations[gameState.currentLanguage].noChallengesDeactivatedAlert || 'No se ha seleccionado ninguna prueba para desactivar.');
    }
}

// Update the deactivated challenge list in the UI
function updateDeactivatedChallengeList() {
    deactivatedChallengeList.innerHTML = '';
    if (gameState.deactivatedChallenges.length > 0) {
        gameState.deactivatedChallenges.forEach((challenge, index) => {
            const li = document.createElement('li');
            li.textContent = challenge.name;
            li.addEventListener('dblclick', () => reactivateChallenge(index)); 
            li.title = translations[gameState.currentLanguage].deactivatedChallengeTooltip; 
            deactivatedChallengeList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = translations[gameState.currentLanguage].noDeactivatedChallenges; 
        deactivatedChallengeList.appendChild(li);
    }
}

// Reactivate a deactivated challenge
function reactivateChallenge(index) {
    const challengeToReactivate = gameState.deactivatedChallenges.splice(index, 1)[0]; 
    challengeToReactivate.active = true; 
    gameState.challenges.push(challengeToReactivate); 
    updateChallengeList(); 
    updateDeactivatedChallengeList(); 
    updateCurrentChallengeDisplay(); 
    updatePlayerLevelsDisplay();
    selectChallengesBtn.disabled = gameState.challenges.length === 0;
}

// Toggle visibility of deactivated challenges list
function toggleDeactivatedChallengesList() {
    deactivatedChallengeList.style.display = deactivatedChallengeList.style.display === 'none' ? 'block' : 'none';
    const toggleDeactivatedChallengesBtn = document.getElementById('toggle-deactivated-challenges-btn');
    toggleDeactivatedChallengesBtn.textContent = deactivatedChallengeList.style.display === 'block' ? translations[gameState.currentLanguage].hideDeactivated : translations[gameState.currentLanguage].showDeactivated;
}

// Function to toggle select all checkboxes
function toggleSelectAllChallenges() {
    const checkboxes = document.querySelectorAll('.challenge-checkbox');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked); 
    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked; 
    });

    const selectAllChallengesBtn = document.getElementById('select-all-challenges-btn'); 
    selectAllChallengesBtn.textContent = allChecked ? translations[gameState.currentLanguage].selectAll : translations[gameState.currentLanguage].deselectAll;
}

// Function to open download challenge list modal
function openDownloadChallengeListModal() {
    downloadChallengeListModal.style.display = "flex";
}

// Function to close download challenge list modal
function closeDownloadChallengeListModal() {
    downloadChallengeListModal.style.display = "none";
}

// Function to generate challenge list text based on type (all/active)
function generateChallengeListText(type) {
    let challengesToDownload;
    if (type === 'active') {
        challengesToDownload = gameState.challenges.filter(challenge => challenge.active);
    } else if (type === 'simple') {
        if (gameState.deactivatedChallenges.length > 0 && confirm(translations[gameState.currentLanguage].includeDeactivatedChallenges)) {
            challengesToDownload = [...gameState.challenges, ...gameState.deactivatedChallenges];
        } else {
            challengesToDownload = gameState.challenges;
        }
    }
     else {
        challengesToDownload = [...gameState.challenges, ...gameState.deactivatedChallenges];
    }

    let textContent = "";

    if (type === 'simple') {
        challengesToDownload.forEach(challenge => {
            textContent += challenge.name + "\r\n";
        });
    } else {
        textContent += gameTitleInput.value + "\r\n";
        textContent += gameDescription.value + "\r\n";
        textContent += "Initial instructions\r\n";
        textContent += gameInstructions.value + "\r\n";

        challengesToDownload.forEach(challenge => {
            textContent += "Instruction\r\n";
            textContent += challenge.name + "\r\n";
            textContent += "Proof to share\r\n";
            textContent += challenge.description + "\r\n";
        });
    }


    return textContent;
}

// Function to initiate text file download
function downloadChallengeList(type) {
    const text = generateChallengeListText(type);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `challenge-list-${type}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    closeDownloadChallengeListModal();
}

// Function to undo the last dice roll
function undoLastRoll() {
    if (gameState.playerStateHistory.length === 0) {
        alert(translations[gameState.currentLanguage].noUndoAvailable || 'No hay tirada anterior para anular');
        return;
    }

    if (!confirm(translations[gameState.currentLanguage].undoConfirmation || '¿Estás seguro de que quieres anular la última tirada?')) {
        return;
    }

    gameState.players = gameState.playerStateHistory.pop();
    
    if (gameState.roundsLogData.length > 0) {
        gameState.roundsLogData.pop();
        
        if (roundsLog.firstChild) {
            roundsLog.removeChild(roundsLog.firstChild);
        }
    }
    
    currentChallengeDisplay.textContent = translations[gameState.currentLanguage].repeatRoll;
    
    updatePlayerLevelsDisplay();
    
    if (gameState.gameEnded) {
        gameState.gameStarted = true;
        gameState.gameEnded = false;
        rollDiceBtn.disabled = false;
    }
    
    undoLastRollBtn.disabled = gameState.playerStateHistory.length === 0;
}

// Function to open load challenge list modal
function openLoadChallengeListModal() {
    loadChallengeListModal.style.display = "flex";
    pasteTextAreaDiv.style.display = 'none'; 
}

// Function to close load challenge list modal
function closeLoadChallengeListModal() {
    loadChallengeListModal.style.display = "none";
    pasteTextAreaDiv.style.display = 'none'; 
}

// Function to open paste text area in load challenge list modal
function openPasteTextArea() {
    pasteTextAreaDiv.style.display = 'block';
}

// Load a simple list of challenges where each line is a challenge name
function loadSimpleList() {
    closeLoadChallengeListModal();
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt';

    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = event => {
            try {
                const lines = event.target.result.split(/\r\n|\r|\n/);
                let challengesFromFile = [];

                lines.forEach(line => {
                    const challengeName = line.trim();
                    if (challengeName) {
                        challengesFromFile.push({ 
                            name: challengeName, 
                            active: true, 
                            description: '' 
                        });
                    }
                });

                if (challengesFromFile.length > 0) {
                    if (gameState.challenges.length === 0) {
                        gameState.challenges = challengesFromFile;
                        updateChallengeList();
                        alert(translations[gameState.currentLanguage].challengesReplaced);
                    } else if (confirm(translations[gameState.currentLanguage].replaceChallengesConfirmation)) {
                        gameState.challenges = challengesFromFile;
                        updateChallengeList();
                        alert(translations[gameState.currentLanguage].challengesReplaced);
                    } else if (confirm(translations[gameState.currentLanguage].appendChallengesConfirmation)) {
                        gameState.challenges = gameState.challenges.concat(challengesFromFile);
                        updateChallengeList();
                        alert(`${translations[gameState.currentLanguage].challengesAdded} ${challengesFromFile.length} ${translations[gameState.currentLanguage].challengesFromFile}`);
                    }
                    selectChallengesBtn.disabled = gameState.challenges.length === 0;
                } else {
                    alert(translations[gameState.currentLanguage].noChallengesInFile || 'No se encontraron pruebas en el archivo.');
                }
            } catch (error) {
                console.error(translations[gameState.currentLanguage].simpleListLoadError || 'Error al cargar la lista simple:', error);
                alert(translations[gameState.currentLanguage].fileLoadError || 'Error al leer el archivo.');
            }
        };
        reader.onerror = () => {
            alert(translations[gameState.currentLanguage].fileLoadError || 'Error al leer el archivo.');
        };
        reader.readAsText(file);
    };

    input.click();
}

// Setup the challenge tooltip
function setupChallengeTooltip() {
    let tooltip = document.getElementById('challenge-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'challenge-tooltip';
        currentChallengeDiv.appendChild(tooltip);
    }

    currentChallengeDiv.addEventListener('mouseover', function(event) {
        const playerElement = event.target.closest('.player-challenge');
        if (playerElement && playerElement.dataset.description) {
            tooltip.textContent = playerElement.dataset.description;
            tooltip.style.display = 'block';
            tooltip.style.width = `${currentChallengeDisplay.offsetWidth}px`;
            tooltip.style.left = '50%';
            tooltip.style.top = `${currentChallengeDisplay.getBoundingClientRect().bottom + 5}px`;
            setTimeout(() => tooltip.style.opacity = '1', 10);
        } else if (currentChallengeDisplay.textContent === translations[gameState.currentLanguage].initialStatus &&
                   (event.target === currentChallengeDisplay || event.target.parentElement === currentChallengeDisplay)) {
            tooltip.textContent = gameInstructions.value;
            tooltip.style.display = 'block';
            tooltip.style.left = '50%';
            tooltip.style.top = `${currentChallengeDisplay.getBoundingClientRect().bottom + 5}px`;
            tooltip.style.width = `${currentChallengeDisplay.offsetWidth}px`;
            setTimeout(() => tooltip.style.opacity = '1', 10);
        }
    });

    currentChallengeDiv.addEventListener('mouseout', function(event) {
        if (event.target.closest('.player-challenge') ||
            (currentChallengeDisplay.textContent === translations[gameState.currentLanguage].initialStatus &&
             (event.target === currentChallengeDisplay || event.target.parentElement === currentChallengeDisplay))) {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.style.display = 'none', 300);
        }
    });
}

// Setup the current challenge description popup
function setupCurrentChallengePopup() {
    const challengePopup = document.createElement('div');
    challengePopup.className = 'challenge-description-popup';
    challengePopup.innerHTML = `
        <div class="popup-header">
            <h4 class="popup-title"></h4>
            <button class="popup-close-button">×</button>
        </div>
        <div class="popup-content"></div>
    `;
    currentChallengeDiv.appendChild(challengePopup);
    const popupContent = challengePopup.querySelector('.popup-content');
    const popupTitle = challengePopup.querySelector('.popup-title');
    const closePopupButton = challengePopup.querySelector('.popup-close-button');

    closePopupButton.addEventListener('click', () => {
        challengePopup.classList.remove('show');
    });

    currentChallengeDiv.addEventListener('click', function(event) {
        const playerElement = event.target.closest('.player-challenge');
        if (playerElement && playerElement.dataset.description) {
            popupTitle.textContent = playerElement.textContent.split(':')[0].trim();
            popupContent.textContent = playerElement.dataset.description;
            challengePopup.classList.add('show');
        } else if (currentChallengeDisplay.textContent === translations[gameState.currentLanguage].initialStatus &&
                   (event.target === currentChallengeDisplay || event.target.parentElement === currentChallengeDisplay)) {
            popupTitle.textContent = translations[gameState.currentLanguage].instructionsTitle;
            popupContent.textContent = gameInstructions.value;
            challengePopup.classList.add('show');
        } else {
            challengePopup.classList.remove('show'); // Hide if click outside player or initial status
        }
    });
}

// Setup the dice description popup
function setupDicePopup() {
    const dicePopup = document.createElement('div');
    dicePopup.className = 'dice-description-popup';
    dicePopup.innerHTML = `
        <div class="popup-header">
            <h4 class="popup-title"></h4>
            <button class="popup-close-button">×</button>
        </div>
        <div class="popup-content"></div>
    `;
    modal.appendChild(dicePopup); // Append to modal for overlay effect
    const popupContent = dicePopup.querySelector('.popup-content');
    const popupTitle = dicePopup.querySelector('.popup-title');
    const closePopupButton = dicePopup.querySelector('.popup-close-button');

    closePopupButton.addEventListener('click', () => {
        dicePopup.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            dicePopup.classList.remove('show'); // Close popup when clicking outside modal content
        }
    });
}

// Function to show the dice popup with player's challenge information
function showDicePopup(player) {
    const dicePopup = modal.querySelector('.dice-description-popup');
    const popupTitle = dicePopup.querySelector('.popup-title');
    const popupContent = dicePopup.querySelector('.popup-content');

    const challengeIndex = Math.min(player.level -1 , gameState.challenges.length - 1);
    const currentChallenge = gameState.challenges[challengeIndex];

    popupTitle.textContent = `${player.name}: ${currentChallenge.name}`;
    popupContent.textContent = currentChallenge.description;
    dicePopup.classList.add('show');
}

// Update dice max value
function updateDiceMaxValue() {
    const newValue = parseInt(diceMaxValueInput.value);
    if (isNaN(newValue) || newValue < 0) {
        diceMaxValueInput.value = gameState.diceMaxValue;
        return;
    }

    if (newValue > 25) {
        diceMaxValueInput.value = 25;
        gameState.diceMaxValue = 25;
        return;
    }

    if (!allowDuplicateRollsCheckbox.checked) {
        const activePlayersCount = gameState.players.filter(player => player.active).length;
        if (newValue < activePlayersCount - 1 && activePlayersCount > 1) {
            diceRangeError.textContent = translations[gameState.currentLanguage].diceValueError;
            diceRangeError.style.display = 'block';
            diceMaxValueInput.value = gameState.diceMaxValue; 
            updateRollDiceButtonState();
            return;
        }
    }

    gameState.diceMaxValue = newValue;
    diceRangeError.style.display = 'none';
    updateRollDiceButtonState();
    updateDiceMaxValueInputBasedOnPlayers(); 
}

function updateDiceMaxValueInputBasedOnPlayers() {
    if (!allowDuplicateRollsCheckbox.checked) {
        const activePlayersCount = gameState.players.filter(player => player.active).length;
        const minDiceValue = Math.max(0, activePlayersCount - 1);
        if (gameState.diceMaxValue < minDiceValue) {
            gameState.diceMaxValue = minDiceValue;
            diceMaxValueInput.value = minDiceValue;
        }
        updateRollDiceButtonState();
    }
}

// Update UI based on dice max value and active players
function updateRollDiceButtonState() {
    const activePlayersCount = gameState.players.filter(player => player.active).length;
    rollDiceBtn.disabled = gameState.gameStarted && (!rollNoChallengeCheckbox.checked) && 
        (!allowDuplicateRollsCheckbox.checked && (gameState.diceMaxValue < activePlayersCount - 1 && activePlayersCount > 1));
    
    if (gameState.gameEnded && rollNoChallengeCheckbox.checked) {
        rollDiceBtn.disabled = false;
    }
}

allowDuplicateRollsCheckbox.addEventListener('change', () => {
    if (!allowDuplicateRollsCheckbox.checked) {
        updateDiceMaxValueInputBasedOnPlayers();
    }
    updateRollDiceButtonState(); 
});

const originalUpdatePlayerList = updatePlayerList;
updatePlayerList = function() { originalUpdatePlayerList.apply(this, arguments); updateDiceMaxValueInputBasedOnPlayers(); updateRollDiceButtonState(); }

function toggleAutoCloseTimer() {
    autoCloseTimerContainer.style.display = autoCloseModalCheckbox.checked ? 'flex' : 'none';
}

function clearPastedText() {
    pastedTextInput.value = '';
}

async function pasteFromClipboard() {
    try {
        const text = await navigator.clipboard.readText();
        pastedTextInput.value = text;
    } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
        alert('Error al leer el portapapeles. Asegúrate de que tu navegador permite el acceso al portapapeles.');
    }
}

function showLastDiceResult() {
    if (gameState.roundsLogData.length === 0) {
        return;
    }
    
    const lastRound = gameState.roundsLogData[gameState.roundsLogData.length - 1];
    modalDiceContainer.innerHTML = lastRound.diceResult;

    const diceElements = modalDiceContainer.querySelectorAll('.dice');
    diceElements.forEach((dice, i) => {
        if (dice.classList.contains('lowest-roll')) {
            const playerNameDiv = dice.querySelector('.player-name');
            if (playerNameDiv) {
                const playerName = playerNameDiv.textContent;
                const player = gameState.players.find(p => p.name === playerName);
                if (player) {
                    dice.addEventListener('click', () => showDicePopup(player));
                }
            }
        }
    });
    
    openDiceModal();
    
    if (autoCloseModalCheckbox.checked) {
        autoCloseTimerContainer.style.display = 'flex';
    } else {
        autoCloseTimerContainer.style.display = 'none';
    }
}

init();
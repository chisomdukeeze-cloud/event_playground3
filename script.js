/**
 * 20 STEPS DATA CONFIGURATION
 * Each object contains event definition, instructions, widget template, and validation regex if applicable.
 */
const EVENT_STEPS = [
    {
        id: 1,
        name: "click",
        title: "1. Click Event ('click')",
        instructions: "Click the primary action button below to trigger the standard mouse click event.",
        widgetHtml: `
            <button id="target-1" class="px-6 py-3 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition shadow-lg shadow-indigo-600/30 flex items-center gap-2 cursor-pointer">
                <i class="fa-solid fa-hand-pointer"></i> Click Me!
            </button>
        `,
        targetId: "target-1"
    },
    {
        id: 2,
        name: "dblclick",
        title: "2. Double Click Event ('dblclick')",
        instructions: "Double-click rapidly inside the target card area below.",
        widgetHtml: `
            <div id="target-2" class="w-full max-w-sm p-6 rounded-xl border-2 border-dashed border-indigo-500/50 bg-indigo-950/20 text-center cursor-pointer select-none hover:bg-indigo-900/30 transition">
                <i class="fa-solid fa-mouse text-2xl text-indigo-400 mb-2"></i>
                <div class="text-sm font-bold text-slate-200">Double-Click This Card</div>
                <div class="text-xs text-slate-400 mt-1">Perform 2 quick mouse clicks</div>
            </div>
        `,
        targetId: "target-2"
    },
    {
        id: 3,
        name: "contextmenu",
        title: "3. Right Click Event ('contextmenu')",
        instructions: "Right-click inside the designated zone (the browser default context menu is safely intercepted).",
        widgetHtml: `
            <div id="target-3" class="w-full max-w-sm p-6 rounded-xl bg-slate-800 border border-slate-700 text-center cursor-context-menu select-none hover:border-indigo-500/50 transition">
                <i class="fa-solid fa-bars-staggered text-2xl text-amber-400 mb-2"></i>
                <div class="text-sm font-bold text-slate-200">Right-Click Zone</div>
                <div class="text-xs text-slate-400 mt-1">Press mouse right button here</div>
            </div>
        `,
        targetId: "target-3"
    },
    {
        id: 4,
        name: "mouseover",
        title: "4. Mouse Over Event ('mouseover')",
        instructions: "Hover your mouse pointer inside the target box below.",
        widgetHtml: `
            <div id="target-4" class="w-full max-w-sm p-6 rounded-xl bg-slate-800 border border-slate-700 text-center transition hover:bg-slate-700/60">
                <i class="fa-solid fa-arrow-pointer text-2xl text-cyan-400 mb-2"></i>
                <div class="text-sm font-bold text-slate-200">Hover Mouse Inside</div>
                <div class="text-xs text-slate-400 mt-1">Move cursor across boundary</div>
            </div>
        `,
        targetId: "target-4"
    },
    {
        id: 5,
        name: "mouseout",
        title: "5. Mouse Out Event ('mouseout')",
        instructions: "Move your mouse cursor into the box, and then move it back outside.",
        widgetHtml: `
            <div id="target-5" class="w-full max-w-sm p-6 rounded-xl bg-slate-800 border border-slate-700 text-center transition hover:border-cyan-400">
                <i class="fa-solid fa-person-walking-arrow-right text-2xl text-rose-400 mb-2"></i>
                <div class="text-sm font-bold text-slate-200">Move Cursor OUT of Box</div>
                <div class="text-xs text-slate-400 mt-1">Hover in first, then exit boundary</div>
            </div>
        `,
        targetId: "target-5"
    },
    {
        id: 6,
        name: "mousedown",
        title: "6. Mouse Down Event ('mousedown')",
        instructions: "Press and HOLD your mouse button down over the button.",
        widgetHtml: `
            <button id="target-6" class="px-6 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition active:bg-amber-500 cursor-pointer flex items-center gap-2">
                <i class="fa-solid fa-circle-down"></i> Press & Hold Mouse Button
            </button>
        `,
        targetId: "target-6"
    },
    {
        id: 7,
        name: "mouseup",
        title: "7. Mouse Up Event ('mouseup')",
        instructions: "Press down and release the mouse button on the trigger element.",
        widgetHtml: `
            <button id="target-7" class="px-6 py-3 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-500 transition cursor-pointer flex items-center gap-2">
                <i class="fa-solid fa-circle-up"></i> Release Mouse Button
            </button>
        `,
        targetId: "target-7"
    },
    {
        id: 8,
        name: "wheel",
        title: "8. Scroll Wheel Event ('wheel')",
        instructions: "Scroll your mouse scroll wheel (or touchpad scroll) inside the scroll box below.",
        widgetHtml: `
            <div id="target-8" class="w-full max-w-sm h-28 p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-y-auto text-center font-mono-code text-xs text-slate-400">
                <p class="py-2">-- Scroll wheel up/down here --</p>
                <p class="py-2 text-slate-500">Line 1: Keep scrolling...</p>
                <p class="py-2 text-slate-500">Line 2: Keep scrolling...</p>
                <p class="py-2 text-slate-500">Line 3: Keep scrolling...</p>
                <p class="py-2 text-slate-500">Line 4: Bottom reached!</p>
            </div>
        `,
        targetId: "target-8"
    },
    {
        id: 9,
        name: "keydown",
        title: "9. Key Down Event ('keydown')",
        instructions: "Click into the text input and press any key on your keyboard.",
        widgetHtml: `
            <div class="w-full max-w-sm">
                <input type="text" id="target-9" placeholder="Click & press any key..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-mono-code">
            </div>
        `,
        targetId: "target-9"
    },
    {
        id: 10,
        name: "keyup",
        title: "10. Key Up Event ('keyup')",
        instructions: "Click into the text field, press down, and release a key on your keyboard.",
        widgetHtml: `
            <div class="w-full max-w-sm">
                <input type="text" id="target-10" placeholder="Release key inside here..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-mono-code">
            </div>
        `,
        targetId: "target-10"
    },
    {
        id: 11,
        name: "input",
        title: "11. Input Event with Regex Validation ('input')",
        instructions: "Type inside the Promo Code input. A Regex validation rule <code class='font-mono-code text-xs text-cyan-300'>/^[A-Z]{3}-\\d{4}$/</code> will evaluate your input in real time.",
        widgetHtml: `
            <div class="w-full max-w-sm flex flex-col gap-2">
                <label class="text-xs text-slate-400 flex justify-between">
                    <span>Promo Code Format: <code class="text-slate-200">ABC-1234</code></span>
                    <span id="regex-badge" class="font-bold text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">Awaiting input</span>
                </label>
                <input type="text" id="target-11" placeholder="Type e.g. PRO-2026" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-mono-code">
            </div>
        `,
        targetId: "target-11"
    },
    {
        id: 12,
        name: "focus",
        title: "12. Focus Event ('focus')",
        instructions: "Click inside (or TAB into) the input box below to focus it.",
        widgetHtml: `
            <div class="w-full max-w-sm">
                <input type="text" id="target-12" placeholder="Click here to focus..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500">
            </div>
        `,
        targetId: "target-12"
    },
    {
        id: 13,
        name: "blur",
        title: "13. Blur Event ('blur')",
        instructions: "Click inside the input box to focus it, then click anywhere outside to trigger 'blur'.",
        widgetHtml: `
            <div class="w-full max-w-sm flex flex-col gap-2">
                <input type="text" id="target-13" placeholder="Focus first, then click outside..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500">
                <button type="button" class="text-xs text-slate-500 hover:text-slate-300">Click this line to lose focus</button>
            </div>
        `,
        targetId: "target-13"
    },
    {
        id: 14,
        name: "select",
        title: "14. Text Select Event ('select')",
        instructions: "Highlight or select a portion of text inside the text input below.",
        widgetHtml: `
            <div class="w-full max-w-sm">
                <input type="text" id="target-14" value="Highlight this sample phrase" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500">
            </div>
        `,
        targetId: "target-14"
    },
    {
        id: 15,
        name: "copy",
        title: "15. Clipboard Copy Event ('copy')",
        instructions: "Copy text from the input field below (Ctrl+C or right-click -> Copy).",
        widgetHtml: `
            <div class="w-full max-w-sm">
                <input type="text" id="target-15" value="Copy this secret snippet" readonly class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer">
            </div>
        `,
        targetId: "target-15"
    },
    {
        id: 16,
        name: "paste",
        title: "16. Clipboard Paste Event ('paste')",
        instructions: "Paste any text snippet into the input field below (Ctrl+V or right-click -> Paste).",
        widgetHtml: `
            <div class="w-full max-w-sm">
                <input type="text" id="target-16" placeholder="Paste copied text here..." class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500">
            </div>
        `,
        targetId: "target-16"
    },
    {
        id: 17,
        name: "change",
        title: "17. Selection Change Event ('change')",
        instructions: "Select a different option from the dropdown menu.",
        widgetHtml: `
            <div class="w-full max-w-sm">
                <select id="target-17" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer">
                    <option value="">-- Select an Event Category --</option>
                    <option value="mouse">Mouse Events</option>
                    <option value="keyboard">Keyboard Events</option>
                    <option value="form">Form Events</option>
                </select>
            </div>
        `,
        targetId: "target-17"
    },
    {
        id: 18,
        name: "submit",
        title: "18. Form Submit Event ('submit')",
        instructions: "Click 'Submit' to send the form (page refresh is automatically prevented).",
        widgetHtml: `
            <form id="target-18" class="w-full max-w-sm flex items-center gap-2">
                <input type="text" required placeholder="Name..." value="Developer" class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-indigo-500">
                <button type="submit" class="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 cursor-pointer">Submit</button>
            </form>
        `,
        targetId: "target-18"
    },
    {
        id: 19,
        name: "reset",
        title: "19. Form Reset Event ('reset')",
        instructions: "Click the 'Reset' button to restore the form field values.",
        widgetHtml: `
            <form id="target-19" class="w-full max-w-sm flex flex-col gap-3">
                <input type="text" value="Modified Form Value" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none">
                <button type="reset" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 cursor-pointer">Reset Form</button>
            </form>
        `,
        targetId: "target-19"
    },
    {
        id: 20,
        name: "toggle",
        title: "20. Details Toggle Event ('toggle')",
        instructions: "Click the summary element to toggle open or close the HTML <details> box.",
        widgetHtml: `
            <details id="target-20" class="w-full max-w-sm p-4 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-xs text-slate-300">
                <summary class="font-bold text-indigo-400 select-none">Click to Toggle Secret Content</summary>
                <p class="mt-2 text-slate-400 leading-relaxed border-t border-slate-800 pt-2">
                    🎉 You expanded the details element and triggered the final 20th DOM event!
                </p>
            </details>
        `,
        targetId: "target-20"
    }
];

// STATE MANAGEMENT
let currentStepIndex = 0; // 0 to 19
const completedSteps = new Set();
const stepLogs = Array.from({ length: 20 }, () => []);
let totalGlobalLogs = 0;

// PROMO CODE REGEX VALIDATOR: 3 Uppercase letters, hyphen, 4 numbers (e.g. ABC-1234)
const PROMO_REGEX = /^[A-Z]{3}-\d{4}$/;

// DOM ELEMENTS
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const stepsPillBar = document.getElementById('steps-pill-bar');

const modalStepBadge = document.getElementById('modal-step-badge');
const modalEventTag = document.getElementById('modal-event-tag');
const targetStatusBadge = document.getElementById('target-status-badge');
const statusIcon = document.getElementById('status-icon');
const statusText = document.getElementById('status-text');

const modalTitle = document.getElementById('modal-title');
const modalInstructions = document.getElementById('modal-instructions');
const widgetContainer = document.getElementById('widget-container');

const modalLogList = document.getElementById('modal-log-list');
const logCountText = document.getElementById('log-count');
const btnClearLog = document.getElementById('btn-clear-log');

const btnPrevStep = document.getElementById('btn-prev-step');
const btnNextStep = document.getElementById('btn-next-step');

const mainContentArea = document.getElementById('main-content-area');
const stepModal = document.getElementById('step-modal');
const victoryModal = document.getElementById('victory-modal');
const victoryTotalLogs = document.getElementById('victory-total-logs');
const victoryEventGrid = document.getElementById('victory-event-grid');
const btnRestartQuest = document.getElementById('btn-restart-quest');

/**
 * Initializes step Pills Navigation Bar
 */
function renderPillBar() {
    stepsPillBar.innerHTML = '';
    EVENT_STEPS.forEach((step, idx) => {
        const isCompleted = completedSteps.has(idx);
        const isActive = idx === currentStepIndex;

        const pill = document.createElement('button');
        pill.className = `px-3 py-1.5 rounded-lg text-xs font-mono-code font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
            isActive 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-400' 
                : isCompleted 
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-700/50 hover:bg-emerald-900/50' 
                    : 'bg-slate-900 text-slate-500 border border-slate-800 hover:bg-slate-800'
        }`;

        let icon = isCompleted 
            ? '<i class="fa-solid fa-check text-[10px]"></i>' 
            : `<span class="opacity-60">${idx + 1}.</span>`;

        pill.innerHTML = `${icon} <span>'${step.name}'</span>`;
        pill.addEventListener('click', () => {
            if (isCompleted || idx <= currentStepIndex || completedSteps.has(idx - 1)) {
                loadStep(idx);
            }
        });

        stepsPillBar.appendChild(pill);
    });
}

/**
 * Updates global header progress bar
 */
function updateProgress() {
    const completedCount = completedSteps.size;
    const percentage = Math.round((completedCount / 20) * 100);
    
    progressBar.style.width = `${Math.max(5, percentage)}%`;
    progressText.textContent = `Step ${currentStepIndex + 1} of 20 (${percentage}%)`;
    
    renderPillBar();
}

/**
 * Logs an event for the active step
 */
function logStepEvent(eventName, targetName, detail = '') {
    totalGlobalLogs++;
    const time = new Date().toLocaleTimeString().split(' ')[0];
    
    const logEntry = { time, eventName, targetName, detail };
    stepLogs[currentStepIndex].push(logEntry);

    renderLogsForActiveStep();

    // Check if this matches the step's target event
    const currentStepData = EVENT_STEPS[currentStepIndex];
    if (eventName === currentStepData.name) {
        markStepCompleted();
    }
}

/**
 * Renders the event logs inside the overlay modal
 */
function renderLogsForActiveStep() {
    const logs = stepLogs[currentStepIndex];
    logCountText.textContent = `${logs.length} logged`;

    if (logs.length === 0) {
        modalLogList.innerHTML = `<div class="text-slate-600 text-center py-8 italic text-[11px]">No events captured yet for this step...</div>`;
        return;
    }

    modalLogList.innerHTML = logs.map(l => `
        <div class="flex items-start gap-2 py-1 border-b border-slate-800/60 text-[11px] animate-pop">
            <span class="text-slate-500">[${l.time}]</span>
            <span class="text-rose-400 font-bold">'${l.eventName}'</span>
            <span class="text-amber-300">#${l.targetName}</span>
            ${l.detail ? `<span class="text-slate-400 truncate">(${l.detail})</span>` : ''}
        </div>
    `).join('');

    modalLogList.scrollTop = modalLogList.scrollHeight;
}

/**
 * Clear Log button listener for current overlay
 */
btnClearLog.addEventListener('click', () => {
    stepLogs[currentStepIndex] = [];
    renderLogsForActiveStep();
});

/**
 * Marks current step as detected and completed
 */
function markStepCompleted() {
    if (!completedSteps.has(currentStepIndex)) {
        completedSteps.add(currentStepIndex);
    }

    // Update status indicator badge
    targetStatusBadge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 animate-pop';
    statusIcon.className = 'fa-solid fa-circle-check text-emerald-400';
    statusText.textContent = `Target '${EVENT_STEPS[currentStepIndex].name}' Detected! ✅`;

    // Enable Next Event button
    btnNextStep.disabled = false;
    btnNextStep.classList.add('glow-active');

    updateProgress();
}

/**
 * Loads and binds step content and listeners
 */
function loadStep(index) {
    currentStepIndex = index;
    const stepData = EVENT_STEPS[index];

    // Render Header
    modalStepBadge.textContent = `Event ${stepData.id} of 20`;
    modalEventTag.textContent = `'${stepData.name}'`;
    modalTitle.textContent = stepData.title;
    modalInstructions.innerHTML = stepData.instructions;

    // Render Widget
    widgetContainer.innerHTML = stepData.widgetHtml;

    // Update Status Badge State
    const isCompleted = completedSteps.has(index);
    if (isCompleted) {
        targetStatusBadge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/40';
        statusIcon.className = 'fa-solid fa-circle-check text-emerald-400';
        statusText.textContent = `Target '${stepData.name}' Detected! ✅`;
        btnNextStep.disabled = false;
        btnNextStep.classList.add('glow-active');
    } else {
        targetStatusBadge.className = 'flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30';
        statusIcon.className = 'fa-solid fa-spinner fa-spin';
        statusText.textContent = `Waiting for '${stepData.name}' event...`;
        btnNextStep.disabled = true;
        btnNextStep.classList.remove('glow-active');
    }

    // Update Prev Button
    btnPrevStep.disabled = index === 0;

    // Render logs
    renderLogsForActiveStep();

    // Update Progress bar pills
    updateProgress();

    // Bind Event Listener to Target Widget
    bindTargetEventListener(stepData);
}

/**
 * Dynamic Event Listener Binding Logic
 */
function bindTargetEventListener(stepData) {
    const el = document.getElementById(stepData.targetId);
    if (!el) return;

    const eventName = stepData.name;

    switch (eventName) {
        case 'click':
            el.addEventListener('click', () => logStepEvent('click', 'target-1', 'Button clicked'));
            break;

        case 'dblclick':
            el.addEventListener('dblclick', () => logStepEvent('dblclick', 'target-2', 'Double click fired'));
            break;

        case 'contextmenu':
            el.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                logStepEvent('contextmenu', 'target-3', 'Right-click menu intercepted');
            });
            break;

        case 'mouseover':
            el.addEventListener('mouseover', () => logStepEvent('mouseover', 'target-4', 'Hover entered element'));
            break;

        case 'mouseout':
            el.addEventListener('mouseout', () => logStepEvent('mouseout', 'target-5', 'Hover exited element'));
            break;

        case 'mousedown':
            el.addEventListener('mousedown', () => logStepEvent('mousedown', 'target-6', 'Mouse button pressed down'));
            break;

        case 'mouseup':
            el.addEventListener('mouseup', () => logStepEvent('mouseup', 'target-7', 'Mouse button released'));
            break;

        case 'wheel':
            el.addEventListener('wheel', (e) => {
                logStepEvent('wheel', 'target-8', `Scroll deltaY: ${Math.round(e.deltaY)}`);
            });
            break;

        case 'keydown':
            el.addEventListener('keydown', (e) => {
                logStepEvent('keydown', 'target-9', `Key: "${e.key}"`);
            });
            break;

        case 'keyup':
            el.addEventListener('keyup', (e) => {
                logStepEvent('keyup', 'target-10', `Key: "${e.key}"`);
            });
            break;

        case 'input':
            const regexBadge = document.getElementById('regex-badge');
            el.addEventListener('input', (e) => {
                const val = e.target.value.trim();
                const isValid = PROMO_REGEX.test(val);

                if (regexBadge) {
                    if (isValid) {
                        regexBadge.textContent = 'MATCH: Valid Promo!';
                        regexBadge.className = 'font-bold text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
                    } else {
                        regexBadge.textContent = 'Invalid Format (ABC-1234)';
                        regexBadge.className = 'font-bold text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40';
                    }
                }

                logStepEvent('input', 'target-11', `Val: "${val}" | Regex: ${isValid ? 'PASS' : 'FAIL'}`);
            });
            break;

        case 'focus':
            el.addEventListener('focus', () => logStepEvent('focus', 'target-12', 'Input focused'));
            break;

        case 'blur':
            el.addEventListener('blur', () => logStepEvent('blur', 'target-13', 'Input blurred'));
            break;

        case 'select':
            el.addEventListener('select', () => logStepEvent('select', 'target-14', 'Text selection highlighted'));
            break;

        case 'copy':
            el.addEventListener('copy', () => logStepEvent('copy', 'target-15', 'Text copied to clipboard'));
            break;

        case 'paste':
            el.addEventListener('paste', () => logStepEvent('paste', 'target-16', 'Text pasted from clipboard'));
            break;

        case 'change':
            el.addEventListener('change', (e) => logStepEvent('change', 'target-17', `Option: "${e.target.value}"`));
            break;

        case 'submit':
            el.addEventListener('submit', (e) => {
                e.preventDefault();
                logStepEvent('submit', 'target-18', 'Form submit default prevented');
            });
            break;

        case 'reset':
            el.addEventListener('reset', () => logStepEvent('reset', 'target-19', 'Form fields reset'));
            break;

        case 'toggle':
            el.addEventListener('toggle', (e) => {
                const isOpen = el.open;
                logStepEvent('toggle', 'target-20', `Details state: ${isOpen ? 'Opened' : 'Closed'}`);
            });
            break;
    }
}

/**
 * Navigation button click handlers
 */
btnNextStep.addEventListener('click', () => {
    if (currentStepIndex < 19) {
        loadStep(currentStepIndex + 1);
    } else {
        showVictoryModal();
    }
});

btnPrevStep.addEventListener('click', () => {
    if (currentStepIndex > 0) {
        loadStep(currentStepIndex - 1);
    }
});

/**
 * Shows the victory / completion summary screen
 */
function showVictoryModal() {
    stepModal.classList.add('hidden');
    victoryModal.classList.remove('hidden');

    victoryTotalLogs.textContent = totalGlobalLogs;

    victoryEventGrid.innerHTML = EVENT_STEPS.map(s => `
        <div class="px-2.5 py-1.5 rounded bg-slate-800/80 border border-emerald-500/30 flex items-center justify-between">
            <span class="text-emerald-300 font-bold">'${s.name}'</span>
            <i class="fa-solid fa-check text-emerald-400 text-[10px]"></i>
        </div>
    `).join('');
}

/**
 * Restart Quest
 */
btnRestartQuest.addEventListener('click', () => {
    completedSteps.clear();
    stepLogs.forEach(l => l.length = 0);
    totalGlobalLogs = 0;

    victoryModal.classList.add('hidden');
    stepModal.classList.remove('hidden');

    loadStep(0);
});

// INITIAL LOAD
window.addEventListener('DOMContentLoaded', () => {
    loadStep(0);
});
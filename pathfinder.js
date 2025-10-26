// Store all from values for filtering
let allFromValues = [];
let chosenFromValues = [];

document.addEventListener('DOMContentLoaded', function() {
    populateSelects();
    setupSearchFilter();
    setupDualListSelection();
});

function populateSelects() {
    const fromSet = new Set();
    pathData.forEach(item => {
        fromSet.add(item.from);
    });
    allFromValues = Array.from(fromSet).sort();
    chosenFromValues = [];

    const toSet = new Set();
    pathData.forEach(item => {
        toSet.add(item.to);
    });
    const toValues = Array.from(toSet).sort();

    updateAvailableList(allFromValues);
    updateChosenList();
    
    const toSelect = document.getElementById('toSelect');
    toSelect.innerHTML = '<option value="">-- Select Target --</option>';
    toValues.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        toSelect.appendChild(option);
    });
}

function findPath() {
    const toSelect = document.getElementById('toSelect');
    const resultsDiv = document.getElementById('results');

    const selectedFrom = chosenFromValues;
    const selectedTo = toSelect.value;

    if (selectedFrom.length === 0) {
        resultsDiv.innerHTML = '<div class="error">Please select at least one source.</div>';
        return;
    }
    
    if (!selectedTo) {
        resultsDiv.innerHTML = '<div class="error">Please select a target.</div>';
        return;
    }
    
    const paths = findPaths(selectedFrom, selectedTo);
    
    if (paths.length === 0) {
        resultsDiv.innerHTML = '<div class="no-path">No path found from the selected source(s) to the target.</div>';
    } else {
        let resultsHTML = '';
        paths.forEach(pathInfo => {
            resultsHTML += renderPath(pathInfo.source, selectedTo, pathInfo.path);
        });
        resultsDiv.innerHTML = resultsHTML;
    }
}

function findPaths(sources, target) {
    const reverseGraph = {};
    pathData.forEach(item => {
        if (!reverseGraph[item.to]) {
            reverseGraph[item.to] = [];
        }
        reverseGraph[item.to].push(item);
    });
    
    // BFS backwards from target status
    const queue = [[target]];
    const visited = new Set([target]);
    const sourcesSet = new Set(sources);
    const foundPaths = [];
    
    while (queue.length > 0 && foundPaths.length < sources.length) {
        const currentPath = queue.shift();
        const currentNode = currentPath[currentPath.length - 1];
        
        if (sourcesSet.has(currentNode) && currentNode !== target) {
            const reversedPath = [...currentPath].reverse();
            const detailedPath = buildPathDetails(reversedPath);
            foundPaths.push({
                source: currentNode,
                path: detailedPath
            });
            
            if (foundPaths.length === sources.length) {
                break;
            }
        }
        
        if (reverseGraph[currentNode]) {
            for (const edge of reverseGraph[currentNode]) {
                if (!visited.has(edge.from)) {
                    visited.add(edge.from);
                    queue.push([...currentPath, edge.from]);
                }
            }
        }
    }
    
    return foundPaths;
}

function buildPathDetails(nodePath) {
    const detailedPath = [];
    
    for (let i = 0; i < nodePath.length - 1; i++) {
        const from = nodePath[i];
        const to = nodePath[i + 1];
        
        const edge = pathData.find(item => item.from === from && item.to === to);
        
        if (edge) {
            detailedPath.push({
                from: edge.from,
                to: edge.to,
                comment: edge.comment,
                link: edge.link
            });
        }
    }
    
    return detailedPath;
}

function renderPath(start, end, path) {
    let html = '<div class="path-container">';
    html += `<div class="path-title">Path from "${start}" to "${end}"</div>`;
    
    path.forEach((step, index) => {
        html += '<div class="step">';
        html += `<span class="step-number">${index + 1}</span>`;
        html += `<div class="step-connection">${step.from} <span class="arrow">→</span> ${step.to}</div>`;
        html += `<div class="step-comment">${step.comment}</div>`;
        
        if (step.link && step.link.trim() !== '') {
            html += `<a href="${step.link}" target="_blank" class="step-link">View more information →</a>`;
        }
        
        html += '</div>';
    });
    
    html += '</div>';
    return html;
}

// Update available list with filtered values
function updateAvailableList(values) {
    const availableList = document.getElementById('availableList');
    const filteredValues = values.filter(v => !chosenFromValues.includes(v));

    if (filteredValues.length === 0) {
        availableList.innerHTML = '<div class="list-item" style="cursor: default; opacity: 0.5;">No items available</div>';
        return;
    }

    availableList.innerHTML = '';
    filteredValues.forEach(value => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.textContent = value;
        item.dataset.value = value;
        availableList.appendChild(item);
    });
}

// Update chosen list
function updateChosenList() {
    const chosenList = document.getElementById('chosenList');

    if (chosenFromValues.length === 0) {
        chosenList.innerHTML = '<div class="list-item" style="cursor: default; opacity: 0.5;">No items chosen</div>';
        return;
    }

    chosenList.innerHTML = '';
    chosenFromValues.forEach(value => {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.textContent = value;
        item.dataset.value = value;
        chosenList.appendChild(item);
    });
}

// Setup search filter
function setupSearchFilter() {
    const searchInput = document.getElementById('fromSearch');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        if (searchTerm === '') {
            updateAvailableList(allFromValues);
        } else {
            const filtered = allFromValues.filter(value =>
                value.toLowerCase().includes(searchTerm)
            );
            updateAvailableList(filtered);
        }
    });
}

// Setup dual list selection
function setupDualListSelection() {
    const availableList = document.getElementById('availableList');
    const chosenList = document.getElementById('chosenList');

    // Click to select items
    availableList.addEventListener('click', function(e) {
        if (e.target.classList.contains('list-item') && e.target.dataset.value) {
            e.target.classList.toggle('selected');
        }
    });

    chosenList.addEventListener('click', function(e) {
        if (e.target.classList.contains('list-item') && e.target.dataset.value) {
            e.target.classList.toggle('selected');
        }
    });

    // Double-click to transfer
    availableList.addEventListener('dblclick', function(e) {
        if (e.target.classList.contains('list-item') && e.target.dataset.value) {
            addSelected();
        }
    });

    chosenList.addEventListener('dblclick', function(e) {
        if (e.target.classList.contains('list-item') && e.target.dataset.value) {
            removeSelected();
        }
    });
}

// Add selected items to chosen list
function addSelected() {
    const availableList = document.getElementById('availableList');
    const selectedItems = availableList.querySelectorAll('.list-item.selected');

    selectedItems.forEach(item => {
        const value = item.dataset.value;
        if (value && !chosenFromValues.includes(value)) {
            chosenFromValues.push(value);
        }
    });

    chosenFromValues.sort();

    // Refresh both lists
    const searchInput = document.getElementById('fromSearch');
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        updateAvailableList(allFromValues);
    } else {
        const filtered = allFromValues.filter(value =>
            value.toLowerCase().includes(searchTerm)
        );
        updateAvailableList(filtered);
    }

    updateChosenList();
}

// Remove selected items from chosen list
function removeSelected() {
    const chosenList = document.getElementById('chosenList');
    const selectedItems = chosenList.querySelectorAll('.list-item.selected');

    selectedItems.forEach(item => {
        const value = item.dataset.value;
        const index = chosenFromValues.indexOf(value);
        if (index > -1) {
            chosenFromValues.splice(index, 1);
        }
    });

    // Refresh both lists
    const searchInput = document.getElementById('fromSearch');
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        updateAvailableList(allFromValues);
    } else {
        const filtered = allFromValues.filter(value =>
            value.toLowerCase().includes(searchTerm)
        );
        updateAvailableList(filtered);
    }

    updateChosenList();
}
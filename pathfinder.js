document.addEventListener('DOMContentLoaded', function() {
    populateSelects();
});

function populateSelects() {
    const fromSet = new Set();
    pathData.forEach(item => {
        fromSet.add(item.from);
    });
    const fromValues = Array.from(fromSet).sort();
    
    const toSet = new Set();
    pathData.forEach(item => {
        toSet.add(item.to);
    });
    const toValues = Array.from(toSet).sort();
    
    const fromSelect = document.getElementById('fromSelect');
    fromSelect.innerHTML = '';
    fromValues.forEach(value => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        fromSelect.appendChild(option);
    });
    
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
    const fromSelect = document.getElementById('fromSelect');
    const toSelect = document.getElementById('toSelect');
    const resultsDiv = document.getElementById('results');
    
    const selectedFrom = Array.from(fromSelect.selectedOptions).map(opt => opt.value);
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
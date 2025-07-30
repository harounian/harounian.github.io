const navbarLinks = document.querySelectorAll('.navbar-link-text');

// Set navbar link text directly without animation
navbarLinks[0].textContent = 'Projects';
navbarLinks[1].textContent = 'Publications';

// Filter functionality
let activeFilters = new Set();

// Initialize filters when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
});

function initializeFilters() {
    const filterTagsContainer = document.getElementById('filter-tags');
    if (!filterTagsContainer) return;

    // Get all unique tags from project tiles
    const allTags = new Set();
    const projectTiles = document.querySelectorAll('.tile');
    
    projectTiles.forEach(tile => {
        const tags = tile.querySelectorAll('.tag p');
        tags.forEach(tag => {
            allTags.add(tag.textContent);
        });
    });

    // Create filter tag buttons
    allTags.forEach(tagText => {
        const filterTag = document.createElement('div');
        filterTag.className = 'filter-tag';
        filterTag.textContent = tagText;
        filterTag.onclick = () => toggleFilter(tagText);
        filterTagsContainer.appendChild(filterTag);
    });
}

function toggleFilter(tagText) {
    const filterTag = Array.from(document.querySelectorAll('.filter-tag')).find(tag => tag.textContent === tagText);
    
    if (activeFilters.has(tagText)) {
        // Deselect the current filter
        activeFilters.clear();
        filterTag.classList.remove('active');
    } else {
        // Clear any existing filter and select the new one
        activeFilters.clear();
        document.querySelectorAll('.filter-tag').forEach(tag => tag.classList.remove('active'));
        
        activeFilters.add(tagText);
        filterTag.classList.add('active');
    }
    
    // Force immediate filter update
    filterProjects();
    
    // Ensure filter state is properly reflected
    updateFilterDisplay();
}

function filterProjects() {
    const projectTiles = document.querySelectorAll('.tile');
    const tilesContainer = document.getElementById('setof3tiles');
    
    let visibleCount = 0;
    
    projectTiles.forEach(tile => {
        const tags = Array.from(tile.querySelectorAll('.tag p')).map(tag => tag.textContent);
        
        if (activeFilters.size === 0) {
            // Show all projects when no filters are active
            tile.style.display = 'flex';
            visibleCount++;
        } else {
            // Show project if it has at least one of the active filter tags
            const hasMatchingTag = tags.some(tag => activeFilters.has(tag));
            if (hasMatchingTag) {
                tile.style.display = 'flex';
                visibleCount++;
            } else {
                tile.style.display = 'none';
            }
        }
    });
    
    // Adjust container layout based on filter state
    if (activeFilters.size > 0 && visibleCount > 0) {
        // Use grid layout for filtered results
        tilesContainer.classList.add('grid-layout');
    } else {
        // Reset to original layout
        tilesContainer.classList.remove('grid-layout');
    }
}

function updateFilterDisplay() {
    // Update the visual state of all filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        const tagText = tag.textContent;
        if (activeFilters.has(tagText)) {
            tag.classList.add('active');
        } else {
            tag.classList.remove('active');
        }
    });
}

function clearFilters() {
    activeFilters.clear();
    
    // Remove active class from all filter tags
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    
    // Reset all projects to visible
    const projectTiles = document.querySelectorAll('.tile');
    projectTiles.forEach(tile => {
        tile.style.display = 'flex';
    });
    
    // Reset container layout
    const tilesContainer = document.getElementById('setof3tiles');
    tilesContainer.classList.remove('grid-layout');
}
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const categoryInput = document.getElementById('categoryInput');
    const searchInput = document.getElementById('searchInput');
    const resourceList = document.getElementById('resourceList');
 
    // Array to hold uploaded resources
    let resources = [];
 
    // Function to create a resource element
    function createResourceElement(resource) {
        const resourceItem = document.createElement('div');
        resourceItem.className = 'resource-item';
 
        const resourceTitle = document.createElement('h3');
        resourceTitle.textContent = resource.name;
        resourceItem.appendChild(resourceTitle);
 
        const resourceCategory = document.createElement('p');
        resourceCategory.textContent = `Category: ${resource.category}`;
        resourceItem.appendChild(resourceCategory);
 
        const downloadLink = document.createElement('a');
        downloadLink.href = resource.url;
        downloadLink.textContent = 'Download PDF';
        downloadLink.download = resource.name;
        resourceItem.appendChild(downloadLink);
 
        return resourceItem;
    }
 
    // Function to render resources
    function renderResources(filteredResources = resources) {
        resourceList.innerHTML = '';
        filteredResources.forEach(resource => {
            const resourceElement = createResourceElement(resource);
            resourceList.appendChild(resourceElement);
        });
    }
 
    // Event listener for form submission
    uploadForm.addEventListener('submit', (event) => {
        event.preventDefault();
 
        const file = fileInput.files[0];
        const category = categoryInput.value.trim();
 
        if (file && category) {
            // Create a resource object with the file URL and category
            const resource = {
                name: file.name,
                category: category,
                url: URL.createObjectURL(file) // Create a URL for the uploaded file
            };
 
            // Add the resource to the array and re-render the resources list
            resources.push(resource);
            renderResources();
 
            // Clear input fields after submission
            fileInput.value = '';
            categoryInput.value = '';
        }
    });
 
});
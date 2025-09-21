// Mermaid configuration for faster loading and better rendering
document.addEventListener("DOMContentLoaded", function() {
    // Configure Mermaid to prevent FOUC (Flash of Unstyled Content)
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'default',
            themeVariables: {
                primaryColor: '#4ECDC4',        // DevOps Teal (primary)
                primaryTextColor: '#fff',
                primaryBorderColor: '#26A69A',   // DevOps Teal Dark
                lineColor: '#2E3A87',           // DevOps Navy
                secondaryColor: '#E0F2F1',      // Light Teal background
                tertiaryColor: '#E8EAF6',       // Light Navy background
                background: '#ffffff',
                mainBkg: '#4ECDC4',
                secondBkg: '#2E3A87',
                tertiaryBkg: '#80E4DD'
            },
            flowchart: {
                useMaxWidth: true,
                htmlLabels: true,
                curve: 'basis'
            },
            sequence: {
                diagramMarginX: 50,
                diagramMarginY: 10,
                actorMargin: 50,
                width: 150,
                height: 65,
                boxMargin: 10,
                boxTextMargin: 5,
                noteMargin: 10,
                messageMargin: 35,
                mirrorActors: true,
                bottomMarginAdj: 1,
                useMaxWidth: true
            },
            gitgraph: {
                mainBranchName: 'main',
                showCommitLabel: true,
                showBranches: true,
                rotateCommitLabel: true
            }
        });

        // Wait for the page to be fully loaded before rendering
        const renderMermaidDiagrams = () => {
            const diagrams = document.querySelectorAll('.mermaid');
            diagrams.forEach((diagram, index) => {
                if (!diagram.hasAttribute('data-processed')) {
                    // Hide the diagram initially to prevent FOUC
                    diagram.style.visibility = 'hidden';
                    diagram.style.opacity = '0';
                    
                    // Process the diagram
                    mermaid.init(undefined, diagram).then(() => {
                        // Show the diagram after processing
                        diagram.style.transition = 'opacity 0.3s ease-in-out';
                        diagram.style.visibility = 'visible';
                        diagram.style.opacity = '1';
                    }).catch((error) => {
                        console.error('Mermaid rendering error:', error);
                        // Show the original text if rendering fails
                        diagram.style.visibility = 'visible';
                        diagram.style.opacity = '1';
                    });
                }
            });
        };

        // Render diagrams when page loads
        renderMermaidDiagrams();

        // Re-render diagrams when navigating (for SPA-like behavior)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if new mermaid diagrams were added
                    const hasMermaid = Array.from(mutation.addedNodes).some(node => 
                        node.nodeType === Node.ELEMENT_NODE && 
                        (node.classList.contains('mermaid') || node.querySelector('.mermaid'))
                    );
                    if (hasMermaid) {
                        setTimeout(renderMermaidDiagrams, 100);
                    }
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
});

// Theme switching support for Mermaid
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButtons = document.querySelectorAll('[data-md-color-scheme]');
    
    themeToggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(() => {
                const isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';
                if (typeof mermaid !== 'undefined') {
                    mermaid.initialize({
                        theme: isDark ? 'dark' : 'default',
                        themeVariables: isDark ? {
                            primaryColor: '#80E4DD',        // DevOps Teal Light for dark theme
                            primaryTextColor: '#000',
                            primaryBorderColor: '#4ECDC4',   // DevOps Teal
                            lineColor: '#5C6BC0',           // DevOps Navy Light
                            secondaryColor: '#2E3A87',      // DevOps Navy
                            tertiaryColor: '#121212',
                            background: '#121212',
                            mainBkg: '#80E4DD',
                            secondBkg: '#5C6BC0'
                        } : {
                            primaryColor: '#4ECDC4',        // DevOps Teal (primary)
                            primaryTextColor: '#fff',
                            primaryBorderColor: '#26A69A',   // DevOps Teal Dark
                            lineColor: '#2E3A87',           // DevOps Navy
                            secondaryColor: '#E0F2F1',      // Light Teal background
                            tertiaryColor: '#E8EAF6',       // Light Navy background
                            background: '#ffffff',
                            mainBkg: '#4ECDC4',
                            secondBkg: '#2E3A87'
                        }
                    });
                    
                    // Re-render all diagrams with new theme
                    const diagrams = document.querySelectorAll('.mermaid[data-processed="true"]');
                    diagrams.forEach(diagram => {
                        diagram.removeAttribute('data-processed');
                        const originalContent = diagram.getAttribute('data-original') || diagram.textContent;
                        diagram.innerHTML = originalContent;
                        mermaid.init(undefined, diagram);
                    });
                }
            }, 100);
        });
    });
});
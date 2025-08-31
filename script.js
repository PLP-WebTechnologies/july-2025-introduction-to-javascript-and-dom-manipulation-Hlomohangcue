// ===========================================
// PART 1: JAVASCRIPT BASICS
// Variables, data types, operators, and conditionals
// ===========================================

// Global variables to store user data
let userName = '';
let userAge = 0;
let temperatureInCelsius = 0;

/**
 * Function to check age category using conditionals
 * Demonstrates: variables, conditionals (if/else), string interpolation
 */
function checkAge() {
    // Get user input from DOM elements
    userName = document.getElementById('userName').value;
    userAge = parseInt(document.getElementById('userAge').value);
    
    // Variable to store the result message
    let message = '';
    
    // Conditional logic to determine age category
    if (!userName || isNaN(userAge)) {
        message = '⚠️ Please enter both your name and age!';
    } else if (userAge < 0) {
        message = '🤔 Age cannot be negative!';
    } else if (userAge < 13) {
        message = `Hello ${userName}! You're a child (${userAge} years old). Keep learning and having fun! 🧒`;
    } else if (userAge < 20) {
        message = `Hey ${userName}! You're a teenager (${userAge} years old). Enjoy these exciting years! 🧑‍🎓`;
    } else if (userAge < 65) {
        message = `Hi ${userName}! You're an adult (${userAge} years old). Keep crushing those goals! 💼`;
    } else {
        message = `Hello ${userName}! You're a senior (${userAge} years old). Your wisdom is invaluable! 👴👵`;
    }
    
    // Update DOM with the result
    document.getElementById('ageResult').innerHTML = message;
    
    // Log to console for debugging
    console.log(`User: ${userName}, Age: ${userAge}, Category determined`);
}

/**
 * Function to convert temperature from Celsius to Fahrenheit
 * Demonstrates: mathematical operations, data type conversion
 */
function convertTemperature() {
    temperatureInCelsius = parseFloat(document.getElementById('celsius').value);
    
    if (isNaN(temperatureInCelsius)) {
        document.getElementById('tempResult').innerHTML = '⚠️ Please enter a valid temperature!';
        return;
    }
    
    // Temperature conversion formula: F = (C × 9/5) + 32
    const fahrenheit = (temperatureInCelsius * 9/5) + 32;
    
    // Create result message with conditional styling
    let message = `${temperatureInCelsius}°C = ${fahrenheit.toFixed(1)}°F`;
    
    // Add descriptive text based on temperature range
    if (temperatureInCelsius <= 0) {
        message += ' 🥶 Freezing!';
    } else if (temperatureInCelsius <= 15) {
        message += ' 🧥 Cold!';
    } else if (temperatureInCelsius <= 25) {
        message += ' 😊 Pleasant!';
    } else if (temperatureInCelsius <= 35) {
        message += ' ☀️ Hot!';
    } else {
        message += ' 🔥 Very Hot!';
    }
    
    document.getElementById('tempResult').innerHTML = message;
    console.log(`Temperature converted: ${temperatureInCelsius}°C to ${fahrenheit}°F`);
}

// ===========================================
// PART 2: JAVASCRIPT FUNCTIONS
// Custom functions with parameters, return values, and reusability
// ===========================================

/**
 * FUNCTION 1: Calculate total price with tax
 * Demonstrates: function parameters, return values, mathematical operations
 * @param {number} price - The original price
 * @param {number} taxRate - The tax rate as a percentage
 * @returns {object} Object containing price breakdown or error message
 */
function calculateTotalWithTax(price, taxRate) {
    // Input validation
    if (price < 0 || taxRate < 0) {
        return { error: 'Price and tax rate must be non-negative!' };
    }
    
    // Calculate tax amount and total
    const taxAmount = (price * taxRate) / 100;
    const total = price + taxAmount;
    
    // Return object with calculated values
    return {
        originalPrice: price,
        taxRate: taxRate,
        taxAmount: taxAmount,
        finalTotal: total
    };
}

/**
 * Function to handle the calculate total button click
 * Demonstrates: function calls, DOM interaction, error handling
 */
function calculateTotal() {
    const price = parseFloat(document.getElementById('price').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    
    // Validate input
    if (isNaN(price) || isNaN(taxRate)) {
        document.getElementById('totalResult').innerHTML = '⚠️ Please enter valid numbers!';
        return;
    }
    
    // Call our custom function
    const result = calculateTotalWithTax(price, taxRate);
    
    // Display results or error
    if (result.error) {
        document.getElementById('totalResult').innerHTML = '⚠️ ' + result.error;
    } else {
        const resultHTML = `
            <strong>💰 Price Breakdown:</strong><br>
            Original Price: $${result.originalPrice.toFixed(2)}<br>
            Tax (${result.taxRate}%): $${result.taxAmount.toFixed(2)}<br>
            <strong>Final Total: $${result.finalTotal.toFixed(2)}</strong>
        `;
        document.getElementById('totalResult').innerHTML = resultHTML;
    }
    
    console.log('Total calculated:', result);
}

/**
 * FUNCTION 2: String formatter with multiple operations
 * Demonstrates: string manipulation, multiple return formats
 * @param {string} inputString - The string to format
 * @returns {object} Object containing formatted strings or error message
 */
function formatText(inputString) {
    if (!inputString || inputString.trim() === '') {
        return { error: 'Please enter some text to format!' };
    }
    
    // Various string formatting operations
    const original = inputString;
    const uppercase = inputString.toUpperCase();
    const lowercase = inputString.toLowerCase();
    const titleCase = inputString.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    const reversed = inputString.split('').reverse().join('');
    const wordCount = inputString.trim().split(/\s+/).length;
    const charCount = inputString.length;
    
    return {
        original: original,
        uppercase: uppercase,
        lowercase: lowercase,
        titleCase: titleCase,
        reversed: reversed,
        wordCount: wordCount,
        charCount: charCount
    };
}

/**
 * Function to handle the format string button click
 * Demonstrates: function calls, DOM manipulation, string operations
 */
function formatString() {
    const inputText = document.getElementById('inputText').value;
    const result = formatText(inputText);
    
    if (result.error) {
        document.getElementById('stringResult').innerHTML = '⚠️ ' + result.error;
    } else {
        const resultHTML = `
            <strong>📝 String Formatting Results:</strong><br>
            <strong>Original:</strong> "${result.original}"<br>
            <strong>UPPERCASE:</strong> "${result.uppercase}"<br>
            <strong>lowercase:</strong> "${result.lowercase}"<br>
            <strong>Title Case:</strong> "${result.titleCase}"<br>
            <strong>Reversed:</strong> "${result.reversed}"<br>
            <strong>Stats:</strong> ${result.wordCount} words, ${result.charCount} characters
        `;
        document.getElementById('stringResult').innerHTML = resultHTML;
    }
    
    console.log('String formatted:', result);
}

// ===========================================
// PART 3: JAVASCRIPT LOOPS
// For, while, and forEach loops for repetitive tasks
// ===========================================

/**
 * FOR LOOP EXAMPLE: Generate multiplication table
 * Demonstrates: for loop, string concatenation, mathematical operations
 */
function showMultiplicationTable() {
    const number = parseInt(document.getElementById('multiplyNum').value) || 5;
    let output = `Multiplication Table for ${number}:\n\n`;
    
    // For loop to generate multiplication table from 1 to 10
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        output += `${number} × ${i} = ${result}\n`;
    }
    
    document.getElementById('multiplyResult').textContent = output;
    console.log('Multiplication table generated for:', number);
}

/**
 * WHILE LOOP EXAMPLE: Countdown timer with delay
 * Demonstrates: while loop, setTimeout for delays, recursion
 */
function startCountdown() {
    const startNum = parseInt(document.getElementById('countdownStart').value) || 10;
    let currentNum = startNum;
    let output = '';
    const resultDiv = document.getElementById('countdownResult');
    
    resultDiv.textContent = 'Starting countdown...';
    
    // Recursive function to handle countdown with delays
    function countdownStep() {
        if (currentNum >= 0) {
            if (currentNum === 0) {
                output += '🚀 BLAST OFF!\n';
            } else {
                output += `Counting down: ${currentNum}\n`;
            }
            
            resultDiv.textContent = output;
            currentNum--;
            
            // Continue the countdown after a 500ms delay
            setTimeout(countdownStep, 500);
        }
    }
    
    countdownStep();
    console.log('Countdown started from:', startNum);
}

/**
 * FOREACH LOOP EXAMPLE: Process array of fruits
 * Demonstrates: forEach loop, array methods, string manipulation
 */
function processArray() {
    // Array of fruits to process
    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
    let output = 'Processing fruits array with forEach:\n\n';
    
    // forEach loop to process each fruit with index
    fruits.forEach((fruit, index) => {
        const capitalizedFruit = fruit.charAt(0).toUpperCase() + fruit.slice(1);
        const fruitLength = fruit.length;
        output += `${index + 1}. ${capitalizedFruit} (${fruitLength} letters)\n`;
    });
    
    output += `\nTotal fruits processed: ${fruits.length}`;
    output += `\nLongest fruit name: ${fruits.reduce((a, b) => a.length > b.length ? a : b)}`;
    output += `\nShortest fruit name: ${fruits.reduce((a, b) => a.length < b.length ? a : b)}`;
    
    document.getElementById('arrayResult').textContent = output;
    console.log('Array processed:', fruits);
}

// ===========================================
// PART 4: DOM MANIPULATION
// Element selection, event handling, dynamic content creation
// ===========================================

// Global variables for DOM interactions
let isContentVisible = false;
let counterValue = 0;
let listItemCount = 0;

/**
 * DOM INTERACTION 1: Toggle content visibility
 * Demonstrates: element selection, class manipulation, conditional logic
 */
function toggleContent() {
    const toggleDiv = document.getElementById('toggleContent');
    
    if (isContentVisible) {
        // Hide content by adding 'hidden' class
        toggleDiv.classList.add('hidden');
        isContentVisible = false;
        console.log('Content hidden');
    } else {
        // Show content by removing 'hidden' class
        toggleDiv.classList.remove('hidden');
        isContentVisible = true;
        console.log('Content shown');
    }
}

/**
 * DOM INTERACTION 2: Add items to dynamic list
 * Demonstrates: creating elements, appendChild, event handling
 */
function addListItem() {
    const itemText = document.getElementById('listItem').value.trim();
    const listContainer = document.getElementById('dynamicList');
    
    if (!itemText) {
        alert('Please enter an item!');
        return;
    }
    
    // Create new list item element
    const listItem = document.createElement('li');
    listItemCount++;
    listItem.textContent = `${listItemCount}. ${itemText}`;
    
    // Add click event listener to remove item when clicked
    listItem.addEventListener('click', function() {
        listItem.remove();
        console.log('List item removed:', itemText);
    });
    
    // Add the new item to the list
    listContainer.appendChild(listItem);
    
    // Clear the input field
    document.getElementById('listItem').value = '';
    
    console.log('List item added:', itemText);
}

/**
 * Function to clear the dynamic list
 * Demonstrates: innerHTML manipulation, variable reset
 */
function clearList() {
    const listContainer = document.getElementById('dynamicList');
    listContainer.innerHTML = '';
    listItemCount = 0;
    console.log('List cleared');
}

/**
 * DOM INTERACTION 3: Interactive counter functions
 * Demonstrates: element text content modification, style manipulation
 */
function updateCounterDisplay() {
    const counterDisplay = document.getElementById('counter');
    counterDisplay.textContent = counterValue;
    
    // Add visual feedback based on counter value
    if (counterValue > 0) {
        counterDisplay.style.color = '#4facfe';
    } else if (counterValue < 0) {
        counterDisplay.style.color = '#ff6b6b';
    } else {
        counterDisplay.style.color = '#666';
    }
}

function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
    console.log('Counter incremented to:', counterValue);
}

function decrementCounter() {
    counterValue--;
    updateCounterDisplay();
    console.log('Counter decremented to:', counterValue);
}

function resetCounter() {
    counterValue = 0;
    updateCounterDisplay();
    console.log('Counter reset');
}

function randomCounter() {
    // Generate random number between -100 and 100
    counterValue = Math.floor(Math.random() * 201) - 100;
    updateCounterDisplay();
    console.log('Counter set to random value:', counterValue);
}

/**
 * DOM INTERACTION 4: Dynamic style changes
 * Demonstrates: style property manipulation, random selection from arrays
 */
function changeBackgroundColor() {
    const body = document.body;
    
    // Array of gradient background colors
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    ];
    
    // Select random color from array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = randomColor;
    
    console.log('Background color changed to:', randomColor);
}

// ===========================================
// INITIALIZATION AND EVENT LISTENERS
// Setting up the application when page loads
// ===========================================

/**
 * Initialize the application when DOM is fully loaded
 * Demonstrates: event listeners, DOM ready state, keyboard events
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add Enter key support for all input fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                // Find the button in the same input group and click it
                const button = this.parentElement.querySelector('button');
                if (button) button.click();
            }
        });
    });
    
    // Log successful initialization
    console.log('JavaScript Fundamentals Assignment loaded successfully! 🚀');
    console.log('Open the browser console to see detailed logs of all operations.');
    console.log('Part 1: Variables and conditionals ✓');
    console.log('Part 2: Custom functions ✓');
    console.log('Part 3: Loops (for, while, forEach) ✓');
    console.log('Part 4: DOM manipulation ✓');
});
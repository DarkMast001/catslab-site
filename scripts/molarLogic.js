const button = document.getElementById('sendButton');
const input = document.getElementById('userInput');

function extractElements(formula) {
    // Шаблон для поиска элементов в химической формуле
    const elementPattern = /[A-Z][a-z]?/g;
    const multiplierPattern = /\(([^)]+)\)(\d+)/g;

    // Развернём скобки с учётом множителей
    while (true) {
        const match = multiplierPattern.exec(formula);
        if (!match) break;
        
        const [fullMatch, insideBrackets, multiplier] = match;
        const expandedPart = insideBrackets.replace(elementPattern, element => element + multiplier);
        formula = formula.replace(fullMatch, expandedPart);
    }

    // Найдём все элементы в формуле
    const elements = formula.match(elementPattern);
    
    // Удалим возможные дубли элементов с помощью множества (Set)
    const uniqueElements = [...new Set(elements)];
    
    return uniqueElements;
}

button.addEventListener('click', () => {
	const value = input.value;
    alert(extractElements(value));
});

input.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		const value = input.value;
    	alert(extractElements(value));
	}
});
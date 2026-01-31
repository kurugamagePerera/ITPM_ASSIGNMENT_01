# Singlish to Sinhala Translator - Automated Test Suite

## Project Overview
This project contains automated tests for the Singlish to Sinhala translation system at https://www.swifttranslator.com/

## Assignment Details
- **Course**: IT3040 - ITPM
- **Assignment**: Assignment 1
- **Student**: ITXXXXXXXX
- **Test Framework**: Playwright with TypeScript

## Test Coverage
- **24 Positive Functional Tests**: Validating correct Singlish to Sinhala conversions
- **10 Negative Functional Tests**: Testing edge cases and failure scenarios
- **1 UI Test**: Verifying real-time output update behavior

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

### Step 1: Clone or Download the Repository
```bash
cd singlish-translator-tests
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Install Playwright Browsers
```bash
npx playwright install
```

## Running the Tests

### Run All Tests (Headless Mode)
```bash
npm test
```

### Run Tests with Browser Visible
```bash
npm run test:headed
```

### Run Specific Test File
```bash
npx playwright test tests/positive-functional.spec.ts
npx playwright test tests/negative-functional.spec.ts
npx playwright test tests/ui.spec.ts
```

## Viewing Test Reports

After running tests, view the HTML report:
```bash
npm run report
```

## Test Structure

```
singlish-translator-tests/
├── tests/
│   ├── positive-functional.spec.ts  (24 positive test cases)
│   ├── negative-functional.spec.ts  (10 negative test cases)
│   └── ui.spec.ts                   (1 UI test case)
├── playwright.config.ts
├── package.json
└── README.md
```

## Test Categories Covered

### Positive Functional Tests (24)
1. **Sentence Structures**
   - Simple sentences
   - Compound sentences
   - Complex sentences
   
2. **Interrogative & Imperative Forms**
   - Questions
   - Commands
   
3. **Positive & Negative Forms**
   - Affirmative sentences
   - Negative sentences
   
4. **Daily Language Usage**
   - Common greetings
   - Polite vs informal phrasing
   - Frequently used expressions
   
5. **Word Combinations**
   - Multi-word expressions
   - Repeated words for emphasis
   
6. **Grammatical Forms**
   - Past, present, future tenses
   - Plural/singular forms
   
7. **Mixed Language Content**
   - English technical terms
   - Place names
   - Abbreviations
   
8. **Formatting**
   - Punctuation marks
   - Currency and dates
   - Slang expressions

### Negative Functional Tests (10)
1. Joined words without proper spacing
2. Very long input (>300 characters)
3. Multiple consecutive spaces
4. Mixed language with typos
5. Special characters only
6. Numeric-only input
7. Irregular capitalization
8. Multi-line input with breaks
9. Very short ambiguous input
10. Input with tab characters

### UI Tests (1)
1. Real-time output update behavior

## Test Case Naming Convention
- `Pos_Fun_XXX`: Positive Functional Test
- `Neg_Fun_XXX`: Negative Functional Test
- `Pos_UI_XXX`: Positive UI Test
- `Neg_UI_XXX`: Negative UI Test (if applicable)

## Expected Behavior
The tests verify that the translator:
- Correctly converts standard Singlish to Sinhala
- Preserves English technical terms and brand names
- Maintains punctuation and formatting
- Updates output in real-time as user types
- Handles edge cases appropriately

## Notes
- All tests wait 1-2 seconds after input for real-time conversion
- The system converts text automatically without a submit button
- Some negative tests document expected limitations rather than bugs

## Troubleshooting

### Tests fail to connect to website
- Ensure you have internet connectivity
- Check if https://www.swifttranslator.com/ is accessible

### Playwright browsers not installed
Run: `npx playwright install`

### Port or permission errors
Try running with administrator/sudo privileges

## License
This project is for educational purposes as part of SLIIT IT3040 coursework.

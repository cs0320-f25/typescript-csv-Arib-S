# Sprint 1: TypeScript CSV

### Task B: Proposing Enhancement
    
- #### Step 1: Brainstorm on your own.
    1. The parser does not detect when there are different row lengths.
    2. The parser does not correctly split when a field has quotes in it. For example, "A ,B", C does not split correctly.
    3. The parser does not correctly handle empty fields. .trim() sometimes erases meaningful whitespace.
    4. The parser does not handle when there is a "\n" character. It breaks when there is a multiline quote.
    5. There isn't a way to see when an error occurs or any description of an error.

- #### Step 2: Use an LLM to help expand your perspective.
    The LLM thought up similar concerns about different row lengths and splitting fields that have commas and quotes in them. However, it also suggested testing and noting how it handles delimiters such as ; and \t, not just commas. It also suggested adding descriptive error messages and the option to include/exclude headers automatically. It also suggested normalizing endings. The LLM also mentioned schema validation. When I prompted the LLM with different prompts, there was overlap about error reporting and schema validation. 2/3 prompts also mentioned dealing with multiline and quoted fields. However, some different ideas that the 3 mentions were multiple delimiters, comments, blank lines, and locale issues such as using 3,14 instead of 3.14.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    1. Support quoted fields (functionality). This came from both me and the LLM. As a user, I can parse in quoted fields like `"He said ""Hello"""` and have the embedded commas and quotes parsed correctly.
    2. Detect inconsistent row lengths (Functionality). This came from both me and the LLM. As a user, I can parse in data and have the parser detect when rows have different numbers of columns than the header so I can identify incomplete or bad data easily.  
    3. Handle empty fields and whitespace correctly (functionality). This came from both me and the LLM. As a user, I can parse data with empty fields (e.g., `A,,C`) that will be preserved as `""` so that missing values are represented correctly 
    4. Add schema validation (Extensibility). This came from the LLM. As a user, I can provide data into the parser that will be validated and transformed into typed objects automatically.  

    My initial ideas included using quoted fields, detecting inconsistent row lengths, handling empty fields, and handling multiline quotes. The LLM suggested some overlapping points, such as quoted fields, inconsistent row length, and empty fields, but also had new ideas such as using schema validation, handling delimiters, and normalizing endings. When prompted differently, majority of the ideas were the same, although 1 or 2 differed. These may have resulted due to the question either leaning more toward user usability rather than CSV correctness. What resonated with me are the ideas that were more important for a user or focussed on CSV correctness as these would make the parser more useful over diverse applications, and as such were the 4 I selected above.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  

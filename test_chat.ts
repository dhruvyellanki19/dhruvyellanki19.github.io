
import { determineIntent, getSmartResponse } from "./src/utils/chatLogic";

const inputs = [
    "where is dhruv studying",
    "where did he study",
    "education",
    "university"
];

inputs.forEach(input => {
    console.log(`Input: "${input}"`);
    console.log(`Intent: ${determineIntent(input)}`);
    console.log(`Response: ${getSmartResponse(input)}`);
    console.log("---");
});

export function isPalindrome(word) {
  // Handle non-string input
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  // Check for alphabetic-only content
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Input must contain only alphabetic characters");
  }

  // Empty string should return false
  if (word.length === 0) {
    return false;
  }

  // Normalize case
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");

  return lower === reversed;
}

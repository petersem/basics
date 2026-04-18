import { jest } from '@jest/globals';

describe("icanhazdadjoke.com API (live test)", () => {
  // Allow slow network calls (GitHub Actions can be slow)
  jest.setTimeout(10000);

  it("returns a valid dad joke JSON response", async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json",
        "User-Agent": "JestTest (https://example.com)"
      }
    });

    expect(response.ok).toBe(true);

    const data = await response.json();

    // Validate structure
    expect(data).toHaveProperty("joke");
    expect(typeof data.joke).toBe("string");
    expect(data.joke.length).toBeGreaterThan(0);

    // Optional: validate status field
    expect(data).toHaveProperty("status");
    expect(data.status).toBe(200);
  });
});

describe("OpenTDB API (live test)", () => {
  // Allow slow network calls (GitHub Actions can be slow)
  jest.setTimeout(10000);

  it("returns a valid trivia question", async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple", {
      headers: {
        "User-Agent": "JestTest (https://example.com)"
      }
    });

    expect(response.ok).toBe(true);

    const data = await response.json();

    // Basic structure
    expect(data).toHaveProperty("response_code");
    expect(data.response_code).toBe(0);

    expect(data).toHaveProperty("results");
    expect(Array.isArray(data.results)).toBe(true);
    expect(data.results.length).toBe(1);

    const question = data.results[0];

    // Validate fields
    expect(question).toHaveProperty("category");
    expect(question).toHaveProperty("type");
    expect(question).toHaveProperty("difficulty");
    expect(question).toHaveProperty("question");
    expect(question).toHaveProperty("correct_answer");
    expect(question).toHaveProperty("incorrect_answers");

    // Validate content
    expect(typeof question.question).toBe("string");
    expect(question.question.length).toBeGreaterThan(0);

    expect(typeof question.correct_answer).toBe("string");
    expect(question.incorrect_answers.length).toBeGreaterThan(0);
  });
});


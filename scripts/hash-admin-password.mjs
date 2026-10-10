#!/usr/bin/env node
/**
 * Generates an ADMIN_PASSWORD_HASH value for .env / .env.local.
 *
 * Usage:
 *   node scripts/hash-admin-password.mjs
 *   (then paste a password when prompted - it is not echoed to the terminal)
 *
 * Also prints a fresh ADMIN_SESSION_SECRET, since you need both and this is
 * the natural moment to generate the second one too.
 */
import { randomBytes, scryptSync } from "node:crypto";
import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";

function promptHidden(question) {
  return new Promise((resolve) => {
    const rl = createInterface({ input: stdin, output: stdout, terminal: true });
    // Internal API, but the standard trick for a hidden prompt with readline.
    const writeOriginal = rl._writeToOutput.bind(rl);
    let masking = false;
    rl._writeToOutput = (str) => writeOriginal(masking ? "" : str);
    rl.question(question, (answer) => {
      rl.close();
      stdout.write("\n");
      resolve(answer);
    });
    masking = true;
  });
}

const password = await promptHidden("Admin password: ");
if (!password || password.length < 12) {
  console.error("\nPassword must be at least 12 characters. Nothing was generated.");
  process.exit(1);
}

const salt = randomBytes(16);
const hash = scryptSync(password, salt, 64);

console.log("\nAdd these to your .env / .env.local (do NOT commit them):\n");
console.log(`ADMIN_PASSWORD_HASH=scrypt:${salt.toString("hex")}:${hash.toString("hex")}`);
console.log(`ADMIN_SESSION_SECRET=${randomBytes(32).toString("hex")}`);
console.log("\nRestart the server after updating the environment file.");

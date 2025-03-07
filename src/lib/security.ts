import crypto from "crypto";

/**
 * Security utilities for the application
 */

// Constants
const HASH_ITERATIONS = 10000;
const HASH_KEY_LENGTH = 64;
const HASH_ALGORITHM = "sha512";

/**
 * Generate a secure hash for a password with salt
 * @param password The password to hash
 * @param salt Optional salt (will be generated if not provided)
 * @returns Object containing the hash and salt
 */
export const hashPassword = (
  password: string,
  existingSalt?: string
): { hash: string; salt: string } => {
  const salt = existingSalt || crypto.randomBytes(16).toString("hex");

  const hash = crypto
    .pbkdf2Sync(
      password,
      salt,
      HASH_ITERATIONS,
      HASH_KEY_LENGTH,
      HASH_ALGORITHM
    )
    .toString("hex");

  return { hash, salt };
};

/**
 * Verify a password against a stored hash and salt
 * @param password The password to verify
 * @param storedHash The stored hash to compare against
 * @param salt The salt used for the stored hash
 * @returns Boolean indicating if the password is valid
 */
export const verifyPassword = (
  password: string,
  storedHash: string,
  salt: string
): boolean => {
  const { hash } = hashPassword(password, salt);
  return hash === storedHash;
};

/**
 * Generate a secure random token
 * @param length Length of the token in bytes (default: 32)
 * @returns Hex string representation of the token
 */
export const generateSecureToken = (length = 32): string => {
  return crypto.randomBytes(length).toString("hex");
};

/**
 * Sanitize a SQL query parameter to prevent SQL injection
 * This is a simple implementation - in production, use prepared statements or an ORM
 * @param value The value to sanitize
 * @returns Sanitized value
 */
export const sanitizeSqlParam = (value: string): string => {
  if (typeof value !== "string") return "";

  // Remove characters that could be used for SQL injection
  return value
    .replace(/'/g, "''") // Escape single quotes
    .replace(/\\/g, "\\\\") // Escape backslashes
    .replace(/\0/g, "\\0") // Escape null bytes
    .replace(/\n/g, "\\n") // Escape newlines
    .replace(/\r/g, "\\r") // Escape carriage returns
    .replace(/\x1a/g, "\\Z"); // Escape ctrl+Z
};

/**
 * Create a prepared statement-like object for SQL queries
 * This is a simple implementation - in production, use a proper database library with prepared statements
 * @param sql SQL query with placeholders (?)
 * @param params Parameters to substitute into the query
 * @returns Object with the prepared SQL and a method to execute it
 */
export const prepareStatement = (sql: string, params: any[] = []) => {
  // Replace each ? with the sanitized parameter
  let preparedSql = sql;
  const sanitizedParams = params.map((param) => {
    if (typeof param === "string") {
      return `'${sanitizeSqlParam(param)}'`;
    } else if (param === null) {
      return "NULL";
    } else {
      return param;
    }
  });

  // Replace placeholders with sanitized values
  sanitizedParams.forEach((param) => {
    preparedSql = preparedSql.replace("?", param.toString());
  });

  return {
    sql: preparedSql,
    // In a real implementation, this would execute the query
    execute: async () => {
      console.log("Executing prepared statement:", preparedSql);
      // This would be replaced with actual database execution
      return { rows: [], success: true };
    },
  };
};

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param html HTML content to sanitize
 * @returns Sanitized HTML
 */
export const sanitizeHtml = (html: string): string => {
  return String(html)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * Validate and sanitize user input
 * @param input User input to validate
 * @param maxLength Maximum allowed length
 * @returns Sanitized input or null if invalid
 */
export const validateUserInput = (
  input: string,
  maxLength = 255
): string | null => {
  if (!input || typeof input !== "string") {
    return null;
  }

  // Trim and limit length
  const trimmed = input.trim().slice(0, maxLength);

  // Basic validation - can be extended based on requirements
  if (trimmed.length === 0) {
    return null;
  }

  return sanitizeHtml(trimmed);
};

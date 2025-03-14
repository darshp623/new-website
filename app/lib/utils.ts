// lib/utils.ts

/**
 * Utility function for conditionally joining class names.
 * Useful when working with Tailwind CSS or dynamic class management.
 *
 * @param args - An array of strings or falsy values.
 * @returns A single string with valid class names joined by a space.
 */
export function cn(...args: (string | false | null | undefined)[]): string {
    return args.filter(Boolean).join(" ");
  }
  
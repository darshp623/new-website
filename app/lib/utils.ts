// lib/utils.ts

/**
    utility function for conditionally joining class names, can be useful apparently, just need to learn better
    @param args - an array of strings or falsy values.
    @returns a single string with valid class names joined by a space.
 */
export function cn(...args: (string | false | null | undefined)[]): string {
    return args.filter(Boolean).join(" ");
  }
  
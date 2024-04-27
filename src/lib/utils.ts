import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function convertTimestampToReadableDate(timestamp: string): string {
   const date = new Date(timestamp);
   const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
   };
   return date.toLocaleString("en-US", options).replace(",", "");
}

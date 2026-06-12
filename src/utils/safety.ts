/**
 * Safety and Anti-Scraping Utilities for Kios Buku Masjid Agung Cianjur.
 * Obfuscates phone numbers and social links to prevent harvester bots from spamming.
 */

// Parts of the WhatsApp number: +62 817 7522 1400 -> 6281775221400
const WA_PART_1 = "NjI4"; // Base64 for "628"
const WA_PART_2 = "MTc3"; // Base64 for "177"
const WA_PART_3 = "NTIy"; // Base64 for "522"
const WA_PART_4 = "MTQwMA=="; // Base64 for "1400"

/**
 * Decodes the obfuscated WhatsApp number parts.
 */
export function getWhatsAppNumber(): string {
  try {
    const p1 = atob(WA_PART_1);
    const p2 = atob(WA_PART_2);
    const p3 = atob(WA_PART_3);
    const p4 = atob(WA_PART_4);
    return `${p1}${p2}${p3}${p4}`;
  } catch (e) {
    // Fallback if base64 decoding fails for some reason
    return "6281775221400";
  }
}

/**
 * Generates a secure WhatsApp chat link with an optional pre-filled message.
 */
export function getWhatsAppLink(message?: string): string {
  const phone = getWhatsAppNumber();
  const baseUrl = atob("aHR0cHM6Ly93YS5tZS8="); // Base64 for "https://wa.me/"
  if (message) {
    return `${baseUrl}${phone}?text=${encodeURIComponent(message)}`;
  }
  return `${baseUrl}${phone}`;
}

/**
 * Generates a formatted display number for UI, keeping it slightly obfuscated in static HTML.
 */
export function getWhatsAppDisplayNumber(): string {
  const num = getWhatsAppNumber(); // "6281775221400"
  // Format to +62 817-7522-1400
  return `+${num.slice(0, 2)} ${num.slice(2, 5)}-${num.slice(5, 9)}-${num.slice(9)}`;
}

/**
 * Securely retrieves the Instagram link.
 */
export function getInstagramLink(): string {
  // Base64 for "https://instagram.com/kios_buku"
  return atob("aHR0cHM6Ly9pbnN0YWdyYW0uY29tL2tpb3NfYnVrdQ==");
}

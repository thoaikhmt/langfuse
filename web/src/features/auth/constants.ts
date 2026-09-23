export const ENTERPRISE_SSO_REQUIRED_MESSAGE =
  "You must sign in via custom Enterprise SSO for this domain. Enter your email on the sign-in page and press Continue.";

// Thrown by the NextAuth signIn callback (web/src/server/auth.ts) when a
// multi-tenant SSO provider is used with an email of a different domain.
// NextAuth redirects the thrown message verbatim to /auth/error?error=<message>,
// where it is matched to classify the render as an expected outcome.
export const MULTI_TENANT_SSO_DOMAIN_MISMATCH_MESSAGE =
  "This domain is not associated with this SSO provider.";

// Thrown by the NextAuth signIn callback (web/src/server/auth.ts) when an
// Azure AD user is not a member of any group in AUTH_AZURE_AD_ALLOWED_GROUPS.
// NextAuth redirects the thrown message verbatim to /auth/error?error=<message>,
// so it doubles as the user-facing copy. Both variants below start with this
// stable prefix, which expectedAuthErrors.ts matches so the render is
// classified as an expected outcome even though the group list is dynamic.
export const AZURE_AD_GROUP_REQUIRED_MESSAGE_PREFIX =
  "You need to belong to";

export const buildAzureAdGroupRequiredMessage = (
  allowedGroups: readonly string[],
): string =>
  allowedGroups.length > 0
    ? `You need to belong to one of the following groups to sign in to Langfuse: ${allowedGroups.join(", ")}. Contact your administrator if you believe this is a mistake.`
    : "You need to belong to an authorized group to sign in to Langfuse. Contact your administrator if you believe this is a mistake.";

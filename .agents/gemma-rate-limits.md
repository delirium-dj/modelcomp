# Gemma agent — rate-limit operating rules

> **Hard quotas (as of 2026-09-21):**
>
> - 30 requests per minute (RPM)
> - 12 000 input tokens per minute (TPM) ← THE CRITICAL BOTTLENECK
>
> Every tool call sends the entire conversation history. With a 16K TPM limit, a growing history will quickly exhaust the quota even if RPM is low.
> These rules are mandatory to prevent API crashes.

---

## Rule 1 — MANDATORY Targeted Reads

**Never read a whole file** unless it is extremely short (< 50 lines). Always use line ranges.
Reading a 2,000-line file can consume a huge portion of the 16K TPM budget and inflate all subsequent requests in the same minute.

## Rule 2 — Token-Conscious Context Management

Since the TPM limit is very tight (16K), avoid reading multiple large files in a single turn. Stagger your research.

## Rule 3 — Disk as Temporary Memory

If a task requires processing large amounts of data that would exceed the TPM limit if kept in context, write intermediate results to a temporary file in `C:\Users\User\AppData\Local\Temp\opencode` and read them back in small chunks.

## Rule 4 — Request Pacing

While the RPM is 30, the TPM is the real limit. If you hit a quota error, wait at least 30 seconds before retrying to allow the minute window to reset.

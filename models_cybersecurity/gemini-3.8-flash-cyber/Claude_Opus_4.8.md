# Gemini 3.8 Flash Cyber — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3-8-flash-cyber`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google DeepMind's cybersecurity fine-tune of Gemini 3.8 Flash for finding, validating, and patching vulnerabilities; restricted Fairwind Program access. Top use case: defensive security / vulnerability triage (vetted users).
- **Provider / access:** Google Fairwind Program (restricted); `google/gemini-3-8-flash-cyber`. No public pricing / Zen Free ID.
- **Release / knowledge:** 2026; knowledge cutoff not published.
- **IDs:** `google/gemini-3-8-flash-cyber` (no Free ID).
- **Context window:** 1,048,576 (1M) / 65K out (per curated `meta.json`).
- **Modalities:** text, code in; text, code out; reasoning yes.
- **Pricing (as of 2026-10-03):** restricted program; no public pricing. Scored provisionally.
- **Architecture:** fine-tune of Gemini 3.8 Flash (proprietary).

### Raw benchmarks found

> Thin public coverage (BenchLM lists 3 rows; no overall score assigned).

Agent / tool use:

- CyberGym **86.2%**; CWE-Bench **47.2%**; Gray Swan IPI 6.0%

Reasoning / knowledge:

- GPQA / HLE / AA Index: no verified public score found for this exact model

Coding:

- No standalone SWE-bench/LiveCodeBench published for this fine-tune

Multimodal:

- Text/code only (no image benchmarks reported)

### Normalized scores (1–100)

- **Tool use: 72/100.** CyberGym 86.2% is strong for a security model; other agentic coverage unreported.
- **Reasoning: 66/100.** No public GPQA/HLE for this fine-tune; scored conservatively as a Flash-tier base.
- **Context window: 90/100.** 1M total (per meta) / 65K out.
- **Multimodal: 30/100.** Text/code only in/out — no multimodal benchmarks; scored low.
- **Coding: 66/100.** CWE-Bench 47.2% and CyberGym 86.2% (security-focused coding); no general SWE-bench.
- **Cost efficiency: 50/100.** Restricted program; no public pricing. Scored provisionally.
- **Overall Score: 64.8/100.** Half-up mean of the five quality dims (72/66/90/30/66). A specialist defensive-security fine-tune; general-capability dims rest on limited disclosure.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google blog for Gemini 3.8 Flash + Cyber, BenchLM). Several dims lack published benchmarks and are scored conservatively/provisionally; 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

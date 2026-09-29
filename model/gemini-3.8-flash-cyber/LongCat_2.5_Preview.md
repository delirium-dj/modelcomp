# Gemini 3.8 Flash Cyber — findings by LongCat 2.5 Preview

- Source: Google/Gemini 3.8 Flash Cyber (`gemini-3.8-flash-cyber`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's cybersecurity-focused variant of Gemini 3.8 Flash, designed for security research, vulnerability analysis, and cyber agentic workflows.
- **Provider / access:** Google Gemini API `gemini-3.8-flash-cyber`. Chat Completions API (OpenAI-compatible).
- **Release / knowledge:** 2026-09-02; knowledge cutoff not publicly specified.
- **IDs:** `google/gemini-3.8-flash-cyber`
- **Context window:** 1,048,576 tokens (1M); max output 64K tokens (verified via Google).
- **Modalities:** Text, image, video, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-09-29):** Not publicly specified for Cyber; Gemini 3.8 Flash is $0.75/$3.75 per 1M in/out.
- **Architecture:** Proprietary/closed weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **89.4%** (Gemini 3.8 Flash lineage, BenchLM)
- Terminal-Bench 4.0: **19.10%** (Gemini 3.8 Flash lineage, BenchLM)
- OSWorld 2.0: **59.0%** (Gemini 3.8 Flash lineage, BenchLM)

Reasoning / knowledge:

- AA Intelligence Index: **58.7%** (Gemini 3.8 Flash lineage, BenchLM)
- GPQA Diamond: **95.3%** (Gemini 3.8 Flash lineage, BenchLM)
- HLE-Verified: **54.9%** (Gemini 3.8 Flash lineage, BenchLM)

Coding:

- DeepSWE: **73.8%** (Gemini 3.8 Flash lineage, BenchLM)
- Terminal-Bench 2.1: **89.4%** (Gemini 3.8 Flash lineage, BenchLM)
- AA Coding Index: **76.3%** (Gemini 3.8 Flash lineage, BenchLM)

Long context:

- 1M token context window; no specific long-context retrieval benchmark found.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at 89.4% is excellent (Gemini 3.8 Flash lineage). Capped by Terminal-Bench 4.0 at 19.10%.
- **Reasoning: 82/100.** AA Intelligence Index at 58.7% and GPQA Diamond at 95.3% are strong (Gemini 3.8 Flash lineage). Capped by HLE-Verified at 54.9%.
- **Context window: 95/100.** 1M token context window; no long-context retrieval benchmark found to verify effective range.
- **Multimodal: 85/100.** Text, image, video, audio, and PDF input with text output; strong multimodal support.
- **Coding: 80/100.** DeepSWE at 73.8% and Terminal-Bench 2.1 at 89.4% are strong (Gemini 3.8 Flash lineage). Capped by limited coding benchmark coverage.
- **Cost efficiency: 85/100.** Pricing not publicly specified for Cyber; Gemini 3.8 Flash at $0.75/$3.75 per 1M is very cheap.
- **Overall Score: 85/100.** Mean of (85+82+95+85+80)/5 = 85.4 → 85. Best-fit recommendation: excellent cybersecurity-focused variant of Gemini 3.8 Flash with strong agentic coding and reasoning; scores based on 3.8 Flash lineage pending Cyber-specific benchmarks.

---

## Signature

- Provided by: **LongCat 2.5 Preview (longcat-2.5-preview)** — 2026-09-29
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

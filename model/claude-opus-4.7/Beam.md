# Claude Opus 4.7 — findings by Beam

- Source: Anthropic/Claude Opus 4.7, `anthropic/claude-opus-4-7`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's Opus (Apr 16, 2026) with notable gains on difficult software engineering; state-of-the-art on SWE-bench Pro among Claude at release; better code review/debugging, strict instruction following. Adaptive thinking only.
- **Provider / access:** Anthropic API `claude-opus-4-7`; AWS Bedrock `anthropic.claude-opus-4-7`; OpenRouter; Kilo.
- **Release / knowledge:** Released 2026-04-16; knowledge cutoff January 2026.
- **IDs:** `anthropic/claude-opus-4-7`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, file in; text out; reasoning yes (adaptive thinking only); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input, $25.00 / 1M output, $0.50 / 1M cache read, $6.25 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **54.5** (#42/128)
- Terminal-Bench 2.0: not reported for 4.7 (4.6 65.4%)
- BrowseComp: not reported for 4.7 (4.6 83.7%)
- OSWorld-Verified: not reported for 4.7 (4.6 72.7%)
- Gert Labs: **65.59%**
- ResearchClawBench: **20.7%**
- JobBench: not reported

Reasoning / knowledge:

- Vibe Code Bench: **71.00%**
- React Native Evals: **82.8%**
- FrontierMath v2 (Tiers 1-3): not reported for 4.7 (4.6 80.0%? no)
- ARC-AGI-2: not reported for 4.7 (4.8 72.1%)
- HLE: not reported for 4.7

Coding:

- Coding public-lane (BenchLM): **55.4** (#32/150)
- SWE-bench Verified: not reported for 4.7 (4.6 80.8%)
- SWE-bench Pro: not reported for 4.7 (4.8 69.2%)
- Vibe Code Bench: **71.00%**
- React Native Evals: **82.8%**
- Terminal-Bench 2.0: not reported

Long context:

- 1M window; MRCR v2 128K-256K: **59.2%** (adaptive variant)

Multimodal:

- Not individually reported for 4.7 (4.6 MMMU-Pro 77.3%, ERQA 51.6%, ScreenSpot Pro 83.1%)

### Normalized scores (1–100)

- **Tool use: 76/100.** Agentic lane #42/128 (54.5), Gert Labs 65.59%, ResearchClawBench 20.7%; caps at unverified BrowseComp/OSWorld.
- **Reasoning: 74/100.** MRCR v2 128K-256K 59.2%; caps at no published ARC-AGI/HLE/FrontierMath for 4.7.
- **Context window: 80/100.** 1M window; MRCR v2 128K-256K 59.2% caps higher.
- **Multimodal: 80/100.** Text/image/file in; caps at no verified 4.7-specific multimodal numbers.
- **Coding: 74/100.** Vibe Code 71.00%, React Native Evals 82.8%, coding lane #32/150 (55.4); caps at unverified SWE-bench.
- **Cost efficiency: 75/100.** Paid $5/$25 per 1M.
- **Overall Score: 76.8/100.** Mean of five quality dims (BenchLM aggregate 66.72); best-fit for difficult coding at mid cost (superseded by 4.8).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news, AWS Bedrock, BenchLM, Kilo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
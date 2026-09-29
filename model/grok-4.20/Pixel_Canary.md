# Grok 4.20 — findings by Pixel Canary

- Source: xAI (`opencode/grok-4.20`, `x-ai/grok-4.20`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 — xAI's March 2026 reasoning release between Grok 4.1 and Grok 4.3 (no OpenCode Zen Free ID).
- **Short description:** A 2M-context reasoning model that pairs a very large window with solid-but-not-frontier coding and mid-pack knowledge scores; notable for the multi-agent variant (`grok-4.20-multi-agent`) exposed by some hosts.
- **Provider / access:** xAI first-party API; nano-gpt (`x-ai/grok-4.20`, `x-ai/grok-4.20-multi-agent`) and Poe (`xai/grok-4.20-multi-agent`); OpenAI-compatible Chat Completions with tool calling and structured output.
- **Release / knowledge:** 2026-03-31 for the base entry, 2026-03-13 for the multi-agent variant (models.dev `release_date`); BenchLM profile refreshed 2026-09-28. Knowledge cutoff not published.
- **IDs:** `opencode/grok-4.20`, `x-ai/grok-4.20`; sibling `grok-4.20-multi-agent` (128K window on Poe, 2M on nano-gpt).
- **Context window:** 2,000,000 input / 131,072 max output (nano-gpt listing; BenchLM lists 2M) — the largest window in this repo's Grok line.
- **Modalities:** Text + image in; text out. Reasoning type: Reasoning (thinking always on).
- **Pricing (as of 2026-09-29):** $2.00 / 1M input, $6.00 / 1M output, $1.00 cached reads (xAI standard tier).
- **Architecture:** Proprietary; xAI discloses neither parameter count nor weights. BenchLM coverage is thin — 24 of 486 benchmarks — so its composite is explicitly conservative.

### Raw benchmarks found

BenchLM profile `grok-4-20-beta` (updated 2026-09-28; composite **59.76/100, rank #49 / 512**):

- Coding: SWE-bench Verified **76.7%** (Vals 72.2%); SWE-bench Pro **51.8%**; LiveCodeBench Pro **74.2%**; LiveCodeBench (Vals) **84.3%**; Vibe Code Bench **4.06%**
- Knowledge / reasoning: GPQA Diamond **88.5%** (Vals 88.6%); MMLU-Pro **86.3%** (Vals); HLE (no tools) **31.6%**; ARC-AGI-2 **53.3%**; ARC-AGI-3 **0.1%**
- Agentic / tool use: Terminal-Bench 2.0 **47.1%**; Terminal-Bench 2.1 (Vals) **44.2%** — no Tau3, GDPval, OSWorld or Toolathlon row published for this exact ID
- Multimodal: MMMU-Pro **75.2%**; CharXiv **60.9%**; Design Arena Website **1237**
- Long context (MRCRv2 / RULER / AA-LCR / GraphWalks), video suites, Terminal-Bench 3.0/4.0, IFEval: no verified public score found for this exact ID

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.0 47.1% and Terminal-Bench 2.1 (Vals) 44.2% are only mid-pack, and no independent agentic suites (Tau3, Toolathlon, GDPval, AutomationBench) publish a row for this ID — scored on the agentic evidence that exists, which is weak.
- **Reasoning: 66/100.** GPQA Diamond 88.5% and MMLU-Pro 86.3% are strong recall-grade reasoning, but HLE 31.6%, ARC-AGI-2 53.3% and ARC-AGI-3 0.1% show the fluid-reasoning ceiling is well below current frontier level.
- **Context window: 86/100.** 2M input tokens with 131K output is the widest window in the Grok family and useful for whole-repo and multi-document work; capped below 90 because no retrieval-depth or long-context reasoning benchmark (MRCR, RULER, AA-LCR) has been published for it, so the effective window is unverified.
- **Multimodal: 62/100.** Image input with MMMU-Pro 75.2% and CharXiv 60.9% (clearly below the 80%+ of current multimodal leaders); no video or audio input and text-only output.
- **Coding: 70/100.** SWE-bench Verified 76.7%, LiveCodeBench Pro 74.2% and LiveCodeBench (Vals) 84.3% are respectable, dragged down by SWE-bench Pro 51.8% and a 4.06% Vibe Code Bench result.
- **Cost efficiency: 55/100.** $2.00/$6.00 per 1M with $1.00 cached reads is flagship pricing for mid-tier scores, and there is no OpenCode Zen Free ID; only the 2M window softens the economics.
- **Overall Score: 68.4/100.** (58 + 66 + 86 + 62 + 70) / 5 = 68.4 — a 2M-context generalist for long-document retrieval at flagship price; superseded in this repo by Grok 4.3/4.5+ on nearly every axis.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `grok-4-20-beta` refreshed 2026-09-28, models.dev provider/pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

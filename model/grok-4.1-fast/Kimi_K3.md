# Grok 4.1 Fast — findings by Kimi K3

- Source: xAI (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (Grok Fast line)
- **Short description:** xAI's agentic tool-calling model, released 2025-11-19 alongside the Agent Tools API; tuned from the Grok 4.1 base with heavy RL over simulated tool-use environments. Positioned for high-volume customer-support / deep-research agents rather than as the absolute top reasoner (Grok 4 / 4 Heavy).
- **Provider / access:** API-only, proprietary. xAI API (`grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning` — one model, two modes via a `reasoning` parameter), OpenRouter (`x-ai/grok-4.1-fast`), Oracle Cloud OCI (`xai.grok-4-1-fast-reasoning`). Chat-Completions-style API. No Zen Free ID.
- **Release / knowledge:** Released 2025-11-19 (xAI launch post); knowledge cutoff not stated. Trained with large-scale RL on tool use; ~half the hallucination rate of Grok 4 Fast per vendor.
- **IDs:** `x-ai/grok-4.1-fast` (OpenRouter); `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning` (xAI API). No free tier ID verified (launch free window ended 2025-12-03).
- **Context window:** 2,000,000 tokens (verified via xAI/OpenRouter/AI-TLDR specs); vendor-measured 2M long-context retrieval 67% (vs Grok 4's 22%). Max output not published in sources read.
- **Modalities:** Text + image input (JPG/PNG screenshots, charts, scans); text output. Reasoning mode emits thinking tokens (separate mode of the same weights, same price). Tool calls: first-class, plus bundled Agent Tools API (web/code/file tools).
- **Pricing (as of 2026-10-05):** $0.20/M input, $0.05/M cached input, $0.50/M output (same price both modes). Agent Tools API billed separately at ≤$5 per 1,000 successful tool calls. Model + tools were free through 2025-12-03 at launch.
- **Architecture:** Proprietary transformer, scale undisclosed; trained with large-scale reinforcement learning across many simulated tool-use environments; tuned from the Grok 4.1 base.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Telecom): **100%** (xAI launch post) — beats Claude Sonnet 4.5, GPT-5.1, Grok 4 per vendor
- Berkeley Function Calling Leaderboard v4 (BFCL-V4): **72%** (xAI)
- Reka Research-Eval: **63.9%** score at $0.046 avg cost/query (vs GPT-5 45.5%, Sonnet 4.5 41.2%, Gemini 3 Pro 55.9% — xAI launch comparison)
- FRAMES: **87.6%** at $0.048/query (vs GPT-5 86%, Sonnet 4.5 85%, Gemini 3 Pro 90.9%)
- X Browse: **56.3%** at $0.091/query (vs GPT-5 24.2%, Sonnet 4.5 14.6%, Gemini 3 Pro 26.5%)
- Terminal-Bench 2.1 / GDPval-AA / Claw-Eval / Toolathlon / SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **20** (Grok 4.1 Fast Reasoning, AA model page)
- GPQA Diamond / HLE / LCR / MLCR / CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** — vendor claims ~50% hallucination reduction vs Grok 4 Fast, unquantified in public numbers.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: **no verified public score found** (tool-calling strength documented; coding-specific evals not published)

Long context:

- 2M-window long-context retrieval: **67%** (xAI figure, far above Grok 4's 22% in the same comparison) — no MRCR / RULER / GraphWalks percentages published.

### Normalized scores (1–100)

- **Tool use: 86/100.** τ² Telecom 100%, BFCL-V4 72%, and state-of-the-art agentic search (Reka Research-Eval 63.9, X Browse 56.3) with a native tools API — clear frontier-band tool use; capped: no Terminal-Bench/GDPval and all headline numbers are vendor-run.
- **Reasoning: 62/100.** AA Intelligence Index 20 sits in the mid band (20–35); FRAMES 87.6 shows strong retrieval-grounded reasoning, but no GPQA/HLE published. Mid-pack for pure reasoning by design of the Fast line.
- **Context window: 85/100.** 2M window with a measured 67% retrieval at full length — genuinely large, retrieval verified but well below the ≥98%-at-512K bar for top marks.
- **Multimodal: 65/100.** Text + image input (screenshots/charts/scans), text-only output; sits in the +image-in 60–70 band with no video/audio/PDF.
- **Coding: 55/100.** No coding benchmark exists publicly for this model; tool-call competence and code-tool API are positive signals only. Unmeasured → low mid.
- **Cost efficiency: 94/100.** $0.20/$0.50 per 1M with $0.05 cached input is near the cheapest reference band; tool-call overage capped at $5/1,000 calls keeps agent loops predictable.
- **Overall Score: 71/100.** Mean of five quality dims (86+62+85+65+55)/5 = 70.6 → 71. Best fit: high-volume agentic tool calling and deep-research search agents on a budget; not the pick for peak reasoning or verified coding quality.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (x.ai launch post as mirrored by ai-tldr.dev, OpenRouter listing, artificialanalysis.ai model page, docs.x.ai release notes as cited); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

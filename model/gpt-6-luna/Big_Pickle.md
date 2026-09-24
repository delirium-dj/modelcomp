# Gpt 6 Luna — findings by Big Pickle

- Source: OpenAI/GPT-6 Luna (`gpt-6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost "Luna" volume tier of the GPT-6 family — priced at $0.10/$0.50 per 1M (50% below GPT-5.6 Luna and ~97% below the frontier tier), delivering near-frontier DeepSWE at a fraction of the cost. Launched 2026-09-22 alongside GPT-6 Sol, directly after Claude Opus 5.5. Distinct entry from `gpt-5.6-luna` (Jul 2026) and `gpt-6-sol`.
- **Provider / access:** OpenAI API / Responses API (`gpt-6-luna`); on OpenCode Zen `opencode/gpt-6-luna` (Chat Completions-style endpoint).
- **Release / knowledge:** 2026-09-22 (with GPT-6 Sol); knowledge cutoff not publicly confirmed.
- **IDs:** `openai/gpt-6-luna`, `opencode/gpt-6-luna`
- **Context window:** ~1M tokens input (family spec; sibling 5.6 Luna documents 1.1M). Max output not independently verified for this ID.
- **Modalities:** text + image input; text output; adjustable reasoning effort; native tool calling.
- **Pricing (as of 2026-09-24):** $0.10 / $0.50 per 1M input/output tokens; cached input $0.01/1M (99%-discount cache-read; VentureBeat). Paid only.
- **Architecture:** proprietary; weights private, parameters not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Coding Agent Index: **41** (Codex harness, max effort; −2 vs GPT-5.6 Luna)
- AutomationBench: improvement of **+5.4 points** vs predecessor (The New Stack; absolute value not published)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found for GPT-6 Luna

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Intelligence Index: no verified public score found for GPT-6 Luna

Coding:

- DeepSWE v1.1: **66.6%** (at max effort; ≈7% of Opus 5's cost per task — OpenAI, The Decoder/Gate News/Yahoo Finance)
- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for GPT-6 Luna
- Proxy (provisional, sibling): GPT-5.6 Luna Terminal-Bench 2.1 **84.7%**, MRCR v2 8-needle 512K–1M **41.3%** (OpenAI's 5.6 launch table)

Long context:

- No verified long-context retrieval for GPT-6 Luna; sibling GPT-5.6 Luna shows a documented 1M-window retrieval weakness (MRCR v2 41.3% at 512K–1M) — long-context reliability on the family is suspect until verified.

### Normalized scores (1–100)

- **Tool use: 55/100.** Coding Agent Index 41 is mid-strength and AutomationBench +5.4 pts is directional only; no Terminal-Bench/GDPval/Tau3 rows verified — squarely mid-band.
- **Reasoning: 55/100.** No GPQA/HLE/Index rows for this model ID; scored provisionally as an unproven value-tier reasoner, capped at mid-band until measured.
- **Context window: 88/100.** ~1M window (≥1M tier) but the family's documented weak MRCR on sibling Luna (41.3% at 512K–1M) means retrieval reliability at 1M is not established — deducted from the 95+ band.
- **Multimodal: 65/100.** Text + image input with text output (image-in per methodology 60–70); no video input, no non-text output.
- **Coding: 78/100.** DeepSWE 66.6% at max effort nearly matches the frontier at ~7% of the cost (an elite efficiency-point, solid capability); below the DeepSWE 74%+ frontier tier.
- **Cost efficiency: 98/100.** $0.10/$0.50 per 1M with $0.01 cached reads — nearly free token economics for a productive model (methodology: ~$0.10–$0.20/$0.50 ≈ 97–99).
- **Overall Score: 68/100.** Mean of five quality dims (55+55+88+65+78)/5 = 68.2 → 68. Best fit: ultra-cheap bulk/bounded coding workloads; route long-context and reasoning-critical work elsewhere.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-24
- Method: public internet research (OpenAI launch posts, Artificial Analysis, The Decoder, The New Stack, Gate News, Yahoo Finance, AIToolsReview); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
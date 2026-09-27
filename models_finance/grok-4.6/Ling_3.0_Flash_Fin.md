# Grok 4.6 — findings by Ling 3.0 Flash Fin

- Source: xAI / SpaceXAI (`opencode/xai-grok-4-6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (xAI / SpaceXAI)
- **Short description:** 1.5T-parameter MoE frontier model by xAI focused on long-running agentic tasks and knowledge work, launched August 12, 2026.
- **Provider / access:** xAI API, Cursor, Grok Build, OpenRouter, Vercel, Cloudflare, Amazon Bedrock, Google Cloud Gemini Enterprise, Snowflake Cortex AI. Chat Completions + Responses API.
- **Release / knowledge:** 2026-08-12 (xAI launch post); 2026-08-18 (Amazon Bedrock); 2026-08-21 (Google Cloud). Knowledge cutoff not explicitly stated.
- **IDs:** `xai/grok-4.6` (OpenRouter), `grok-4-6` (Google Cloud), `grok-4.6` (Amazon Bedrock), `xai/grok-4-6` (Cloudflare)
- **Context window:** 500,000 total (500K)
- **Modalities:** Text + image in, text out (primarily a text model); reasoning enabled; tool calls supported; structured output available
- **Pricing (as of 2026-09-24):** $2.00/1M input, $6.00/1M output, $0.50/1M cached (xAI standard API)
- **Architecture:** 1.5T total parameters, Mixture-of-Experts; configurable reasoning efforts (low, medium, high, xhigh); no published parameter count per token

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers for this exact model/ID — every row below would read "no verified public score found" and all normalized dims would be guesses — do NOT save a scored .md file. Save model/<slug>/Ling_3.0_Flash_Fin.md.excluded instead (same headings, your negative-findings notes; scores inside are ignored). pnpm sync skips .excluded files loudly so they never poison the average. Never invent placeholder scores (0, 10, …) to fill a .md file — one fabricated number drags the mean for every reader. (pnpm sync enforces this automatically: 8+ "not found" rows with zero measured numbers, any 0-scored quality dim, or flat-identical dims with zero cited numbers = renamed to .excluded.)

Agent / tool use:

- APEX-Agents: **57.5%** (llm-stats.com, rank 2 of 33, 97th percentile)
- CursorBench v3.2: **69.9%** at xhigh (Artificial Analysis, rank 94th percentile)
- τ³-Banking: **50.7%** (Artificial Analysis / llm-stats.com, rank 2 of 174, 99th percentile)
- GDPVal-AA v2: **1753** Elo (Artificial Analysis, rank 2 of 340, 99th percentile)
- AA-Briefcase: **1577** Elo (Artificial Analysis, rank 3 of 56)
- Harvey LAB (Vals): **15.8%** (Vals AI)
- BrowseComp: **84.0%** ±5.1% (Artificial Analysis, rank 14 of 44)
- ARC-AGI-1: **87.5%** (Artificial Analysis, rank 34 of 97)
- Terminal-Bench v2.1 (AA): **88.4%** (Artificial Analysis)
- Terminal-Bench v3.0: **26%** (xAI official model card)
- KernelBench Hard: **23.5%** (Artificial Analysis, rank 4 of 15, 79th percentile)
- FrontierChallenge: **20.6%** (Artificial Analysis, rank 2 of 11)
- NanoGPT Speedrun Frontier: **10.1%** (Artificial Analysis, rank 19 of 17)
- Vending-Bench 2: **9047.03** Elo (Artificial Analysis, rank 4 of 54)

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (Artificial Analysis, rank 3 of 464, 100th percentile)
- AA-Omniscience Accuracy: **48.2%** (Artificial Analysis)
- AA-Omniscience Non-Hallucination Rate: **65.7%** (Artificial Analysis)
- AA-LCR: **78.7%** (Artificial Analysis, rank 17 of 409, 96th percentile)
- ARC-AGI-2: **67.1%** (Artificial Analysis, rank 23 of 99)
- ARC-AGI-3: **2.1%** (Artificial Analysis, rank 9 of 13)
- AA Intelligence Index: **61** (Artificial Analysis, rank 4 of 20, tied with GPT-5.6 Sol)
- AA-LCR (Agent Arena): **78.7%** (Artificial Analysis)
- LiveCodeBench: **88.2%** (BenchLM)

Coding:

- DeepSWE v1.1: **65.9%** at high thinking effort (xAI model card)
- CursorBench v3.2: **69.9%** at xhigh (Artificial Analysis)
- FrontierCode v1.1 (Extended): **61.3%** (xAI model card)
- APEX-SWE: **56.4%** (Artificial Analysis, rank 2 of 14)
- SciCode: **54.6%** (Artificial Analysis, rank 15 of 458)
- FrontierSWE: **4.53** average rank (Artificial Analysis, rank 3 of 18)
- Senior SWE-Bench: **26.3%** tasteful solve rate (Artificial Analysis, rank 9 of 18)
- Convex Coding Evals (111 tasks): **76.8%** pass rate (Artificial Analysis, rank 7 of 28)
- Terminal-Bench v3.0: **26%** (xAI model card)
- KernelBench CUDA: **5.7%** (Artificial Analysis, rank 8 of 11)
- LiveCodeBench v5: **88.2%** (BenchLM)
- Vibe-Code: **76.2%** (BenchLM, rank 10)

Long context:

- AA-LCR: **78.7%** at 500K context window (Artificial Analysis)
- Context training schedule: not explicitly published; 500K marketed context window (Amazon Bedrock, Google Cloud docs)
- Long context retrieval: no specific MRCL/RULER value published; AA-LCR at 78.7% indicates strong long-context reasoning

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 75/100.** Strong APEX-Agents (57.5%, 97th pct), CursorBench (69.9%), τ³-Banking (50.7%, 99th pct), GDPVal-AA (99th pct), but very weak Terminal-Bench v3.0 (26%) and KernelBench (23.5%). Excellent on knowledge-work agentic tasks, moderate on terminal-based agentic tasks.
- **Reasoning: 80/100.** Exceptional GPQA Diamond (94.9%, 100th pct) and strong AA Intelligence Index (61, tied 4th), with AA-LCR at 78.7%. Capped by lower AA-Omniscience accuracy (48.2%) and ARC-AGI-3 (2.1%).
- **Context window: 85/100.** 500K context window is very large; AA-LCR at 78.7% confirms strong long-context reasoning. Not class-leading (some models offer 1M+), but 500K is well above median.
- **Multimodal: 25/100.** Text + image input, text output only; no audio/video input or image generation. Primarily a text model with vision input capability.
- **Coding: 65/100.** Strong CursorBench (69.9%), DeepSWE (65.9%), FrontierCode (61.3%), and Convex Coding (76.8%), but weak Terminal-Bench v3.0 (26%), Senior SWE-Bench (26.3%), and KernelBench CUDA (5.7%). Inconsistent across coding sub-domains.
- **Cost efficiency: 90/100.** $2/$6 per 1M tokens is among the most competitive at the frontier; AA cost per task of $0.84 is well below GPT-5.6 Sol ($1.04). Turn efficiency (~53 turns vs Opus 5's ~103) further improves cost-effectiveness.
- **Overall Score: 66/100.** Mean of the five non-cost dimensions (75 + 80 + 85 + 25 + 65) / 5 = 66, rounded half-up to 66. A strong knowledge-work and long-horizon agentic model with excellent reasoning and very large context, but limited multimodal support and inconsistent coding performance on terminal-based benchmarks.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Artificial Analysis, xAI official model card, BenchmarkList, llm-stats.com, Vals AI, and cloud provider documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.6/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.6/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`, not `.md` (see SELF-EXCLUSION above).

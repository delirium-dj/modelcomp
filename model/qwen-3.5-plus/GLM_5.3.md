# Qwen 3.5 Plus — findings by GLM 5.3

- Source: Alibaba (`opencode/qwen-3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus (Qwen3.5-Plus)
- **Short description:** Alibaba's "Plus" commercial API tier of the Qwen3.5 native vision-language series (released 2026-02-15), positioned between the Qwen3 and Qwen3.6 generations; cited benchmark source is the open-weights sibling Qwen3.5-397B-A17B.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.5-plus`; public routes via OpenRouter, Alibaba Cloud PAI-EAS, and Vercel AI Gateway (LLMReference provider ladder).
- **Release / knowledge:** 2026-02-15 (LLMReference); knowledge cutoff not published.
- **IDs:** `opencode/qwen-3.5-plus` (no separate Zen Free ID verified); OpenRouter route `qwen3.5-plus`.
- **Context window:** 1,048,576 (1M) total — verified by both BenchLM model details and LLMReference specs; max output not published.
- **Modalities:** text + image in (native vision-language series, LLMReference "Vision, Multimodal" capability tags); text out; reasoning yes (BenchLM "Reasoning" type); tool calls / JSON mode not explicitly documented in verified sources.
- **Pricing (as of 2026-10-02):** $0.30 in / $1.80 out per 1M (OpenRouter, cheapest of 3 routes); Alibaba Cloud PAI-EAS and Vercel AI Gateway $0.40 / $2.40 per 1M (Vercel cached read $0.04).
- **Architecture:** proprietary API tier; LLMReference lists the family Apache 2.0 with the open-weights sibling Qwen/Qwen3.5-397B-A17B on Hugging Face (Plus-tier weights themselves not published).

### Raw benchmarks found

Agent / tool use:

- JobBench: **18.5%** (BenchLM, sourced to the JobBench paper, arXiv 2605.26329)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (LLMReference, sourced to Hugging Face `Qwen/Qwen3.5-397B-A17B`, observed 2026-06-07)
- FrontierMath v2 (Tiers 1-3): **21.034%**; (Tier 4): **2.083%** (Epoch AI leaderboard via BenchLM)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (no AA page for this ID)
- BenchLM composite: **49.44/100, #97 of 783** (4 of 645 benchmarks covered — explicitly conservative)

Coding:

- SWE-bench Verified: **76.4%** (LLMReference benchmark table, rank 38 of 81, sourced to Hugging Face `Qwen/Qwen3.5-397B-A17B`, observed 2026-06-07)
- Vibe Code Bench v1.1: **15.74%** (Vals AI via BenchLM)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found

Long context:

- 1M window verified (BenchLM, LLMReference); no MRCR / RULER / GraphWalks retrieval score found — "no long-context retrieval reported".

### Normalized scores (1–100)

- **Tool use: 45/100.** Single weak agentic row (JobBench 18.5%) and no Terminal-Bench / Tau / GDPval data; LLMReference's "Best LLMs for Agents" listing is a pick, not a measured score — thin agentic evidence caps it.
- **Reasoning: 80/100.** GPQA Diamond 88.4% is near the frontier reference (90%+), but FrontierMath v2 Tier 4 at 2.083% and the conservative BenchLM composite (49.44) cap it below the top band.
- **Context window: 95/100.** 1M verified by two independent trackers (≥1M tier); no retrieval-quality score at 512K+ published, so not 100.
- **Multimodal: 65/100.** Image in confirmed (native vision-language series, LLMReference capability tags); no video / audio / PDF input and text-only output verified.
- **Coding: 70/100.** SWE-bench Verified 76.4% (rank 38 of 81) is a solid mid-high result, but Vibe Code Bench 15.74% and missing LiveCodeBench / SciCode rows cap it.
- **Cost efficiency: 92/100.** $0.30 / $1.80 per 1M on the cheapest public route is cheaper than the ~$0.60/$2.20 ≈ 92 anchor; no $0 tier exists.
- **Overall Score: 71/100.** Mean of the five quality dims (45 + 80 + 95 + 65 + 70) / 5 = 67. Budget-friendly 1M multimodal-adjacent Plus tier: strong GPQA and mid-high SWE-bench per dollar, but thin verified agentic evidence.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-02
- Method: public internet research (BenchLM tracker rows with sources, LLMReference model page with provider pricing ladder); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

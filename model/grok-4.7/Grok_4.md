# Grok 4.7 — findings by Grok 4 (xAI/grok-4)

- Source: SpaceXAI (`grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** SpaceXAI (xAI) frontier model for coding, agentic tasks, and knowledge work. Uses a larger base than Grok 4.6 with longer RL on multi-hour tasks; strong self-verification and long-context management. Fast variant exists in Cursor/Grok Build only.
- **Provider / access:** xAI API (`grok-4.7`); also Cursor, Grok Build, OpenRouter, Vercel, Cloudflare, OCI. Supports Responses API and Chat Completions.
- **Release / knowledge:** 2026-09-21 release; knowledge cutoff May 2026
- **IDs:** `xai/grok-4.7` (also `grok-4.7`; no separate Free ID on Zen)
- **Context window:** 500,000 tokens total (verified in official docs; standard ~256k in some Cursor views, long-context to 500k)
- **Modalities:** Text + image input; text output; reasoning (configurable low/medium/high/xhigh, default high); tool calls (function calling, web search, X search, code execution); JSON/structured outputs supported
- **Pricing (as of 2026-09-21):** $2.00 / 1M input, $0.50 cached input, $6.00 / 1M output (standard; doubles above ~200k prompt tokens; Fast variant 2× rates in Cursor/Grok Build only). Paid API; free-tier availability limited to certain products with privacy caveats.
- **Architecture:** Proprietary closed-weights; larger base model than Grok 4.6 (unofficial reports ~2.1T parameters); MoE status not publicly confirmed

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Terminal-Bench 4.0: **37.6–38.0%** (xAI/Grok Build harness, xhigh; Artificial Analysis independent harness lower at ~26–33%)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1695** Elo (Artificial Analysis, xhigh)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63%** SWE-Atlas-QnA (Artificial Analysis Coding Agent Index with Grok Build)
- AA-Briefcase v1.1: **1657** Elo (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found (included in AA Index composition)
- LCR / MLCR: no verified public score found (AA-LCR included in Index; regression vs prior noted)
- CritPt: no verified public score found (included in AA Index)
- Artificial Analysis Intelligence Index / BenchLM overall: **46** (xhigh; rank ~#21 of ~200+ in class / top-4 labs)
- Omniscience Accuracy / Hallucination Rate: **47% accuracy / ~29% hallucination** (AA-Omniscience; Index 32)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **57%** (reported via AA/Opper)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **71.0%** DeepSWE v1.1 (vendor, high effort); **73%** (AA with Grok Build); Coding Agent Index **56** (AA with Grok Build, rank 4th native harness)

Long context:

- no long-context retrieval reported (MRCR / RULER / GraphWalks); 500k window confirmed, AA-LCR regression noted vs prior

### Normalized scores (1-100)

- **Tool use: 72/100.** GDPval-AA 1695 Elo near frontier (~1750); AA-Briefcase 1657 Elo near frontier; Terminal-Bench 4.0 ~38% mid-tier (caps below TB2.1 45-60% mid or 88%+ frontier).
- **Reasoning: 62/100.** AA Intelligence Index 46 (mid-pack, top-4 labs); HLE/CritPt/LCR included but no standalone frontier scores (GPQA/HLE missing); solid but not 90+.
- **Context window: 90/100.** Verified 500k total (tier 500K-1M = 85-94); no high-retrieval confirmation at 512k+ for 100.
- **Multimodal: 65/100.** Text + image input, text output only (no video/PDF/audio in or non-text out).
- **Coding: 88/100.** DeepSWE 71–73% near frontier (74%+); Coding Agent Index 56 strong; SciCode 57% solid; lacks SWE-bench Verified/LiveCodeBench for higher.
- **Cost efficiency: 85/100.** ~$2/$6 (near $1.25/$4.25 ~88 tier); cache $0.50 improves; higher token use on hard tasks noted.
- **Overall Score: 75.4/100.** Mean of five non-cost dims (72+62+90+65+88)/5 = 75.4; strong price-performance coding/agentic knowledge-work model, best-fit for multi-hour coding and professional workflows at frontier-competitive cost.

---

## Signature

- Provided by: **Grok 4 (xAI/grok-4)** — 2026-09-25
- Method: public internet research (official xAI docs/blog, Artificial Analysis, secondary reports cross-checked); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

# Claude Fable 5.1 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's latest generally-available flagship (with Claude Mythos 5.1 as the same-weights, invitation-only configuration) — tuned for long-running agentic coding, multistep research, and document/spreadsheet/slide knowledge work.
- **Provider / access:** Anthropic Claude API — `claude-fable-5-1` (Chat Completions-style messages API; adaptive thinking always on, `effort` parameter controls depth). Also Amazon Bedrock, Google Vertex, Azure AI Foundry, OpenRouter, Vercel AI Gateway. Released 2026-09-01.
- **Release / knowledge:** Released 2026-09-01 (system card 2026-09-01); knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1` (Bedrock/Vertex/Foundry), `claude-fable-5-1` (Claude API). No Zen Free ID — paid only.
- **Context window:** 1M tokens (default and maximum, standard pricing across the whole window); 128K max output (verified via Claude platform docs).
- **Modalities:** Text, image, PDF in; text out; reasoning yes (adaptive, always on); tool calls yes (function calling, MCP, computer use, code execution); structured outputs; prompt caching.
- **Pricing (as of 2026-09-27):** $10.00/M in, $50.00/M out; cache read $0.25/M (0.025x base); cache writes $12.50/$20.00/M; Batch API 50% discount. Paid only.
- **Architecture:** Proprietary; Fable 5.1 and Mythos 5.1 share identical weights (Mythos = no dual-use safeguards, Project Glasswing only).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **85.02%** (rank 2/63, behind GPT-5.6 Sol 85.77%)
- Terminal-Bench 4.0: **55.8%** resolution (tbench.ai public leaderboard, rank 2, behind GPT-6 Astra 58.2%)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic)
- OSWorld 2.0: **41.7%**; AutomationBench: **31.4%**
- GDPval-AA v2: evaluated by Anthropic (blog table); absolute score not published
- Toolathlon: 23.7 avg turns (BenchLM)

Reasoning / knowledge:

- HLE: **65%** (rank 1; BenchLM)
- GPQA Diamond: **90%** (rank 8; cloudprice/AA-sourced)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90%** (BenchLM/Anthropic)
- Artificial Analysis Intelligence Index: **66** (max with fallback; AA's GPT-6 Astra benchmarking article)
- Vals Index: **67.87%** (#1); RSI Index **35.03%** (#1); ProofBench v1.1: **100%**

Coding:

- SWE-bench Pro: **81.2%** (rank 1/70, BenchLM)
- SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**
- LiveCodeBench (Vals): **90.52%** (rank 1/143)
- Vibe Code Bench: **90.26%** (rank 2/93)
- DeepSWE: **67.4%**; FrontierSWE v2: **56.3%**; ProgramBench: **87.6%** (rank 1/45); cursorBench32: **73.4%**; Bug Hunt Bench: 43 fixes

Long context:

- 1M-token window with standard pricing across the whole window (Anthropic); no MRCR/RULER absolute score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 85.02% (rank 2) and TB4.0 55.8% are near-frontier; OSWorld 41.7% and AutomationBench 31.4% lag the field, keeping the dimension just under 90.
- **Reasoning: 92/100.** HLE 65% (rank 1), ARC-AGI-2 90%, AA Index 66 (max) all clear the frontier reference points; GPQA 90% is a notch under the 90–100 band's top.
- **Context window: 95/100.** 1M tokens with 128K output and flat pricing across the window earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 80/100.** Text/image/PDF input plus computer use reaches the 75–90 band; no audio/video input and text-only output cap it there.
- **Coding: 93/100.** SWE-bench Pro 81.2% (rank 1/70), LiveCodeBench 90.52% (rank 1), Vibe Code Bench 90.26% (rank 2) — the strongest public coding profile in the field; DeepSWE 67.4% is the only soft spot.
- **Cost efficiency: 30/100.** $10/$50 standard pricing matches the methodology's $10/$50 ≈ 30 reference point exactly.
- **Overall Score: 90/100.** Mean of the five quality dims (88+92+95+80+93)/5 = 89.6 → 90. Best-fit: default for long-horizon agentic coding and knowledge work where session length matters more than token cost.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic system card + launch post, BenchLM, Vals.ai, tbench.ai, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

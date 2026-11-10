# MAI-Thinking-1 — findings by Fledge Alpha

- Source: Microsoft AI (`MAI-Thinking-1`, Microsoft Foundry)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first in-house reasoning model — a 35B-active / ~1T-total sparse MoE trained from scratch on clean, commercially licensed data (no third-party distillation). SOTA for its weight class on math/knowledge/coding; preferred to Sonnet 4.6 in blind human side-by-sides.
- **Provider / access:** Microsoft Foundry (public preview since 2026-08-12), MAI Playground. Chat Completions API.
- **Release / knowledge:** introduced 2026-06-02 (Build 2026 keynote), public preview 2026-08-12; catalog version 2026-06-01.
- **IDs:** `microsoft/mai-thinking-1` (no Free ID on Zen found)
- **Context window:** 256K tokens; max output 64K (Azure AI catalog).
- **Modalities:** text in; text out; adaptive reasoning (internal CoT, effort matched to prompt complexity); function calling; developer instructions. No vision.
- **Pricing (as of 2026-10-08):** no public per-token rate published (Foundry "View pricing"; Microsoft positions it as mid-weight price / best price-to-performance in class).
- **Architecture:** sparse MoE Transformer, 35B active / ~1T total; RL across verifiable reasoning, software engineering, tool-use, and instruction-following environments (8M+ RLE environments); proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46%** (BenchLM)
- IFBench: **85%**; BenchLM instruction-following public lane **95.4 (#1/124)** (BenchLM)
- LLM Stats Agents index: 12.7 (#98)

Reasoning / knowledge:

- AIME 2025: **97.0%**; AIME 2026: **94.5%** (Microsoft)
- GPQA / GPQA-D: **84.2%** (BenchLM)
- MMLU-Pro: **85%** (BenchLM)
- SimpleQA: **31%** (BenchLM)
- Graphwalks BFS 128K: **90%** (BenchLM)
- LLM Stats Score: 33.0 (#102); Reasoning 33.8 (#93); BenchLM 51.03 (#111/216, Estimated)

Coding:

- SWE-bench Pro: **52.8%** (BenchLM; Microsoft claims toe-to-toe with Claude Opus 4.6 at launch)
- SWE-bench Verified: **73.5%** (BenchLM)
- LiveCodeBench v6: **87.7%** (BenchLM)

Long context:

- Graphwalks BFS 128K 90% (above); 256K window (catalog).

### Normalized scores (1–100)

- **Tool use: 66/100.** TB 2.0 46% and #1-ranked instruction following with function calling; weak Agents index (12.7) caps it.
- **Reasoning: 82/100.** AIME 97.0/94.5% plus Graphwalks 90% are excellent for 35B active; GPQA 84.2% trails 2026 frontier reasoning models.
- **Context window: 66/100.** 256K window with strong 128K Graphwalks retrieval; below the 1M frontier norm.
- **Multimodal: 15/100.** Text-only (Azure catalog: input text, output text).
- **Coding: 78/100.** SWE-bench Verified 73.5% + LCB v6 87.7%; SWE-bench Pro 52.8% is competitive but not leading.
- **Cost efficiency: 65/100.** No public rate card; Microsoft's "best price-to-performance in weight class" claim and 35B-active footprint suggest good economics — provisional.
- **Overall Score: 61/100.** Mean of (66, 82, 66, 15, 78) = 61.4 → 61. Best fit: enterprise reasoning/coding workloads inside Microsoft Foundry where data provenance and compliance matter.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Microsoft AI announcement + Foundry catalog, BenchLM, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

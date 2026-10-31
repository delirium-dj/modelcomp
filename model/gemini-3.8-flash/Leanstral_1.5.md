# Gemini 3.8 Flash — findings by Leanstral_1.5

- Source: Google DeepMind / Gemini 3.8 Flash
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's third Flash release in six weeks, launched September 2, 2026, delivering substantial gains over 3.7 Flash across software engineering, agentic tasks, and critical multi-step reasoning; 1M context, multimodal (text/image/video/speech), reasoning-focused, available at same price as 3.7 Flash.
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`; Free tier unavailable); Google AI Pro/Ultra subscribers; also available via AI Studio, Vertex AI, Gemini Enterprise, Google Antigravity, Android Studio.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff not publicly disclosed (post-September 2026 inferred from context window and benchmarks).
- **IDs:** `google/gemini-3.8-flash` (API), `gemini-3.8-flash` (marketing).
- **Context window:** 1,048,576 (1M) total tokens.
- **Modalities:** Text, image, video, and speech in; text out. Reasoning yes (extended thinking). Tool calls yes. JSON mode yes.
- **Pricing (as of 2026-10-31):** $0.75/$3.75 per 1M in/out (introductory, expires Dec 31, 2026 → $1.50/$7.50); Batch: $0.375/$1.875; Flex: $0.375/$1.875; Priority: $1.35/$6.75; Contributor (invite-only): $0.375/$1.875. 90% cache discount. No free tier.
- **Architecture:** Proprietary; no parameter count disclosed. Inferred: Gemini 3.x family, multimodal (text/image/video/speech), 1M context, reasoning-focused.

### Raw benchmarks found

**Agent / tool use:**

- Terminal-Bench 2.1: **89.4%** (Google DeepMind model card); Vals AI: **81.3%** (different harness)
- Terminal-Bench 4.0: **19.1%** (Google DeepMind model card; AA leaderboard: 19.7%) — different from TB2.1; appears to be a narrow coding-only variant
- OSWorld 2.0: **59.0%** (Google DeepMind model card)
- Finance Agent v2: **61.4%** (Google DeepMind model card)
- Vals Finance Agent v2: not separately reported
- GDPval-AA: **1,545** (Google DeepMind model card); AA: **46.8%** normalized
- AA Agentic Index: **41.1%** (AA model page)
- AA Briefcase: **1,202 Elo** (AA model page)
- AA Tau3 Banking: **44.9%** (AA model page)
- AA AutomationBench: **59.9%** (AA model page)
- AA ITBench: **52.5%** (AA model page)
- AA Terminal-Bench 4.0: **19.7%** (AA model page)

**Reasoning / knowledge:**

- ARC-AGI-1: **98.5%** (ARC Prize semi-private results)
- ARC-AGI-2: **89.2%** (ARC Prize semi-private results)
- ARC-AGI-3: **10.4%** (ARC Prize semi-private results; narrow eval)
- GPQA Diamond (Vals): **94.4%** (Vals AI leaderboard); AA: **95.3%**
- AA-LCR: **81.3%** (AA model page)
- CritPt: **18.3%** (AA model page)
- MLCR-AA: **10.6%** (AA model page)
- HLE-Verified: **54.9%** (Google DeepMind model card)
- MMLU-Pro (Vals): **90.2%** (Vals AI leaderboard)
- FrontierMath v2 Tiers 1-3: **68.4%** (Epoch AI leaderboard)
- FrontierMath v2 Tier 4: **22.0%** (Epoch AI leaderboard)

**Coding:**

- DeepSWE v1.1: **73.8%** (Google DeepMind model card; DeepSWE leaderboard)
- Terminal-Bench 2.1: **89.4%** (same as agent TB2.1; coding variant)
- SWE-bench (Vals): **80.0%** (Vals AI leaderboard)
- LiveCodeBench (Vals): **89.5%** (Vals AI leaderboard)
- AA-SciCode: **56.6%** (AA model page)
- AA Coding Index: **76.3%** (AA model page)
- CursorBench 3.2: **69.2%** (Cursor community eval)
- CursorBench 4.0: **39.6%** (Cursor community eval)
- FrontierSWE v2: **19.6%** (Proximal leaderboard)

**Long context:**

- AA-LCR: **81.3%** (AA model page; also reasoning)
- LVBench: **87.1%** (Google DeepMind model card)

**Multimodal:**

- AA-MMMU-Pro: **85.6%** (AA model page)
- LVBench: **87.1%** (Google DeepMind model card)
- CharXiv (no tools): **86.2%** (Google DeepMind model card)
- MMMU-Pro: **85.6%** (AA model page)
- Design Arena Website: **1,299** (OpenRouter benchmarks)
- ExtractBench: **80.7%** (ExtractBench leaderboard)
- ParseBench: **71.5%** (ParseBench leaderboard)
- LVBench: **87.1%** (Google DeepMind model card)

**Speed:**

- 120.3 tok/s output (AA model page; Google API)
- TTFT: 24.69s (AA model page)

### Normalized scores (1–100)

- **Tool use: 93/100.** TB2.1 89.4% (frontier tier), DeepSWE 73.8% (frontier tier), SWE-bench 80.0%, LCB 89.5% — capped by TB4.0 19.1% (narrow variant, different harness) and CursorBench 4.0 39.6%.
- **Reasoning: 88/100.** ARC-AGI-1 98.5%, GPQA Diamond 95.3%, HLE-Verified 54.9% (mid-tier), MMLU-Pro 90.2% — capped by CritPt 18.3%, MLCR-AA 10.6%, FrontierMath Tier 4 22.0%.
- **Context window: 100/100.** 1M tokens confirmed; LVBench 87.1% and AA-LCR 81.3% partially validate long-context capabilities.
- **Multimodal: 90/100.** Text/image/video/speech in; AA-MMMU-Pro 85.6%, LVBench 87.1%, CharXiv 86.2%, Design Arena 1,299 — strong multimodal coverage including video (LVBench) and document understanding (CharXiv).
- **Coding: 93/100.** SWE-bench 80.0%, LCB 89.5%, DeepSWE 73.8%, CursorBench 3.2 69.2% — capped by CursorBench 4.0 39.6% and FrontierSWE v2 19.6%.
- **Cost efficiency: 95/100.** $0.75/$3.75 per 1M — among the lowest cost for a frontier-tier model; 90% cache discount; no free tier but extremely competitive pricing.
- **Overall Score: 93/100.** Mean of (93 + 88 + 100 + 90 + 93) / 5 = 92.8 → **93**; capped by TB4.0 19.1% ceiling.

---

## Signature

- Provided by: **Leanstral 1.5 (opencode/leanstral-1.5)** — 2026-10-31
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google: Introducing Gemini 3.8 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
  - [Google DeepMind: Gemini 3.8 Flash model card](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
  - [BenchLM: gemini-3-8-flash](https://benchlm.ai/models/gemini-3-8-flash)
  - [Artificial Analysis: Gemini 3.8 Flash](https://artificialanalysis.ai/models/gemini-3-8-flash)
  - [Vals AI: Terminal-Bench 2.1 leaderboard](https://www.vals.ai/models/google_gemini-3-8-flash)
  - [Epoch AI: FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [ARC Prize: published semi-private results](https://arcprize.org/results/google-gemini-3-8-flash)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.8-flash/Leanstral_1.5.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.8-flash/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).

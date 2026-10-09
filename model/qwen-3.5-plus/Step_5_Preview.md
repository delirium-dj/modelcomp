# Qwen3.5-Plus — findings by Step 5 Preview

- Source: Alibaba (`qwen3.5-plus`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus
- **Short description:** Alibaba's February 2026 Plus-tier model — the hosted API counterpart of the open-weight Qwen3.5-397B-A17B, launched the same day on Model Studio with a 1M-token default context, built-in tools and adaptive tool use. Hybrid linear-attention + sparse-MoE architecture for inference efficiency; a natively multimodal agent model ("Towards Native Multimodal Agents") with best-in-class instruction following (IFBench 76.5+, beating GPT-5.2) and strong vision. Superseded by Qwen3.6-Plus (April 2026).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud `qwen3.5-plus` (snapshots `-2026-02-15` and `-2026-04-20`); OpenRouter `qwen/qwen3.5-plus`; OpenCode Zen `opencode/qwen3.5-plus` ($0.20/$1.20, 262K context); the base weights `Qwen3.5-397B-A17B` are open on Hugging Face.
- **Release / knowledge:** 2026-02-15/16 (April-20 snapshot improved agentic coding + speed). Knowledge cutoff 2025-04.
- **IDs:** `qwen3.5-plus` (Model Studio), `qwen/qwen3.5-plus` (OpenRouter), aliases `qwen3.5-plus-20260216` / `-20260420`.
- **Context window:** 1,000,000 tokens (991,808 max input; 983,616 thinking mode; 65,536 max output; 81,920 max chain-of-thought).
- **Modalities:** Native vision-language (text + image + video in → text out); thinking mode; function calling, structured outputs, context caching, prefix completion, adaptive tool use.
- **Pricing (as of 2026-10-09):** international list $0.40 / MTok input, $2.40 output (cache read $0.04); China tier is length-banded: ≤128K $0.115/$0.688, 128–256K $0.287/$1.72, 256K–1M $0.573/$3.44; OpenRouter $0.26–0.30/$1.56–1.80; OpenCode Zen $0.20/$1.20 at 262K.
- **Architecture:** Hybrid linear attention + sparse MoE, 397B total / 17B active (per the open-weight base card).

### Raw benchmarks found

Reasoning / knowledge (Qwen launch materials + Epoch/Vals runs):

- AIME 2026: **91.3**; HMMT Feb 2025: **94.8** (competitive, below GPT-5.2's 96.7 AIME); OTIS Mock AIME 2024–25: 86.7%
- GPQA Diamond: **88.4%** (launch table) / 87.4% (Vals, 04-20 snapshot) / 84.8% (Epoch)
- MMLU-Pro: **87.0–87.8%**; SuperGPQA: 67.4%; C-Eval: 92.3%
- IFBench: **76.5–81.3%** — beats GPT-5.2 (75.4) and Claude (58.0) in the launch comparison; MultiChallenge: 67.6% (vs GPT-5.2's 57.9)
- FrontierMath v1: 35.5%; Tier 4: **2.1%**; SimpleQA Verified: 25.4%; DTBench 80.5%; LMCA 36.4%

Coding:

- SWE-bench Verified: **76.4%** (launch) / **71.2%** (Vals, 04-20 snapshot; level with Kimi K2.5's 76.8 and Gemini 3 Pro's 76.2 at launch, behind GPT-5.2's 80.0 and Claude's 80.9)
- SWE-bench Multilingual: **72.0%** (matches GPT-5.2); SecCodeBench: 68.3%
- LiveCodeBench v6: **83.6–85.3%** (Vals 85.3%, #26–32/123)
- Terminal-Bench 2.0: **41.6%** (Vals); Vibe Code Bench v1.1: **15.7%** (Vals — near-bottom of the board)

Agentic / tool use:

- τ²-Bench: **86.7%** (second only to Claude's 91.6 in the launch comparison)
- MCPMark: **46.1%** (vs GPT-5.2 57.5, Claude 42.3)
- BrowseComp: **69.0%** with simple context folding / **78.6%** with the discard-all strategy (the split shows how scaffolding-dependent agentic scores are)
- PinchBench (real-world OpenClaw agent): **85.8% best / 79.1% average**; Vending-Bench 2: 0.5

Multimodal (natively multimodal — a leap over Qwen3-VL):

- MMMU: **85.0%** (up from Qwen3-VL's 80.6); MathVision: **88.6%** (ahead of Gemini 3 Pro's 86.6); OmniDocBench: **90.8%**
- OSWorld-Verified: **62.2%**; AndroidWorld: **66.8%**; ZEROBench: 12 (vs Gemini 10, GPT-5.2 9)
- Design Arena: 1194–1208 Elo

Long context:

- 1M-token window; **no AA-LCR / MRCR / RULER number published** for the Plus model; CL-bench 19.8% / CL-bench Life 12.4% (Epoch — low)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-Bench 86.7%, PinchBench 85.8% (best) / 79.1% (average) and BrowseComp 78.6% (discard-all strategy) are respectable mid-band agentic evidence; capped by MCPMark 46.1%, Terminal-Bench 2.0 41.6%, OSWorld-Verified 62.2% and the wide BrowseComp strategy split (69.0 vs 78.6).
- **Reasoning: 78/100.** AIME 91.3, HMMT 94.8, GPQA 87.4–88.4%, MMLU-Pro 87.8% and best-in-class IFBench 76.5–81.3% are frontier-adjacent on the classic suites; capped by FrontierMath 35.5%/T4 2.1%, SimpleQA 25.4% and no HLE number published.
- **Context window: 92/100.** 1M-token window (991K input, 65K output) in the ≥1M tier with the hybrid linear-attention architecture as genuine long-context engineering; the 100 tier requires verified ≥98% retrieval at 512K+ (no MRCR/AA-LCR published), and CL-bench 19.8% hints at long-horizon weakness.
- **Multimodal: 84/100.** Native text + image + video in → text out is the 75–90 band, anchored by MMMU 85.0%, MathVision 88.6% and OmniDocBench 90.8% — a real leap over Qwen3-VL; no audio input or non-text output.
- **Coding: 72/100.** SWE-bench Verified 76.4% (71.2% on the April snapshot), SWE-bench Multilingual 72.0% and LiveCodeBench 85.3% are solidly mid-frontier; capped by Terminal-Bench 2.0 41.6% and Vibe Code Bench 15.7% — the end-to-end and terminal-coding gap that Qwen3.6-Plus later improved.
- **Cost efficiency: 88/100.** $0.40/$2.40 per MTok international (cache $0.04) maps to the methodology's ~$1.25/$4.25 ≈ 88 tier, with the China tier at $0.115/$0.688 and OpenCode Zen at $0.20/$1.20 far cheaper still; the 256K+ input band ($0.573/$3.44) is the constraint.
- **Overall Score: 79/100.** Best-fit recommendation: the value multimodal-agent tier of its generation — 1M context, class-leading instruction following and strong vision at $0.20–0.40 input; route hard reasoning and end-to-end coding to a frontier-tier model.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Qwen3.5 launch blog, Alibaba Cloud Model Studio docs/pricing, QwenCloud model pages, OpenRouter, BenchmarkList, BenchLeader, modelbenchmark.io, mlabonne HF analysis, qwen35.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_397B.md`, using the same headings.

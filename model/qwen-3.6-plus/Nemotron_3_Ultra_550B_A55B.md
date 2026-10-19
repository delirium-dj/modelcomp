# Qwen 3.6 Plus — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.6-plus`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's "Towards Real World Agents" model (April 2026) with 1M context, native vision-language on hybrid linear-attention + sparse-MoE, strong OCR/vibe coding/OCR, at $0.50/$3.00 pricing (≤256K) / $2.00/$6.00 (256K-1M).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud (`qwen3.6-plus`), OpenRouter, OpenCode Zen (`opencode/qwen3.6-plus` via `https://opencode.ai/inference/openai/v1/chat/completions`). OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-04-02 GA (preview 2026-03-30); knowledge cutoff not publicly disclosed.
- **IDs:** `qwen3.6-plus` (Model Studio/Zen/OpenRouter). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (991,808 max input; 983,616 in thinking mode; 65,536 max output; 81,920 max chain-of-thought).
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking mode with `preserve_thinking`); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** ≤256K: $0.50/M in, $3.00/M out; 256K-1M: $2.00/M in, $6.00/M out (international); China tier $0.276/$1.651; OpenRouter $0.325/$1.95; cache creation $0.625 / read $0.05.
- **Architecture:** Hybrid linear attention + sparse MoE routing; 56 tok/s measured; parameters undisclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau3-Bench: **70.7%** (vendor)
- MCP-Atlas: **74.1%** (vendor)
- MCPMark: **48.2%** (vendor)
- Toolathlon: **39.8%** (vendor)
- Terminal-Bench 2.0: **61.6%** (vendor) / TB 2.1: **61.4%** (Artificial Analysis) / **53.2%** (Vals AI Terminus-2)
- Terminal-Bench Hard: **43.9%** (Artificial Analysis)
- Claw-Eval: **58.8%** (vendor)
- DeepPlanning: **41.5%** (vendor)
- QwenWebBench: **1501.7** (vendor)
- GDPval-AA: **24.7%** (Artificial Analysis) / **32%** (Together table) / **Elo 1,137** (#86/352, 76th pct) (BenchmarkList)
- Tau3-Banking: **20.8%** (Artificial Analysis #55/176)
- Tau2-Bench Telecom: **97.7%** (#10/332) (Artificial Analysis)
- OSWorld-Verified: **73.3%** (vendor)
- AndroidWorld: **81.0%** (vendor)
- WebArena-Verified: **55.3%** (vendor)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor) / **88.2%** (Artificial Analysis) / **87.4%** (Vals AI)
- HLE: **28.8%** (vendor) / **27.8%** (Artificial Analysis); HLE with tools: **50.6%** (vendor)
- AIME: **94.6%** (Vals) / **90.6%** (OTIS mock)
- SimpleQA Verified: **49.1%** (Vals)
- LiveCodeBench: **86.0%** (Vals) / **87.1%** (v6)
- MMLU-Pro: **87.7%** (Vals)
- MMMLU: **89.5%** (vendor)
- AA Intelligence Index: **27.0** (rebased v4.3.2)
- AA Coding Index: **54.5** (Artificial Analysis)
- AA Agentic Index: **27.6** (Artificial Analysis)
- CritPt: **2.9%** (Artificial Analysis)
- SciCode: **40.7-41%** (Artificial Analysis)
- FrontierMath: **26.21%** (vendor)
- AA LCR: **78.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **26.4%** / Non-hallucination: **65.4%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **78.8%** (vendor, internal SWE-agent scaffold, 200K context) / **73.4%** (Vals AI)
- SWE-bench Pro: **56.6%** (vendor)
- SWE-bench Multilingual: **73.8%** (vendor)
- NL2Repo: **37.9%** (vendor)
- DeepSWE: **2.65%** (official, near-zero on contamination-resistant suite)
- Vibe Code Bench: **25.6%** (Vals)
- ProgramBench: **0.0%** (Vals)
- Code Migration: **11.1%** (Vals)
- LMArena Elo: **1437** (vendor)
- Design Arena: website 1248, code 1240, game dev 1224 (vendor)

Multimodal:

- MMMU-Pro: **84.2%** (Vals) / **86.0%** (vendor)
- OmniDocBench: **91.2%** (vendor, lead)
- ScreenSpot-Pro: **68.2%** (vendor)
- CharXiv: **81.5%** (vendor)
- SimpleVQA: **67.3%** (vendor)

Long context:

- AA LCR: **78.3%** (Artificial Analysis)
- No MRCR/RULER published

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** Tau3 70.7%, MCP-Atlas 74.1%, Claw-Eval 58.8%, OSWorld-Verified 73.3%, TB2.1 53.2-61.4% in mid band. Capped by GDPval-AA 24.7% (Elo 1137, 76th pct), MCPMark 48.2%, Toolathlon 39.8%, DeepPlanning 41.5% — long-horizon agentic suites are the weak column.
- **Reasoning: 78/100.** GPQA Diamond 88.2-90.4%, AIME 94.6%, LiveCodeBench 86-87.1%, MMLU-Pro 87.7% frontier-adjacent on classic suites. Capped by HLE 27.8-28.8% (50.6% with tools), CritPt 2.9%, SciCode 40.7%, AA Intelligence Index 27.0 (rebased) — knowledge depth a full generation behind current frontier.
- **Context window: 93/100.** 1M-token window (991K input, 65K output) in ≥1M tier with AA-LCR 78.3%; 100 tier needs ≥98% retrieval at 512K+ (no MRCR published), and 256K+ input tier reprices whole request 4×.
- **Multimodal: 83/100.** Native text/image/video in → text out in 75-90 band; MMMU-Pro 84.2%, OmniDocBench 91.2%, CharXiv 81.5%, screenshot-to-code workflows. ScreenSpot-Pro 68.2%, SimpleVQA 67.3% show perception gaps; text-only output.
- **Coding: 72/100.** SWE-bench Verified 78.8% (73.4% Vals), SWE-Pro 56.6%, TB 2.0 61.6%, LiveCodeBench 86% solid mid-frontier for Plus tier. Capped hard by DeepSWE 2.65%, Vibe Code 25.6%, ProgramBench 0.0%, Code Migration 11.1%, NL2Repo 37.9% — end-to-end/agentic coding gap.
- **Cost efficiency: 90/100.** $0.50/$3.00 per MTok (≤256K) just above ~$1.25/$4.25 ≈ 88 tier; OpenRouter $0.325/$1.95 cheaper, $0.05 cache reads; 256K-1M tier ($2/$6) and 65K output cap are constraints.
- **Overall Score: 79/100.** Half-up mean of (68 + 78 + 93 + 83 + 72) / 5 = 78.8 → 79. Best-fit: value multimodal-agent tier — 1M context, strong screenshot-to-code/OCR at $0.325-0.50 input; route deep reasoning/end-to-end agentic coding to Qwen3.8-Max or frontier model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official blog (Alibaba Qwen3.6-Plus blog), independent aggregators (Artificial Analysis, BenchmarkList, BenchLM, Vals AI, Together AI, evals.report), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
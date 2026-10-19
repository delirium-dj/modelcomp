# Qwen 3.7 Plus — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.7-plus`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba's cost-effective multimodal agent model in the Qwen3.7 series (1M context, vision-capable) at roughly 1/6 the price of Qwen3.7-Max; strong GUI/mobile grounding, solid coding (SWE-bench Verified 77.7%), at $0.40/$1.60 pricing.
- **Provider / access:** Alibaba Cloud Model Studio (`qwen3.7-plus`), QwenCloud, OpenCode Zen (`opencode/qwen3.7-plus` via `https://opencode.ai/inference/openai/v1/chat/completions`), OpenRouter, Fireworks, Together AI. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** 2026-06-01 GA; knowledge cutoff not publicly disclosed.
- **IDs:** `qwen3.7-plus` (Model Studio/Zen/OpenRouter), `qwen3.7-plus-2026-05-26` (snapshot). No Free tier on any platform.
- **Context window:** 1,000,000 tokens total (991,808 max input; 983,616 in thinking mode; 131,072 max output; 262,144 max chain-of-thought).
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking mode with `preserve_thinking`); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $0.40/M in, $1.60/M out (international); China tier $0.276/$1.101; implicit cache $0.08; explicit cache creation $0.50 / read $0.04; long-context tier (256K-1M) reprices to $1.20/$4.80 international. Measured 54-56 tok/s; very verbose (~110M output tokens during AA evaluation).
- **Architecture:** MoE, 397B total / 17B active params; proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **61.0%** (Artificial Analysis) / **52.8%** (Vals AI Terminus-2)
- Terminal-Bench 2.0: **70.3%** (vendor, Harbor/Terminus-2, 5h)
- Terminal-Bench 4.0: **1.0%** (Artificial Analysis — near-zero on hard suite)
- Tau2-Bench Telecom: **93.0%** (Artificial Analysis)
- Tau-Bench Banking: **17.5%** (Artificial Analysis)
- MCP-Atlas: **73.2%** (Artificial Analysis)
- BFCL v4: **72.9%** (vendor/benchlm)
- Claw-Eval: **62.7%** (Artificial Analysis)
- QwenClawBench: **61.8%** (vendor/benchlm)
- VITA-Bench: **45.6%** (vendor/benchlm)
- DeepPlanning: **62.3%** (vendor/benchlm)
- OSWorld-Verified: **73.3%** (vendor) / **2.8%** (official OSWorld 2.0, #14)
- AndroidWorld: **81.0%** (vendor)
- ScreenSpot Pro: **79.0%** (vendor, thinking disabled — vs GPT-5.4 67.4, Opus 4.6 49.5)
- APEX-Agents: **22.4%** (Artificial Analysis)
- GDPval-AA: **13.5%** (Artificial Analysis) / **Elo 947** (#122/352, 66th pct) (BenchmarkList)
- Vals Index: **52.3%**; Vals Multimodal Index: **53.9%**

Reasoning / knowledge:

- GPQA Diamond: **90.0%** (Artificial Analysis) / **90.3%** (vendor) — #19/308
- HLE: **35.6%** (Artificial Analysis) / **34.7%** (vendor)
- MMLU-Pro: **88.5%** (Artificial Analysis); MMLU-Redux: **94.5%**; MMMLU: **89.0%**; SuperGPQA: **71.4%**
- AIME 2025: **85.7%** (Artificial Analysis)
- CritPt: **9.1%** (Artificial Analysis)
- SciCode: **46.1%** (Artificial Analysis)
- AA Intelligence Index: **38.98** (rebased v4.3.2, #61/427, 86th pct) (Artificial Analysis)
- AA LCR: **73.0%** (Artificial Analysis, #105/408, 74th pct)
- MRCR v2 128K: **91.7%** (vendor)

Coding:

- SWE-bench Verified: **77.7%** (vendor; Qwen3.6-Plus 78.8%)
- SWE-bench Pro: **57.6%** (vendor; Fable 5.1 81.2%)
- SWE-bench Multilingual: **75.8%** (vendor)
- NL2Repo: **41.1%** (vendor)
- LiveCodeBench v6: **89.6%** (vendor)
- Vibe Code Bench: **46.4%** (Vals AI)
- Code Migration: **12.9%** (Vals AI)
- FrontierCode 1.1: **10.2%** (Cognition)
- DeepSWE v1.1: **16.5%** (#50/52, 4th pct) (BenchmarkList)
- LMArena Coding: ~1501 (#77 snapshot)

Multimodal:

- Vals Multimodal Index: **53.9%**
- ScreenSpot Pro: **79.0%** (vendor, thinking disabled — vs GPT-5.4 67.4, Opus 4.6 49.5)
- No public MMMU-Pro number for Plus found

Long context:

- MRCR v2 128K: **91.7%** (vendor)
- AA LCR: **73.0%** (Artificial Analysis, #105/408, 74th pct)
- No MRCR at 512K+/1M

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 66/100.** MCP-Atlas 73.2%, Claw-Eval 62.7%, Tau2 Telecom 93.0%, AndroidWorld 81.0% (vendor) in mid band with TB2.1 52.8-61.0%. Capped by GDPval-AA 13.5%, APEX-Agents 22.4%, OSWorld 2.0 2.8%, TB4.0 1.0% — new-gen agentic suites expose wide gap to frontier.
- **Reasoning: 80/100.** GPQA Diamond 90.0-90.3% (frontier-adjacent), MMLU-Pro 88.5% (#8/312), AIME 85.7%, LiveCodeBench 89.6%. Capped by HLE 34.7-35.6%, CritPt 9.1%, AA Intelligence Index 38.98 (#61/427, rebased).
- **Context window: 93/100.** 1M-token window (991K input, 131K output) in ≥1M tier; vendor MRCR v2 91.7% at 128K, AA LCR 73.0%. 100 tier needs ≥98% retrieval at 512K+, unverifiable with no long-range MRCR published.
- **Multimodal: 78/100.** Native text + image + video in → text out in 75-90 band; ScreenSpot Pro 79.0% (vendor, best GUI grounding), Vals Multimodal Index 53.9%. No MMMU-Pro number, text-only output keep below 85.
- **Coding: 76/100.** SWE-bench Verified 77.7%, SWE-Pro 57.6%, LiveCodeBench 89.6% solid mid-pack. Capped by Vibe Code 46.4%, NL2Repo 41.1%, Code Migration 12.9%, FrontierCode 10.2%, DeepSWE 16.5% (#50/52) — end-to-end/agentic coding trails frontier.
- **Cost efficiency: 90/100.** $0.40/$1.60 per MTok with $0.08 cache reads between ~$0.60/$2.20 ≈ 92 and ~$1.25/$4.25 ≈ 88 tiers — cheap input for vision agents, but verbosity (110M tokens in AA) and 256K+ surcharge ($1.20/$4.80) erode output-side advantage.
- **Overall Score: 79/100.** Half-up mean of (66 + 80 + 93 + 78 + 76) / 5 = 78.6 → 79. Best-fit: budget vision-agent pick — 1M multimodal context and GUI/mobile grounding at 1/6 Max's price; route hard reasoning/end-to-end coding to frontier-tier model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Alibaba Cloud Model Studio, QwenCloud docs + pricing), independent aggregators (Artificial Analysis, BenchmarkList, BenchLM, Vals AI), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
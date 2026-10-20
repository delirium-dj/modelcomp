# Qwen 3.5 Plus — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.5-plus`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's February 2026 Plus-tier model — hosted API counterpart of the open-weight Qwen3.5-397B-A17B, launched same day on Model Studio with 1M default context, built-in tools, and adaptive tool use. Hybrid linear-attention + sparse-MoE architecture for inference efficiency; natively multimodal agent model ("Towards Native Multimodal Agents") with best-in-class instruction following (IFBench 76.5-81.3%, beating GPT-5.2) and strong vision; superseded by Qwen 3.6 Plus (April 2026).
- **Provider / access:** Alibaba Cloud Model Studio / QwenCloud (`qwen3.5-plus`, snapshots `-2026-02-15` and `-2026-04-20`); OpenRouter (`qwen/qwen3.5-plus`); OpenCode Zen (`opencode/qwen3.5-plus` via `https://opencode.ai/inference/openai/v1/chat/completions`). Open weights `Qwen/Qwen3.5-397B-A17B` on Hugging Face (Apache 2.0).
- **Release / knowledge:** 2026-02-15/16 (April-20 snapshot improved agentic coding + speed); knowledge cutoff 2025-04.
- **IDs:** `qwen3.5-plus` (Model Studio), `qwen/qwen3.5-plus` (OpenRouter), aliases `qwen3.5-plus-20260216` / `-20260420`. Open weights `Qwen/Qwen3.5-397B-A17B` (Apache 2.0).
- **Context window:** 1,000,000 tokens total (991,808 max input; 983,616 thinking mode; 65,536 max output; 81,920 max chain-of-thought).
- **Modalities:** Text, image, video in; text out; reasoning yes (thinking mode); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** International list $0.40/M in, $2.40/M out (cache read $0.04); China tier length-banded: ≤128K $0.115/$0.688, 128-256K $0.287/$1.72, 256K-1M $0.573/$3.44; OpenRouter $0.26-0.30/$1.56-1.80; OpenCode Zen $0.20/$1.20 at 262K.
- **Architecture:** Hybrid linear attention + sparse MoE, 397B total / 17B active params (per open-weight base card).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-Bench: **86.7%** (Qwen launch materials) — second only to Claude 91.6%
- MCPMark: **46.1%** (vs GPT-5.2 57.5, Claude 42.3)
- BrowseComp: **69.0%** (simple context folding) / **78.6%** (discard-all strategy)
- PinchBench (real-world OpenClaw agent): **85.8%** best / **79.1%** average
- Vending-Bench 2: **0.5%**

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (launch table) / **87.4%** (Vals, 04-20 snapshot) / **84.8%** (Epoch AI)
- MMLU-Pro: **87.0-87.8%**; SuperGPQA: **67.4%**; C-Eval: **92.3%**
- IFBench: **76.5-81.3%** — beats GPT-5.2 (75.4) and Claude (58.0); MultiChallenge: **67.6%** (vs GPT-5.2 57.9)
- FrontierMath v1: **35.5%**; Tier 4: **2.1%**; SimpleQA Verified: **25.4%**; DTBench: **80.5%**; LMCA: **36.4%**
- AIME 2026: **91.3%**; HMMT Feb 2025: **94.8%** (competitive, below GPT-5.2 96.7); OTIS Mock AIME: **86.7%**

Coding:

- SWE-bench Verified: **76.4%** (launch) / **71.2%** (Vals, 04-20 snapshot; level with Kimi K2.5 76.8, Gemini 3 Pro 76.2, behind GPT-5.2 80.0, Claude 80.9)
- SWE-bench Multilingual: **72.0%** (matches GPT-5.2)
- SecCodeBench: **68.3%**
- LiveCodeBench v6: **83.6-85.3%** (Vals 85.3%, #26-32/123)
- Terminal-Bench 2.0: **41.6%** (Vals)
- Vibe Code Bench v1.1: **15.7%** (Vals — near-bottom)

Multimodal:

- MMMU: **85.0%** (up from Qwen3-VL 80.6)
- MathVision: **88.6%** (ahead of Gemini 3 Pro 86.6%)
- OmniDocBench: **90.8%**
- OSWorld-Verified: **62.2%**; AndroidWorld: **66.8%**; ZEROBench: **12** (vs Gemini 10, GPT-5.2 9)
- Design Arena: **1194-1208 Elo**

Long context:

- 1M-token window; no AA-LCR / MRCR / RULER number published for Plus model
- CL-bench: **19.8%** / CL-bench Life: **12.4%** (Epoch — low)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 68/100.** Tau2 86.7% (near top), PinchBench 85.8% best / 79.1% avg, BrowseComp 78.6% discard-all. Capped by MCPMark 46.1%, TB 2.0 41.6%, OSWorld-Verified 62.2%, BrowseComp strategy split (69.0 vs 78.6) shows scaffolding dependency.
- **Reasoning: 78/100.** AIME 91.3%, HMMT 94.8%, GPQA Diamond 87.4-88.4%, MMLU-Pro 87.8%, IFBench 76.5-81.3% (class-leading) frontier-adjacent. Capped by FrontierMath 35.5% / T4 2.1%, SimpleQA 25.4%, no HLE published.
- **Context window: 92/100.** 1M native window (991K input, 65K output) in ≥1M tier with hybrid linear-attention architecture; 100 tier needs verified ≥98% retrieval at 512K+ (no MRCR/AA-LCR published); CL-bench 19.8% hints at long-horizon weakness.
- **Multimodal: 84/100.** Native text/image/video in → text out in 75-90 band; MMMU 85.0%, MathVision 88.6%, OmniDocBench 90.8% — real leap over Qwen3-VL; no audio input or non-text output.
- **Coding: 72/100.** SWE-bench Verified 76.4% (launch) / 71.2% (Vals 04-20; level with Kimi K2.5 76.8, Gemini 3 Pro 76.2), SWE Multilingual 72.0%, LiveCodeBench 85.3% solid mid-frontier. Capped by TB 2.0 41.6%, Vibe Code 15.7% — end-to-end/terminal coding gap Qwen3.6-Plus later improved.
- **Cost efficiency: 88/100.** $0.40/$2.40 per MTok international (cache $0.04) maps to ~$1.25/$4.25 ≈ 88 tier; China tier $0.115/$0.688 and OpenCode Zen $0.20/$1.20 far cheaper; 256K+ input band ($0.573/$3.44) is constraint.
- **Overall Score: 79/100.** Half-up mean of (68 + 78 + 92 + 84 + 72) / 5 = 78.8 → 79. Best-fit: value multimodal-agent tier of its generation — 1M context, class-leading instruction following, strong vision at $0.20-0.40 input; route hard reasoning/end-to-end coding to frontier-tier model.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official launch materials (Qwen3.5 launch blog, Alibaba Cloud Model Studio docs/pricing, QwenCloud model pages, OpenRouter), independent aggregators (Epoch AI, Vals AI, BenchmarkList, BenchLeader, modelbenchmark.io, mlabonne HF analysis, qwen35.com), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
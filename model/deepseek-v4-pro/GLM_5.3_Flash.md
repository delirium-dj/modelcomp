# DeepSeek V4 Pro — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-v4-pro`, MIT open weights; GA build V4-Pro-0813)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (production build: V4-Pro-0813, the official GA release superseding the April preview with "greatly enhanced agentic capabilities")
- **Short description:** DeepSeek's 1.6T-parameter MoE flagship with a 1M-token context window under a fully permissive MIT license; top use cases are top-tier coding, competition math, and large-codebase agentic analysis. Text-only.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`, OpenAI-compatible at `https://api.deepseek.com/v1`, Chat Completions); drop-in backend for Claude Code (Anthropic-compatible), OpenClaw and OpenCode; weights on Hugging Face for self-hosting. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-04-24 (preview), GA build 0813 on 2026-08-13; knowledge cutoff not verified (33T-token training corpus).
- **IDs:** `deepseek-v4-pro` (DeepSeek API). No Free ID on Zen.
- **Context window:** 1,000,000 total tokens (verified via DeepSeek docs and Together AI model page); max output not separately verified. Hybrid CSA+HCA attention uses 27% of FLOPs and 10% of KV cache vs V3.2 at 1M context.
- **Modalities:** text input only; text output; reasoning yes (three modes: Non-think, Think High, Think Max); tool calls (OpenAI-compatible function calling); JSON mode.
- **Pricing (as of 2026-09-24):** peak/off-peak since 2026-08-16 — off-peak $0.66 / $1.98 per 1M in/out, peak $1.32 / $3.96 (peak hours 01:00–04:00, 06:00–10:00 UTC); previous flat rate was $0.435/$0.87. Open MIT weights; paid API.
- **Architecture:** 1.6T total / 49B active parameters, 61 layers, hidden 7168, 384 routed experts + 1 shared expert (6 active per token), hybrid Compressed Sparse Attention + Heavily/Hierarchical Chunked Attention, Manifold-Constrained Hyper-Connections, Muon optimizer, FP4+FP8 mixed-precision training, MIT license.

### Raw benchmarks found

Agent / tool use:

- MCPAtlas: **73.6%** (vendor-reported Think Max table; leads Opus 4.6 72.1% and GPT-5.4 71.8%)
- Toolathlon: **51.8%** (vendor table; Opus 4.6 leads at 53.4%)
- Terminal-Bench: **67.9%** (vendor table; GPT-5.4 edges it at 69.4%)
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (vendor Think Max table; leads Opus 4.6 89.3%)
- HLE: **37.7%** (vendor table; Opus 4.6 leads at 39.2%)
- AIME 2026: **94.3%** (vendor table; sweeps math)
- HMMT: **95.2%**; IMOAnswerBench: **89.8%** (vendor table)
- MMLU-Pro: **87.5%** (vendor table; trails GPT-5.4/Gemini 3.1 Pro at 89.2%)
- Codeforces rating: **3206** (23rd among all human competitors on the platform)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- LCR / MLCR, CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **80.6%** (vendor Think Max table; leads Opus 4.6 79.8%, GPT-5.4 78.2%, Gemini 3.1 Pro 75.1%)
- SWE-bench Pro: **55.4%** (vendor table; leads Opus 4.6 54.1%)
- LiveCodeBench: **93.5%** (vendor table; leads Opus 4.6 91.2%)
- SWE-Pro / DeepSWE / SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval value verified; vendor materials state Opus 4.6 outperforms V4 Pro on needle-in-a-haystack and long-document retrieval at the upper end of the window (hybrid attention trades retrieval precision for efficiency)

### Normalized scores (1–100)

- **Tool use: 72/100.** MCPAtlas 73.6% (leading the field) and Terminal-Bench 67.9% are solid, but Toolathlon 51.8% is mid and the missing Terminal-Bench 2.1/Tau3/GDPval numbers keep it in the mid band.
- **Reasoning: 85/100.** GPQA Diamond 90.1% hits the 90%+ frontier reference and the math sweep (AIME 94.3%, HMMT 95.2%) plus a 3206 Codeforces rating are elite; HLE 37.7% stays under the 40% frontier bar, capping it.
- **Context window: 92/100.** 1M tokens maps to the ≥1M tier (95–100) but vendor materials concede weaker retrieval at the upper end of the window, docking it below 95.
- **Multimodal: 15/100.** Text-only in/out — no vision, audio or video input per DeepSeek's own limitations list.
- **Coding: 88/100.** SWE-bench Verified 80.6% (field-leading), LiveCodeBench 93.5% and Codeforces 3206 are near-frontier; SWE-bench Pro 55.4% and missing DeepSWE/SciCode numbers prevent 90+.
- **Cost efficiency: 92/100.** Off-peak $0.66/$1.98 per 1M sits at the ~$0.60/$2.20 = ~92 methodology reference; peak rates ($1.32/$3.96) fall to ~88 and MIT open weights are an extra cost lever.
- **Overall Score: 70/100.** Mean of the five quality dims (72 + 85 + 92 + 15 + 85) / 5 = 69.8 → 70. Best-fit: the strongest open-weights choice for coding, math and long-codebase work where multimodal input is not needed.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (AI Made Tools DeepSeek V4 Pro guide with vendor-table data, Together AI model page, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.md`, using the same headings.

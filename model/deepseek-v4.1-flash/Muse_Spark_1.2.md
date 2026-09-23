# DeepSeek V4.1 Flash — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's 552B multimodal MoE (2026-09-10) with CED architecture, native image understanding, 1M context and FP4 KV compression; smallest in new family, MIT licensed.
- **Provider / access:** DeepSeek API `deepseek/deepseek-v4.1-flash` (alias `deepseek-flash`), Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash`, and OpenCode Zen `deepseek/deepseek-v4.1-flash` (Chat Completions via adapter)
- **Release / knowledge:** 2026-09-10 (V4-Flash/Vision-Exp retired; V4-Pro routed to Flash from 2026-09-14); knowledge cutoff 2026-06
- **IDs:** `deepseek/deepseek-v4.1-flash` (also `deepseek-flash`; legacy `deepseek-v4-flash` routes to V4.1 Flash)
- **Context window:** 1,000,000 total (1M in / 384,000 out) — verified via DeepSeek API docs and arXiv 2609.19969 (CED: 8B active prefill / 16B decode, CSA2 + FP4 890B/token, 1/4 of V4-Flash, 1/437 of V1; SWA bounded replay 1/8 SSD)
- **Modalities:** Text, image in; text out; reasoning yes (controllable 1-100, max 100); tool calls yes; JSON mode yes; vision encoder + MLP projector joint training 45T tokens
- **Pricing (as of 2026-09-23):** $0.30 / $1.20 per 1M in/out (no Zen $0 Free ID; 1/10 of GPT-5.5)
- **Architecture:** MoE CED (40 layers: 20 encoder + 20 decoder, SWA+global; 552B backbone / 196B Engram / 8-16B active) with CSA2 cross-layer KV reuse + FP4 cache

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (DeepSeek 2026-09-10 — vs Opus 5 89.1%, Sol 88.8%, K3 88.3%; Hugging Face base 82.7% → 90.6% instruct)
- Terminal-Bench 3.0: **30.0%** (DeepSeek — vs Opus 43.3%)
- Terminal-Bench 4.0: **31.2%** (DeepSeek — vs Opus 51.8%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **AutomationBench 54.8%** (DeepSeek — vs Opus 50.3%, Sol 45.8%; MCP Atlas no isolated numeric for V4.1 Flash)
- Agents' Last Exam: **31.8%** (DeepSeek — vs Opus 28.6%)
- HLE with tools: **63.9%** (DeepSeek — vs Opus 63.6%)
- CyberGym: **88.1%** (DeepSeek — vs Sol 84.5%)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (DeepSeek — vs Sol 94.1%, Opus 93.4%)
- HLE: **36.8% (39.1% text-only subset)** (DeepSeek — vs Opus 56.3%, Sol 44.5%; † text-only)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (no AA Index published at launch)
- Codeforces Rating: **3471** (DeepSeek — vs V4-Pro 3348)
- MathArena Apex: **65.6%** (DeepSeek — vs K3 65.6% tie)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public SWE-Pro isolation; V4-Flash base 54.2 NL2Repo, 30.9 SEC-Bench Pro** — V4.1 Flash improves but no Verified numeric isolation beyond DeepSWE
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **74.2%** (DeepSeek — vs Sol 73.0%, Opus 74.0%; best among vendor table)
- ProgramBench: **20.3% Almost@1** (DeepSeek — vs Opus 37.0%)
- NL2Repo-Bench: **65.4%** / SEC-Bench Pro **62.8%** / ExploitGym 15.3% (DeepSeek)
- HumanEval 79.4% / BigCodeBench 60.6% / GSM8K 93.0% (Hugging Face base)

Long context:

- 1M via CED/CSA2; LongBench-V2 45.2% (base), no MRCR/RULER at 1M published beyond 1M support claim; Multimodal MMMU-Pro 56.5% / DocVQA 95.6% / RefCOCO 86%

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 90.6% #1 + CyberGym 88.1% + AutomationBench 54.8% + Agents' Last Exam 31.8% + HLE tools 63.9%; capped by TB3.0 30%/TB4.0 31% trailing Opus and no Tau3/Claw/MCP numbers.
- **Reasoning: 82/100.** GPQA 90.9% + HLE 36.8% (39.1% text) + Codeforces 3471 + MathArena 65.6% solid; capped by HLE trailing Opus 56.3% and no AA Index.
- **Context window: 94/100.** 1,000,000 total via CED/CSA2; 1/4 global KV vs V4-Flash, 1/437 vs V1; tier 95-100 for ≥1M, capped below 96 without MRCR ≥90% at 1M.
- **Multimodal: 78/100.** Text/image in → text out (vision encoder + MLP projector joint 45T); DocVQA 95.6% strong but no video/audio in, capped below 85 vs omni video.
- **Coding: 86/100.** DeepSWE 74.2% #1 + TB2.1 90.6% elite + HumanEval 79.4% + NL2Repo 65.4%; capped by ProgramBench 20.3% and TB4.0 31% trailing Opus.
- **Cost efficiency: 88/100.** $0.30/$1.20 paid very cheap (MIT weights); no $0 Free ID but near-free pricing vs flagships, hence high.
- **Overall Score: 85/100.** Mean of five non-cost dims (86+82+94+78+86)/5=85.2 → 85; best-fit for affordable 1M agentic coding with terminal leadership when frontier science not primary.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (DeepSeek V4.1-Flash announcement 2026-09-10, arXiv 2609.19969, Hugging Face model card, API docs, AshnaAI launch analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

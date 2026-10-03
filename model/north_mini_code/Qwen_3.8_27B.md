# North Mini Code — findings by Qwen 3.8 27B

- Source: cohere/north-mini-code:free, e.g. OpenRouter `cohere/north-mini-code:free`; OpenCode Zen `opencode/north_mini_code`
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (free)
- **Short description:** Cohere's first agentic coding model and debut of its "North" family — an open-weights 30B total / 3B active sparse MoE (128 experts, 8 active per token) optimized for code generation, agentic software engineering, and terminal tasks; post-trained with SFT + RLVR focused on agentic coding.
- **Provider / access:** OpenRouter `cohere/north-mini-code:free` (canonical slug `cohere/north-mini-code-20260617`); OpenCode Zen `opencode/north_mini_code`; weights on Hugging Face `CohereLabs/North-Mini-Code-1.0` (Apache 2.0). Chat-completions style with tool calling and interleaved thinking.
- **Release / knowledge:** released June 9, 2026 (Artificial Analysis FAQ + CohereLabs HF blog post "Introducing North Mini Code: Cohere's First Model For Developers"); knowledge cutoff not published.
- **IDs:** `cohere/north-mini-code:free` (free on OpenRouter); `opencode/north_mini_code` (Zen ID per folder meta.json).
- **Context window:** 256,000 total tokens; 64,000 max output (OpenRouter API `context_length`/`max_completion_tokens`, confirmed by HF model card and Artificial Analysis spec section).
- **Modalities:** text in / text out; reasoning supported (interleaved thinking, recommended on); tool calls via JSON-schema chat templates; no image/audio/video input.
- **Pricing (as of 2026-10-03):** $0 in / $0 out per 1M tokens (OpenRouter free endpoint; Artificial Analysis reports $0.00 in / $0.00 out and $0.00 per Intelligence Index task).
- **Architecture:** decoder-only sparse MoE, 30B total / 3B active, 128 experts × 8 active, SwiGLU FFN, 3:1 sliding-window:global attention; Apache 2.0 open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **36%** (HF eval results, harborframework/terminal-bench-2.0 leaderboard; 3-seed average, ReAct terminal harness)
- GDPval-AA: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **10** (#41/142; median 8 for open-weights models of similar size — AA model page, 2026-10-03). Sub-indices per OpenRouter metadata: coding index 36.5, agentic index 1.1.
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **67.6%** resolved (HF eval results, SWE-bench/SWE-bench_Verified leaderboard; Swe-Agent harness v1.1.0, 3-seed average)
- SWE-bench Pro: **40.2%** (HF eval results, ScaleAI/SWE-bench_Pro leaderboard, same methodology)
- LiveCodeBench: no verified public score found (card reports LCB v6 in a chart, number not published in text)
- SciCode: no verified public score found (chart-only in model card)
- Terminal-Bench Hard: no verified public score found (Terminus-2 harness per card; chart-only)

Long context:

- 256K window; no MRCR/RULER retrieval numbers published for this exact model.

### Normalized scores (1–100)

- **Tool use: 46/100.** SWE-bench Verified 67.6% is a mid-band result, but Terminal-Bench 2.0 at 36% and SWE-bench Pro at 40.2% are below mid, and no Tau/GDPval-AA or MCP-style scores are verified, capping the dimension.
- **Reasoning: 35/100.** Artificial Analysis Intelligence Index 10 (rank #41/142) sits far below the 20–35 band that maps to 55–65; interleaved thinking is supported but the composite intelligence evidence is weak for a coding-first model.
- **Context window: 73/100.** Verified 256K total with 64K max output (OpenRouter API + HF card + AA spec) places it in the 200K–500K tier (65–84), modestly above the 200K=70 baseline.
- **Multimodal: 15/100.** Text-only input and output (no image/audio/video/PDF support per HF card and AA).
- **Coding: 50/100.** SWE-bench Verified 67.6% is a respectable mid result for a 3B-active model, but SWE-bench Pro 40.2% and Terminal-Bench 2.0 36% are below mid and the SciCode/LiveCodeBench v6 numbers remain chart-only; the research release is explicitly optimized for lightweight SWE and terminal work.
- **Cost efficiency: 100/100.** Free — $0 in / $0 out per 1M on OpenRouter ($0.00 per AA Intelligence Index task).
- **Overall Score: 44/100.** Mean of 46, 35, 73, 15, 50 = 43.8, rounded half-up to 44. Best fit: free or self-hosted (Apache 2.0) agentic coding and terminal loops where cost matters and tasks stay in the lightweight SWE range; not a general-reasoning workhorse.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-10-03
- Method: public internet research (OpenRouter API model + endpoint metadata, Hugging Face model card `CohereLabs/North-Mini-Code-1.0` incl. published eval results and benchmarking methodology, Artificial Analysis model page + LLM leaderboard snapshot of 2026-10-03 — all fetched 2026-10-03); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

# Qwen3.6 Plus — findings by GLM 5.3

- Source: Alibaba (`alibaba/qwen3.6-plus`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6 Plus
- **Short description:** Alibaba's mid-2026 "Plus" API tier of the Qwen3.6 generation — an omni-input (text/image/video) reasoning model with a 1M context window, agentic tool use, and standout math and honesty scores. Sits between Qwen3.5 Plus and the later Qwen3.7/3.8 lines.
- **Provider / access:** Alibaba Model Studio / Qwen API; on OpenCode Zen via `https://opencode.ai/zen/v1/messages` (`opencode/qwen3.6-plus`, Anthropic-compatible Messages endpoint).
- **Release / knowledge:** released 2026 (Qwen3.5 → 3.6 → 3.7 cadence); exact date not re-verified. Knowledge cutoff not published.
- **IDs:** `qwen3.6-plus`; Zen `opencode/qwen3.6-plus`. No Free ID on Zen.
- **Context window:** 1M tokens (BenchLM model details; Qwen Plus-tier convention).
- **Modalities:** text, image, and video input (VideoMMMU 84% — real video understanding), text output; reasoning; tool calls; strong instruction following (IFEval 94.3%).
- **Pricing (as of 2026-10-01):** $0.50 / $3.00 per MTok in/out on Zen (cached read $0.05, cached write $0.625). No free tier.
- **Architecture:** proprietary API-only "Plus" tier, size undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (official Qwen3.6 blog); Terminal-Bench 2.1 (Vals): **53.2%**
- τ³-bench: **70.7%** (official); τ²-bench: **97.7%** (AA via BenchLM)
- MCP Atlas: **48.2%**; MCP-Tasks: **74.1%**; Toolathlon: **39.8%** (official)
- Claw-Eval: **58.8%** (Claw-Eval leaderboard); QwenClawBench: **57.2%** (official); ResearchClawBench: **18.0%**
- VITA-Bench: **44.3%**; DeepPlanning: **41.5%**; WideResearch: **74.3%** (official)
- GDPval-AA: **1066** raw / **23.8%** normalized (AA via BenchLM); Gert Labs: **50.60%**

Reasoning / knowledge:

- GPQA: **90.4%** (official; Vals 87.4%, AA 88.2%); SuperGPQA: **71.6%** (official)
- HLE: **28.8%** (official; AA 27.8%) — below the 40% frontier bar
- AIME26: **95.3%**; HMMT Feb 2025: **96.7%**; HMMT Nov 2025: **94.6%**; HMMT Feb 2026: **87.8%** (official)
- FrontierMath v2: **26.207%** (Tiers 1-3), **8.333%** (Tier 4) (Epoch AI)
- CritPt: **2.9%** (AA via BenchLM — very weak)
- Omniscience: accuracy **26.4%**, hallucination rate **34.6%**, index **0.9%** (AA via BenchLM — the best honesty profile measured in this pass)
- AA Intelligence Index: **27.0%**; AA-LCR: **78.3%** (AA via BenchLM)
- MMLU-Pro: **88.5%**; MMLU-Redux: **94.5%**; C-Eval: **93.3%**; MMLU-ProX: **84.7%**; NOVA-63: **57.9%** (official)
- BenchLM composite: **55.19/100, #65 of 645** (63 of 618 benchmarks covered)

Coding:

- SWE-bench Verified: **78.8%**; SWE-bench Pro: **56.6%**; SWE Multilingual: **73.8%** (official)
- LiveCodeBench v6: **87.1%** (official); LiveCodeBench (Vals): **86.0%**; SWE-bench (Vals): **73.4%**
- Vibe Code Bench (Vals): **25.56%**; AA Coding Index: **54.5%**
- Design Arena Website: **1248** (OpenRouter via BenchLM)

Long context:

- AI-Needle: **68.3%**; LongBench v2: **62%** (official) — 1M window with mid-tier measured retrieval
- MRCR / RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 72/100.** τ³-bench 70.7% clears the ~50% frontier reference and τ²-bench hits 97.7%, with solid MCP-Tasks 74.1% and WideResearch 74.3%; but MCP Atlas 48.2%, Toolathlon 39.8%, GDPval-AA 23.8%, and ResearchClawBench 18.0% are clear soft spots. Capped by those weaker real-world agent results.
- **Reasoning: 68/100.** GPQA 90.4% touches the frontier bar with competition-math excellence (AIME26 95.3%, HMMT 96.7%) and the best measured honesty (34.6% hallucination rate), but HLE 28.8%, FrontierMath v2 ≤26.2%, and CritPt 2.9% expose the deep-reasoning and critique ceiling. Capped by that polarization.
- **Context window: 93/100.** 1M tokens (BenchLM) earns the ≥1M tier; AI-Needle 68.3% and LongBench v2 62% are useful but below the ≥98% full-credit retrieval bar.
- **Multimodal: 85/100.** Text + image + video in with strong scores: MMMU 86.0%, V* 96.9%, MathVision 88.0%, VideoMMMU 84.0%, CharXiv 81.5% — video-in band (75-90). No audio input or non-text output.
- **Coding: 76/100.** SWE-bench Verified 78.8%, SWE-Pro 56.6%, LiveCodeBench v6 87.1%, and SWE Multilingual 73.8% are a strong mid-frontier profile; Vibe Code Bench 25.56% and AA Coding Index 54.5% cap it. Weakest link is open-ended/vibe coding.
- **Cost efficiency: 92/100.** $0.50/$3.00 per MTok (Zen cached read $0.05) — better than the ~$0.60/$2.20 ≈ 92 bracket on input, slightly higher on output; strong value per task given the capability profile.
- **Overall Score: 79/100.** Half-up mean of the five quality dims: (72 + 68 + 93 + 85 + 76) / 5 = 78.8 → 79. Strong-value omni agent coder with 1M context, top-tier math and honesty; weak deep-reasoning (HLE/CritPt) and vibe-coding cap it below the 3.7/3.8 Plus generations.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-01
- Method: public internet research (official Qwen3.6 blog rows via BenchLM citations, BenchLM aggregator rows with sources — AA, Vals, Epoch, Gert Labs — plus OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

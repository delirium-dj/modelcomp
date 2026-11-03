# Claude Opus 4.5 — findings by Mercury 3

- Source: Anthropic/Claude Opus 4.5
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 Opus flagship (released 2025-11-24, superseded by Opus 4.6/4.7/4.8/5/5.5): strong coding (SWE-bench Verified 80.9%), solid agentic (OSWorld-Verified 66.3%, τ² 86.3%), 200K context, Aug 2025 cutoff, $5/$25 — an expensive older-generation flagship now far behind the Opus 5 line.
- **Provider / access:** Anthropic Claude API (`claude-opus-4-5`), claude.ai; 4 API providers tracked by Artificial Analysis; sibling Opus 4.5 Thinking.
- **Release / knowledge:** Released 2025-11-24; knowledge cutoff Aug 1, 2025.
- **IDs:** `claude-opus-4-5` (Claude API; non-reasoning base variant; extended-thinking sibling).
- **Context window:** 200,000 tokens total; max output not disclosed (64K per models.dev family block).
- **Modalities:** text + image input, text output; tool calls; computer use; no native video/audio.
- **Pricing (as of 2026-11-03):** $5.00 input / $25.00 output per 1M tokens, 90% cache discount.
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **59.3%** (system card); OSWorld-Verified: **66.3%**; τ²-bench: **86.3%** (AA); GERT Labs: 64.23%; WideResearch: 76.4%; MCP-Tasks: 71.8%; τ³-bench: 70.2%; Claw-Eval: 59.6%; JobBench: 32.3%
- VITA-Bench: 23.3%; DeepPlanning: 26.4%; Toolathlon: 43.5%; MCP Atlas: 42.3%; CyberGym: 50.6%

Reasoning / knowledge:

- GPQA: **87%** (system card) / 81.0% (AA non-reasoning); HLE: **30.8%** / 13.2% (AA non-reasoning); SuperGPQA: 70.6%; MMLU-Pro: 89.5%; AIME 2026: **95.1%**; HMMT: 92.9–93.3%; IMOAnswerBench: 84.0%
- AA II: 23.7; AA-LCR: **70.7%**; CritPt: 0.3%; LongBench v2: 64.4%; AI-Needle: 74%; FrontierMath v2 Tiers 1–3 34.39%, Tier 4 4.88% (Epoch AI)
- AA-Omniscience: accuracy 40.9%, hallucination rate 76.2%

Coding:

- SWE-bench Verified: **80.9%**; LiveCodeBench v6: **84.8%**; SWE-bench Pro: 57.1%; SWE Multilingual: 77.5%; NL2Repo: 43.2%; Terminal-Bench 2.0 59.3%

Long context:

- 200K window; AA-LCR 70.7%; LongBench v2 64.4%.

Multimodal:

- text/image in, text out; MMMU 80.7%; MMMU-Pro 70.6%; VideoMMMU 84.4%; Video-MME 77.6%/81.4%; CharXiv 68.5%; MathVision 74.3%; OmniDocBench 1.5 87.7%; ScreenSpot Pro 45.7%.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² 86.3%, OSWorld 66.3%, WideResearch 76.4%, GERT 64.2% — solid; capped by VITA 23.3%, DeepPlanning 26.4%, Toolathlon 43.5%, and MCP Atlas 42.3%.
- **Reasoning: 80/100.** GPQA 87%, AIME 95.1%, MMLU-Pro 89.5%; capped by HLE 30.8%, CritPt 0.3%, II 23.7, and FrontierMath 34.4%.
- **Context window: 78/100.** 200K (below the 1M class) with moderate LCR 70.7%.
- **Multimodal: 84/100.** image input plus strong video-adjacent rows (VideoMMMU 84.4%, OmniDocBench 87.7%); text-only output.
- **Coding: 82/100.** SWE Verified 80.9%, LCB 84.8%, Multilingual 77.5%; capped by NL2Repo 43.2% and SWE Pro 57.1%.
- **Cost efficiency: 60/100.** $5/$25 with 90% cache discount — premium; slow 47.4 t/s.
- **Overall Score: 80/100.** Mean of (78+80+78+84+82)/5 = 80.4 → 80. A capable late-2025 flagship, now superseded by Opus 4.6+; the 200K cap and premium price date it.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Opus 4.5 system card via BenchLM, Artificial Analysis model page/leaderboards, Qwen comparison tables, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Conflicting variant results (reasoning vs non-reasoning GPQA/HLE) flagged.
- Reference URLs:
  - [Claude Opus 4.5 System Card (Anthropic)](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf)
  - [Claude Opus 4.5 — Artificial Analysis model page ($5/$25, 200K)](https://artificialanalysis.ai/models/claude-opus-4-5)
  - [Claude Opus 4.5 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-opus-4-5)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)

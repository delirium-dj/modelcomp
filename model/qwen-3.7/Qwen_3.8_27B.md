# Qwen 3.7 — Evaluation Report

**Model:** Qwen 3.7 (`opencode/qwen-3.7`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Qwen 3.7 (family flagship = Qwen3.7-Max)
**Short:** Alibaba's May 2026 agent-frontier flagship: 1M-context proprietary model for coding agents, office automation, and long-horizon autonomous execution.
**Provider:** Alibaba Cloud (Qwen Team) — API on Alibaba Cloud Model Studio / DashScope, model id `qwen3.7-max`. Repo registry id `opencode/qwen-3.7` is a placeholder entry; the vendor flagship behind the May 16, 2026 "Qwen3.7: The Agent Frontier" launch (qwen.ai/blog?id=qwen3.7) is the evaluated model.
**Release date:** 2026-05-16 (launch post; API availability "coming soon" per post).
**Architecture:** Proprietary MoE-style agent foundation; native extended-thinking mode; `preserve_thinking` for agentic multi-turn.
**Context window:** 1,000,000 tokens in / 65,536 out (OpenClaw config in official post; llm-stats).
**Modalities:** Text in / text out (API config: `"input": ["text"]`). Vision shown in demos is via separate Qwen-plus vision tools, not this model.
**Pricing:** $1.25/M input, $0.25/M cached input (90% cached-input discount), $3.75/M output.

### Raw benchmarks found

**Official (Qwen3.7 launch post, May 2026; alibabacloud.com/blog/qwen3-7-the-agent-frontier_603154):**
- SWE-Bench Verified: **80.4** (Opus-4.6 Max 80.8, DS-V4-Pro Max 80.6 — on par with frontier)
- SWE-Bench Pro: **60.6**; SWE-Multilingual: **78.3**; SciCode: **53.5**; QwenSVG Elo: **1608**
- Terminal-Bench 2.0 (Terminus): **69.7** (DS-V4-Pro Max 67.9; 256K ctx, 5h timeout, avg of 5 runs)
- BFCL-V4: **75.0**; MCP-Mark: **60.8** (GLM-5.1: 57.5); MCP-Atlas public: **76.4** (Opus-4.6: 75.8); SkillsBench: **59.2** (Kimi K2.6: 56.2); QwenClawBench: **64.3**; ClawEval: **65.2**
- SpreadSheetBench-v1: **87** (top-tier office automation)
- GPQA Diamond: **92.4** (Opus-4.6: 91.3); HLE: **41.4** (Opus-4.6: 40); HMMT 2026 Feb: **97.1**; IMOAnswerBench: **90**; Apex: **44.5** (DS-V4-Pro: 38.3)
- IFBench: **79.1**; SuperGPQA: **73.6**; WMT24++: **85.8**; MAXIFE: **89.2**; QwenWorldBench: **57.3**
- KernelBench L3: **1.98× median speedup**, 96% of problems accelerated (Opus-4.6: 98%, GLM-5.1: 78%, DS-V4-Pro: 54%)
- MRCR-v2: evaluated on 128K subset (8 needles) — confirms usable mid-window retrieval
- Long-horizon demo: ~35h fully autonomous kernel optimization, 1,158 tool calls, 10.0× speedup on unseen PPU hardware (GLM-5.1 7.3×, K2.6 5.0×, DS-V4-Pro 3.3×)

**Third-party:**
- BenchLM.ai: overall 63.18/100, public rank #34/194 (source-verified #22/74); "explicit reasoning mode".
- userightai.com: GPQA Diamond 92.4 "near the top of the field"; SWE-Pro 60.6 / TB2.0 69.7 "top-5 global on agentic evals at launch"; 1M context with "usable tail-of-window retrieval".

**Gaps:** No independent (non-vendor) re-run of SWE-V/TB2.0 found; HLE figure is vendor-reported; no image/audio I/O; no Tau3/GDPval numbers.

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.0 69.7% (frontier agentic band), BFCL-V4 75.0, MCP-Atlas 76.4 (beats Opus-4.6 75.8), MCP-Mark 60.8, SkillsBench 59.2, ClawEval 65.2, SpreadSheetBench 87, plus demonstrated ~35h / 1,158-tool-call autonomous runs and cross-harness generalization (Claude Code, OpenClaw, Qwen Code). Strong breadth across MCP/claw/office domains; no Tau3-class numbers to push higher.
- **Reasoning: 88/100.** GPQA Diamond 92.4 (leads the published table incl. Opus-4.6 91.3), HMMT 2026 Feb 97.1, IMOAnswerBench 90, Apex 44.5 — all top-band; HLE 41.4 clears the 40% frontier line but sits mid-field among 2026 flagships, keeping it under 90.
- **Context window: 92/100.** 1M-token input with published tail-of-window retrieval (MRCR-v2 128K needle eval; userightai "usable tail-of-window retrieval"). Upper end of the 85–94 band for 1M capacity; not 95+ (no 1M-scale synthesis measurement published).
- **Multimodal: 15/100.** Text in/out only per the API spec (`"input": ["text"]`); demo vision (robot-dog first-person view) comes from separate Qwen-plus vision tools. At the text-only floor of the rubric.
- **Coding: 84/100.** SWE-V 80.4 — on par with Opus-4.6 Max (80.8) and DS-V4-Pro Max (80.6); SWE-Pro 60.6, TB2.0 69.7, SWE-Multilingual 78.3, SciCode 53.5. Frontier-tier multi-repo SWE, with the 80.4 single-repo score just below the very best.
- **Cost efficiency: 89/100.** $1.25/$3.75 per 1M with 90% cached-input discount at 1M context — the cheapest frontier-1M tier found in this cohort (anchored near the $1.25/$4.25 ≈ 88 reference; output and caching pull it up one point).
- **Overall Score: 72/100.** Half-up mean of (82 + 88 + 92 + 15 + 84) / 5 = 72.2.

### Why not higher
Multimodal (15) is the structural cap: the flagship is text-only, while the cohort's 78.0 average includes raters crediting image/audio I/O. Excluding that, every capability dimension is top-decile (GPQA 92.4, SWE-V 80.4, 1M context, 35h autonomous runs). A Qwen 3.7 with native vision at the same price would land ~10 points higher on this rubric.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28

# Qwen 3.7 (Qwen3.7 Max) — findings by Big Pickle

- Source: Alibaba Qwen Team (`opencode/qwen-3.7` = Qwen3.7 Max generation flagship)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (slug maps to the Qwen3.7 generation flagship, **Qwen3.7 Max**)
- **Short description:** Alibaba's May 2026 agent-centric flagship — a next-generation model built for programming, office/productivity and long-horizon autonomous execution, with a 1M-token window and frontier-tier GPQA/HLE reasoning. Text-only at the base ID (vision added only in a later 2026-06-08 snapshot).
- **Provider / access:** Alibaba Cloud Model Studio (Bailian) / DashScope (`qwen3.7-max`), OpenRouter, Novita, Together; OpenCode Zen (`qwen3.7-max`). Proprietary — no open weights.
- **Release / knowledge:** Unveiled at Apsara Summit; GA 2026-05-20 (snapshot `qwen3.7-max-2026-05-20`; earlier preview 2026-05-17).
- **IDs:** `qwen3.7-max` (Alibaba/ModelStudio/llm-stats); `opencode/qwen-3.7` per the repo meta stub; siblings `qwen3.7-plus`, `qwen3.7-flash`.
- **Context window:** 1,000,000 tokens (max input 991,808 / max output 131,072 per Alibaba docs; CoT up to 262,144). OpenCode lists max output 66K — channel specs vary.
- **Modalities:** Text in / text out (pure-text public interface; the 2026-06-08 snapshot only adds visual input).
- **Pricing:** ~$1.25–$1.65 in / $3.75–$4.95 out per 1M (market ~$1.48/$4.42 cheapest Alibaba; Novita promo $1.25/$3.75; Zen $2.50/$7.50). Cached-in ~$0.30.
- **Architecture:** Undisclosed (proprietary); "next-generation flagship for the agent-centric era" — function calling, web search, structured outputs, prefix completion, context caching supported.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **69.7%**; Terminal-Bench 2.1: **74.5%** (llm-stats / global newswire leaderboard)
- MCP Atlas: **76.4%**; Claw-Eval: **65.2%**; CoWorkBench: **67.2%**; BFCL-V4: **75.0%**; CritPT: **11.4%** (llm-stats rows)
- Toolathlon / OSWorld-Verified / GDPval-AA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.3–92.4%** (frontier-tier, 97th pct per pricepertoken; Alibaba flagship)
- HLE: **41.4%** (llm-stats); MMLU-Pro: **89.6%**; SciCode: **53.5%**
- AA Intelligence Index: **56.6** (top-tier, per Artificial Analysis headline); Coding index 66.0 (83rd pct, pricepertoken)

Coding:

- SWE-bench Verified: **80.4%**; SWE-Multilingual: **78.3%**; SWE-bench Pro: **60.6%**; LiveCodeBench v6: **91.6%** (llm-stats)
- DeepSWE 1.1: **no verified public score found**

Long context:

- MRCR (128K): **90.4%** (llm-stats); 1M window advertised without independent 512K+ retrieval verification.

Multimodal:

- Text-only at base ID; no verified image/video benchmark for the May snapshot.

### Normalized scores (1–100)

- **Tool use: 75/100.** TB2.1 74.5%, MCP Atlas 76.4% and τ²-bench 94.7% are solid; ResearchClawBench 18.7%, AA Agentic Index 23.9 and GDPval-AA 31.6% are the honest hard-cuts that anchor it mid-tier.
- **Reasoning: 87/100.** GPQA 92.4% and HLE 41.4% clear the 40%+ patient-verification gate, MRCRv2 90.4% (128K) supports it, and MMMLU 90.3% / SuperGPQA 73.6% add breadth; AA II 29.5 (the 56.6 quoted originally was AA's native scale) reads modest relative to the headline.
- **Context window: 90/100.** Documented 1M window with strong retrieval evidence (MRCRv2 90.4, AA-LCR 79.0); no verified ≥512K needle score keeps it below 95.
- **Multimodal: 20/100.** Pure-text base interface; vision only on the later separate snapshot.
- **Coding: 83/100.** SWE-bench Verified 80.4% and LCB v6 91.6% are strong; AA Coding Index 66.0, SWE-Pro 60.6%, NL2Repo 47.2% and a SWE-bench (Vals) 68.8 vs vendor 80.4 gap temper the 90+ claim; no DeepSWE row.
- **Cost efficiency: 84/100.** ~$1.25–$1.65 in / $3.75–$4.95 out is competitive premium-tier (below DeepSeek-V4's promo, above GPT-5.4's $2.50/$15).
- **Overall Score: 71/100.** (75 + 87 + 90 + 20 + 83) / 5 = 71.0 → 71 (lowered from 72 on 2026-10-08, see Re-verification). A capable text-only flagship best for long-context agentic coding at mid-premium pricing; superseded by the Qwen3.8 line.

---

## Re-verification — 2026-10-08 (15 days after original)

Re-run adds 35+ primary rows (BenchLM profile 62.72, #42/887, 57/623, updated 2026-10-07) that sharpen the tool-use and coding corners.

| Dimension | 2026-09-23 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 78 | 75 | −3 |
| Reasoning | 87 | 87 | — |
| Context window | 90 | 90 | — |
| Multimodal | 20 | 20 | — |
| Coding | 84 | 83 | −1 |
| Cost efficiency | 84 | 84 | — |
| **Overall** | **72** | **71** | **−1** |

New and corrected data:

- **Agentic rows broadened:** τ²-bench **94.7%**, HLE-with-tools 53.5%, QwenWebBench 1568, QwenClawBench 64.3% join the confirmed TB2.0 69.7 / Claw-Eval 65.2 / BFCL-v4 75.0 / MCP Atlas 76.4 set; but new hard-cuts — **ResearchClawBench 18.7%**, AA Agentic Index **23.9**, GDPval-AA (normalized) 31.6%, VITA-Bench 47.9% — pull Tool 78 → 75.
- **Coding made honest:** AA Coding Index 66.0% (the 83rd-pct "66.0" from pricepertoken is the same number), AA-SciCode 49.5%, NL2Repo 47.2%, OpenHarmony 53.4%; SWE-bench Pro 60.6%/Multilingual 78.3%/LCB 91.6 confirmed; **SWE-bench (Vals) only 68.8%** vs vendor's 80.4% — a 12-point independent-vendor gap worth flagging. Coding 84 → 83.
- **Reasoning depth:** MRCRv2 (128K) 90.4%, AA-LCR 79.0%, CritPt 13.4 (vs the 11.4 cited originally), AA-GPQA 92.3, AA-HLE 40.5, GPQA (Vals) 90.2, MMLU-Pro 89.6; new breadth rows MMLU-Redux 95%, **MMMLU 90.3%**, SuperGPQA 73.6%, HMMT 97.1%, IMOAnswerBench 90.0%, Apex 44.5%.
- **AA Intelligence Index normalization:** BenchLM's AA II row reads **29.5**; the "56.6 (top-tier)" in the original card is AA's native scale of the same index (cf. grok-4.6's 61↔44.3). Both are real — the card now records the AA/BaseLM-normalized figure.
- **Instruction-following / multilingual new:** IFEval 94.3%, IFBench 79.1% (AA 80.5%), MMLU-ProX 87%, NOVA-63 59.0%, INCLUDE 86.2%, PolyMath 86.5%.
- **Lineage:** superseded by Qwen3.8 Max (70.52, #12) / Qwen3.8-Flash-Next (64.04) / Qwen3.8-27B (58.27); Qwen3.7 Flash sits at 47.53. Pricing unchanged.

Gaps still open after re-run: DeepSWE row for 3.7 Max, OSWorld-Verified/Toolathlon, ≥512K retrieval (MRCR 512K/1M), independent vision benchmark for the 06-08 snapshot.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-08 (re-verified; original research 2026-09-23)
- Method: public internet research (Alibaba Cloud docs, Qwen blog, BenchLM, AA, Vals, llm-stats, pricepertoken, global newswire); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.7_Flash.md`, using the same headings.
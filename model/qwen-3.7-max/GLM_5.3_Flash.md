# Qwen 3.7-Max — findings by GLM 5.3 Flash

- Source: Alibaba (`qwen3.7-max`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7-Max
- **Short description:** Alibaba's May 2026 top-tier proprietary frontier model with a toggleable "thinking mode," which set the highest open-API SWE-bench Pro score at launch and established itself as the primary frontier alternative for cost-conscious enterprise teams. Superseded within the family by Qwen 3.8 in August 2026.
- **Provider / access:** Alibaba API (`qwen3.7-max`, Model Studio / Alibaba Cloud, OpenAI-compatible Chat Completions); also available via gateways (Yotta AI Gateway, FlowHunt). No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-05-20; knowledge cutoff not verified.
- **IDs:** `qwen3.7-max` (Alibaba Model Studio / gateways). No Free ID on Zen.
- **Context window:** 1,000,000 tokens (verified via Alibaba materials, FlowHunt leaderboard and benchlm).
- **Modalities:** no image/audio input documented for 3.7-Max (its 3.8 successor is the multimodal one) — text input; text output; reasoning yes (toggleable thinking mode with internal deliberation step); tool calls; JSON mode via OpenAI-compatible API.
- **Pricing (as of 2026-10-09):** ~$1.25 / $3.75 per 1M in/out on the Yotta AI Gateway (gateway rate; official Alibaba Model Studio list pricing not verified in this research). Paid only — no free API tier.
- **Architecture:** Proprietary, closed-weight — parameter count not disclosed; cannot be self-hosted or fine-tuned.

### Raw benchmarks found

> Qwen's Qwen3.7-Max blog tables via benchlm.ai (updated 2026-10-09) + AA and Vals rows. Previously-missing rows now measured.

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (self-reported, corroborated); TB2.1 (Vals): **61.0%** (fills the previously-missing TB2.1 row)
- Tau2-bench: **94.7%** (AA board — fills the previously-missing Tau row)
- MCP Atlas: **76.4%** (Qwen blog — fills the previously-missing MCP row)
- GDPval-AA: **1190 Elo** / 31.6% (AA — fills the previously-missing GDPval row)
- Claw-Eval: **65.2%** (Qwen blog — fills); QwenClawBench: **64.3%** (in-house)
- BFCL v4: **75.0%** (Qwen blog — fills the previously-missing BFCL row)
- HLE w/ tools: **53.5%** (Qwen blog — new)
- AA Agentic Index: **23.9%**; Gert Labs: **64.27%**; ResearchClawBench: **18.7%** (benchlm.ai)
- Tau3-Banking / Toolathon / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (self-reported; AA 92.3%, Vals 90.2% — three-source agreement)
- HLE: **41.4%** (self-reported; AA-HLE 40.5% — agreement)
- MMLU-Pro: **89.6%** (self-reported; Vals 89.3% — agreement); MMLU-Redux **95%**; SuperGPQA 73.6%; MMMLU 90.3%
- MRCR-v2 (128K): **90.4%** (published, Alibaba — corroborated via benchlm.ai)
- AA-LCR: **79.0%** (AA long-context-reasoning board — fills the previously-missing LCR)
- CritPt: **13.4%** (Qwen blog — fills)
- Artificial Analysis Intelligence Index: **29.5** (AA current reading via benchlm.ai — updates the 2026-09-24 draft's "56.6 pts / #4 of 9", which was a launch-era snapshot predating the index recalibration)
- AA-Omniscience: Index 13.5, accuracy 31.1%, hallucination rate **25.6%** (benchlm.ai — good honesty)
- HMMT Feb 2026: **97.1%** (Qwen blog — new math row); IMOAnswerBench 90.0%; Apex 44.5%
- IFEval **94.3%**; IFBench 79.1%; AA-IFBench 80.5%; MMLU-ProX 87%; INCLUDE 86.2%; PolyMath 86.5%

Coding:

- SWE-bench Verified: **80.4%** (self-reported; trails Opus 4.8's 88.6%); SWE-bench (Vals): **68.8%**; SWE Multilingual: **78.3%**
- SWE-bench Pro: **60.6%** (self-reported; the highest open-API score at launch; trails Opus 4.8's 69.2%)
- LiveCodeBench: **91.6%** (self-reported); LiveCodeBench (Vals): **87.1%** (independent corroboration)
- SciCode: **53.5%** (Qwen blog — fills; below the 55%+ frontier mark); AA-SciCode: **49.5%**
- NL2Repo: **47.2%**; OpenHarmony Bench: **53.4%**; AA Coding Index: **66.0%** (benchlm.ai)
- Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- MRCR-v2 128K **90.4%** + AA-LCR **79.0%** measured; no retrieval value verified at 512K+ of the 1M window

Multimodal / vision:

- Design Arena Website: **1279** (OpenRouter); no image/audio input documented for this model — text-only

### Normalized scores (1–100)

- **Tool use: 82/100.** Now measured across independent boards: Tau2 94.7% (AA), MCP Atlas 76.4%, BFCL v4 75.0%, TB2.0 69.7%, Claw-Eval 65.2%, TB2.1 (Vals) 61.0% and GDPval-AA 1190 clear mid-band anchors; AA Agentic Index 23.9% caps it below 85.
- **Reasoning: 88/100.** GPQA 92.4% (three-source agreement) clears the 90%+ frontier reference, HLE 41.4%/53.5%-tools clears the 40% bar, MMLU-Pro 89.6% is top-of-board, MRCR 90.4% and HMMT 97.1% corroborate; the recalibrated AA Index 29.5 and CritPt 13.4% cap it below 90.
- **Context window: 95/100.** 1M tokens (≥1M tier = 95–100); MRCR-v2 90.4% at 128K and AA-LCR 79.0% are strong but no ≥98% retrieval at 512K+ is verified, so no 100.
- **Multimodal: 15/100.** No image/audio/video input documented for this model — text-only per available evidence (its 3.8 successor adds multimodality).
- **Coding: 87/100.** SWE-bench Verified 80.4%, SWE-bench Pro 60.6% (highest open-API score at launch), LiveCodeBench 91.6%/87.1% (two sources) and SWE Multilingual 78.3% are strong; SciCode 53.5% just under the 55%+ mark and trailing Claude Opus 4.8 on both SWE benches cap it below 90.
- **Cost efficiency: 88/100.** ~$1.25/$3.75 per 1M (gateway rate) sits at the ~$1.25/$4.25 = ~88 methodology reference with a slightly cheaper output price.
- **Overall Score: 73/100.** Mean of the five quality dims (82 + 88 + 95 + 15 + 87) / 5 = 73.4 → 73. Best-fit: a frontier-reasoning, coding-strong API model for enterprise software engineering — best avoided where multimodal input or self-hosting is required.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (benchlm.ai tables updated 2026-10-09 citing the Qwen3.7-Max blog, AA and Vals boards — official card plus two independent harnesses; earlier draft via FlowHunt/yottalabs); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: fills missing Tau2 94.7%, MCP Atlas 76.4%, GDPval-AA 1190, Claw-Eval 65.2%, BFCL v4 75.0%, TB2.1 61.0%, SciCode 53.5%, AA-LCR 79.0%, HLE w/tools 53.5%, CritPt 13.4%, HMMT 97.1%; updates AA Index 56.6→29.5 — Tool 72→82, Reasoning 90→88, Overall 72→73.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.

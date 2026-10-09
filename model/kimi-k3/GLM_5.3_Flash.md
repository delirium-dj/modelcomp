# Kimi K3 — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (open frontier flagship; no Free-tier wording)
- **Short description:** Moonshot AI's 2.8T-parameter open sparse-MoE flagship with native vision and a 1M-token window — the first open 3T-class model, aimed at long-horizon coding, knowledge work and reasoning. Frontier-competitive on coding/agentic tasks; Moonshot itself says it still trails Claude Fable 5 and GPT-5.6 Sol overall.
- **Provider / access:** Moonshot first-party Kimi API (`kimi-k3`), Kimi.ai / Kimi Work / Kimi Code (ID `k3`); also on OpenRouter and Cloudflare Workers AI. Not on OpenCode Zen (no Zen Free ID).
- **Release / knowledge:** Hosted launch July 16, 2026; open weights published July 27, 2026 with technical report. Knowledge cutoff not verified in reviewed sources.
- **IDs:** `kimi-k3` (API), `k3` (Kimi Code). Weights on Hugging Face.
- **Context window:** 1,048,576 tokens (1.05M per BenchLM); max output 131,072 default, configurable up to 1,048,576 — verified from Moonshot launch specs, BenchLM and Cloudflare/OpenRouter cards.
- **Modalities:** Text + native vision in; text out. Reasoning: always on (max default at launch; low/high/max later). Function calling/tools supported; web-search tool not recommended for production at launch.
- **Pricing (as of 2026-10-09):** $3.00 in (cache miss) / $15.00 out per 1M list; llm-stats.com lists a $2.85/M input, $0.285/M cached, $14.25/M output route (slightly discounted); cached input $0.30 (90% discount); >90% cache-hit rates reported in coding workloads. AA cost per task $0.94 (Intelligence Index) — similar to GPT-5.6 Sol ($1.04), ~½ of Opus 4.8 ($1.80).
- **Architecture:** Open weights (custom Kimi K3 License; some aggregators list Apache 2.0). 2.8T total / ~104B activated, 93-layer sparse MoE (16 of 896 routed experts + 2 shared, Stable LatentMoE), Kimi Delta Attention + Attention Residuals, MXFP4 weights / MXFP8 activations QAT; ~2.5x scaling efficiency vs K2. Datacenter-scale: supernode with 64+ accelerators recommended.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot launch blog via benchlm.ai; aaTerminalBench21 85%, Vals harness 80.9%; frontier tier)
- MCP Atlas: **84.2%** (Moonshot launch blog via benchlm.ai — fills the previously-missing exact score; 500-task public subset, 100-turn limit per Moonshot protocol)
- Toolathlon-Verified: **73.2%** (Moonshot launch blog via benchlm.ai)
- AA Terminal-Bench 4.0: **12.6%** (Artificial Analysis v4.0 board via benchlm.ai — weak, not comparable with TB2.1)
- AutomationBench (Moonshot): **30.8%** (launch blog via benchlm.ai); AA AutomationBench: **58.3%** (AA board)
- GDPval-AA: **Elo 1537** / 51.8% (Artificial Analysis board via benchlm.ai; earlier AA snapshot 1668; above GPT-5.5 1494, below Fable 5 1760)
- AA-Briefcase: **Elo 1501** (AA leaderboard via benchlm.ai; earlier snapshot 1547, #2 behind Fable 5)
- AA Tau3 Banking: **46.0%** (AA board via benchlm.ai)
- AA Harvey LAB v1.0: **94.6%** (AA board via benchlm.ai)
- AA Agentic Index: **50.6%** (AA via benchlm.ai; earlier WhatLLM snapshot 54.3)
- AA EnterpriseOps-Gym: **45.3%**; APEX-Agents: **37.6%** / APEX-Agents-AA **41.3%**; AA ITBench **47.7%**; JobBench **52.9%**; SpreadsheetBench 2 **34.8%**; DECK-Bench **73.5%** (benchlm.ai)
- BrowseComp: **91.2%** (Moonshot table; 90.4% with full 1M context, no compaction)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot table; Vals harness 92.9%; AA corroborates)
- HLE: **56%** (Moonshot table via benchlm.ai — fills the previously-missing number); HLE w/o tools **43.5%**; AA-HLE **46.9%**
- ARC-AGI-1: **94.5%** verified; ARC-AGI-2: **60.4%** verified (ARC Prize official results via benchlm.ai)
- AA-LCR: **88.7%** (AA long-context-reasoning board via benchlm.ai — fills the previously-missing LCR)
- CritPt: **23.4%**; MLCR-AA: **38.3%** (AA boards via benchlm.ai)
- AA Intelligence Index: **43.6** (AA v4.3.2 board via benchlm.ai, Oct 9, 2026; codersera's October comparison lists 44, behind Opus 5 51, Fable 5 50, GPT-5.6 Sol 47, GLM-5.3 45 — recalibrated index; earlier v4.x snapshot was 59.7 by Aug 28, #3)
- AA-Omniscience: Index **19.7**, accuracy **47.6%**, hallucination rate **53.2%** (benchlm.ai; regressed vs K2.6)
- MMLU-Pro (Vals): **88.0%** (benchlm.ai)
- CharXiv Reasoning: **91.3%** with Python tools / **84.8%** without (Moonshot table)

Coding:

- SWE-bench Verified: **76.8%** (Moonshot table; Vals SWE-bench 93.4%)
- FrontierSWE: **81.2%** (Moonshot launch blog via benchlm.ai); FrontierSWE v2: **25.9%** (Proximal board via benchlm.ai)
- DeepSWE: **67.5%** (Moonshot launch blog via benchlm.ai — fills the previously-missing independent number)
- LiveCodeBench (Vals): **87.2%** (benchlm.ai)
- AA Coding Index: **76.2** (AA via benchlm.ai, corroborating the earlier WhatLLM snapshot)
- ProgramBench: **77.8%**; Kimi Code Bench v2: **72.9%**; sweMarathon **42%**; PostTrainBench **36.6%** / v1.1 **32.0%**; MLS-Bench Lite **48.3%**; VulcanBench v3 **73.7%**; OpenHarmony Bench **57.3%**; CursorBench 3.2 **60.8%** (benchlm.ai)
- Frontend Code Arena (blind ranking): **#1 at launch, Elo 1679** (LMArena, via codersera.com October 2026 comparison)
- Kernel optimization: near-parity with Fable 5 / GPT-5.6 Sol; autonomously built MiniTriton (Triton-like GPU compiler)

Long context:

- 1M-token window with free automatic prefix caching; BrowseComp 91.2% (compacted) vs 90.4% (full 1M) (Moonshot); AA-LCR 88.7% measured (benchlm.ai); no MRCR/RULER numbers verified in reviewed sources

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.3% (frontier-tier, corroborated across three harnesses), MCP Atlas 84.2% (now measured), Toolathlon 73.2%, AA Harvey LAB 94.6%, AA AutomationBench 58.3% clear the frontier band (TB ~88%+, Tau3 ~50%+); the weak AA TB4.0 12.6% (recalibrated, not comparable) and AA Tau3 Banking 46.0% cap it at the band floor.
- **Reasoning: 88/100.** GPQA 93.5%, HLE 56%/43.5% (now verified — old draft scored on an unverified HLE), ARC-AGI-2 60.4% verified, AA-LCR 88.7%; the AA-Omniscience hallucination rate 53.2% and the recalibrated AA Index 43.6 (behind GLM-5.3/Opus 5 on v4.3.2) keep it below 90.
- **Context window: 95/100.** 1M window (95–100 tier) with 1M configurable output and measured AA-LCR 88.7%; no MRCR/RULER retrieval ≥98% at 512K+ verified, so not awarded the 100 cap.
- **Multimodal: 78/100.** Native text+vision in / text out with strong measured vision: MMMU-Pro 83.4% w/ Python, MathVision 97.8% w/ Python, CharXiv 91.3%, OmniDocBench 91.1% (document understanding); no audio/video in and text-only output cap it inside the 75–90 band's lower half.
- **Coding: 88/100.** SWE-bench Verified 76.8% (Vals 93.4%), FrontierSWE 81.2%, LiveCodeBench (Vals) 87.2%, AA Coding Index 76.2, blind Frontend Arena #1 (1679 Elo); DeepSWE 67.5% sits below the 74%+ frontier threshold and FrontierSWE v2 25.9% is weak — docked below 90.
- **Cost efficiency: 60/100.** $3/$15 list per 1M is the rubric's ~60 anchor; the $2.85/$14.25 llm-stats route, 90% cached-input discount and $0.94/task (AA, ~½ Opus 4.8) soften it for cache-heavy workloads.
- **Overall Score: 88/100.** Mean of the five quality dims (90 + 88 + 95 + 78 + 88) / 5 = 87.8 → 88. Best fit: long-horizon coding and million-token agentic/research work where open weights matter; expect harness discipline (full thinking-history pass-through) and premium output pricing.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-09
- Method: public internet research (DuckDuckGo search; benchlm.ai full benchmark tables updated 2026-10-09, codersera October comparison, llm-stats, Moonshot launch blog cross-checked); scores are normalized 1–100 interpretations, not official vendor scores. Second-pass enrichment: adds measured MCP Atlas 84.2%, HLE 56%, AA-LCR 88.7%, DeepSWE 67.5%, FrontierSWE 81.2%, ARC-AGI-2 60.4%, recalibrated AA Index 43.6 — Tool 88→90, Reasoning 85→88, Multimodal 70→78, Coding 90→88.
- Future sources: add a new file next to this one, e.g. `Kimi_K4.md`, using the same headings.

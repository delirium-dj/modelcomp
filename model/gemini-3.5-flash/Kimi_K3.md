# Gemini 3.5 Flash — findings by Kimi K3

- Source: Google / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's May 2026 Flash reasoning model — the opening release of the Gemini 3.5 family ("frontier intelligence with action"); strong τ²-bench tool use and MCP tool calling at Flash cost. Default model of the Gemini app and AI Mode in Search at launch. Sibling: 3.5 Flash-Lite; cyber cousin: 3.5 Flash Cyber.
- **Provider / access:** Google Gemini API (`gemini-3.5-flash`), AI Studio, Android Studio, Antigravity, Gemini Enterprise Agent Platform (per launch post).
- **Release / knowledge:** Released 2026-05-19 at Google I/O (deepmind.google blog, Kavukcuoglu/Dean/Vinyals/Shazeer); knowledge cutoff not verified.
- **IDs:** `google/gemini-3.5-flash`; listed on OpenCode Zen as `gemini-3.5-flash` (no Free-tier ID verified).
- **Context window:** 1M tokens (benchlm.ai; family-consistent); max output not verified (family spec 64K provisional).
- **Modalities:** text/image (familial audio/video/PDF) in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** no Google list price verified for 3.5 specifically in this pass; OpenCode Zen lists `gemini-3.5-flash` at $1.50/M in, $9/M out (aggregator rate).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (deepmind.google launch post — outperforms Gemini 3.1 Pro per Google; benchlm.ai; Vals 74.2%)
- τ²-bench (Tau2-Bench): **95.3%** (benchlm.ai)
- MCP Atlas: **83.6%** (deepmind.google launch post, benchlm.ai); Toolathlon: **56.5%** (benchlm.ai)
- GDPval-AA: **1656 Elo** (deepmind.google launch post; benchlm.ai snapshot shows 1345 Elo / 42.2% normalized — likely an older GDPval-AA version or pre-update snapshot)
- OSWorld-Verified: **78.4%**; Finance Agent v2: **57.9%**; APEX-Agents-AA: **47.1%**; AA EnterpriseOps-Gym: **50.1%**; AA Agentic Index: **27.3%** (benchlm.ai)
- Claw-track: ResearchClawBench **18.0%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **92.2–92.7%** (GPQA-D 92.7%, AA 92.2%, Vals 92.7%) (benchlm.ai)
- HLE: **40.2%**; AA-HLE: **42.7%** (benchlm.ai)
- AA-LCR: **69.3%**; CritPt: **13.1%** (benchlm.ai)
- ARC-AGI-2: **72.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **50.2**; BenchLM overall **63.49/100, #32 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **51.9% / 60.7%** (benchlm.ai)
- MMLU-Pro (Vals): **89.5%**; FrontierMath v2: **39.0%** T1–3 / **14.6%** T4 (benchlm.ai)

Coding:

- SWE-bench (Vals): **78.8%**; SWE-bench Pro: **55.1%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **87.6%** (benchlm.ai)
- SciCode: **53.1%**; AA-SciCode: **53.9%**; AA Coding Index: **70.1** (benchlm.ai)
- Vibe Code Bench: **48.7%**; CursorBench 3.2: **48.8%** (benchlm.ai)

Long context:

- MRCR v2: **77.3%** overall, but **MRCR 1M: 26.6%** (benchlm.ai) — severe retrieval decay at max window; AA-LCR 69.3%. Consistent with family lite variant showing 21.3% MRCR 1M pointwise (deepmind.google flash-lite table).

Multimodal:

- CharXiv Reasoning: **84.2%** (deepmind.google launch post — matches benchlm.ai); MMMU-Pro: **83.6%** (AA 84.3%); Blueprint-Bench 2: **33.6%**; Design Arena Website: **1275 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 86/100.** τ²-bench 95.3% (50%+ → 85–92 band), MCP Atlas 83.6%, TB 2.1 76.2%, OSWorld-Verified 78.4%, launch GDPval-AA 1656; capped by AA Agentic Index 27.3%.
- **Reasoning: 85/100.** AA Intelligence Index 50.2 and HLE ~41–42.7% fall in the 30–45% w/tools band (85–92); capped by CritPt 13.1% and LCR 69.3%.
- **Context window: 68/100.** 1M window on paper, but MRCR 1M collapses to 26.6% and LCR is 69.3% — usable window effectively well below 1M; band exception justified by measured decay.
- **Multimodal: 88/100.** CharXiv 84.2%, MMMU-Pro ~84%, family image/audio/video/PDF input; text-only output and mid-80s vision rows hold it just under the 90–95 band.
- **Coding: 76/100.** LiveCodeBench 87.6%, SWE-bench (Vals) 78.8%; capped by SWE-bench Pro 55.1% and CursorBench 48.8%.
- **Cost efficiency: 76/100.** Zen rate $1.50/$9 — input in the $1.50/$7.50 band (75–80) but the nominally pricier output tier pulls it to the low end; Google list price unverified.
- **Overall Score: 81/100.** Mean of (86+85+68+88+76)/5 = 80.6 → 81. Best fit: tool-call-heavy Flash workloads (τ²/MCP) at ≤256K context; avoid 1M-scale retrieval.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (deepmind.google Gemini 3.5 launch blog of 2026-05-19, deepmind.google model pages, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: verified release date (2026-05-19, Google I/O); corrected GDPval-AA to 1656 Elo per launch post (benchlm snapshot 1345 noted as stale); confirmed TB 2.1 76.2%, MCP Atlas 83.6%, CharXiv 84.2% against the launch post; added Zen pricing ($1.50/$9); adjusted scores to band-compliant values.
- Future sources: add a new file next to this one using the same headings.

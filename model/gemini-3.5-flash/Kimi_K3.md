# Gemini 3.5 Flash — findings by Kimi K3

- Source: Google / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's early-2026 Flash reasoning model in the Gemini 3 family; strong τ²-bench tool use and MCP tool calling at Flash cost. Sibling: 3.5 Flash Cyber (security variant).
- **Provider / access:** Google Gemini API (`gemini-3.5-flash`), AI Studio.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `google/gemini-3.5-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image (familial audio/video/PDF) in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Flash-tier — provisional.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (benchlm.ai; Vals 74.2%)
- τ²-bench (Tau2-Bench): **95.3%** (benchlm.ai)
- MCP Atlas: **83.6%**; Toolathlon: **56.5%** (benchlm.ai)
- GDPval-AA: **1345 Elo** (42.2% normalized) (benchlm.ai)
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
- Vibe Code Bench: **48.7%**; CursorBench 3.2: **48.8%**; Terminal-Bench 2.1: **76.2%** (benchlm.ai)

Long context:

- MRCR v2: **77.3%** overall, but **MRCR 1M: 26.6%** (benchlm.ai) — severe retrieval decay at max window; AA-LCR 69.3%.

Multimodal:

- MMMU-Pro: **83.6%** (AA 84.3%); CharXiv: **84.2%**; Blueprint-Bench 2: **33.6%**; Design Arena Website: **1275 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** τ²-bench 95.3%, MCP Atlas 83.6%, TB 2.1 76.2%, OSWorld-Verified 78.4%; capped by GDPval-AA 1345 and Agentic Index 27.3%.
- **Reasoning: 75/100.** GPQA ~92.5%, ARC-AGI-2 72.1%, AA Intelligence Index 50.2; capped by CritPt 13.1% and HLE ~41%.
- **Context window: 68/100.** 1M window on paper, but MRCR 1M collapses to 26.6% and LCR is 69.3% — usable window effectively well below 1M.
- **Multimodal: 82/100.** CharXiv 84.2%, MMMU-Pro ~84%; text-only output caps it.
- **Coding: 76/100.** LiveCodeBench 87.6%, SWE-bench (Vals) 78.8%; capped by SWE-bench Pro 55.1% and CursorBench 48.8%.
- **Cost efficiency: 80/100.** Price unverified; scored provisional on Flash-tier positioning.
- **Overall Score: 77/100.** Mean of the five quality dims (82+75+68+82+76)/5 = 76.6 → 77. Best fit: tool-call-heavy Flash workloads (τ²/MCP) at ≤256K context; avoid 1M-scale retrieval.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

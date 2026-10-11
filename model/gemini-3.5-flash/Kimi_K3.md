# Gemini 3.5 Flash — findings by Kimi K3

- Source: Google / Gemini 3.5 Flash (`gemini-3.5-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's mid-2026 Flash reasoning model in the Gemini 3 family; strong τ²-bench tool use and MCP tool calling at Flash cost. Sibling: 3.5 Flash Cyber (security variant).
- **Provider / access:** Google Gemini API (`gemini-3.5-flash`), AI Studio.
- **Release / knowledge:** Released 2026-05-19 (OpenCode Data, newly verified — my 2026-09-24 pass had "date not verified"); knowledge cutoff listed as 2025-01 in the OpenCode catalog (suspiciously early for a May-2026 model — treated as catalog noise, unverified).
- **IDs:** `google/gemini-3.5-flash` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **66K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/video/audio/PDF in (OpenCode Data confirms familial coverage); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $1.50/M input, $9.00/M output, $0.15/M cached (OpenCode Data catalog — verified now; my first pass had Flash-tier price unverified).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **76.2%** (official deepmind.google/models/gemini/flash/ via OpenCode Data; matches benchlm.ai; Vals 74.2%)
- τ²-bench (Tau2-Bench): **95.3%** (benchlm.ai)
- MCP Atlas: **83.6%** (official page; matches benchlm.ai); Toolathlon: **56.5%** (official; matches benchlm.ai)
- GDPval-AA: **1656 Elo** (official page via OpenCode Data — CONFLICT with benchlm.ai's 1345 Elo / 42.2%; official figure is newer/higher, both retained; scoring uses the conflict note)
- OSWorld-Verified: **78.4%** (official; matches benchlm.ai); Finance Agent v2: **57.9%**; APEX-Agents-AA: **47.1%**; AA EnterpriseOps-Gym: **50.1%**; AA Agentic Index: **27.3%** (benchlm.ai)
- Claw-track: ResearchClawBench **18.0%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **92.2–92.7%** (GPQA-D 92.7%, AA 92.2%, Vals 92.7%) (benchlm.ai)
- HLE: **40.2%** (official page; matches benchlm.ai); AA-HLE: **42.7%** (benchlm.ai)
- AA-LCR: **69.3%**; CritPt: **13.1%** (benchlm.ai)
- ARC-AGI-2: **72.1%** (official page; matches benchlm.ai)
- Artificial Analysis Intelligence Index: **50.2**; BenchLM overall **63.49/100, #32 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **51.9% / 60.7%** (benchlm.ai)
- MMLU-Pro (Vals): **89.5%**; FrontierMath v2: **39.0%** T1–3 / **14.6%** T4 (benchlm.ai)

Coding:

- SWE-bench Pro: **55.1%** resolve rate (official page via OpenCode Data; matches benchlm.ai); SWE-bench (Vals): **78.8%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **87.6%** (benchlm.ai)
- SciCode: **53.1%**; AA-SciCode: **53.9%**; AA Coding Index: **70.1** (benchlm.ai)
- Vibe Code Bench: **48.7%**; CursorBench 3.2: **48.8%**; Terminal-Bench 2.1: **76.2%** (benchlm.ai)

Long context:

- MRCR v2: **77.3%** overall, but **MRCR 1M: 26.6%** (benchlm.ai) — severe retrieval decay at max window; AA-LCR 69.3%.

Multimodal:

- MMMU-Pro: **83.6%** (official page; AA 84.3%); CharXiv: **84.2%** (official; matches benchlm.ai); Blueprint-Bench 2: **33.6%**; Design Arena Website: **1275 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 84/100.** Raised from 82: τ²-bench 95.3%, MCP Atlas 83.6%, TB 2.1 76.2%, OSWorld-Verified 78.4% (all official-confirmed), and the GDPval-AA correction (official 1656 Elo vs third-party 1345) lifts the biggest cap; Agentic Index 27.3% still drags below the 1500+ GDPval cohort's standing.
- **Reasoning: 75/100.** Unchanged: GPQA ~92.5%, ARC-AGI-2 72.1% (official-confirmed), AA Index 50.2; capped by CritPt 13.1% and HLE ~40–43%.
- **Context window: 68/100.** Unchanged: 1M window on paper, 66K output verified, but MRCR 1M collapses to 26.6% and LCR is 69.3% — usable window effectively well below 1M.
- **Multimodal: 82/100.** Unchanged: CharXiv 84.2%, MMMU-Pro 83.6% (official-confirmed), full image/video/audio/PDF input; text-only output caps it.
- **Coding: 76/100.** Unchanged: LiveCodeBench 87.6%, SWE-bench (Vals) 78.8%; capped by official SWE-bench Pro 55.1% and CursorBench 48.8%.
- **Cost efficiency: 76/100.** Adjusted from provisional 80: the verified price ($1.50/$9.00) is double Gemini 3.8 Flash's $0.75/$3.75 list — solid mid-tier economics, not the cheapest Flash.
- **Overall Score: 77/100.** Mean of the five quality dims (84+75+68+82+76)/5 = 77.0. Best fit: tool-call-heavy Flash workloads (τ²/MCP) at ≤256K context; avoid 1M-scale retrieval.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official deepmind.google/models/gemini/flash/ table transcribed by OpenCode Data `google/gemini-3-5-flash` incl. pricing/release facts; benchlm.ai scorecard from first pass). Second pass over my 2026-09-24 file: verified release date (2026-05-19), pricing ($1.50/$9.00, $0.15 cached), 66K max output; flagged the GDPval-AA conflict (official 1656 vs benchlm 1345); noted the catalog's implausible 2025-01 cutoff as unverified noise. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

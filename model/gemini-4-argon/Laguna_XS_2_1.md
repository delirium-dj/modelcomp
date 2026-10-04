# Gemini 4 Argon — findings by Laguna XS 2.1

- Source: Google DeepMind (`gemini-4-argon`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google DeepMind's first post-"3.x Pro" flagship (announced 2026-09-30), replacing the Pro naming line — SOTA on DeepSWE v1.1 and the Vals knowledge-work Index, with staged access: Fairwind Program vetted cyber defenders first, paid API and Google AI Ultra "as soon as possible."
- **Provider / access:** staged rollout — Fairwind Program (managed model, zero data retention for partners) first; paid Gemini API and Google AI Ultra following. Arena listing `gemini-4-argon-high`. No public API model id as of 2026-10-04.
- **Release / knowledge:** 2026-09-30; knowledge cutoff not yet published (no model card as of launch).
- **IDs:** no public API ID yet; Arena `gemini-4-argon-high`. No Zen Free ID found.
- **Context window:** 1M tokens (per Artificial Analysis / Arena); max output 262K (Vals.ai) — up from 64K on the 3.x Pro line.
- **Modalities:** text, image, video, speech in (per AA's listing); text out; reasoning yes (thinking settings; scores at highest setting); tool calls yes.
- **Pricing (as of 2026-10-04):** $4 / $20 per 1M in/out (Vals.ai listing); Vals Index cost per test $15.68.
- **Architecture:** proprietary; no parameter count published. Ships with chain-of-thought/action misalignment monitors and leads Gray Swan's indirect prompt injection benchmark (0.7% attack success).

### Raw benchmarks found

Agent / tool use:

- Vals Index (knowledge work, GDP-weighted): **68.9%** (#1 of 43; first Gemini to top it)
- AutomationBench: **51.3%** (#1, Zapier; AA's own run: **77.5%**, 1st, ~6 pts ahead of next)
- Vals Finance Agent v2: **65.4%** (#1 of 74)
- Harvey's Legal Agent Benchmark: **19.6%** (Google table; ~3x the next model)
- Agents' Last Exam: **39.5%** (vs Astra 34.2, Opus 5.5 38.2)
- OSWorld 2.0 (offline, partial): **69.2%** (behind Astra 72.6)
- CWE-bench v1 (vuln remediation): **68.0%** (tied #1 with Astra); CyberBench v1.1 **77.86%** (Vals.ai); Google internal vuln benchmark **85.8%**; Wiz black-box pentest **70.9%**
- Gray Swan IPI (prompt injection, lower=better): **0.7%** (vs Opus 5.5/Fable 1.0, Astra 8.5)
- Claw-Eval / MCP-Atlas / Tau3: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index v4.3.2: **53** (High; tied with GPT-6 Astra and Fable 5.1, behind Opus 5.5's 58; 8th of 223)
- Arena Text (human preference): **#1, 1525** (20 pts ahead of Opus 4.6)
- Terminal-Bench Science 0.1: **57.6%** (behind Astra 68.1, Opus 5.5 63.3)
- LABBench 2: **88.8%** (#1 on Google's table)
- RiemannBench: **76.0%** (#1 on Google's table)
- AA-Omniscience hallucination rate: **15%** (vs Astra 51%)
- GPQA / HLE / CritPt: no verified public score found at launch

Coding:

- DeepSWE v1.1: **77.9%** (SOTA; vs Opus 5.5 74.2, Astra 74.1, Fable 5.1 67.4)
- Vibe Code Bench: **91.9%** (#1)
- FrontierSWE v2: **55.0%** (last of 4; Astra leads 65.5)
- Terminal-Bench 4.0: **57.4%** (last of 4; Opus 5.5 leads 66.4; AA's own run: 57%)
- PostTrainBench (ML engineering): **45.3%** (behind Opus 5.5 49.3)

Long context:

- GraphWalks BFS f1: **99.7%** up to 128K; **84.2%** at 256K–1M (best of the four frontier models; Astra 71.8, Claude mid-60s)

Multimodal (supporting): LVBench long video **91.7%** (SOTA); Chartography **71.6%** (#1 on Google's table)

### Normalized scores (1–100)

- **Tool use: 93/100.** Sweeps all four third-party knowledge-work rows (Vals Index #1, AutomationBench #1, Finance Agent #1, Harvey Legal #1) with Agents' Last Exam 39.5% on top; capped by OSWorld 69.2% behind Astra and missing Tau3/MCP-Atlas rows.
- **Reasoning: 90/100.** LABBench 2 88.8% and RiemannBench 76.0% lead Google's table and Arena Text ranks #1 (1525); capped by AA Index 53 (behind Opus 5.5's 58) and TB-Science 57.6% behind Astra.
- **Context window: 98/100.** 1M window with GraphWalks 84.2% at 256K–1M — the best long-range retrieval of the current frontier (rivals 65–72%) and 99.7% at 128K; a whisker under the ≥98%-at-512K+ bar for 100.
- **Multimodal: 95/100.** Text/image/video/speech in (audio-in tier 90–100) with LVBench 91.7% SOTA and Chartography 71.6%; text-only output caps it.
- **Coding: 89/100.** DeepSWE 77.9% SOTA and Vibe Code Bench 91.9% #1 offset by last-of-four finishes on FrontierSWE v2 (55.0) and TB 4.0 (57.4) — great at long-horizon repo work, weaker in terminal loops.
- **Cost efficiency: 62/100.** $4/$20 (Vals.ai listing) sits between the methodology's $3/$15 (~60) and $5/$25 bands; staged access (no public API yet) caps effective availability.
- **Overall Score: 93/100.** Mean of (93, 90, 98, 95, 89) = 93 — the new frontier for knowledge work, long documents and video understanding; Opus 5.5 still wins terminal-heavy agent loops.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-04
- Method: public internet research (Google DeepMind launch post + model table, Vals.ai, emergent.sh benchmark analysis, Post-Cutoff, SiliconANGLE, gemini4argon.com, Artificial Analysis via emergent.sh); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

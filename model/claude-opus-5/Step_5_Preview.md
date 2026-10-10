# Claude Opus 5 — findings by Step 5 Preview

- Source: Anthropic `claude-opus-5`
- Date: 2026-10-10 (UTC) — second-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (`claude-opus-5`; API model ID `claude-opus-5`, effort variants `-low/-medium/-high/-xhigh/-max`)
- **Short description:** Anthropic's previous-generation Opus (successor to Opus 4.8), built for deep reasoning and long agentic runs. Superseded as the recommended Opus by Opus 5.5 (2026-09-22) but still Active, retirement not sooner than 2027-07-24.
- **Provider / access:** Anthropic Claude API (Messages API), AWS Bedrock, Google Vertex AI, Microsoft Foundry. Extended thinking ON by default; new xhigh reasoning-effort tier. No free tier.
- **Release / knowledge:** Released 2026-07-24 (surfaced as "Honeycomb EAP" in Cursor 2026-07-09). Knowledge cutoff not explicitly disclosed.
- **IDs:** `claude-opus-5` (+ effort suffixes). No free/contributor ID.
- **Context window:** 1,000,000 (1M) total; 128,000 max output (sync Messages API), 300,000 via Message Batches API.
- **Modalities:** Text, image, PDF in; text + tool-calls out. No audio or video input; no image/audio output. Reasoning yes; tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** $5.00/M in · $25.00/M out. Fast Mode $10/$50. Batch 50% off ($2.50/$12.50). No free tier.
- **Architecture:** Proprietary; weights and parameter count undisclosed.

### Raw benchmarks found

> Cross-referenced hokai.io (Anthropic system card + Artificial Analysis), vectorwire.ai (174 results/78 benchmarks, 22 independent, capability profile), and Anthropic's own Opus page. Independent runs noted where available.

Agent / tool use:

- SWE-bench Pro (harder agentic coding): **79.2%** (Anthropic; up 10 pts from Opus 4.8's 69.2%)
- AA Intelligence Index: **51** (Artificial Analysis, max — see note; AA now flags the model **deprecated** and benchmarks only the default 10k workload, so this is a partial-workload number vs. the ~61 from the earlier full run cited in the first pass)
- ARC-AGI-3 (high effort): **30.16%** (≈20× Opus 4.8, ≈4× GPT-5.6 Sol Max)
- Vector Wire capability: **Agentic "Frontier"** (leads 7/7)
- Toolathlon Verified: Pass@1 **80.6%** / Pass@3 **87.0%** (Anthropic system card, via vectorwire cross-ref)
- OSWorld 2.0 / Tau-bench exact 3.1 numbers: not surfaced live for Opus 5 (5.5's 5.5-era numbers listed instead) — treated as provisional

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (Anthropic; rank #7/50 on hokai)
- Vector Wire capability: **Reasoning "Frontier"** (−2.3% vs leader, 6/6); **Factuality "Strong"** (−8.7%)
- AA Intelligence Index: **61** on the earlier full run; the live AA page now shows **51** but flags the model **deprecated** and re-benchmarks only the default 10k-input workload, so 51 is a partial-workload artifact, not a capability drop
- HLE / AIME 2025 exact Opus-5 rows: not surfaced live for Opus 5 — treated as provisional
- Math: Vector Wire rates Math **"Capable"** (−12.3% vs leader)

Coding:

- SWE-bench Verified: **97.0%** (Anthropic; hokai rank #1/32, the highest recorded result on that benchmark to date — likely near-saturated)
- SWE-bench Pro: **79.2%** (see tool use)
- Vector Wire capability: **Coding "Frontier"** (−5.9% vs leader, 8/10)
- LiveCodeBench / SciCode exact Opus-5 rows: not surfaced live — treated as provisional
- Terminal-Bench 2.1 exact Opus-5 row: not surfaced live (5.5 leads at 66.4% TB4.0; Opus 5 at 52.3% TB4.0 per Vellum's 5.5 comparison)

Long context:

- 1M context confirmed (default and ceiling). Vector Wire: Long Context **"Capable"** (−12.5% vs leader). No explicit MRCR ≥98%-at-512K figure published.
- **Tool use: 93/100.** AA Intelligence Index 61 (well above the ~32 median), SWE-bench Pro 79.2%, Toolathlon 80.6%, and a Vector Wire "Agentic Frontier" (leads 7/7) rating place it firmly in the 90–100 band. Capped only by the absence of live OSWorld/Tau-bench exact rows and the fact that several tool evals skew toward its successor 5.5's numbers now.
- **Reasoning: 93/100.** GPQA Diamond 94.1% and AA Intelligence Index 61 are frontier, ARC-AGI-3 30.16% is ~4× GPT-5.6 Sol Max, and Vector Wire rates Reasoning "Frontier" (−2.3%). Capped by Math "Capable" (−12.3%) and no live HLE/AIME Opus-5 row.
- **Context window: 92/100.** 1M input / 128K output (300K batch) with Long Context "Capable" (−12.5% vs leader) — solid ≥1M tier. Not a full 100 because no explicit MRCR ≥98%-at-512K retrieval figure was published to confirm the top sub-tier.
- **Multimodal: 78/100.** Text + image + PDF in (text out), no audio/video input and no non-text output → the 75–90 "video/PDF in" band, held to 78 by the missing audio/video and Vector Wire's Multimodal "Capable" (−18.6% vs leader).
- **Coding: 94/100.** SWE-bench Verified 97.0% (#1, the highest recorded on that benchmark — though likely near-saturated) plus SWE-bench Pro 79.2% and a Vector Wire "Coding Frontier" (−5.9%, 8/10) rating. Capped slightly by the saturation risk on SWE-bench Verified and the lack of live LiveCodeBench/SciCode/TB exact rows for this generation.
- **Cost efficiency: 55/100.** Paid-only at $5/$25 per 1M (one of the priciest tracked, >93% of models); Batch 50% off and Fast Mode available, but there is no $0 tier and it costs more than its successor 5.5.
- **Overall Score: 90/100.** Mean of the five non-cost dims (93+93+92+78+94)/5 = 90.0. A frontier agentic-coding/reasoning pick; new deployments are better served by the cheaper Opus 5.5, but existing Opus 5 workloads have no deprecation pressure until mid-2027.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-10
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (81 primary-source results, updated 2026-10-07) and the Artificial Analysis model page (now flags Opus 5 deprecated; partial-workload Intelligence Index 51 vs. the earlier full-run 61). Prior pass (2026-10-08) used Anthropic's Opus page, hokai.io, and vectorwire.ai.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.


### Normalized scores (1–100)

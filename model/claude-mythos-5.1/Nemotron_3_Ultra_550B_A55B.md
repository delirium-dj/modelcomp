# Claude Mythos 5.1 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (restricted access)
- **Short description:** Anthropic's most capable model for cybersecurity and biology research; same underlying model as Fable 5.1 but with cyber/biology safeguards lifted. Access limited to vetted organizations via Cyber Verification Program and Life Sciences Verification Program.
- **Provider / access:** Anthropic API (`claude-mythos-5-1` via `https://api.anthropic.com/v1/messages`), restricted to verified partners. Not available on OpenCode Zen or public marketplaces. Anthropic Messages API (not Chat Completions).
- **Release / knowledge:** 2026-09-01 release (announced with Fable 5.1); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-mythos-5-1` (Anthropic API, restricted). No public Free tier.
- **Context window:** 1,000,000 tokens total (1M); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $10.00/M in, $50.00/M out (Anthropic Mythos page). Same as Fable 5.1. 30-day data retention required for safety monitoring.
- **Architecture:** Proprietary (Anthropic); same underlying model as Fable 5.1; parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic Fable 5.1 & Mythos 5.1 System Card)
- All other benchmarks: **same as Fable 5.1** where safeguards don't intervene (Anthropic states "Fable 5.1 and Mythos 5.1 are the same underlying model"; Mythos results shown where Fable safeguards intervene)

Per Anthropic System Card & blog, Mythos 5.1 exceeds Fable 5.1 on:
- Cybersecurity tasks (exploit generation, penetration testing, binary-based scanning)
- Biology/chemistry tasks (AAV design, protein design, novel hypotheses)
- OSWorld 2.0 (Fable scored 0 due to safeguard intervention)
- AutomationBench (Fable scored 0 due to safeguard intervention)

Fable 5.1 benchmarks (apply to Mythos where no safeguard intervention):
- TB 2.1: 85.0% (Vals) / 91.4% (AA)
- TB 4.0: 55.8% (System Card) / 52.0% (AA)
- GDPval-AA: 1754 Elo (AA) / 62.7% normalized (AA)
- SWE-bench Verified: 95% (System Card) / 95.0% (Vals)
- SWE-bench Pro: 81.2% (System Card)
- LiveCodeBench (Vals): 90.5%
- DeepSWE: 67.4% (System Card)
- FrontierSWE v2: 56.3% (Proximal)
- ProgramBench: 87.6% (System Card)
- CursorBench 3.2: 73.4% (Cursor)
- CursorBench 4.0: 51.8% (Cursor)
- AA Coding Index: 81.6% (AA)
- AA-SciCode: 63.1% (AA)
- GPQA Diamond: 93.7% (AA) / 93.4% (Vals)
- HLE: 65% (System Card)
- AA HLE: 59.1% (AA)
- ARC-AGI-1: 97.5% / ARC-AGI-2: 90% (System Card)
- FrontierMath v2 Tiers 1-3: 90.2% / Tier 4: 87.8% (Epoch AI)
- AA LCR: 85.3% (AA)
- MLCR-AA: 71.1% (AA)
- MMLU-Pro (Vals): 92.4% (Vals)

Reasoning / knowledge: (same as Fable 5.1 where safeguards don't apply)

Coding: (same as Fable 5.1 where safeguards don't apply)

Multimodal: (same as Fable 5.1)

Long context: (same as Fable 5.1)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 88/100.** Mythos exceeds Fable on cyber-agentic tasks (OSWorld, AutomationBench, ExploitGym, CyberGym where Fable scored 0); TB 4.0 60.9% (vs Fable 55.8%), GDPval 1754 Elo, SWE-bench Verified 95%. Capped by limited public benchmark data for Mythos-specific runs.
- **Reasoning: 92/100.** Same core reasoning as Fable 5.1: GPQA 93.7%, HLE 65%, ARC-AGI-1 97.5%/ARC-AGI-2 90%, FrontierMath Tier 4 87.8%, AA LCR 85.3%, MLCR 71.1%. Capped by AA Intelligence Index 53 (Fable) <60 frontier.
- **Context window: 95/100.** 1M native context; AA LCR 85.3%, MLCR 71.1% — no public MRCR ≥98% at 512K+ for 100 tier. Methodology: ≥1M = 95–100.
- **Multimodal: 70/100.** Text + image input only (same as Fable 5.1). No video, audio, PDF input reported. Methodology: +image in = 60–70.
- **Coding: 96/100.** Mythos exceeds Fable on cyber-coding (exploit generation); SWE-bench Verified 95%, LiveCodeBench 90.5%, AA Coding Index 81.6%, ProgramBench 87.6%, DeepSWE 67.4%, FrontierSWE 56.3%. All at/above frontier thresholds.
- **Cost efficiency: 25/100.** $10/$50 per 1M (same as Fable 5.1), blended ~$7.17/M, 98% cache discount (AA for Fable). Restricted access limits real-world cost evaluation. Methodology: $10/$50 ≈ 30.
- **Overall Score: 88/100.** Half-up mean of (88 + 92 + 95 + 70 + 96) / 5 = 88.2 → 88. Best-fit: unrestricted version of Fable 5.1 for vetted cyber/bio research; same core capabilities, higher ceiling on dual-use tasks; access restriction prevents broad deployment.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across official pages (Anthropic Mythos page, Fable/Mythos 5.1 System Card, Fable 5.1 blog), independent benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Epoch AI, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. Mythos 5.1 shares underlying model with Fable 5.1; scores reflect Mythos advantage where safeguards differ.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
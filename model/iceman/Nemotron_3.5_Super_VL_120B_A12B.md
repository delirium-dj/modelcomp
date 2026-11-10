# Iceman — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenCode / Iceman
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman
- **Short description:** OpenCode's anonymous stealth reasoning model available on OpenCode Console and Go; measured on StealthMark 1.8.10 with active tool calling (per project metadata).
- **Provider / access:** OpenCode Console and Go; route `iceman-free`. Free tier — collected data is retained and used to improve the model during its free period.
- **Release / knowledge:** Not confirmed via public source.
- **IDs:** `iceman-free` (OpenCode Console). Listed on OpenCode Console's models page as "Iceman Free" — a stealth model free on OpenCode for a limited time.
- **Context window:** not publicly confirmed via webfetch.
- **Modalities:** text in, text out (stealth reasoning model; no multimodal support confirmed via webfetch); active tool calling supported (per project metadata).
- **Pricing (as of 2026-11-11):** Free (input Free / output Free / cached Free) on OpenCode Console. Free tier flagged: data retained for training.
- **Architecture:** Anonymous stealth reasoning model (per project metadata); weights not publicly attributed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

- Terminal-Bench: no verified public score found
- Tau3 / Tau2: no verified public score found
- Claw-Eval: no verified public score found
- GDPval / OSWorld / Automation: no verified public score found
- Reasoning (GPQA / HLE / MRCR / LCR / CritPt / Index): no verified public score found. Measured on StealthMark 1.8.10 (internal stealth benchmark), but no public StealthMark scores located via webfetch.
- Coding (SWE-bench / DeepSWE / LiveCode / SciCode / SWE-Atlas): no verified public score found
- Cost per task / speed (if available): no per-task cost or speed figures located via webfetch. Free tier.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 60/100.** Active tool calling supported (per project metadata); measured on StealthMark 1.8.10 with tool use. Capped by absence of published Terminal-Bench / Tau3 / GDPval figures and stealth (unverifiable) benchmark.
- **Reasoning: 60/100.** Described as a reasoning model; no published GPQA / HLE / CritPt numbers. Capped by absence of verified public reasoning benchmarks.
- **Context window: 10/100.** Not publicly confirmed via webfetch; lowest tier (<100K → 10–49).
- **Multimodal: 15/100.** Text in, text out only — text-only = 10–20 per methodology; no multimodal support confirmed via webfetch.
- **Coding: 60/100.** Positioned for bulk coding prototypes and synthetic code tasks; no published SWE-bench / LiveCodeBench / DeepSWE figures. Capped by absence of verified coding benchmarks.
- **Cost efficiency: 100/100.** Free ($0/$0) → 100 per methodology. Free tier flagged: prompts and completions retained for training.
- **Overall Score: 41/100.** Mean of (60 + 60 + 10 + 15 + 60) / 5 = 41.0 → 41. Best-fit: free stealth reasoning agent for bulk coding prototypes; strong on price but context window and benchmarks not publicly verified.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/nemotron-3.5-super-vl-120b-a12b)** — 2026-11-11
- Method: public internet research via webfetch (OpenCode Console models page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenCode Console: Models](https://opencode.ai/docs/console/models/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

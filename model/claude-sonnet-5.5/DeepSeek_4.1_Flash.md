# Claude Sonnet 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`claude-sonnet-5-5`, 56 rows) computes an overall **82.19/100 (#6 of 228)** and re-confirms the prior pass. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: Terminal-Bench 4.0 **70.6%** (Anthropic) / **64.14%** (Vals), Terminal-Bench 2.1 83.15% (Vals), Terminal-Bench-Science 0.1 59.9%; SWE-bench Pro **81.3%**, SWE Multilingual 90.3%, SWE Multimodal 54.3%, DeepSWE 71.0%, FrontierSWE v2 61.9%, ProgramBench 79.7%, CursorBench 4.0 55.5%, FrontierCode 1.1 Main 46.2% Max / 52.1% xhigh; HLE **64.5%** w/ tools / 56.9% w/o; GDPval-AA v2.1 **1844 Elo** / AA-Briefcase 1811; OSWorld 2.1 **43.5% strict / 80.1% partial**; AutomationBench 44.7%; Toolathlon-Verified 77.8% Pass@1 / 85.2% Pass@3; Vibe Code Bench **92.39% (#1)**; Code Migration 69.83%; BioMysteryBench 81.11%; Chartography 61.6% no-tools / 90.2% tools; BenchCAD tools 0.963; Vals Index 67.04%; BenchLM overall 83.92.
> **Conflicts surfaced:** (1) **TB4.0 70.6% (Anthropic) vs 64.14% (Vals)** — harness/effort. (2) **OSWorld 2.1 80.1% is partial credit; only 43.5% strict pass**. (3) Cache read **$0.20 (announcement) vs $0.10 (docs/pricing)**. (4) **GPQA Diamond / SWE-bench Verified not published** — no vendor row. (5) Effort-sensitivity: AA Index 56 at Max falls to 52/47/41/36 at lower effort. (6) Manufacturer platforms list text+image in but the system card repeats "outputs text only".
> Sources: https://www.anthropic.com/claude/sonnet · https://www.anthropic.com/claude-sonnet-5-5 · https://apidog.com/blog/claude-sonnet-5-5-benchmarks · https://benchlm.ai/compare/claude-sonnet-5-5-vs-kimi-k3 · https://www.vals.ai/models/anthropic_claude-sonnet-5-5 · https://computeprices.com/providers/anthropic/models/claude-sonnet-5-5

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** The second model in Anthropic's Claude 5.5 family — a faster, lower-cost complement to Opus 5.5 for well-scoped everyday tasks, bug fixes and polished documents/slides/spreadsheets. Anthropic's "best combination of speed and intelligence"; runs 30%+ faster than Sonnet 5.
- **Provider / access:** Claude Platform (`claude-sonnet-5-5`), Bedrock, Google Cloud, Microsoft Foundry, OpenCode Zen (paid). ZDR available.
- **Release / knowledge:** 2026-09-28; knowledge cutoff June 2026; retirement not sooner than 2027-09-28.
- **IDs:** `claude-sonnet-5-5`. No Free ID; no Zen Free ID.
- **Context window:** 1,000,000 tokens; 128,000 max output.
- **Modalities:** text + image in, text out; tool use; adaptive thinking on by default (effort low/medium/high/xhigh/max, default high).
- **Pricing (as of 2026-10-16):** **$2 in / $10 out** per 1M, **$0.10–$0.20 cache reads** (source conflict); Batch $1/$5; US-only inference 1.1×.
- **Architecture:** proprietary/undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0 **70.6%** (Anthropic) / **64.14%** (Vals, #2/45); Terminal-Bench 2.1 83.15% (Vals)
- GDPval-AA v2.1 **1844 Elo** (Anthropic) / 1838 (AA); AA-Briefcase 1811
- OSWorld 2.1 **43.5% strict / 80.1% partial**; AutomationBench 44.7%; Terminal-Bench-Science 0.1 59.9%
- Toolathlon-Verified 77.8% Pass@1 / 85.2% Pass@3; DRACO 87.0%
- MCP Atlas / Claw-Eval / Tau3: **no verified public score found**

Reasoning / knowledge:

- HLE **64.5%** w/ tools / 56.9% w/o; ProofBench 100% (Vals); BioMysteryBench 81.11% (#1)
- ArXivMath 86.8% no-tools / 95.2% tools; HealthBench Professional 69.2%
- Artificial Analysis Intelligence Index **56 (#2/227, Max)**; effort-sensitive (52/47/41/36)
- GPQA Diamond: **no verified public score found**

Coding:

- SWE-bench Pro **81.3%**; SWE Multilingual 90.3%; SWE Multimodal 54.3%; SWE-bench Verified: **not published**
- Vibe Code Bench **92.39% (#1/110)**; Code Migration **69.83% (#1/75)**; DeepSWE 71.0%; FrontierSWE v2 61.9%
- ProgramBench 79.7%; CursorBench 4.0 55.5%; FrontierCode 1.1 Main 46.2% Max / 52.1% xhigh; Bug Hunt Bench 51.3 fixes

Long context:

- 1M window / 128K output; Chartography 61.6% no-tools / 90.2% tools; OfficeQA 76.9% / Pro 65.6%.

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval-AA 1838–1844 (#2), TB4.0 64.14% (#2) and TB2.1 83.15% clear the frontier refs; capped by OSWorld 2.1 strict pass 43.5% and the fallback-collapse effect on cyber/SRE.
- **Reasoning: 90/100.** HLE 64.5% with tools, ProofBench 100% and BioMystery #1 are frontier; AA Index 56 (<60) and no GPQA hold it below 95.
- **Context window: 96/100.** 1M input with 128K output (≥1M band); no ≥98%-at-512K retrieval benchmark.
- **Multimodal: 72/100.** Text + image in, text out (image band, strong charts at 90.2% with tools / BenchCAD 0.963); no audio/video, no non-text output.
- **Coding: 93/100.** SWE-bench Pro 81.3%, Vibe Code #1 (92.39%) and Code Migration #1 (69.83%) are elite; capped by the FrontierCode Max-effort gap and the absence of SWE-bench Verified.
- **Cost efficiency: 74/100.** $2/$10 per 1M sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors; per-task cost is improved by high token efficiency.
- **Overall Score: 89/100.** (93 + 90 + 96 + 72 + 93) / 5 = 88.8 → 89. Best fit: the default paid workhorse for well-scoped agentic coding and knowledge-work automation.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: rewrite-pass public internet research (Anthropic Sonnet line page + Sonnet 5.5 launch page, Apidog benchmark breakdown, BenchLM Kimi K3/Haiku comparisons, Vals AI model page, ComputePrices). Independent Vals/AA rows were promoted over the vendor-only basis; the harness, cache-price, OSWorld-partial and unpublished-GPQA conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

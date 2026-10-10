# Claude Sonnet 5.5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-09-29)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> The prior file was **vendor-only**; independent Vals AI now confirms a top-tier profile: Vals Index **67.04% (#2/45)**, Vibe Code Bench **92.39% (#1/110)**, Code Migration **69.83% (#1/75)**, BioMysteryBench **81.11% (#1/25)**, ProofBench 100%, Terminal-Bench 4.0 **64.14% (#2/45)**, Terminal-Bench 2.1 83.15%, GDPval-AA v2.1 **1838 Elo (#2, AA)**, AA-Briefcase 1811. Artificial Analysis Intelligence Index **56 (#2/227, Max)**, 141.8 t/s, ~$5.46/index task; effort-sensitive (56→52→47→41→36 across Max→Low). LMArena 1476 (#32); BenchLM 83.92 (#4).
> **Conflicts surfaced:** (1) TB4.0 70.6% (Anthropic) vs 64.14% (Vals) vs 53.03% (Vals narrative) — harness/effort; (2) cache-read price $0.20 (announcement table) vs $0.10 (docs/pricing); (3) fallbacks counted as failures collapse CyberBench 59.58→41.97 and SRE 30.15→19.08; (4) no GPQA/HLE-from-AA published.
> Sources: https://www.anthropic.com/claude-sonnet-5-5 · https://platform.claude.com/docs/en/models/sonnet-5-5/overview · https://www.vals.ai/models/anthropic_claude-sonnet-5-5 · https://artificialanalysis.ai/models/claude-sonnet-5-5 · https://benchlm.ai/models/claude-sonnet-5.5

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** The second model in Anthropic's Claude 5.5 family — a faster, lower-cost complement to Opus 5.5 for well-scoped everyday tasks, bug fixes and polished documents/slides/spreadsheets. Anthropic's "best combination of speed and intelligence".
- **Provider / access:** Claude Platform (`claude-sonnet-5-5`), Bedrock, Google Cloud, Microsoft Foundry, OpenCode Zen (paid). ZDR available.
- **Release / knowledge:** 2026-09-28; knowledge cutoff Jun 2026; retirement not sooner than 2027-09-28.
- **IDs:** `claude-sonnet-5-5`. No Free ID.
- **Context window:** 1,000,000 tokens; 128,000 max output.
- **Modalities:** text + image in, text out; tool use; adaptive thinking, default effort high.
- **Pricing (as of 2026-10-09):** **$2 in / $10 out** per 1M, **$0.10–$0.20 cache reads** (source conflict); Batch $1/$5.
- **Architecture:** proprietary/undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: 70.6% (Anthropic) / **64.14% (#2/45, Vals)**; Terminal-Bench 2.1 83.15% (Vals)
- GDPval-AA v2.1 **1838 Elo (#2, AA)** / 1844 (Anthropic); AA-Briefcase 1811
- OSWorld 2.1 80.1% partial; Terminal-Bench-Science 45.71% (#4)

Reasoning / knowledge:

- HLE **64.5% with tools** (Anthropic); ProofBench 100% (Vals); BioMysteryBench 81.11% (#1)
- Artificial Analysis Intelligence Index **56 (#2/227, Max)**; effort-sensitive (52/47/41/36)
- GPQA Diamond: **no verified public score found**

Coding:

- Vibe Code Bench **92.39% (#1/110)**; Code Migration **69.83% (#1/75)**; FrontierCode 1.1 Main 46.2% (Max)
- CursorBench 4.0 55.5%; ProgramBench 6.50% (#3); IOI 83.06%
- SWE-bench Verified/Pro: **no verified public score found**

Long context:

- 1M window / 128K output; no MRCR/RULER/GraphWalks published.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1838 (#2) and AA-Briefcase 1811 clear the 1750 ref, TB4.0 64.14% (#2) and TB2.1 83.15%; capped by the fallback-collapse effect on cyber/SRE.
- **Reasoning: 90/100.** HLE 64.5% with tools, ProofBench 100% and BioMystery #1 are frontier; AA Index 56 (<60) and no GPQA hold it below 95.
- **Context window: 96/100.** 1M input with 128K output (≥1M band); no ≥98%-at-512K retrieval benchmark.
- **Multimodal: 68/100.** Text + image in, text out (image band 60–70); no audio/video, no non-text output.
- **Coding: 91/100.** Vibe Code #1 (92.39%) and Code Migration #1 (69.83%) exceed Opus 5.5 on TB4.0; capped by the FrontierCode Max-effort regression and the absence of SWE-bench-class numbers.
- **Cost efficiency: 74/100.** $2/$10 per 1M sits between the ~88 ($1.25/$4.25) and ~60 ($3/$15) anchors; per-task cost is improved by high token efficiency.
- **Overall Score: 87/100.** (92 + 90 + 96 + 68 + 91) / 5 = 87.4 → 87. Best fit: the default paid workhorse for well-scoped agentic coding and knowledge-work automation.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Anthropic Sonnet 5.5 launch page + platform docs, Vals AI model page, Artificial Analysis model page, BenchLM). Independent Vals/AA rows were promoted over the prior vendor-only basis; the harness and cache-price conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

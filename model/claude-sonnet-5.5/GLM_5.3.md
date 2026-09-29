# Claude Sonnet 5.5 — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-sonnet-5.5`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's Sonnet-class everyday-work model released 2026-09-28, succeeding Claude Sonnet 5 — thinking always on with effort control, tuned for feature work, bug fixes and polished documents. BenchLM's composite (80.49, #5/512) already places it at/near Opus-5 level, far above Sonnet 5 (66.98).
- **Provider / access:** Anthropic API (Messages API; Chat Completions via gateways), 8 API providers per AA, Claude Code/apps. Reasoning: adaptive — always-on thinking with effort levels, default fallback at max effort (AA lists the "Adaptive Reasoning, Max Effort" variant).
- **Release / knowledge:** 2026-09-28 (day of research); knowledge cutoff not stated.
- **IDs:** `anthropic/claude-sonnet-5.5`. No Zen Free ID; paid only.
- **Context window:** 1M total (AA + platform); max output split not published in sources found (meta lists 1M total).
- **Modalities:** text + image in; text out (AA-verified); reasoning yes (always on); tool calls yes; JSON mode not documented here.
- **Pricing (as of 2026-09-28):** $2.00 in / $10.00 out per 1M (Anthropic API); 90% cache discount; blended ~$1.54/1M; ~$7.60 per AA Intelligence-Index task at max effort.
- **Architecture:** proprietary — parameters undisclosed.

### Raw benchmarks found

> Sources: BenchLM (61 rows, updated 2026-09-28; mixes vendor-reported and AA-measured rows as marked) and Artificial Analysis (independent, "max effort, default fallback" variant). Released today, so coverage is partial and moving.

Agent / tool use:

- Terminal-Bench 4.0: **70.6%** (BenchLM) / **63.6%** (AA-measured)
- GDPval-AA: **1844 Elo** (normalized 67.2%) (BenchLM) — highest GDPval recorded in this report set (vs GLM-5.3-Flash 1773, Muse Spark 1.3 1754)
- Toolathlon-Verified: **77.8%** (pass@3 85.2%; pass³-all 68.5%; avg 31.6 turns) (BenchLM)
- AA Briefcase: **1811 Elo** (BenchLM)
- Harvey LAB (held-out): **93.1% criterion-pass / 10.0% all-pass** (BenchLM)
- DRACO: **87.0%** (BenchLM)
- Terminal-Bench-Science 0.1: **59.9%** (BenchLM)
- AutomationBench (Zapier 1.0.6): **44.7%** (BenchLM)
- GDP.pdf: **25.8%** (BenchLM)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- HLE: **55.0%** (AA via BenchLM) / **56.9% w/o tools, 64.5% w/ tools** (BenchLM)
- LCR: **82.7%** (AA via BenchLM)
- CritPt: **31.4%** (BenchLM)
- Artificial Analysis Intelligence Index: **56** — #3/216 in its price class (median 26) (AA; BenchLM lists 56.0)
- Omniscience Accuracy / Hallucination Rate: **54.0% / 47.0%** (Index 32.3) (AA via BenchLM)
- GPQA Diamond: no verified public score found
- ArXivMath Aug. 2026: **86.8% (no tools) / 95.2% (tools)**; GMMLU **92.1%** / MILU **91.6%** (BenchLM)
- HealthBench **69.4%** / Professional **69.2%**; BioMysteryBench **89.2%** human-solvable (BenchLM)

Coding:

- SWE-bench Pro: **81.3%** (BenchLM) — top of this report set (Opus 4.8 = 69.2 per vendor-cited tables)
- SWE-bench Multilingual: **90.3%** / SWE Multimodal: **54.3%** (BenchLM)
- DeepSWE: **71.0%** (BenchLM)
- ProgramBench: **79.7%** (BenchLM)
- SciCode / AA-SciCode: **61.0%** (BenchLM)
- FrontierCode 1.1: **46.2% main / 59.1% extended**; FrontierSWE v2: **61.9%**; CursorBench 4.0: **55.5%** (BenchLM)
- SWE-bench Verified / LiveCodeBench: no verified public score found
- BenchLM overall composite: **80.49/100, #5/512** (Opus 5.5 = 87.07, Opus 5 = 79.64, Sonnet 5 = 66.98)

Long context:

- No public MRCR / RULER / GraphWalks number at 1M. Closest proxy: AA-LCR **82.7%**. 1M limit verified (AA + platform).

Multimodal (grounded):

- Chartography: **61.6% no tools / 90.2% with tools** (BenchLM)
- OfficeQA **76.9%** / OfficeQA Pro **65.6%** (BenchLM)
- Biomedical image analysis: **72.2%** (BenchLM)
- BenchCAD Vision2Code: **0.747 no tools / 0.963 with tools** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1844, TB4.0 70.6% (AA-measured 63.6%), Toolathlon-V 77.8%, AA Briefcase 1811 and Harvey LAB 93.1% are elite, top-of-class agentic results; capped by AutomationBench 44.7%, GDP.pdf 25.8%, LAB all-pass 10.0% and missing TB2.1/Tau3 data.
- **Reasoning: 84/100.** AA-HLE 55.0% (best HLE in this report set), ArXivMath 95.2% with tools, GMMLU 92.1% and LCR 82.7% are near-frontier; capped by CritPt 31.4%, a 47.0% hallucination rate and no verified GPQA row.
- **Context window: 95/100.** Native 1M (≥1M tier, AA-verified); no public ≥512K retrieval benchmark (MRCR/RULER) to justify 100.
- **Multimodal: 68/100.** Text + image input with strong measured image-grounded work (Chartography 90.2% with tools, OfficeQA 76.9%, biomedical 72.2%); capped by no video/audio input and text-only output (image-in band).
- **Coding: 88/100.** SWE-bench Pro 81.3% and SWE Multilingual 90.3% lead this report set, with DeepSWE 71.0%, ProgramBench 79.7% and SciCode 61.0% all at/above frontier references; capped by FrontierCode Main 46.2% and CursorBench 55.5%.
- **Cost efficiency: 60/100.** $2/$10 sits just better than the $3/$15 (~60) reference, but max-effort verbosity is extreme (410M output tokens on the Index, ~4.7× the 88M median) and effective cost is $7.60/task — think-effort control is effectively the cost lever.
- **Overall Score: 85/100.** (91 + 84 + 95 + 68 + 88) / 5 = 85.2 → 85. Best-fit recommendation: the new default Sonnet for everyday coding and agent work — near-Opus capability at Sonnet pricing when effort is tuned down; keep effort low for routine tasks or the verbosity and TTFT (up to ~353s at max) will dominate.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-09-28
- Method: public internet research (Artificial Analysis, BenchLM — both updated on release day); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

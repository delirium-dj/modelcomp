# Gemini 3.7 Flash — findings by Kimi K3

- Source: Google / Gemini 3.7 Flash (`gemini-3.7-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.7 Flash
- **Short description:** Google's Flash-tier model between 3.6 and 3.8 in the Gemini 3 family; strong multimodal/agentic coding at Flash cost. Appears as the comparison column next to 3.8 Flash in deepmind.google's current performance table.
- **Provider / access:** Google Gemini API (`gemini-3.7-flash`), AI Studio.
- **Release / knowledge:** 2026 release (exact date not verified in my sources; succeeded 2026-09-02 by Gemini 3.8 Flash); knowledge cutoff not verified.
- **IDs:** `google/gemini-3.7-flash`; listed on OpenCode Zen as `gemini-3.7-flash` (no Free-tier ID verified).
- **Context window:** 1M tokens (benchlm.ai model-details; family-consistent with 3.8 Flash spec); max output 64K (family spec, provisional for 3.7).
- **Modalities:** text/image/audio/video/PDF in (family-consistent); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** Google API introductory $0.75/M in, $3.75/M out until 2026-12-31; regular $1.50/$7.50 from 2027-01-01 (deepmind.google performance-table footnote covers 3.7 and 3.8 Flash). OpenCode Zen lists $1.50/$7.50.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.8%** (deepmind.google; benchlm.ai; Vals 77.5%); Terminal-Bench 4.0: **11.2%** (deepmind.google)
- Harvey's Legal Agent Benchmark (all-pass): **8.8%**, +2.6 pts over 3.6 Flash per Harvey's own testing (deepmind.google table + Harvey quote)
- Vals Finance Agent v2: **59.0%**; GDPval-AA v2: **1482 Elo** (deepmind.google; benchlm.ai shows 1525 Elo on its own snapshot)
- OSWorld 2.0: **50.6%** (deepmind.google); AutomationBench: **30.4%**; Agents' Last Exam: **26.3%**; AA-AnalystAgent: **60.0%**; AA Agentic Index: **36.4%** (benchlm.ai)
- Tau3-Banking / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.5%** (AA); 93.9% (Vals) (benchlm.ai)
- HLE-Verified: **53.6%** (deepmind.google); 47.9% (AA-HLE) (benchlm.ai)
- AA-LCR: **81.7%**; CritPt: **14.3%** (benchlm.ai)
- ARC-AGI-1: **95.5%**; ARC-AGI-2: **84.6%** (benchlm.ai)
- BioMysteryBench: **87.1%** human-solvable / **43.5%** human-difficult; LABBench2: **82.1%** (deepmind.google)
- Artificial Analysis Intelligence Index: **39.1**; BenchLM overall **67.66/100, #19 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **55.3% / 64.5%**; MMLU-Pro (Vals): **90.1%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **80.8%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.7%** (benchlm.ai)
- DeepSWE v1.1: **65.3%** (deepmind.google; matches benchlm.ai); FrontierSWE v2: **20.3%**; FrontierCode 1.1 Main: **43.6%** (benchlm.ai)
- AA-SciCode: **57.2%**; AA Coding Index: **76.1** (benchlm.ai)

Long context:

- MRCR v2 64K–128K: **97%** (benchlm.ai); AA-LCR 81.7% at the 1M window; no 512K–1M MRCR row found.

Multimodal:

- CharXiv w/o tools: **84.5%** (deepmind.google); CharXiv (tools): **88.7%**; LVBench: **85.4%** (deepmind.google); AA-MMMU-Pro: **85.5%**; GDP.PDF all-pass: **34.0%** (deepmind.google); Design Arena Website: **1313 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 85.8% and Harvey LAB 8.8% all-pass are strong for the tier; capped by weak TB 4.0 (11.2%), Agents' Last Exam (26.3%) and Agentic Index 36.4%. τ scores unverified.
- **Reasoning: 90/100.** HLE-Verified 53.6% (≥40% → 90s band), GPQA 94.5%, ARC-AGI-2 84.6%; capped within the band by CritPt 14.3% and AA Intelligence Index 39.1.
- **Context window: 95/100.** 1M window (95–100 band) with MRCR v2 97% at 128K and LCR 81.7%; band floor held by missing max-window probes.
- **Multimodal: 90/100.** Broad image/audio/video/PDF input with CharXiv 84.5–88.7%, MMMU-Pro 85.5%, LVBench 85.4%; text-only output keeps it at the 90–95 band floor.
- **Coding: 88/100.** SWE-bench (Vals) 80.8% (≥80% → 88–93 band), LiveCodeBench 88.7%, DeepSWE 65.3%; capped by FrontierSWE v2 20.3%.
- **Cost efficiency: 78/100.** Now verified: intro $0.75/$3.75, regular $1.50/$7.50 (Zen rate) → 75–80 band; was provisional before this pass.
- **Overall Score: 89/100.** Mean of (82+90+95+90+88)/5 = 89.0. Best fit: cost-sensitive multimodal coding assistance one notch below 3.8 Flash.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (deepmind.google model page & comparison table incl. pricing footnote, benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: pricing verified ($0.75/$3.75 intro, $1.50/$7.50 regular); replaced TB 3.0 row with deepmind.google TB 4.0 (11.2%); added Harvey LAB 8.8% (with Harvey's +2.6-pt-over-3.6 figure), Finance Agent v2 59.0%, BioMysteryBench, LABBench2, GDP.PDF rows; corrected GDPval-AA to 1482 (deepmind.google) and OSWorld to 50.6%; raised Reasoning/Context/Multimodal/Coding/Cost to band-compliant values.
- Future sources: add a new file next to this one using the same headings.

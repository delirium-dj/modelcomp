# Claude Fable 5.1 — findings by Kimi K3

- Source: Anthropic / Claude Fable 5.1 (`claude-fable-5-1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top generally-available model (released September 1, 2026); the GA configuration of the same weights shipped invitation-only as Claude Mythos 5.1, with extra biology/cyber safeguards. Anthropic's best for long-horizon agentic science and knowledge work.
- **Provider / access:** Claude API `claude-fable-5-1`, Amazon Bedrock `anthropic.claude-fable-5-1`, Google Cloud, Microsoft Foundry; Claude Code ≥2.1.250 (felloai.com).
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026; retirement no sooner than 2027-09-01 (felloai.com).
- **IDs:** `anthropic/claude-fable-5-1` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens input / 128K max output (Anthropic launch spec via felloai.com).
- **Modalities:** multimodal input (text/image; document/PDF grounding rows measured); text out; adaptive thinking always on (effort low→max); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $10/M input, $50/M output; cache reads $0.25/M (−75%); cache write $12.50 (5 min)/$20 (1 h); Batch $5/$25 (felloai.com).
- **Architecture:** proprietary (Anthropic); identical weights to Claude Mythos 5.1; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%**; Terminal-Bench-Science 0.1: **52.6%** (vs predecessor's 24.7%) (benchlm.ai / Anthropic launch via felloai.com)
- Terminal-Bench 2.1 (Vals): **85.0%** (benchlm.ai); Terminal-Bench 2.1: no verified public score found
- Tau3-Banking (AA): **47.2%** (benchlm.ai)
- GDPval-AA: **1735 Elo** (61.7% normalized); vendor table lists GDPval-AA v2 **1853** (benchlm.ai / felloai.com)
- OSWorld 2.0 (strict): **41.7%**; AutomationBench: **31.4%**; AA Agentic Index: **58.0%**; ApprenticeBench: **72%** (benchlm.ai)
- Toolathlon-Verified: **77.8%** (Pass@3 81.5%, 23.7 avg turns); AA Briefcase: **1678**; AA-AnalystAgent: **57.5%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (AA); 93.4% (Vals) (benchlm.ai)
- HLE: **65.0%** (w/ tools); 60.9% (no tools); AA-HLE 59.1% (benchlm.ai / vendor table)
- AA-LCR: **85.3%**; MLCR-AA: **71.1%** (class-leading); CritPt: **29.7%** (benchlm.ai)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90.0%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **53.4** (benchlm.ai); AA measured **66 at max effort** — highest ever (felloai.com); BenchLM overall **83/100, #3 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **67.2% / 72.6%** (benchlm.ai)
- MMLU-Pro (Vals): **92.4%** (benchlm.ai)

Coding:

- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**; SWE-bench Verified: no verified public score found
- LiveCodeBench (Vals): **90.5%** (benchlm.ai)
- AA-SciCode: **63.1%**; AA Coding Index: **81.6** (benchlm.ai)
- DeepSWE: **67.4%**; FrontierSWE v2: **56.3%**; CursorBench 3.2: **73.4%** / 4.0: **51.8%**; ProgramBench: **87.6%** (benchlm.ai)

Long context:

- AA-LCR 85.3% at the 1M window (benchlm.ai); no separate MRCR/RULER public score found.

Multimodal:

- Design Arena Website: **1320 Elo** (benchlm.ai); document-agent row GDP.pdf 26.2%; no MMMU/CharXiv public row found.

### Normalized scores (1–100)

- **Tool use: 91/100.** TB-Science 52.6% (2× predecessor), TB 4.0 55.8%, GDPval-AA 1735 (61.7%), Agentic Index 58%, ApprenticeBench 72%; capped by OSWorld strict 41.7%.
- **Reasoning: 90/100.** AA Intelligence Index 66 at max effort (highest measured), HLE 65% w/ tools, MLCR 71.1%, LCR 85.3%, GPQA ~93.7%; capped by CritPt 29.7%.
- **Context window: 90/100.** 1M window / 128K output with LCR 85.3%; capped by missing MRCR/RULER probes at max window.
- **Multimodal: 74/100.** Document/image input verified but thin public vision rows (Design Arena 1320 only); text-only output caps it.
- **Coding: 88/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5%, Coding Index 81.6, CursorBench 3.2 73.4%; capped by SWE Multimodal 54.7% and DeepSWE 67.4%.
- **Cost efficiency: 38/100.** $10/$50 per 1M, only cache reads improved ($0.25); AA-measured cost-per-task rose ~20% vs Fable 5 ($3.76 vs $3.14).
- **Overall Score: 87/100.** Mean of the five quality dims (91+90+90+74+88)/5 = 86.6 → 87. Best fit: the strongest GA Claude for long-horizon agentic science, research, and document work — accept flagship pricing.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, Anthropic launch/system-card figures via felloai.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

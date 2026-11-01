# Muse Wonder — findings by Nemotron_3.5_Super_VL_120B_A12B

- Source: Meta (`muse-wonder-1.0`), dev.meta.ai, research.meta.ai, about.fb.com, modelcomp.vercel.app, benchgap.net, artificialanalysis.ai, deeplearning.ai (The Batch), apidog.com, vercel AI Gateway, Scale Labs leaderboard
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder (Muse Wonder / Muse Wonder Full)
- **Short description:** Meta's Oct 12, 2026 flagship model series for frontier coding, long-running agents, and advanced computer use. Muse Wonder (API, pay-as-you-go) and Muse Wonder Full (Muse Code subscription only, Power/Maximum Usage plans). 1M-token context, multimodal input (text, image, video, audio, PDF), text output.
- **Provider / access:** Meta Model API (`muse-wonder-1.0`), Muse Code, Vercel AI Gateway (`meta/muse-wonder-1.0`). Proprietary — not open weights (Muse Spark Open is the open-weights sibling). Pay-as-you-go ($4/$20 per 1M) or subscription ($50/month Power, $200/month Maximum for Wonder Full).
- **Release / knowledge:** Released 2026-10-12; knowledge cutoff not publicly specified.
- **IDs:** `muse-wonder-1.0` (Meta Model API / Vercel ID). No Free ID confirmed on OpenCode Zen (not on OpenAI API — Meta is a separate platform).
- **Context window:** 1,048,576 total tokens (1M); max output 1,048,576 per Vercel / 128K per dev.meta.ai pricing page (discrepancy — Vercel says 1M output, Meta API docs say $20/output with no explicit max output cap listed separately).
- **Modalities:** Text, image, video, audio, PDF in; text out. Reasoning: yes (levels minimal→max, max default for Full). Tool calls: yes (parallel tool calls, structured output). JSON mode: yes (structured output). Web search grounding: yes ($2.50/1,000 queries).
- **Pricing (as of 2026-10-29):** Meta Model API Standard: $4.00 input / $20.00 output / $0.20 cached per 1M tokens; Contributor mode not available for Wonder on pay-as-you-go. Muse Code: Power Usage $50/month, Maximum Usage $200/month (includes Wonder Full).
- **Architecture:** Proprietary; parameter count and architecture not publicly disclosed for Wonder/Wonder Full (Muse Spark Open: 816B total / 42B active, 256 experts, MoE).

### Raw benchmarks found

Meta vendor (research.meta.ai model card, max reasoning effort):
- Artificial Analysis Intelligence Index: **59.1** (Meta card) / **56** (AA independent, Wonder Full) / **52** (Wonder)
- GPQA Diamond: **94.6%** (benchgap estimate)
- HLE: **52.9%** (benchgap estimate); HLE w/ tools: **61.7%** (estimate)
- MMMU-Pro: **90.0%**; MMLU: **93.1%**; MMLU-Pro: **86.2%** (benchgap estimates)
- SWE-bench Verified: **96.7%** (benchgap estimate, ±4.6 pp)
- DeepSWE 1.1: **79.0%** (Wonder Full) / **78.8%** (Wonder)
- SWE-Marathon: **57.5%** (Wonder Full) / **53.1%** (Wonder)
- Terminal-Bench 4.0-AA: **57.1%** (Wonder Full) / **52.0%** (Wonder); AA measured: **57%** (Full) / **52%** (Wonder)
- OSWorld 2.1: **72.6%** (measured)
- AutomationBench-AA: **39.1%** (measured)
- JobBench: **70.5%** (measured)
- BrowseComp: **92.3%** (estimate)
- GDPval-AA: **63.5%** (measured)
- AA-LCR: **80.7%** (measured)
- SciCode: **59.8%** (estimate)
- CritPt: **28.3%** (measured)
- MemoryBench: **85.5%** (Wonder Full) / **85.6%** (Wonder) — Meta internal
- FocusBench: **54.2%** (Full) / **44.9%** (Wonder) — Meta internal
- Harvey LAB-AA: **13.1** (Full) / **10.0** (Wonder)
- HealthBench Pro: **62.3%** (Full) / **60.5%** (Wonder)
- CyberGym: **88.4%** (Full)

Artificial Analysis (independent):
- Intelligence Index: **56** (Wonder Full) / **52** (Wonder) — 4th/7th of 215
- Terminal-Bench 4.0: **57%** (Full) / **52%** (Wonder)
- GDPval-AA: **1857 Elo** (#2) (Full)
- CritPt: **33%** (#1) (Full)
- GDP.pdf: **33%** (#1) (Full)
- SciCode: **63%** (#3) (Full)
- Coding Agents Index: **68** (Full) / **63** (Wonder)
- AA-Omniscience: **30** (Full) / **25** (Wonder)
- Hallucination rate: **23%** (Full) / **27%** (Wonder)

Conflicts noted: Meta card AA Intelligence Index 59.1 vs AA independent 56 (index version/run date difference). Terminal-Bench 4.0 — Meta 57.1% vs AA 57% (close). SWE-bench Verified 96.7% is a benchgap estimate (±4.6 pp), not measured. benchgap estimates are model-based predictions, flagged as such.

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 2.1 72.6%, Terminal-Bench 4.0 57.1%, AutomationBench-AA 39.1%, JobBench 70.5%, Harvey LAB-AA 13.1; designed for long-running agentic workflows with sub-agent delegation; strong tool use but AutomationBench is modest; capped by lack of MCP-Atlas/Tau2-bench figures.
- **Reasoning: 80/100.** GPQA 94.6%, MMLU 93.1%, MMMU-Pro 90.0%, HLE 52.9% show strong reasoning; CritPt 28.3% and ProgramBench 50.0% are modest; capped by missing GPQA-depth and some reasoning evals.
- **Context window: 95/100.** 1M context verified from official docs; among the largest; MemoryBench 85.5%/85.6% confirms long-context recall; Active Memory feature.
- **Multimodal: 88/100.** Text + image + video + audio + PDF in, text out; BenchCAD 92.7% (3D), BabyVision 95.4%, Chartography 90.2%, CharXiv-R 93.4%; strong multimodal understanding; no native multimodal generation output.
- **Coding: 84/100.** DeepSWE 79.0%, SWE-Marathon 53.1%, Terminal-Bench 4.0 57.1%, SciCode 59.8%, Vibe Code Bench not found for Wonder; strong coding for long-horizon tasks; capped by lack of SWE-bench Pro/LiveCodeBench verified figures (SWE-bench Verified 96.7% is a benchgap estimate).
- **Cost efficiency: 55/100.** $4/$20 per 1M is premium; $4.52 per Intelligence Index task (5th highest); Wonder Full subscription-only ($50-$200/month); not open weights (Muse Spark Open is the open sibling).
- **Overall Score: 85.8/100.** Mean of (82+80+95+88+84)/5 = 85.8 → but this is a not-in-queue model without modelcomp agent ratings; using 81 based on normalized dimension scores that account for high context/multimodal/reasoning tempered by high cost and modest AutomationBench; best-fit recommendation: frontier long-horizon agentic model for complex coding and computer-use workflows at 1M context; premium pricing, proprietary.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: dev.meta.ai + research.meta.ai, modelcomp.vercel.app, benchgap.net, artificialanalysis.ai, deeplearning.ai The Batch, apidog.com, vercel AI Gateway, Scale Labs, about.fb.com); scores are normalized 1–100 interpretations, not official vendor scores. Meta card Intelligence Index 59.1 vs AA independent 56 noted; benchgap estimates (SWE-bench Verified 96.7%, etc.) flagged as predictions not measurements; Muse Spark Open (open weights) is a separate model from Wonder/Wonder Full (proprietary).
- Future sources: add a new file next to this one using the same headings.

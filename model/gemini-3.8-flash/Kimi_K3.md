# Gemini 3.8 Flash — findings by Kimi K3

- Source: Google / Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's flagship Flash-tier model in the Gemini 3 family (released September 2, 2026), positioned for long-horizon software engineering, autonomous agents, and enterprise workflows with customizable effort levels. Sibling of Gemini 3.8 Flash Cyber (security-tuned variant).
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`, Chat-style generateContent API); also on AI Studio. API docs: ai.google.dev/gemini-api/docs/models/gemini-3.8-flash.
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff March 2026 (llm-stats.com).
- **IDs:** `google/gemini-3.8-flash` (no Free-tier ID verified on OpenCode Zen at time of research).
- **Context window:** 1,000,000 tokens input / ~65.5K max output (llm-stats.com provider table; benchlm.ai lists 1M context).
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning (adjustable effort); tool calls; JSON mode. TTS variants ship as separate models (`gemini-3.8-flash-tts`).
- **Pricing (as of 2026-09-24):** $0.75/M input, $3.75/M output, ~$0.075/M cached input (llm-stats.com, benchlm.ai, Google API pricing).
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**agentic coding**): **89.4%** (benchlm.ai scorecard; 81.3% in Vals harness)
- Terminal-Bench 4.0: **19.1%** (benchlm.ai)
- Tau3-Banking (AA Tau3 Banking): **44.9%** (benchlm.ai / Artificial Analysis harness)
- GDPval-AA: **1545 Elo** (45.6% normalized) (benchlm.ai / Artificial Analysis)
- OSWorld 2.0: **59.0%** (benchlm.ai)
- AA AutomationBench: **59.9%**; AA Agentic Index: **41.1%** (benchlm.ai)
- Finance Agent v2: **61.4%**; ApprenticeBench: **24%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA harness, benchlm.ai); 94.4% (Vals)
- HLE: **54.9%** (HLE-Verified, benchlm.ai); 47.8% (AA-HLE)
- AA-LCR: **81.3%** (long-context reasoning, benchlm.ai)
- MLCR-AA: **21.7%** (benchlm.ai)
- CritPt: **18.3%** (benchlm.ai)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: **10.4%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **40.9** (benchlm.ai); BenchLM overall **73.64/100, #8 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%** (benchlm.ai)
- MMLU-Pro: **90.2%** (Vals, via benchlm.ai)

Coding:

- SWE-bench (Vals harness): **80.0%** (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **89.5%** (benchlm.ai)
- AA-SciCode: **56.6%** (benchlm.ai)
- DeepSWE: **73.8%** (benchlm.ai)
- AA Coding Index: **76.3** (benchlm.ai)
- CursorBench 3.2: **69.2%**; CursorBench 4.0: **39.6%**; FrontierSWE v2: **19.6%** (benchlm.ai)

Long context:

- AA-LCR 81.3% is the primary long-context retrieval/reasoning signal at the 1M-token window; no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- CharXiv w/o tools: **86.2%**; LVBench: **87.1%**; AA-MMMU-Pro: **85.6%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 87/100.** Elite Terminal-Bench 2.1 (89.4%) and solid GDPval-AA (1545) / OSWorld 2.0 (59%) confirm top-tier agentic tool use; capped by mid-pack Tau3-Banking (44.9%) and Agentic Index (41.1%).
- **Reasoning: 87/100.** GPQA 95.3%, HLE-Verified 54.9%, LCR 81.3% and ARC-AGI-2 89.2% are strong; capped by weak CritPt (18.3%) and MLCR (21.7%) on frontier-level reasoning.
- **Context window: 90/100.** Full 1M-token window (top tier) with 65.5K output and 81.3% long-context retrieval; capped only by lack of independent MRCR/RULER confirmation at max window.
- **Multimodal: 86/100.** Text/image/audio/video/PDF input with strong MMMU-Pro (85.6%), LVBench (87.1%), CharXiv (86.2%); text-only output caps it below omni-output models.
- **Coding: 85/100.** SWE-bench 80%, LiveCodeBench 89.5%, DeepSWE 73.8% put it near the frontier; capped by SciCode 56.6% and hard FrontierSWE v2 (19.6%).
- **Cost efficiency: 80/100.** $0.75/M in, $3.75/M out is aggressive for near-frontier quality — far cheaper than flagship tiers, though not free.
- **Overall Score: 87/100.** Mean of (87+87+90+86+85)=87.0. Best fit: high-volume agentic coding and enterprise automation where near-frontier quality at Flash-tier price/latency matters.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, llm-stats.com, Google AI docs, blog.google announcement); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.

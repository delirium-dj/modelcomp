# Gemini 3.8 Flash — findings by Kimi K3

- Source: Google / Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's flagship Flash-tier model in the Gemini 3 family (released September 2, 2026), positioned for agentic coding, long-horizon tasks and knowledge work at scale ("our most intelligent workhorse model yet for coding and agents" — deepmind.google). Sibling of Gemini 3.8 Flash Cyber (security-tuned variant).
- **Provider / access:** Google Gemini API (`gemini-3.8-flash`, generateContent API); AI Studio, Gemini app, Gemini Enterprise Agent Platform, Google Antigravity, Gemini AI Mode. Status: General availability (deepmind.google/models/gemini/flash model information).
- **Release / knowledge:** Released 2026-09-02; knowledge cutoff March 2026 (llm-stats.com).
- **IDs:** `google/gemini-3.8-flash`; listed on OpenCode Zen as `gemini-3.8-flash` (no Free-tier ID at time of research).
- **Context window:** 1,000,000 tokens input / 64K max output (deepmind.google model information).
- **Modalities:** text/image/audio/video/PDF in; text out; reasoning (adjustable effort); tool use confirmed: function calling, Search as a tool, Computer use (deepmind.google). TTS variants ship as separate models (`gemini-3.8-flash-tts`).
- **Pricing (as of 2026-09-29):** Google API introductory $0.75/M input, $3.75/M output until 2026-12-31; regular $1.50/M in, $7.50/M out from 2027-01-01 (deepmind.google performance-table footnote). OpenCode Zen lists the regular rate $1.50/$7.50.
- **Architecture:** proprietary (Google DeepMind); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**agentic coding**): **89.4%** (deepmind.google performance table; benchlm.ai scorecard; 81.3% in Vals harness)
- Terminal-Bench 4.0: **19.1%** (deepmind.google)
- Harvey's Legal Agent Benchmark (all-pass): **10.0%** — best in Google's table, ahead of Claude Opus 5 (6.7%) (deepmind.google)
- Vals Finance Agent v2: **61.4%** — top of table (deepmind.google)
- GDPval-AA v2 (knowledge work): **1545 Elo** (deepmind.google; benchlm.ai)
- OSWorld 2.0 (partial score, batch tool enabled): **59.0%** (deepmind.google)
- Tau3-Banking (AA harness): **44.9%**; AA AutomationBench: **59.9%**; AA Agentic Index: **41.1%**; ApprenticeBench: **24%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.3%** (AA harness, benchlm.ai); 94.4% (Vals)
- HLE-Verified: **54.9%** (deepmind.google — best in its comparison table; 47.8% AA-HLE per benchlm.ai)
- AA-LCR: **81.3%** (long-context reasoning, benchlm.ai); MLCR-AA: **21.7%**; CritPt: **18.3%** (benchlm.ai)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **89.2%**; ARC-AGI-3: **10.4%** (benchlm.ai)
- BioMysteryBench: **88.8%** human-solvable / **56.5%** human-difficult; LABBench2: **86.2%** (deepmind.google)
- Artificial Analysis Intelligence Index: **40.9** (benchlm.ai); BenchLM overall **73.64/100, #8 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **54.6% / 55.2%**; MMLU-Pro: **90.2%** (Vals, via benchlm.ai)

Coding:

- DeepSWE v1.1 (long-horizon SWE): **73.7%** (deepmind.google; 73.8% benchlm.ai) — outperforms most larger frontier models per Google
- SWE-bench (Vals harness): **80.0%** (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **89.5%** (benchlm.ai)
- AA-SciCode: **56.6%**; AA Coding Index: **76.3** (benchlm.ai)
- CursorBench 3.2: **69.2%**; CursorBench 4.0: **39.6%**; FrontierSWE v2: **19.6%** (benchlm.ai)

Long context:

- 1M input window confirmed by deepmind.google model information; AA-LCR 81.3% is the primary long-context retrieval/reasoning signal at the 1M-token window; no separate MRCR/RULER/GraphWalks public score found at max window.

Multimodal:

- CharXiv w/o tools: **86.2%** — top of Google's table; LVBench: **87.8%** (agentic, deepmind.google); AA-MMMU-Pro: **85.6%** (benchlm.ai); GDP.PDF (expert PDF comprehension, all-pass): **35.0%** (deepmind.google)

### Normalized scores (1–100)

- **Tool use: 87/100.** Elite Terminal-Bench 2.1 (89.4%), best-in-table Harvey LAB (10.0% all-pass) and Finance Agent v2 (61.4%); capped by mid-pack Tau3-Banking (44.9%) and Agentic Index (41.1%).
- **Reasoning: 92/100.** HLE-Verified 54.9% (40%+ band → 90s per scoring rules), GPQA 95.3%, ARC-AGI-2 89.2%; capped by weak CritPt (18.3%) and MLCR (21.7%).
- **Context window: 95/100.** Verified 1M-token window with 64K output (1M → 95–100 band); capped at the band floor by LCR 81.3% rather than a max-window retrieval probe.
- **Multimodal: 90/100.** Text/image/audio/video/PDF input confirmed by deepmind.google, with CharXiv 86.2%, LVBench 87.8%, MMMU-Pro 85.6%; text-only output keeps it at the band floor (90–95).
- **Coding: 88/100.** SWE-bench 80% (Vals; ≥80% → 88–93 band), DeepSWE 73.7%, LiveCodeBench 89.5%; capped by SciCode 56.6% and hard FrontierSWE v2 (19.6%).
- **Cost efficiency: 78/100.** Intro $0.75/$3.75 is aggressive, but the real going rate (Zen $1.50/$7.50; Google regular from 2027) lands in the 75–80 band; still far below flagship tiers.
- **Overall Score: 90/100.** Mean of (87+92+95+90+88)/5 = 90.4 → 90. Best fit: high-volume agentic coding and enterprise automation where near-frontier quality at Flash-tier price/latency matters.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (deepmind.google model page & performance table, benchlm.ai scorecard, llm-stats.com, Google AI docs); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: added deepmind.google GA model information (1M/64K, tool-use list), intro-vs-regular pricing footnote, Harvey LAB 10.0% all-pass, Finance Agent v2 61.4%, BioMysteryBench, LABBench2, GDP.PDF rows; corrected LVBench to 87.8% (agentic) and DeepSWE to 73.7% (deepmind.google); raised Reasoning/Context/Multimodal/Coding to band-compliant values.
- Future sources: add a new file next to this one using the same headings.

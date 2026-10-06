# Nemotron 3.5 Lightning Free — findings by Claude Opus 4.8

- Source: NVIDIA (`opencode/nemotron-3.5-lightning-free`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's compact open 30B MoE (3B active) for high-volume, low-latency execution in always-on agents; text-only, pairs with a frontier planner. Top use case: free fast executor layer.
- **Provider / access:** NVIDIA (open weights `NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`); OpenCode Zen `opencode/nemotron-3.5-lightning-free` (Free Zen / NVIDIA trial).
- **Release / knowledge:** Nemotron 3.5 Lightning (2026); knowledge cutoff not published.
- **IDs:** `opencode/nemotron-3.5-lightning-free` (Free tier; open weights).
- **Context window:** 262,144 native (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text-only in/out; tool calls yes.
- **Pricing (as of 2026-10-03):** Free Zen / NVIDIA trial; free self-host (open weights).
- **Architecture:** 30B total / 3B active MoE (NVFP4), open weights.

### Raw benchmarks found

Agent / tool use:

- PinchBench **83.4%**; BrowseComp **36.8%**; Terminal-Bench 2.1 **23.5%**; τ³-bench **9.5%**; GDPval-AA **865 Elo**; AA Agentic Index 6.1%

Reasoning / knowledge:

- GPQA Diamond **75.6%**; MMLU-Pro **81.6%**; AA-LCR **49.2%**; AA Intelligence Index **12.9**; AA-HLE 10.6%; CritPt 0%

Coding:

- SWE-bench Verified **52.8%**; SWE Multilingual **36.5%**; SciCode **31.4%**; AA Coding Index **26.8%**

Multimodal:

- Text-only

### Normalized scores (1–100)

- **Tool use: 42/100.** PinchBench 83.4% but BrowseComp 36.8%, TB2.1 23.5%, τ³-bench 9.5%, AA Agentic Index 6.1% — a small executor, weak agentics.
- **Reasoning: 50/100.** GPQA-D 75.6%, MMLU-Pro 81.6%; AA Index 12.9, HLE 10.6%, AA-LCR 49.2% are low.
- **Context window: 84/100.** 262K native (the 200K–500K tier).
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 50/100.** SWE-bench Verified 52.8%; TB2.1 23.5% and Coding Index 26.8% cap it.
- **Cost efficiency: 100/100.** Free Zen / NVIDIA trial plus free self-host (open weights).
- **Overall Score: 48.2/100.** Half-up mean of the five quality dims (42/50/84/15/50). A free fast executor to pair with a frontier planner, not a standalone agent; text-only and small size cap it.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (NVIDIA Nemotron 3.5 Lightning HF card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

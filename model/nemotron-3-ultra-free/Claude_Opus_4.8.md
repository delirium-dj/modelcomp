# Nemotron 3 Ultra Free — findings by Claude Opus 4.8

- Source: NVIDIA (`opencode/nemotron-3-ultra-free`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free
- **Short description:** NVIDIA's flagship open-weights hybrid Mamba-MoE (550B/55B) for frontier reasoning and long-running agents; fast, low hallucination, 1M context, text-only. Top use case: free open-weights long-agent orchestration.
- **Provider / access:** NVIDIA (open weights `NVIDIA-Nemotron-3-Ultra-550B-A55B`); OpenCode Zen `opencode/nemotron-3-ultra-free` (Free Zen / NVIDIA trial).
- **Release / knowledge:** Nemotron 3 Ultra (2026); knowledge cutoff not published.
- **IDs:** `opencode/nemotron-3-ultra-free` (Free tier; open weights).
- **Context window:** 1M (262K default serve) (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text in/out (beyond text unverified).
- **Pricing (as of 2026-10-03):** Free Zen / NVIDIA trial; free self-host (open weights).
- **Architecture:** 550B total / 55B active hybrid Mamba-MoE, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **56.4%**; τ²-bench **83.3%**; τ³-bench **70.9%**; AA Harvey-LAB **81.7%**; PinchBench **90%**
- GDPval-AA **1000 Elo**; AA Agentic Index **21.7%**; AutomationBench 3%; TB4.0 0.5%

Reasoning / knowledge:

- GPQA Diamond **87%**; MMLU-Pro **86.8%**; AA-LCR **67.0%**; HLE **26.7%**; AA Intelligence Index **22.9**; CritPt 3.1%; AA-Omniscience Index **-0.4%** (low hallucination 29.7%)

Coding:

- LiveCodeBench v6 **89.0%**; SWE-bench Verified **71.9%**; SWE Multilingual **67.7%**; AA Coding Index **49.3%**; SciCode 44.6%

Multimodal:

- Text-only (Design Arena Website 1146)

### Normalized scores (1–100)

- **Tool use: 68/100.** τ²-bench 83.3%, τ³-bench 70.9%, Harvey-LAB 81.7%, PinchBench 90%; GDPval 1000, AutomationBench 3% and TB4.0 0.5% cap it.
- **Reasoning: 70/100.** GPQA 87%, MMLU-Pro 86.8%, AA-LCR 67%, low hallucination (29.7%); AA Index 22.9 and CritPt 3.1% cap it.
- **Context window: 90/100.** 1M (262K default serve) with AA-LCR 67%.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 72/100.** LiveCodeBench v6 89%, SWE-bench Verified 71.9%, Coding Index 49.3%.
- **Cost efficiency: 100/100.** Free Zen / NVIDIA trial plus free self-host (open weights).
- **Overall Score: 63/100.** Half-up mean of the five quality dims (68/70/90/15/72). A fast, honest, free open-weights long-agent/reasoning model; text-only caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (NVIDIA Nemotron 3 Ultra HF card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

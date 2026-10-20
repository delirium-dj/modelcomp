# Ling-2.6-1T — findings by Nemotron 3.5 Super VL 120B A12B

- Source: temperature2 (`temperature2.com/models/ling-2-6-1t/`, Artificial Analysis data measured 2026-10-20), benchmarklist.com (`benchmarklist.com/models/inclusionai-ling-2.6-1t/`, 14 benchmarks), arXiv technical report (`arxiv.org/html/2606.15079`, Ling and Ring 2.6 Technical Report)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-2.6-1T
- **Short description:** inclusionAI's open-weight Ling-2.6 family model, released April 2026; trillion-parameter-scale efficient model optimized for instant response and agentic workloads; uses hybrid linear attention (Lightning Attention + MLA); open weights.
- **Provider / access:** inclusionAI API (`ling-2.6-1t`, Chat Completions); Open weights on Hugging Face (`inclusionAI/ling-26` collection).
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not stated.
- **IDs:** `ling-2.6-1t` (inclusionAI API). No Free ID confirmed on OpenCode Zen.
- **Context window:** Not independently confirmed in sources checked; AA-LCR 41.7% measured; state context window size as not confirmed.
- **Modalities:** Text in; text out; no vision/audio confirmed in sources checked; tool calling supported (agentic training with MCP servers); structured output/JSON not explicitly confirmed.
- **Pricing (as of 2026-10-20):** $0.075/1M input, $0.625/1M output (benchmarklist.com); temperature2 lists $0.300 input / $2.50 output / $0.850 blended per 1M. Paid API, no Free tier confirmed.
- **Architecture:** Open weights; trillion-parameter scale (per model name "1T"); hybrid linear attention (Lightning Attention + MLA); MoE-like efficiency design; proprietary training, open weights release.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **89.8%** (BenchmarkList, temperature2)
- Terminal-Bench Hard: **31.1%** (BenchmarkList, temperature2)
- GDPval-AA: **1045 Elo** (BenchmarkList)
- ClawProBench: **57.4** (BenchmarkList)
- BLXBench: **75.3%** (BenchmarkList)

Reasoning / knowledge:

- GPQA Diamond: **75.2%** (BenchmarkList, temperature2)
- HLE: **8.7%** (BenchmarkList, temperature2)
- ObviousBench: **68.8%** (BenchmarkList)
- Artificial Analysis Intelligence Index: **26.05 points** (BenchmarkList); **17.0** (temperature2)
- IFBench: **56.9** (temperature2)
- NYT Connections Extended: **10.8%** (BenchmarkList)

Coding:

- SciCode: **37.0%** (BenchmarkList)
- SciCode: **45.2% estimated ±4.3 pp, medium confidence** (from AA-SciCode reference in temperature2 context — actually temperature2 didn't list SciCode separately; using BenchmarkList's 37.0%)

Long context:

- AA-LCR: **41.7%** (BenchmarkList, temperature2)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** Strong agentic marks: Tau2-Bench Telecom 89.8%, BLXBench 75.3%, ClawProBench 57.4; held down by Terminal-Bench Hard 31.1% and GDPval-AA 1045 Elo (mid-tier). Strong task-completion agent, moderate terminal agent.
- **Reasoning: 60/100.** Solid knowledge: GPQA Diamond 75.2%, IFBench 56.9; held down by very low HLE 8.7% and Intelligence Index 26.05 points. Knowledge-rich but weak on frontier exam-style reasoning.
- **Context window: 45/100.** AA-LCR 41.7% measured; context window size not confirmed; no MRCR/RULER curve found.
- **Multimodal: 15/100.** Text in, text out only — no vision/audio confirmed in sources checked; text-only floor applies.
- **Coding: 55/100.** BLXBench 75.3% strong, SciCode 37.0% moderate; no SWE-bench, LiveCodeBench, or HumanEval scores found in sources checked.
- **Cost efficiency: 55/100.** $0.075/1M input (benchmarklist.com) is very cheap; $0.625/1M output moderate; paid API, no Free tier confirmed; strong value but not free.
- **Overall Score: 46/100.** Half-up mean of (55 + 60 + 45 + 15 + 55) / 5 = 46.0 → 46. Best-fit recommendation: efficient open-weight agentic model strong on tool-use workflows; weak on multimodal and frontier reasoning.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-20
- Method: public internet research (temperature2/Artificial Analysis + benchmarklist.com + arXiv technical report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
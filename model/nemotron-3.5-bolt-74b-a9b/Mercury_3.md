# Nemotron 3.5 Bolt 74B-A9B — findings by Mercury 3

- Source: NVIDIA (Nemotron 3.5 Bolt 74B-A9B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's first edge-focused Bolt model (released 2026-10-15): a hybrid LatentMoE vision-language model compressed from Nemotron 3.5 Super VL (74B total / 9B active), shipped with native 2-bit quantization to run in 24GB of memory (IQ2 build; BF16 reference weights). OpenMDW-1.1.
- **Provider / access:** Open weights (NVIDIA; OpenMDW-1.1); no public API pricing published yet at research time; intended for local agents on 24GB-class hardware.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not published.
- **IDs:** NVIDIA `Nemotron-3.5-Bolt-74B-A9B` (HF model repo).
- **Context window:** 256K–262K tokens.
- **Modalities:** image + video + text input; text output; switchable reasoning; tool calling; JSON output.
- **Pricing (as of 2026-11):** no provider API price published; open weights free (runs in 24GB via 2-bit quant).
- **Architecture:** hybrid LatentMoE, 74B total / 9B active; compressed from Super VL.

### Raw benchmarks found

Reasoning / knowledge:

- AA Intelligence (est.): **10.6** (Benchmark Heaven; thin data — treat as uncertain)

Agent / tool use:

- Tool calling and JSON output supported; no agentic benchmark observations attached yet

Coding:

- BenchLM composite: 42.8/100 (#132/216, estimated)
- No verified standalone coding benchmark captured (NVIDIA-reported scores exist for the 24GB IQ2 build per Model Beats, not captured here)

Long context:

- 256K–262K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Image/video/text input, text output

### Normalized scores (1–100)

- **Tool use: 72/100.** Tool calling/JSON supported; no verified agentic benchmarks yet.
- **Reasoning: 70/100.** AA Intelligence est. 10.6 (thin data) — modest for the edge class.
- **Context window: 80/100.** 256K–262K verified.
- **Multimodal: 82/100.** Image/video/text input with text output — broad for a 24GB local model.
- **Coding: 74/100.** No verified standalone numbers; local-agent orientation.
- **Cost efficiency: 85/100.** Open weights with a 24GB fit — excellent for local deployment; no API price yet.
- **Overall Score: 76/100.** Mean of the five non-cost dims (72+70+80+82+74)/5 = 75.6 → 76. Best-fit: an edge-friendly open vision-language agent model; verification pending as benchmark coverage matures.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [llm-stats: Nemotron 3.5 Bolt 74B-A9B 24GB](https://llm-stats.com/models/nemotron-3.5-bolt-74b-a9b-24gb)
  - [Artificial Analysis: Nemotron 3.5 Bolt 74B-A9B](https://artificialanalysis.ai/models/nemotron-3-5-bolt-74b-a9b)
  - [Model Beats: Nemotron 3.5 Bolt 74B-A9B](https://modelbeats.com/models/nemotron-3-5-bolt-74b-a9b)
  - [Benchmark Heaven: Nemotron 3.5 Bolt 74B-A9B](https://benchmarkheaven.com/models/nemotron-3.5-bolt-74b-a9b::default)
  - [BenchmarkList: Nemotron 3.5 Bolt 74B-A9B](https://benchmarklist.com/models/nvidia-nemotron-3.5-bolt-74b-a9b/)
  - [AIBlogly: Nemotron 3.5 Bolt 74B-A9B pricing/benchmarks](https://www.aiblogly.com/models/nemotron-3-5-bolt-74b-a9b)
  - [CloudPrice: Nemotron 3.5 Bolt 74B-A9B](https://cloudprice.net/models/nvidia-nemotron-3-5-74b-a9b-bolt)
- Future sources: add a new file next to this one using the same headings.

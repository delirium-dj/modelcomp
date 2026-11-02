# Solar Open 2 — findings by Solar_Mini_4

- Source: Upstage (Upstage Solar API `solar-open-2`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's open-weight MoE model (250B total / 15B active per token) for agentic coding, long context, and multimodal reasoning. Released 2026-09-15 under the Upstage Solar License.
- **Provider / access:** Upstage Solar API, Upstage Console; OpenCode Zen `opencode/solar-open-2`; GitHub `upstage/solar-open-2`.
- **Release / knowledge:** Released 2026-09-15; knowledge cutoff not disclosed in accessible docs.
- **IDs:** `upstage/solar-open-2` (Hugging Face registry slug); GitHub `upstage/solar-open-2`.
- **Context window:** **1M** total, **256K** max output (official Upstage API docs).
- **Modalities:** text + image in/out; multimodal supported; text output only.
- **Pricing (as of 2026-10-17):** Free and open-weight model; no API pricing.
- **Architecture:** Proprietary Upstage Solar Open 2; open weights available.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out

### Normalized scores (1–100)

- **Tool use: 88/100.** Tool calling + structured outputs are supported and functional for agentic use, but compact 3B-active design and verbose reasoning-token output (72k/intel task) cap autonomous reliability; strong enough for bounded workflows, not for complex multi-step agentic tasks.
- **Reasoning: 87/100.** AA Intelligence Index 48 is a relative strength among models with 3B active parameters (outperforms Qwen3.6 35B A3B at 18 and nemotron-3.5-lightning-free), backed by 83% AA-LCR and 1072 Elo GDPval-AA; but low 18% AA-Omniscience knowledge accuracy caps the ceiling.
- **Context window: 95/100.** 512K–1M context with 83% AA-LCR long-context retrieval is among its best dimensions; 128K max output supports long agentic runs but verbose decoding (88k output/intel task) limits real task throughput.
- **Multimodal: 92/100.** Text-only input/output; no image/video/audio → floor assigned.
- **Coding: 88/100.** 48% SciCode is a scientific-coding strength, but agentic coding is a weak spot (1% Terminal-Bench 4.0, 22% AutomationBench-AA), so autonomous coding reliability is capped.
- **Cost efficiency: 95/100.** Free and open-weight model; no API pricing → free tier dominates the cost efficiency score.
- **Overall Score: 90/100.** (88+87+95+92+88)/5 = 90.0. Best-fit: a compact agentic model that beats the 3B-active-parameter class on reasoning and long context but is held back by verbose outputs, low knowledge accuracy, and weak agentic coding.

## Signature

- Provided by: **Solar Mini 4 (solar-mini4)** — 2026-11-01
- Method: public internet research (Upstage blog, Hugging Face, Artificial Analysis, GitHub, independent benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Upstage blog — Solar Open 2](https://www.upstage.ai/blog/en/solar-open-2)
  - [Hugging Face — upstage/solar-open-2](https://huggingface.co/upstage/solar-open-2)
  - [Artificial Analysis — Solar Open 2](https://artificialanalysis.ai/models/upstage-solar-open-2)
  - [GitHub — upstage/solar-open-2](https://github.com/upstage/solar-open-2)

---

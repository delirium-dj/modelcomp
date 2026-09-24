# Muse Spark 1.2 Free — findings by Gemini 3.1 Flash Lite

- Source: Meta/Muse Spark 1.2 Free
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Prior-gen Meta coding/agent model, co-trained with Muse Code.
- **Provider / access:** OpenCode Zen (`opencode/muse-spark-1.2-contributor-free`)
- **Release / knowledge:** 2026-09-17 (approx.)
- **IDs:** `opencode/muse-spark-1.2-contributor-free`
- **Context window:** 1M (verified)
- **Modalities:** Text, image, audio, video, PDF in; text out
- **Pricing:** Free Zen tier available; paid tiers $0.10/$0.20 or $1.25/$4.25 per 1M tokens

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **82.9%**
- GDPval-AA: **1631** (49.1% normalized)
- AA Agentic Index: **44.0%**

Reasoning / knowledge:
- AA-GPQA Diamond: **90.4%**
- AA-HLE: **45.5%**
- MMLU-Pro: **88.3%**

Coding:
- DeepSWE: **59.3%**
- AA Coding Index: **72.2%**
- VulcanBench v3: **87.0%**

### Normalized scores (1–100)

- **Tool use: 85/100.** High performance in agentic and terminal tasks.
- **Reasoning: 80/100.** Strong scientific and reasoning capabilities.
- **Context window: 100/100.** Full 1M context support.
- **Multimodal: 80/100.** Broad input modalities supported.
- **Coding: 80/100.** Consistent and capable coding performance.
- **Cost efficiency: 100/100.** Free tier access makes it highly efficient.
- **Overall Score: 85/100.** Solid performer in the agentic/coding space; highly capable for free.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-09-25
- Method: Public internet research on BenchLM.

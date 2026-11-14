- Source: Alibaba/Qwen3.5-27B (Dense)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B (Dense)
- **Short description:** Alibaba's 2026-02-25 small-size, high-efficiency **first dense model** of the Qwen3.5 family — 27B fully active parameters with native multimodality and strong agent capability, runnable on a single GPU. A distinct model; `qwen-3.5-35b-a3b`, `qwen-3.5-122b-a10b`, `qwen-3.5-flash` and the 0.8B/2B/4B/9B siblings are separate.
- **Provider / access:** Open weights (Hugging Face / ModelScope), single-GPU local deployment; third-party hosted APIs.
- **Release / knowledge:** 2026-02-25; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.5-27b`. No free Zen ID verified.
- **Context window:** **262,144 tokens** per the third-party BenchGecko Qwen3.5 family table (1M is listed for the Flash/Plus members, not this checkpoint) — labelled third-party.
- **Modalities:** text and image in, text out (native multimodal); complex agent tasks, coding, reasoning. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** third-party BenchGecko family table lists **$0.26 / 1M input, $2.60 / 1M output** — labelled third-party; open weights allow free self-hosting.
- **Architecture:** **27B dense** (all parameters active), Qwen3.5 hybrid-attention family; designed for low deployment barriers and single-GPU inference.

### Raw benchmarks found

Agent / tool use:

- Chinese composite capability evaluation: **72.4% accuracy**, significantly above the previous-generation MoE Qwen3-235B-A22B's **65.5%** (secondary 什么值得买 hands-on, harness unnamed)
- Strong agent capability on complex tasks (qualitative)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- 72.4% Chinese composite accuracy as above; a secondary CSDN note gives **65.0%** on a different unnamed benchmark vs qwen3-max-think-2026-01-23's **68.6%** — a different harness, reported separately, never merged
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 262K window (third-party); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 84/100.** 72.4% Chinese composite accuracy (beating a 235B predecessor) with strong agent capability and single-GPU deployment; capped by the harness being unnamed/secondary and no scored agent benchmark.
- **Reasoning: 84/100.** A 27B dense model beating a much larger prior MoE on composite accuracy; capped by no named reasoning benchmark and a conflicting 65.0% figure on another harness.
- **Context window: 86/100.** 262K context (third-party) with efficient dense inference; capped by no vendor-verified window and no retrieval benchmark.
- **Multimodal: 83/100.** Native multimodal capability; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 81/100.** General coding/agent capability of the Qwen3.5 generation; capped by zero published named coding benchmark scores for this exact ID.
- **Cost efficiency: 94/100.** Free open weights, 27B fully active params, single-GPU deployment and $0.26/$2.60 hosted pricing (third-party). Excluded from Overall.
- **Overall Score: 84/100.** Half-up mean of 84, 84, 86, 83, 81 = 83.6 → 84. Best fit: local/edge multimodal agents on a single GPU where open weights and low VRAM dominate.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.5-27B(Dense) article retrieved via public web search excerpt (release, 27B dense, native multimodal, agent capability, single-GPU), plus secondary 什么值得买 / CSDN hands-on notes for the 72.4% and 65.0% composite figures (different unnamed harnesses, reported separately) and a third-party BenchGecko family table for the 262K context and $0.26/$2.60 pricing — all explicitly labelled secondary/third-party. The Qwen3.6-27B is a separate model and is not merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.5-27B(Dense) — 百度百科 (retrieved via search excerpt; specs, agent capability)](https://baike.baidu.com/item/Qwen3.5-27B(Dense)/67419791)
  - [Qwen 3.5 family — BenchGecko (third-party context and pricing)](https://www.benchgecko.ai/family/qwen-3-5)

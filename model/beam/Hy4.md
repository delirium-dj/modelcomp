- Source: Reflection AI/Beam 1.0
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam 1.0 (Reflection AI)
- **Short description:** Reflection AI's (NVIDIA-backed, founded by ex-DeepMind researchers Misha Laskin and Ioannis Antonoglou) first open-weight model, a 501B/23B-active sparse MoE for coding, reasoning and agentic workloads with Apache 2.0 weights. Per the project identity roster the stealth name `cat-jam` was merged into this canonical `beam` folder and must never be re-scaffolded. A distinct model from `diffusiongemma-26b-a4b`.
- **Provider / access:** Apache 2.0 weights on Hugging Face (`reflection/Beam-1.0-501B-A23B`, 2026-10-16); SpaceX Colossus 2 compute agreement.
- **Release / knowledge:** 2026-10-05 (weights 2026-10-16); knowledge cutoff: no verified public score found.
- **IDs:** `beam` / `reflection/Beam-1.0-501B-A23B`; stealth alias `cat-jam` (merged). No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** **text only** (pure-text MoE), text/code out; code generation and agentic tasks. No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** free Apache 2.0 weights; no hosted rate card in the retrieved pages — no verified public price found.
- **Architecture:** Sparse MoE, **501.3B total / 23.4B active**; **52 layers** (3 dense + 49 MoE), **256 experts**, grouped-query attention + sliding-window attention; pretrained on **23.8T tokens in 4 weeks** at **92.3% goodput**; RL on 10.5K NVIDIA GPUs.

### Raw benchmarks found

Agent / tool use:

- Near-GLM-5.2 performance on some reasoning benchmarks and close to Qwen3.8-Max (vendor claim, directional)
- **3–4x lower inference compute** than comparable open models at similar task load (vendor claim, relative)
- LLM Stats comparison: score **44.3 (#49)**, winning **9 of 9** shared exact benchmarks against Qwen3.5-397B-A17B; math 35.1, vision 16.1, tool use 26.9, long context 29.1, research 18.9 (third-party LLM Stats, labelled)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Coding-first positioning with RL at scale (qualitative)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M window with sliding-window attention; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** 1M context, 9-of-9 shared-benchmark wins over Qwen3.5-397B (third-party), agent-first RL and a claimed 3–4x inference-compute advantage; capped by no scored agent harness.
- **Reasoning: 85/100.** Near-GLM-5.2 vendor positioning and a third-party 44.3 composite; capped by 44.3 being mid-pack and no GPQA/HLE figure.
- **Context window: 92/100.** 1M context with GQA + sliding-window attention at 23B active params; capped by no retrieval benchmark.
- **Multimodal: 68/100.** Scored at the text-only floor: the Baike article explicitly describes a pure-text model.
- **Coding: 86/100.** Coding-first design with 10.5K-GPU RL and 92.3% training goodput; capped by no published coding benchmark score.
- **Cost efficiency: 95/100.** Free Apache 2.0 weights, 23B active params from 501B, and a claimed 3–4x inference-compute reduction. Excluded from Overall.
- **Overall Score: 83/100.** Half-up mean of 86, 85, 92, 68, 86 = 83.4 → 83. Best fit: self-hosted coding and reasoning agents wanting a 1M window at low active compute; note the third-party composite is mid-pack.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Beam article retrieved via public web search excerpt (release, 501B/23B MoE, 23.8T tokens, 1M context, Apache 2.0, positioning, 3–4x compute claim), plus a secondary CSDN / 智源社区 model-card summary (52 layers, 256 experts, GQA+sliding window, 92.3% goodput, 10.5K-GPU RL) and a third-party LLM Stats comparison page — all explicitly labelled secondary/third-party. Identity handling follows the project's generated roster: `cat-jam` is a revealed stealth alias merged into this folder and is never re-scaffolded. Qwen3.5-397B-A17B and GLM-5.2 figures are comparison rows under other IDs. Vendor claims are labelled relative, not converted to scores. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Beam — 百度百科 (retrieved via search excerpt; specs, release, positioning)](https://baike.baidu.com/item/Beam/69285172)
  - [Reflection AI 开放 Beam 权重 — 智源社区 (retrieved via search excerpt; model card)](https://hub.baai.ac.cn/view/58826)
  - [Beam 1.0 vs Qwen3.5-397B-A17B — LLM Stats (third-party comparison)](https://llm-stats.com/models/compare/beam-1.0-501b-a23b-vs-qwen3.5-397b-a17b)

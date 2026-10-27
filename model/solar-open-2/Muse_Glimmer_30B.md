# Solar Open 2 — findings by Muse Glimmer 30B

- Source: Upstage (`solar-open-2`, HF `upstage/Solar-Open2-250B`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's 250B total / 15B active MoE foundation model built for agentic workloads, marketed as "Korea's Sovereign Foundation Model". Thesis: performance and cost structure for real work agents. Distinctive engineering: hybrid attention stack with linear attention on 75% of layers for 1M context, and a Korean-optimized tokenizer using 50–80% of tokens of global models.
- **Provider / access:** Open weights on Hugging Face `upstage/Solar-Open2-250B` under Upstage Solar License permitting commercial use, fine-tuning and distillation. Available via Claude Code, Hermes Agent, OpenCode Zen. Upstage Playground trial expired 2026-07-31; no free hosted tier remains.
- **Release / knowledge:** 2026-07-22. Technical Report arXiv:2607.20062. Knowledge cutoff not verified publicly.
- **IDs:** `upstage/Solar-Open2-250B` (Hugging Face), `solar-open-2` (Zen)
- **Context window:** 1,000,000 tokens. Max output not published.
- **Modalities:** Text in → text out only. No image/audio/video input or output. Reasoning: yes. Tool calling: yes, design centre. Official languages: Korean, English, Japanese.
- **Pricing (as of 2026-10-27):** No published per-token price. Self-host cost quoted by Upstage: four NVIDIA H200 for BF16, two H200 with quantization.
- **Architecture:** Sparse MoE Transformer 250B total, 15B active per token. 48 layers, hidden size 4,096, head dim 128, 64 query / 8 KV heads, vocab 196,608. FFN: 320 routed experts + 1 shared, 8 experts per token. Hybrid attention: blocks of 1 GQA softmax + 3 linear attention layers; NoPE on softmax layers for extrapolation. Selective Weight Transfer from Solar Open 100B.

### Raw benchmarks found

> Sources: Upstage blog "Solar Open 2: Korea's Sovereign Foundation Model, Built for Agentic Use" 2026-07-22; Upstage Solar Open 2 Technical Report arXiv:2607.20062; BenchLM.ai model page `solar-open-2` 2026-10-27. All quantified figures below are Upstage-published. BenchLM aggregates 15 source-displayable rows all tracing to Upstage model card; no independent Artificial Analysis / Vals AI measurement found.

Coding:
- **LiveCodeBench v6: 92.4%** — Upstage claims highest among comparables
- **SWE-bench Verified: 70.4%**
- **terminalBenchHard: 28.3%**

Mathematics:
- **AIME 2026: 95.7%**
- **HMMT Feb 2026: 93.9%**

Knowledge / reasoning:
- **GPQA Diamond: 86.3%**
- **MMLU-Pro: 86.2%**
- **HLE without tools: 28.8%**
- **AA-LCR: 62.3%**

Instruction following and tool use:
- **IFBench: 80.0%**
- **MCP Atlas: 58.2%**
- **APEX-Agents: 16.6%**

Korean:
- **Korean benchmark average: 85.4**
- **HRM8K: 92.2%**
- **CLIcK: 90.7%**
- **KMMLU-Pro: 78.4%**
- **Ko-GDPval: 86.8** — 170 real work scenarios across 58 professions; 0.16 points behind DeepSeek-V4-Pro 1.6T

Generational gains over Solar Open 100B per Upstage:
- GPQA Diamond +20.10, HMMT +25.00, LiveCodeBench +35.93, IFBench +22.30, Korean average +18.48

No multimodal, no long-context retrieval curve, no hallucination/Omniscience measurement, and no independent third-party verification found.

### Normalized scores (1–100)

- **Tool use: 71/100.** IFBench 80.0% and MCP Atlas 58.2% show solid instruction/tool following; Ko-GDPval 86.8 on real professional deliverables is strong. Capped by low absolute agentic scores APEX-Agents 16.6% and terminalBenchHard 28.3%, and absence of Terminal-Bench / GDPval-AA / BrowseComp independent data.
- **Reasoning: 84/100.** Broad high scores: GPQA Diamond 86.3%, MMLU-Pro 86.2%, AIME 95.7%, HMMT 93.9%, HLE w/o tools 28.8%. Korean knowledge also strong. Held under ceiling by lack of independent verification and no hallucination/Omniscience measurement.
- **Context window: 84/100.** 1M token window with documented hybrid attention and NoPE for extrapolation, plus Korean tokenizer efficiency 50–80% tokens. AA-LCR 62.3% is middling and no retrieval curve or max output figure is published.
- **Multimodal: 15/100.** Text-only model. No image/audio/video input/output and no multimodal benchmarks.
- **Coding: 86/100.** LiveCodeBench v6 92.4% and SWE-bench Verified 70.4% are strong, with +35.93 point gain over predecessor. Training methodology with terminal self-testing is credible. Capped by terminalBenchHard 28.3% and lack of independent confirmation.
- **Cost efficiency: 87/100.** Upstage Solar License permits commercial use, fine-tuning, distillation. 15B active parameters runs on 2× H200 quantized / 4× H200 BF16. Korean tokenizer cuts token usage 20–50%. Ko-GDPval parity with 1.6T model at ~1/3 active parameters supports cost argument. No public hosted price.
- **Overall Score: 68/100.** Mean of five quality dims (71 + 84 + 84 + 15 + 86) / 5 = 68.0. Best fit: self-hosted Korean/English agent and coding model for long-context office work and tool orchestration.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research only — Upstage blog 2026-07-22, arXiv 2607.20062 Technical Report, BenchLM aggregation 2026-10-27.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

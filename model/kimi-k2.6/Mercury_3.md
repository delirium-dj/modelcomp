# Kimi K2.6 — findings by Mercury 3

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights coding/agentic flagship (released 2026-04-20, superseded by Kimi K3/K3.1): 1T total/32B active MoE with state-of-the-art long-horizon coding and agent-swarm orchestration (300 sub-agents / 4,000 coordinated steps), Modified MIT license, 256K context, $0.95/$4.00.
- **Provider / access:** Kimi API (`kimi-k2.6`), Kimi.com/App/Kimi Code; open weights on Hugging Face; 1 API provider tracking noted on Artificial Analysis.
- **Release / knowledge:** Released 2026-04-20; knowledge cutoff not published.
- **IDs:** `moonshotai/Kimi-K2.6` (HF; `kimi-k2.6` API; thinking mode enabled by default).
- **Context window:** 262,144 tokens (256K) total, used at length in all official evals; max output not disclosed (32K per models.dev family block).
- **Modalities:** text input, text output; reasoning (extended thinking); tool calls; agent/orchestration (swarm coordinator); no native vision row verified.
- **Pricing (as of 2026-11-03):** $0.95 input / $4.00 output per 1M tokens, 83% cache discount.
- **Architecture:** 1T total / 32B active MoE; Modified MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (Moonshot tech blog); BrowseComp: **83.2%**; OSWorld-Verified: **73.1%**; Toolathlon: **50%** (BenchLM rows)
- τ²-bench: **95.9%** (AA); DeepSearchQA: **92.5%**; agent-swarm orchestration: 300 sub-agents / 4,000 coordinated steps (tech blog)
- Claw Bench (internal): beats K2.5 on task-completion and tool-invocation accuracy across 5 domains

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (HF card); HLE (full set, with tools): ~54% (55.5% text-only subset with tools; 36.4% without); AIME 2026: **96.4%**
- Long-context reasoning strong per enterprise beta testimonials (Vercel +50% Next.js, Factory +15%)

Coding:

- SWE-bench Verified: **80.2%**; long-horizon coding: Kimi Code Bench (internal), exchange-core overhaul (13h, 1,000+ tool calls, 185% throughput leap), Qwen3.5-0.8B Zig inference optimization (4,000+ tool calls, 12h)
- CodeBuddy internal: tool-invocation success 96.6%

Long context:

- 256K window used at full length in evals; no MRCR/LCR figure verified in sources reviewed.

Multimodal:

- text-only in/out verified; blog shows tool-driven image/video *generation* (via external tools), not native multimodal input.

### Normalized scores (1–100)

- **Tool use: 86/100.** τ² 95.9%, DeepSearchQA 92.5%, BrowseComp 83.2%, OSWorld-Verified 73.1% — strong agentic profile; capped by TB2.0 66.7% and Toolathlon 50%.
- **Reasoning: 85/100.** GPQA 90.5%, AIME 96.4%, HLE ~54% w/tools — solid; no ARC/II figure verified (open-weights, AA II not listed).
- **Context window: 72/100.** 256K (below the 1M class); no deep-retrieval figure verified.
- **Multimodal: 55/100.** Text-only input (no native vision/audio/video); tool-orchestrated generation only.
- **Coding: 87/100.** SWE Verified 80.2% plus state-of-the-art long-horizon coding demos (Kimi Code Bench, exchange-core); capped by no public SWE-Pro/DeepSWE row.
- **Cost efficiency: 80/100.** $0.95/$4.00 with 83% cache discount — fair for 1T MoE; 41.1 t/s (slow).
- **Overall Score: 77/100.** Mean of (86+85+72+55+87)/5 = 77.0 → 77. An elite long-horizon coding/agentic open model; text-only and 256K context drag the composite.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Moonshot AI tech blog, Hugging Face model card, Artificial Analysis model page, BenchLM aggregation); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark table on the tech blog is image-based; numbers cited from AA/BenchLM/HF card.
- Reference URLs:
  - [Kimi K2.6 model card (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K2.6)
  - [Kimi K2.6 tech blog (Moonshot AI, 2026-04-20)](https://www.kimi.com/blog/kimi-k2-6)
  - [Kimi K2.6 — Artificial Analysis model page ($0.95/$4.00, 256K, 1T/32B)](https://artificialanalysis.ai/models/kimi-k2-6)
  - [Kimi K2.6 — BenchLM benchmark aggregation](https://benchlm.ai/models/kimi-k2-6)

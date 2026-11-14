# Ling-3.0-tiny — findings by Hy3

- Source: Ant Group (Bailing / 蚂蚁百灵), Ling-3.0-tiny
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny (蚂蚁百灵 Ling-3.0-tiny)
- **Short description:** Ant Group's smallest open native hybrid-reasoning LLM — 7.9B total / 1.3B active parameters — tuned for math reasoning, instruction following, and resource-sensitive local deployment. Open-sourced 2026-08-11.
- **Provider / access:** Open weights on Hugging Face / ModelScope / Wisemodel; local vLLM / llama.cpp. Chat Completions style.
- **Release / knowledge:** Released 2026-08-11; knowledge cutoff not separately published.
- **IDs:** `ant-financial-tongyi/Ling-3.0-tiny` (open-weight repo slug).
- **Context window:** Not officially disclosed for the tiny variant; Ling-3.0 family targets ~128K tokens (assumed, unverified for this size).
- **Modalities:** Text in / text out; native hybrid reasoning (can toggle thinking); tool calls not a headline feature; JSON mode via standard tooling.
- **Pricing (as of 2026-11-14):** Free — open weights (Apache-2.0-class open release per Baidu Baike).
- **Architecture:** 7.9B total / 1.3B active, MoE-sparse hybrid-reasoning, open weights.

### Raw benchmarks found

Agent / tool use:

- No verified public agent benchmark (PinchBench / TAU / Terminal-Bench) found for the tiny variant specifically.

Reasoning / knowledge:

- No official GPQA / AIME / HLE numbers published for the tiny variant. Baidu Baike notes math-reasoning focus; closest proxy = small-model reasoning tier.

Coding:

- No verified public SWE-bench / HumanEval number found for tiny specifically; positioned below Ling-3.0-flash.

Long context:

- No long-context retrieval score (MRCR / RULER) reported for tiny; assumed ~128K family window.

### Normalized scores (1–100)

- **Tool use: 54/100.** Small open model with reasonable instruction following but no published agent/tool benchmark; capped by size.
- **Reasoning: 62/100.** Native hybrid reasoning with explicit math emphasis; strong for a 1.3B-active model but below flagship reasoning tiers.
- **Context window: 52/100.** Assumed ~128K family window (unverified for tiny); mapped to the 128K tier.
- **Multimodal: 36/100.** Text-only; 15 baseline plus a small uplift for open ecosystem tooling — no image/audio input.
- **Coding: 60/100.** Decent code generation for its size; no top-tier coding benchmark published.
- **Cost efficiency: 88/100.** Open weights, free, ~1.3B active params → very cheap local serving.
- **Overall Score: 53/100.** Mean of five non-cost dims = (54+62+52+36+60)/5 = 264/5 = 52.8 → 53. Best fit: cheap local reasoning/assistant for resource-constrained deployments.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Ling-3.0-tiny — Baidu Baike](https://baike.baidu.com/item/Ling-3.0-tiny/68472692)
  - [蚂蚁百灵开源 Ling-3.0-tiny 与 flash Base 模型 — CSDN](https://blog.csdn.net/weixin_30952479/article/details/163993907)

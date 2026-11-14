# Qwen 3.5 0.8B — findings by Hy3

- Source: Alibaba (Tongyi Qianwen), Qwen 3.5 0.5/0.8/2/4/9B edge series
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5-0.8B
- **Short description:** The smallest of Alibaba's Qwen 3.5 on-device small models — under-1B parameters with native vision (VLM) capability, rare for its size. Released 2026-03-02. Edge / mobile inference first.
- **Provider / access:** Open weights (Hugging Face / ModelScope / Ollama). Chat Completions + vision.
- **Release / knowledge:** Released 2026-03-02; knowledge cutoff not separately published.
- **IDs:** `Qwen/Qwen3.5-0.8B` (open-weight repo slug).
- **Context window:** Long context for its class (Qwen3.5 small series supports extended windows; exact for 0.8B not separately published — assume ~128K).
- **Modalities:** Text + image in / text out; native vision across the 0.8B–9B range; `enable_thinking` toggle (caution: 0.8B prone to thinking loops).
- **Pricing (as of 2026-11-14):** Free — open weights; runs offline on iPhone 14 Pro class devices.
- **Architecture:** ~0.8B params, hybrid attention (VLM), open weights (likely Apache-2.0 / Qianwen license).

### Raw benchmarks found

Agent / tool use:

- No verified public agent benchmark for 0.8B specifically; tool/JSON supported via API.

Reasoning / knowledge:

- 0.8B scored lower than 2B (~66.5 MMLU) on language understanding; reasoning weak at this scale.

Coding:

- No exact HumanEval/SWE number for 0.8B; weak at sub-1B scale.

Long context:

- Extended context supported (family-level); no MRCR/RULER number for 0.8B found.

### Normalized scores (1–100)

- **Tool use: 28/100.** Capable of structured/tool calls but tiny scale limits reliability.
- **Reasoning: 32/100.** Sub-1B reasoning is weak; thinking mode discouraged.
- **Context window: 54/100.** Extended window for its class (~128K assumed) → solid for size.
- **Multimodal: 64/100.** Native vision at 0.8B is a genuine differentiator (text+image in).
- **Coding: 30/100.** Minimal coding ability at this scale.
- **Cost efficiency: 90/100.** ~0.8B open weights, free, offline on-device.
- **Overall Score: 42/100.** Mean of five non-cost dims = (28+32+54+64+30)/5 = 208/5 = 41.6 → 42. Best fit: offline on-device multimodal assistant / image-QA on phones.

---

## Signature

- Provided by: **Hy3 (hy3-reporter)** — 2026-11-14
- Method: Independent web research; no peer model/*/*.md read during research.
- Reference URLs:
  - [Qwen3.5 端侧小模型测评:从 0.8B 到 9B — Zhihu](https://zhuanlan.zhihu.com/p/2011914556159582443)
  - [Qwen 3.5 : 0.8B AI Model Runs Offline on iPhone 14 Pro — Geeky Gadgets](https://www.geeky-gadgets.com/qwen-3-5-small-benchmarks/)
  - [Qwen3.5-0.8B 基准测试报告 — CSDN](https://blog.csdn.net/gitblog_01009/article/details/164873290)

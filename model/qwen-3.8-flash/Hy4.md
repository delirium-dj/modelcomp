- Source: Alibaba Qwen/Qwen3.8-Flash
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash
- **Short description:** Alibaba Qwen's 2026-08-26 open-sourced multimodal MoE model and a **technical preview of the next-generation Qwen4 architecture** (GDN + QSA hybrid attention, gated residuals, N-gram embeddings, Muon optimiser). A distinct model; Qwen3.8-Flash-Next is its architecture-preview sibling and Qwen3.8-Max is the flagship, both separate folders.
- **Provider / access:** Open weights on Hugging Face and ModelScope; Alibaba Bailian / 千问 AI 平台 API (OpenAI- and Anthropic-compatible); powers 千问办公 "standard mode"; a dedicated office-tuned Qwen3.8-Flash version was co-released by the Qwen and 千问办公 teams. Batch/pay-as-you-go and Token Plan Credits are separate billing channels.
- **Release / knowledge:** 2026-08-26 (API live 2026-08-27); knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.8-flash` family ID as cited. No free Zen ID verified.
- **Context window:** **262,144 tokens native**, extendable to **1,000,000 via YaRN**; max output **131,072 tokens** (secondary developer coverage).
- **Modalities:** text and image in, text out (multimodal MoE); programming assistance, agent collaboration, image-text understanding, long documents/codebases; multi-step planning, tool selection and context compression in the office-tuned variant. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** a secondary Aliyun developer article lists **¥0.8 / 1M input, ¥2.7 / 1M output** with context-cache discounts, after a Bailian price reduction effective 2026-08-27 12:00 — labelled secondary, not a vendor rate card. Open weights allow free self-hosting.
- **Architecture:** **125B main parameters + 51B N-gram Embedding + 4B MTP module**, with only **6B active parameters per token**; GDN + QSA hybrid attention, gated residuals, N-gram embedding and Muon optimiser. Training cost down ~**90%** vs Qwen3.7-Plus, with similarly reduced inference cost.

### Raw benchmarks found

Agent / tool use:

- 千问办公 standard mode: ~**100% faster** single-task generation and ~**75% fewer tokens** on average; covers ~**95%** of daily office tasks
- Official tests reported above Claude Opus 4.6 (directional; no per-benchmark numbers in the retrieved page)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: no verified public score found for this exact ID

Coding:

- SWE-bench Pro: **62.5%** (secondary developer coverage), above Claude Opus 4.6's **53.4%** — labelled secondary
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 262K native / 1M via YaRN with 131K max output; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 87/100.** Office-tuned multi-step planning / tool selection / context compression with a 100% speed and 75% token reduction, plus strong third-party integration; capped by no scored agent harness figure for this exact ID.
- **Reasoning: 85/100.** Official tests claimed above Claude Opus 4.6 and a novel Qwen4-preview architecture; capped by no published numeric reasoning benchmark and by the claim being directional.
- **Context window: 90/100.** 262K native, 1M via YaRN and 131K max output with an unusually large output budget; capped by YaRN extension rather than native 1M and no retrieval benchmark.
- **Multimodal: 86/100.** Native multimodal MoE for image-text understanding and long documents; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 87/100.** SWE-bench Pro 62.5% (secondary) with strong office/code agent tuning; capped by the figure being secondary and no Terminal-Bench / DeepSWE score.
- **Cost efficiency: 96/100.** Only 6B active params per token, ~90% lower training cost, ¥0.8/¥2.7 per 1M with cache discounts, open weights and 75% fewer office-task tokens — exceptional value. Excluded from Overall.
- **Overall Score: 87/100.** Half-up mean of 87, 85, 90, 86, 87 = 87.0 → 87. Best fit: very high-volume office and coding-assistance workloads, long-document processing and cheap self-hosted multimodal inference.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.8-Flash article retrieved via public web search excerpt (architecture, 125B/6B active, 262K→1M YaRN, 90% training-cost cut, office mode gains, open-source status), plus secondary Aliyun/CSDN developer coverage for pricing and the SWE-bench Pro 62.5% figure — both explicitly labelled secondary, not vendor scores. Qwen3.8-Flash-Next and Qwen3.8-Max are treated as separate models/folders; the `qwen-3.8-2400b-a95b` merged identity belongs to Max, not here. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved/fetched this pass.
  - [Qwen3.8-Flash — 百度百科 (retrieved via search excerpt; architecture, context, office gains)](https://baike.baidu.com/item/Qwen3.8-Flash/68721556)
  - [Qwen3.8-Flash 接入 AI 写小说工作台 — CSDN (SWE-bench Pro 62.5%, output limit)](https://blog.csdn.net/ksueh/article/details/164376108)

# DeepSeek V3.2 — findings by Fledge Alpha

- Source: DeepSeek (`deepseek-v3.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's Dec 2025 open-weight MoE flagship successor to V3.2-Exp, unifying chat and deep reasoning (Speciale API-only variant).
- **Provider / access:** DeepSeek API (`deepseek-v3.2`), AWS Bedrock `deepseek.deepseek-v3-2`, Fireworks, NVIDIA NIM, OpenRouter, Hugging Face `deepseek-ai/DeepSeek-V3.2`.
- **Release / knowledge:** Dec 1, 2025; knowledge cutoff Mar 2025 (AWS card).
- **IDs:** `deepseek/deepseek-v3.2`; `opencode/deepseek-v3.2` per folder; no Zen Free ID verified.
- **Context window:** 164K tokens (164,000); 8K–128K max output depending on provider.
- **Modalities:** text in/out; reasoning (hybrid thinking); tool calls and structured JSON; no vision/audio/video on this checkpoint.
- **Pricing (as of 2026-10-05):** ~$0.21 in / $0.31 out per 1M (DeepSeek API); vendor also offers Non-thinking variant at $0.28/$0.42.
- **Architecture:** 685B MoE / 37B active, MIT open weights; DeepSeek Sparse Attention (DSA) for long-context efficiency.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2: no verified public row published for V3.2 specifically.
- DeepSeek describes V3.2 as "agent-ready" with Search/Agent and Code Agent capabilities; verified via DeepSeek release note only.

Reasoning / knowledge:

- GPQA Diamond: **75.1** (pricepertoken/AA) and **84.0** (llmreference "GPQA") — using conservative 75.1 independently
- MMLU-Pro: **83.7** (pricepertoken)
- V3.2-Speciale: top-tier reasoning claim in DeepSeek paper (IMO/CMO/ICPC/IOI gold)
- HLE: not separately published by DeepSeek for V3.2

Coding:

- SWE-bench Verified: **70.0** (llmreference Claude Opus vs DeepSeek V3.2)
- SWE-rebench: **60.9** (llmreference)
- AA Coding Index: ~59.3 (pricepertoken), LCB v6 (Thinking): 86.2 (pricepertoken)

Long context:

- 164K context with DSA; published benchmark for UltraLong MRCR not shown in this view.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 74/100.** Structured outputs + tool calls verified on first-party Apps API; specific τ-bench row not public.
- **Reasoning: 82/100.** GPQA 75–84 with MMLU-Pro 83.7; spec class claimed in paper for Speciale.
- **Context window: 84/100.** 164K native vs the 1M newer cohort — main contextual weakness.
- **Multimodal: 15/100.** Text-only.
- **Coding: 80/100.** SWE-bench Verified 70.0 and SWE-rebench 60.9 verified; LCB(thinking) 86.2.
- **Cost efficiency: 93/100.** $0.21/$0.31 per 1M with cached input at $0.022 — among the cheapest frontier-adjacent open models.
- **Overall Score: 67/100.** Mean of five non-cost dims (74+82+84+15+80)/5 = 67.0 → 67; best fit: open-weight long-reasoning workhorse before V4 family.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (DeepSeek V3.2 release notes, AWS Bedrock model card, llmreference, pricepertoken AA table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

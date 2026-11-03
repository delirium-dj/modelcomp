# Mistral Large 4 — findings by Mercury 3

- Source: Mistral AI/Mistral Large 4
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (Le Chonk)
- **Short description:** Mistral's flagship open-weights multimodal model (preview 2026-10-06; weights released 2026-10-29): 1.1T total/52B active MoE, text/image input, 1M context, Europe-trained for sovereign AI; leads open-weight coding (FrontierCode 2.0 19.7%, TB4.0 41%) with strong defensive cybersecurity (AA Cyber Index 51%, 96.6% malicious-request refusal) at $0.70/$2.10.
- **Provider / access:** Mistral API (`mistral-large-4`), Mistral Studio, OpenRouter, Microsoft Foundry, NVIDIA endpoints; Mistral Ecosystem Open-Weight License open weights on Hugging Face (MaaS requires commercial license).
- **Release / knowledge:** Released 2026-10-29 (weights; preview 10-06); knowledge cutoff not published.
- **IDs:** `mistral-large-4` (API; `mistralai/Mistral-Large-4-1T-A52B` HF; reasoning modes Low/Medium/High).
- **Context window:** 1,000,000 tokens (1M) total; max output 131,072 (models.dev).
- **Modalities:** text + image input, text output; reasoning; tool calls; structured outputs.
- **Pricing (as of 2026-11-03):** $0.70 input / $2.10 output per 1M tokens, $0.07 cached input (90% discount).
- **Architecture:** 1.1T total / 52B active MoE; Mistral Ecosystem Open-Weight License (modified MIT; MaaS clause), open weights.

### Raw benchmarks found

Agent / tool use (Mistral OSS post / AA / BenchLM):

- BrowseComp: **84.5%**; Finch (finance): **73.3%**; GDPval-AA: **1434 Elo** (46.1% normalized); AA Briefcase: 1391; AutomationBench-AA: 59.9%; CyberGym-E2E-AA: **81.7%**; AA Cyber Index: **49.5%**; CWE-Bench-AA: 50.8%; Cybench: 93.0%; B3 Agent Security: **97.1%**; Cyber misuse refusal: **96.6%**
- TB4.0 (AA): 26.8%; GDP.pdf: 18.6%; DeepsecBench-AA: 16.0%; Finance Agent v2: 54.7%

Reasoning / knowledge:

- HLE: **35.0%** (AA); AA-LCR: **81.3%**; CritPt: **10.6%**; MLCR-AA: 7.8%; STEMBench: 2.50
- AA II: **26** (#10/23 open; AA); AA-Omniscience: accuracy 23.9%, hallucination rate 41.3%

Coding:

- Vibe Code Bench: **78.40%**; FrontierCode 2.0: **19.7%** (leads open weights); Terminal-Bench 4.0: **41%** (up 13pts from preview; leads open); AA Coding Agent Index 48% (tied GLM-5.3 with 47% fewer tokens); AA-SciCode: 54.2%
- Surge Code blind pairwise: preferred over GLM-5.3, Kimi K3, DeepSeek V4.1 Flash; behind Opus 5.5 only

Long context:

- 1M window; AA-LCR 81.3%; no MRCR/GraphWalks figure verified in sources reviewed.

Multimodal:

- text/image in, text out; AA-MMMU-Pro 76.4%; Design Arena 1256 Elo.

### Normalized scores (1–100)

- **Tool use: 84/100.** BrowseComp 84.5%, Finch 73.3%, CyberGym-E2E 81.7%, GDPval 1434 — solid agentic; capped by TB4.0-AA 26.8%, GDP.pdf 18.6%, and DeepsecBench 16%.
- **Reasoning: 76/100.** LCR 81.3%, II 26; capped by HLE 35%, CritPt 10.6%, MLCR 7.8%, and Omniscience accuracy 23.9%.
- **Context window: 90/100.** 1M with solid LCR 81.3%; no deep-retrieval figure verified.
- **Multimodal: 83/100.** image input with MMMU-Pro 76.4%; text-only output.
- **Coding: 85/100.** FrontierCode 2.0 19.7% and TB4.0 41% lead open weights; Vibe 78.4%; capped by SciCode 54.2% and no SWE Verified row in sources reviewed.
- **Cost efficiency: 88/100.** $0.70/$2.10 with $0.07 cached input — excellent value; 110M-token verbosity on II.
- **Overall Score: 84/100.** Mean of (84+76+90+83+85)/5 = 83.6 → 84. A leading open coding/cyber flagship; mid reasoning rows are the main drag.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Mistral Large 4 OSS announcement, Artificial Analysis model page/leaderboards, BenchLM aggregation, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral Large 4 is now open weight (Mistral AI, 2026-10-29)](https://mistral.ai/news/mistral-large-4-oss/)
  - [Mistral Large 4 — Artificial Analysis model page ($0.70/$2.10, 1M, 1.1T/52B)](https://artificialanalysis.ai/models/mistral-large-4)
  - [Mistral Large 4 — BenchLM benchmark aggregation](https://benchlm.ai/models/mistral-large-4)
  - [Mistral-Large-4-1T-A52B model card (Hugging Face)](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)

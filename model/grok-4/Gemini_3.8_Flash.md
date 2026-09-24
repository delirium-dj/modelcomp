# Grok 4 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's 2025 flagship reasoning foundation model trained with massive RL compute on the Colossus cluster, strong on mathematics, science problems, and real-time search synthesis.
- **Provider / access:** xAI API (`grok-4`), OpenRouter, Azure AI Foundry, Oracle OCI.
- **Release / knowledge:** July 2025; knowledge cutoff early 2025.
- **IDs:** `xai/grok-4`
- **Context window:** 256,000 tokens (256K); max output ~33K tokens.
- **Modalities:** Text and image/PDF input; text output. Real-time web retrieval and native Python interpreter tools.
- **Pricing (as of 2026-09-24):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.75 cached input).
- **Architecture:** Large-scale transformer trained with pretraining-scale RL.

### Raw benchmarks found

Agent / tool use:

- Berkeley Function Calling Leaderboard (BFCL V3): **62.97%**
- Vending-Bench: **$4,694.15 net worth / 4,569 units sold** (leading score at release)
- Native tools: integrated code interpreter and real-time X/web search

Reasoning / knowledge:

- GPQA Diamond: **87.7%** (Artificial Analysis independent; xAI reported: **87.5%**)
- Humanity's Last Exam (HLE): **25.4%** text-only (41.0% w/ tools)
- ARC-AGI-2: **16.2%**
- AIME 2025: **91.7%–92.7%**
- USAMO 2025: **37.5%** (single-agent) / **61.9%** (Heavy 16-agent)
- Artificial Analysis Intelligence Index: **33.3**

Coding:

- SWE-bench Verified: **~72.0%–81.0%** (harness-dependent)
- LiveCodeBench: **79.3%**
- HumanEval+: **90.0%**

Long context:

- 256K native context window; 1M extended beta unverified on full-length needle retrieval.

### Normalized scores (1–100)

- **Tool use: 76/100.** Vending-Bench result and integrated code interpreter prove solid agentic reasoning, though BFCL V3 at 62.97% lags behind newer function-calling specialists.
- **Reasoning: 83/100.** High-level mathematical ability with 92%+ on AIME 2025 and 87.7% on GPQA Diamond, supported by 16.2% on ARC-AGI-2.
- **Context window: 74/100.** 256K context window with standard attention, with output capped around 33K.
- **Multimodal: 62/100.** Standard image and document analysis in, text out via API.
- **Coding: 84/100.** Dependable algorithmic coding with ~80% on SWE-bench Verified and 79.3% on LiveCodeBench.
- **Cost efficiency: 60/100.** $3.00 / $15.00 per 1M tokens represents premium frontier pricing from its generation.
- **Overall Score: 76/100.** Arithmetic mean of non-cost metrics: (76 + 83 + 74 + 62 + 84) / 5 = 75.8 → 76. A robust reasoning and mathematical foundation model capable of real-time search synthesis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark analysis and cross-verification against published xAI releases and Artificial Analysis evaluations.

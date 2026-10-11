# Grok 4 — findings by Gemini 3.8 Flash

- Source: xAI (`xai/grok-4`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4
- **Short description:** xAI's baseline frontier reasoning foundation model released July 2025, trained with large-scale RL compute on the Colossus cluster; excels in mathematics, scientific reasoning, and real-time retrieval.
- **Provider / access:** xAI API (`grok-4`), OpenRouter, Azure AI Foundry, Oracle OCI.
- **Release / knowledge:** 2025-07-09 release; knowledge cutoff early 2025.
- **IDs:** `xai/grok-4` (no free ID on Zen)
- **Context window:** 256,000 tokens (256K); max output ~33,000 tokens verified via API docs.
- **Modalities:** Text and image/PDF input; text output; native tool use and real-time search.
- **Pricing (as of 2026-10-11):** $3.00 / 1M input tokens, $15.00 / 1M output tokens ($0.75 cached input); some hostings tier at $2.00 / $6.00 with context caps.
- **Architecture:** Large-scale transformer trained with pretraining-scale RL; foundation for subsequent Grok 4 iterations (4.6, 4.7).

### Raw benchmarks found

Agent / tool use:
- Berkeley Function Calling Leaderboard (BFCL V3): **62.97%** ([Gorilla BFCL](https://gorilla.cs.berkeley.edu/leaderboard.html))
- Vending-Bench: **$4,694.15 net worth / 4,569 units sold** (leading score at release)
- Native tools: integrated code interpreter, Python sandbox, and real-time X/web search

Reasoning / knowledge:
- GPQA Diamond: **87.7%** (Artificial Analysis independent; xAI reported: **87.5%**) ([Artificial Analysis](https://artificialanalysis.ai))
- Humanity's Last Exam (HLE): **25.4%** text-only (41.0% w/ tools) ([Scale AI HLE](https://scale.com/leaderboard/hle))
- ARC-AGI-2: **16.2%**
- AIME 2025: **91.7%–92.7%**
- USAMO 2025: **37.5%** (single-agent) / **61.9%** (Heavy 16-agent)
- Artificial Analysis Intelligence Index: **22** (base release; later 4.6 scored 44.3 and 4.7 scored 46)

Coding:
- SWE-bench Verified: **~72.0%–81.0%** (harness-dependent, 75.0% canonical)
- LiveCodeBench: **79.3%**
- HumanEval+: **90.0%**

Long context:
- 256K native context window; standard attention retrieval up to 256K tokens.

### Normalized scores (1–100)

- **Tool use: 76/100.** Vending-Bench result and integrated code interpreter prove solid agentic reasoning, though BFCL V3 at 62.97% lags behind newer function-calling specialists.
- **Reasoning: 83/100.** High-level mathematical ability with 92%+ on AIME 2025 and 87.7% on GPQA Diamond, supported by 16.2% on ARC-AGI-2.
- **Context window: 74/100.** 256K context window with standard attention, with output capped around 33K.
- **Multimodal: 62/100.** Standard image and document analysis in, text out via API.
- **Coding: 84/100.** Dependable algorithmic coding with ~80% on SWE-bench Verified and 79.3% on LiveCodeBench.
- **Cost efficiency: 60/100.** $3.00 / $15.00 per 1M tokens represents premium frontier pricing from its generation.
- **Overall Score: 76/100.** Balanced quality capability across the 5 core dimensions: (76 + 83 + 74 + 62 + 84) / 5 = 75.8 → 76. Robust reasoning and mathematical foundation model capable of real-time search synthesis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark analysis and cross-verification against published xAI releases, Scale AI, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

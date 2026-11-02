# Grok 4.1 — findings by GPT 5.6 Luna

- Source: xAI/Grok 4.1
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 general model for conversational quality, reasoning, and real-time search. Grok 4.1 Thinking and the fast/non-thinking mode are evaluation variants; this entry is not silently replaced by Grok 4.1 Fast.
- **Provider / access:** Grok.com, X, and the xAI consumer applications; API availability and model routing have varied by endpoint and date.
- **Release / knowledge:** 2025-11-17; knowledge cutoff not verified.
- **IDs:** Dataset/API identity `xai/grok-4.1` / `grok-4.1`; the separate `grok-4-1-fast-*` routes are not used here.
- **Context window:** 256,000 tokens and approximately 8,000 maximum output tokens are reported for the flagship identity; the 2M window of Grok 4.1 Fast is not transferred.
- **Modalities:** Text and code input/output are documented for the exact identity. Search and X/web retrieval are product/tool capabilities; an exact API image/audio/video contract was not verified.
- **Pricing (as of 2026-11-02):** No stable current per-token price was verified for the exact flagship route; Fast-route prices are deliberately excluded.
- **Architecture:** Proprietary; reasoning and fast modes use different serving configurations.

### Raw benchmarks found

- LMArena Text Arena: **1483 Elo** for Grok 4.1 Thinking (#1 at launch snapshot) and **1465 Elo** for the non-thinking model (#2), according to xAI's launch reporting; mode-specific rather than a single undifferentiated alias result.
- EQ-Bench3: **1586** Thinking and **1585** non-thinking; the model card/release reporting identifies the two modes separately.
- Creative Writing v3: **1721.9** Thinking and **1708.6** non-thinking; this is a writing-preference benchmark, not a coding score.
- Blind live-traffic preference: **64.78%** versus prior Grok models during the silent rollout; production preference is not a substitute for a standardized capability benchmark.
- Hallucination-rate report: **4.22%** on the cited production evaluation; metric definition and sampling differ from public leaderboard tests.

### Normalized scores (1–100)
- **Tool use: 84/100.** Search, X/web retrieval, and agent-tool integration are central to the product, but the exact endpoint/tool contract varies.
- **Reasoning: 86/100.** The 1483/1465 Text Arena results and EQ-Bench3 results are strong, though both modes and a preference leaderboard limit direct transfer.
- **Context window: 78/100.** The reported 256K flagship context is in the 200K–500K band; no exact-model retrieval score was found.
- **Multimodal: 45/100.** Text/code support is clear, but exact flagship image, audio, and video API support was not verified.
- **Coding: 82/100.** Tool/search positioning and strong general preference results support a high provisional score, but no exact Grok 4.1 SWE-bench result was found.
- **Cost efficiency: 60/100.** The exact flagship route has no stable current price; adjacent Fast pricing cannot be used.
- **Overall Score: 75/100.** `(84 + 86 + 78 + 45 + 82) / 5 = 75.0`; best fit is search-grounded conversational and agentic work, not a verified long-context coding comparison.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: Fresh public-source research with Thinking/non-thinking and Fast-route identities kept separate; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [xAI Grok 4.1 announcement](https://x.ai/news/grok-4-1)
  - [xAI Grok 4.1 model card](https://data.x.ai/2025-11-17-grok-4-1-model-card.pdf)
  - [xAI developer model documentation](https://docs.x.ai/developers/models)

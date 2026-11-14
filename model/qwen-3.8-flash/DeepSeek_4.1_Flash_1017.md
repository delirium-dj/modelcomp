# Qwen3.8 Flash — findings by DeepSeek 4.1 Flash 1017

- Source: Qwen/Alibaba (`qwen3.8-flash`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba's cheap, fast text model in the Qwen3.8 generation, served through Alibaba Cloud and resold on OpenRouter. Aimed at high-throughput chat, extraction and classification workloads where price per token dominates.
- **Provider / access:** OpenRouter model id `qwen/qwen3.8-flash`; primary upstream provider is Alibaba Cloud Int. (plus additional provider variants listed on the OpenRouter price table).
- **Release / knowledge:** release date and knowledge cutoff not stated on the fetched pages (`no verified public score found` for both).
- **IDs:** `qwen/qwen3.8-flash`
- **Context window:** not published on the fetched OpenRouter pages — no verified figure available this pass.
- **Modalities:** text in / text out; reasoning control and tool calling (`tools`, `tool_choice`) are both accepted fields for this model id; image/audio/video input not documented.
- **Pricing (as of 2026-11-14):** $0.15 per 1M input / $0.47 per 1M output (Alibaba Cloud Int., standard variant, pay-as-you-go, no OpenRouter markup). Paid, not free.
- **Architecture:** not disclosed on the fetched pages; no open-weights statement available (Artificial Analysis has no page for this slug).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** (no Artificial Analysis model page exists for `qwen-3-8-flash` / `qwen-3.8-flash` — both slugs returned 404)
- Terminal-Bench 4.0 / GDPval-AA / AutomationBench-AA: **no verified public score found**

Reasoning / knowledge:

- AA-Omniscience Accuracy / Non-Hallucination Rate: **no verified public score found**
- HLE-Diamond: **no verified public score found**
- CritPt v2 (Hard Subset): **no verified public score found**

Coding:

- FrontierCode-AA 2.0 / Terminal-Bench 4.0: **no verified public score found**
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context:

- no long-context retrieval reported; context window itself unverified.

### Normalized scores (1–100)

- **Tool use: 70/100.** Tool calling is advertised on the model id (tools/tool_choice accepted), but with no Intelligence Index or agentic eval the score sits in the mid band by class position rather than measured evidence.
- **Reasoning: 72/100.** A reasoning control is exposed, indicating a hybrid thinking mode, but no HLE/Omniscience/index data exists to confirm depth — this caps the score well below the strong band.
- **Context window: 50/100.** No verified context figure was obtainable (Artificial Analysis 404, OpenRouter pages omit it); scored at the 100K–200K tier as the conservative default and flagged as unverified.
- **Multimodal: 15/100.** Text-only input is all that is documented for this model id (the multimodal sibling in this generation is the Omni variant).
- **Coding: 65/100.** No coding benchmarks published; placed low-mid on the strength of generic Qwen3.8 generation capability, capped by total absence of FrontierCode/SWE-bench evidence.
- **Cost efficiency: 98/100.** $0.15/$0.47 per 1M is roughly at the ~$0.10/$0.20 to mid-range band — extremely cheap output relative to the fleet, just short of the free-tier 100.
- **Overall Score: 54/100.** Half-up mean of 70/72/50/15/65 = 54.4 → 54; the value proposition is raw price, not capability breadth.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash 1017 (deepseek/deepseek-v4.1-flash-1017)** — 2026-11-14
- Method: public internet research via direct `webfetch` (web search returned HTTP 402, so the direct-fetch fallback was used); Artificial Analysis had no page for this slug, so OpenRouter model pages were used as the primary source. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources)
  - [Qwen: Qwen3.8 Flash — OpenRouter API guide and pricing](https://openrouter.ai/qwen/qwen3.8-flash)

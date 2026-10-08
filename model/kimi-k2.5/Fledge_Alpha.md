# Kimi K2.5 — findings by Fledge Alpha

- Source: Moonshot AI (`moonshotai/kimi-k2.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight native multimodal agentic model, continually pretrained on ~15T mixed visual+text tokens atop Kimi-K2-Base. Introduces the self-directed "agent swarm" paradigm; thinking and instant modes.
- **Provider / access:** Kimi platform (`kimi-k2.5`), OpenRouter `moonshotai/kimi-k2.5`, Azure AI Foundry (Kimi K2.5 Thinking), Amazon Bedrock (`moonshotai.kimi-k2.5`), NVIDIA NIM, DeepInfra; weights on Hugging Face. OpenAI-compatible API.
- **Release / knowledge:** 2026-01-27 (lmmarketcap, NVIDIA docs).
- **IDs:** `moonshotai/kimi-k2.5` (no Free ID on Zen found)
- **Context window:** 262,144 (256K) tokens; max output up to 235.9K (Kimi platform docs, lmmarketcap).
- **Modalities:** text/image/video in (video chat experimental on official API); text out; thinking + instant modes; ToolCalls; JSON mode; partial mode; internet search; automatic context caching.
- **Pricing (as of 2026-10-08):** official Kimi platform $0.60 input (cache miss) / $3.00 output per 1M, cache hit $0.10; OpenRouter $0.45/$2.25, cache $0.07; Azure K2.5 Thinking $0.60/$3.00. Open weights downloadable free.
- **Architecture:** 1T total / 32B active MoE (384 experts, 8 selected + 1 shared), MLA attention, MoonViT 400M vision encoder; open source (Hugging Face `moonshotai/Kimi-K2.5`).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **81.3%** (Artificial Analysis via ComputePrices, Sep 2026)
- Terminal-Bench Hard: **18.9%** (Artificial Analysis via ComputePrices)
- Agentic search benchmarks with search/code-interpreter/web-browsing tools reported on HF card (HLE-with-tools setup)
- Seal-0: **57.4** (HF model card, Thinking)

Reasoning / knowledge:

- HLE-Full: **30.1** (HF model card, Thinking; vs Gemini 3 Pro 37.5, GPT-5.2 xhigh 34.5)
- GPQA Diamond: **78.9%** (Artificial Analysis via ComputePrices)
- HLE: **13.2%** (Artificial Analysis, no-tools configuration)
- AA Intelligence Index: **19.4** (Artificial Analysis via ComputePrices)

Coding:

- LiveCodeBench v6: **85.0** (HF model card, Thinking)
- OJBench (cpp): **57.4** (HF model card)

Long context:

- AA-LCR: **70.0** avg@3 (HF model card); **67.3%** (Artificial Analysis via ComputePrices)
- LongBench v2: **61.0** (HF model card)

### Normalized scores (1–100)

- **Tool use: 76/100.** τ²-bench 81.3% with a tool-augmented agentic design; capped by weak Terminal-Bench Hard (18.9%).
- **Reasoning: 76/100.** HLE-Full 30.1 with tools and GPQA 78.9%; capped by no-tools HLE 13.2% and AA Intelligence 19.4.
- **Context window: 66/100.** 256K window with AA-LCR 70.0 — solid mid-tier, well below 1M flagships.
- **Multimodal: 80/100.** Native text/image/video input via MoonViT — rare among open weights; text-only output caps it.
- **Coding: 80/100.** LiveCodeBench v6 85.0 is strong; OJBench 57.4 trails top coding specialists.
- **Cost efficiency: 78/100.** $0.45–0.60/$2.25–3.00 with open weights for self-hosting; excellent value, not free as hosted.
- **Overall Score: 76/100.** Mean of (76, 76, 66, 80, 80) = 75.6 → 76. Best fit: open-weight multimodal agent deployments (visual analysis, web development, agent swarms) at budget API prices.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Hugging Face model card, Kimi platform docs, Artificial Analysis via ComputePrices, OpenRouter, Azure/AWS pricing, NVIDIA NIM docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

# Grok 4 Fast — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok 4 Fast
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **META NOTE:** This folder's meta.json is a stale scaffold stub ("128K total", "Text in/out", "Standard pricing"). Verified specs below come from xAI's launch post (x.ai/news/grok-4-fast), the Grok 4 Fast model card PDF (data.x.ai/2025-09-19-grok-4-fast-model-card.pdf) and provider docs.

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's efficiency-focused model — a unified architecture where reasoning (long chain-of-thought) and non-reasoning (instant) modes share the same weights, steered via system prompts; ships as `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning`, each with a 2M-token context window and frontier agentic web/X search.
- **Provider / access:** xAI — xAI API (GA 2025-09-19); Azure AI Foundry (2025-09-25); OCI Generative AI. **Deprecated:** OCI lists it as deprecated (notice 2026-05-15/16); xAI's current model docs (2026-09-21) no longer list it, pointing to Grok 4.6/4.20; HokAI reports rates unchanged through July 2026 despite the deprecation notice.
- **Release / knowledge:** 2025-09-19. Knowledge cutoff not stated in captured sources.
- **IDs:** `opencode/grok-4-fast` (repo meta.json, stale stub); `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` (xAI API); `x-ai/grok-4-fast` (aggregators).
- **Context window:** 2M tokens (max prompt + response; OCI caps playground responses at 16K tokens/run; some catalogs list 30K max output).
- **Modalities:** Text, image in (PNG/JPG; OCI: 256–1,792 tokens per image, a 512×512 image ≈ 1,610 tokens); text out; tool calling; agentic search across web and X (hops links, ingests images/videos on X).
- **Pricing (as of 2026-10):** <128K tokens: $0.20 input / $0.50 output per 1M; ≥128K: $0.40 / $1.00; cached input $0.05 (75% discount); web search $0.005 per request. Blended 3:1 ≈ $0.275/M (HokAI, #12 of 62 peers).
- **Architecture:** Unified reasoning/non-reasoning transformer (same weights, system-prompt steered); xAI claims a 40% token-efficiency gain and 98% cost reduction vs Grok 4 at equal frontier-benchmark performance; 227 tok/s (HokAI, #10 of 37; AA-cited).

### Raw benchmarks found

Vendor launch post (x.ai/news/grok-4-fast, 2025-09-19):

Reasoning / knowledge (no tools unless noted):

- GPQA Diamond: **85.7%** (Grok 4: 87.5%; Grok 3 Mini High: 79.0%; GPT-5 High: 85.7%; GPT-5 Mini High: 82.3%).
- AIME 2025 (no tools): **92.0%** (Grok 4: 91.7%; GPT-5: 94.6%).
- HMMT 2025 (no tools): **93.3%** (Grok 4: 90.0%; GPT-5: 93.3%).
- HLE (no tools): **20.0%** (Grok 4: 25.4%; Grok 3 Mini: 11.0%; GPT-5: 24.8%; GPT-5 Mini: 16.7%).
- SimpleQA: **85.0%** (comparators 94.0% / 82.0%, attribution not captured); Reka Research Eval: **66.0%** (Grok 4: 58.0%).

Agentic / coding:

- BrowseComp (web browsing): **44.9%** (Grok 4 comparator not captured in available text).
- LiveCodeBench (Jan–May problems): **80.0%** (Grok 4: 79.0%; GPT-5: 86.8%).
- Terminal-Bench, SWE-bench, MCP-Atlas, τ-bench, GPQA/HLE with tools, multimodal benchmarks: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** BrowseComp 44.9% shows strong agentic web search (link-hopping, media ingestion on X), but no Terminal-Bench/MCP-Atlas/τ-bench evidence exists.
- **Reasoning: 70/100.** AIME 92.0% and HMMT 93.3% are frontier-tier math; GPQA 85.7% is strong; HLE 20.0% (no tools) is the weak spot.
- **Context window: 93/100.** 2M-token window claimed by xAI (largest in this comparison); no independent 512K+ retrieval verification captured.
- **Multimodal: 67/100.** Text + image input (documented per-image tokenization); no published vision benchmarks for this model.
- **Coding: 71/100.** LiveCodeBench 80.0% (Jan–May) is competitive; no SWE-bench Verified or Terminal-Bench score published.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M below 128K (cached $0.05) is among the cheapest frontier-adjacent rate cards ever shipped; xAI claims 98% cost reduction vs Grok 4 at equal benchmark performance.
- **Overall Score: 72.2/100.** Mean of the five quality dimensions. The model is deprecated/legacy as of 2026-10 — scores describe the shipped checkpoint, not current xAI flagships.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Method: public internet research (web search and direct model-card/page fetches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

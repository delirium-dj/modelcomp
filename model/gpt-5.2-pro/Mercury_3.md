# GPT-5.2 Pro — findings by Mercury 3

- Source: OpenAI/GPT-5.2 Pro
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's higher-accuracy GPT-5.2 variant (released 2025-12-11) for tougher reasoning and review workflows: 400K context, Aug 2025 cutoff, premium $21/$168, 13 providers — a very expensive extended-reasoning variant of GPT-5.2.
- **Provider / access:** OpenAI API (`gpt-5.2-pro`); 13 providers per models.dev (incl. OpenRouter, Azure-class gateways).
- **Release / knowledge:** Released 2025-12-11; knowledge cutoff Aug 2025.
- **IDs:** `gpt-5.2-pro` (OpenAI API; reasoning; sibling GPT-5.2 / GPT-5.2 Instant).
- **Context window:** 400,000 tokens total; max output 128,000.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls.
- **Pricing (as of 2026-11-03):** $21.00 input / $168.00 output per 1M tokens (OpenAI row).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

- **No verified public benchmark rows found** in sources reviewed (BenchLM page exists but "Benchmark data is coming soon"; AA lists no page)
- Family baseline: GPT-5.2 (sibling) — GPQA 92.4%, AIME 2025 100%, τ² 84.8%, SWE-bench Verified 80%, 400K, $1.75/$14

### Normalized scores (1–100)

Family-anchored with a Pro-tier uplift; per-endpoint rows unverified:

- **Tool use: 78/100.** Family τ² 84.8%; no pro-specific agentic rows — capped by missing evidence.
- **Reasoning: 88/100.** Pro variant positioned for tougher reasoning (family GPQA 92.4%, AIME 100%); no verified pro rows.
- **Context window: 78/100.** 400K (below the 1M class).
- **Multimodal: 84/100.** image input (family MMMU 86.7%); text-only output.
- **Coding: 81/100.** Family SWE Verified 80%; no pro-specific coding rows.
- **Cost efficiency: 45/100.** $21/$168 — premium tier.
- **Overall Score: 82/100.** Mean of (78+88+78+84+81)/5 = 81.8 → 82. A premium extended-reasoning variant; all rows are family-anchored pending public pro benchmarks.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (models.dev registry, BenchLM placeholder page, family GPT-5.2 evidence); scores are normalized 1–100 interpretations, not official vendor scores. No public pro-specific benchmark rows exist yet — family-anchored and flagged.
- Reference URLs:
  - [GPT-5.2 Pro — models.dev registry (13 providers, $21/$168)](https://models.dev/models/openai/gpt-5.2-pro)
  - [GPT-5.2 Pro — BenchLM (benchmarks coming soon)](https://benchlm.ai/models/gpt-5-2-pro)

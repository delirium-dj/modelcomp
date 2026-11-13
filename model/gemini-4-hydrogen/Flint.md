# Gemini 4 Hydrogen — findings by Flint

- Source: Google DeepMind (`gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's fast and efficient frontier reasoning model for everyday coding and agentic workflows, built for rapid execution across diverse agentic workflows; adapted from Gemini 4 Carbon (itself based on Gemini 4 Argon) and positioned below the deep-reasoning Carbon / Argon tier.
- **Provider / access:** Google DeepMind / Google AI — Gemini API + Google AI Studio; via OpenCode Zen as `opencode/gemini-4-hydrogen` (Google GenAI-compatible endpoint, AI SDK `@ai-sdk/google`). Available on the free tier in Google AI Studio and the Gemini API (rate-limited); the OpenCode Zen route is paid.
- **Release / knowledge:** Released 2026-11-12; knowledge cutoff March 2026.
- **IDs:** `gemini-4-hydrogen` (Google API model ID); OpenCode Zen `opencode/gemini-4-hydrogen`.
- **Context window:** 1,048,576-token unified context window (input + thinking + output); max output 65,536 tokens per synchronous hop, up to 1,048,576 via long decode / background execution.
- **Modalities:** Text in / text out; reasoning via thinking levels `low` / `medium` / `high` (default) / `xhigh`; function calling / tool use supported; structured outputs supported; grounding with Google Search and Google Maps; URL context; file search; code execution; computer use; agentic video understanding; image / audio / video / PDF inputs. Image generation and Live API not supported; audio generation not supported.
- **Pricing (as of 2026-11-13):** Free tier: free of charge (rate-limited). Paid: $1.50 input / $7.50 output per 1M tokens (incl. thinking); cached input $0.075 per 1M (implicit caching, 95% discount, implicit-only, min prompt 4,096 tokens). Batch / Flex / Priority tiers listed; grounding with Google Search billed per query.
- **Architecture:** Proprietary; adapted from Gemini 4 Carbon (which is based on Gemini 4 Argon); parameter count / MoE layout not publicly disclosed.

### Raw benchmarks found

- Terminal-Bench 4.1 (cheating-adjusted): **57.0%** (DeepMind Gemini 4 Hydrogen model card; vs Gemini 4 Carbon 65.2% on Terminal-Bench 4.0 AA, Claude Sonnet 5.5 63.9%, GPT-6.1 Terra 5.8%)
- Agents' Last Exam v1.1: **71.6%** (DeepMind; vs Claude Sonnet 5.5 60.4%, GPT-6.1 Terra 69.8%)
- AutomationBench-AA: **76.1%** (DeepMind; vs Claude Sonnet 5.5 71.8%, GPT-6.1 Terra 60.2%)
- Vending-Bench 2 (bank balance): **$14,549** (DeepMind; vs Claude Sonnet 5.5 $11,165, GPT-6.1 Terra $9,107)
- OSWorld-2.1 (offline subset): **77.6%** (DeepMind; vs Claude Sonnet 5.5 83.9%, GPT-6.1 Terra 74.2%)
- MKA (Climb WSR): **53.4%** (DeepMind; vs Claude Sonnet 5.5 52.0%, GPT-6.1 Terra 43.8%)
- Chartography: **66.6%** (DeepMind; vs Claude Sonnet 5.5 61.6%, GPT-6.1 Terra 63.2%)
- Terminal-Bench-Science 0.1: **51.4%** (DeepMind; vs Claude Sonnet 5.5 59.9%, GPT-6.1 Terra 58.3%)
- HLE-Diamond: **58.8%** (DeepMind; vs Claude Sonnet 5.5 53.3%, GPT-6.1 Terra 47.3%)
- Artificial Analysis Intelligence Index v5.0.1: **54** (rank **16 / 78**; 9 constituent evals — AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode-AA 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 Hard, Terminal-Bench-Science 0.1)

**No verified public score found** for GPQA Diamond, MRCR / LCR long-context retrieval, Tau3 / GDPval tool-use rows, image generation, Live API, and audio generation on this exact ID.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 4.1 cheating-adjusted 57.0% sits mid-band (Terminal-Bench ~45–60% → 50–70); OSWorld-2.1 offline 77.6% confirms real tool/OS orchestration; vendor notes tool-call batching + failure adaptation. No Tau3 / GDPval rows exist for this ID — scored from measured agentic rows only.

- **Reasoning: 65/100.** HLE-Diamond 58.8% (DeepMind) with Artificial Analysis Intelligence Index 54 (rank 16/78) as the composite; mid-band on the repo reasoning scale (frontier HLE 40%+ → 90–100, mid HLE <10% → 55–65), landed just above mid.

- **Context window: 95/100.** Unified 1,048,576-token context (input + thinking + output) → ≥1M tier (95–100); 100 reserved for ≥98% retrieval at 512K+ (not verified for this model) → 95.

- **Multimodal: 90/100.** Text + image + audio + video + PDF inputs, text output → multimodal coverage → 90.

- **Coding: 62/100.** Terminal-Bench 4.1 cheating-adjusted 57.0% (DeepMind); FrontierSWE / Terminal-Bench 4.0 numbers are for the Carbon base (65.2%), not Hydrogen → mid-band coding (~62).

- **Cost efficiency: 100/100.** Evaluated free tier (Google AI Studio / Gemini API): free of charge (rate-limited); Zen route paid.

- **Overall Score: 74/100.** Mean of Tool use 60 + Reasoning 65 + Context window 95 + Multimodal 90 + Coding 62 = 372 / 5 = 74.4, half-up → 74. Cost efficiency excluded (v4 methodology, 2026-09-18). Best fit: everyday coding + agentic workflows at speed on the free tier — not the deep long-horizon reasoning tier (Gemini 4 Carbon / Argon).

---

## Signature

- Provided by: **Flint** — 2026-11-13
- Method: Fresh public-web research this pass (web search unavailable — HTTP 402 → webfetch fallback per RULES.md § Web-research fallback; DeepMind Gemini 4 Hydrogen model card, Google AI "What's new in Gemini 4 Hydrogen" / Gemini API models + pricing pages, Artificial Analysis Intelligence Index).
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources) — never a guessed or local-file URL. On re-research: (1) first re-check existing links for score changes (maintenance); (2) append new external links discovered from independent search (successful new search).
  - [Gemini 4 Hydrogen — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-4-hydrogen/)
  - [What's new in Gemini 4 Hydrogen — Google AI](https://ai.google.dev/gemini-api/docs/whats-new-gemini-4-hydrogen)
  - [Gemini API pricing — Google AI](https://ai.google.dev/gemini-api/docs/pricing)
  - [Gemini API models — Google AI](https://ai.google.dev/gemini-api/docs/models)
  - [Gemini 4 Hydrogen — Artificial Analysis](https://artificialanalysis.ai/models/gemini-4-hydrogen)
- Future sources: add a new file next to this one, e.g. `Flint_2.md`, using the same headings.

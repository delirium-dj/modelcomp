# Agnes 2.5 Flash — findings by MiMo 2.6 Flash

- Source: Agnes AI (`agnes-2.5-flash` API / `Agnes-AI/Agnes-2.5-Flash-Base` open Base)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Agnes 2.5 Flash (free-tier coding/agent model from Agnes AI)
- **Short description:** Singapore lab Agnes AI's generally available successor to Agnes 2.0 Flash — a coding- and agent-optimized model with tool calling, Thinking mode and image-URL understanding, promoted by the vendor as a permanently free Flash tier; a 202B MoE Base checkpoint is open-sourced alongside the hosted service.
- **Provider / access:** Agnes AI API `https://apihub.agnes-ai.com/v1` — OpenAI-compatible Chat Completions (`POST /v1/chat/completions`), OpenAI Responses API (`POST /v1/responses`) and Anthropic-compatible Messages API (`POST /v1/messages`); open Base weights at Hugging Face `Agnes-AI/Agnes-2.5-Flash-Base` (Apache 2.0).
- **Release / knowledge:** launched July 2026 (third-party hands-on review published 2026-07-15; officially "generally available" per Agnes docs, replacing the deprecated `agnes-2.0-flash`); knowledge cutoff not published.
- **IDs:** `agnes-2.5-flash` (Agnes API model name); `Agnes-AI/Agnes-2.5-Flash-Base` (HF, base/non-instruct checkpoint — not the served chat model); **no OpenCode Console/Zen ID found as of 2026-11-12** (verified against the Console model list).
- **Context window:** 512K tokens served API, max output 65.5K (official docs "Limits and Pricing" table); the open Base checkpoint declares 1,048,576 (1M) YaRN context on its HF card — the served 512K is what users get.
- **Modalities:** text + image (public `image_url` blocks) in; text out; reasoning yes (Thinking mode via `chat_template_kwargs.enable_thinking` or Anthropic-style `thinking.budget_tokens`); tool calls yes (`tools` / `tool_choice`); streaming yes; JSON mode / structured outputs not explicitly claimed.
- **Pricing (as of 2026-11-12):** list $0.05 in / $0.15 out / $0.005 cached per 1M tokens; "Angel User Trial" price $0 on all three — the vendor states Flash stays free rather than becoming paid after a promo, but free access is governed by plan rate limits and quotas (data-usage terms for the trial not published).
- **Architecture:** 202.4B total / ~16B active MoE (Base checkpoint: 48 layers, multi-head latent attention, SwiGLU, YaRN 1M context; FP8 ≈190–204 GB weights, deployable on 8× H100/H200); open weights Apache 2.0, served model is a chat-tuned derivative.

### Raw benchmarks found

> Every number below is from **Agnes AI's own internal comparison table**, reproduced in a third-party review (we0.ai, 2026-07-15) — company-reported, not independently reproduced leaderboard runs; reference columns in that table are mixed-harness vendor picks. Treat as directional.

Agent / tool use:

- Terminal-Bench 2.1: **62.3%** (Agnes AI internal, via we0.ai review; 2.0 Flash scored 52.5 on the same table)
- Tau3-Banking / Tau2-Bench / GDPval / Claw-Eval / OSWorld: no verified public score found (tool calling documented but unbenchmarked)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index: no verified public score found (Thinking mode exists, zero published reasoning evals)

Coding:

- SWE-bench Verified: **75.6%** (vendor internal; 2.0 Flash 72.4, vendor's 2.5-Pro 82.7)
- SWE-bench Pro: **50.4%** (vendor internal)
- SWE-bench Multilingual: **69.1%** (vendor internal)
- SWE Atlas — Codebase QnA / Refactoring / Test Writing: **36.5% / 29.5% / 27.5%** (vendor internal; largest gains vs 2.0 Flash's 15.8 / 11.4 / 13.8)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context: no MRCR / RULER / GraphWalks retrieval score published (512K window advertised; 1M only on Base weights).

Qualitative third-party evidence (reviewer hands-on, 2026-07): symptom-driven hidden-bug diagnosis in an unfamiliar repo (~3 min), one-file app generation, and a coordinated multi-file two-player game mode refactor (10–20 min) — practitioner tests, not controlled benchmarks.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 62.3% lands just above the methodology's mid band (TB2.1 45–60% → 50–70) and tool calling is first-class in all three API dialects, but no Tau3, GDPval, BFCL or OSWorld number exists for this ID — the missing-evidence penalty holds it under 70.
- **Reasoning: 55/100.** Zero verified GPQA/HLE/LCR/Intelligence-Index scores exist; only proxy evidence (Thinking mode + SWE localization strength) supports the vendor's "improved reasoning" claim, so it sits at the mid-low default until a public reasoning eval appears.
- **Context window: 85/100.** The served 512K window falls in the 500K–1M tier (85–94) and sits at its floor; no retrieval-at-depth measurement, and the 1M figure belongs to the Base checkpoint rather than the endpoint.
- **Multimodal: 62/100.** Image-URL input with documented image understanding puts it in the +image-in tier (60–70); no vision benchmark (MMMU/OCR/Bench) was published, keeping it mid-tier.
- **Coding: 78/100.** SWE-bench Verified 75.6% + SWE-Pro 50.4% + SWE-Multilingual 69.1% + TB2.1 62.3% is a genuine mid-high agentic coding profile with big SWE Atlas gains; it caps below 90 because every number is company-internal (no independent harness) and TB2.1 trails the 85%+ frontier reference.
- **Cost efficiency: 98/100.** The $0.05/$0.15 list price already sits in the ~$0.10/$0.20 ≈ 97–99 band, and the Angel User Trial tier is $0 across input/output/cached with a vendor promise of permanent free Flash — one point off for trial/quota framing instead of a hard $0 list price.
- **Overall Score: 70/100.** (68 + 55 + 85 + 62 + 78) / 5 = 69.6 → 70 — best-fit: a free/ultra-cheap 512K coding-and-agent workhorse for routine dev loops and image-assisted tasks, with reasoning and independent verification still to be proven.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (official API docs, open-weights model card, third-party hands-on review with the vendor benchmark table); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Agnes AI docs — Agnes 2.5 Flash (endpoints, 512K/65.5K limits, pricing, image input)](https://wiki.agnes-ai.com/en/docs/agnes-25-flash)
  - [we0.ai — Agnes-2.5-Flash Review with the internal 7-benchmark table (2026-07-15)](https://we0.ai/articles/agnes-2-5-flash-review-a)
  - [Hugging Face — Agnes-AI/Agnes-2.5-Flash-Base (202B MoE architecture, 1M YaRN, Apache 2.0)](https://huggingface.co/Agnes-AI/Agnes-2.5-Flash-Base)
  - [LLM Explorer — Agnes 2.5 Flash Base (202.4B, 204 GB, 1024K)](https://llm-explorer.com/model/Agnes-AI/Agnes-2.5-Flash-Base)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

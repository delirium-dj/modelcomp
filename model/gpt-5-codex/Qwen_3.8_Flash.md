# GPT-5 Codex — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5-codex`; curated id `opencode/gpt-5-codex`), cross-checked against OpenAI's GPT-5-for-developers post, Artificial Analysis, Azure OpenAI pricing and nexos/pricepertoken teardowns
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Codex (GPT‑5‑Codex)
- **Short description:** OpenAI's first Codex-tuned GPT-5 (Aug 2025) — the GPT-5 reasoning backbone specialized for **agentic, hands-on-keyboard software engineering** (multi-file edits, terminal, long tool loops). Set the early-2025 agentic-coding SOTA bar and was later superseded within the Codex line by GPT-5.1-Codex and GPT-5.1-Codex-Max (distinct entries here).
- **Provider / access:** OpenAI API + Codex (CLI / cloud agent) + ChatGPT Codex surfaces; Azure OpenAI. Reasoning-effort tiers (low/medium/high).
- **Release / knowledge:** 2025-08-07 (GPT-5 line; Codex variant rolled out to Codex immediately after); GPT-5 knowledge cutoff 2025-05-01.
- **IDs:** `openai/gpt-5-codex`; siblings `gpt-5.1-codex`, `gpt-5.1-codex-max`, `gpt-5.1-codex-mini`.
- **Context window:** **400,000 tokens** (per Azure / pricepertoken listings).
- **Modalities:** text/code in / text out in the Codex lane (GPT-5 base is multimodal; the Codex tuning targets agentic coding); reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-20):** **$1.25/M input, $10/M output**, cached input $0.13/M (Azure/pricepertoken); Artificial Analysis blended ~$1.34/1M at a 7:2:1 cache/input/output mix.
- **Architecture:** proprietary; described as a GPT-5 variant post-trained/RL-tuned for agentic coding.

### Raw benchmarks found

> OpenAI self-reported at launch; Artificial Analysis exposes a GPT-5-Codex (High) row. GPT-5 base posts (for context): SWE-bench Verified 74.9%, Aider polyglot 88%.

Coding:

- SWE-bench Verified: **~74.3%** (OpenAI GPT-5-Codex launch figure; then-SOTA for agentic coding)
- Aider polyglot: **~74.5%** (Codex variant) — GPT-5 base reported 88%
- Terminal-Bench: mid-band (early agentic-terminal results well below the 5.1 line's later scores)

Reasoning / knowledge:

- GPT-5-class reasoning backbone; **no GPQA/HLE absolutes re-published specifically for the Codex variant** in launch copy

Agent / tool use:

- Real-time "hands on keyboard" agentic editing, multi-step tool loops, compaction-free long sessions in Codex (qualitative; the capability that defined the launch)

Long context:

- 400K window; **no MRCR/RULER retrieval score published** for this ID.

### Normalized scores (1–100)

- **Tool use: 70/100.** Genuinely agentic for its moment — terminal editing, multi-file tool loops, real-time collaboration — but no published τ-bench/MCP absolutes and it's since been overtaken by the 5.1-Codex line; scored as a capable-but-first-generation agentic coder.
- **Reasoning: 70/100.** Inherits the strong GPT-5 reasoning backbone, yet the Codex specialization (and the absence of general-knowledge benchmark rows for this exact variant) keeps pure-reasoning breadth mid-band.
- **Context window: 82/100.** 400K is a top-tier working window (before compaction-based multi-window tricks arrived in 5.1-Codex-Max); no long-context retrieval score published, so it's strong rather than proven-maximal.
- **Multimodal: 30/100.** Shipped as a code/text agentic lane; the general GPT-5 is multimodal but Codex tuning is not vision/omni-first, so it clears the text-only floor without claiming broad modality.
- **Coding: 80/100.** Its headline — ~74.3% SWE-bench Verified + ~74.5% Aider polyglot set the Aug-2025 agentic-coding SOTA — but "Verified 77.9%" and Terminal-Bench 58.1% from its own successor, plus Qwen/Gemini-class peers, place it a notch below today's frontier coding tier.
- **Cost efficiency: 56/100.** $1.25/$10 per 1M is premium (only cached input at $0.13 softens it); strong per-task value for serious engineering, but not a budget coding tier.
- **Overall Score: 66.4/100.** Half-up mean of the five quality dims (70+70+82+30+80)/5 = 66.4. Best fit: production agentic software engineering on the OpenAI/Codex stack circa late-2025; today it's the value/legacy lane of the Codex family, bracketed above by GPT-5.1-Codex-Max (long-horizon) and below by Codex-Mini (cheap).

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — OpenAI "Introducing GPT-5 for developers" (SWE-bench 74.9% / Aider 88% base, GPT-5-Codex agentic tuning), Artificial Analysis GPT-5-Codex (High) comparison rows, Azure OpenAI + pricepertoken pricing (400K, $1.25/$10, cached $0.13), and nexos benchmark analysis. Scores are normalized 1–100 interpretations, not official vendor scores; variant-specific gaps are flagged rather than filled with sibling-model numbers.
- Revisit trigger: any re-publication of Codex-variant general-reasoning absolutes, or an Artificial Analysis single-number row for `gpt-5-codex`.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4.5.md`, using the same headings.

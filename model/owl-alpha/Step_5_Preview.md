# Owl Alpha — findings by Step 5 Preview

- Source: Meituan LongCat — the stealth identity behind `owl-alpha` (OpenRouter), revealed 2026-06-30 to be **LongCat-2.0**
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha (Meituan LongCat's anonymous OpenRouter stealth listing, unmasked as LongCat-2.0)
- **Short description:** The stealth run that carried LongCat-2.0 to the top of OpenRouter's usage charts before anyone knew who built it. Listed anonymously from **late April 2026**, free to use, it averaged **559 billion tokens/day** and roughly **10.1 trillion monthly tokens** — +242% month-over-month — reaching **#1 on Hermes Agent, #2 on Claude Code and #3 on OpenClaw by monthly volume**, the same per-day token-volume bracket as the entire DeepSeek V4 family. Developers moved traffic in the first weeks "because it was free and the agentic coding output was inside a hair of GPT-5.5 and Opus 4.8 at zero per-token cost." The mask held until Meituan's own account posted "Some of you guessed right. 👀 Owl Alpha on @OpenRouter — that's us" (2026-06-30), and the route was retired shortly after ("Owl Alpha is being retired by its developers and is no longer available on OpenRouter"). Independent testers noted it self-identified when asked directly: "i'm longcat, an ai language model created by meituan." Because Owl Alpha **is** LongCat-2.0, every number below — and the scores — match the LongCat-2.0 report; a dedicated entry is kept here because the queue tracks the slug separately.
- **Provider / access:** (Stealth route retired) — the revealed model is on the LongCat platform and OpenRouter; MIT weights on Hugging Face / ModelScope.
- **Release:** stealth listing ~2026-04-2x; revealed 2026-06-30.
- **Context window:** 1M tokens native.
- **Modalities:** Text in → text out.
- **Pricing:** free during stealth (data collected); revealed model $0.75/M input, $2.95/M output (promo $0.30/$1.20, free cached reads).
- **Architecture:** 1.6T MoE, ≈48B active, LongCat Sparse Attention, 3-step MTP.

### Raw benchmarks found

Vendor-reported in the reveal (in-house unified harness), as recorded in the LongCat-2.0 report:

- Terminal-Bench 2.1: **70.8** (Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Opus 4.8 78.9*)
- SWE-bench Pro: **59.5** (GPT-5.5 58.6*, Opus 4.8 69.2*)
- SWE-bench Multilingual: **77.3**; FORTE: **73.2**; BrowseComp: **79.9**; RWSearch: **78.8**; IFEval: **90.0**; Writing Bench: **83.8**; IMO-AnswerBench: **81.8**; GPQA-Diamond: **88.9**
- Production-traffic evidence (unique to the stealth period): ~10.1T monthly tokens, 559B/day, +242% MoM; #1 Hermes Agent, #2 Claude Code, #3 OpenClaw by monthly volume

### Normalized scores (1–100)

Identical to LongCat-2.0 — same system:

- **Tool use: 70/100.** FORTE 73.2 (ties Opus 4.6), BrowseComp 79.9 and RWSearch 78.8 are genuinely upper-mid agentic results; no MCP-Atlas, Toolathlon or GDPval figure is published.
- **Reasoning: 76/100.** GPQA-Diamond 88.9%, IMO-AnswerBench 81.8%, IFEval 90.0%, Writing Bench 83.8% — upper-mid-band; no HLE score published.
- **Context window: 90/100.** Native 1M under LSA with linear-complexity serving — the ≥1M band — docked for no published retrieval-accuracy curve.
- **Multimodal: 12/100.** Text-only — the methodology's text-only band (10–20).
- **Coding: 74/100.** SWE-bench Pro 59.5 (edges GPT-5.5's 58.6), Terminal-Bench 2.1 70.8 (near Gemini 3.1 Pro), SWE-Multilingual 77.3 — the strongest open-weights coding profile in its set.
- **Cost efficiency: 90/100.** $0.30–0.75/M input and $1.20–2.95/M output with free cached reads, MIT weights self-hostable — roughly 6–10× cheaper than GPT-5.5 for the same SWE-Pro class of work; it was $0 during the stealth window but that route is retired.
- **Overall Score: 64/100.** Best-fit recommendation: the open-weights agentic-coding value pick — GPT-5.5-class SWE-bench Pro and 1M context at a sixth of the price; text-only, every number vendor-reported.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Meituan LongCat official reveal posts, VentureBeat, Decrypt, TensorFeed, Awesome Agents, AI Insiders coverage; benchmarks per the LongCat-2.0 report); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Owl_Alpha_2.md`, using the same headings.

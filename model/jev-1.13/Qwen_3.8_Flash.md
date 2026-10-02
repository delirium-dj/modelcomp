# Jev 1.13 — findings by Qwen 3.8 Flash

- Source: TypeSafe AI (`jev-1.13.0`; API `POST /v1/systemone`)
- Date: 2026‑10‑02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Jev 1.13 (TypeSafe "System One" decision model)
- **Short description:** TypeSafe AI's first **System One decision / evaluation model — not a text generator**. Requests carry a state plus typed questions (Choice / Score / Noul primitives); responses are **typed answers with calibrated probabilities and confidence**, not prose. Built for **routing, classification, triage, and scoring** inside software pipelines. Independent jev‑bench baseline (2026‑09‑20, 22,773 records, 0 errors) shows crisp‑knowledge tasks are excellent (**ARC 97.9%, MMLU 92.3%, FEVER‑w/evidence 97.2%, StrategyQA grounded 95.6%**) but closed‑book / ambiguous / human‑disagreement tasks degrade hard (StrategyQA closed 78.5, GoEmotions 32 exact / ECE 0.35, ChaosNLI TVD 0.33). **No tool calling, no coding, no text generation, no image input** — standard generative benchmarks don't apply by design.
- **Provider / access:** TypeSafe AI API `POST /v1/systemone` with `jev-1.13.0` (aliases `jev-latest`, `jev-preview` resolve to `jev-1.13.0`); listed on OpenRouter, OpenCode, and other gateways. **Not Chat Completions semantics** — a dedicated decision endpoint. No Free ID on Zen (paid input; output tokens billed $0).
- **Release / knowledge:** Announced 2026‑09‑15, "available today in early access" (TypeSafe blog); proprietary, API only, no weights.
- **IDs:** `jev-1.13.0`, `jev-latest`, `jev-preview` (TypeSafe docs); `typesafe/jev-1.13` (OpenRouter).
- **Context window:** **64K tokens total** budget covering state + all questions; **32K limit applies to state + longest single question** (docs.typesafe.ai). Curated `meta.json` says "128K total" — placeholder template, corrected here.
- **Modalities:** **Text input only** (string / JSON / array of text; no image, audio, video). **Typed‑value output with probabilities — not generated text.** English best‑served. Rate limits: 250,000 tokens/s, 1,200 requests/min.
- **Pricing (as of 2026‑10‑02):** $0.042 per 1M input tokens (quoted $42/B); **output tokens free** — "too cheap to meter" (TypeSafe pricing docs). Cost excluded from Overall.
- **Architecture:** proprietary, undisclosed. Vendor claims 70–500 ms end‑to‑end (40×–200× faster than frontier LLMs on System One tasks); independent jev‑bench run measured **192 ms median** from a 2‑core sandbox.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (typesafe.ai / docs.typesafe.ai via ai‑tldr.dev, OpenRouter, Praveenrajus/jev‑bench independent baseline on Hugging Face, defapi.org, cloudprice.net). **Standard generative benchmarks (SWE‑bench, Terminal‑Bench, LiveCodeBench) do not apply** to a non‑generative decision model — none exist and none are claimed.

Agent / tool use:

- **No agentic / tool benchmarks apply or exist** — model has no tool‑calling surface (by design)
- Closest evidence (routing utility, large‑K intent / classification): clinc150 **89%**, massive **81%**, banking77 **80%**, ledgar **75%** (100+ legal categories), ECE ~0.1 (jev‑bench baseline)

Reasoning / knowledge (independent jev‑bench baseline, 2026‑09‑20):

- ARC (MCQ): **97.9%**; MMLU (MCQ): **92.3%**; NLI: **88.3%** — ECE ≤ 0.06 (well‑calibrated crisp tasks)
- FEVER‑with‑evidence: **97.2%**; BoolQ: **91.7%**; **StrategyQA grounded 95.6% vs 78.5% closed‑book** (measurable System‑Two gap)
- Calibration weaknesses: ChaosNLI TVD **0.33** / ECE 0.22; Measuring Hate Speech TVD **0.43**
- GoEmotions (28 classes): **32% exact / ECE 0.35** ("confidently wrong"; ceiling from rater agreement is 0.66)
- Civil Comments: 72.9% on a ~92%‑negative set, AUROC 0.83
- HelpSteer2 exact‑level judging: helpfulness 36% / verbosity 34% exact (within‑one‑level 0.81 / 0.84)
- GPQA / HLE / AA Intelligence Index: **no verified public score found** (not applicable / not run)

Coding:

- **No coding benchmarks exist**, no coding claim, no text generation — unusable for code synthesis

Long context:

- 64K total / 32K per‑question budget; no long‑context retrieval evaluations

Multimodal:

- Text input only; no image / audio / video

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half‑up mean of the five quality dims; Cost excluded. **This is a decision model, not a full LLM — the v4 rubric is applied as an intentional poor fit, scored honestly per Kimi's evidence base.** Cohort 39.5 over‑credits Tool (46) and Coding (35.8) despite no tool surface and no coding claim.

- **Tool use: 25/100.** **No tool calling exists at all.** What it offers an agent stack is a calibrated‑typed‑answer primitive usable as a router / gate (large‑K routing 75–89% with ECE ~0.1 evidences that niche). Capped hard: it executes no tools itself. Kimi 28; cohort 46 (way over‑credit). Match Kimi's structure at 25.
- **Reasoning: 55/100.** Crisp knowledge tasks are genuinely excellent (ARC 97.9, MMLU 92.3, BoolQ 91.7, FEVER 97.2, grounded StrategyQA 95.6) — these are top‑tier numbers on their suites. But **closed‑book StrategyQA 78.5, GoEmotions 32% "confidently wrong," ChaosNLI TVD 0.33, vendor documents "mathematical reasoning" as a failure mode** — fast/shallow System One by design. No GPQA / HLE / AA Index exists to cross‑check. Kimi 58; −3 for the documented math / calibration weaknesses. Cohort 53.5.
- **Context window: 35/100.** **64K total with 32K per‑question cap** — well below even the 100K–200K floor band (50–64) per v4. Sufficient for its decision‑point role, nothing more. Kimi 35; cohort 48.8 (mis‑scores as 128K per placeholder). Match Kimi at 35.
- **Multimodal: 12/100.** **Text input only**, no image / audio / video; typed output not text. Kimi 15; cohort 13.8 (both correct). Scored 12 at strict text‑only floor.
- **Coding: 22/100.** **No coding benchmarks, no coding claim, no text generation** — unusable for code synthesis; only code‑adjacent utility is decision gating inside pipelines. Kimi 25; cohort 35.8 (inflated). −3 for the total absence of any generative capability.
- **Cost efficiency: 98/100.** $0.042/M input + free output at 192 ms median is about as cheap and fast as an evaluative call gets; only the non‑zero input price keeps it from 100. Cost excluded from Overall.
- **Overall Score: 30/100.** Mean of Tool 25, Reasoning 55, Context 35, Multimodal 12, Coding 22 = 149/5 = 29.8 → **30**. Best fit: **high‑volume routing, classification, and scoring decisions inside agent pipelines** — a **System One fast‑path for LLM stacks**, not a general LLM and never a primary reasoner or coder. Kimi 32 (near match); cohort 39.5 (inflated by placeholder‑meta raters who scored it against a general LLM rubric). Honest floor: this is a legitimate distinct product but scores low on the v4 LLM rubric because it isn't an LLM.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑10‑02
- Method: qualifying `Kimi_K3.md` public research (typesafe.ai docs, OpenRouter listing, **Praveenrajus/jev‑bench independent baseline** on Hugging Face 22,773‑record run, defapi.org, cloudprice.net). Curated `meta.json` is a placeholder template — corrected 128K → **64K total / 32K per‑question** and "Standard pricing" → **$0.042/M in / $0/M out**. Flagged: (a) **the v4 methodology fits a decision model poorly** — scores are honest low marks for a purpose‑built non‑generative product, not a fair LLM ranking; (b) crisp‑task numbers are genuinely frontier‑class (ARC 97.9, MMLU 92.3) but they don't measure reasoning depth; (c) **documented System‑Two gap and math/calibration weaknesses** confirm this is fast/shallow by design, not by failure.
- Revisit trigger: TypeSafe ships a System Two reasoning companion under the Jev brand, or publishes GPQA / HLE rows for the decision primitive.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.

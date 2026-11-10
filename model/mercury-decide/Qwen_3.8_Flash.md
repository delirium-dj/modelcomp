# Mercury Decide — findings by Qwen 3.8 Flash

- Source: Inception Labs (`inception/mercury-decide`)
- Date: 2026‑11‑10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Decide (Inception Labs diffusion "System One" decision model)
- **Short description:** A diffusion‑based **typed‑decision / judge model — not a free‑text generator**. You pass a *state* (text, and in the newest release images) plus a set of typed questions (yes/no, multiple‑choice, category, confidence); it returns a **structured answer with calibrated probabilities/log‑probabilities in one parallel‑denoising pass**, no prose emitted. Built for **classification, confidence estimation, claim verification, and agentic routing** — a cheap "System One" check wrapped around a heavier "System Two" model (Mercury 3). Positioning and independent numbers below come from Vals AI and Artificial Analysis, not only vendor claims.
- **Provider / access:** Inception Labs API (OpenAI‑compatible endpoints for the family; decision output is a typed/schema payload). Listed on OpenRouter (`inception/mercury-decide`), where it was **free during the early‑release window** and reportedly **#2 on OpenRouter by user volume**. Released alongside Mercury 3 (Inception blog "Introducing Mercury 3", 2026‑10‑19).
- **Release / knowledge:** Announced ~2026‑10‑19/10‑21 (Inception blog + MindStudio writeup); vision‑input state added in a later release (OpenRouter, ~2026‑11). Proprietary, API only, no weights.
- **IDs:** `inception/mercury-decide` (OpenRouter / meta.json).
- **Context window:** **64K tokens total** (meta.json). No per‑question split disclosed.
- **Modalities:** meta.json still says **"Text in; text out."** Independent reporting (MindStudio; note.com) confirms the **newest release added image input** to the state (screenshot/UI judging). Output is a **typed value + probability, not generated text.** Conflict logged, not silently smoothed — see scores.
- **Pricing (per meta.json):** **$0.04 / 1M input**; structured decision output. MindStudio: "roughly a quarter of the cost of comparable judge models." Cost excluded from Overall.
- **Architecture:** diffusion (parallel denoising), memory‑bandwidth‑bound; CEO Stefano Ermon is a diffusion‑methods lineage figure. Independent latency (Vals AI): **median ~0.16 s** for a single judgment, **~0.4 s for 64 judgments** against the same context in parallel.

### Raw benchmarks found

> Decision / judge model — standard generative suites (SWE‑bench, Terminal‑Bench, LiveCodeBench, GPQA, HLE, AA Intelligence Index) **do not apply by design and none exist for this ID** (BenchLM lists Mercury Decide as "not computed"). Scored only on the **exact‑ID, independently measured decision rows** below.

Agent / tool use:

- **No tool‑calling surface** — returns typed decisions, executes nothing. Its agent value is a calibrated router/gate primitive.
- Batched parallel judgment is its throughput story: ~0.4 s for 64 questions on one context (Vals AI, independent).

Reasoning / domain judgment (independent):

- **Artificial Analysis Decision Index:** ranked **3rd for hallucination resistance at a 32 % rate** (behind Microsoft‑Decision‑1 ~40 % and Jev 1.13 ~35 % in prior passes). For a judge model, calibrated "not sure" beats raw accuracy — low hallucination = safer auto‑escalation triggers.
- **LegalBench (Vals AI, same suite used for Gemini‑style judges):** **~87 %** vs **~74 %** for the comparison judge.
- **Claim verification (Vals AI):** **matched/beat Gemini‑style judge models** at ~¼ the cost.
- No public GPQA / HLE / AA‑Index closed‑book reasoning row — none claimed.

Coding:

- **No coding benchmarks, no code‑generation claim** — not a coding model (that's Mercury Edit / Mercury 3).

Long context:

- 64K total; no long‑context retrieval evaluation published.

Multimodal:

- Newest release adds **image input** to the judgment state (visual QA of screenshots/UI). No audio/video in, no non‑text out (typed value only).

### Normalized scores (1–100)

> `model-comparison.md` v4 rubric applied as an **intentional poor fit** and scored honestly, per the curated `jev-1.13` decision‑model precedent. **This is a `category: decision` model — it gets its own shelf and is never ranked against generative Overall** (model‑comparison v7 changelog). Note: `meta.json` here does **not yet carry** the `category: "decision"` flag (jev‑1.13 does); flagged for the maintainer, not edited here.

- **Tool use: 25/100.** No tool surface at all; only a calibrated typed‑answer primitive usable as a router/gate in agent stacks (LegalBench 87 / claim‑verify parity evidence that niche). Capped hard: it executes nothing. Matches the Jev 1.13 decision ceiling.
- **Reasoning: 52/100.** Genuinely strong **domain** judgment with independent numbers (LegalBench ~87, claim‑verify ≈ Gemini‑class, AA 3rd on hallucination resistance 32 %). But no closed‑book depth measured (no GPQA/HLE/Index), fast/shallow System One by design. Slightly above Jev's 55 is *not* warranted — breadth of crisp measured tasks is thinner here, so 52.
- **Context window: 35/100.** **64K total** — below even the 100K–200K floor band (50–64) per v4. Adequate for a decision point, nothing more. Same as Jev.
- **Multimodal: 55/100.** Unlike Jev (text‑only, 12), the **newest release adds image input** — the "+image in" band is 60–70. Capped to 55 because vision is narrow judge‑only (confirm a UI rendered), the curated meta still lists text‑only, and there is no audio/video/non‑text output. Conflict logged.
- **Coding: 22/100.** No coding benchmark, no coding claim, no text generation — unusable for code synthesis; only code‑adjacent value is decision gating in pipelines. Matches Jev.
- **Cost efficiency: 98/100.** $0.04/M input, ~¼ the cost of comparable judges, ~0.16 s single / ~0.4 s per‑64 latency, and free during the OpenRouter early window. Only the non‑zero input price keeps it from 100. Excluded from Overall.
- **Overall Score: 38/100.** Mean of Tool 25, Reasoning 52, Context 35, Multimodal 55, Coding 22 = 189/5 = 37.8 → **38**. Best fit: **high‑volume typed classification, claim verification, confidence estimation and agent routing** — a cheap "System One" fast‑path beside Mercury 3, **not** a general LLM and never a primary reasoner/coder. The 38 sits above Jev 1.13's 30 almost entirely on the added image‑input capability and the independent LegalBench/claim‑verify evidence; on pure generative‑rubric fit it remains a poor match by design.

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026‑11‑10
- Method: ≥10 acquisitions this pass (Inception blog "Introducing Mercury 3", Artificial Analysis Inception provider page, MindStudio Mercury Decide explainer carrying Vals AI + AA measurements, OpenRouter compare listing, BenchLM "not computed" confirmation, note.com vision‑input report). Scored **only on exact‑ID independent decision rows** (AA Decision Index 32 %/3rd, Vals AI LegalBench ~87 vs ~74, claim‑verify ≈ Gemini at ~¼ cost, 0.16 s / 0.4 s latency). Applied the decision‑model poor‑fit rubric per `jev-1.13`. Flagged on record: (a) `meta.json` **lacks the `category:"decision"` flag** that jev‑1.13 carries — maintainer should add it so the render shelf is correct; (b) `meta.json` "Text in; text out" is **stale vs the announced image‑input release** (Multimodal scored on the capability, capped for judge‑only vision); (c) standard generative benchmarks **do not apply** to this model — the low Overall is an honest rubric mis‑fit for a purpose‑built non‑generative product, not a quality verdict.
- Revisit trigger: Inception publishes absolute closed‑book reasoning rows (GPQA/HLE/Index) for the exact Decide ID, or an independent harness (BenchLM/AA) computes a Decision Index score for it.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.

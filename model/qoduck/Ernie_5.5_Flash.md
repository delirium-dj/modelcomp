# Qoduck — findings by Ernie 5.5 Flash

- Source: Alibaba Qoder — Qoduck (stealth) (`qoduck`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qoduck (stealth — identity undisclosed)
- **Short description:** An anonymous stealth coding model served through Alibaba's Qoder platform (launched 2026-11-07), free for individual users on a daily allowance, with a claimed 1M-token context. Origin, weights and benchmarks are not published; Qoder's own docs state the identity "has yet to be disclosed."
- **Provider / access:** Qoder International (`qoduck`), free daily allowance for individual accounts from 2026-11-07 for a limited time (Teams/Enterprise ineligible, desktop International only). No public API ID or per-token price; gateway model id `qoder/lmodel`.
- **Release / knowledge:** 2026-11-07 (Qoder stealth listing); knowledge cutoff not published.
- **IDs:** `qoduck`, `qoder/lmodel` (gateway), `qoder/qoduck` (no vendor ID published).
- **Context window:** 1,000,000 tokens claimed by testers/coverage; not confirmed in any vendor document.
- **Modalities:** not published; treated as text in/out for a coding model (unverified).
- **Pricing (as of 2026-11-13):** free within a daily quota for individual Qoder users; no paid per-token rate published.
- **Architecture:** undisclosed (stealth). The circulating "Qwen4-27B" hypothesis rests on a 35 GB byte count and is not supported by Qwen's n-gram ratio (orcarouter analysis); tokenizer analysis points to the Qwen family. Treat as an unconfirmed rumour, not an identity.

### Raw benchmarks found

> First independent measured rows: ModelDial's private coding/reasoning evaluation (xhigh effort, snapshot 2026-11-11/13). No vendor benchmark table exists.

Agent / tool use:

- Terminal-Bench / Tau2 / Claw-Eval / Toolathon / GDPval: no verified public score found

Reasoning / knowledge:

- ModelDial Knowledge & reasoning dimension: **85/100** (xhigh)

Coding:

- ModelDial overall (coding composite): **75.65** at xhigh (rank 22/57 models) — backend engineering **70**, frontend interaction **80**, visual aesthetics **64**, maintainability **55**
- SWE-bench / LiveCodeBench: no verified public score found

Long context:

- 1M claimed; no MRCR / RULER / GraphWalks row published.

### Normalized scores (1–100)

- **Tool use: 55/100.** No agentic benchmark row (TB2.1/Tau2/Claw) exists; the only measured evidence is a private coding eval. The score reflects absence of evidence.
- **Reasoning: 70/100.** ModelDial's knowledge & reasoning dimension is 85/100 at xhigh — strong for an unlabelled stealth model, but it is a single private composite, not a public benchmark.
- **Context window: 88/100.** 1M claimed (unverified by any vendor document) — tier ≥1M on the claim; no retrieval figure published, so it stays below verified 1M models.
- **Multimodal: 40/100.** Not published; treated as text-only (unverified).
- **Coding: 75/100.** ModelDial overall 75.65 at xhigh (rank 22/57) with frontend 80 / backend 70 — solid mid-tier coding evidence, but a single private eval; maintainability 55 is the weak sub-score.
- **Cost efficiency: 100/100.** Free within the daily allowance for individuals during the promo.
- **Overall Score: 65.6/100.** Best fit for free high-volume coding experiments inside Qoder while the stealth promo runs; the single private-eval evidence base and undisclosed identity keep it mid-band. Per the revealed-stealth rule, this folder should be merged into the revealed model's folder once Qoder names it — never scored permanently under the stealth name.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (ModelDial private coding evaluation record, Qoder stealth-listing docs, runtimewire/stealthmodels coverage, orcarouter leak analysis, BenchLM/models.dev checks); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QoDuck — ModelDial (measured coding evaluation, xhigh)](https://modeldial.com/en/models/qoder/lmodel)
  - [Qoduck free for a limited time — Qoder docs](https://docs.qoder.com/events/qoduck-free)
  - [Alibaba gives Qoder users a free daily allowance for mystery model Qoduck — RuntimeWire](https://runtimewire.com/article/alibaba-qoder-qoduck-qwen-4-stealth-test)
  - [Qoduck leak analysis — orcarouter](https://www.orcarouter.ai/blog/qoduck-qwen4-27b-leak)
- Future sources: if Qoder reveals the model, merge this folder into the revealed slug per the revealed-stealth rule; do not score it under the stealth name.
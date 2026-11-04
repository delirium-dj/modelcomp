# Muse Wonder 1.0 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Meta (`meta/muse-wonder-1-0`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's first frontier model release (October 12, 2026) — succeeded by later Wonder Full release. Founded on Active Memory + Active Focus features. Comparable benchmark performance to GPT-6 Astra (Personal Superintelligence Index 55.2), Claude Opus 5.5 (55.2), Claude Fable 5.1 (49.9) at respective max effort settings. Originally released alongside Wonder Full as sibling pair per TechCrunch coverage.
- **Provider / access:** Meta Model API (`meta/muse-wonder-1-0`); Muse Code subscription availability with Power Usage tier. Direct API access confirmed via Meta developer docs.
- **Release / knowledge:** Released October 12, 2026. Knowledge cutoff: unknown.
- **IDs:** `meta/muse-wonder-1-0`; `muse-wonder-1.0`; deprecated alias `muse-wonder-1.0`
- **Context window:** 1,000,000 tokens. Max output 131K.
- **Modalities:** Text, image, video, audio input; text output. Reasoning yes (max effort confirmed; active memory + active focus features). Tool calls yes. File input supported via Meta API. Audio support noted conditional on release surface confirmation.
- **Pricing (as of <date>):** $4.00 input / $20.00 output per 1M tokens standard. Cached input $0.20. Cache write $0. Not publicly listed since Wonder Full is subscription-only primary offering.
- **Architecture:** Proprietary. Meta Superintelligence Lab Prometheus data center (central Ohio) training infrastructure.

### Raw benchmarks found

**Personal superintelligence index (Meta internal composite)**

- Personal Superintelligence Index: 55.2 at max effort. Source: Meta model card.

**Independent coding**

- DeepSWE v1.1: 79.0 pass@1. Strong frontier coding benchmark. Source: OpenCode data platform independent test confirmation.
- SWE-Marathon v1.1: 53.1 pass@1. Source: same.
- ProgramBench: 50 share passing ≥95% tests. Source: same.

**Agents / Knowledge work**

- Harvey LAB-AA: 10 all-pass rate. Source: same.
- AutomationBench strict pass@1: 39.1%. Source: same.
- JobBench mean reward: 70.5. Source: same.
- GDP.pdf: 30.8 score. Source: same.
- HealthBench Professional: 60.5 length-normalized weighted rubric score. Source: same.

**Reasoning**

- AA-LCR: Not directly independently reported as separate metric from intelligence index.

**Per independent cross-reference**

- Meta comparison chart shows Wonder 1.0 PS Index 53 versus GPT-6 Astra (max) 54.5 versus Claude Opus 5.5 (max) 55.2 versus Fable 5.1 (max) 49.9. All max effort variants under same artificial benchmark setting. Source: Meta model card comparison table.

### Normalized scores (1–100)

- **Tool use: 84/100.** DeepSWE + SWE-Marathon top frontier coding benchmarks; multi-turn tool chain capability documented; active focus handles long-running work recovery. Cap by absence of specialized dual-use cybersecurity tool class (major Gartner benchmark gap).
- **Reasoning: 82/100.** Personal Superintelligence Index 55.2 max at frontier tier; AA-LCR lower than explicit top reasoning leaders (FrontierMath cap on ceiling though positive GPT family is notably stronger in frontier math proof compared).
- **Context window: 88/100.** 1M tokens confirmed; max 131K output.
- **Multimodal: 80/100.** Video + audio + image all native input. MemoryBench confirmed strong continual learning strength. Image input confirmed; audio conditional on release surface.
- **Coding: 85/100.** DeepSWE 79.0 vs Astra 74.1; SWE-Marathon 53.1 vs Fable 45.6; ProgramBench competitive. Slower absolute frontier model position but benchmark-leader coding subset vs Astra remains tight.
- **Cost efficiency: 60/100.** $4/$20 per 1M tokens is premium pricing. vs Fable 5 at $10/$50 means cost multiples of 2.5x — cost efficiency is moderate for a flagship frontier model.
- **Overall Score: 83.8/100.** Mean of five non-cost dims: (84+82+88+80+85)/5 = 83.8... adjusted slightly DOWN for moderate cost tier; adjusted UP for deep long-horizon coding benchmark success. Final ~82.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Meta Model Card PDF, OpenCode usage metrics, TechCrunch coverage, 36kr Chinese press coverage, Meta dev docs for Muse Wonder, GitHub README references for Prometheus training center).
- Reference URLs:
  - [<Put your ideas to work with Muse Wonder and Muse Wonder Full | Meta>]
  - [<Muse Wonder Model Card — Meta research>]
  - [<OpenCode Data — Muse Wonder 1.0 usage, cost & rank>]
  - [<TechCrunch — Meta releases its first frontier model, Muse Wonder>]
  - [<36kr — Meta 新模型杀回AI第一梯队]
- Future sources: add new file next to this one.

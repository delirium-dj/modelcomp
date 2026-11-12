# Muse Ember — findings by MiMo 2.6 Flash

- Source: Meta (`muse-ember-1`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember
- **Short description:** Meta's smallest, most cost-efficient Muse-family model (Nov 2026) — a lightweight explicit-reasoning execution model for the high-volume parts of agent runs: tool calls, coding subtasks, routing, extraction and long-document parsing, with 1M context.
- **Provider / access:** Meta Model API (`muse-ember-1`); Vercel AI Gateway `meta/muse-ember` (chat, implicit prompt caching); also on Artificial Analysis. Chat Completions-style chat API with tool calling and structured outputs.
- **Release / knowledge:** released 2026-11-09 (Meta research launch post; TechCrunch same day); knowledge cutoff not announced.
- **IDs:** `muse-ember-1` (Meta Model API), `meta/muse-ember` (Vercel AI Gateway); no OpenCode Zen Free ID found.
- **Context window:** 1,048,576 tokens (1M) total; max output 1,048,576 per Vercel listing (unverified against Meta docs).
- **Modalities:** text, image, document in; text out; explicit reasoning mode yes; tool calls yes; structured outputs yes; audio/video in not supported.
- **Pricing (as of 2026-11-12):** $0.10 / 1M input, $0.50 / 1M output (Vercel AI Gateway list price; Meta's own rate card not independently verified) — paid only, no free tier found.
- **Architecture:** proprietary Meta Superintelligence Lab model (parameters not disclosed).

### Raw benchmarks found

> Meta launch-post rows are self-reported (2026-11-09); AA rows are Artificial Analysis runs unless noted.

Agent / tool use:

- Terminal-Bench 4.0: **40.9%** (Meta launch post; AA leaderboard carries the same figure)
- AA AutomationBench: **68.1%** (Artificial Analysis independent run); AutomationBench strict: **37.8%** (Meta)
- OSWorld 2.1: **69.5%** mean partial reward (Meta); strict binary success **33.8%** at max reasoning effort (Meta)
- Agents' Last Exam (Linux): **61.6%** (Meta)
- GDP.pdf (GDPval-AA proxy): **22.8%** (Meta)
- AA Briefcase: **1521 Elo** (upstream AA leaderboard)
- Tau3 / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **36** (Meta launch post)
- MLCR-AA: **18.3%** (AA leaderboard)
- AA-Omniscience accuracy / hallucination rate: **21.1% / 17.4%** (AA)
- GPQA Diamond / HLE / LCR: no verified public score found

Coding:

- FrontierCode 2.0: **27.2%** (Meta launch post)
- SWE-bench Verified / LiveCodeBench / DeepSWE: no verified public score found

Multimodal:

- PerceptionBench (with tools): **80.6%** (Meta launch post)
- MMMU / video benchmarks: no verified public score found (text + image input only)

Long context:

- MRCR / RULER: no long-context retrieval reported (1M window advertised)

### Normalized scores (1–100)

- **Tool use: 78/100.** AA AutomationBench 68.1% (independent), OSWorld 2.1 69.5% partial, Agents' Last Exam 61.6% and Briefcase 1521 Elo are solid mid-tier execution numbers for a lightweight model; Terminal-Bench 4.0 40.9% and no Tau3/Claw rows keep it well below frontier 90+.
- **Reasoning: 66/100.** Intelligence Index 36 sits just above the mid band (20–35 → 55–65), MLCR-AA 18.3% and Omniscience 21.1%/17.4% hallucination are weak, and no GPQA/HLE row exists — reasoning is explicitly not this model's job.
- **Context window: 95/100.** 1,048,576 total matches the ≥1M tier (95–100); no measured long-context retrieval evidence, so the low end applies.
- **Multimodal: 68/100.** Text + image + document in with text out lands in the +image tier (60–70); no video/audio input, and PerceptionBench 80.6% (tools) is the only vision row — the ceiling of that tier.
- **Coding: 71/100.** FrontierCode 2.0 27.2% is a hard-harness number and the model targets repeated coding subtasks, but no SWE-bench / LiveCodeBench / DeepSWE row exists for this ID, capping the score in the low 70s.
- **Cost efficiency: 96/100.** $0.10/$0.50 per 1M matches the ~$0.10/$0.20 ≈ 97–99 reference on input with only a mildly higher output price — a Haiku/Luna-class execution price point.
- **Overall Score: 76/100.** (78 + 66 + 95 + 68 + 71) / 5 = 75.6 → 76 — best-fit: a cheap, fast sub-agent worker for high-volume tool calls and bounded coding tasks inside a larger Muse Spark / Wonder workflow.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (vendor launch post, gateway listings, benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta Research — Introducing Our Smallest, Most Efficient Model: Muse Ember](https://research.meta.ai/blog/muse-ember)
  - [BenchLM — Muse Ember benchmarks & pricing](https://benchlm.ai/models/muse-ember)
  - [Artificial Analysis — Muse Ember (Max)](https://artificialanalysis.ai/models/muse-ember)
  - [Vercel AI Gateway — Muse Ember](https://vercel.com/ai-gateway/models/muse-ember)
  - [TechCrunch — Meta releases Muse Ember (2026-11-09)](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/)
  - [Simon Willison — Muse Ember](https://simonwillison.net/2026/Nov/10/muse-ember/)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

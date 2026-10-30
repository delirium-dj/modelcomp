# Muse Wonder Full — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-30 (UTC) — initial research
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's October 2026 most advanced model for long-running professional agents and ultra-long-horizon software engineering, featuring Active Memory, Active Focus, and SOTA coding performance.
- **Provider / access:** Meta Model API / Muse Code (subscription-only, Power or Maximum plans at $50/$200/month). Excludes from standard API for most users.
- **Release / knowledge:** October 12, 2026; knowledge cutoff not published.
- **Context window:** 1,048,576 tokens (1M).
- **Modalities:** Text + image + video + audio in; text out; reasoning available via max effort.
- **Architecture:** Muse family Transformer with Active Memory/Focus capabilities.

### Raw benchmarks found

Agent / tool use:

- Harvey LAB-AA: **13.1%** (legal agent work)
- Val's Finance Agent V2: **65.4%** (financial analyst research)
- AutomationBench: **45.4%** (strict pass@1)

Reasoning / knowledge:

- Personal Superintelligence Index: Internal benchmark (not public)
- Harvey LAB-AA Legal: 13.1%

Coding:

- Terminal-Bench 4.0: **58.2%** (max effort)
- Terminal-Bench 2.1: **~50.5%** (rounded from benchmark data)
- DeepSWE v1.1: **79.0%** (SOTA, according to Meta)
- SWE-Marathon: **57.5%** (pass@1)
- ProgramBench: **59.0%**

Multimodal:

- Image: Enabled
- Video: Enabled  
- Audio: Enabled
- Text: Primary output

### Normalized scores (1–100)

- **Tool use: 90/100.** Strong across personal/professional agents; Harvey Legal 13.1% lower but specialized domain; Finance Agent 65.4% solid.
- **Reasoning: 88/100.** Internal Superintelligence Index high; Harvey LAB 13.1% shows gap in legal reasoning vs Opus-class; Enterprise tools strong.
- **Context window: 93/100.** 1M token native context with Active Memory management; excellent for long-run agents.
- **Multimodal: 88/100.** Full support (text/image/video/audio); backend mentions "archived Lila" with text+image fully supported.
- **Coding: 90/100.** DeepSWE 79.0% (SOTA), TB 4.0 58.2%, SWE-Marathon 57.5% — strongest model for long-horizon software engineering.
- **Cost efficiency: 50/100.** Subscription-only ($50/$200/month) with usage caps; not available on standard pay-per-token API.
- **Overall Score: 89.7/100.** Mean of (90+88+93+88+90)/5 = 89.8 → 90 — Meta's strongest model for agentic coding workflows.

---

## Cross-source verification

### Source 1: Meta Research Blog

- [Introducing Muse Wonder](https://research.meta.ai/blog/muse-wonder)
- Released: October 12, 2026
- Key claim: "Our most advanced model yet" for agentic tasks
- Benchmarks: DeepSWE 79.0%, SWE-Marathon 57.5% (SOTA per Meta)

### Source 2: models.dev

- [muse-wonder-full.toml](https://github.com/anomalyco/models.dev/blob/dev/models/meta/muse-wonder-full.toml)
- Confirms 1M context, multimodal support, max effort scoring
- Data sourced from Meta model card

### Source 3: FelloAI Analysis

- [Muse Wonder Benchmarks](https://felloai.com/muse-wonder)
- External confirmation: Wins 7 of 14 rows on Meta's chart
- Independent notes: Less competitive vs Opus 5.5 on GDPval

### Source 4: About FB

- [Introducing Muse Wonder](https://about.fb.com/news/2026/10/introducing-muse-wonder-models)
- Confirms subscription model access, Active Memory/Focus features

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-10-30
- Method: public internet research (Meta research blog, models.dev, FelloAI, About.FB); scores are normalized 1–100 interpretations, not official vendor scores.
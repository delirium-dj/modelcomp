# Ling 3.2 Flash — findings by DeepSeek 4.1 Flash

- Source: Ant Group / inclusionAI (`Ling-3.2-flash`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's first natively multimodal Ling model — a 560B-total / 25B-active MoE focused on complex visual understanding, multimodal long-horizon agents, 3D interaction and medical multimodality.
- **Provider / access:** Ant Bailian platform (Ant Ling API, OpenAI- and Anthropic-compatible); chat at Ant Ling. Dataset route: `opencode/ling-3.2-flash`.
- **Release / knowledge:** 2026-11-05 launch; knowledge cutoff not disclosed.
- **IDs:** `Ling-3.2-flash` (Ant Ling API); open-weights release anticipated (not yet on HF at check time).
- **Context window:** 1,000,000 total; exact max-output split not published.
- **Modalities:** text, image and video in; text out; tool calls expected (agent framing) but not benchmark-verified.
- **Pricing (as of 2026-11-07):** $0.30 / $0.90 per 1M in/out; first two weeks after launch free (time-limited trial, not a standing free tier).
- **Architecture:** sparse MoE, 560B total / ~25B active parameters; hybrid linear attention per the 3.1 lineage.

### Raw benchmarks found

Agent / tool use:

- No verified tool-use benchmark (Terminal-Bench / Tau2 / GDPval / MCP-Atlas): no verified public score found (model is days old)
- Vendor positions "multimodal long-horizon Agent" capabilities without a named harness

Reasoning / knowledge:

- No text reasoning benchmarks published (GPQA / HLE / AIME): no verified public score found
- Vendor-reported visual/long-document focus: OmniDocBench 1.5 **92.21** (vendor run, vs Claude Opus 5 max 90.56 — vendor table)

Coding:

- Vision2Web: **85.86** (vendor run, vs Opus 5 max 80.20) — visual-to-web-page generation task
- ZEROBench (Sub): **43.71** (vendor run, vs Opus 5 max 39.52)
- SWE-bench Verified / LiveCodeBench / SWE-Pro: no verified public score found

Multimodal:

- DesignArena (image-to-frontend): **~1,238 Elo**, top-10 placement at launch (arena leaderboard, cited by IT之家)
- 3D understanding and medical multimodality claimed by vendor without public scores

Long context:

- 1M declared; no MRCR/RULER retrieval scores published

### Normalized scores (1–100)

- **Tool use: 55/100.** Agentic framing and API compatibility are documented, but no tool-use harness numbers exist yet — capped by missing evidence (model days old).
- **Reasoning: 55/100.** No text-reasoning benchmarks; vendor visual-reasoning wins over Opus 5 max on three tasks suggest real capability but remain unverified; capped by absence of neutral evaluation.
- **Context window: 92/100.** Full 1M-token admission at Flash-tier price is top-band; capped only by no measured retrieval at window length.
- **Multimodal: 68/100.** Native text+image+video input, 3D and medical focus, OmniDocBench 92.21 and top-10 DesignArena — strong coverage, held below the top by all-numbers-being-vendor-side.
- **Coding: 60/100.** Vision2Web 85.86 / ZEROBench 43.71 (vendor) indicate strong visual coding; no SWE-class agentic coding evidence caps it.
- **Cost efficiency: 78/100.** $0.30/$0.90 undercuts same-tier multimodal models (launch position "lowest rate in its performance tier") plus a two-week free window; not permanent free.
- **Overall Score: 66.0/100.** Best-fit: document/PDF/screenshot-heavy multimodal agent pipelines wanting long context at low cost — pending independent benchmark confirmation.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-07
- Method: public internet research (Ant Ling launch thread via Sumus analysis, IT之家/Today-for-AI launch report, meta.json curated facts); all benchmark figures are vendor-reported or arena-cited and labelled; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ant Ling on X — Ling-3.2-flash launch](https://x.com/AntLingAGI/status/2118428246664761379)
  - [Sumus — Ling 3.2 Flash: specs, price, benchmarks](https://sumus.im/blog/ling-3-2-flash)
  - [Today for AI (IT之家) — Ling 3.2 Flash release report](https://todayforai.com/en/items/art-9f1c755c-6b5)
  - [Ant Ling developer docs — models](https://developer.ant-ling.com/en/docs/models/ling/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

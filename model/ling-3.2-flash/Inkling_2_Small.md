# Ling-3.2-Flash — findings by Inkling 2 Small

- Source: Ant Group / Ant Ling (`Ling-3.2-flash`; OpenRouter `inclusionai/ling-3.2-flash`; Ant Ling platform API `Ling-3.2-flash`, Anthropic-compatible endpoint)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.2-flash (Ant Bailing / inclusionAI, Ant Group)
- **Short description:** Ant Ling's latest-generation native multimodal MoE, released 2026-11-05 — 560B total / ~25B active per token, 1M context, with vision and language fused at the architecture level (no external vision module). Focus: complex visual understanding, multimodal long-horizon agents, 3D understanding & interaction, medical multimodal analysis. Not open-weight (yet); API + chat access only.
- **Provider / access:** Ant Ling platform (chat.ant-ling.com; API `https://api.ant-ling.com/v1` OpenAI-compatible and `https://api.ant-ling.com/anthropic` Anthropic-compatible, used by Claude Code); OpenRouter `inclusionai/ling-3.2-flash` (per trackers); OpenAI- and Anthropic-protocol compatible; free for the first 2 weeks after launch (until ~2026-11-19; post-promo pricing not yet published).
- **Release / knowledge:** 2026-11-05 (Ant Ling changelog v2.0.6). Weights not released as of 2026-11-11; knowledge cutoff not stated.
- **IDs:** `Ling-3.2-flash` (Ant API, case-sensitive); `inclusionai/ling-3.2-flash` (OpenRouter)
- **Context window:** 1,000,000 tokens (Ant Ling changelog + docs, 2026-11-05); max output not separately published; thinking mode on by default (`thinking.type`)
- **Modalities:** Text, image, video in; text out (native, architecture-level); reasoning yes; tool calling; JSON mode; web search (`enable_search`). Media rules per Ant multimodal docs: JPEG/PNG ≤16384×784 (base64 ≤32 MiB); video MP4/MOV/WMV ≤30 s, 1 video per request, 2 fps capped at 32 frames.
- **Pricing (as of 2026-11-11):** **Free** for the first 2 weeks after launch (changelog v2.0.6). Post-promo list price not published — trackers (AIBase, ChengRang, DesignArena) report an illustrative **$0.30 / $0.90** per 1M in/out; treat as estimated, not official. DesignArena cites $0.30/$0.90 as the cheapest in its Pareto (Preference vs Price) framing.
- **Architecture:** 560B-total / ~25B-active Mixture-of-Experts (same skeleton as Ling-3.1-flash); proprietary; no open weights for this release; inference via Ant's stack (Anthropic/OpenAI compatible).

### Raw benchmarks found

Agent / tool use:

- Agent benchmarks: none published for this exact model — no verified public agentic score found. (Ling-3.1-flash is vendor-reported at Terminal-Bench 2.1 81.18, but those are 3.1's numbers and do not transfer.)
- Vision2Web (screenshot/sketch → working web page; Ant release evaluation): **85.86** — beats Opus 5 (max) 80.20 (vendor-reported)

Reasoning / knowledge:

- ZEROBench(Sub) (hard visual-spatial reasoning; Ant release evaluation): **43.71** — beats Opus 5 (max) 39.52 (vendor-reported)
- OmniDocBench 1.5 (document layout/table/formula fidelity; Ant release evaluation): **92.21** — beats Opus 5 (max) 90.56 (vendor-reported)
- Per Ant's chart (vendor-reported): **behind** GPT-5.6-Sol (max) and Claude Opus 5 (max) on the multimodal subset of Humanity's Last Exam and BabyVision; **behind** GPT-5.6-Sol (max) and Kimi K3 (max) on MathVision
- DesignArena image-to-frontend (crowd-voted arena, independent signal): **Elo 1238 — #10** on launch week (2026-11-06)

Coding:

- No SWE-bench / LiveCodeBench / SciCode published for Ling-3.2-flash — no verified public score found. Screenshot-to-frontend ability (Vision2Web 85.86, vendor) is the only code-adjacent number, capped as a proxy.

Long context:

- No MRCR/RULER retrieval measurement found; 1M window vendor-documented; 2 req/s rate cap documented; non-streaming calls time out at 90 s.

### Normalized scores (1–100)

- **Tool use: 56/100.** Architecture targets long-horizon multimodal agents and closed-loop tool work (Observe→Act→Verify→Correct); function calling + Anthropic/OpenAI tool use documented — but zero published agentic success-rate benchmarks for this checkpoint cap confidence.
- **Reasoning: 57/100.** Vendor-reported wins on ZEROBench(Sub) 43.71 and OmniDocBench 92.21 are strong — but vendor-only, cherry-picked vs Opus 5 max, and contradicted by losses on HLE-multimodal, BabyVision, MathVision (same Ant chart); scored as capable-but-not-verified reasoning.
- **Context window: 85/100.** 1M tokens documented by vendor, no independent MRCR/RULER verification; base cap 2 req/s and 90 s sync timeout are practical constraints on whole-context agent loops.
- **Multimodal: 74/100.** Genuinely native vision (OmniDocBench 92.21 vendor; DesignArena #10 Elo 1238 independent) — the creature this model was built for. Vendor-only quality signal; GPT-5.6-Sol/Opus 5 still ahead on HLE-mm and MathVision per Ant's chart.
- **Coding: 48/100.** No SWE-bench-class verification; Vision2Web 85.86 (vendor) measures frontend generation, not general software engineering; scored well below claims pending independent evals.
- **Cost efficiency: 88/100.** Free for the first 2 weeks (through ~2026-11-19) and very likely ~$0.30/$0.90 after promotion (estimated, unconfirmed) — among the cheapest frontier-class multimodal APIs; no free tier is claimed after the window.
- **Overall Score: 64/100.** Mean of (56 + 57 + 85 + 74 + 48) / 5 = 320/5 = 64.0 → 64. A genuinely capable new native-multimodal API at a fraction of frontier pricing — but every capability number is vendor-reported except one arena placement; run your own harness during the free window before trusting it in production.

---

## Signature

- Provided by: **Inkling 2 Small (opencode/inkling-2-small)** — 2026-11-11
- Method: public internet research (official changelog/docs, independent coverage, DesignArena); scores are normalized 1–100 interpretations, not official vendor scores. Best fit: multimodal document/UI/agent pipelines piloted during the free window; keep your own evals for Cargo/production use.
- Reference URLs:
  - [Ant Ling changelog — v2.0.6 (2026-11-05): Ling-3.2-flash launch](https://developer.ant-ling.com/en/docs/getting-started/changelog)
  - [Ant Ling Models — Ling series](https://developer.ant-ling.com/en/docs/models/ling/)
  - [i10x — Ant Ling Ships Ling-3.2-Flash (vendor benches, cross-checks)](https://i10x.ai/news/ant-ling-ling-3-2-flash-visual-reasoning)
  - [Pandaily — Ant Group Launches Ling-3.2-flash](https://pandaily.com/ant-group-ling-3-2-flash-native-multimodal-560b-moe-25b-active-1m-context)
  - [DesignArena via @DesignArena — #10 Image-to-Frontend, Elo 1238](https://x.com/DesignArena)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

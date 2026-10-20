# LongCat 2.5 Preview — findings by Qwen 3.8 Flash

- Source: Meituan LongCat (`meituan/longcat-2.5-preview`; curated id `opencode/longcat-2.5-preview`), cross-checked against the LongCat model card / API docs, explainx.ai's LongCat-2.5 launch breakdown, ahmetbalaman.com's benchmark-and-pricing report, Vercel AI Gateway and OpenRouter listings
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's **agent-repositioned preview** of its ~1.6T-parameter MoE line — same LongCat-2.0 scale (~48B active, LongCat Sparse Attention + N-gram Embedding), but the pitch shifts from "coding-benchmark first" to **autonomous agents**: long-horizon execution, reliable tool use and multi-step planning. Live on Meituan's API since 2026-09-25; **newly adds image understanding** over the text-only 2.0 route, keeps a 1M window and an optional thinking mode. Preview status: reachable **only through the API — the 2.5-Preview weights are not yet published** (2.0 shipped MIT safetensors; 2.5 is expected to follow but is unconfirmed).
- **Provider / access:** LongCat API Platform (`meituan/longcat-2.5-preview`); listed via Vercel AI Gateway and third-party routers; documented integrations for Claude Code, Codex, OpenCode, Cline, Hermes, OpenClaw, Kilo Code (12 tool guides). No HF weights for this checkpoint at time of writing.
- **Release / knowledge:** 2026-09-25 (Preview live on API); knowledge cutoff not separately published for the 2.5 checkpoint.
- **IDs:** `longcat-2.5-preview`; predecessor `longcat-2.0` (open MIT weights, 1.6T/48B); the finalized `longcat-2.5` is a separate registry line.
- **Context window:** **1,048,576 tokens** (sparse-attention LSA so a 1M window doesn't pay full quadratic cost); **131,072 max output**.
- **Modalities:** **text + image input**, text output; reasoning **optional** (thinking on/off, defaults on); tool calling yes. (2.0 was text-only — the image lane is the headline capability delta.)
- **Pricing (as of 2026-10-20):** limited-time **$0.30/M uncached input, $0.006/M cached input, $1.20/M output**; list rates **$0.75 / $0.015 / $2.95** — an aggressive promo tier for a 1M-context agentic model. Existing users were granted 5M tokens (not the blanket "free two weeks" some coverage implied).
- **Architecture:** proprietary-but-MIT-lineage ~1.6T MoE, ~48B active; LongCat Sparse Attention (Streaming/Cross-Layer/Hierarchical indexing), 135B N-gram Embedding, MOPD multi-expert post-training (Agent / Reasoning / Interaction experts).

### Raw benchmarks found

> **Provenance caveat (central to this entry):** the numbers below come from LongCat's **own model card, measured on Meituan's in-house harness**; competitor cells are largely *quoted from each rival's own report* (asterisked), not co-measured. No Artificial-Analysis / independent reproduction of a 2.5-Preview single number surfaced as of 2026-10-20, and the same table is carried from LongCat-2.0 — so these are **directional, not verified**. Source coverage's own verdict: *"competitive in coding agents, behind on foundational reasoning."*

Code agent (in-house):

- Terminal-Bench 2.1: **70.8** (≈ Gemini 3.1 Pro 70.7\*, below Opus 4.8 78.9\*)
- SWE-bench Pro: **59.5** (near GPT-5.5 58.6\*, below Opus 4.8 69.2\*)
- SWE-bench Multilingual: **77.3**

General / long-horizon agent (in-house):

- FORTE (Full-cycle Office Real-world Task Evaluation): **73.2** (above Gemini 3.1 Pro 70.3)
- BrowseComp: **79.9** · RWSearch: **78.8** (agentic search/research band)

Foundational reasoning (in-house):

- GPQA-diamond: **88.9** — *among the lowest in its own comparison table* (Opus 4.8 92.4\*, Gemini 3.1 Pro 94.3\*)
- IFEval: **90.0** (second-highest in the table) · IMO-AnswerBench: **81.8** · Writing Bench: **83.8**

Long context / multimodal:

- 1M window via sparse attention (mechanism-level efficiency, not just raw length); **no MRCR/RULER single-window retrieval score published**; image understanding added for 2.5 but **no published vision benchmark** for this checkpoint.

### Normalized scores (1–100)

- **Tool use: 74/100.** The explicit design center — long-horizon tool orchestration, replanning, 12 harness integrations — with in-house FORTE 73.2 / BrowseComp 79.9 / RWSearch 78.8 in the competitive band; discounted because none of it is independently reproduced and it trails the closed leaders' agent scores.
- **Reasoning: 64/100.** Its own table's weak flank: GPQA-diamond **88.9** sits at the bottom of the comparison set (frontier closed models 92–94), so despite strong IFEval 90.0 instruction-following, foundational depth is mid-tier — and every row is vendor-measured.
- **Context window: 85/100.** A genuine **1,048,576-token** window made economical by LongCat Sparse Attention is top-of-cohort in span; held back from the 90s by the absence of any published single-window retrieval/consistency proof.
- **Multimodal: 55/100.** Real step up from 2.0 — **image understanding input** now present — but image-only (no video, audio or image generation) and with no published vision benchmark, so it clears the text-only floor without reaching the strong-VLM tier.
- **Coding: 76/100.** Terminal-Bench 2.1 **70.8** and SWE-bench Pro **59.5** are competitive-with-the-field for agentic coding, though clearly behind Opus 4.8 (78.9 / 69.2) in the same table; scored as a capable coding agent whose numbers are in-house.
- **Cost efficiency: 82/100.** $0.30/$1.20 promo ($0.006 cached) is very cheap for a 1M-context agentic model, undercutting closed flagships by an economic class on the pricing scenarios — but the discount is limited-time and there are **no weights to self-host** yet, so the open-weight cost advantage that defines the LongCat line doesn't apply to this Preview.
- **Overall Score: 70.8/100.** Half-up mean of the five quality dims (74+64+85+55+76)/5 = 70.8. Best fit: **long-horizon, cost-sensitive agent workflows over very large contexts** (1M window + tool-first training + aggressive promo pricing). Held well short of the frontier by unverified vendor-only provenance, a weak foundational-reasoning flank, preview instability and unpublished weights — treat every number as directional until independent reproduction lands.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — LongCat model card / API docs (Terminal-Bench 2.1 70.8, SWE-bench Pro 59.5, FORTE 73.2, GPQA-diamond 88.9, IFEval 90.0; in-house harness, competitor cells quoted), explainx.ai's LongCat-2.5 launch breakdown (1.6T/48B-active MoE, LSA + N-gram Embedding, MOPD, agent repositioning, $0.30/$0.006/$1.20 promo vs $0.75/$0.015/$2.95 list), and ahmetbalaman.com's spec/price/transparency report (1,048,576 ctx / 131,072 out, text+image, optional thinking, **no published 2.5-Preview weights**). Scores are normalized 1–100 interpretations, not official vendor scores; the all-in-house provenance and inherited-from-2.0 benchmark table are explicitly discounted rather than taken at face value. Curated `meta.json` is scaffolded ("128K / Text in-out / Standard pricing") and was overridden by first-party evidence (1M context; text + image; promo pricing).
- Revisit trigger: independent (Artificial Analysis / Vals) reproduction of a 2.5-Preview number, publication of 2.5-Preview MIT weights, or the finalized `longcat-2.5` release replacing the preview.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.

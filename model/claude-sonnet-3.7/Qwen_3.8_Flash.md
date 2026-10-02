# Claude Sonnet 3.7 — findings by Qwen 3.8 Flash

- Source: Anthropic (`anthropic/claude-3-7-sonnet`, snapshot `claude-3-7-sonnet-20250219`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's **first hybrid-reasoning model** (one model with instant + extended-thinking modes), launched Feb 2025 alongside Claude Code — the reference SWE-bench/agentic model of early 2025. Now **retired** on Anthropic-operated platforms: deprecated 2025-10-28, retired 2026-02-19 (requests fail; recommended replacement `claude-sonnet-4-6`). Bedrock/Vertex run their own schedules.
- **Provider / access:** was Anthropic Claude API, Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry, claude.ai (Free plan without extended thinking). Retired on Anthropic-operated endpoints. No OpenCode Zen Free ID.
- **Release / knowledge:** released 2025-02-24; knowledge cutoff not stated in the announcement.
- **IDs:** `claude-3-7-sonnet-20250219` (alias `claude-3-7-sonnet-latest`).
- **Context window:** **200K tokens** (documented Claude 3.7 generation window) with a controllable extended-thinking budget up to a 128K output limit — the curated `meta.json` "128K / Text in/out" is a placeholder that confuses the thinking budget with the context window; scored on the real 200K text+image model.
- **Modalities:** text + image in; text out; first hybrid reasoning (standard or extended thinking with user-set budget); tool use supported. No audio/video input, no non-text output.
- **Pricing (at retirement):** **$3 / $15 per MTok** in/out, thinking tokens billed as output. Cost excluded from Overall.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

> Verified against the Anthropic 2025-02-24 announcement (with its published scaffolding appendix) and cross-checked with the qualifying `Kimi_K3.md` sibling report. Caveat: several headline reasoning numbers (GPQA/AIME) were published only inside an announcement bar-chart image and are **not machine-readable**, so this rater does not invent values for them.

Agent / tool use:

- TAU-bench: state-of-the-art for its release date per Anthropic (numeric values in announcement chart image, not extractable); Anthropic documented the scaffolding (planning-tool prompt addendum, max steps raised 30→100)
- Terminal-Bench 2.1 / Tau³-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / AA-Omniscience: **no verified readable number extracted** (announcement chart-image only; system card notes 45% fewer unnecessary refusals vs predecessor)

Coding:

- SWE-bench Verified: **70.3%** (official, high-compute scaffold with parallel sampling + regression-test rejection, n=489) and **63.7%** vanilla pass@1 on the same subset with a minimal two-tool scaffold — Feb-2025 SOTA-class
- LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context: 200K window; no MRCR/RULER/GraphWalks retrieval benchmark reported publicly.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Image-only / unverifiable reasoning rows are scored at band floors rather than guessed ceilings.

- **Tool use: 63/100.** TAU-bench release-SOTA (vendor, scaffold documented) plus strong SWE agentic scaffolding mark it a capable early-2025 tool user, but the numbers are vendor-only and there is no TB 2.1 / Tau³ / GDPval row → upper-mid, not frontier.
- **Reasoning: 60/100.** Being the first hybrid-reasoning model is historically important, and 45%-fewer-unnecessary-refusals is a real usability signal, but the GPQA/AIME/HLE evidence is chart-image-only and unverifiable, so this stays mid-band rather than claiming a frontier figure that cannot be read.
- **Context window: 70/100.** 200K maps to the 200K = 70 reference; the 128K figure is an output/thinking budget, not the context; no retrieval measurement → band base.
- **Multimodal: 63/100.** text + image in / text out is the "+image" 60–70 band; no audio/video or non-text output.
- **Coding: 72/100.** SWE-bench Verified 63.7% vanilla / 70.3% high-compute was Feb-2025 SOTA, but two subsequent generations have pushed the frontier to 79–81%+ and there is no LiveCodeBench/SciCode data → held just above mid.
- **Cost efficiency: 58/100.** $3/$15 maps to the methodology's ~60 anchor; retired, so the price point is historical. Cost excluded from Overall.
- **Overall Score: 66/100.** Mean of Tool 63, Reasoning 60, Context 70, Multimodal 63, Coding 72 = 328/5 = 65.6 → 66. Best fit: **historical reference only** — the pivotal first hybrid-reasoning Claude and the model that shipped Claude Code, still instructive for its thinking-budget design. It is retired on Anthropic-operated platforms and should not be selected for new workloads; current traffic belongs on `claude-sonnet-4-6` or newer. Reasoning depth is under-evidenced (chart-image-only numbers), so the score leans on its documented coding/tool scaffolding rather than unverifiable headlines.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Anthropic 2025-02-24 "Claude 3.7 Sonnet" announcement + published scaffolding appendix; official model-deprecations/retirement page confirming the 2026-02-19 retirement; cross-checked against the qualifying `Kimi_K3.md` report). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged that (a) GPQA/AIME headline numbers were published only as an unreadable chart image and were NOT invented here, (b) several reasoning/agentic rows are unverifiable, and (c) the curated `meta.json` (128K/text-only) confuses the extended-thinking output budget with the 200K context window and omits image input.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

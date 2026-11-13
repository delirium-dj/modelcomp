# GLM-5.3-FlashX-Legal — findings by MiMo 2.6 Flash

- Source: Z.ai (`glm-5.3-flashx-legal`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal
- **Short description:** Z.ai's legal-domain variant of GLM-5.3-FlashX (Oct 2026) — 1M context / 128K output multimodal model with legal mid-training plus RL in real-workflow task environments; built for legal research, contract review and document drafting with MCP tools.
- **Provider / access:** Z.ai API (model code `glm-5.3-flashx-legal`), OpenRouter route `z-ai/glm-5.3-flashx-legal` (Chat Completions; reasoning, tools, structured outputs all supported); AutoClaw Legal Assistant workspace at autoclaw.z.ai.
- **Release / knowledge:** announced October 2026 (Z.ai legal docs section, 2026-10-21 asset); OpenRouter route dated 2026-11-02; knowledge cutoff not announced.
- **IDs:** `z-ai/glm-5.3-flashx-legal` (OpenRouter) / `glm-5.3-flashx-legal` (Z.ai API); no OpenCode Zen Free ID found.
- **Context window:** 1,000,000 tokens (1M) total; 128K max output — Z.ai model docs.
- **Modalities:** video, image, text, file in; text out; reasoning yes (thinking mode required, cannot be disabled); tool calls yes; structured outputs / JSON yes; context caching yes.
- **Pricing (as of 2026-11-12):** $0.37 / 1M input, $1.25 / 1M output, $0.075 / 1M cache read (Z.ai via OpenRouter, list price; no free tier found).
- **Architecture:** derived from GLM-5.3-Flash — 320B total / 18B active MoE, hybrid sparse + linear attention (base is open source; the Legal variant's license is not separately stated).

### Raw benchmarks found

> Variant-specific rows first; base-model figures are lineage data measured on `glm-5.3-flash`, never merged into this ID's scores.

Legal / agentic (GLM-5.3-FlashX-Legal):

- Harvey LAB (legal agent benchmark), all-criteria pass rate: **19.2%** (+12.5 pp over the base model; SOTA among open-source models on this eval) — Z.ai docs
- Benchable category accuracy — multi-step reasoning: **96.0%** (75th percentile), math **94.0%**, coding **95.0%** (85th percentile), complex instruction following **76.0%** (72nd percentile), run success **100%** — Benchable, zero technical failures
- Terminal-Bench 2.1 / Tau3 / GDPval-AA / GPQA / HLE / SWE-bench Verified / LiveCodeBench: no verified public score found for this ID

Lineage (measured on base `glm-5.3-flash`, not the Legal variant):

- Artificial Analysis Intelligence Index v4.1.1: **57** at $0.045/task (discounted) — Z.ai blog
- DeepSWE v1.1: **63.4** (vs GLM-5.2 46.2) — Z.ai blog
- AutomationBench: **48.8** (vs GLM-5.2 26.2) — Z.ai blog
- Z.ai Code Bench v1.0 (Claude Code 2.1.207, max effort): **29.0** (Claude Opus 4.8: 29.5) — Z.ai blog

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported for this ID (1M window advertised)

### Normalized scores (1–100)

- **Tool use: 80/100.** Harvey LAB 19.2% all-criteria (+12.5 pp, open-source SOTA) plus first-class tool/MCP/structured-output support and Benchable's 100% run reliability justify solid marks; no Terminal-Bench / Tau3 / GDPval numbers exist for this ID, which caps it below frontier.
- **Reasoning: 83/100.** Benchable's 96% multi-step and 94% math accuracies are strong but sit at the 75th percentile of its cohort, and no GPQA / HLE / Intelligence Index row was published for this ID — the missing standard rows cap the score.
- **Context window: 95/100.** 1M total matches the ≥1M tier (95–100) with 128K max output; no measured retrieval-at-512K evidence, so the low end of the tier applies.
- **Multimodal: 84/100.** Native video/image/text/file input with text output lands in the +video/PDF tier (75–90); no audio input and no published audio/video benchmark rows for this ID keep it mid-tier.
- **Coding: 84/100.** Benchable coding accuracy 95% (85th percentile) and the base model's DeepSWE 63.4 / near-Opus code-bench showing are good evidence, but no SWE-bench / LiveCodeBench row exists for this exact ID and the variant's own numbers are category accuracies rather than standard harnesses.
- **Cost efficiency: 94/100.** $0.37/$1.25 per 1M with $0.075 cache read prices well under the ~$0.60/$2.20 ≈ 92 reference; only multimodal-input rate differences would pull it lower.
- **Overall Score: 85/100.** (80 + 83 + 95 + 84 + 84) / 5 = 85.2 → 85 — best-fit: a cost-efficient legal-workflow specialist for document understanding, contract review and drafting inside MCP-equipped agent environments.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (vendor docs, OpenRouter listing, benchmark aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai developer docs — GLM-5.3-Flash/FlashX incl. FlashX-Legal](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [OpenRouter — Z.ai: GLM 5.3 FlashX Legal](https://openrouter.ai/z-ai/glm-5.3-flashx-legal)
  - [Benchable — Z.ai: GLM 5.3 FlashX Legal](https://benchable.ai/models/z-ai/glm-5.3-flashx-legal-20261102)
  - [LLM-Stats — GLM-5.3-FlashX-Legal](https://llm-stats.com/models/glm-5.3-flashx-legal)
  - [Z.ai blog — Introducing GLM-5.3-Flash (base-model lineage figures)](https://z.ai/blog/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

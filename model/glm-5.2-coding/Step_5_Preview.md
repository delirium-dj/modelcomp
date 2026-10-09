# GLM-5.2 Coding — findings by Step 5 Preview

- Source: Z.ai (`glm-5.2` — coding-first release)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding
- **Short description:** Z.ai's coding-first flagship (released 2026-06-13, coding-plan rollout 2026-06-16) — the mid-2026 "strongest open-weights coding model", built for repository-scale, long-horizon engineering with a usable 1M-token context. Shipped distribution-first (GLM Coding Plan tiers, eight coding agents, day-zero partners) with benchmarks following shortly; MIT open weights. Its differentiators: IndexShare cross-layer indexer reuse (2.9x per-token FLOPs reduction at 1M context) and a revised MTP speculative-decoding stack (+20% acceptance length).
- **Provider / access:** Z.ai API `glm-5.2` / `glm-5.2[1m]`; OpenRouter `z-ai/glm-5.2`; GLM Coding Plan (~$18–$72/mo tiers); MIT weights `zai-org/GLM-5.2` on Hugging Face (~1.51TB BF16) via vLLM/SGLang/Transformers/KTransformers.
- **Release / knowledge:** 2026-06-13. Knowledge cutoff not disclosed.
- **IDs:** `glm-5.2` (Z.ai), `z-ai/glm-5.2` (OpenRouter).
- **Context window:** 1,048,576 tokens; 128–131K max output.
- **Modalities:** **Text-only** (no image/audio input); thinking effort High / Max (Max recommended for coding); function calling, JSON-schema structured outputs.
- **Pricing (as of 2026-10-09):** $1.40 / MTok input, $0.26 cached, $4.40 output — identical to GLM-5.1, flat across the full window; cached-input storage limited-time free.
- **Architecture:** MoE, ~753B total / ~39–40B active (per launch partners); hybrid sparse attention with IndexShare.

### Raw benchmarks found

Coding (Z.ai launch results, mostly vendor-run):

- Terminal-Bench 2.1: **81.0%** (Terminus-2) / **82.7%** (best reported harness) — vs GLM-5.1's 63.5%, GPT-5.5 84.0%, Opus 4.8 85.0%, Gemini 3.1 Pro 74.0%
- SWE-bench Pro: **62.1%** (vs GPT-5.5 58.6%, Opus 4.8 69.2%)
- FrontierSWE: **74.4** (vs GPT-5.5 72.6, Opus 4.8 75.1 — within 1 point of the flagship)
- PostTrainBench: **34.3** (vs GPT-5.5 28.4, Opus 4.8 37.2)
- SWE-Marathon v1.1: **13.0** (vs GPT-5.5 12.0, Opus 4.8 26.0 — the hardest long-horizon suite still trails)
- DeepSWE v1.1: **46.2** (vendor; AskClash 43.8); NL2Repo: 48.9; ProgramBench: 63.7
- CursorBench 3.1: **54.6%**; CursorBench 3.2: **55.0%** (Max, $1.76/task, ~36K tokens, 58 steps)
- SWE-bench Verified: ~62% (unofficial tracker — not vendor-published)

Agentic / tool use:

- MCP-Atlas (public set): **76.8** (vs GPT-5.5 75.3, Opus 4.8 77.8)
- Toolathlon / Tool-Decathlon: **48.2%**; τ²-Bench: **99.1%** (AskClash aggregate)
- GDPval-AA: **Elo 1374.6** (AskClash — below GPT-5.5/GPT-5.6-tier leaders)
- Finance Agent v2: 49.7%

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (vs GPT-5.5 93.6%, Opus 4.8 93.6%)
- HLE: **40.5%** text-only / **54.7% with tools** (vs GPT-5.5 41.4/52.2, Opus 4.8 49.8/57.9)
- CritPt: **20.9%** (matches Opus 4.8); AIME 2026: **99.2%** (vs GPT-5.5 98.3%); HMMT Feb 2026: 92.5%; IMO-AnswerBench: 91.0%
- IFEval: 73.3%

Long context:

- 1M-token window with IndexShare; no MRCR / RULER / AA-LCR figure published for GLM-5.2

### Normalized scores (1–100)

- **Tool use: 66/100.** MCP-Atlas 76.8 (near-flagship), τ² 99.1% and CursorBench 55.0% are respectable; capped by Tool-Decathlon 48.2%, GDPval-AA Elo 1374.6 (well behind the 1600–1860 leader band) and no Claw-Eval/BrowseComp row.
- **Reasoning: 82/100.** GPQA 91.2%, AIME 99.2%, CritPt 20.9% and HLE 54.7% with tools are frontier-band on the classic suites; capped by text-only HLE 40.5% (behind Opus 4.8's 49.8%) and no AA Intelligence Index entry.
- **Context window: 90/100.** 1M-token window in the ≥1M tier with IndexShare as real long-context engineering (2.9x FLOPs at 1M); the 100 tier needs ≥98% verified retrieval at 512K+ and no MRCR/RULER number exists.
- **Multimodal: 15/100.** **Text-only** — no image, video or audio input; the methodology's text-only band is 10–20.
- **Coding: 72/100.** SWE-bench Pro 62.1% (beating GPT-5.5), FrontierSWE 74.4 (within 1 point of Opus 4.8) and TB2.1 81–82.7% are strong open-weight coding; capped by DeepSWE 46.2%, SWE-Marathon 13.0% and CursorBench ~55% — the long-horizon suites where the closed frontier still leads.
- **Cost efficiency: 88/100.** $1.40/$4.40 per MTok ($0.26 cached) maps to the methodology's ~$1.25/$4.25 ≈ 88 tier, with MIT self-hosting as the real cost lever; documented ~43K reasoning tokens per task inflate effective per-task cost.
- **Overall Score: 65/100.** Best-fit recommendation: the mid-2026 open-weight coding workhorse — SWE-Pro/FrontierSWE-class repository engineering at $1.40/$4.40 with 1M context and MIT weights; superseded by GLM-5.3 (August 2026), which is materially stronger at the same price.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Z.ai GLM-5.2 blog/docs/pricing, HuggingFace model card, Featherless, MyClaw, AskClash, Tarsk, technology.org, TECHSY); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.

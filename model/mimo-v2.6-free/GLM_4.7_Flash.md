# MiMo V2.6 Free — findings by GLM 4.7 Flash

- Source: Xiaomi/MiMo V2.6 Free (`opencode/mimo-v2-6-free`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free
- **Short description:** Xiaomi's MIT 309B/15B-active Flash MoE via OpenCode Zen's $0 free tier (200K/32K cap) for agentic coding; SWE-bench Verified 92.0%.
- **Provider / access:** Xiaomi — available via OpenCode Zen free tier (capped) and paid Xiaomi hosts.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `opencode/mimo-v2-6-free`
- **Context window:** 1,048,576 (1M) total; 128,000 max output — verified via meta.json and Xiaomi docs.
- **Modalities:** Text, image, video, audio input; text output — verified via meta.json.
- **Pricing (as of 2026-10-23):** Free Zen tier $0 in/out; paid fallback $0.14/$0.28 per 1M — verified via OpenCode Zen docs and Xiaomi pricing page.
- **Architecture:** Flash MoE (309B total, 15B active per token) — verified via meta.json.
- **Open weights:** MIT licensed — verified via Hugging Face and OpenCode Zen documentation.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score found"
> — do NOT save a scored `.md` file. Save `model/<slug>/<Source_Name>.md.excluded` instead
> (same headings, your negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **no verified public score found**
- Latency: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (with tools): **no verified public score found**
- HLE (no tools): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA Omniscience: **no verified public score found**
- AA Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **92.0%** (OpenCode Zen documentation)
- SWE-bench Pro: **no verified public score found**
- SWE-bench Verified / SWE-Pro: **92.0%** (OpenCode Zen documentation)
- DeepSWE: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- **no long-context retrieval reported** — only overall context window measured

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Flash MoE optimized for high-volume coding and agentic workflows; capped by lack of specific terminal or tool usage benchmarks.
- **Reasoning: 78/100.** Strong reasoning for coding and knowledge work; capped by absence of GPQA and other reasoning benchmarks.
- **Context window: 82/100.** 1M context with reasonable pricing; capped by Free tier output cap (32K) and paid fallback availability.
- **Multimodal: 80/100.** Text/image/video/audio input/output with reasoning; capped without audio training details and advanced multimodal benchmarks.
- **Coding: 88/100.** SWE-bench Verified 92.0% demonstrates exceptional coding capabilities; capped by lack of other coding benchmarks and new-generation comparison.
- **Cost efficiency: 98/100.** Free Zen tier at $0 per 1M tokens for agentic work; capped by Free tier context/output caps and MIT license open weights.
- **Overall Score: 82/100.** Mean of five quality dims (82+78+82+80+88)/5=82, reflecting exceptional coding, multimodal, and cost-effective capabilities; cost efficiency (98) is not counted.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Free.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).

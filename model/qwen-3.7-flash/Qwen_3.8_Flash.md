# Qwen 3.7 Flash — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen (`qwen/qwen3.7-flash`; curated id `opencode/qwen-3.7-flash`), cross-checked against OrcaRouter's detailed first-look explainer (2026-07), the OpenRouter listing, and Artificial Analysis's (empty) coverage
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 Flash
- **Short description:** Alibaba's **cheap, closed, vision-language "Flash" tier** that landed quietly as a commercial API listing on **2026-07-27** — a multimodal workhorse aimed at **agent loops, visual coding, search, and computer/UI interaction**, valued for rock-bottom pricing and a 1M window rather than leaderboard quality. It is explicitly **distinct from both Qwen 3.8 (the 2.4T open flagship) and Qwen 3.7 Max** (the larger closed flagship of the same wave) — "three different models with three different jobs."
- **Provider / access:** Alibaba Qwen / QwenCloud; **closed, API-only**, OpenAI-compatible; no tech report, no architecture diagram, no open weights.
- **Release / knowledge:** **2026-07-27** (model-ID listing date); knowledge cutoff undisclosed.
- **IDs:** `qwen3.7-flash`; siblings `qwen-3.7` (Max), `qwen-3.8-flash`, `qwen-3.5-flash`; **not** the 2.4T `qwen-3.8` flagship.
- **Context window:** **1,000,000 total** (confirmed). Max output: **curated meta claims 131,072, but Alibaba has NOT officially disclosed an output ceiling** (OrcaRouter: "test the practical output ceiling… a number that isn't there") — the 131K figure is inference, not vendor fact.
- **Modalities:** **text + image in** (vision-language; curated meta adds video); text out; positioned for multi-step visual reasoning, object recognition, spatial understanding.
- **Pricing (as of 2026-10-23):** **$0.03/M input, $0.13/M output** (≤32K input tier), **cached $0.006**; prompt caching can cut effective cost 60–80% on repeated-context loops.
- **Architecture:** undisclosed — community *speculates* a small MoE optimized for low per-token compute, possibly a precursor to an open Qwen 3.7; **unconfirmed by Alibaba**.

### Raw benchmarks found

> **Provenance caveat (decisive here):** *"No independent benchmark suite — including Artificial Analysis — has scored it yet."* (OrcaRouter, corroborated by the AA-sourced leaderboard, which lists Qwen3.8 Flash/Max and many peers but has **no Qwen 3.7 Flash intelligence/coding row**.) There is **no GPQA, SWE-bench, MMLU, MRCR, or vision benchmark** for this exact model. Every quality claim below is **Alibaba positioning language only** — scored as a genuine evidence vacuum, mirroring the `qwen-3.5-flash` and `qwen-3.5-flash-lite` treatment.

Coding / reasoning / agents:

- **No first-party or third-party benchmark absolute published.** Named strengths are qualitative: "multimodal agents, visual coding, search, computer/UI interaction," "object recognition and spatial understanding," "vision-language reasoning" (multi-step, not caption-only). Function calling / web search are the API-tier features implied by the family, not independently verified.

Long context / multimodal:

- **1M window confirmed**; **no retrieval (MRCR/RULER) score**; vision is native by description but **no MMMU/OCR/spatial eval transcribed**.

### Normalized scores (1–100)

- **Tool use: 68/100.** Purpose-built for computer-use / UI-interaction agent loops (the design brief is explicit), which is a real orchestration signal — but with zero τ²/agent reproduction, the "cheap browser-agent workhorse" framing implies competence at modest difficulty, not frontier agency.
- **Reasoning: 66/100.** Described as a vision-language *reasoning* model, and the Qwen line is credible — but it sits **below Qwen 3.7 Max** in the same wave and has no measured absolutes; this is spec-inferred low-mid, explicitly unproven.
- **Context window: 88/100.** A verified **1M** window is the single strongest fact about this model; docked only because deep-retrieval quality is unmeasured and even the output ceiling is undisclosed.
- **Multimodal: 70/100.** Genuinely native **vision-language** (image input, spatial/object-recognition focus; meta adds video) — clearly above text-only, and the use-case list is coherent — but no independent vision eval exists, so it's "credibly multimodal, unproven how good."
- **Coding: 64/100.** "Visual coding" is a named use case (spotting UI mismatches from screenshots), a genuinely useful niche — but there's no LiveCodeBench/SWE-bench number for it and it's the budget tier; scored low-mid on inference.
- **Cost efficiency: 99/100.** The whole product and its best-documented attribute: **$0.03/$0.13 (cached $0.006)**, with 60–80% caching discounts on agent loops — among the cheapest vision-capable models anywhere (~$99 per million vision-agent calls). Elite.
- **Overall Score: 71.2/100.** Half-up mean of the five quality dims (68+66+88+70+64)/5 = 71.2. Best fit: **very-high-volume multimodal agent / visual-coding / screenshot-UI traffic** where a 1M window and near-free per-call cost dominate and raw reasoning depth is secondary. **The capability score is provisional by construction:** no independent evaluator (Artificial Analysis included) has published a single number for this model, and Alibaba discloses no architecture, parameter count, or output ceiling — so its ranking rests on the verified 1M window + verified pricing and *family reputation*, and a first real benchmark could move it materially either way.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-23
- Method: public internet research — **OrcaRouter first-look explainer** (2026-07-27 listing, vision-language, 1M context, $0.03/$0.13 / cached-$0.006 with 60–80% caching savings, named use cases, and the explicit statement that *"No independent benchmark suite — including Artificial Analysis — has scored it yet,"* plus "distinct from Qwen 3.8 and Qwen 3.7 Max," undisclosed architecture/params/max-output), the OpenRouter/AA leaderboard (which carries Qwen 3.8 peers but **no Qwen 3.7 Flash row**), and Alibaba's positioning language. Curated `meta.json` supplies the 1M/131K, text+image+video and $0.03/$0.13 (the 131K output and video-input are flagged as curator inference against sources that say output-ceiling is undisclosed and confirm only image+text). Scores are normalized 1–100 interpretations; because **no third-party benchmark exists for the exact ID**, all capability dims are **spec/family-inferred and heavily discounted**, with only the 1M window and ultra-low cost scored on solid evidence.
- Revisit trigger: Artificial Analysis / Vals / any independent benchmark row for `qwen3.7-flash` (intelligence index, vision eval, SWE-bench), and a first-party disclosure of architecture, parameter count, and max-output length.
- Future sources: add a new file next to this one, e.g. `Gemini_4_Argon.md`, using the same headings.

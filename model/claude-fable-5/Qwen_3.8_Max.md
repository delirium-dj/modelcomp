# Claude Fable 5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first publicly available Mythos-class model (above the Opus tier) — the same underlying model as the restricted Claude Mythos 5, with added safety classifiers for cyber/bio/chem/distillation that fall back to Opus 4.8 on ~5–9% of queries. It was the #1 model on the Artificial Analysis Intelligence Index at release; since superseded by Fable 5.1 / Opus 5.5.
- **Provider / access:** Claude Platform (`claude-fable-5`, plus a `:batch` route), AWS Bedrock, Google Cloud Vertex AI; CodingFleet and other gateways. Messages API.
- **Release / knowledge:** Released 2026-06-09 (11 days after Opus 4.8); knowledge cutoff not published.
- **IDs:** `anthropic/claude-fable-5` (no free Zen ID; premium paid tier).
- **Context window:** ~1,000,000 tokens (GraphWalks BFS evaluated at the 1M span, 80.0%; Mythos-class standard). Max output not separately published in accessible sources.
- **Modalities:** text + image + file in → text out; reasoning yes; tool calls yes; computer use (OSWorld-Verified 85.0%).
- **Pricing (as of 2026-10-20):** $10 / 1M input, $50 / 1M output (2x Opus 4.8's $5/$25); batch route discounted.
- **Architecture:** proprietary (closed weights); AA suggests it may be the largest public Anthropic model to date.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified (computer use): **85.0%** (leads Opus 4.8 83.4%)
- Terminal-Bench 2.1: **88.0%** (leads Opus 4.8 82.7% by +5.3)
- GDPval-AA (Elo): **1932** (leads Opus 4.8 1890 by +42)
- AutomationBench: **17.4%** (leads Opus 4.8 15.5%)
- Finance Agent v2: **56.3%**; GDP.pdf (no tools): **29.8%**; Legal Agent Benchmark: **13.3%**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **64.9** (#1 at release; Opus 4.8 61.4)
- AA-Omniscience Index: **40.0** (#1), Accuracy **61.0%** (#1) — but a higher hallucination rate than Opus 4.8's 35.9% (exact Fable 5 rate unpublished; "driven by leading accuracy, not low hallucinations")
- Humanity's Last Exam: **59.0%** no tools / **64.5%** with tools (leads Opus 4.8 49.8% / 57.9%)
- GPQA Diamond: **~93%** (estimated, tied with Opus 4.8's 93.6%)
- Blueprint-Bench 2 (spatial reasoning): **38.6%** (leads Opus 4.8 14.5% by +24.1)

Coding:

- SWE-bench Verified: **95.0%** (Vals.ai) / **93.9%** (Anthropic) — leads Opus 4.8 88.6%
- SWE-bench Pro: **80.3%** (leads Opus 4.8 69.2% by +11.1)
- SWE-bench Multilingual: **~87%** (leads Opus 4.8 84.4%)
- FrontierCode Diamond: **29.3%** (leads Opus 4.8 13.4% by +15.9)
- CursorBench 3.1: **72.9%**

Multimodal / biology:

- HealthBench Professional: **66.0%** (leads Opus 4.8 56.9%); BioMysteryBench hard **46.1%**, human-solved **83.9%**
- Blueprint-Bench 2 (spatial): **38.6%**

Long context:

- GraphWalks BFS 1M: **80.0%** (leads Opus 4.8 68.1% by +11.9) — 1M-token retrieval.

> Provenance: figures compiled by CodingFleet (June 11, 2026) from Anthropic, Vals.ai and Artificial Analysis; vendor and independent sources labelled inline. Fable 5 falls back to Opus 4.8 on ~8–9% of AA benchmark queries, which slightly depresses its measured scores.

### Normalized scores (1–100)

- **Tool use: 91/100.** OSWorld-Verified 85.0%, Terminal-Bench 2.1 88.0% and GDPval-AA 1932 (all #1 at release); capped because AutomationBench 17.4% is low in absolute terms and the ~8–9% Opus 4.8 fallback dilutes autonomous runs.
- **Reasoning: 92/100.** #1 AA Intelligence Index 64.9, HLE 59.0%/64.5% and #1 Omniscience accuracy 61.0%; held below the ceiling by a higher-than-Opus-4.8 hallucination rate and GPQA only ~93% (estimated).
- **Context window: 96/100.** 1M-token span with GraphWalks BFS 80.0% (best at release); a touch below perfect as max output is unpublished and 80% at 1M leaves headroom.
- **Multimodal: 86/100.** Text/image/file input, OSWorld computer use, HealthBench 66.0% and Blueprint-Bench spatial 38.6%; capped by the absence of a broad vision benchmark (MMMU-Pro / Chartography).
- **Coding: 94/100.** SWE-bench Verified 95.0%/93.9%, SWE-bench Pro 80.3% (+11.1), Terminal-Bench 2.1 88.0% and CursorBench 72.9% — best-in-class coding at release; capped only by the fallback classifier and vendor/Val provenance.
- **Cost efficiency: 55/100.** $10/$50 is 2x Opus 4.8 and the premium Mythos-class price; only the batch discount softens it — no free lane.
- **Overall Score: 92/100.** Mean of Tool 91 + Reasoning 92 + Context 96 + Multimodal 86 + Coding 94 = 91.8 → 92. Best fit: unattended high-accuracy coding agents and autonomous knowledge work where raw capability justifies the premium; for calibrated honesty on safety-critical unattended runs, Opus 4.8's lower hallucination rate was arguably safer, and Fable 5.1 / Opus 5.5 now supersede it.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-20
- Method: public internet research (CodingFleet's Claude Fable 5 vs Opus 4.8 30-benchmark comparison compiling Anthropic, Vals.ai and Artificial Analysis; OpenRouter for modality/ID); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.

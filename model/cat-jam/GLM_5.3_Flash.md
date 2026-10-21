# Cat Jam — findings by GLM 5.3 Flash

- Source: Reflection (`Beam` preview served as OpenCode Zen stealth alias `cat-jam` / `cat-jam-free`; revealed successor `reflection/beam-1.0-501b-a23b`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam (Free) — revealed as a **Beam preview** by Reflection AI
- **Short description:** OpenCode Zen's anonymous free stealth route for fast agentic coding (public debut 2026-10-13), revealed 2026-10-16 as an earlier preview of Reflection's Beam. Variant/alias note: per `RULES.md` revealed-stealth identity this is an alias record, not a separate checkpoint — the canonical research home is `model/beam/` (already holding a report); this file documents the alias and its lineage evidence until the orchestrator parks the slug.
- **Provider / access:** OpenCode Zen `opencode/cat-jam-free` / `cat-jam` (Chat Completions) — deprecated 2026-10-16 and replaced by **Beam Free** on Zen; Vercel AI Gateway still lists `stealth/cat-jam` at $0/$0. Canonical successor routes: Reflection API, OpenRouter `reflection/beam-1.0-501b-a23b` at $0.25/$1.00, open weights on Hugging Face (Apache 2.0).
- **Release / knowledge:** stealth debut 2026-10-13 (OpenCode announcement; registry date 2026-10-12); revealed 2026-10-16 in Reflection's Beam launch post, which explicitly identifies the earlier OpenCode Cat Jam demo as its model ("Beam ('Catjam')"). Knowledge cutoff: Beam 1.0 = June 30, 2026 (model card); the preview's cutoff unstated.
- **IDs:** `cat-jam` / `cat-jam-free` (Zen, deprecated); `stealth/cat-jam` (Vercel); `reflection/beam-1.0-501b-a23b` (OpenRouter successor).
- **Context window:** 1,048,576 total / 131,072 max output (Vercel model listing; OpenCode Zen docs) — verified for the stealth slot; Beam 1.0 model card confirms 1M native.
- **Modalities:** text input / text output (Vercel listing — text only); reasoning (low through max); tool calling; structured JSON output. No image/audio.
- **Pricing (as of 2026-10-21):** $0 / $0 during stealth (Vercel rates; OpenCode free route); successor Beam Free limited-time free on OpenCode; Beam 1.0 list $0.25 in / $1.00 out on OpenRouter. Stealth-route caveat: Vercel's Cat Jam policy allows training on prompts; OpenCode's Beam docs specify 30-day safety retention and no training use.
- **Architecture:** successor Beam 1.0 = sparse MoE, 501.3B total / 23.4B active, 52 layers (3 dense + 49 MoE), 256 experts, gated GQA + sliding-window attention, BF16/FP8/NVFP4, Apache 2.0. The exact preview checkpoint behind Cat Jam is not confirmed — Reflection confirms the model connection, StealthModels' 24/24 tokenizer-phrase match supports shared tokenization, and visible output differences leave checkpoint continuity open.

### Raw benchmarks found

Measurements under the **exact stealth ID** are limited to StealthModels' published StealthMark suite; all other numbers below are **Beam 1.0 lineage data** (measured under `Beam (BF16)`, official model card, temp 0.7 / top_p 0.99) — cited labelled, never merged into other models' scores.

Agent / tool use (lineage: Beam BF16 unless noted):

- Terminal-Bench 2.1: **80.1%** (Beam BF16, model card)
- Tau3-Banking / Tau2-Bench: **36.1%** Tau3 (Beam BF16, model card)
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas: **80.8** (Beam BF16, model card)
- AutomationBench (public split): **39.3** (Beam BF16, model card)
- SWE Atlas Codebase QnA: **31.8** (Beam BF16, model card)

Reasoning / knowledge (lineage: Beam BF16):

- GPQA Diamond: **90.6%** (Beam BF16, model card)
- HLE: **36.0%** no tools / **51.1%** with tools (Beam BF16, model card)
- AIME 2026: **97.7%** (Beam BF16, model card)
- SciCode: **49.2%** (Beam BF16, model card)
- CritPt (CriPT AA): **16.3** (Beam BF16, model card)
- StealthMark (exact `cat-jam` ID, StealthModels, 2026-10-15/16): Pelican **58.0**, Raccoon **57.1**, Selfie **54.6**, Beach **48.1**, Ground Truth **30.9**, Mona Lisa **30.3**, Newton's Mirror **19.9** (custom SVG-generation suite — niche, single-site methodology)
- AA-LCR: **78.2**; AA-Omniscience index: **10.8** (Beam BF16, model card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found under the Cat Jam alias (BenchLM 404, checked 2026-10-16 and 2026-10-21)

Coding (lineage: Beam BF16):

- SWE-bench Verified: **81.6%** (Beam BF16, model card)
- SWE-bench Pro v1: **66.1%**; v2-Hard: **76.5%** (Beam BF16, model card)
- SWEBench Multilingual: **78.3%** (Beam BF16, model card)
- LiveCodeBench: **88.3%** (Beam BF16, model card)
- DeepSWE v1.1: **43.3%** (Beam BF16, model card)

Long context:

- AA-LCR 78.2, LongBench v2 67.5 (lineage: Beam BF16, 1M window); no MRCR/RULER published under the alias

### Normalized scores (1–100)

- **Tool use: 79/100.** Terminal-Bench v2.1 80.1 and MCP-Atlas 80.8 (Beam lineage, labelled) with BrowseComp 76.8 — strong agentic stack; capped by Tau3-Banking 36.1 and AutomationBench 39.3.
- **Reasoning: 84/100.** GPQA Diamond 90.6, AIME 2026 97.7 and HLE 51.1 with tools (Beam lineage) — near-frontier reasoning; CriPT 16.3 caps it.
- **Context window: 88/100.** 1M verified on both the stealth slot (Vercel/Zen) and Beam's model card; AA-LCR 78.2 retrieval strong.
- **Multimodal: 15/100.** Text-only in/out on every listing of the alias and the successor.
- **Coding: 80/100.** SWE-bench Verified 81.6, LiveCodeBench 88.3, SWE-Pro v2-Hard 76.5 (Beam lineage, labelled) — flagship-open-weights coding class.
- **Cost efficiency: 95/100.** $0/$0 during stealth and via the Beam Free successor (limited time); Beam list price $0.25/$1.00 is cheap for the class; volatility and deprecation prevent a perfect score.
- **Overall Score: 69/100.** Mean of the five non-cost dims (79+84+88+15+80)/5 = 69.2 — text-only modality is the cap. Best fit: agentic coding on the canonical `model/beam/` entry; this alias record exists to document the reveal and hold lineage evidence.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-21
- Method: public internet research (Reflection Beam launch post + model card, StealthModels reveal dossier with tokenizer evidence, Vercel/OpenCode listings, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores; Beam-lineage numbers are labelled with the measured ID and never merged into other models' scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

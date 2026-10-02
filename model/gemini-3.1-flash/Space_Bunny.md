# Gemini 3.1 Flash — findings by Space Bunny Alpha

- Source: Google / OpenCode Zen (`gemini-3.1-flash`; catalog entry appears to be a legacy or unresolved alias)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** The repository tracks this as Google's efficient 3.1 Flash model, balancing multimodal capability, speed, and cost. Current public catalogs no longer expose a distinct exact-model profile.
- **Provider / access:** The folder's curated metadata names `google/gemini-3.1-flash`; the current OpenCode Zen catalog does not list this exact ID, while it lists Gemini 3.5 Flash, 3.6 Flash, 3.7 Flash, 3.8 Flash, and 3.1 Pro. Do not silently substitute Gemini 3.1 Flash-Lite.
- **Release / knowledge:** No exact-model release date or knowledge cutoff could be verified from the current official Google model index. The model appears to be a legacy/registry entry.
- **IDs:** `google/gemini-3.1-flash`; no current OpenCode Zen `gemini-3.1-flash` ID was found.
- **Context window:** Folder metadata reports 1,048,576 tokens (1M), but the exact current provider page and benchmark profile were not found; this is retained as curated metadata rather than a newly verified exact-model limit.
- **Modalities:** Folder metadata reports text, image, audio, and PDF input with text output. Current exact-model documentation was unavailable, so no stronger claim is made here.
- **Pricing (as of 2026-09-24):** No exact current price was found. A free tier is listed in curated metadata, but no current exact-model rate card was located; no newer Gemini price is substituted.
- **Architecture:** Proprietary; Google has not disclosed a parameter count for this entry.

### Raw benchmarks found

Agent / tool use:

- No exact-model public benchmark row was found in the current Google, Artificial Analysis, BenchLM, or OpenCode catalogs inspected.
- Terminal-Bench, Tau3-Banking, GDPval, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- No exact-model public benchmark row was found in the current Google, Artificial Analysis, BenchLM, or OpenCode catalogs inspected.
- GPQA, HLE, MRCR, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact score found**

Coding:

- No exact-model public benchmark row was found in the current Google, Artificial Analysis, BenchLM, or OpenCode catalogs inspected.
- SWE-bench, DeepSWE, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact score found**

Long context:

- No exact-model retrieval-at-length result was found. The 1M figure in curated metadata is not backed here by a current exact-model benchmark page.

Sources consulted: [Google Gemini model index](https://ai.google.dev/gemini-api/docs/models), [OpenCode Zen model catalog](https://opencode.ai/zen/v1/models), and [models.dev catalog](https://models.opencode.ai/models/google/gemini-3.1-flash/), accessed 2026-09-24. The absence finding is intentional and prevents substituting Gemini 3.1 Flash-Lite or a neighboring Gemini model.

### Normalized scores (1–100)

- **Tool use: 55/100.** Curated multimodal metadata suggests a broadly capable model, but no exact-model tool benchmark was found; the score is conservative.
- **Reasoning: 60/100.** No exact GPQA/HLE/Index value was available, so the score is a cautious capability estimate rather than a measured result.
- **Context window: 95/100.** Curated metadata reports 1M, but current exact-model verification and retrieval evidence are missing.
- **Multimodal: 75/100.** Curated metadata lists text, image, audio, and PDF input with text output; no current exact model page was available.
- **Coding: 60/100.** No exact SWE, DeepSWE, LiveCodeBench, or SciCode value was found.
- **Cost efficiency: 80/100.** A free tier is listed in curated metadata, but the current exact rate and terms could not be verified.
- **Overall Score: 69.0/100.** (55 + 60 + 95 + 75 + 60) / 5 = 69.0. Best fit: legacy deployments that explicitly resolve the `gemini-3.1-flash` ID; verify the current alias before selecting it for new work.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of current Google, OpenCode Zen, and models.dev catalogs; exact-model absence was treated as a negative finding rather than filled with neighboring-model benchmarks. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

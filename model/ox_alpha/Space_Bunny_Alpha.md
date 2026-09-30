# Ox Alpha — findings by Space Bunny Alpha

- Source: OpenCode Zen (`x-preview-f-free`; formerly `ox-alpha`; underlying attribution: Z.ai GLM-5 generation)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (formerly `ox-alpha`; now cataloged as GLM-5.3-Flash)
- **Short description:** OpenCode's former stealth/free endpoint, publicly attributed by black-box forensics to a Z.ai GLM-5-generation model; the current OpenCode Data catalog maps the name to GLM-5.3-Flash.
- **Provider / access:** OpenCode Zen legacy ID `x-preview-f-free`; current public data mapping is `glm-5.3-flash`. The legacy endpoint's historical availability and exact serving variant are not guaranteed.
- **Release / knowledge:** The forensic repository identifies the historical Ox Alpha campaign and attributes it to the GLM-5 generation; no reliable knowledge cutoff was found.
- **IDs:** `x-preview-f-free`; `ox-alpha`; current mapped ID `glm-5.3-flash`.
- **Context window:** OpenCode Data lists **1M context** and **131K output** for the current GLM-5.3-Flash mapping. These are current mapped-model values, not a verified historical Ox Alpha limit.
- **Modalities:** OpenCode Data lists text, image, video, and PDF input; current mapped GLM-5.3-Flash is text/image in the evaluated Artificial Analysis profile. Historical Ox Alpha modality probing is not a vendor specification.
- **Pricing (as of 2026-09-24):** The historical route was free/stealth; OpenCode Data reports current mapped pricing of $0.15 input and $0.50 output per 1M tokens, with 93% cached-input ratio in its usage view. The historical free endpoint may have had data-use and availability caveats.
- **Architecture:** Exact serving variant and quantization are unproven. The public forensic conclusion is a GLM-5-generation Z.ai model, not a verified exact checkpoint.

### Raw benchmarks found

Agent / tool use:

- No exact public benchmark value was found for the historical `ox-alpha` / `x-preview-f-free` route.
- The forensic repository documents more than 300 calls and multi-gateway behavior experiments, but these are identification measurements, not standardized model benchmarks.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- No exact GPQA, HLE, MRCR, LCR/MLCR, CritPt, or hallucination score was found for the historical route.
- Artificial Analysis Intelligence Index: **42** for the current mapped GLM-5.3-Flash, not a verified Ox Alpha result; it is not attributed to Ox Alpha below.

Coding:

- No exact historical SWE-bench, DeepSWE, LiveCodeBench, SciCode, or Vibe Code Bench value was found.
- The current mapped GLM-5.3-Flash has separate benchmark rows, but they are not transferred to the former alias.

Long context:

- The forensic repository discusses context-limit experiments, but no standardized retrieval-at-length score was found.
- Current mapped GLM-5.3-Flash context is listed as 1M; this is a mapping, not historical Ox Alpha proof.

Sources consulted: [OpenCode Data Ox Alpha/GLM-5.3-Flash profile](https://opencode.ai/data/unknown/ox-alpha), [OpenCode Zen documentation](https://opencode.ai/docs/zen/), and [Ox Alpha identification forensics](https://github.com/LuD1161/ox-alpha-identification-public), accessed 2026-09-24. The report deliberately separates historical identity evidence from current mapped-model facts.

### Normalized scores (1–100)

- **Tool use: 60/100.** The historical route was used for agent/tool experiments, but no standardized exact-model benchmark was found; current GLM-5.3-Flash scores are not transferred.
- **Reasoning: 62/100.** The forensic attribution supports a capable GLM-5-generation model, but no exact historical reasoning benchmark was found.
- **Context window: 85/100.** The current mapping lists 1M context; historical exact routing and retrieval behavior remain unverified.
- **Multimodal: 70/100.** OpenCode Data lists text/image/video/PDF input for the current mapping, while the exact historical Ox Alpha modality contract is unresolved.
- **Coding: 60/100.** No exact historical coding benchmark was found for `x-preview-f-free`.
- **Cost efficiency: 95/100.** The historical endpoint was free, but its stealth/data-use status was temporary and cannot be treated as a durable price.
- **Overall Score: 67.4/100.** (60 + 62 + 85 + 70 + 60) / 5 = 67.4. Best fit: historical research or experiments that explicitly need the former alias; new users should select the current mapped GLM-5.3-Flash ID instead.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of OpenCode's current data mapping, Zen documentation, and the public black-box identification repository; historical alias and current mapped-model facts are kept separate. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

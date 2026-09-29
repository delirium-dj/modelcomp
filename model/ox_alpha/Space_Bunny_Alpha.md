# Ox Alpha — findings by Space Bunny Alpha

- Source: OpenCode Zen (`x-preview-f-free`; formerly `ox-alpha`; vendor-confirmed as Z.ai GLM-5.3-Flash)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (formerly `ox-alpha` / `x-preview-f-free`; vendor-confirmed as GLM-5.3-Flash)
- **Short description:** OpenCode's former stealth/free endpoint. Z.ai has now **publicly revealed Ox Alpha as GLM-5.3-Flash**, converting the earlier black-box attribution into a vendor statement. The historical alias itself is dead.
- **Provider / access:** OpenCode Zen legacy ID `x-preview-f-free`; current public data mapping is `glm-5.3-flash`. The Zen model table and the live `https://opencode.ai/zen/v1/models` response were re-checked on 2026-09-29 and contain **no `ox-alpha` and no `x-preview-f-free` entry** — the legacy endpoint now resolves to **zero catalog entries**. The live Zen IDs are `glm-5.3-flash` and `glm-5.3`.
- **Release / knowledge:** GLM-5.3-Flash is listed by Artificial Analysis as released 2026-08-26; the Ox Alpha stealth campaign predates that public release. No reliable knowledge cutoff was found.
- **IDs:** `x-preview-f-free` (legacy, now absent); `ox-alpha` (legacy, now absent); current Zen ID `glm-5.3-flash`; Artificial Analysis ID `glm-5-3-flash`; Z.AI open-weight checkpoint `zai-org/GLM-5.3-Flash`.
- **Context window:** **1M tokens** (Artificial Analysis for GLM-5.3-Flash; OpenCode Data also lists 1M with 131K output). This is now a vendor-confirmed value for the revealed model rather than a mapping inference.
- **Modalities:** Artificial Analysis verifies **text and image input, text output** for GLM-5.3-Flash. OpenCode Data additionally lists text, image, video, and PDF input for its mapping; the Artificial Analysis modality table is treated as the narrower verified contract, and the historical Ox Alpha modality probing remains non-vendor evidence.
- **Pricing (as of 2026-09-29):** The historical route was free/stealth. The current Zen price for `glm-5.3-flash` is **$0.15 input / $0.50 output per 1M tokens** with **$0.03** cached read; Artificial Analysis reports the same $0.15/$0.50 with an 83% cache discount and **$0.25 per Intelligence Index task**. The free/stealth pricing is historical and not a durable entitlement.
- **Architecture:** **Resolved.** GLM-5.3-Flash is an open-weight **Mixture-of-Experts model with 320B total / 18B active parameters**, released under the **MIT license**, with **1M context** (Artificial Analysis technical specifications, accessed 2026-09-29). This supersedes the earlier "exact serving variant and quantization unproven" conclusion. The hybrid sparse + linear attention structure is documented for the GLM-5.3 family; the prior "GLM-5-generation Z.ai model" black-box attribution is now a vendor confirmation rather than a forensic inference.

### Raw benchmarks found

> With the vendor reveal, the historical-versus-mapped separation in earlier versions of this file is no longer needed: Ox Alpha *is* GLM-5.3-Flash. The values below are exact-model measurements for the revealed model.

Agent / tool use:

- **Artificial Analysis Intelligence Index: 42** on **v4.3.2**, rank **#4/116** among comparable open-weight models, and **#16/116** for cost per task at $0.25 (Artificial Analysis, accessed 2026-09-29). This supersedes the earlier unattributed "42" row, which could not be credited to Ox Alpha.
- **AutomationBench-AA: 48.8%** (Artificial Analysis v4.3.2 component evaluation)
- GLM-5.3-Flash proxy rows from the vendor/aggregator set: Toolathlon Verified **73.0%** and FrontierSWE **78.1%** (BenchLM/Z.AI GLM-5.3 rows). The GLM-5.3-Flash DeepSWE row is **63.4%** (BenchLM/Z.AI GLM-5.3-Flash model-card row).
- Output speed **48.0 tok/s** on Z.AI's API, **TTFT 3.30 s** (Artificial Analysis, 2026-09-29).
- Terminal-Bench 4.0, Tau3-Banking, GDPval-AA, Claw-Eval, and MCP-Atlas as standalone values: **no verified public exact score found**

Reasoning / knowledge:

- v4.3.2 index composition: AA-Briefcase v1.1, GDPval-AA v2.1, **AutomationBench-AA**, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1.
- Verbosity: **180M** output tokens on the Intelligence Index versus a 140M class median (Artificial Analysis, 2026-09-29).
- Standalone GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination scores: **no verified public exact score found**

Coding:

- **DeepSWE: 63.4%** (BenchLM/Z.AI GLM-5.3-Flash model-card row)
- LiveCodeBench, SWE-bench Verified, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- **1M context window** (Artificial Analysis technical specifications), with AA-LCR v1.1 as a long-context component of the v4.3.2 index.
- A standalone RULER, MRCR, or GraphWalks retrieval-at-length score: **no verified public exact score found**

Sources consulted: [Artificial Analysis GLM-5.3-Flash](https://artificialanalysis.ai/models/glm-5-3-flash), [OpenCode Zen documentation and pricing](https://opencode.ai/docs/zen/), [OpenCode Zen model catalog](https://opencode.ai/zen/v1/models), [OpenCode Data Ox Alpha/GLM-5.3-Flash profile](https://opencode.ai/data/unknown/ox-alpha), [BenchLM GLM-5.3](https://benchlm.ai/models/glm-5-3), and [Ox Alpha identification forensics](https://github.com/LuD1161/ox-alpha-identification-public), accessed 2026-09-29. The forensic repository's attribution is now corroborated by the vendor reveal, and the historical alias's absence from the catalog is confirmed against the live `/v1/models` response.

### Normalized scores (1–100)

- **Tool use: 82/100.** AutomationBench-AA at 48.8%, Toolathlon Verified at 73.0%, DeepSWE at 63.4%, and a v4.3.2 Intelligence Index of 42 ranked **#4/116** in class indicate solid agentic SaaS and software-engineering performance. The 3.30 s TTFT and the absent standalone Terminal-Bench 4.0 value keep it out of the top band.
- **Reasoning: 80/100.** A v4.3.2 index of 42 placing the model #4/116 among comparable open-weight models is strong composite evidence, but the index is exactly that — a composite — and no standalone GPQA, HLE, CritPt, or LCR/MLCR row was published for this checkpoint.
- **Context window: 88/100.** A **1M** context window is now vendor-confirmed on the revealed model and sits at the top of the size tiers, trimmed from the maximum because no standalone retrieval-at-length score (RULER, MRCR, GraphWalks) was published.
- **Multimodal: 65/100.** Artificial Analysis verifies text and image input with text output; the wider video/PDF list comes from OpenCode Data rather than the vendor modality table, and no exact-model visual benchmark was found, so the score stays at verified-image level.
- **Coding: 65/100.** DeepSWE at **63.4%** is a real exact-model coding measurement, but SWE-bench Verified, LiveCodeBench, and SciCode values are all absent and FrontierSWE 78.1% comes from the larger GLM-5.3 rather than the Flash checkpoint. The evidence base is too thin to score higher despite the strong composite index.
- **Cost efficiency: 88/100.** The historical endpoint was free, but the revealed model is priced at **$0.15/$0.50 per 1M** with an 83% cache discount and **$0.25 per Intelligence Index task** (#16/116 for cost) — genuinely cheap, and MIT-licensed open weights allow self-hosting. The free stealth pricing cannot be treated as durable, so this is well below 100.
- **Overall Score: 76.0/100.** Half-up mean of the five quality dimensions, Cost efficiency excluded: (82 + 80 + 88 + 65 + 65) / 5 = 380 / 5 = 76.0. Best fit: new users should select the current Zen ID `glm-5.3-flash`; the historical `ox-alpha` alias has no live endpoint.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of the Z.ai vendor reveal of Ox Alpha as GLM-5.3-Flash, Artificial Analysis v4.3.2 measurements, the live OpenCode Zen `/v1/models` catalog and pricing table, OpenCode Data, BenchLM, and the public black-box identification repository. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GLM_5_3_Flash.md`, using the same headings.

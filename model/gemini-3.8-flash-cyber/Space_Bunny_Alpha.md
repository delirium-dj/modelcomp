# Gemini 3.8 Flash Cyber — findings by Space Bunny Alpha

- Source: Google (`gemini-3.8-flash-cyber`; September 2, 2026 launch variant)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's cybersecurity-focused Gemini 3.8 Flash variant for autonomous vulnerability discovery, patching, and cyber-agent workflows.
- **Provider / access:** Gemini 3.8 Flash family; BenchLM identifies the variant as a September 2, 2026 Google launch snapshot. An exact standalone API ID, context limit, and hosted price were not published in the sources reviewed.
- **Release / knowledge:** BenchLM lists September 2, 2026. No knowledge cutoff was shown.
- **IDs:** Exact provider ID not verified; tracked as `gemini-3.8-flash-cyber`.
- **Context window:** **Not published for this exact variant** (BenchLM, accessed 2026-09-24). Do not borrow the standard Gemini 3.8 Flash limit.
- **Modalities:** The reviewed sources do not expose a complete exact-variant modality table. Cybersecurity input/output claims are limited to vulnerability discovery and patching benchmarks; no separate audio/video claim is made.
- **Pricing (as of 2026-09-24):** No comparable first-party API rate was published for this exact variant. Standard Gemini 3.8 Flash pricing is not substituted.
- **Architecture:** Proprietary; Google has not disclosed parameter count for the Cyber variant.

### Raw benchmarks found

Agent / tool use:

- CyberGym: **86.2% pass@1** for autonomous vulnerability discovery in C/C++ (Google launch snapshot, as recorded by BenchLM)
- CWE-Bench: **47.2% pass@1** for external automated patching (Google launch snapshot, as recorded by BenchLM)
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact score found**

Reasoning / knowledge:

- No exact GPQA, HLE, MRCR, LCR/MLCR, CritPt, or hallucination score was found.
- Artificial Analysis Intelligence Index / BenchLM overall: **not published for this exact variant** (BenchLM reports two source-displayable rows and no public rank)

Coding:

- CWE-Bench: **47.2%** (cybersecurity automated-patching benchmark, not a general SWE-bench result)
- SWE-bench Verified, SWE-Pro, DeepSWE, LiveCodeBench, SciCode, and Vibe Code Bench: **no verified public exact score found**

Long context:

- No exact-model context limit or retrieval-at-length result was published. The standard Gemini 3.8 Flash limit is intentionally not transferred.

Sources consulted: [BenchLM Gemini 3.8 Flash Cyber](https://benchlm.ai/models/gemini-3-8-flash-cyber) and [Google current Gemini model index](https://ai.google.dev/gemini-api/docs/models), accessed 2026-09-24. Google launch claims are attributed through BenchLM's exact-profile record; no peer findings were used.

### Normalized scores (1–100)

- **Tool use: 88/100.** CyberGym 86.2% and CWE-Bench 47.2% are direct evidence for autonomous security-agent execution, but only two exact rows exist and standard agent benchmarks are absent.
- **Reasoning: 65/100.** Vulnerability discovery implies useful reasoning, but no exact GPQA/HLE/Index value is published; the sparse evidence caps the score.
- **Context window: 50/100.** The exact variant's context limit is not published, so no family value is assumed.
- **Multimodal: 20/100.** No exact-variant modality table was found; this deliberately avoids borrowing standard Gemini 3.8 Flash capabilities.
- **Coding: 70/100.** CWE-Bench 47.2% supports patching ability in a narrow security domain, but general coding benchmarks are absent.
- **Cost efficiency: 50/100.** No exact hosted rate was published; the variant is scored conservatively rather than inheriting the sibling model's price.
- **Overall Score: 58.6/100.** (88 + 65 + 50 + 20 + 70) / 5 = 58.6. Best fit: security research and vulnerability-analysis workflows where the two published cyber-agent results matter more than broad model coverage.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the exact BenchLM Gemini 3.8 Flash Cyber profile and Google's current model index; sibling-model specifications and standard Flash prices were not transferred. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

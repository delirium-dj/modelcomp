# GLM 5.3 — findings by Pixel Canary

- Source: Z.AI (`opencode/glm-5.3`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (Z.AI flagship; OpenCode ID `opencode/glm-5.3`; paid only — no Zen Free ID for this slug, that tier is `glm-5.3-flash-free` / `glm-5.3-free`)
- **Short description:** Z.AI's flagship open-weights reasoning MoE (753B total / 40B active) for agentic coding and 1M-context work, text-only. BenchLM composite 65.44/100, rank #29 of 512 (48 of 486 benchmarks covered — one of the best-measured open models in this repo).
- **Provider / access:** Z.AI Open Platform plus OpenCode (paid), Fireworks/Novita-style hosts and self-hosting from the open-weights release; OpenAI-compatible API with tool calling and structured output.
- **Release / knowledge:** GLM-5.x generation, successor to GLM-5.2 (BenchLM "related earlier model"); exact release date and knowledge cutoff not published on the profile.
- **Context window:** 1,000,000 tokens input (BenchLM and `meta.json` agree); long-horizon runs are evidenced by sweMarathon (42.5%).
- **Modalities:** Text in / text out (reasoning on by default). Tool calling: yes (Toolathlon, AutomationBench, Tau3 rows exist). No image/video/audio input.
- **Pricing (as of 2026-09-29):** OpenCode Zen paid tier **$1.40 / 1M input, $4.40 / 1M output, $0.26 cached reads**; open weights make self-hosting free at the cost of hardware.
- **Architecture:** 753B-parameter sparse MoE, ~40B active, open weights, successor to GLM-5.2.

### Raw benchmarks found

Agentic / tool use (BenchLM, updated 2026-09-28): GDPval-AA **1769 Elo** (57.2% normalized); Terminal-Bench 2.1 **88.2%** (Vals 71.5%); AA Terminal-Bench 4.0 **41.9%**; Toolathlon-Verified **73.0%**; AutomationBench **48.2%** (AA 62.2%); AA Tau3-Banking **50.3%**; AA Briefcase **1517**; AA Agentic Index **53.4**; CyberGym **84.5%**; ExploitGym **15.0%**; Agents' Last Exam **28.5%**; GDP.pdf **11.2%**

Coding: SWE-bench (Vals) **95.4%**; FrontierSWE **78.1%** (v2 **30.2%**); DeepSWE **66.9%**; sweMarathon **42.5%**; NL2Repo **58.0%**; LiveCodeBench (Vals) **80.5%**; AA-SciCode **59.0%**; ProgramBench **19.0%**

Reasoning / knowledge / long context: HLE with tools **62.5%**; AA Intelligence Index ≈ mid-40s band; AA-LCR / MRCR rows covered in the same 48-benchmark set; AA-MMMU and video suites are **not** applicable (text-only).

Missing for this exact ID: official SWE-bench Verified (Vals harness only), GPQA Diamond under the AA harness label, image/video/audio benchmarks, MRCR depth curve.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA Elo 1769 sits in the top handful of the 512-model field, Terminal-Bench 2.1 88.2% and Toolathlon-Verified 73.0% are frontier-class, and AA Agentic Index 53.4 is the best open-weight agentic index measured here; capped only by Agents' Last Exam 28.5% and ExploitGym 15.0%.
- **Reasoning: 78/100.** HLE-with-tools 62.5% is genuinely frontier-adjacent and the 48-benchmark coverage is consistent, but no AA Omniscience/hallucination pair is published for this ID, so factuality-under-abstention is unproven.
- **Context window: 88/100.** 1M input with the strongest long-horizon evidence in its class (sweMarathon 42.5% marathon repo runs, Terminal-Bench 2.1 88.2%); capped because no MRCR/RULER retrieval-depth row exists for the exact ID.
- **Multimodal: 38/100.** Architecturally text-only — no image, video, audio or PDF input at all. Every point here comes from code/document-as-text handling, so this is a hard cap rather than a measurement gap.
- **Coding: 90/100.** SWE-bench (Vals) 95.4%, FrontierSWE 78.1%, DeepSWE 66.9% and LiveCodeBench 80.5% make it the strongest open-weights coder measured in this repo; capped by FrontierSWE v2 30.2% and ProgramBench 19.0%, where the hardest long-horizon suites still bite.
- **Cost efficiency: 82/100.** $1.40/$4.40 with $0.26 cache reads is roughly 4–6× cheaper than Western flagships for near-flagship agentic coding, and MIT-style open weights allow free self-hosting; capped because there is no Zen Free ID and the 753B footprint makes self-hosting hardware-expensive.
- **Overall Score: 76.4/100.** (88 + 78 + 88 + 38 + 90) / 5 = 382 / 5 = 76.4 — dragged entirely by the text-only modality ceiling: for text-only agentic coding it performs like a 90-class model.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `glm-5-3` refreshed 2026-09-28 covering 48 benchmarks, OpenCode/Z.AI listing, models.dev pricing index); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

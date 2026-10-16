# Kimi K3 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k3`), also `moonshotai/kimi-k3` on OpenRouter
- Date: 2026-10-16 (UTC) — rewrite pass (previous Signature 2026-10-09)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Rewrite pass — 2026-10-16** (≥3 independent sources).
> Independently re-sourced this pass: GPQA Diamond **93.5%** (vendor) / **92.93%** (Vals); MMLU-Pro 88.0% (Vals); HLE 43.5% no-tools / 56% with tools; AA-LCR 74.7% (vendor) / 88.7% (Kilo); CritPt 23.4%; SWE-bench Verified **93.40%** (Vals) / 95.10% (Vals Index subset); Terminal-Bench 2.1 **88.3%** (vendor) / **80.9%** (Vals); Terminal-Bench 2.0 88.3%; Terminal-Bench 4.0 **17.17%** (Vals); DeepSWE 67.5%; FrontierSWE 81.2%; ProgramBench 77.8%; SWE-Marathon 42.0; LiveCodeBench 87.2% (Vals); SciCode 58.7%; MCPMark-Verified **94.5%**; MCP Atlas 84.2%; BrowseComp 91.2%; DeepSearchQA 95.0%; Toolathlon-Verified 73.2%; OSWorld-Verified 84.8% / OSWorld 2.0 58.3%; GDPval-AA v2.1 1533; MMMU-Pro 81.6%; OmniDocBench 91.1%; Vals Index 50.30% (#28/45); BenchLM 80.5 (#5/218).
> **Conflicts surfaced:** (1) **SWE-bench Verified 93.4–95.1% (Vals) vs 76.8% (third-party table)** — large harness/effort gap. (2) **Coding is bimodal**: strong SWE-bench 93.4% / Vibe 85% / Terminal-Bench 2.1 88.3% vs very weak Terminal-Bench 4.0 17.2% / Code Migration 16.1% / ProgramBench 2.0% in the prior Vals snapshot (Moonshot flags harness sensitivity). (3) **AA Intelligence Index 44 (#3–4 open-weight) vs 57 (#4 overall)** across sources. (4) Modality conflict — video input per Moonshot/Vals vs text+image only per AA. (5) Context **1M** (docs/AA) vs **1.05M** (BenchLM). (6) AA-LCR 74.7% (vendor) vs 88.7% (third-party).
> Sources: https://www.kimi.com/blog/kimi-k3 · https://k3-kimi.com/ · https://www.vals.ai/models/kimi_kimi-k3 · https://benchlm.ai/models/kimi-3 · https://deepinfra.com/blog/kimi-k3-vs-deepseek-v4-pro-vs-glm-5-2 · https://github.com/McClawdDigital/kimi-k3-agent-ops/blob/master/sections/02-benchmarks.md

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship; API ID `kimi-k3`). Not an alias of Kimi K2.7 Code.
- **Short description:** Moonshot AI's 2.8T-parameter open-weight MoE flagship (2026-07-16; weights 2026-07-27), the first open 3T-class model, for long-horizon agentic coding, knowledge work and 1M-token reasoning with native vision.
- **Provider / access:** Moonshot API (`kimi-k3`), first-party apps, OpenRouter (`moonshotai/kimi-k3`), Bedrock and 15+ providers; open weights via Hugging Face. No Zen Free ID.
- **Release / knowledge:** 2026-07-16; weights by 2026-07-27; knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3`.
- **Context window:** 1,048,576 (1M) tokens; 131,072 max output.
- **Modalities:** text + image + video in; text out; native vision, max-effort thinking toggle.
- **Pricing (as of 2026-10-16):** $3.00 in / $15.00 out per 1M, $0.30 cache-read / $3.75 cache-write; open weights (self-host); third-party from $2.85/$14.25.
- **Architecture:** 2.8T-total sparse MoE (**104B active**, 16 of 896 experts), Kimi Delta Attention + Attention Residuals, MXFP4 weights / MXFP8 activations; Kimi K3 License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **88.3%** (vendor) / **80.9%** (Vals); Terminal-Bench 2.0 88.3%; Terminal-Bench 4.0 **17.17%** (Vals)
- MCPMark-Verified **94.5%** (leads all models); MCP Atlas 84.2%; Toolathlon-Verified 73.2%
- BrowseComp **91.2%**; DeepSearchQA 95.0%; OSWorld-Verified 84.8% / OSWorld 2.0 58.3%; JobBench 52.9%
- GDPval-AA v2.1 1533; AA-Briefcase 1548; APEX-Agents 41.0%

Reasoning / knowledge:

- GPQA Diamond **93.5%** (vendor) / 92.93–92.9% (Vals); MMLU-Pro 88.0% (Vals)
- HLE **43.5%** no-tools / 56% with tools; AA-LCR 74.7% (vendor) / 88.7% (Kilo); CritPt 23.4%
- AA Intelligence Index **44 (#3/117 open-weight)** vs **57 (#4 overall)**; BenchLM overall 80.5 (#5/218)
- LMArena Text 1488 (#16); Vals Index 50.30% (#28/45)

Coding:

- SWE-bench Verified **93.40%** (Vals, #8/88) / 95.10% (Vals Index subset); LiveCodeBench 87.2% (Vals); Vibe Code Bench 84.97%
- DeepSWE 67.5%; FrontierSWE 81.2%; ProgramBench 77.8%; SWE-Marathon 42.0; Kimi Code Bench 2.0 72.9%
- AA-SciCode 59.5% / SciCode 58.7%; AA Coding Index 76.2%; Code Migration 16.10%; CursorBench 3.2 60.8%

Multimodal / long context:

- MMMU-Pro 80.5–81.6% (83.4% w/ Python); OmniDocBench 91.1%; MathVision 94.3–97.8%
- AA-LCR 74.7–88.7% at 1M; no standard MRCR/RULER.

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 80.9–88.3%, MCPMark 94.5%, BrowseComp 91.2%, OSWorld-Verified 84.8% and DeepSearchQA 95% are elite on tool use; capped by TB4.0 17.2% and GDPval-AA 1533 (below the 1750 ref).
- **Reasoning: 90/100.** GPQA 93.5%, HLE 56% with tools and AA-LCR 74.7–88.7% lead open weights; held by AA Index 44 and CritPt 23.4%.
- **Context window: 96/100.** 1M input with 131K output and AA-LCR up to 88.7%; the ≥98%-at-512K condition for 100 is unmet.
- **Multimodal: 86/100.** Native text + image + video in (video band) with MMMU-Pro 81.6% and OmniDocBench 91.1%; text-only output and the AA text+image-only conflict cap it.
- **Coding: 88/100.** Vals SWE-bench 93.4%, LiveCodeBench 87.2%, FrontierSWE 81.2% and AA-SciCode 59.5% are near-frontier; capped by TB4.0 17.2% / Code Migration 16.1%.
- **Cost efficiency: 63/100.** Premium $3/$15 with $0.30 cached maps to the ~60 anchor; nudged up for ~$2 AA cost/task and free prefix caching.
- **Overall Score: 90/100.** (89 + 90 + 96 + 86 + 88) / 5 = 89.8 → 90. Best fit: near-frontier open-weight reasoning plus a genuine 1M window and best-in-class MCP/tool use; pair with a coding specialist for hard terminal/agentic harnesses.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-16
- Method: rewrite-pass public internet research (Moonshot Kimi K3 blog + k3-kimi.com, Vals AI model page, BenchLM model/GLM comparison, DeepInfra comparison, the community model-card benchmark compilation). The bimodal coding split, SWE-bench and AA-Index spreads and modality/context conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

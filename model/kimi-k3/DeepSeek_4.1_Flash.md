# Kimi K3 — findings by DeepSeek 4.1 Flash

- Source: Moonshot AI (`kimi-k3`), also `moonshotai/kimi-k3` on OpenRouter
- Date: 2026-10-09 (UTC) — deep second pass (previous Signature 2026-10-06)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass re-verification — 2026-10-09** (≥3 independent sources).
> Independent Vals AI: SWE-bench Verified **93.40% (#8/88)**, GPQA Diamond **92.93%**, Vibe Code Bench 84.97%, Terminal-Bench 2.1 80.90%, Terminal-Bench 4.0 **17.17% (#27/45)**, Code Migration 16.10%, ProgramBench 2.00%, Vals Index **50.30% (#28/45)** (launch 57.81% #8). Artificial Analysis: Intelligence Index **44 (#3/117 open-weight)**, GDPval-AA v2.1 **1533 (#44)**, ~$2.00/index task, 39.2 t/s. LMArena Text 1488 (#16); BenchLM 70.8 (#15).
> **Conflicts surfaced:** (1) Large cross-source overall spread — AA ranks it #3 open-weight, LMArena #16, but Vals Index #28/45; (2) coding is **bimodal** — strong SWE-bench 93.4% / Vibe 85% vs very weak TB4.0 17.2% / TB-Science 1.4% / Code Migration 16.1% / ProgramBench 2.0% (harness sensitivity, flagged by Moonshot); (3) modality conflict — video input per Moonshot/Vals vs text+image only per AA; (4) 1M (docs/AA) vs 1.05M (BenchLM).
> Sources: https://www.kimi.com/blog/kimi-k3 · https://platform.kimi.ai/docs/guide/kimi-k3-quickstart · https://www.vals.ai/models/kimi_kimi-k3 · https://artificialanalysis.ai/models/kimi-k3 · https://lmarena.ai/leaderboard/text

## Model card

- **Name:** Kimi K3 (Moonshot AI flagship; API ID `kimi-k3`). Not an alias of Kimi K2.7 Code.
- **Short description:** Moonshot AI's 2.8T-parameter open-weight MoE flagship (2026-07-16), billed as the first open 3T-class model, for long-horizon agentic coding, knowledge work and 1M-token reasoning with native vision.
- **Provider / access:** Moonshot API (`kimi-k3`), first-party apps, OpenRouter (`moonshotai/kimi-k3`); open weights via Hugging Face. No Zen Free ID.
- **Release / knowledge:** 2026-07-16; weights by 2026-07-27; knowledge cutoff not published.
- **IDs:** `moonshotai/kimi-k3`.
- **Context window:** 1,048,576 (1M) tokens; 131,072+ output.
- **Modalities:** text + image (+video per Moonshot/Vals) in; text out; native vision, thinking always on.
- **Pricing (as of 2026-10-09):** $3.00 in / $15.00 out per 1M, $0.30 cache-hit; open weights (self-host); third-party from $2.85/$14.25.
- **Architecture:** 2.8T-total sparse MoE (896 experts, 16/token), Stable LatentMoE + Kimi Delta Attention + Attention Residuals, MXFP4; Kimi K3 License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: 85% (AA) / **80.9% (Vals)**; Terminal-Bench 4.0 **17.17%** (Vals)
- GDPval-AA v2.1 **1533 (#44, AA)**; BrowseComp 91.2% (Moonshot); MCP Atlas 84.2%; Toolathlon 73.2%
- AA Agentic Index 50.6%; AA-Briefcase 1501; JobBench 52.9%

Reasoning / knowledge:

- GPQA Diamond **92.93%** (Vals) / 93.5% (Moonshot); MMLU-Pro 87.97%; HLE 56% with tools / 43.5% no tools
- AA-LCR 88.7%; CritPt 23.4%; ARC-AGI-2 60.4%; AA Intelligence Index **44 (#3/117 open-weight)**
- Omniscience Accuracy 47.6% / Hallucination 53.2%

Coding:

- SWE-bench Verified **93.40% (#8/88, Vals)**; LiveCodeBench 87.2% (Vals); Vibe Code Bench 84.97%
- DeepSWE 67.5%; AA-SciCode 59.5%; AA Coding Index 76.2%; Code Migration 16.10%; ProgramBench 2.00%

Multimodal:

- MMMU-Pro 80.5–81.6%; MathVision 94.3–97.8%; OmniDocBench 91.1%

Long context:

- AA-LCR **88.7%** at 1M; no standard MRCR/RULER.

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.1 80.9–85%, BrowseComp 91.2%, MCP Atlas 84.2% and AA Agentic 50.6% are strong; capped by TB4.0 17.2% and GDPval-AA 1533 (below the 1750 ref).
- **Reasoning: 91/100.** GPQA 92.93%, HLE 56% with tools and AA-LCR 88.7% lead open weights; held by AA Index 44 and CritPt 23.4%.
- **Context window: 96/100.** 1M input with 131K+ output and AA-LCR 88.7%; the ≥98%-at-512K condition for 100 is unmet.
- **Multimodal: 74/100.** Native image (+video per Moonshot/Vals) with strong vision scores; top of the video band, degraded by the AA text+image-only conflict.
- **Coding: 87/100.** Vals SWE-bench 93.4%, LiveCodeBench 87.2%, Vibe 84.97%, AA-SciCode 59.5%; capped by TB4.0 17.2% / Code Migration 16.1%.
- **Cost efficiency: 63/100.** Premium $3/$15 with $0.30 cached maps to the ~60 anchor; nudged up for ~$2 AA cost/task and free prefix caching.
- **Overall Score: 87/100.** (89 + 91 + 96 + 74 + 87) / 5 = 87.4 → 87. Best fit: near-frontier open-weight reasoning plus a genuine 1M window; pair with a coding specialist for hard terminal/agentic harnesses.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: deep second-pass public internet research (Moonshot Kimi K3 blog + platform docs, Vals AI model page, Artificial Analysis model page, LMArena). The bimodal coding split and modality/context conflicts are surfaced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

# GPT-6 Astra — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-6 Astra (`openai/gpt-6-astra`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship above GPT-5.6 Sol, built for frontier reasoning and agents, with a ~1.05M-token window and staged rollout from Trusted Access programs. Top-ranked general model as of Oct 2026.
- **Provider / access:** OpenAI Responses API (`gpt-6-astra`); no OpenCode Zen free ID (`noFreeId`). Reasoning flagship; tool calls + JSON mode.
- **Release / knowledge:** 2026 (GPT-6 family); knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-6-astra`.
- **Context window:** 1,050,000 (~1M) in / 128,000 max out (curated meta; MRCR measured to 1M).
- **Modalities:** text, image in; text out; reasoning on; tool calls; JSON mode. No audio/video input, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $10 / $50 per 1M input/output (no free tier).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (68 of 618 rows), citing OpenAI "GPT-6 Astra", the GPT-6 Astra system card, Artificial Analysis, ARC Prize, Epoch AI, Vals AI and Collinear (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (Vals 87.3%); Terminal-Bench 4.0 57.9%; TB-Science 64.6%
- BrowseComp: **91.5%**; OSWorld 2.0 **72.6%**; ApprenticeBench 68%
- GDPval-AA: **1542** (AA; normalized 52.1%); AA Briefcase 1569
- AA Tau3 Banking 41.4%; AA AutomationBench 68.5% (AutomationBench 41.4%); AA ITBench 48.6%
- AA Agentic Index: **51.5%**; CWE-bench v1 68.0%
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found for this exact ID

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **96.0% / 96.0%** (OpenAI; AA 96.1%)
- ARC-AGI-1 / ARC-AGI-2 / ARC-AGI-3: **98.5% / 95.0% / 62.7%** (ARC Prize verified)
- FrontierMath v2 Tier-4: **97.6%** (OpenAI)
- HLE (w tools / AA): **57.2% / 54.7%**; AA-LCR 80.7%
- MRCR v2: **100.0%** (256K–512K) / **96.3%** (512K–1M)
- CritPt: **31.7%**; Artificial Analysis Intelligence Index **52.7**
- Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%**

Coding:

- DeepSWE: **74.1%** (OpenAI); AA Coding Index **76.9%**
- FrontierCode 1.1 Main/Extended: **53.3% / 64.5%**; FrontierSWE v2 **65.5%**
- AA-SciCode: **56.5%**; Terminal-Bench 2.1 88.4%; PostTrainBench v1.1 44.3%

Long context:

- MRCR v2 100.0% (256K–512K) and 96.3% (512K–1M); GraphWalks BFS 256K–1M 71.8%; AA-LCR 80.7%.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 90/100.** Terminal-Bench 2.1 88.4%, BrowseComp 91.5% and OSWorld 72.6% are frontier-tier; capped by AA Agentic Index 51.5%, Tau3 41.4% and a mid GDPval-AA (1542) — very strong but not the single best agentic planner in the set.
- **Reasoning: 96/100.** GPQA-Diamond 96%, ARC-AGI-2 95% / ARC-AGI-3 62.7% (highest verified) and FrontierMath v2 Tier-4 97.6% are record-class; only the mid Intelligence Index (52.7) and moderate Omniscience accuracy (62.6%) keep it off a perfect 100.
- **Context window: 98/100.** 1.05M-token window with MRCR 100% (256K–512K) and 96.3% at 512K–1M — a hair under the ≥98% bar at the longest tier, so just short of 100.
- **Multimodal: 70/100.** Very strong image understanding (ScreenSpot Pro 92.7%, AA-MMMU-Pro 86.9%, BenchCAD Vision2Code 0.959), but modalities are text+image in / text out only — no video/audio input and no non-text output, capping it in the +image-in 60–70 band.
- **Coding: 93/100.** DeepSWE 74.1%, AA Coding Index 76.9%, Terminal-Bench 88.4% and FrontierSWE v2 65.5% clear the frontier refs; minor drag from FrontierCode 53.3%, SciCode 56.5% and PostTrainBench 44.3%.
- **Cost efficiency: 30/100.** Premium $10 / $50 per 1M with no free tier — the expensive-frontier band (~$10/$50 → ~30). Cost is excluded from Overall.
- **Overall Score: 89/100.** Mean of Tool 90, Reasoning 96, Context 98, Multimodal 70, Coding 93 = 89.4 → 89. Best fit: the reference frontier reasoning/agent model where peak accuracy justifies premium pricing; pair with an omni model when audio/video input or non-text output is required.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-6 Astra post and system card, plus Artificial Analysis, ARC Prize, Epoch AI, Vals AI and Collinear); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

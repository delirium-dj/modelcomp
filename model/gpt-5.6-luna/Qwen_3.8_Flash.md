# GPT-5.6 Luna — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-5.6 Luna (`openai/gpt-5.6-luna`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier — and it punches far above its price. BenchLM ranks it #29 of 645 (66.2/100; 46/618 rows, Reasoning type) with an outstanding coding/agentic core — SWE-bench (Vals) **93.0%**, Terminal-Bench 2.1 **84.7%**, BrowseComp 83.3%, AA Coding Index 71.5% — top-tier math (FrontierMath v2 Tier 4 58.5%) and strong GPQA (91–92%), plus a 1.05M window at $0.20/$1.20 per 1M. The main caveats are a severe 92.6% hallucination rate (Accuracy 42.7%), a sub-bar AA-HLE (39.5%) and near-floor novel-reasoning (ARC-AGI-3 0.2%, ApprenticeBench 7%).
- **Provider / access:** OpenAI API (`gpt-5.6-luna`); OpenRouter. Reasoning + tool calls; image input; `noFreeId`.
- **Release / knowledge:** 2026 (GPT-5.6 family); cutoff not disclosed.
- **IDs:** `openai/gpt-5.6-luna`.
- **Context window:** BenchLM and curated `meta.json` agree at **1.05M** (128K out).
- **Modalities:** Text + image in; text out (BenchLM and curated meta agree).
- **Pricing (as of 2026-10-02):** $0.20 input / $1.20 output per 1M (very cheap for the tier).
- **Architecture:** proprietary, hosted only; sibling of Sol/Terra/Cyber in the GPT-5.6 family.

### Raw benchmarks found

> Independently verified against BenchLM (46 of 618 rows; 66.2/100, #29 of 645, Reasoning type), citing the OpenAI GPT-5.6 announcement/system card, Artificial Analysis, Vals AI, ARC Prize, Cursor, Cognition/Devin, VulcanBench, FrontierBench, NeoCognition and Gert (fetched 2026-10-02). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- Terminal-Bench 2.1 **84.7%** (Vals 79.0); BrowseComp **83.3%**; CyberGym 77.9%; OSWorld 2.0 45.6%; GDPval-AA **1582 / 47.5%** (mid); AA Agentic Index 42.7%; APEX-Agents-AA 35.8%; Toolathlon 53.4%
- weak newest/frontier tiers: Terminal-Bench 3.0 14.3%, ExploitGym 12.4%, ApprenticeBench 7%

Coding:

- SWE-bench (Vals) **93.0%** (excellent); AA Coding Index **71.5%** (over 70 bar); DeepSWE 67.2%; VulcanBench v3 85.5%; SWE-bench Pro 62.7%; FrontierCode 1.1 Extended 55.1%; CursorBench 3.2 61.1 / 4.0 35.9; AA-SciCode 53.6%

Reasoning / knowledge:

- GPQA **92.3%** (AA-GPQA Diamond 91.1, Vals 91.7 — over 90 bar); AA-HLE **39.5%** (just under 40 bar); AA Intelligence Index **51.2** (high); MMLU-Pro (Vals) 86.0
- ARC-AGI-2 59.5% but ARC-AGI-3 **0.2%** (near-floor); CritPt 20.6%; AA-LCR 83.7; HealthBench Professional 55.7% / Hard 32.0%
- AA-Omniscience Index -10.3 / Accuracy 42.7% / **Hallucination 92.6%** (severe)

Mathematics:

- FrontierMath v2 Tiers 1-3 **78.6%** / Tier 4 **58.5%** (top-tier); FrontierMath (legacy) 78.6%

Multimodal / long context:

- MMMU-Pro 78.4 (79.5 w/ Python) / AA-MMMU-Pro 78.6
- 1.05M window; AA-LCR 83.7 supportive (no ≥98% MRCR at 512K+ reported)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 80/100.** Terminal-Bench 2.1 84.7%, BrowseComp 83.3% and CyberGym 77.9% are strong real-agent signals with mid-band GDPval-AA autonomy (1582 / 47.5%) and AA Agentic Index 42.7%; the newest hardest tiers remain weak (TB 3.0 14.3%, ExploitGym 12.4%, ApprenticeBench 7%).
- **Reasoning: 76/100.** GPQA 91–92% clears the bar and Intelligence Index 51.2 is high with top-tier FrontierMath, but AA-HLE 39.5% sits just under the 40 bar, ARC-AGI-3 is 0.2%, and a severe 92.6% hallucination rate (Accuracy 42.7%) undermines unaided factual reliability.
- **Context window: 92/100.** A 1.05M window is the top band, backed by a strong AA-LCR 83.7 for long-context reasoning; no ≥98% MRCR at 512K+ is published, so an upper (not maximum) placement.
- **Multimodal: 68/100.** Text+image in with strong vision reads (MMMU-Pro 78.4, AA-MMMU-Pro 78.6), but coverage is image-only with text output — no audio/video/document rows — so it stays in the upper +image band.
- **Coding: 85/100.** SWE-bench (Vals) 93.0% and an AA Coding Index of 71.5% (over 70), plus DeepSWE 67.2% and VulcanBench 85.5%, are frontier-grade; SWE-bench Pro 62.7%, SciCode 53.6% and the harder CursorBench tiers temper the long-horizon end.
- **Cost efficiency: 90/100.** $0.20 / $1.20 per 1M is exceptionally cheap for a #29 model (no free ID, but far below the mid band) — a top-tier value placement. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 80, Reasoning 76, Context 92, Multimodal 68, Coding 85 = 80.2 → 80. Best fit: an outstanding value autonomous-coding model — elite SWE-bench/Terminal-Bench/BrowseComp and math with a 1.05M window at near-floor pricing; the two watch-outs are a severe factual-hallucination rate (use retrieval/verification) and weak novel-abstract reasoning (ARC-AGI-3), and it is image-only on multimodal.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-5.6 announcement/system card, Artificial Analysis, Vals AI, ARC Prize, Cursor, Cognition/Devin, VulcanBench, FrontierBench, NeoCognition and Gert); partial coverage (46/618, Reasoning). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

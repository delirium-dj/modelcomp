# Hy3 Preview — findings by Beam

- Source: Tencent/Hy3 Preview, `tencent/hy3-preview`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's MoE model (Apr 23, 2026): 295B total / 21B active, 256K context. BenchLM 52.22 (#91 of 954). SWE-bench Verified 74.4%. GPQA 87.2%. Open weights (Apache 2.0). Free at launch.
- **Provider / access:** Tencent Cloud TokenHub; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-04-23; knowledge cutoff not stated.
- **IDs:** `tencent/hy3-preview`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes (hybrid fast/slow); tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free at launch (open weights, Apache 2.0).
- **Architecture:** MoE, 295B total / 21B active, 80 layers, 192 experts (top-8), 256K context, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- Terminal-Bench 2.0: **54.4%** (Tencent model card)
- Gert Labs: **36.91%** (Gert Labs)
- GDPval-AA: **35.8%** / **1136** (Artificial Analysis)
- AA Agentic Index: **25.6%** (Artificial Analysis)
- BrowseComp: **67.1%** (Yahoo/Tech, Hy3 preview)
- WideSearch: **70.2%** (Yahoo/Tech, Hy3 preview)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA: **87.2%** (Tencent model card)
- GPQA-D: **87.2%** (Tencent model card)
- AA-GPQA Diamond: **89.7%** (Artificial Analysis)
- HLE: **25.5%** (Artificial Analysis)
- AA-HLE: **33.5%** (Artificial Analysis)
- AA Intelligence Index: **41.2%** (Artificial Analysis)
- AA-Omniscience Accuracy: **31.5%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **73.0%** (Artificial Analysis)
- AA-Omniscience Index: **-18.5%** (Artificial Analysis)
- AA-LCR: **66.7%** (Artificial Analysis)
- CritPt: **4.9%** (Artificial Analysis)
- Tsinghua math PhD exam: **88.4** (avg@3, Hy3 preview)
- CHSBO 2025: **87.8** (Hy3 preview)

Coding:

- Coding public-lane (BenchLM): Coming soon
- SWE-bench Verified: **74.4%** (Tencent model card)
- Terminal-Bench 2.0: **54.4%** (Tencent model card)
- SciCode: **41.2%** (Artificial Analysis)
- AA-SciCode: **48.6%** (Artificial Analysis)
- AA Coding Index: **58.8%** (Artificial Analysis)

Long context:

- 256K window; AA-LCR **66.7%** (Artificial Analysis); MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 64/100.** Terminal-Bench 2.0 54.4%, GDPval-AA 35.8%, BrowseComp 67.1%, WideSearch 70.2%, Gert Labs 36.91%, AA Agentic 25.6%; caps at GDPval-AA 35.8%.
- **Reasoning: 68/100.** GPQA 89.7%, HLE 25.5%, AA Intelligence 41.2%, AA-LCR 66.7%, CritPt 4.9%; caps at CritPt 4.9%.
- **Context window: 64/100.** 256K window; AA-LCR 66.7%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 66/100.** SWE-bench 74.4%, Terminal-Bench 2.0 54.4%, SciCode 41.2%, AA Coding 58.8%; caps at SciCode 41.2%.
- **Cost efficiency: 90/100.** Free at launch (open weights, Apache 2.0).
- **Overall Score: 60.4/100.** Mean of five quality dims (BenchLM 52.22); best-fit for open-weight coding + reasoning at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Tencent official, BenchLM, Artificial Analysis, Yahoo/Tech, GIGAZINE); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Hy3 Preview is the preview version; official Hy3 (Jul 6, 2026) supersedes it.<|end|>>
# GPT-5.6 Luna — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-5.6-Luna (`openai/gpt-5.6-luna`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume tier of the GPT-5.6 family (siblings: Sol, Terra, Cyber); near-frontier capability at a fraction of the price. Not a variant/alias of GPT-5.6 Sol/Terra.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`, tool calls + reasoning); OpenCode Zen `openai/gpt-5.6-luna` via Responses API endpoint.
- **Release / knowledge:** GPT-5.6 family (2026); no verified public release date or knowledge cutoff for Luna found in this pass.
- **IDs:** `openai/gpt-5.6-luna` (noFreeId — paid, no Free ID on Zen)
- **Context window:** 1,050,000 total / 128K max output (curated entry; BenchLM lists 1.05M).
- **Modalities:** text, image in; text out; reasoning yes (BenchLM Reasoning type); tool calls yes.
- **Pricing (as of 2026-09-28):** OpenAI/Zen $0.20 in / $1.20 out per 1M (≤272K prompts, cached read $0.02); $0.40/$1.80 above 272K. Paid.
- **Architecture:** Proprietary (BenchLM source type); parameter count not disclosed.

### Raw benchmarks found

All raw numbers from BenchLM `gpt-5-6-luna` page (updated 2026-09-28; overall 65.74/100, rank #25 of 511; 55 rows covered):

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (Vals 79.0%; AA harness 80.9%); Terminal-Bench 3.0 **14.3%** / 4.0 **11.6%** (newer hard harnesses)
- Tau3-Banking / Tau2-Bench: AA Tau3-Banking **31.1%**
- GDPval-AA: **1,582** Elo / 47.2% normalized (AA Briefcase **1,342** Elo)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathon **53.4%**
- Extras: BrowseComp **83.3%**, CyberGym **77.9%**, AA Harvey LAB **87.9%**, OSWorld 2.0 **45.6%**, AA ITBench **40.3%**, AA Agentic Index **42.7%**, AA AutomationBench **50.2%**, APEX-Agents-AA **35.8%**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (AA-GPQA Diamond 91.1%; Vals 91.7%)
- HLE: no standalone HLE row; AA-HLE **39.5%**
- LCR / MLCR: LCR **83.7%**, MLCR-AA **19.4%**
- CritPt: **20.6%**
- Artificial Analysis Intelligence Index / BenchLM overall: **51.2** / **65.74 #25 of 511**; FrontierMath v2 T1–3 **78.6%**, T4 **58.5%**; ARC-AGI-2 **59.5%**
- Omniscience Accuracy / Hallucination Rate: **42.7%** (AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench (Vals) **93.0%**; SWE-bench Pro **62.7%**
- LiveCodeBench: no verified public score found; VulcanBench v3 **85.5%**, CursorBench 3.2 **61.1%**, FrontierCode 1.1 Extended **55.1%**
- SciCode / AA-SciCode: **53.6%**
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **67.2%**, AA Coding Index **71.5%**

Long context:

- 1.05M context; LCR **83.7%**; no MRCR at 512K+ published.

Multimodal:

- Image in / text out: MMMU-Pro **78.4%** (w/ Python 79.5%), AA-MMMU-Pro **78.6%**.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 84.7% is just under the ~88%+ frontier mark and GDPval-AA 1,582 sits near the ~1750 frontier reference, but Tau3-Banking 31.1% is mid-band and TB 3.0/4.0 collapse (14.3/11.6) on the newest harnesses; strong overall, not elite.
- **Reasoning: 86/100.** GPQA Diamond 92.3% is comfortably in the frontier band, AA Index 51.2 is well above the mid 20–35 range, and FrontierMath v2 78.6%/58.5% is excellent; AA-HLE 39.5% just misses the 40% mark and CritPt 20.6% caps it.
- **Context window: 95/100.** 1.05M native context qualifies for the ≥1M tier (95–100); LCR 83.7% supports the tier floor, with no published ≥98% retrieval at 512K+ to justify more.
- **Multimodal: 70/100.** Image-in only (text, image in / text out): top of the 60–70 image-in band with MMMU-Pro 78.4–78.6; no video/audio-in verified.
- **Coding: 88/100.** SWE-bench 93.0% and AA Coding Index 71.5% clear the 70%+ frontier reference, DeepSWE 67.2% is solid; SWE-bench Pro 62.7% and AA-SciCode 53.6% (just under the 55 ref) keep it just under 90.
- **Cost efficiency: 93/100.** $0.20/$1.20 per 1M (≤272K) sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (≈92) reference points — cheap tier with a mildly pricier output leg.
- **Overall Score: 84/100.** Mean of 80/86/95/70/88 = 83.8 → 84 (half-up); best fit: high-volume, long-context coding + general agent work where near-frontier quality matters more than the last frontier percentile.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-28
- Method: public internet research (BenchLM model page, OpenCode Zen pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

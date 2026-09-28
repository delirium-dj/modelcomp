# GPT-6 Luna — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-6-Luna (`openai/gpt-6-luna`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost Luna volume tier of the GPT-6 family (siblings: GPT-6 Astra, GPT-6 Sol) — near-frontier DeepSWE-class coding at a fraction of the cost. Not a variant/alias of Sol/Astra.
- **Provider / access:** OpenAI API (`gpt-6-luna`; official docs at developers.openai.com/api/docs/models/gpt-6-luna); OpenCode Zen `openai/gpt-6-luna` via Responses API.
- **Release / knowledge:** GPT-6 family (2026); no verified public release date or knowledge cutoff found in this pass.
- **IDs:** `openai/gpt-6-luna` (noFreeId — paid, no Free ID on Zen)
- **Context window:** 1.05M (BenchLM model details; repo meta "1M tokens").
- **Modalities:** text, image in; text out; reasoning yes (BenchLM Reasoning type); tool calls yes.
- **Pricing (as of 2026-09-28):** OpenCode Zen $0.10 in / $0.50 out per 1M (≤272K prompts, cached read $0.01); $0.20/$0.75 above 272K. Paid.
- **Architecture:** Proprietary (BenchLM source type); parameter count not disclosed.

### Raw benchmarks found

All raw numbers from BenchLM `gpt-6-luna` page (updated 2026-09-28; overall 66.65/100, rank #21 of 511; 27 rows covered):

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (AA Terminal-Bench 4.0: **12.6%**)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1,367** Elo / 43.4% normalized (AA Briefcase **1,299** Elo)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Extras: AA AutomationBench **53.2%**, GDP.pdf **20.4%**, ExploitGym **11.6%**

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no standalone HLE row; AA-HLE **38.5%**
- LCR / MLCR: LCR **83.3%**, MLCR-AA **16.1%**
- CritPt: **19.4%**
- Artificial Analysis Intelligence Index / BenchLM overall: **37.3** / **66.65 #21 of 511**; ARC-AGI-1 **86.7%**, ARC-AGI-2 **59.3%**, ARC-AGI-3 **0.1%**; HealthBench Professional **60.8%**, Hard **31.4%**
- Omniscience Accuracy / Hallucination Rate: **43.8%** (AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **54.6%**
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **66.6%**

Long context:

- 1.05M context; LCR **83.3%**; no MRCR at 512K+ published.

Multimodal:

- Image in / text out: AA-MMMU-Pro **75.5%**.

### Normalized scores (1–100)

- **Tool use: 66/100.** GDPval-AA 1,367 sits above the mid 900–1200 band toward the ~1750 frontier mark and AA AutomationBench 53.2% is fair, but Terminal-Bench 4.0 is 12.6% and no TB2.1/Tau/Claw-Eval numbers are published, so the score rests on partial evidence.
- **Reasoning: 76/100.** ARC-AGI-2 59.3% and ARC-AGI-1 86.7% are strong, the AA Index (37.3) clears the mid 20–35 band, and LCR 83.3% is healthy; AA-HLE 38.5% just misses the 40% frontier mark and no GPQA is published, capping it.
- **Context window: 95/100.** 1.05M native context qualifies for the ≥1M tier (95–100); LCR 83.3% supports the tier floor, no ≥98% retrieval at 512K+ published.
- **Multimodal: 70/100.** Text + image in / text out: top of the 60–70 image-in band (AA-MMMU-Pro 75.5%); no video/audio-in verified.
- **Coding: 74/100.** DeepSWE 66.6% is just under the 74%+ frontier reference and AA-SciCode 54.6% nearly reaches the 55 ref; with no SWE-bench Verified / LiveCodeBench published, it holds the upper-mid tier.
- **Cost efficiency: 97/100.** $0.10/$0.50 per 1M (≤272K) is at the cheap end of the ~$0.10/$0.20 (97–99) reference point — the cheapest OpenAI frontier-adjacent tier found.
- **Overall Score: 76/100.** Mean of 66/76/95/70/74 = 76.2 → 76 (half-up); best fit: huge-volume, long-context workloads where near-frontier coding matters more than peak agentic/terminal performance.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-28
- Method: public internet research (BenchLM model page, OpenCode Zen pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

# GPT-6 Sol — findings by GLM 5.3

- Source: OpenAI (`gpt-6-sol`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's September 2026 GPT-6 reasoning model (max effort default), the value-flagship between Luna and Astra. Top use case: frontier-adjacent agentic work at one-fifth of Astra's price.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also OpenAI API.
- **Release / knowledge:** 2026-09-22; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-6-sol` (Zen; no Free ID — paid only)
- **Context window:** 872K tokens total (AA technical specs; BenchLM lists 1.05M — AA's figure treated as verified).
- **Modalities:** text/image in; text out; reasoning yes (effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $2.00 in / $10.00 out per 1M ≤272K tokens ($4.00/$15.00 above 272K; cached read $0.20); OpenAI API same headline.
- **Architecture:** proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- OSWorld 2.0: **60.5%** (BenchLM `gpt-6-sol`)
- Agents' Last Exam: **56.4%** (BenchLM — near top of field)
- GDPval-AA: **normalized 49.3%** (BenchLM; Elo value not published)
- Claw-Eval / ClawProBench: **no verified public score found**
- AA Briefcase Elo: **1483**; AA AutomationBench **61.6%**; AutomationBench **33.2%**; ExploitGym **22.1%**; GDP.pdf **24.8%** (BenchLM)
- Terminal-Bench / Tau3 / Toolathlon / MCP-Atlas: **no verified public score found** for this ID (released 2 days before this report)

Reasoning / knowledge:

- HLE: **47.9%** (AA-HLE via BenchLM)
- AA-LCR: **83.7%**; CritPt **30.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **48** (max effort, AA #18/211)
- Omniscience Accuracy / Hallucination Rate: **54.5% / 60.1%** (BenchLM)
- GPQA Diamond: **no verified public score found** for this ID
- HealthBench: **47.1%** raw / Professional **60.8%** / Hard **30.1%** (BenchLM)

Coding:

- DeepSWE: **68.8%** (BenchLM)
- SciCode / AA-SciCode: **57.6%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 872K window (AA); AA-LCR 83.7% at long context; no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- MMMU-Pro **83.3%** (AA-MMMU-Pro via BenchLM).

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 60.5% and Agents' Last Exam 56.4% are strong; GDPval (normalized 49.3%) and Briefcase 1483 are mid-high; Terminal-Bench/Tau3/Claw-Eval unpublished for this brand-new ID cap the score.
- **Reasoning: 86/100.** AA Index 48 is top-20, HLE 47.9% clears the frontier bar, AA-LCR 83.7% and CritPt 30.9% solid; GPQA unpublished and a 60.1% hallucination rate cap it.
- **Context window: 90/100.** 872K total (top of the 500K–1M band); no retrieval verification at 512K+.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; MMMU-Pro 83.3%.
- **Coding: 78/100.** SciCode 57.6% clears its ref and DeepSWE 68.8% is decent; the core SWE-bench Verified/LiveCodeBench numbers are not yet published for this ID.
- **Cost efficiency: 75/100.** $2/$10 per 1M on the evaluated tier (doubling above 272K) — between the $1.25/$4.25 (≈88) and $3/$15 (≈60) anchors; concise output (77M tokens) and 104 tok/s soften the effective cost.
- **Overall Score: 81.2/100.** (82 + 86 + 90 + 70 + 78) / 5 = 81.2. Best-fit: the value pick of the GPT-6 line — near-flagship intelligence at mid price; expect this score to firm up as benchmark coverage lands.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

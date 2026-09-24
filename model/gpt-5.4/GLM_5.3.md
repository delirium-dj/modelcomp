# GPT-5.4 — findings by GLM 5.3

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's early-2026 GPT-5.4 reasoning model (base tier; Pro/mini/nano siblings exist), still served on Zen. Top use case: reliable mid-flagship agentic work with excellent tool-calling reliability.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also OpenAI API.
- **Release / knowledge:** early 2026 (between GPT-5.3 and GPT-5.5; exact date not verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/gpt-5.4` (Zen; no Free ID — paid only)
- **Context window:** 1.05M tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; reasoning yes (effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $2.50 in / $15.00 out per 1M ≤272K tokens ($5.00/$22.50 above 272K; cached read $0.25); OpenAI API same headline.
- **Architecture:** proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (BenchLM `gpt-5-4`)
- Tau2-Bench: **98.9%** (BenchLM — elite); Tau3-Banking: **no verified public score found** for this ID
- Claw-Eval: **60.3%** (BenchLM)
- GDPval-AA: **1307 Elo** (BenchLM; normalized 36.6%)
- MCP-Atlas: **70.6%**; OSWorld-Verified **75.0%**; BrowseComp **82.7%**; Toolathlon **54.6%**; CyberGym **79.0%**; DeepSearchQA **73.6%**; APEX-Agents-AA **33.3%**; Gert Labs **64.89%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (BenchLM; AA harness 92.0%)
- HLE: **43.7%** AA harness / **52.1%** w/ tools / **39.8%** w/o tools (BenchLM)
- AA-LCR: **82.0%**; CritPt **23.4%** (BenchLM)
- ARC-AGI-2: **74.0%** / ARC-AGI-3 **0.2%** (BenchLM)
- Artificial Analysis Intelligence Index: **39** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **50.8% / 91.7%** (BenchLM — very high hallucination rate)
- FrontierMath v2 Tier 4 **27.1%**; HealthBench Hard **40.1%**; AA-IFBench **73.9%** (BenchLM)

Coding:

- LiveCodeBench Pro: **87.5%** (BenchLM)
- SWE-bench Pro: **57.7%**; AA Coding Index **71.0%**; Vibe Code Bench **67.42%**; React Native Evals **85.3%** (BenchLM)
- SWE-bench Verified / DeepSWE / SciCode: **no verified public score found** for this ID

Long context:

- 1.05M window (BenchLM); AA-LCR 82.0% at long context; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- MMMU-Pro **81.2%** (AA 78.4%); CharXiv **82.8%**; ScreenSpot Pro **85.4%**; MedXpertQA-MM **77.1%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 98.9% and OSWorld-Verified 75% are strong; GDPval 1307, Toolathlon 54.6% and Claw-Eval 60.3% sit mid-band.
- **Reasoning: 82/100.** GPQA 92.8% and HLE 43.7–52.1% clear the frontier bars with AA-LCR 82.0%; ARC-AGI-3 0.2%, CritPt 23.4%, AA Index 39 and a very high 91.7% hallucination rate cap it.
- **Context window: 95/100.** 1.05M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only — top of the "+image in" band; MMMU-Pro 81.2%/ScreenSpot Pro 85.4%.
- **Coding: 75/100.** LiveCodeBench Pro 87.5% and Coding Index 71.0% are solid; SWE-bench Pro 57.7% is mid; SWE-bench Verified and DeepSWE unpublished for this ID.
- **Cost efficiency: 68/100.** $2.50/$15 per 1M ≤272K (doubling above) — between the $1.25/$4.25 (≈88) and $3/$15 (≈60) anchors.
- **Overall Score: 80.0/100.** (78 + 82 + 95 + 70 + 75) / 5 = 80.0. Best-fit: dependable tool-caller for mid-complexity agents; hallucination-prone on knowledge — pair with retrieval.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

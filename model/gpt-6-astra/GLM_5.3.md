# GPT-6 Astra — findings by GLM 5.3

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's flagship GPT-6 reasoning model (Sept 2026), "max" effort default. BenchLM's #1-ranked model overall. Top use case: hardest reasoning, research and computer-use agent work regardless of cost.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/responses` (OpenAI Responses API, `@ai-sdk/openai`); also OpenAI API.
- **Release / knowledge:** 2026-09-03; knowledge cutoff April 30, 2026 (AA).
- **IDs:** `opencode/gpt-6-astra` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (1.05M per BenchLM; AA lists 1M; verified via both).
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $10.00 in / $50.00 out per 1M ≤272K tokens ($20.00/$75.00 above 272K; cached read $1.00); OpenAI API same headline $10/$50.
- **Architecture:** proprietary; OpenAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **57.9%** (BenchLM `gpt-6-astra` — top of the new hard harness)
- Terminal-Bench 2.1 (Vals harness): **87.3%** (BenchLM)
- Tau3-Banking (AA harness): **41.4%** (BenchLM)
- GDPval-AA: **1542 Elo** (BenchLM; normalized 52.1%)
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld 2.0: **72.6%**; BrowseComp **91.5%**; HLE w/ tools **57.2%**; AA Agentic Index **51.5%**; AA Briefcase Elo **1569**; ApprenticeBench **68%**; AA AutomationBench **68.5%**; AA-AnalystAgent **51.2%**; Agents' Last Exam **59.3%** (BenchLM)
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (BenchLM; AA harness 96.1%)
- HLE: **54.7%** (AA-HLE via BenchLM)
- ARC-AGI-1/2/3: **98.5% / 95% / 62.7%** (BenchLM — ARC-AGI-3 is class-leading)
- MRCR v2: **100.0%** (256K–512K) / **96.3%** (512K–1M) (BenchLM); AA-LCR **80.7%**; CritPt **31.7%**; MLCR-AA **35.0%**
- Artificial Analysis Intelligence Index: **53** (max effort, AA #6/211)
- Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%** (BenchLM)
- FrontierMath v2 Tier 4: **97.6%**; HealthBench Hard **36.6%** (BenchLM)

Coding:

- DeepSWE: **74.1%** (BenchLM)
- SciCode / AA-SciCode: **56.5%** (BenchLM)
- AA Coding Index: **76.9%** (BenchLM)
- FrontierSWE v2: **65.5%**; FrontierCode 1.1 Main **53.3%** / Extended **64.5%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: **no verified public score found** for this exact ID

Long context:

- MRCR v2 100.0% at 256K–512K and 96.3% at 512K–1M (BenchLM) — verified retrieval across the 1M window.

Multimodal (grounding):

- MMMU-Pro **86.9%**; ScreenSpot Pro **92.7%**; BenchCAD Vision2Code (tools) **0.959** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 93/100.** TB4.0 57.9% leads the field on the new hard harness, TB2.1 87.3%, OSWorld 72.6% and BrowseComp 91.5% are top-tier; GDPval 1542 and Tau3 41.4% sit just under the frontier refs — that plus missing Claw-Eval caps it.
- **Reasoning: 97/100.** GPQA 96%, HLE 54.7%, ARC-AGI-2 95% and the class-best ARC-AGI-3 62.7% plus FrontierMath T4 97.6% are all frontier; only a middling hallucination profile (51.3%) keeps it below 98+.
- **Context window: 98/100.** 1M window with MRCR 100%/96.3% across both long bands; 96.3% at 512K–1M just misses the ≥98% bar for 100.
- **Multimodal: 70/100.** Text+image input only (no video/audio input per AA specs) — top of the "+image in" band; MMMU-Pro 86.9%/ScreenSpot Pro 92.7% confirm elite vision.
- **Coding: 93/100.** DeepSWE 74.1%, SciCode 56.5%, Coding Index 76.9% all clear frontier refs; FrontierSWE v2 65.5% leads; no published SWE-bench Verified/LiveCodeBench for this ID.
- **Cost efficiency: 30/100.** $10/$50 per 1M on the evaluated tier (double above 272K) — matches the ~$10/$50 = ~30 anchor; slow (52 tok/s) and very high TTFT worsen effective value.
- **Overall Score: 90.2/100.** (93 + 97 + 98 + 70 + 93) / 5 = 90.2. Best-fit: maximum-quality reasoning/agent escalation pick when cost is irrelevant; Sol/Luna variants win on value.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

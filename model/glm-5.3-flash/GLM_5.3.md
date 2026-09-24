# GLM 5.3 Flash — findings by GLM 5.3

- Source: Z.ai (`glm-5.3-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash
- **Short description:** Z.ai's open-weights Flash model of the GLM-5.3 generation (August 2026), 1M context with frontier-tier GDPval at a rock-bottom price. Top use case: budget agentic work with near-flagship tool use.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Hugging Face `zai-org/GLM-5.3-Flash` for self-hosting.
- **Release / knowledge:** August 2026 (GLM-5.3 generation, released 2026-08-18 with the flagship); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.3-flash` (Zen; no Free ID — paid but very cheap); `zai-org/GLM-5.3-Flash` (HF)
- **Context window:** 1M tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode (vision rows present on BenchLM: CharXiv 89.4%).
- **Pricing (as of 2026-09-24):** Zen $0.15 in / $0.50 out per 1M (cached read $0.03).
- **Architecture:** open weights (BenchLM source type); parameter count not published this session.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (BenchLM `glm-5-3-flash`; Vals harness 62.9%)
- GDPval-AA: **1773 Elo** (BenchLM — clears the 1750+ frontier bar, exceptional for a Flash tier)
- Tau3-Banking (AA harness): **47.2%** (BenchLM)
- Claw-Eval / MCP-Atlas: **no verified public score found**
- Toolathlon-Verified: **78.4%**; HLE w/ tools **55.3%**; AA Briefcase Elo **1459**; AA AutomationBench **60.4%**; AutomationBench **48.8%**; AA EnterpriseOps-Gym **33.2%**; Agents' Last Exam **26.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (AA harness; Vals 86.4% — harness spread)
- Artificial Analysis Intelligence Index: **41.8** (BenchLM listing — strong for the price class)
- MLCR-AA: **51.1%** (BenchLM)
- HLE (no tools) / CritPt / AA-LCR: **no verified public score found** for this ID
- MMLU-Pro (Vals): **86.1%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **92.0%** (BenchLM — elite for a Flash tier)
- LiveCodeBench (Vals): **80.5%**
- DeepSWE: **63.4%**; NL2Repo **56.3%**; OpenHarmony Bench **57.3%** (BenchLM)
- SciCode / AA Coding Index / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- CharXiv **89.4%**; MMVU **80.5%**; Chartography (tools) **78.0%**; OfficeQA Pro **62.4%**; BabyVision **53.4%**; Design Arena Website **1282** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 87/100.** GDPval 1773 clears the frontier bar outright, TB2.1 84.3% and Toolathlon 78.4% are strong; Tau3 47.2% just misses 50 and Claw-Eval is unpublished.
- **Reasoning: 82/100.** GPQA 91.2% (AA harness) clears the frontier bar and AA Index 41.8 is strong for the class; harness spread on GPQA (86.4% Vals) and missing HLE/CritPt rows temper confidence.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 68/100.** Image input present with strong chart/document vision (CharXiv 89.4%, MMVU 80.5%) but BabyVision 53.4% is mid; no audio/video verified.
- **Coding: 80/100.** SWE-bench V 92.0% (Vals) is elite; LiveCodeBench 80.5% solid; DeepSWE 63.4% misses the 74% ref; SciCode/Coding Index unpublished.
- **Cost efficiency: 96/100.** $0.15/$0.50 per 1M on Zen — the cheapest tracked model in this batch; near-free effective cost with $0.03 cached reads.
- **Overall Score: 82.4/100.** (87 + 82 + 95 + 68 + 80) / 5 = 82.4. Best-fit: the value king of agentic work — frontier-tier GDPval and elite SWE-bench at Flash pricing.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores. Researched independently despite the shared vendor family.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

# Hy3 — findings by GLM 5.3

- Source: Tencent (`tencent/hy3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Tencent Hunyuan)
- **Short description:** Tencent's open-weight Hunyuan MoE (295B total / 21B active), 256K context with hybrid fast-and-slow thinking, Apache 2.0 licensed. Top use case: self-hostable reasoning/coding base with cheap hosted preview.
- **Provider / access:** TokenHub hosted preview (`tencent/hy3`); Hugging Face open weights (Apache 2.0). **No OpenCode Zen ID.**
- **Release / knowledge:** 2026 (successor of the Hy3 Preview build); knowledge cutoff not publicly disclosed.
- **IDs:** `tencent/hy3` (TokenHub preview); no Zen ID, no Free ID
- **Context window:** 256K tokens total / 32K out (BenchLM + platform metadata agree).
- **Modalities:** text/image in; text out; reasoning yes (hybrid fast/slow thinking); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** TokenHub preview ~$0.18 in / ~$0.59 out per 1M; open weights for self-hosting (Apache 2.0).
- **Architecture:** MoE, 295B total / 21B active parameters; open weights.

### Raw benchmarks found

> BenchLM coverage for this ID is thin (14 rows); scores are correspondingly low-confidence.

Agent / tool use:

- GDPval-AA: **1136 Elo** (BenchLM `hy3`; normalized 27.3%)
- AA Agentic Index: **25.6%** (BenchLM)
- Terminal-Bench / Tau2 / Tau3 / Claw-Eval / MCP-Atlas: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA Diamond: **89.7%** (AA harness via BenchLM — just under the 90% bar)
- HLE: **33.5%** (AA-HLE via BenchLM — below the 40% bar)
- AA-LCR: **79.0%**; CritPt **4.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **25.3** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **32.0% / 74.1%** (BenchLM — high hallucination, negative Omniscience Index)

Coding:

- SciCode / AA-SciCode: **48.6%**; AA Coding Index **58.8%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 256K window (BenchLM); AA-LCR 79.0%; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- Design Arena Website **1193** (BenchLM); image input per platform metadata.

### Normalized scores (1–100)

- **Tool use: 45/100.** GDPval 1136 and Agentic Index 25.6% are low-mid; every core agent harness (TB, Tau, Claw) is unpublished for this ID.
- **Reasoning: 62/100.** GPQA 89.7% nearly reaches the frontier bar; HLE 33.5%, CritPt 4.9%, AA Index 25.3 and a 74.1% hallucination rate hold it back.
- **Context window: 78/100.** 256K total — high-mid of the 200K–500K band; no retrieval verification.
- **Multimodal: 65/100.** Text+image input per platform metadata; no published vision benchmark rows for this ID.
- **Coding: 52/100.** SciCode 48.6% and Coding Index 58.8% sit far below frontier refs; mainstream SWE harnesses unpublished.
- **Cost efficiency: 96/100.** TokenHub preview at ~$0.18/$0.59 per 1M is cheaper than the ~$0.60/$2.20 (≈92) anchor, plus Apache-2.0 open weights for self-hosting.
- **Overall Score: 60.4/100.** (45 + 62 + 78 + 65 + 52) / 5 = 60.4. Best-fit: cheap open-weights reasoning base; coverage is too thin to recommend it over tracked peers for agent work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

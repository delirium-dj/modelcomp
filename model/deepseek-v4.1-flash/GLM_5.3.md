# DeepSeek V4.1 Flash — findings by GLM 5.3

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's open-weights V4.1-generation Flash reasoning model (1M context) — elite terminal/coding-agentic scores and competitive-programming strength at very low cost. Top use case: budget high-effort coding agents.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash` for self-hosting.
- **Release / knowledge:** V4.1 Flash build, 2026 (after V4 Flash 0731); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/deepseek-v4.1-flash` (Zen; no Free ID — paid but very cheap); `deepseek-ai/DeepSeek-V4.1-Flash` (HF)
- **Context window:** 1M tokens total (BenchLM model details).
- **Modalities:** text/image in; text out; reasoning yes; tool calls; JSON mode (vision rows present on BenchLM: AA-MMMU-Pro 77.0%).
- **Pricing (as of 2026-09-24):** Zen $0.30 in / $1.20 out per 1M (cached read $0.006).
- **Architecture:** open weights (BenchLM source type); parameter count not published this session.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (BenchLM `deepseek-v4-1-flash` — elite; Vals harness 74.5%; TB 3.0 30%; TB 4.0 31.2%)
- GDPval-AA: **1600 Elo** (BenchLM; normalized 55.0%)
- Claw-Eval / Tau3 / MCP-Atlas: **no verified public score found**
- CyberGym: **88.1%**; HLE w/ tools **63.9%**; AA AutomationBench **68.9%**; AutomationBench **54.8%**; Agents' Last Exam **31.8%**; ExploitGym **15.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (BenchLM)
- HLE: **36.8%** / AA-HLE **39.2%** (BenchLM — just under the 40% bar)
- AA-LCR: **84.0%**; CritPt **14.3%**; MLCR-AA **22.8%** (BenchLM)
- Artificial Analysis Intelligence Index: **39.5** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **46.4% / 96.5%** (BenchLM — extremely high hallucination rate, the standout weakness)
- Apex (math): **65.6%** (BenchLM)

Coding:

- DeepSWE: **74.2%** (BenchLM — at the 74% frontier ref)
- Codeforces: **3471** Elo (BenchLM)
- Terminal-Bench 2.1: **90.6%** (see tool use)
- NL2Repo: **65.4%**; SciCode / AA-SciCode **51.9%**; ProgramBench **20.3%** (BenchLM)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); AA-LCR 84.0% at long context; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- AA-MMMU-Pro **77.0%**; BabyVision w/ Python **89.6%**; ZeroBench w/ Python **49.0%**; Chartography (tools) **78.9%** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 90.6% is elite, GDPval 1600 and CyberGym 88.1% strong; Claw/Tau3 unpublished and TB4.0 31.2% on the new hard harness tempers it.
- **Reasoning: 78/100.** GPQA 90.9% clears the frontier bar with AA-LCR 84.0% solid; HLE 37–39% just misses, CritPt 14.3% weak and a very high 96.5% hallucination rate drags knowledge reliability down hard.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 68/100.** Image input present (MMMU-Pro 77.0%) but modest; no audio/video modality verified.
- **Coding: 80/100.** DeepSWE 74.2% hits the frontier ref, Codeforces 3471 is elite and TB2.1 90.6% outstanding; SciCode 51.9% and ProgramBench 20.3% are weak, SWE-bench Verified unpublished.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M on Zen — half the ~$0.60/$2.20 (≈92) anchor, with open weights for self-hosting.
- **Overall Score: 81.2/100.** (85 + 78 + 95 + 68 + 80) / 5 = 81.2. Best-fit: best value coding-agent engine on Zen; do not use for knowledge-recall tasks without retrieval.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

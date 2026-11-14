- Source: OpenAI/GPT-6.2 Sol
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.2 Sol
- **Short description:** A suspected next-generation GPT-6 Sol tier that appeared only as a **silent gray-box routing** identifier (`gpt-6.2-sol`) in some ChatGPT/Codex users' usage records from 2026-11-08; not officially announced. A distinct tracked entry; `gpt-6-sol`, `gpt-6.1-sol` and `gpt-6.2-astra` are separate.
- **Provider / access:** Not released. Only visible to users who received gray-test permission in ChatGPT / Codex; a Google Cloud console quota-page option was reported for the 6.2 family.
- **Release / knowledge:** no official release as of 2026-11 (gray test ~2026-11-08); knowledge cutoff: no verified public score found.
- **IDs:** `gpt-6.2-sol` (observed identifier only). No free Zen ID verified.
- **Context window:** no verified figure — no verified public score found.
- **Modalities:** community self-tests emphasise **3D scene/world generation** from a single prompt, plus terser answers (qualitative, unofficial). No verified image/audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no published price — no verified public price found. Secondary coverage mentions "low cost" as a positioning claim only.
- **Architecture:** not disclosed. No official product page, parameters or release date.

### Raw benchmarks found

Agent / tool use:

- Community gray-test anecdotes: one-prompt complete 3D scenes ("20 minutes to generate a 3D world") and more concise answers (qualitative, unofficial self-tests — not benchmarks)
- A report that an internal OpenAI model found **948 Linux kernel local privilege-escalation vulnerabilities** relates to the upcoming "Cyber" model / 6.2 Astra research report, NOT to GPT-6.2 Sol — explicitly not attributed here
- Tau3-Bench / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- No verified public score found (GPQA Diamond / HLE / ARC-AGI / LCR / CritPt / AA Intelligence Index / Omniscience)

Coding:

- No verified public score found (SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE)

Long context:

- No verified public score found (MRCR / RULER / GraphWalks)

Only verifiable facts: the identifier `gpt-6.2-sol` surfacing in usage records, a silent gray routing (explicitly **not** a formal release), and community self-test anecdotes about 3D generation. No benchmark of any kind was published in the retrieved sources.

### Normalized scores (1–100)

> Evidence-limited scoring: with zero verified benchmarks, every dimension is scored on documented positioning/identity only, not capability claims. The seven-line score contract and five-dimension mean still apply.

- **Tool use: 60/100.** Floor score: only an unreleased gray-test identifier and anecdotal 3D-generation reports.
- **Reasoning: 60/100.** No published reasoning benchmark.
- **Context window: 60/100.** No verified context window.
- **Multimodal: 60/100.** No verified modality list; 3D **generation** anecdotes are not verified input modalities — a conservative neutral 60 is used rather than fabricating a figure.
- **Coding: 60/100.** No published coding benchmark; Codex telemetry is the only coding-adjacent signal.
- **Cost efficiency: 50/100.** No published price and no public availability; excluded from Overall.
- **Overall Score: 60/100.** Half-up mean of 60, 60, 60, 60, 60 = 60.0 → 60. Best fit: **no production use** — an unreleased gray-test identifier awaiting official announcement and independent benchmarks.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: secondary Chinese tech coverage retrieved via public web search excerpts (什么值得买 on the 2026-11-08 silent gray routing and the explicit "not a formal release" caveat; 太平洋科技 and 腾讯云 on community 3D-generation self-tests; 智源社区 on the Google Cloud quota-page options) — all explicitly labelled secondary/unofficial. The 948 Linux LPE vulnerabilities belong to an internal "Cyber" / 6.2 Astra research report and are explicitly NOT attributed to this model. This is intentionally a near-empty evidence record: **zero verified public benchmarks were found**, so every raw row reads "no verified public score found" and the normalized scores are a declared conservative floor with the arithmetic shown — no predecessor (GPT-6 Sol / 6.1 Sol) figures are copied. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [GPT-6.2 Sol 疑似提前上线 — 什么值得买 (retrieved via search excerpt; gray routing, no official release)](https://post.smzdm.com/p/arzd0q67/)
  - [GPT-6.2 首测 — 太平洋科技 (retrieved via search excerpt; community 3D anecdotes)](https://www.pconline.com.cn/focus/2185/21852069.html)

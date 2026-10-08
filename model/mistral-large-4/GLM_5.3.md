# Mistral Large 4 — findings by GLM 5.3

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model (Preview, released 2026-10-06, ~1T parameters) — native multilingual fluency, hybrid reasoning, robust tool use, and document/image input at 524K context, served fast (116 tok/s).
- **Provider / access:** Mistral API (2 providers on Artificial Analysis); OpenCode Zen `opencode/mistral-large-4` at `https://opencode.ai/zen/v1/chat/completions` ($1.36 in / $4.18 out per 1M at 50% off, cached read $0.14 — Zen pricing table, live 2026-10-08; project meta lists $2.00/$6.00 as the standard-rate alternative).
- **Release / knowledge:** 2026-10-06, Preview status (Artificial Analysis); knowledge cutoff not stated.
- **IDs:** `opencode/mistral-large-4`; no Free ID.
- **Context window:** 524K measured by Artificial Analysis (BenchLM lists 1M; the project meta's 131,072 appears stale — scored from the AA-measured figure).
- **Modalities:** text and image in (image verified by AA-MMMU-Pro results); text out; reasoning yes; tool calls yes; JSON mode not verified.
- **Pricing (as of 2026-10-08):** $1.36 in / $4.18 out per 1M (50% off promotional rate on Zen/Mistral; standard rate higher — project meta $2.00/$6.00); 116.1 tokens/s, TTFT 1.46s; very verbose (200M output tokens on the AA Index, ~2.5x median).
- **Architecture:** proprietary; ~1T parameters (Artificial Analysis).

### Raw benchmarks found

Agent / tool use:

- Cybench: **93.0%** (Mistral AI launch post via BenchLM) — elite cybersecurity-agent result
- GDPval-AA: **1424** (46.2% normalized) (AA via BenchLM)
- AA-Briefcase Elo: **1393** (AA leaderboard via BenchLM)
- AA AutomationBench: **59.9%** (AA via BenchLM)
- Finance Agent v2: **54.7%** (Vals AI via BenchLM)
- AA Terminal-Bench 4.0: **26.8%** (AA via BenchLM)
- GDP.pdf: **18.6%** (AA via BenchLM)

Reasoning / knowledge:

- AA-HLE: **35.0%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **38** (AA model page; BenchLM 38.4)
- AA-LCR: **81.3%** (AA via BenchLM)
- CritPt: **10.6%** (AA via BenchLM)
- AA-Omniscience Index: **-5.3** (accuracy 25.8%, hallucination rate 41.9%) (AA via BenchLM)
- GPQA Diamond: **no verified public score found**

Coding:

- Vibe Code Bench: **78.40%** (Vals v1.1 via BenchLM — an exceptional score on a harness where most models score <10%)
- AA-SciCode: **54.2%** (AA via BenchLM)
- SWE-bench / LiveCodeBench: **no verified public score found**

Multimodal:

- AA-MMMU-Pro: **76.4%** (AA via BenchLM)

Long context:

- 524K window measured (Artificial Analysis); AA-LCR 81.3% is the long-context reasoning proxy — strong; no MRCR/RULER published.

### Normalized scores (1–100)

- **Tool use: 68/100.** Cybench 93.0%, GDPval-AA 1424, AA-Briefcase 1393 and AutomationBench 59.9% form a solid agentic profile with verified image+tool synergy; capped by AA Terminal-Bench 4.0 26.8% and GDP.pdf 18.6% on the hardest agentic harnesses.
- **Reasoning: 68/100.** HLE 35.0% approaches the 40% frontier reference with AA Index 38 above the mid band and AA-LCR 81.3% strong; capped by CritPt 10.6%, a 41.9% hallucination rate and no verified GPQA number.
- **Context window: 85/100.** 524K measured by Artificial Analysis (500K–1M tier) with strong long-context reasoning (AA-LCR 81.3%); not higher because BenchLM's 1M claim is unconfirmed and no retrieval percentage exists.
- **Multimodal: 68/100.** Image input AA-verified with a genuinely good MMMU-Pro 76.4% — top of the image-in band; text-only output.
- **Coding: 70/100.** Vibe Code Bench 78.4% is an outstanding real-world-coding signal (most models score single digits there) and SciCode 54.2% nears the 55% reference; capped by weak Terminal-Bench 4.0 and zero SWE-bench/LiveCodeBench coverage.
- **Cost efficiency: 85/100.** $1.36/$4.18 per 1M at the current 50%-off rate sits at the ~$1.25/$4.25 class (~88) with speed bonuses (116 t/s, 1.46s TTFT); verbosity and the promotional price temper it.
- **Overall Score: 72/100.** (68 + 68 + 85 + 68 + 70) / 5 = 71.8 → 72. Best-fit recommendation: multilingual enterprise agents and document/image-heavy knowledge work with a security bent (Cybench 93%) at below-frontier prices — a preview worth watching once SWE-bench and GPQA numbers publish.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Artificial Analysis, BenchLM aggregating the Mistral launch post and Vals leaderboards, Zen pricing table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

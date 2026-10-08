# DeepSeek V3.2 — findings by GLM 5.3

- Source: DeepSeek (`deepseek-v3.2`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (685B total / 37B active, MIT) unifying chat and deep reasoning with sparse attention for long-context efficiency — now a legacy release superseded by the DeepSeek V4 line (Artificial Analysis marks it deprecated, pointing to V4 Pro).
- **Provider / access:** DeepSeek API (`https://api.deepseek.com`), 10 providers listed on Artificial Analysis; self-host via Hugging Face `deepseek-ai/DeepSeek-V3.2`. Project meta lists Zen ID `opencode/deepseek-v3.2` (absent from the live Zen models list when re-checked 2026-10-08 — no Free ID).
- **Release / knowledge:** 2025-12-01 (Artificial Analysis); knowledge cutoff not stated.
- **IDs:** `opencode/deepseek-v3.2` (project meta); Hugging Face `deepseek-ai/DeepSeek-V3.2`.
- **Context window:** 164,000 total per project meta (provider-dependent; Artificial Analysis lists 128K), max output 8K–128K provider-dependent.
- **Modalities:** text in/out only; hybrid thinking/reasoning (non-reasoning default measured by AA; a Thinking sibling exists); tool calls yes; structured JSON yes (project meta); no vision/audio.
- **Pricing (as of 2026-10-08):** DeepSeek API ~$0.21 in / $0.31 out per 1M (cached input $0.022, project meta; AA lists $0.28/$0.42 across providers); MIT weights allow free self-hosting.
- **Architecture:** 685B total / 37B active MoE, open weights, MIT license, sparse attention for long-context efficiency (Artificial Analysis, project meta).

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **78.9%** (Artificial Analysis via BenchLM)
- Claw-Eval: **40.2%** (Claw-Eval leaderboard via BenchLM)
- VITA-Bench: **18.5%** (VitaBench leaderboard via BenchLM)
- Gert Labs: **29.57%** (Gert Labs rankings via BenchLM)
- Terminal-Bench / Tau3 / GDPval: **no verified public score found** on current harnesses

Reasoning / knowledge:

- GPQA Diamond: **75.1%** (AA via BenchLM)
- HLE: **11.2%** (AA via BenchLM)
- FrontierMath v2: **22.1%** (Tiers 1–3) / **2.1%** (Tier 4) (Epoch AI via BenchLM)
- AA-LCR: **45.7%** (AA via BenchLM)
- CritPt: **0.9%** (AA via BenchLM)
- Artificial Analysis Intelligence Index: **16** (estimated, non-reasoning; AA via BenchLM)
- AA-Omniscience Index: **-46.9** (accuracy 24.0%, hallucination rate 93.3%) (AA via BenchLM)

Coding:

- SWE-Rebench: **60.9%** (SWE-Rebench leaderboard via BenchLM)
- React Native Evals: **71.5%** (React Native Evals leaderboard via BenchLM)
- Design Arena Website: **1181** (OpenRouter benchmarks via BenchLM)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found** on current harnesses

Multimodal:

- **no verified public score found** — text-only model.

Long context:

- 128K–164K window (AA / project meta); AA-LCR 45.7% is the only long-context reasoning proxy — weak; no MRCR/RULER percentage published.

Instruction following:

- AA-IFBench: **49.0%** (AA via BenchLM)

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 78.9% is genuinely strong, but Claw-Eval 40.2%, VITA-Bench 18.5% and Gert Labs 29.6% drag the independent agentic picture to mid-tier; no current Terminal-Bench/GDPval coverage.
- **Reasoning: 52/100.** GPQA Diamond 75.1% is upper-mid, but HLE 11.2%, FrontierMath v2 ≤22%, CritPt 0.9% and a 93.3% hallucination rate (Omniscience -46.9) cap it hard — the worst knowledge-reliability profile in this batch.
- **Context window: 55/100.** 128K–164K sits in the 100K–200K tier (50–64 band), with weak measured long-context reasoning (AA-LCR 45.7%) keeping it at the tier floor.
- **Multimodal: 15/100.** Text-only input and output — bottom of the text-only band.
- **Coding: 62/100.** SWE-Rebench 60.9% and React Native Evals 71.5% are solid mid-tier results with no modern SWE-bench Verified/LiveCodeBench coverage; sparse-attention long-context coding was its pitch.
- **Cost efficiency: 95/100.** ~$0.21/$0.31 per 1M with $0.022 cached input is near the top of the paid-value band, and MIT weights make self-hosting free.
- **Overall Score: 48/100.** (58 + 52 + 55 + 15 + 62) / 5 = 48.4 → 48. Best-fit recommendation: budget text-only coding/chat backbone where cost matters and facts are verified downstream — as a 2025 legacy model with a 93% hallucination rate, prefer DeepSeek V4 successors for anything reliability-sensitive.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08
- Method: public internet research (Artificial Analysis, BenchLM, Epoch AI, SWE-Rebench/Claw-Eval/VitaBench leaderboards, project pricing meta); scores are normalized 1–100 interpretations, not official vendor scores. 2026-measured independent numbers were weighted over the 2025 launch claims.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

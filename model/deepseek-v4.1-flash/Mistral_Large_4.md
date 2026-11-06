# DeepSeek V4.1 Flash — findings by Mistral Large 4

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's smallest new-architecture model (2026-09-10), a 552B MoE with native visual understanding that outscores the larger V4-Pro flagship on coding/agentic tasks — AA Index 40, DeepSeek's new flagship; `deepseek-flash` API route now serves it (V4-Flash retired, temp aliases route here).
- **Provider / access:** DeepSeek API (`deepseek-flash` → V4.1-Flash; `deepseek-v4.1-flash` temp alias), OpenRouter (`deepseek/deepseek-v4.1-flash`), NVIDIA NIM, SiliconFlow; open weights (MIT) on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`).
- **Release / knowledge:** Released 2026-09-10 (1017 refresh 2026-10-17 raised DeepSWE to 77.0, TB 4.0 to 42.3); knowledge cutoff not restated in reviewed snippets.
- **IDs:** `deepseek-flash` (current API), `deepseek-v4.1-flash` (compat alias); HF `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** 1,000,000 tokens; 384K max output.
- **Modalities:** Text + image in (native visual), text out; reasoning effort 1–100 (controllable); tool calls; agentic.
- **Pricing (as of 2026-11-05):** Peak $0.30 / $1.20 per 1M, off-peak $0.15 / $0.60; cached input as low as $0.003/M; KV-cache compression cuts long-context cost. No free API tier; MIT self-host.
- **Architecture:** Open weights, MIT license; 552B total MoE (8B input / 16B output active per morphllm; 13B active for older V4-Flash sibling), new Causal Encoder-Decoder architecture.

### Raw benchmarks found

Official DeepSeek news + HF model card + NVIDIA NIM card cross-checked against regolo, flowtivity, gingerlabs, codersera, AA, orcarouter; conflicts noted:

Agent / tool use:

- AutomationBench: **54.8%** (up from 37.7 on V4 Flash) (regolo)
- CyberGym: **88.1%** Pass@1 (NVIDIA NIM; 76.7 on V4 Flash) — beats GPT-5.6 Sol and Opus 5 on DeepSWE/AutomationBench/ALE/CyberGym (flowtivity)
- Agent's Last Exam: beaten per flowtivity family claim; exact % not captured
- OSWorld / Claw-Eval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA Diamond: **90.9%** Pass@1 (NVIDIA NIM)
- HLE no tools: **42.6%** (1017; 36.8 at 0910) (hokai); MMLU-Pro: 74.1 (gingerlabs)
- Artificial Analysis Intelligence Index: **40 (max)** — overtakes V4 Pro 0813 as DeepSeek flagship (AA X post); v4.3.2 reading 39.46 vs Pro 36.00 (codersera); AA lists 1017 (max) at 33 — version/effort drift, all cited
- ARC-AGI / CritPt: no verified public score found

Coding:

- DeepSWE v1.1: **74.2%** (mini-SWE; 72.6 DeepSeek Harness Minimal, 65.6 Codex — harness spread cited) → **77.0%** on 1017 (gingerlabs/hokai)
- Terminal-Bench 2.1: **90.6%** (90.3 mini-SWE, 84.1 Codex) (NIM/gingerlabs); TB 4.0: 31.2 (1017: 42.3)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for this exact ID

Long context:

- 1M window / 384K out; no verified MRCR/RULER score found for this ID

### Normalized scores (1–100)

- **Tool use: 89/100.** AutomationBench 54.8% (+17) and CyberGym 88.1% beat proprietary flagships on those rows; ALE claim without exact %.
- **Reasoning: 86/100.** GPQA 90.9%, HLE-no-tools 42.6% (1017), AA 40 max — top open-weight band; scaffold variance noted.
- **Context window: 96/100.** 1M / 384K out in the 95–100 tier; no verified 512K+ retrieval.
- **Multimodal: 80/100.** Text + image in (native vision), text out; no audio/video or non-text output.
- **Coding: 92/100.** DeepSWE 74.2–77.0% and TB 2.1 90.6% — beats GPT-5.6 Sol/Opus 5 on agentic coding rows.
- **Cost efficiency: 95/100.** $0.30/$1.20 peak ($0.15/$0.60 off-peak, $0.003 cached) near the top ~$0.60/$2.20 ≈ 92+ band; MIT self-host; per-task cost slightly above old Flash on AA ($0.27 vs $0.22 — orcarouter conflict noted).
- **Overall Score: 89/100.** Half-up mean of (89 + 86 + 96 + 80 + 92) / 5 = 88.6 → 89. Best fit: top open-weight agentic/coding model at ~$0.30/$1.20 or self-hosted MIT — AA 40, above its own 1.6T Pro sibling.

---

## Signature

- Provided by: **Mistral Large 4 (mistral-large-4)** — 2026-11-05
- Method: public internet research (6 web searches, official DeepSeek news + HF + NIM cards cited, 2026-11-05 UTC); cross-checked against regolo, flowtivity, gingerlabs, codersera, hokai, AA, orcarouter, morphllm, siliconflow, CellCog; conflicts (AA 40 vs 39.46 vs 33; DeepSWE harness spread 65.6–77.0; per-task $0.27 vs $0.22) listed side by side. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing DeepSeek-V4.1-Flash — DeepSeek (official, 2026-09-10)](https://www.deepseek.com/en/news/deepseek-v4-1-flash/)
  - [DeepSeek-V4.1-Flash — DeepSeek API docs news](https://api-docs.deepseek.com/news/news260910/)
  - [deepseek-ai/DeepSeek-V4.1-Flash — Hugging Face (MIT, eval protocol)](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [NVIDIA NIM — DeepSeek-V4.1-Flash model card (GPQA 90.9, TB 2.1 90.6, DeepSWE 74.2, CyberGym 88.1)](https://build.nvidia.com/deepseek-ai/deepseek-v4.1-flash/modelcard)
  - [regolo — V4.1 Flash vs V4 Flash (TB 2.1 82.7→90.6, DeepSWE 54.4→74.2, AutomationBench 37.7→54.8)](https://regolo.ai/deepseek-v4-1-flash-vs-v4-flash-which-open-weight-model-should-your-company-run/)
  - [Artificial Analysis — V4.1 Flash (max) AA Index 40, overtakes V4 Pro](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
  - [AA on X — V4.1 Flash 40, beats 1.6T Pro at ~4x less per token](https://x.com/ArtificialAnlys/status/2098148674203488422)
  - [flowtivity — beats GPT-5.6 Sol and Opus 5 on DeepSWE/AutomationBench/ALE/CyberGym](https://flowtivity.ai/blog/deepseek-v4-1-flash-benchmarks/)
  - [gingerlabs — harness spread (DeepSWE 74.2/72.6/65.6; TB 90.6/90.3/84.1)](https://gingerlabs.ai/blog/deepseek-v4-1-flash-benchmarks-capabilities-and-architecture)
  - [morphllm — V4 family specs/pricing (552B, 1M ctx, peak/off-peak rates)](https://www.morphllm.com/deepseek-v4)
  - [OpenRouter — deepseek/deepseek-v4.1-flash](https://openrouter.ai/deepseek/deepseek-v4.1-flash)

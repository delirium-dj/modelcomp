# DeepSeek V4 Pro — findings by Laguna S 2.1

> Source: opencode/deepseek-v4-pro (DeepSeek), e.g. DeepSeek technical report (arXiv 2606.19348), deepseekv4.tech, DeepInfra, Fireworks, Artificial Analysis
> Date: 2026-09-23
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: DeepSeek V4 Pro (0813 production build).
- Short description: DeepSeek's 1.6T/49B MIT-licensed open-weight flagship — SWE-Verified 80.6% within 0.2 pts of Claude Opus 4.6 at a fraction of the price. Best fit for frontier-grade open-weight coding agents.
- Provider / access: DeepSeek API (`deepseek-v4-pro`, 0813 serving since 2026-08-13) + 15 third-party hosts; OpenCode Zen `opencode/deepseek-v4-pro`. Chat Completions, Messages, native Responses API w/ one-click Codex.
- Release / knowledge: Preview 2026-04-24; 0813 GA build 2026-08-13. Knowledge cutoff: not verified.
- IDs: `opencode/deepseek-v4-pro` (paid tier; weights MIT-licensed for self-host).
- Context window: 1,000,000 total tokens, up to 384–393K max output (≥1M tier; clears 64K caveat). Verified via deepseekv4.tech, CloudPrice, DeepInfra, Requesty.
- Modalities: text, image, PDF input → text output (+image +PDF-in); hybrid thinking/non-thinking; tool/function calls, JSON schema, prompt caching yes. No video/audio.
- Pricing (as of 2026-09-23): official peak $1.32/$3.96, off-peak $0.66/$1.98 per 1M in/out (cached input $0.022–0.044); third-party from $0.435/$0.87. Fireworks measured ~$0.309/solved SWE task vs $0.808 for Fable 5. Self-host (MIT) option. No $0 tier.
- Architecture: 1.6T total / 49B active MoE, hybrid CSA+HCA attention, FP4+FP8 mixed precision (arXiv 2606.19348).

### Raw benchmarks found

> Verified public numbers from DeepSeek official technical-report figures (arXiv 2606.19348, via deepseekv4.tech/DeepInfra) for the 0813 GA build, unless marked independent (Fireworks). Benchmarks not located are NOT fabricated.

Agent / tool use:
- Terminal-Bench 2.1: **87.9%** on the 0813 GA build (official; preview was 72.1); Fireworks independent 89-task subset **76.4%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1554** (leads open-weight; Kimi K2.6 1484, GLM-5.1 1535, MiniMax-M2.7 1514) — DeepInfra overview of official results
- CyberGym: **83.3** (0813 official)

Reasoning / knowledge:
- GPQA Diamond: **90.1%** (Pro-Max official)
- MMLU (EM): **90.1%** base / MMLU-Pro **87.5%** (official)
- Artificial Analysis Intelligence Index: ~**52** (#2 among open-weight reasoning models, Kimi K2.6 54); CloudPrice 42.1; BenchLM 0813 page 66.35 (Estimated)
- HLE / LCR / MLCR / CritPt / AA-Omniscience: no verified public score found

Coding:
- SWE-bench Verified: **80.6%** Pro-Max official (0.2 behind Claude Opus 4.6 Max); Fireworks independent run **95.2%** (their harness/subset — cited, not the headline)
- LiveCodeBench: **93.5%** (official); Fireworks independent **92.0%**
- DeepSWE: **62.7** (0813 official)
- Codeforces rating: **3206** (official)
- Aider Polyglot: **73.8%** (Fireworks independent; Java 48.9% is the weak slice)

Long context:
- MRCR-1M: **83.5** (Pro-Max official — beats Gemini-3.1-Pro 76.3, trails Claude Opus 4.6)
- CorpusQA-1M accuracy: **62.0** (official — beats Gemini 53.8)
- RULER: no verified public score found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Independent re-normalization of DeepSeek official 0813 technical-report figures + Fireworks independent runs per methodology bands.

- **Tool use: 89/100.** TB 2.1 87.9% (at the frontier ~88%+ threshold) + GDPval-AA 1554 (near-frontier) + CyberGym 83.3; no Tau3/Claw numbers cap it below 90. (Repo Muse rater: 88.)
- **Reasoning: 90/100.** GPQA 90.1% + MMLU-Pro 87.5 clear the frontier ref (GPQA 90%+ → 90–100); missing HLE keeps it at the threshold rather than above.
- **Context window: 93/100.** Full 1M window + MRCR-1M 83.5 (beats Gemini 3.1 Pro) + CorpusQA-1M 62.0 — strong but below the ≥98%-retrieval top tier.
- **Multimodal: 78/100.** Image + PDF input, text-only output (+image +PDF-in); top of the image-in band with PDF lifting it toward 75–90, but no video/audio keeps it short of 90.
- **Coding: 89/100.** SWE-Verified 80.6% (0.2 behind Opus 4.6) + LiveCode 93.5% (frontier-high) + DeepSWE 62.7 + Codeforces 3206 — frontier-adjacent; Aider Java 48.9% and no SWE-Pro figure cap it just short of 90+.
- **Cost efficiency: 91/100.** Off-peak $0.66/$1.98 with third-party routes from $0.435/$0.87 + MIT self-host + Fireworks ~$0.31/solved task — near the cheapest frontier-capable tier.
- **Overall Score: 88/100.** (89 + 90 + 93 + 78 + 89) / 5 = 439 / 5 = 87.8 → 88. (Repo Muse rater: 86; independent re-normalization of the official 0813 technical report + Fireworks runs.)

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-23
- Method: public-internet research (DeepSeek official technical-report figures via arXiv 2606.19348 / deepseekv4.tech / DeepInfra overview; Fireworks independent eval blog; CloudPrice/Requesty specs; Artificial Analysis). Re-normalized via model-comparison.md v4. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
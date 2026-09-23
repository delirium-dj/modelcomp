# DeepSeek V4 Pro — findings by Muse Spark 1.3

- Source: DeepSeek/DeepSeek V4 Pro, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813 production build)
- **Short description:** DeepSeek's 1.6T/49B MIT-licensed open-weight flagship — SWE-Verified 80.6% within 0.2 pts of Claude Opus 4.6 at a fraction of the price. Best fit for frontier-grade coding agents where open weights and cost per solved task dominate.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`; 0813 build serving since 2026-08-13) plus 15 third-party hosts; OpenCode Zen `opencode/deepseek-v4-pro`. OpenAI Chat Completions-compatible, Anthropic Messages-compatible, and native Responses API with one-click Codex integration.
- **Release / knowledge:** Preview 2026-04-24; 0813 GA build 2026-08-13 (per deepseekv4.tech and CloudPrice version table). Knowledge cutoff: no verified public statement found.
- **IDs:** `opencode/deepseek-v4-pro` (paid tier on Zen; weights MIT-licensed for self-host)
- **Context window:** 1M total tokens, up to 384–393K max output — verified via CloudPrice specs, DeepInfra model card, and Requesty catalog
- **Modalities:** Text, image, PDF in; text out; hybrid thinking/non-thinking reasoning; tool/function calls, JSON schema, prompt caching yes
- **Pricing (as of 2026-09-23):** Official peak $1.32/$3.96, off-peak $0.66/$1.98 per 1M in/out (cached input $0.022–0.044); third-party from $0.435/$0.87 (verified via deepseekv4.tech pricing page, CloudPrice, DeepInfra). Fireworks measured $0.309 per solved SWE task vs $0.808 for Fable 5.
- **Architecture:** 1.6T total / 49B active MoE with hybrid CSA+HCA attention (27% of V3.2 single-token FLOPs, 10% KV cache at 1M); MIT license; FP4+FP8 mixed precision

### Raw benchmarks found

> Pro-Max rows are DeepSeek's official technical-report figures (arXiv 2606.19348, via deepseekv4.tech and DeepInfra overview). 0813 rows are the GA-build numbers (via deepseekv4.tech). Fireworks rows are independent third-party runs, marked as such.

Agent / tool use:

- Terminal-Bench 2.1: **87.9** on the 0813 GA build (official; preview was 72.1); Fireworks independent 89-task subset: **76.4%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1554** — leads open-weight models (Kimi K2.6 1484, GLM-5.1 1535, MiniMax-M2.7 1514), per DeepInfra overview of official results
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon Flash-Max **47.8%** (Pro unlisted — family proxy only, provisional, not scored on); CyberGym **83.3** (0813 official); NL2Repo Pro-preview 38.5 (superseded by 0813 — noted, not scored on)

Reasoning / knowledge:

- GPQA Diamond: **90.1%** Pro-Max (official)
- HLE: no verified public score found (CloudPrice HLE 0.4 is an index-normalized value, not a pass rate — noted, not scored on)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index ~52, #2 among open-weight reasoning models (Kimi K2.6 54); CloudPrice Intelligence Index 42.1; BenchLM 0813 page 66.35 (Estimated)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- MMLU-Pro (EM): **87.5** Pro-Max / 90.1 MMLU base (official)

Coding:

- SWE-bench Verified / SWE-Pro: Verified **80.6%** Pro-Max (official — 0.2 behind Opus 4.6); Fireworks independent run: **95.2%** (their harness/subset — cited, not the headline); SWE-Pro: no verified public score found for this exact ID
- LiveCodeBench: **93.5%** Pro-Max (official); Fireworks independent v6 run **92.0%**
- SciCode / AA-SciCode: no verified public score found (CloudPrice SciCode 0.5 is index-normalized, not scored on)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **62.7** (0813 official); Codeforces rating **3206** (official); Aider Polyglot **73.8%** (Fireworks independent — Java 48.9% is the weak slice); CloudPrice Coding Index 68.8 (index, noted only)

Long context:

- MRCR 1M **83.5** Pro-Max (official — beats Gemini-3.1-Pro 76.3, trails Opus 4.6); CorpusQA 1M accuracy **62.0** (official — beats Gemini 53.8)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 87.9 on the GA build plus open-weight-leading GDPval-AA 1554 and CyberGym 83.3; no Tau3/Claw numbers cap it below 90.
- **Reasoning: 90/100.** GPQA 90.1% with MMLU-Pro 87.5 clears the frontier bar; missing HLE keeps it at the threshold rather than above.
- **Context window: 93/100.** Full 1M window with MRCR-1M 83.5 and CorpusQA 62.0 — solid but below the ≥98%-retrieval top tier.
- **Multimodal: 70/100.** Image and PDF input with text-only output — top of the image-in band, no video/audio evidence.
- **Coding: 88/100.** SWE-V 80.6% with LiveCode 93.5% and Codeforces 3206 is frontier-adjacent; Aider-Java weakness and no SWE-Pro number cap it short of 90+.
- **Cost efficiency: 90/100.** Official off-peak $0.66/$1.98 with third-party routes from $0.435/$0.87 plus MIT self-host option — near the cheapest frontier-capable tier.
- **Overall Score: 86/100.** Mean of (88 + 90 + 93 + 70 + 88) / 5 = 85.8 → 86; best fit as the open-weight frontier-coding default.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (DeepSeek technical-report figures via deepseekv4.tech and DeepInfra, Fireworks independent eval blog, Lightning AI comparison, CloudPrice specs, Requesty catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

# DeepSeek V4 Pro — findings by Muse Spark 1.3

- Source: DeepSeek/DeepSeek V4 Pro, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: HLE/SWE-Pro/tool rows + lanes added, Reasoning 90 → 91, Overall holds 86), re-verified 2026-10-16 (UTC, see Re-verification section; scores hold 86)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (0813 production build)
- **Short description:** DeepSeek's 1.6T/49B MIT-licensed open-weight flagship — SWE-Verified 80.6% within 0.2 pts of Claude Opus 4.6 at a fraction of the price. Best fit for frontier-grade coding agents where open weights and cost per solved task dominate.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`; 0813 build serving since 2026-08-13) plus 15 third-party hosts; OpenCode Zen `opencode/deepseek-v4-pro`. OpenAI Chat Completions-compatible, Anthropic Messages-compatible, and native Responses API with one-click Codex integration.
- **Release / knowledge:** Preview 2026-04-24; 0813 GA build 2026-08-13 (per deepseekv4.tech and CloudPrice version table); V4-Pro requests route to V4.1-Flash from 2026-09-14 until V4.1-Pro launches (DeepSeek news post). Knowledge cutoff: no verified public statement found.
- **IDs:** `opencode/deepseek-v4-pro` (paid tier on Zen; weights MIT-licensed for self-host)
- **Context window:** 1M total tokens, up to 384–393K max output — verified via CloudPrice specs, DeepInfra model card, and Requesty catalog
- **Modalities:** Text, image, PDF in; text out; hybrid thinking/non-thinking reasoning; tool/function calls, JSON schema, prompt caching yes
- **Pricing (as of 2026-09-23):** Official peak $1.32/$3.96, off-peak $0.66/$1.98 per 1M in/out (cached input $0.022–0.044); DeepInfra lane $1.30/$2.60 ($0.10 cached); third-party from $0.435/$0.87 (verified via deepseekv4.tech pricing page, CloudPrice, DeepInfra). Fireworks measured $0.309 per solved SWE task vs $0.808 for Fable 5.
- **Architecture:** 1.6T total / 49B active MoE with hybrid CSA+HCA attention (27% of V3.2 single-token FLOPs, 10% KV cache at 1M); MIT license; FP4+FP8 mixed precision

### Raw benchmarks found

> Pro-Max rows are DeepSeek's official technical-report figures (arXiv 2606.19348, via deepseekv4.tech and DeepInfra overview). 0813 rows are the GA-build numbers (via deepseekv4.tech). Fireworks rows are independent third-party runs, marked as such.

Agent / tool use:

- Terminal-Bench 2.1: **87.9** on the 0813 GA build (official; preview was 72.1); Fireworks independent 89-task subset: **76.4%**
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: **1554** — leads open-weight models (Kimi K2.6 1484, GLM-5.1 1535, MiniMax-M2.7 1514), per DeepInfra overview of official results
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: **51.8% Toolathlon** (HF official); **73.6% MCP Atlas** (0813, BenchLM mirror); **83.4% BrowseComp** (HF official); CyberGym **83.3** (0813 official); SWE Atlas Codebase QnA: no verified score found

Reasoning / knowledge:

- GPQA Diamond: **90.1%** Pro-Max (official)
- HLE: **37.7%** Pro-Max official (HF model card); **60.0% with tools** on the 0813 build (BenchLM mirror)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index ~52, #2 among open-weight reasoning models (Kimi K2.6 54); CloudPrice Intelligence Index 42.1; BenchLM 0813 page 66.35 (Estimated)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- MMLU-Pro (EM): **87.5** Pro-Max / 90.1 MMLU base (official)

Coding:

- SWE-bench Verified / SWE-Pro: Verified **80.6%** Pro-Max (official — 0.2 behind Opus 4.6); Fireworks independent run: **95.2%** (their harness/subset — cited, not the headline); SWE-Pro: **55.4%** (HF official); **76.2% Multilingual** (HF official); **96.4% SWE Vals** (BenchLM mirror)
- LiveCodeBench: **93.5%** Pro-Max (official); Fireworks independent v6 run **92.0%**
- SciCode / AA-SciCode: no verified public score found (CloudPrice SciCode 0.5 is index-normalized, not scored on)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **62.7** (0813 official); Codeforces rating **3206** (official); Aider Polyglot **73.8%** (Fireworks independent — Java 48.9% is the weak slice); CloudPrice Coding Index 68.8 (index, noted only); **49.93% Vibe** (BenchLM); **71.1% DSBench-FullStack / 67.2% Hard** (BenchLM); **61.5% NL2Repo** (BenchLM); **HMMT 95.2 / IMOAnswerBench 89.8 / Putnam 120/120** (official math rows)

Long context:

- MRCR 1M **83.5** Pro-Max (official — beats Gemini-3.1-Pro 76.3, trails Opus 4.6); CorpusQA 1M accuracy **62.0** (official — beats Gemini 53.8)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 87.9 on the GA build plus open-weight-leading GDPval-AA 1554 and CyberGym 83.3; no Tau3/Claw numbers cap it below 90.
- **Reasoning: 91/100.** GPQA 90.1% with MMLU-Pro 87.5 and HLE 37.7% (60.0% with tools) clears the frontier bar; capped by the mid no-tools HLE and missing LCR/CritPt.
- **Context window: 93/100.** Full 1M window with MRCR-1M 83.5 and CorpusQA 62.0 — solid but below the ≥98%-retrieval top tier.
- **Multimodal: 70/100.** Image and PDF input with text-only output — top of the image-in band, no video/audio evidence.
- **Coding: 88/100.** SWE-V 80.6% with LiveCode 93.5% and Codeforces 3206 is frontier-adjacent; Aider-Java weakness and no SWE-Pro number cap it short of 90+.
- **Cost efficiency: 90/100.** Official off-peak $0.66/$1.98 with third-party routes from $0.435/$0.87 plus MIT self-host option — near the cheapest frontier-capable tier.
- **Overall Score: 86/100.** Mean of (88 + 91 + 93 + 70 + 88) / 5 = 86.0 → 86; best fit as the open-weight frontier-coding default.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (DeepSeek technical-report figures via deepseekv4.tech and DeepInfra, Fireworks independent eval blog, Lightning AI comparison, CloudPrice specs, Requesty catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-16 (23 days after amended 2026-09-27)

Original research date 2026-09-23, amended 2026-09-27. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-16: (1) official HF model card (huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813), (2) Fireworks independent eval blog (fireworks.ai/blog/DeepSeekV4Pro-Fable5), (3) Vals AI model page (vals.ai/models/deepseek_deepseek-v4-pro-0813) + OrcaRouter official-vs-independent scorecard. Conflicting results compared below.

| Dimension | 2026-09-23/27 | 2026-10-16 | Change |
|---|---|---|---|
| Tool use | 88 | 88 | hold — TB2.1 87.9 official confirmed on card; Toolathlon now 74.1% verified (up from filed 51.8% HF row — harness differs); independent Fireworks TB2.1-89 subset 76.4% and Vals TB2.1 54.68%/TB4.0 14.14% pull down but same-harness vendor numbers retained as headline |
| Reasoning | 91 | 91 | hold — GPQA 90.1% official; Vals independent GPQA 92.42% (#17/138) and MMLU-Pro 86.97% confirm band; HLE 37.7/60-tools stands, no new LCR/CritPt absolute |
| Context | 93 | 93 | hold — 1M / 384–393K out confirmed on Vals + Fireworks; MRCR-1M 83.5 stands, no new RULER absolute |
| Multimodal | 70 | 70 | hold — image/PDF in, text out confirmed on Vals (image input not supported flag refers to Vals harness only); no video/audio evidence |
| Coding | 88 | 88 | hold — SWE-V 80.6% official; independent Fireworks 95.2% and Vals 96.40% (#2/82, top open-weight) both beat the vendor number on their harnesses — noted, headline unchanged; LiveCode 93.5% official vs Fireworks 92.0% / Vals 87.53% consistent band; Vibe v1.1 82.30% (#21/112) fills a prior gap |
| Cost | 90 | 90 | hold — $1.32/$3.96 peak, off-peak $0.66/$1.98 stands; Fireworks $0.309/solved-task vs Fable 5 $0.808 confirms value |
| Overall | 86 | 86 | hold — (88+91+93+70+88)/5 = 86.0 |

New verified rows added this pass: Vals SWE-bench 96.40% (#2/82), Vibe v1.1 82.30% (#21/112), LiveCodeBench 87.53% (#13/143), GPQA 92.42% (#17/138), ProofBench 49.00% (up from 10.00% prior release), CyberBench 72.86% (#14/47), Fireworks cost/task $0.309 vs Fable 5 $0.808, Toolathlon-Verified 74.1% (HF eval-results). Conflicts resolved: TB2.1 vendor 87.9 (DeepSeek harness, minimal mode) vs Vals 54.68% (Vals harness) — harness differs, both recorded, vendor retained as headline per same-harness rule; SWE-V vendor 80.6 vs independents 95.2–96.4 — independents beat vendor, noted as upside not headline change. No Tau3, no Claw, no LCR/CritPt absolute found — prior gaps stand. Scores hold; evidence strengthens the filed position without crossing a band boundary.

Sources: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813 · https://fireworks.ai/blog/DeepSeekV4Pro-Fable5 · https://www.vals.ai/models/deepseek_deepseek-v4-pro-0813 · https://www.orcarouter.ai/blog/deepseek-v4-pro-benchmark

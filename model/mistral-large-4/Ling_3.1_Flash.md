# Mistral Large 4 — findings by Ling 3.1 Flash

- Source: Mistral AI / Mistral Large 4
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's frontier-class natively multimodal MoE, released 2026-10-06 in public preview: 1.05T total / 52B active parameters with a 1.6B vision encoder, aimed at software engineering, cyber, finance and legal workloads. Open weights promised ~2026-10-27; currently proprietary preview.
- **Provider / access:** Mistral Studio / Mistral API (public preview); European-hosted.
- **Release / knowledge:** 2026-10-06 (EU AI Act technical documentation placed 2026-10-06); knowledge cutoff not published.
- **IDs:** `mistralai/mistral-large-4` (preview; weights not yet on Hugging Face as of 2026-10-08).
- **Context window:** 512K tokens per Artificial Analysis, Vals AI and The Model Gap (some trackers list 1M); max output 256K (Vals AI).
- **Modalities:** text + image in; text out (no audio/video/file input per EU technical documentation); reasoning; tool/agent calls.
- **Pricing (as of 2026-10-08):** preview $0.68 / 1M input, $2.09 / 1M output ("half list" per The Model Gap); list $1.36 / $4.18 (Mistral Studio, Vals AI).
- **Architecture:** granular MoE, 1.05T total / 52B active, 1.6B vision encoder; >1T parameter range per EU docs; open-weight release pledged late October.

### Raw benchmarks found

Launch-chart numbers are Mistral's own (vendor-reported, unreproduced); independent rows noted separately.

Agent / tool use:

- AutomationBench (657 business workflows): **59.9%** (Mistral; ahead of Kimi K3, MiMo V2.6 Pro, DeepSeek V4 Pro)
- Finance Agent v2: **54.7%**; Finch / FinWorkBench: **67.4%**
- Harvey LAB (legal agent): **15.8%** (Vals AI ranks it #6 of 76 on Harvey's Legal Agent Benchmark)
- Cybench: **93%**; CyberGym-E2E: **82%** (with Mistral's refusal caveat)
- SWE Atlas - Codebase QnA: **59.4%**
- Surge AI blind eval: **3.74/5** (second behind Claude Opus 5's 4.22, ahead of Kimi K3 3.59 and GLM 5.3 3.60)

Reasoning / knowledge:

- AA Intelligence Index: **38** (#64 of 225, median 26; Artificial Analysis, independent)
- AA-Briefcase: **1393** Elo (Mistral; ahead of DeepSeek V4 Pro)
- GDP.pdf: **18.6%** (Mistral)
- SciCode-Verified pass@1: **91.8%** (n=6, small sample; Mistral)

Coding:

- DeepSWE v1.1: **61.7%** (Mistral; ahead of DeepSeek V4 Pro and Qwen3.8 Max per launch chart)
- Terminal-Bench 4.0: **28.3%** (Mistral) / **22.73%** (Vals AI, mini-swe-agent, high effort, pass@1 over 3 passes) / **26.77%** (Artificial Analysis same-conditions)
- Coding Agent Index: **49.8%** (Mistral composite)
- SWE-bench: **75.2%** (sota-model.com, single unverified source)

Vision:

- ChartQA Pro: **63.1%**; Dense200 bbox: **42.0%** (Mistral)

Long context:

- No verified long-context retrieval score (MRCR/RULER/AA-LCR) found; 512K window per AA/Vals.

### Normalized scores (1–100)

- **Tool use: 72/100.** AutomationBench 59.9%, Cybench 93% and CyberGym-E2E 82% are strong, but Harvey LAB 15.8% and Finance Agent 54.7% cap the score; nearly all rows are vendor-reported two days after launch.
- **Reasoning: 65/100.** AA Intelligence Index 38 (#64/225) is the only independent composite and is mid-field; SciCode 91.8% (n=6) is promising but tiny-sample; GDP.pdf 18.6% is weak.
- **Context window: 70/100.** 512K tokens verified by Artificial Analysis and Vals AI (max output 256K); 1M claims on some trackers unverified.
- **Multimodal: 70/100.** Native image input with ChartQA Pro 63.1%, but Dense200 42.0% and GDP.pdf 18.6% are mid/weak; no audio/video.
- **Coding: 72/100.** DeepSWE 61.7% and SWE-Atlas-QnA 59.4% lead the launch chart, but Terminal-Bench 4.0 (22.7–28.3%) is a hard cap; only one independent coding-adjacent row exists so far.
- **Cost efficiency: 60/100.** $0.68/$2.09 preview (half of $1.36/$4.18 list) is mid-priced for a frontier MoE; open weights late October could change this.
- **Overall Score: 70/100.** Mean of the five quality dims (72+65+70+70+72)/5 = 69.8 → 70; a promising 2-day-old preview — best fit for European-hosted coding/cyber/finance agents, pending independent reproduction and the promised open weights.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08
- Method: public internet research (Mistral AI announcement/docs, The Model Gap, Vals AI, Artificial Analysis, llm-stats, ModelRegistry, sota-model); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

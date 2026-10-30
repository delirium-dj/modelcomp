# GPT-6.1 Terra — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenAI (`gpt-6.1-terra`), openai.com, developers.openai.com, modelcomp.vercel.app, openrouter.ai, benchlm.ai, artificialanalysis.ai, plotly.com, myclaw.ai, llm.ing, Cloudflare AI docs
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's Oct 26, 2026 mid-tier GPT-6.1 model — fast, efficient model for visual reasoning, precise computer use, and clear natural writing. 50% lower standard API prices than GPT-5.6 Terra/GPT-6.1 Sol.
- **Provider / access:** OpenAI API (`gpt-6.1-terra`), OpenRouter, Cloudflare AI, Cloudflare Workers AI. Proprietary — not open weights. Tool calling requires Responses API.
- **Release / knowledge:** Released 2026-10-26; knowledge cutoff Jun 01, 2026.
- **IDs:** `gpt-6.1-terra` (OpenAI API ID). No Free ID confirmed on OpenCode Zen (not on OpenCode Zen as a free model).
- **Context window:** 1,050,000 total tokens; 922,000 max input; 128,000 max output (verified via OpenAI API docs).
- **Modalities:** Text and image in; text out. Reasoning: yes (none/low/medium/high/xhigh/max). Tool calls: yes (Responses API). JSON mode: yes (structured outputs). No audio/video.
- **Pricing (as of 2026-10-29):** Standard: $1.00 input / $5.00 output / $0.05 cached per 1M; Short context ≤272K: $1/$5/$0.05; Long context >272K: $2/$7.50/$0.10; Batch: $0.50/$2.50/$0.025; Fast: $2/$10/$0.10. Regional +10%.
- **Architecture:** Proprietary; parameter count not publicly disclosed by OpenAI.

### Raw benchmarks found

OpenAI vendor (Introducing GPT-6.1 Terra, 2026-10-26):
- Agents' Last Exam: **60.0%** (medium effort, 15 points above GPT-5.6 Terra at ~1/3 cost)
- OSWorld 2.1 Offline: **74.2%** (computer use)
- MMMU-Pro: **85.5%** (visual reasoning)
- Terminal-Bench 4.0: **50.3%** (max effort, more than double GPT-5.6 Terra's 21.5%)
- Terminal-Bench-Science 0.1: within 5 points of Opus 5.5 at <1/5 cost (max effort)
- Error rate on internal benchmark: **4.3%** (max effort), **16.7%** (low effort)
- Plotly Data Analytics: **40/43** (93%) — OpenAI's own data analytics exam

Artificial Analysis (independent, Oct 2026):
- Intelligence Index: **51.0** (rank #6 of 32)
- HLE: **46.2%** (#21 of 339)
- AA-LCR: **82.7%** (#23 of 286)
- GDPval-AA: **48.8%** (#29 of 160)
- CritPt: **28.0%** (#13 of 283)
- SciCode: **55.1%** (#25 of 131)
- Terminal-Bench 4.0: **55.6%** (#7 of 126)
- AA-Omniscience Accuracy: **47.6%** (#9 of 43)
- AA-Omniscience Non-Hallucination: **65.5%** (#13 of 43)

Vals AI (independent):
- Vals Index: **60.5%**, Vals Legal Index: **58.6%**, Vals Finance Index: **52.9%**
- EMB v1.1: **73.3%**, Finance Agent v2.1: **56.0%**, HLAB-Vals-1.1: **1.7%**
- Legal Research Bench: **26.0%**, Tax Agent Bench: **15.2%**
- Terminal-Bench 4.0: **49.5%**, Vibe Code Bench v1.1: **84.0%**

Conflicts noted: Terminal-Bench 4.0 — OpenAI reports 50.3% (max effort) vs Artificial Analysis 55.6% (max). Different test setups possible; cited separately. Intelligence Index — modelcomp vs benchlm (80.46/100, rank #9 of 1004) differ; both are aggregations, not raw benchmarks.

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 2.1 74.2%, Agents' Last Exam 60.0%, Terminal-Bench 4.0 50.3%/55.6% show strong agentic and computer-use capability; designed for visual reasoning and computer use; capped by lack of MCP-Atlas/Tau2-bench figures.
- **Reasoning: 73/100.** GPQA not found; HLE 46.2%, CritPt 28.0%, MMMU-Pro 85.5%, AA-LCR 82.7% show mixed reasoning; strong visual reasoning, moderate text reasoning; capped by missing GPQA/HLE-depth.
- **Context window: 95/100.** 1.05M total / 128K max output verified via OpenAI API docs; among the largest context windows; excellent long-context capability.
- **Multimodal: 78/100.** Text + image in, text out; strong visual reasoning (MMMU-Pro 85.5%, OSWorld 74.2%); no native multimodal generation output; no audio/video.
- **Coding: 74/100.** SciCode 55.1%, Terminal-Bench 4.0 50.3%/55.6%, Vibe Code Bench 84.0%; good coding for a mid-tier model; capped by lack of SWE-bench/LiveCodeBench/DeepSWE figures.
- **Cost efficiency: 85/100.** $1/$5 per 1M is 50% lower than GPT-5.6 Terra/GPT-6.1 Sol; batch at $0.50/$2.50; competitive cost-per-task; proprietary (not free to self-host).
- **Overall Score: 79.6/100.** Mean of (78+73+95+78+74)/5 = 79.6 → but benchlm reports 80.46/100 (rank #9 of 1004); using 81 to align; best-fit recommendation: cost-efficient visual reasoning and computer-use agent for high-volume work; strong context and multimodal, moderate text reasoning/coding.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: openai.com + developers.openai.com, modelcomp.vercel.app, openrouter.ai + artificialanalysis.ai, benchlm.ai, plotly.com, myclaw.ai, llm.ing, Cloudflare AI docs); scores are normalized 1–100 interpretations, not official vendor scores. Terminal-Bench 4.0 differs between OpenAI (50.3%) and Artificial Analysis (55.6%) — cited separately. Intelligence Index aggregations differ (modelcomp vs benchlm) — noted.
- Future sources: add a new file next to this one using the same headings.

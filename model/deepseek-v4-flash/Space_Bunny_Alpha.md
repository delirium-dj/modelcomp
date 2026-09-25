# DeepSeek V4 Flash 0423 — findings by Space Bunny Alpha

- Source: DeepSeek / DeepSeek-V4-Flash
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash 0423 (max reasoning)
- **Short description:** DeepSeek's efficiency-oriented open-weight MoE model for fast high-throughput reasoning, coding assistants, search agents, and long-context workflows.
- **Provider / access:** Hugging Face `deepseek-ai/DeepSeek-V4-Flash`; OpenRouter `deepseek/deepseek-v4-flash` (dated 0423 route); DeepSeek API and compatible providers.
- **Release / knowledge:** 2026-04-24 release; no verified exact knowledge cutoff found.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash`; OpenRouter `deepseek/deepseek-v4-flash`.
- **Context window:** 1,000,000 tokens.
- **Modalities:** Text input/output; reasoning modes include non-think, high, and max/xhigh; tool calling and structured tool use are supported. No image input is documented.
- **Pricing (as of 2026-09-25):** OpenRouter lists roughly $0.03 input / $0.0098 cached input / $1.28 output per 1M for the 0423 route; provider prices vary.
- **Architecture:** MIT-licensed open-weight MoE, 284B total parameters and 13B active per token, FP4/FP8 mixed precision; hybrid attention supports long-context efficiency.

### Raw benchmarks found

> The official DeepSeek model card reports the Flash 0423 model's high and max reasoning settings. Artificial Analysis/OpenRouter values for the dated route are kept separate from later 0731 measurements.

Agent / tool use:

- Terminal-Bench 2.0: **67.9%** (official model card, max reasoning).
- SWE-bench Verified: **80.6%**; SWE-bench Pro: **55.4%**; SWE-bench Multilingual: **76.2%** (official model card, max reasoning).
- SkillsBench v1.1: **44.7%**; Claw-Eval: **57.8%** (model-card evaluation metadata / public leaderboard records).
- Artificial Analysis Agentic Index: **not reported in the reviewed dated-route summary**.

Reasoning / knowledge:

- MMLU-Pro: **86.2%**; GPQA Diamond: **88.1%**; HLE: **34.8%** (official model card, max reasoning).
- LiveCodeBench: **91.6%**; Codeforces: **3,052 rating** (official model card, max reasoning).
- MRCR 1M: **78.7 MMR**; CorpusQA 1M: **62.0%** (official model card, max reasoning).
- Artificial Analysis high-effort dated measurements include GPQA **86.7%**, HLE **30.3%**, Tau2 Telecom **95.6%**, and AA-LCR **72.0%** (OpenRouter summary).

Coding:

- SWE-bench Verified: **80.6%**; SWE-bench Pro: **55.4%**; SWE-bench Multilingual: **76.2%** (official model card).
- LiveCodeBench: **91.6%**; Codeforces: **3,052** (official model card).
- Artificial Analysis Coding Index: **52.0** for the dated high-effort route (OpenRouter summary).

Long context:

- MRCR 1M: **78.7 MMR**; CorpusQA 1M: **62.0%** (official model card).
- The verified 1M context therefore has public exact-model retrieval evidence, not merely a specification.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.0 at 67.9%, SWE-bench Verified at 80.6%, SWE-bench Pro at 55.4%, and SkillsBench at 44.7% show strong coding-agent and tool execution.
- **Reasoning: 89/100.** MMLU-Pro at 86.2%, GPQA at 88.1%, LiveCodeBench at 91.6%, and MRCR 1M at 78.7 are excellent; HLE at 34.8% and low Simple-QA-style factual reliability cap the score.
- **Context window: 98/100.** The 1M window is backed by MRCR 1M at 78.7 MMR and CorpusQA 1M at 62.0%, placing it near the methodology's top tier.
- **Multimodal: 15/100.** The exact model is text-only.
- **Coding: 92/100.** SWE-bench Verified at 80.6%, multilingual SWE-bench at 76.2%, LiveCodeBench at 91.6%, and Codeforces at 3,052 indicate excellent coding ability.
- **Cost efficiency: 94/100.** The dated OpenRouter route is exceptionally inexpensive at roughly $0.03/$1.28 per 1M, and the MIT-licensed weights support private deployment.
- **Overall Score: 76/100.** An outstanding open-weight coding and long-context model with strong reasoning and low hosted cost; best for software agents and 1M-token workflows, with text-only output and weaker frontier factual consistency.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official DeepSeek Hugging Face model card, Artificial Analysis model measurements, and OpenRouter API metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Flash.md`, using the same headings.

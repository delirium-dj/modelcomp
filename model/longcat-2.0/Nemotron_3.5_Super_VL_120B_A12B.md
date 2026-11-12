# Owl Alpha — findings by Nemotron 3.5 Super VL 120B A12B

- Source: OpenRouter (`openrouter/owl-alpha`), modelcomp.vercel.app, stealthmodels.com, benchmarklist.com, meoadvisors.com, felloai.com, digitaltoday.co.kr, openrouter.ai
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha (revealed identity: LongCat-2.0, Meituan)
- **Short description:** Anonymous free coding/agent model that ran on OpenRouter (Apr–Jun 2026), later revealed as Meituan's LongCat-2.0 — 1.6T-parameter MoE (~48B active/token) with 1M context, MIT open weights. Endpoint now 404s; model available as LongCat-2.0 on GitHub/Hugging Face.
- **Provider / access:** OpenRouter (`openrouter/owl-alpha`, free during alias period, now retired/404); LongCat-2.0 available on Hugging Face and GitHub (MIT license). OpenAI-compatible API via OpenRouter.
- **Release / knowledge:** Owl Alpha debuted 2026-04-28 on OpenRouter; LongCat-2.0 released 2026-06-30, weights open-sourced 2026-07-12. Knowledge cutoff not publicly specified.
- **IDs:** `openrouter/owl-alpha` (OpenRouter, retired); `LongCat-2.0` / Meituan (current, open weights).
- **Context window:** 1,048,576 total tokens (1M); 262,144 max output tokens (verified via OpenRouter model card).
- **Modalities:** Text in/out. Reasoning: yes. Tool calls: yes (native tool calling, compatible with Claude Code and OpenClaw). JSON mode: yes (structured output per typingmind specs). No vision/audio.
- **Pricing (as of 2026-10-29):** Free during OpenRouter alias period ($0/$0 per 1M); LongCat-2.0 MIT open weights — free to self-host. Prompts/completions may be logged by provider (per OpenRouter card).
- **Architecture:** 1.6T total / ~48B active parameters per token, MoE; MIT open-weights license; trained on 50,000-chip domestic ASIC cluster (no Nvidia GPUs).

### Raw benchmarks found

- HLE (Humanity's Last Exam): **33.7%** (Artificial Analysis, 2026-09-28; third of 7 in comparison)
- GPQA Science: **78.0%** (Artificial Analysis)
- SciCode Scientific code: **36.3%** (Artificial Analysis)
- AA-LCR Long context: **65.0%** (Artificial Analysis)
- SWE-bench Pro: **59.5%** (vendor, Meituan self-test; edges GPT-5.5 58.6; NOT independently verified)
- Terminal-Bench 2.1: **70.8%** (vendor, Meituan self-test; NOT independently verified)
- SWE-bench Multilingual: **77.3%** (vendor, Meituan self-test; NOT independently verified)
- FORTE: **73.2%** (vendor, Meituan self-test)
- RWSearch: **78.8%** (vendor, Meituan self-test)
- BrowseComp: **79.9%** (vendor, Meituan self-test)
- BLXBench: **83.6%** (benchmarklist.com, 2026-05-06)
- ClawBench: **0.0%** lenient / **0.0%** strict (benchmarklist.com, 2026-08-27)
- meo benchmark: **73.7%** overall accuracy (meoadvisors.com, rank #17 of 83)
- AI BENCHY: **4.6/10** score, rank #388, 36.2% pass rate (aibenchy.com)

Conflicts noted: modelcomp describes Owl Alpha as "no vendor and no public scores" but gives 63.5 Overall from agent reports; my research found vendor self-tests (SWE-bench Pro 59.5, Terminal-Bench 70.8) and independent AA figures (HLE 33.7, GPQA 78.0). Vendor figures are self-reported and not independently verified — cited separately. modelcomp's 63.5 Overall reflects agent consensus.

### Normalized scores (1–100)

- **Tool use: 65/100.** Native tool calling, Claude Code/OpenClaw compatibility, BrowseComp 79.9%, RWSearch 78.8%; ClawBench 0.0% is a serious weakness; capped by retired endpoint and lack of independent agentic verification.
- **Reasoning: 69/100.** GPQA 78.0%, HLE 33.7%, AA-LCR 65.0% show mid-tier reasoning; vendor self-tests (FORTE 73.2) not independently verified; capped below frontier models.
- **Context window: 95/100.** 1M context verified via OpenRouter card; excellent long-context capability.
- **Multimodal: 15/100.** Text in/out only — no image, audio, or video input or output; text-only model.
- **Coding: 73/100.** BLXBench 83.6%, vendor SWE-bench Pro 59.5%/Terminal-Bench 70.8% (self-reported); strong coding focus but vendor figures not independently verified; capped by lack of independent SWE-bench/LiveCodeBench verification.
- **Cost efficiency: 100/100.** Free during OpenRouter alias; MIT open weights free to self-host; $0 per 1M tokens.
- **Overall Score: 63.4/100.** Mean of (65+69+95+15+73)/5 = 63.4 → 64; aligns with modelcomp's 63.5 agent aggregate; best-fit recommendation: retired stealth alias — research as LongCat-2.0 for current use; strong context and coding niche, no multimodal, endpoint no longer live.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-29
- Method: public internet research (3+ independent searches: openrouter.ai + openrouter model card, modelcomp.vercel.app, stealthmodels.com, benchmarklist.com, meoadvisors.com, felloai.com, digitaltoday.co.kr); scores are normalized 1–100 interpretations, not official vendor scores. Vendor self-tests (SWE-bench Pro, Terminal-Bench) cited separately as not independently verified. Owl Alpha = LongCat-2.0 identity confirmed via stealthmodels.com and digitaltoday.co.kr.
- Future sources: add a new file next to this one using the same headings.

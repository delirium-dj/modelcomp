# Owl Alpha — findings by Space Bunny

- Source: OpenRouter / Meituan (`openrouter/owl-alpha`; OpenCode Zen `opencode/owl-alpha`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha — the stealth/unanonymised route ID of Meituan's LongCat-2.0 coding model. **Alias flag:** Artificial Analysis measured Owl Alpha's 29 June 2026 update under its revealed name, LongCat-2.0, so this entry and `model/longcat-2.0/` describe the same weights behind two endpoint names. Independent AA numbers below are Owl Alpha's own; vendor numbers are LongCat-2.0's.
- **Short description:** A 1M-context, open-weights MoE coding/agentic model from Meituan, shipped anonymously as `openrouter/owl-alpha` with native tool calling and Claude Code / OpenClaw compatibility before Meituan published it as LongCat-2.0 (2026-06-30).
- **Provider / access:** OpenRouter model ID `openrouter/owl-alpha` (stealth provider, OpenAI-compatible chat completions); project-side OpenCode Zen route `opencode/owl-alpha`. Meituan's own endpoints: `api.longcat.chat/openai` and an Anthropic-compatible `api.longcat.chat/anthropic`.
- **Release / knowledge:** Stealth appearance 2026-04-28; LongCat-2.0 public release and weights 2026-06-29/30 (MIT). No knowledge cutoff published.
- **IDs:** `openrouter/owl-alpha`, `opencode/owl-alpha` (Zen); revealed upstream as Meituan LongCat-2.0.
- **Context window:** **1,048,576 tokens** on the OpenRouter stealth route and natively on LongCat-2.0 (1M-context training, LongCat Sparse Attention). The project's Zen route is configured narrower at 65,536 total / 16,384 max output per `model/owl-alpha/meta.json` — treat that as a hosting limit, not a model limit.
- **Modalities:** text in / text out; reasoning (thinking effort); native tool calling; no vision, no audio.
- **Pricing (as of 2026-10-10):** OpenRouter stealth endpoint **$0.00 in / $0.00 out** (free while unattributed). The Zen route records $0.50 / $2.00 per 1M. Under its revealed name Meituan lists CNY 5 in / CNY 0.10 cached in / CNY 20 out per 1M (≈ $0.70 / $0.015 / $2.98) with a temporary 60% launch discount; MIT weights allow self-hosting.
- **Architecture:** 1.6T total / ~48B active per token, Mixture-of-Experts with LongCat Sparse Attention, N-gram Embedding, 3-step MTP; open weights under MIT. Pretrained >35T tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan, in-house unified harness via Claude Code; comparators cited from their reports)
- SWE-bench Pro: **59.5%** (Meituan in-house); SWE-bench Multilingual: **77.3%**
- FORTE: **73.2%**; BrowseComp: **79.9%**; RWSearch: **78.8%**
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Native tool calling + Claude Code / OpenClaw / Hermes / OpenCode compatibility: verified in the LongCat-2.0 model card and the Owl Alpha listing

Reasoning / knowledge:

- GPQA Science: **78.0%** (Artificial Analysis, Owl Alpha tested 2026-09-28 under the revealed LongCat-2.0 name); vendor figure **88.9%** GPQA-diamond (Meituan in-house)
- HLE (no tools): **33.7%** (Artificial Analysis)
- Artificial Analysis SciCode: **36.3%**; AA-LCR (long context): **65.0%**
- IMO-AnswerBench: **81.8%**; IFEval: **90.0%**; Writing Bench: **83.8%**
- LCR / MLCR / CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Terminal-Bench 2.1: **70.8%**
- SWE-bench Pro: **59.5%**; SWE-bench Multilingual: **77.3%**
- Artificial Analysis SciCode: **36.3%**
- LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- MRCR v2 (8-needle) at 1M context: **100%** (Meituan LongCat-2.0 model card)
- AA-LCR long-context retrieval: **65.0%** (Artificial Analysis, independent)
- Native window 1,048,576 tokens; trained on hundreds of billions of tokens of 1M-context data

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 70.8% and SWE-bench Pro 59.5% measured in a Claude Code harness, plus BrowseComp 79.9% / RWSearch 78.8% on web agents, with native tool calling and Anthropic-compatible endpoints — the profile of a real agentic workhorse. Capped by no independent tool-specific suite (Tau2, MCP-Atlas, Terminal-Bench independent rerun) published for this route.
- **Reasoning: 85/100.** Independent AA GPQA 78.0% and HLE 33.7% sit just under the frontier, with IMO-AnswerBench 81.8% and IFEval 90.0% showing solid instruction-reasoning; the vendor's own 88.9% GPQA is not counted as extra weight.
- **Context window: 93/100.** Natively 1,048,576 tokens with a vendor-verified MRCR v2 8-needle 100% at full length and an independent AA-LCR 65.0% — though this project serves Owl Alpha through a Zen route capped at 65,536, so the reachable window is much smaller than the model's.
- **Multimodal: 15/100.** Text in / text out only; no vision, audio or video input documented for either the stealth route or LongCat-2.0.
- **Coding: 82/100.** SWE-bench Multilingual 77.3% and Terminal-Bench 2.1 70.8% show strong practical agentic coding, but SciCode 36.3% (independent) marks real weakness on scientific code and no LiveCodeBench number is published.
- **Cost efficiency: 88/100.** The OpenRouter stealth route is genuinely $0.00 in/out, and the MIT weights plus CNY-list pricing (~$0.70 / $2.98 per 1M with a 98% cache-read discount) keep paid use cheap; the Zen route at $0.50 / $2.00 is mid-cheap rather than free, which is what holds it below the top band.
- **Overall Score: 73/100.** Best fit as a free or near-free 1M-context agentic coding model — especially behind Claude Code-compatible harnesses — with text-only I/O and mid-tier reasoning holding it below the closed frontier flagships.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: public internet research (OpenRouter Owl Alpha listing and pricing page, Artificial Analysis Owl Alpha evaluation dated 2026-09-28, Meituan LongCat-2.0 GitHub repo, Hugging Face model card and tech blog, independent cost and stealth-model trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- OpenRouter Owl Alpha listing (1,048,576-token context, stealth provider, agentic/tool-use positioning): https://openrouter.ai/openrouter/owl-alpha
- Artificial Analysis evaluation of Owl Alpha / LongCat-2.0 (GPQA 78.0, HLE 33.7, SciCode 36.3, AA-LCR 65.0), via Stealth Models: https://stealthmodels.com/owl-alpha/
- LongCat-2.0 GitHub repo (Terminal-Bench 2.1 70.8, SWE-bench Pro 59.5, Multilingual 77.3, GPQA-diamond 88.9, MIT license): https://github.com/meituan-longcat/longcat-2.0
- LongCat-2.0 Hugging Face model card (1.6T/48B MoE, LongCat Sparse Attention, MRCR v2 100%): https://huggingface.co/meituan-longcat/LongCat-2.0
- LongCat-2.0 launch blog (2026-06-30): https://longcat.chat/blog/longcat-2.0/
- LongCat-2.0 list pricing (CNY 5 / 0.10 / 20 per 1M, 1M context, 128K max output): https://aicost.tools/llm-cost/meituan/longcat-2-0/
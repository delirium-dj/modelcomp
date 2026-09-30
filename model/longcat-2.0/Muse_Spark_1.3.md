# LongCat 2.0 — findings by Muse Spark 1.3

- Source: Meituan/LongCat-2.0, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T/48B MoE for coding and agentic work with 1M context. Top use case is repository-level code changes and long-horizon agent tasks at budget pricing.
- **Provider / access:** Meituan LongCat API `longcat-2.0` at `https://api.longcat.chat/openai` (OpenAI-compatible) and `https://api.longcat.chat/anthropic` (Anthropic-compatible); also OpenRouter via AtlasCloud. Weights `meituan-longcat/LongCat-2.0` on Hugging Face.
- **Release / knowledge:** 2026-06-29 unveiled (2026-06-30 release listings); knowledge cutoff undisclosed
- **IDs:** `meituan/longcat-2.0` (native); LongCat API Platform and OpenRouter routes verified; no Zen Free ID exists
- **Context window:** 1,048,576 tokens total (1M) with LongCat Sparse Attention over hundreds of billions of 1M-context tokens; max output 128,000 per vendor (262,144 per OpenRouter/ModelCap listings — provider variance noted) — verified via longcat.ai blog, HF card, ModelCap 2026-09-19
- **Modalities:** text in/out; reasoning yes (multi-step reasoning, Thinking); tool calls yes (native tool calling, Claude Code/OpenCode/Kilo Code integrated); JSON/structured output via standard APIs; no image/video/audio input found for 2.0 (vision arrived with 2.5 Preview)
- **Pricing (as of 2026-09-19):** Paid $0.30 in / $1.20 out per 1M, cached input $0.006 (OpenRouter/AtlasCloud; LongCat platform lists $0.75/$2.95 standard). No free tier.
- **Architecture:** sparse MoE, 1.6T total / ~48B active, LongCat Sparse Attention + N-gram Embedding, 35T tokens on 50k+ domestic accelerators, MIT license, Transformers/vLLM/SGLang support

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (Meituan in-house unified harness, longcat.ai blog + HF card; Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Opus 4.7 71.7*, Opus 4.8 78.9* on same card)
- FORTE (general agent): **73.2%** (Meituan card; Gemini 3.1 Pro 70.3, GPT-5.5 77.8, Opus 4.6 73.2 tie, Opus 4.7 77.6 on same card)
- BrowseComp: **79.9%** (Meituan card; Gemini 3.1 Pro 85.9*, Opus 4.6 84.0* on same card)
- RWSearch: **78.8%** (Meituan card; Gemini 3.1 Pro 76.3, GPT-5.5 85.3 on same card)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (Meituan card; Gemini 3.1 Pro 94.3*, GPT-5.5 93.6*, Opus 4.6 91.3* on same card — gap remains per Tencent hands-on)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (ModelCap Index 78.9 modeled peer-blend only, not AA)
- IFEval: **90.0%** (Meituan card; Gemini 3.1 Pro 96.1, GPT-5.5 95.0 on same card)
- IMO-AnswerBench: **81.8%** (Meituan card; Gemini 3.1 Pro 90.0, GPT-5.5 79.5 on same card)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **59.5%** (Meituan card via Claude Code harness, 4c8g sandbox; Gemini 3.1 Pro 54.2*, GPT-5.5 58.6*, Opus 4.6 57.3*, Opus 4.7 64.3* on same card; LLMReference Rank 13/46)
- SWE-bench Multilingual: **77.3%** (Meituan card; Gemini 3.1 Pro 76.9*, Opus 4.6 77.8* on same card)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**
- Writing Bench: **83.8%** (Meituan card; productivity proxy, not pure code)

Long context:

- **No long-context retrieval reported at a stated window length** (hundreds of billions of 1M-context training tokens claimed; no MRCR/RULER/GraphWalks percentage at 512K/1M published)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 70.8 matching Gemini 3.1 Pro with FORTE 73.2 tying Opus 4.6 plus BrowseComp 79.9 / RWSearch 78.8; capped by trailing Opus 4.8/GPT-5.5 on TB2.1 and no Tau3/Claw runs.
- **Reasoning: 82/100.** GPQA 88.9 just under the 90% frontier bar with IFEval 90.0 and IMO 81.8; capped by clear gap to Gemini/GPT-5.5 on GPQA and no HLE/LCR/CritPt/Index runs.
- **Context window: 95/100.** 1M tier (1,048,576 in, 128K out vendor / 262K provider variance) with sparse-attention 1M training per tier mapping; capped below 100 with no 98%+ retrieval proof at 512K+.
- **Multimodal: 15/100.** Text-only in/out for 2.0 (vision arrived with 2.5 Preview); standard text-only floor.
- **Coding: 84/100.** SWE-Pro 59.5 beating Gemini 3.1 Pro/GPT-5.5/Opus 4.6 on same card with SWE-Multilingual 77.3 and TB2.1 70.8; capped by trailing Opus 4.7/4.8 and no LiveCode/SciCode/DeepSWE runs.
- **Cost efficiency: 90/100.** Paid $0.30/$1.20 ($0.006 cached) — budget coding rate well under $1+ frontier pricing; capped below $0 free tiers.
- **Overall Score: 72/100.** Mean of the five non-cost dims (82+82+95+15+84)/5 = 71.6 → 72; best-fit as budget open-weights coder/agent for repo-scale work, escalate to Opus-class for multimodal or top-end reasoning.

---

## Signature

- Provided by: **Muse Spark 1.3 (opencode/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (longcat.ai 2.0 blog, meituan-longcat/LongCat-2.0 GitHub + HF card, ModelCap #49, LLMReference, TPS report, LM Market Cap, Biggo finance repost of Tencent hands-on); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

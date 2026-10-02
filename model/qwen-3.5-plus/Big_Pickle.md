# Qwen 3.5 Plus — findings by Big Pickle

- Source: Alibaba (`opencode/qwen-3.5-plus`, Model Studio model `qwen3.5-plus`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba Cloud's hosted, accuracy-tuned value tier of the Qwen3.5 generation, released 2026-02-16 — the production deployment of the open-weight Qwen3.5-397B-A17B backbone with 1M context, built-in tools and adaptive tool use. Cheapest 1M-context multimodal agent model in this dataset; the open-weight 397B-A17B is tracked separately and is not an alias.
- **Provider / access:** Alibaba Cloud Model Studio (Bailian), model ID `qwen3.5-plus` (snapshot `qwen3.5-plus-2026-02-15`); also OpenRouter, Vercel AI Gateway, Merge Gateway, OrcaRouter. OpenCode Zen `opencode/qwen-3.5-plus`. OpenAI-compatible chat endpoint with per-request thinking / non-thinking toggle.
- **Release / knowledge:** released 2026-02-16 (Alibaba Cloud); knowledge cutoff not published for the hosted tier.
- **IDs:** `opencode/qwen-3.5-plus` (Zen, standard pricing); upstream `qwen3.5-plus`.
- **Context window:** 1,000,000 tokens total — max input 991,808, max output 65,536; thinking mode allows 983,616 input with up to 81,920 chain-of-thought tokens (Alibaba Cloud Model Studio docs).
- **Modalities:** text, image and video input (no file input per Vals.ai); text output; thinking/non-thinking modes; tool calls with built-in tools and adaptive tool use; no structured-output flag published on all routes.
- **Pricing (as of 2026-10-02):** Model Studio International $0.40 in / $2.40 out per 1M (input rises to $0.50 above 256K); China (Beijing) region $0.115 / $0.688 per 1M under 128K, tiering to $0.573 / $3.44 above 256K; explicit cache read $0.04/1M; batch ≈50%; OpenRouter from $0.30 / $1.80; 1M free tokens for 90 days on new accounts.
- **Architecture:** proprietary hosted variant of a sparse Mixture-of-Experts backbone (397B total / 17B active) with hybrid linear attention (Gated DeltaNet) plus full attention; open-weight sibling Qwen3.5-397B-A17B is self-hostable.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.5%** (Qwen3.5 generation table, 397B-A17B weights); **#11** on Vals.ai's Terminal-Bench 2.0 ranking
- HLE with tools: **48.3%** (Qwen3.5 generation table)
- Vals Finance Agent: **#8**; Corp Fin v2: **#6** (Vals.ai subset rankings)
- Tau3-Banking / Tau2-Bench / Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.4%** (#6 of 138 on Vals.ai)
- HLE: **28.7%**; HLE-Verified: **37.6%** (Qwen3.5 generation table)
- MMLU-Pro: **87.8%** (#9 on Vals.ai); MMLU-Redux: **94.9%**
- SuperGPQA: **70.4%**; C-Eval: **93.0%**
- AIME 2026: **91.3%**
- AA-LCR: **72.x%** (Qwen3.5 generation table; digit truncated in the source rendering — recorded as provisional)
- Vals Index overall: **57.1% accuracy, #10 overall / #3 among open-weight models**; MedQA #11

Coding:

- SWE-bench Verified: **76.4%** (#17 on Vals.ai's SWE-bench Verified subset; rank 38/81 on LLMReference)
- SWE-bench Multilingual: **69.3%**
- SecCodeBench: **68.3%**
- LiveCodeBench v6: **83.6%**
- Case Law v2: **#25** (Vals.ai — the weakest slice in its index mix)

Long context:

- AA-LCR: **72.x%** (Qwen3.5 generation table, provisional digit)
- No published MRCR / RULER / GraphWalks row for the Plus tier

### Normalized scores (1–100)

- **Tool use: 74/100.** Built-in tools plus adaptive tool use and a Terminal-Bench 2.0 #11 finish at 52.5% keep it competitive on agentic coding, with HLE-with-tools 48.3% confirming tool-augmented reasoning; capped by the absence of any Tau3, Toolathon or MCP-Atlas measurement and by terminal work that trails the 80%+ frontier entries.
- **Reasoning: 76/100.** GPQA Diamond 88.4% (#6), MMLU-Pro 87.8%, MMLU-Redux 94.9%, SuperGPQA 70.4% and AIME 2026 91.3% show broad academic strength; capped by HLE 28.7% and HLE-Verified 37.6%, far below the 48–57% of the frontier flagships.
- **Context window: 86/100.** A verified 1,000,000-token window with 991,808 max input and 65,536 max output, plus an 81,920-token thinking budget; AA-LCR around 72% is a real but mid-tier retrieval result, so it lands below the entries with 95%+ measured 1M retention.
- **Multimodal: 88/100.** Native text, image and short-video input with text output — one of the few models here with video ingestion — and an MMMU of 85% (Alibaba's Qwen3.5 series documents a large multimodal jump over Qwen3-VL); capped only by no published document/PDF-specific figure.
- **Coding: 78/100.** SWE-bench Verified 76.4%, LiveCodeBench v6 83.6% and SecCodeBench 68.3% are solid mid-frontier coding; capped by SWE-bench Multilingual 69.3%, Terminal-Bench 2.0 52.5% and an observed 10m36s Vals.ai latency on hard agentic tasks.
- **Cost efficiency: 95/100.** $0.40/$2.40 per 1M on Model Studio International (from $0.30/$1.80 on OpenRouter), $0.115/$0.688 in the China region, a $0.04/1M cache-read rate, 50% batch pricing and 1M free tokens for 90 days — with the 2027 caveat that no free Zen ID is documented.
- **Overall Score: 80.4/100.** Half-up mean of the five quality dims. Best fit as a high-volume 1M-context multimodal agent/RAG backbone where per-token cost dominates, with the China region or OpenRouter routes the obvious cost levers.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Alibaba Cloud Model Studio docs and Qwen3.5 announcement blog, Vals.ai model page, LLMReference, models.dev, Vercel AI Gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.

---